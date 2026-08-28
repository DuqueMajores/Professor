import React, { useState, useEffect, useRef } from "react";
import { UserLanguages, ChatMessage, MessageType, ExerciseStartData, ExerciseFeedbackData, CorrectionItem } from "./types";
import { translations, normalizeLanguage } from "./utils/translations";
import LanguageSelector from "./components/LanguageSelector";
import Sidebar from "./components/Sidebar";
import { 
  Menu, 
  Send, 
  Globe, 
  AlertCircle, 
  Sparkles, 
  BookOpen, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  HelpCircle,
  Play,
  RotateCcw
} from "lucide-react";

// Helper functions to extract incorrect phrases from professor corrections and highlight them
function getIncorrectPhrases(corrections: string[]): string[] {
  const incorrects: string[] = [];
  for (const corr of corrections) {
    const match = corr.match(/(?:em vez de|instead of|a|de)\s+['"“]([^'"”]+)['"”]/i) || corr.match(/['"“]([^'"”]+)['"”]\s+(?:em vez de|instead of)/i);
    if (match && match[1]) {
      incorrects.push(match[1]);
    } else {
      const quotes = [...corr.matchAll(/['"“]([^'"”]+)['"”]/g)];
      if (quotes.length >= 2) {
        incorrects.push(quotes[1][1]);
      } else if (quotes.length === 1) {
        incorrects.push(quotes[0][1]);
      }
    }
  }
  return incorrects.filter(Boolean);
}

