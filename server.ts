import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

// Lazy initialization of the GoogleGenAI instance to prevent crash on startup if key is missing
let aiClient: GoogleGenAI | null = null;

function getAI(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is missing. Please configure it in your Secrets / Environment Settings.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // 1. Chat Conversacional Geral com Professor (com correção gramatical no próprio idioma de destino)
  app.post("/api/chat", async (req, res, next) => {
    try {
      const { targetLanguage, sourceLanguage, level, message, history } = req.body;

      if (!targetLanguage || !message) {
        return res.status(400).json({ error: "MISSING_FIELDS", message: "Idioma e mensagem são obrigatórios." });
      }

      if (!process.env.GEMINI_API_KEY) {
        return res.status(400).json({ error: "API_KEY_MISSING", message: "GEMINI_API_KEY não configurada." });
      }

      // Instrução de sistema para o tutor
      const systemInstruction = `You are a professional, helpful, and friendly personal language teacher.
The student's native/source language is "${sourceLanguage}".
The student is learning "${targetLanguage}" and is currently at proficiency level: "${level}".

CRITICAL DIRECTIVE: You must write your entire message in "${targetLanguage}". Your greetings, feedback, and replies must be exclusively in "${targetLanguage}". Do not use "${sourceLanguage}" unless explicitly asked for a translation or explanation.

Your message structure should always be:
1. If the student made any small spelling, grammar, punctuation, or word choice errors in their last message in "${targetLanguage}", gently point out the corrections at the very beginning of your message in a highly readable, elegant, and polite way.
2. Reply directly to the student's message in "${targetLanguage}" to keep the conversation going naturally, keeping your vocabulary and syntax appropriate for their level (${level}).
3. Ask a friendly, engaging follow-up question in "${targetLanguage}" to prompt the student to write back.`;

      // Formatar histórico para o Gemini SDK
      const contents = [];
      if (history && Array.isArray(history)) {
        for (const h of history) {
          contents.push({
            role: h.role === "user" ? "user" : "model",
            parts: [{ text: h.content }]
          });
        }
      }

      // Adicionar mensagem atual
      contents.push({
        role: "user",
        parts: [{ text: message }]
      });

      const response = await getAI().models.generateContent({
        model: "gemini-2.5-flash",
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });

      const replyText = response.text || "I apologize, I could not generate a response. Please try again.";
      return res.json({ response: replyText });
    } catch (err) {
      next(err);
    }
  });

  // 2. Iniciar Exercício (Geração dinâmica de tópicos)
  app.post("/api/exercise/start", async (req, res, next) => {
    try {
      const { targetLanguage, level } = req.body;

      if (!targetLanguage) {
        return res.status(400).json({ error: "MISSING_FIELDS", message: "Idioma de destino é obrigatório." });
      }

      if (!process.env.GEMINI_API_KEY) {
        return res.status(400).json({ error: "API_KEY_MISSING", message: "GEMINI_API_KEY não configurada." });
      }

      const prompt = `You are a professional language teacher. 
Generate a level-appropriate writing topic/exercise for a student studying "${targetLanguage}".
The student's level is "${level}".

Generate a creative topic. It could be about daily routines, travel, family, hobbies, opinion on a simple matter, or a hypothetical situation.

You MUST respond strictly with a valid JSON object matching this schema:
{
  "text": "The theme/topic title in ${targetLanguage}",
  "instruction": "Detailed instructions on what the student should write about, entirely in ${targetLanguage}"
}

Do not include any markdown, code block markers, or extra text. Output ONLY the raw JSON string.`;

      const response = await getAI().models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.8,
        }
      });

      const data = JSON.parse(response.text || "{}");
      return res.json({
        text: data.text || "My Favorite Food",
        instruction: data.instruction || `Please write a short text in ${targetLanguage} about your favorite food.`
      });
    } catch (err) {
      next(err);
    }
  });

  // 3. Avaliação Simplificada de Resposta (Loop contínuo de correção de palavras erradas)
  app.post("/api/exercise/evaluate", async (req, res, next) => {
    try {
      const { targetLanguage, level, topic, studentAnswer } = req.body;

      if (!targetLanguage || !studentAnswer) {
        return res.status(400).json({ error: "MISSING_FIELDS", message: "Resposta do aluno é obrigatória." });
      }

      if (!process.env.GEMINI_API_KEY) {
        return res.status(400).json({ error: "API_KEY_MISSING", message: "GEMINI_API_KEY não configurada." });
      }

      const prompt = `You are a professional language teacher of "${targetLanguage}". 
A student of level "${level}" has submitted a text on the topic: "${topic}".
Their answer is: "${studentAnswer}".

Your job is to check their text for errors (grammar, spelling, vocabulary, prepositions, particles, word order, etc.) in "${targetLanguage}".
Specifically identify wrong words or phrases, suggest corrections, and explain them briefly in "${targetLanguage}".

If they have errors:
- set "hasErrors" to true.
- fill "corrections" array.
- write an encouraging message in "message" entirely in "${targetLanguage}", politely pointing out that they have some mistakes and explicitly asking them to rewrite their answer and submit it again to practice (e.g. "Excellent try! Please rewrite your text correcting the wrong words and try again.").

If they have absolutely NO errors and their text is natural and perfect:
- set "hasErrors" to false.
- keep "corrections" empty.
- write a celebratory message in "message" entirely in "${targetLanguage}" praising their flawless writing and saying they are ready for a new exercise.

You MUST respond strictly with a valid JSON object matching this schema:
{
  "hasErrors": boolean,
  "corrections": [
    {
      "original": "the exact wrong word or phrase from the student's answer",
      "corrected": "the corrected word or phrase in ${targetLanguage}",
      "explanation": "brief, clear explanation of why it was wrong and how it was fixed, written completely in ${targetLanguage}"
    }
  ],
  "message": "The professor's message to the student, written completely in ${targetLanguage}"
}

Do not include any markdown formatting, code blocks, or extra comments outside of the JSON.`;

      const response = await getAI().models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.3,
        }
      });

      const data = JSON.parse(response.text || "{}");
      return res.json({
        hasErrors: data.hasErrors ?? false,
        corrections: data.corrections || [],
        message: data.message || "Muito bem! Continue praticando.",
        topic: topic,
        studentAnswer: studentAnswer
      });
    } catch (err) {
      next(err);
    }
  });

  // Servir o frontend Vite
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  // Register Express error handling middleware at the very end
  app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error("Express Error Handler:", err);

    let message = err.message || "Ocorreu um erro interno no servidor.";
    
    // Check if the error indicates quota exceeded / rate limit / 429
    const isQuota = 
      err.status === 429 || 
      err.statusCode === 429 || 
      message.includes("429") ||
      message.includes("quota") || 
      message.includes("quotaExceeded") ||
      message.includes("RESOURCE_EXHAUSTED") ||
      message.includes("limit") ||
      (err.error && (err.error.status === "RESOURCE_EXHAUSTED" || err.error.code === 429));

    const isKeyInvalid = 
      err.status === 400 || 
      err.status === 401 || 
      err.status === 403 ||
      message.includes("API_KEY_INVALID") || 
      message.includes("key is invalid") || 
      (message.includes("not found") && message.includes("API"));

    if (isQuota) {
      return res.status(429).json({
        error: "QUOTA_EXHAUSTED",
        message: "O limite de uso ou cota diária gratuita do Gemini foi temporariamente excedido. Por favor, tente novamente em alguns segundos ou adicione uma chave de API nas configurações."
      });
    }

    if (isKeyInvalid) {
      return res.status(401).json({
        error: "INVALID_API_KEY",
        message: "A chave de API configurada é inválida ou expirou. Por favor, revise as suas configurações e tente novamente."
      });
    }

    // If it is a stringified JSON containing an error message, extract it
    if (typeof message === "string" && message.startsWith("{") && message.endsWith("}")) {
      try {
        const parsed = JSON.parse(message);
        if (parsed.error && parsed.error.message) {
          message = parsed.error.message;
        } else if (parsed.message) {
          message = parsed.message;
        }
      } catch (e) {
        // Not valid JSON, keep original
      }
    }

    // Limit length and keep it human readable
    if (message.length > 250) {
      message = message.substring(0, 247) + "...";
    }

    res.status(500).json({
      error: "INTERNAL_ERROR",
      message: message
    });
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Professor API] Servidor rodando na porta ${PORT}`);
  });
}

startServer();