function renderHighlightedText(text: string, corrections: string[]) {
  const incorrects = getIncorrectPhrases(corrections);
  if (incorrects.length === 0) {
    return <span>"{text}"</span>;
  }

  const escaped = incorrects
    .map(inc => inc.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'))
    .filter(inc => inc.trim().length > 0);

  if (escaped.length === 0) {
    return <span>"{text}"</span>;
  }

  const regex = new RegExp(`(${escaped.join('|')})`, 'gi');
  const parts = text.split(regex);

  return (
    <span>
      "
      {parts.map((part, index) => {
        const isMatch = incorrects.some(inc => inc.toLowerCase() === part.toLowerCase());
        if (isMatch) {
          return (
            <span 
              key={index} 
              className="bg-red-200 text-red-800 font-semibold px-1 rounded mx-0.5 line-through decoration-red-950 decoration-2"
              title="Identificado com erro"
            >
              {part}
            </span>
          );
        }
        return <span key={index}>{part}</span>;
      })}
      "
    </span>
  );
}

export default function App() {
  // Configuração inicial de idiomas
  const [userLanguages, setUserLanguages] = useState<UserLanguages | null>(() => {
    const stored = localStorage.getItem("professor_languages");
    return stored ? JSON.parse(stored) : null;
  });

  // Idioma ativo na interface: "target" (o que está aprendendo) ou "source" (origem)
  const [activeUILanguage, setActiveUILanguage] = useState<"target" | "source">("target");

  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const stored = localStorage.getItem("professor_messages");
    return stored ? JSON.parse(stored) : [];
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  // Estado específico do exercício ativo
  const [exerciseState, setExerciseState] = useState<{
    phase: "none" | "active";
    topic: string;
    instruction: string;
    lastAnswer: string;
  }>(() => {
    const stored = localStorage.getItem("professor_exercise_state_v2");
    return stored ? JSON.parse(stored) : {
      phase: "none",
      topic: "",
      instruction: "",
      lastAnswer: "",
    };
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sincronização com LocalStorage
  useEffect(() => {
    if (userLanguages) {
      localStorage.setItem("professor_languages", JSON.stringify(userLanguages));
    } else {
      localStorage.removeItem("professor_languages");
    }
  }, [userLanguages]);

  useEffect(() => {
    localStorage.setItem("professor_messages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem("professor_exercise_state_v2", JSON.stringify(exerciseState));
  }, [exerciseState]);

  // Rolagem suave para o fim do chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Se nenhum idioma configurado, mostra tela de boas-vindas/seleção
  if (!userLanguages) {
    return (
      <LanguageSelector
        onSave={(langs) => {
          setUserLanguages(langs);
          setActiveUILanguage("target");
          const code = normalizeLanguage(langs.target);
          const currentDict = translations[code] || translations.en;
          setMessages([
            {
              id: "welcome",
              role: "assistant",
              content: currentDict.welcomeMessage,
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              type: "text",
            }
          ]);
        }}
      />
    );
  }

  // Obter o dicionário ativo com base no idioma selecionado
  const uiLangCode = activeUILanguage === "target" ? normalizeLanguage(userLanguages.target) : normalizeLanguage(userLanguages.source);
  const dict = translations[uiLangCode] || translations.pt;

  const handleLanguageReset = () => {
    setUserLanguages(null);
    setMessages([]);
    setExerciseState({
      phase: "none",
      topic: "",
      instruction: "",
      lastAnswer: "",
    });
    localStorage.clear();
  };

  const handleClearChat = () => {
    const code = normalizeLanguage(userLanguages.target);
    const currentDict = translations[code] || translations.en;
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content: currentDict.welcomeMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: "text",
      }
    ]);
    setExerciseState({
      phase: "none",
      topic: "",
      instruction: "",
      lastAnswer: "",
    });
    localStorage.removeItem("professor_messages");
    localStorage.removeItem("professor_exercise_state_v2");
  };

  // Iniciar novo exercício Fale Sobre
  const handleStartExercise = async () => {
    setIsLoading(true);
    setApiError(null);

    try {
      const res = await fetch("/api/exercise/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          targetLanguage: userLanguages.target,
          sourceLanguage: userLanguages.source,
          level: userLanguages.level,
        }),
      });

      if (!res.ok) {
        const errData = await res.json();
        if (errData.error === "API_KEY_MISSING") {
          setApiError("key_missing");
          setIsLoading(false);
          return;
        }
        throw new Error(errData.message || "Erro ao iniciar exercício");
      }

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          id: `ex_start_${Date.now()}`,
          role: "assistant",
          content: data.instruction,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          type: "exercise_start",
          exerciseData: {
            text: data.text,
            instruction: data.instruction,
          },
        },
      ]);

      setExerciseState({
        phase: "active",
        topic: data.text,
        instruction: data.instruction,
        lastAnswer: "",
      });
    } catch (err: any) {
      console.error(err);
      setApiError(err.message || "generic");
    } finally {
      setIsLoading(false);
    }
  };

  // Enviar a resposta do aluno para avaliação e feedback contínuo
  const handleSendExerciseAnswer = async (answer: string) => {
    if (!answer.trim()) return;
    setIsLoading(true);
    setInputValue("");
    setApiError(null);

    const userMsgId = `user_${Date.now()}`;
    setMessages((prev) => [
      ...prev,
      {
        id: userMsgId,
        role: "user",
        content: answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: "text",
      },
    ]);

    try {
      const res = await fetch("/api/exercise/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          targetLanguage: userLanguages.target,
          level: userLanguages.level,
          topic: exerciseState.topic,
          studentAnswer: answer,
        }),
      });

      if (!res.ok) {
        const errData = await res.json();
        if (errData.error === "API_KEY_MISSING") {
          setApiError("key_missing");
          setIsLoading(false);
          return;
        }
        throw new Error(errData.message || "Erro na avaliação");
      }

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          id: `ex_feedback_${Date.now()}`,
          role: "assistant",
          content: data.message,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          type: "exercise_feedback",
          exerciseData: data,
        },
      ]);

      setExerciseState((prev) => ({
        ...prev,
        phase: data.hasErrors ? "active" : "none",
        lastAnswer: answer,
      }));
    } catch (err: any) {
      console.error(err);
      setApiError(err.message || "generic");
    } finally {
      setIsLoading(false);
    }
  };

  // Chat Conversacional Geral
  const handleSendTextMessage = async (text: string) => {
    if (!text.trim()) return;
    setIsLoading(true);
    setInputValue("");
    setApiError(null);

    // Adiciona mensagem do usuário
    const userMsg: ChatMessage = {
      id: `user_chat_${Date.now()}`,
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: "text",
    };

    setMessages((prev) => [...prev, userMsg]);

    try {
      // Pega histórico recente para dar contexto à IA (filtra apenas mensagens de texto comuns para simplificar)
      const recentHistory = messages
        .filter((m) => m.type === "text")
        .slice(-6)
        .map((m) => ({
          role: m.role,
          content: m.content,
        }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          targetLanguage: userLanguages.target,
          sourceLanguage: userLanguages.source,
          level: userLanguages.level,
          message: text,
          history: recentHistory,
        }),
      });

      if (!res.ok) {
        const errData = await res.json();
        if (errData.error === "API_KEY_MISSING") {
          setApiError("key_missing");
          setIsLoading(false);
          return;
        }
        throw new Error(errData.message || "Erro na conversa");
      }

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          id: `assistant_chat_${Date.now()}`,
          role: "assistant",
          content: data.response,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          type: "text",
        },
      ]);
    } catch (err: any) {
      console.error(err);
      setApiError(err.message || "generic");
    } finally {
      setIsLoading(false);
    }
  };

  // Botão "Explique" rápido para o input
  const handleQuickExplain = () => {
    const code = normalizeLanguage(userLanguages.target);
    const explainPrompt = code === "ja" ? "日本語で説明してください" : code === "es" ? "Explícamelo" : "Explain this to me";
    handleSendTextMessage(explainPrompt);
  };

  // Submissão do Input Principal (Controlado dependendo do estado do exercício)
  const handleSubmitInput = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    if (exerciseState.phase === "active") {
      handleSendExerciseAnswer(inputValue);
    } else {
      handleSendTextMessage(inputValue);
    }
  };

  return (
    <div className="flex h-screen bg-white text-[#111111] antialiased overflow-hidden font-sans">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        dict={dict}
        userLanguages={userLanguages}
      />

      {/* Main Panel */}
      <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#FAFAFA] relative">
        
        {/* Top Header Bar */}
        <header className="h-20 border-b border-[#EDEDED] bg-white flex items-center justify-between px-6 md:px-10 flex-shrink-0 z-10">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden p-2 border border-[#EDEDED] rounded-full text-black hover:bg-[#F8F8F8] cursor-pointer"
            >
              <Menu className="w-4 h-4" />
            </button>
            <div className="flex items-center space-x-2 text-xs text-[#666666]">
              <span className="font-semibold text-black">{dict.faleSobre}</span>
              <span>/</span>
              <span className="capitalize">{userLanguages.target} ({userLanguages.level})</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Voltar para seleção de idiomas */}
            <button
              onClick={handleLanguageReset}
              className="flex items-center space-x-1 px-3 py-2 border border-[#EDEDED] rounded-full hover:bg-black hover:text-white transition-colors text-xs font-semibold text-[#666666] hover:text-white cursor-pointer"
              title="Voltar para seleção de idiomas"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Alterar Idioma</span>
            </button>

            {/* Modalidade de Estudo / Botões de Ação no Topo */}
            {exerciseState.phase === "none" ? (
              <>
                <button
                  onClick={handleStartExercise}
                  disabled={isLoading}
                  className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs font-semibold transition-all shadow-sm cursor-pointer disabled:opacity-50"
                >
                  <Play className="w-2.5 h-2.5 fill-white text-white" />
                  <span>{dict.startExercise}</span>
                </button>
                
                <button
                  onClick={() => handleSendTextMessage("Quero conversar um pouco")}
                  disabled={isLoading}
                  className="px-4 py-2 bg-[#EDF5FD] hover:bg-[#D6E6F7] text-[#1E3A8A] border border-[#D6E6F7] rounded-full text-xs font-semibold transition-all cursor-pointer shadow-sm disabled:opacity-50"
                >
                  Bate-Papo Livre
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => setExerciseState({
                  phase: "none",
                  originalText: "",
                  instruction: "",
                  firstAnswer: "",
                  secondAnswer: "",
                })}
                className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 rounded-full text-xs font-semibold transition-all cursor-pointer shadow-sm"
              >
                Cancelar Exercício
              </button>
            )}

            {/* Limpar Histórico do Chat */}
            <button
              onClick={handleClearChat}
              className="p-2 border border-[#EDEDED] rounded-full hover:bg-black hover:text-white transition-colors cursor-pointer text-[#999999] hover:text-white"
              title="Limpar Histórico do Chat"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </header>

        {/* Conversation Feed */}
        <div className="flex-1 overflow-y-auto px-6 md:px-10 py-10">
          <div className="max-w-3xl space-y-8 pb-36">
            
            {/* API Error Warning Box */}
            {apiError && (
              <div className="p-4 bg-white border border-red-200 rounded-2xl flex flex-col gap-1.5 text-xs text-red-600 animate-in fade-in duration-200 shadow-sm">
                <div className="flex gap-3 items-center">
                  <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span className="font-semibold">
                    {apiError === "key_missing" ? dict.apiKeyErrorTitle : dict.errorGeneric}
                  </span>
                </div>
                {apiError !== "generic" && (
                  <p className="pl-7 text-[11px] text-red-500/70 font-mono break-all leading-normal">
                    {apiError === "key_missing" ? dict.apiKeyErrorDesc : apiError}
                  </p>
                )}
              </div>
            )}

            {/* Message History rendering */}
            {messages.map((message) => {
              const isAssistant = message.role === "assistant";

              return (
                <div
                  key={message.id}
                  className={`flex flex-col ${isAssistant ? "items-start" : "items-end"} space-y-1.5`}
                >
                  {/* Timestamp & Sender */}
                  <span className="text-[10px] uppercase tracking-widest text-[#999999] px-1 font-semibold">
                    {isAssistant ? "Professor" : "Você"} • {message.timestamp}
                  </span>

                  {/* Standard Text Response */}
                  {message.type === "text" && (
                    <div
                      className={`max-w-[85%] px-5 py-3.5 rounded-2xl text-sm leading-relaxed border shadow-sm ${
                        isAssistant
                          ? "bg-white border-[#EDEDED] text-[#111111] rounded-tl-none"
                          : "bg-[#EDF5FD] border-[#D6E6F7] text-[#1E3A8A] rounded-tr-none"
                      }`}
                    >
                      {message.content}
                    </div>
                  )}

                  {/* Phase 1: Exercise Start Card */}
                  {message.type === "exercise_start" && message.exerciseData && (
                    <div className="w-full bg-white border border-[#EDEDED] p-8 rounded-2xl shadow-sm space-y-6 animate-in fade-in zoom-in-95 duration-200">
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] uppercase tracking-widest text-[#999999] font-bold">{dict.exerciseTitle || "Texto Original"}</span>
                        <span className="text-[10px] text-[#999999] font-mono font-medium">
                          {Math.round(((message.exerciseData as ExerciseStartData).text || "").split(/\s+/).length)} palavras
                        </span>
                      </div>
                      <p className="text-lg leading-relaxed font-serif text-[#333333] italic">
                        "{(message.exerciseData as ExerciseStartData).text}"
                      </p>
                      <div className="border-t border-[#EDEDED] pt-4 mt-4">
                        <span className="text-[10px] uppercase tracking-widest text-[#999999] block mb-2 font-bold">Instrução</span>
                        <p className="text-sm text-[#333333] font-medium leading-relaxed bg-[#F8F8F8] border border-[#EDEDED]/50 p-4 rounded-xl">
                          {(message.exerciseData as ExerciseStartData).instruction}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Phase 2: Exercise Feedback & Corrections Card */}
                  {message.type === "exercise_feedback" && message.exerciseData && (
                    <div className="w-full space-y-4 animate-in fade-in duration-200 text-left">
                      
                      {/* Teacher message explanation text */}
                      <div className="bg-white border border-[#EDEDED] p-6 rounded-2xl shadow-sm">
                        <span className="text-[10px] uppercase tracking-widest text-[#999999] font-bold block mb-2">Professor</span>
                        <p className="text-sm leading-relaxed text-[#111111] whitespace-pre-wrap">
                          {message.content}
                        </p>
                      </div>

                      {/* Corrections list if they exist */}
                      {(message.exerciseData as ExerciseFeedbackData).corrections && (message.exerciseData as ExerciseFeedbackData).corrections.length > 0 && (
                        <div className="bg-white border border-[#EDEDED] p-6 rounded-2xl shadow-sm space-y-4">
                          <p className="text-[10px] uppercase tracking-widest text-red-500 font-bold">
                            {uiLangCode === "ja" ? "推奨される修正" : "Correções Recomendadas"}
                          </p>
                          <div className="divide-y divide-[#EDEDED] border-t border-[#EDEDED]/60">
                            {(message.exerciseData as ExerciseFeedbackData).corrections.map((corr, i) => (
                              <div key={i} className="py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-3 text-sm">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="line-through text-red-700 font-medium bg-red-50 px-2 py-0.5 rounded text-xs border border-red-100">
                                    {corr.original}
                                  </span>
                                  <span className="text-[#999999] text-xs">→</span>
                                  <span className="text-green-800 font-semibold bg-green-50 px-2 py-0.5 rounded text-xs border border-green-100">
                                    {corr.corrected}
                                  </span>
                                </div>
                                <p className="text-xs text-[#666666] leading-relaxed md:max-w-[50%]">
                                  {corr.explanation}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Quick action button for new exercise when user completed perfectly */}
                      {!(message.exerciseData as ExerciseFeedbackData).hasErrors && (
                        <div className="flex justify-start pt-2">
                          <button
                            onClick={handleStartExercise}
                            className="px-6 py-3 bg-black hover:bg-neutral-800 text-white rounded-full text-xs font-bold uppercase tracking-wider text-center cursor-pointer transition-colors shadow-sm"
                          >
                            {dict.newExercise || "Novo Exercício"}
                          </button>
                        </div>
                      )}

                    </div>
                  )}

                </div>
              );
            })}

            {/* Professor Typing Loader */}
            {isLoading && (
              <div className="flex flex-col items-start space-y-1.5">
                <span className="text-[10px] uppercase tracking-widest text-[#999999] px-1 font-semibold">Professor • {dict.typingIndicator || "Escrevendo..."}</span>
                <div className="bg-white border border-[#EDEDED] text-[#999999] text-xs py-2.5 px-4 rounded-2xl flex items-center gap-2 shadow-sm">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Dock Area */}
        <div className="absolute bottom-0 inset-x-0 bg-white border-t border-[#EDEDED] h-24 flex items-center px-6 md:px-10 z-10">
          <div className="w-full max-w-3xl relative space-y-2">
            
            {/* Context/Stage Prompt Helper bar */}
            {exerciseState.phase === "active" && (
              <div className="absolute top-[-30px] left-0 right-0 flex items-center justify-between px-4 py-1 bg-[#EDF5FD] text-[#1E3A8A] text-[10px] rounded-t-lg border-x border-t border-[#D6E6F7]">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                  <span className="font-bold uppercase tracking-wider text-[#1E40AF]/80">
                    {uiLangCode === "ja" ? "練習中" : "Exercício Ativo"}
                  </span>
                </div>
                <div className="text-[#1E40AF]/60 font-semibold truncate max-w-[70%]">
                  {exerciseState.topic}
                </div>
              </div>
            )}

            {/* Main Interactive Form */}
            <form onSubmit={handleSubmitInput} className="relative flex items-center w-full">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={
                  exerciseState.phase === "active"
                    ? (uiLangCode === "ja" ? "ここに回答を入力してください..." : "Escreva sua resposta...")
                    : dict.placeholderMessage
                }
                disabled={isLoading}
                className="w-full py-4 pl-6 pr-44 bg-[#F8F8F8] border border-[#EDEDED] rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:border-black focus:bg-white transition-all disabled:opacity-60"
              />

              <div className="absolute right-3 top-2.5 bottom-2.5 flex items-center gap-2">
                {/* Explain helper button */}
                <button
                  type="button"
                  onClick={handleQuickExplain}
                  disabled={isLoading}
                  className="hidden sm:flex items-center gap-1 px-3 py-1 bg-white hover:bg-[#F8F8F8] text-[11px] font-semibold text-slate-700 rounded-md border border-[#EDEDED] transition-all disabled:opacity-50 cursor-pointer"
                  title="Solicitar explicação didática em linguagem natural"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-[#999999]" />
                  <span>{dict.btnExplain}</span>
                </button>

                {/* Send button */}
                <button
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  className="h-full px-5 bg-black text-white rounded-lg text-xs font-semibold uppercase tracking-wide disabled:bg-slate-200 disabled:text-slate-400 hover:opacity-90 transition-all cursor-pointer flex items-center justify-center"
                >
                  {dict.btnSend || "Enviar"}
                </button>
              </div>
            </form>



          </div>
        </div>

      </div>
    </div>
  );
}
