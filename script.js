// Translations Dictionary
const translations = {
  pt: {
    appName: "Professor",
    studySection: "Estudo",
    faleSobre: "Fale Sobre",
    comingSoon: "Em breve",
    conversacao: "Conversação",
    vocabulario: "Vocabulário",
    gramatica: "Gramática",
    traducao: "Tradução",
    escuta: "Escuta",
    pronuncia: "Pronúncia",
    revisao: "Revisão",
    startExercise: "Começar Exercício",
    newExercise: "Novo exercício",
    placeholderMessage: "Escreva sua resposta ou converse com o professor...",
    setupTitle: "Seu Professor Particular de Idiomas",
    setupSubtitle: "Um ambiente de aprendizado minimalista guiado por Inteligência Artificial.",
    targetLangLabel: "Qual idioma você quer aprender?",
    targetLangPlaceholder: "ex: Inglês, Francês, Japonês...",
    sourceLangLabel: "Qual é o seu idioma de origem?",
    sourceLangPlaceholder: "ex: Português, Espanhol...",
    levelLabel: "Seu nível atual no idioma",
    levelBasic: "Básico",
    levelIntermediate: "Intermediário",
    levelAdvanced: "Avançado",
    btnStart: "Começar a estudar",
    btnExplain: "Explique",
    btnToggleLang: "Mudar idioma",
    emptyError: "Por favor, digite os dois idiomas para prosseguir.",
    apiKeyErrorTitle: "Chave de API ausente",
    apiKeyErrorDesc: "Por favor, adicione a chave do Gemini nas configurações para habilitar o professor na nuvem, ou utilize o Ollama Local.",
    errorGeneric: "Houve um erro ao conectar-se com o professor. Por favor, tente novamente.",
    welcomeMessage: "Olá! Sou seu professor particular de idiomas. Vamos começar nossa jornada? Clique em 'Começar Exercício' para praticarmos ou sinta-se à vontade para me enviar qualquer mensagem!",
    exerciseTitle: "Exercício: Fale Sobre",
    interpretationLabel: "Sua interpretação:",
    rewriteLabel: "Sua reescrita:",
    evaluationTitle: "Avaliação do Professor",
    scoreTitle: "Nota Final",
    btnSend: "Enviar",
    typingIndicator: "Professor está digitando..."
  },
  en: {
    appName: "Professor",
    studySection: "Study",
    faleSobre: "Speak About",
    comingSoon: "Soon",
    conversacao: "Conversation",
    vocabulario: "Vocabulary",
    gramatica: "Grammar",
    traducao: "Translation",
    escuta: "Listening",
    pronuncia: "Pronunciation",
    revisao: "Review",
    startExercise: "Start Exercise",
    newExercise: "New exercise",
    placeholderMessage: "Write your answer or chat with the teacher...",
    setupTitle: "Your Personal Language Tutor",
    setupSubtitle: "A minimalist learning environment guided by Artificial Intelligence.",
    targetLangLabel: "Which language do you want to learn?",
    targetLangPlaceholder: "e.g., English, French, Japanese...",
    sourceLangLabel: "What is your native language?",
    sourceLangPlaceholder: "e.g., Portuguese, Spanish...",
    levelLabel: "Your current level",
    levelBasic: "Basic",
    levelIntermediate: "Intermediate",
    levelAdvanced: "Advanced",
    btnStart: "Start studying",
    btnExplain: "Explain",
    btnToggleLang: "Toggle language",
    emptyError: "Please enter both languages to proceed.",
    apiKeyErrorTitle: "API Key missing",
    apiKeyErrorDesc: "Please add the Gemini API key in the settings to enable cloud teaching, or use Local Ollama.",
    errorGeneric: "An error occurred while connecting with the teacher. Please try again.",
    welcomeMessage: "Hello! I am your personal language tutor. Ready to start? Click 'Start Exercise' to practice or feel free to send me any message!",
    exerciseTitle: "Exercise: Speak About",
    interpretationLabel: "Your interpretation:",
    rewriteLabel: "Your rewrite:",
    evaluationTitle: "Teacher's Evaluation",
    scoreTitle: "Final Grade",
    btnSend: "Send",
    typingIndicator: "Teacher is typing..."
  },
  fr: {
    appName: "Professeur",
    studySection: "Étude",
    faleSobre: "Parler de",
    comingSoon: "Bientôt",
    conversacao: "Conversation",
    vocabulario: "Vocabulaire",
    gramatica: "Grammaire",
    traducao: "Traduction",
    escuta: "Écoute",
    pronuncia: "Prononciation",
    revisao: "Révision",
    startExercise: "Commencer l'exercice",
    newExercise: "Nouvel exercice",
    placeholderMessage: "Écrivez votre réponse ou discutez avec le professeur...",
    setupTitle: "Votre professeur de langue particulier",
    setupSubtitle: "Un espace d'apprentissage minimaliste guidé par l'intelligence artificielle.",
    targetLangLabel: "Quelle langue voulez-vous apprendre ?",
    targetLangPlaceholder: "ex : Anglais, Français, Japonais...",
    sourceLangLabel: "Quelle est votre langue maternelle ?",
    sourceLangPlaceholder: "ex : Portugais, Espagnol...",
    levelLabel: "Votre niveau actuel",
    levelBasic: "Débutant",
    levelIntermediate: "Intermédiaire",
    levelAdvanced: "Avancé",
    btnStart: "Commencer l'étude",
    btnExplain: "Expliquer",
    btnToggleLang: "Changer de langue",
    emptyError: "Veuillez saisir les deux langues pour continuer.",
    apiKeyErrorTitle: "Clé API manquante",
    apiKeyErrorDesc: "Veuillez ajouter la clé Gemini API dans les paramètres pour activer l'IA sur le cloud, ou utilisez Ollama local.",
    errorGeneric: "Une erreur est survenue lors de la communication avec le professeur. Veuillez réessayer.",
    welcomeMessage: "Bonjour ! Je suis votre professeur de langue particulier. Prêt à commencer ? Cliquez sur 'Commencer l'exercice' pour pratiquer, ou écrivez-moi n'importe quel message !",
    exerciseTitle: "Exercice : Parler de",
    interpretationLabel: "Votre interprétation :",
    rewriteLabel: "Votre réécriture :",
    evaluationTitle: "Évaluation du professeur",
    scoreTitle: "Note finale",
    btnSend: "Envoyer",
    typingIndicator: "Le professeur écrit..."
  },
  es: {
    appName: "Profesor",
    studySection: "Estudio",
    faleSobre: "Hablar sobre",
    comingSoon: "Pronto",
    conversacao: "Conversación",
    vocabulario: "Vocabulario",
    gramatica: "Gramática",
    traducao: "Traducción",
    escuta: "Escucha",
    pronuncia: "Pronunciación",
    revisao: "Revisión",
    startExercise: "Comenzar Ejercicio",
    newExercise: "Nuevo ejercicio",
    placeholderMessage: "Escribe tu respuesta o habla con el profesor...",
    setupTitle: "Tu Profesor Particular de Idiomas",
    setupSubtitle: "Un entorno de aprendizaje minimalista guiado por Inteligencia Artificial.",
    targetLangLabel: "¿Qué idioma quieres aprender?",
    targetLangPlaceholder: "ej: Inglés, Francés, Japonés...",
    sourceLangLabel: "¿Cuál es tu idioma nativo?",
    sourceLangPlaceholder: "ej: Portugués, Español...",
    levelLabel: "Tu nivel actual",
    levelBasic: "Básico",
    levelIntermediate: "Intermedio",
    levelAdvanced: "Avanzado",
    btnStart: "Empezar a estudiar",
    btnExplain: "Explicar",
    btnToggleLang: "Cambiar idioma",
    emptyError: "Por favor, introduce ambos idiomas para continuar.",
    apiKeyErrorTitle: "Clave API ausente",
    apiKeyErrorDesc: "Por favor, configure la clave de API Gemini en la configuración o use Ollama local.",
    errorGeneric: "Ocurrió un error al conectar con el profesor. Por favor, inténtelo de nuevo.",
    welcomeMessage: "¡Hola! Soy tu profesor particular de idiomas. ¿Listo para comenzar? ¡Haz clic en 'Comenzar Ejercicio' para practicar o envíame cualquier mensaje!",
    exerciseTitle: "Ejercicio: Hablar sobre",
    interpretationLabel: "Tu interpretación:",
    rewriteLabel: "Tu reescritura:",
    evaluationTitle: "Evaluación del Profesor",
    scoreTitle: "Nota Final",
    btnSend: "Enviar",
    typingIndicator: "El profesor está escribiendo..."
  },
  de: {
    appName: "Lehrer",
    studySection: "Lernen",
    faleSobre: "Sprechen über",
    comingSoon: "Bald",
    conversacao: "Konversation",
    vocabulario: "Wortschatz",
    gramatica: "Grammatik",
    traducao: "Übersetzung",
    escuta: "Hören",
    pronuncia: "Aussprache",
    revisao: "Wiederholung",
    startExercise: "Übung starten",
    newExercise: "Neue Übung",
    placeholderMessage: "Schreiben Sie Ihre Antwort oder sprechen Sie mit dem Lehrer...",
    setupTitle: "Ihr persönlicher Sprachlehrer",
    setupSubtitle: "Eine minimalistische Lernumgebung, geführt von Künstlicher Intelligenz.",
    targetLangLabel: "Welche Sprache möchten Sie lernen?",
    targetLangPlaceholder: "z.B. Englisch, Französisch, Japanisch...",
    sourceLangLabel: "Was ist Ihre Muttersprache?",
    sourceLangPlaceholder: "z.B. Portugiesisch, Spanisch...",
    levelLabel: "Ihr aktuelles Niveau",
    levelBasic: "Anfänger",
    levelIntermediate: "Mittelstufe",
    levelAdvanced: "Fortgeschritten",
    btnStart: "Lernen starten",
    btnExplain: "Erklären",
    btnToggleLang: "Sprache wechseln",
    emptyError: "Bitte geben Sie beide Sprachen ein, um fortzufahren.",
    apiKeyErrorTitle: "API-Schlüssel fehlt",
    apiKeyErrorDesc: "Bitte fügen Sie Ihren Gemini-API-Schlüssel in der Einstellungen hinzu oder nutzen Sie Ollama.",
    errorGeneric: "Verbindung zum Lehrer fehlgeschlagen. Bitte versuchen Sie es erneut.",
    welcomeMessage: "Hallo! Ich bin dein persönlicher Sprachlehrer. Bereit anzufangen? Klicke auf 'Übung starten' um zu üben, oder sende mir eine Nachricht!",
    exerciseTitle: "Übung: Sprechen über",
    interpretationLabel: "Ihre Interpretation:",
    rewriteLabel: "Ihre Neufassung:",
    evaluationTitle: "Bewertung des Lehrers",
    scoreTitle: "Endnote",
    btnSend: "Senden",
    typingIndicator: "Lehrer schreibt..."
  },
  it: {
    appName: "Professore",
    studySection: "Studio",
    faleSobre: "Parla di",
    comingSoon: "Presto",
    conversacao: "Conversazione",
    vocabulario: "Vocabolario",
    gramatica: "Grammatica",
    traducao: "Traduzione",
    escuta: "Ascolto",
    pronuncia: "Pronuncia",
    revisao: "Revisione",
    startExercise: "Inizia Esercizio",
    newExercise: "Nuovo esercizio",
    placeholderMessage: "Scrivi la tua risposta o chatta com il professore...",
    setupTitle: "Il Tuo Professore Particular di Lingue",
    setupSubtitle: "Un ambiente di apprendimento minimalista guidato dall'Intelligenza Artificiale.",
    targetLangLabel: "Quale lingua vuoi imparare?",
    targetLangPlaceholder: "es: Inglese, Francese, Giapponese...",
    sourceLangLabel: "Qual è la tua lingua madre?",
    sourceLangPlaceholder: "es: Portoghese, Spagnolo...",
    levelLabel: "Il tuo livello attuale",
    levelBasic: "Base",
    levelIntermediate: "Intermedio",
    levelAdvanced: "Avanzato",
    btnStart: "Inizia a studiare",
    btnExplain: "Spiega",
    btnToggleLang: "Cambia lingua",
    emptyError: "Inserisci entrambe le lingue per procedere.",
    apiKeyErrorTitle: "Chiave API mancante",
    apiKeyErrorDesc: "Inserisci la chiave API Gemini nelle impostazioni per sbloccare il cloud, oppure usa Ollama.",
    errorGeneric: "Si è verificato un errore durante la connessione con il professore. Riprova.",
    welcomeMessage: "Ciao! Sono il tuo professore personale di lingue. Pronto per iniziare? Clicca 'Inizia Esercizio' per praticare o inviami un messaggio!",
    exerciseTitle: "Esercizio: Parla di",
    interpretationLabel: "La tua interpretazione:",
    rewriteLabel: "La tua riscrittura:",
    evaluationTitle: "Valutazione del Professore",
    scoreTitle: "Voto Finale",
    btnSend: "Invia",
    typingIndicator: "Il professore sta scrivendo..."
  },
  ja: {
    appName: "先生",
    studySection: "学習",
    faleSobre: "話してみましょう",
    comingSoon: "近日公開",
    conversacao: "会話",
    vocabulario: "単語",
    gramatica: "文法",
    traducao: "翻訳",
    escuta: "リスニング",
    pronuncia: "発音",
    revisao: "復習",
    startExercise: "練習を開始する",
    newExercise: "新しいテーマ",
    placeholderMessage: "回答を入力するか、先生とチャットしましょう...",
    setupTitle: "あなた専用 of 言語チューター",
    setupSubtitle: "人工知能が導く、ミニマルな学習環境。",
    targetLangLabel: "どの言語を学びたいですか？",
    targetLangPlaceholder: "例：英語、フランス語、日本語...",
    sourceLangLabel: "あなたの母国語は何ですか？",
    sourceLangPlaceholder: "例：ポルトガル語、スペイン語...",
    levelLabel: "現在のレベル",
    levelBasic: "初級",
    levelIntermediate: "中級",
    levelAdvanced: "上級",
    btnStart: "学習を開始する",
    btnExplain: "解説する",
    btnToggleLang: "表示言語を切り替える",
    emptyError: "進めるには両方の言語を入力してください。",
    apiKeyErrorTitle: "APIキーがありません",
    apiKeyErrorDesc: "クラウド機能を使用するためにGemini APIキーを設定するか、ローカルのOllamaを使用してください。",
    errorGeneric: "先生との接続中にエラーが発生しました。もう一度お試しください。",
    welcomeMessage: "こんにちは！私はあなたの個人言語チューターです。準備はいいですか？練習を開始するには「練習を開始する」をクリックするか、自由にメッセージを送ってください！",
    exerciseTitle: "練習：話してみましょう",
    interpretationLabel: "あなたの理解：",
    rewriteLabel: "あなたの書き直し：",
    evaluationTitle: "先生の評価",
    scoreTitle: "最終評価",
    btnSend: "送信",
    typingIndicator: "先生が入力中..."
  }
};

// State Variables
let state = {
  userLanguages: null,
  activeTab: "fale_sobre", // "fale_sobre" | "ollama"
  useLocalAI: false,
  activeLocalModel: "llama3.2",
  activeUILanguage: "target", // "target" | "source"
  messages: [],
  exerciseState: {
    phase: "none", // "none" | "active"
    topic: "",
    instruction: "",
    lastAnswer: ""
  },
  geminiApiKey: "",
  isLoading: false,
  apiError: null,
  isSidebarOpen: false,
  inputValue: "",
  ollamaStatus: "checking", // "checking" | "connected" | "disconnected"
  ollamaModels: [],
  ollamaChecking: false,
  ollamaCheckMessage: null,
  ollamaPullProgress: null,
  ollamaPullModelName: "llama3.2",
  ollamaTestInput: "Olá! Você está funcionando localmente?",
  ollamaTestResponse: null,
  ollamaTestError: null,
  ollamaTestingAI: false
};

const OLLAMA_URL = "http://127.0.0.1:11434";

// Normalization function to choose correct dictionary translation
function normalizeLanguage(langName) {
  if (!langName) return "en";
  const name = langName.toLowerCase().trim();
  if (name.includes("portug") || name === "pt" || name === "br") return "pt";
  if (name.includes("ingl") || name.includes("engl") || name === "en") return "en";
  if (name.includes("franc") || name.includes("franç") || name.includes("fren") || name === "fr") return "fr";
  if (name.includes("espan") || name.includes("españ") || name.includes("span") || name === "es") return "es";
  if (name.includes("alem") || name.includes("germ") || name.includes("deut") || name === "de") return "de";
  if (name.includes("ital") || name === "it") return "it";
  if (name.includes("japon") || name.includes("nihon") || name.includes("japan") || name === "ja" || name === "jp") return "ja";
  return "en";
}

// Translate and format API/CORS connection errors to look helpful inside the app
function formatError(err) {
  if (!err) return "Erro desconhecido.";
  const msg = err.message || String(err);
  if (msg === "key_missing") return "key_missing";
  if (msg.includes("Failed to fetch") || msg.toLowerCase().includes("fetch")) {
    return "Não foi possível conectar ao Ollama local. Certifique-se de que o Ollama está rodando no seu computador e com o CORS ativado (siga as instruções passo a passo na aba de Conexão Local).";
  }
  return msg;
}

// Initial Loading of LocalStorage
function loadLocalStorage() {
  try {
    const storedLangs = localStorage.getItem("professor_languages");
    if (storedLangs) state.userLanguages = JSON.parse(storedLangs);

    const storedUseLocal = localStorage.getItem("professor_use_local_ai");
    state.useLocalAI = storedUseLocal === "true";

    const storedLocalModel = localStorage.getItem("professor_active_local_model");
    if (storedLocalModel) state.activeLocalModel = storedLocalModel;

    const storedMessages = localStorage.getItem("professor_messages");
    if (storedMessages) state.messages = JSON.parse(storedMessages);

    const storedExercise = localStorage.getItem("professor_exercise_state_v2");
    if (storedExercise) state.exerciseState = JSON.parse(storedExercise);

    const storedKey = localStorage.getItem("professor_gemini_api_key");
    if (storedKey) state.geminiApiKey = storedKey;
  } catch (e) {
    console.error("Erro ao carregar dados do localStorage", e);
  }
}

// Save crucial state sections
function saveStateToLocalStorage() {
  try {
    if (state.userLanguages) {
      localStorage.setItem("professor_languages", JSON.stringify(state.userLanguages));
    } else {
      localStorage.removeItem("professor_languages");
    }
    localStorage.setItem("professor_use_local_ai", String(state.useLocalAI));
    localStorage.setItem("professor_active_local_model", state.activeLocalModel);
    localStorage.setItem("professor_messages", JSON.stringify(state.messages));
    localStorage.setItem("professor_exercise_state_v2", JSON.stringify(state.exerciseState));
    localStorage.setItem("professor_gemini_api_key", state.geminiApiKey);
  } catch (e) {
    console.error("Erro ao salvar dados no localStorage", e);
  }
}

// Active UI Dictionary Helper
function getActiveDictionary() {
  if (!state.userLanguages) return translations.pt;
  const lang = state.activeUILanguage === "target" ? state.userLanguages.target : state.userLanguages.source;
  const code = normalizeLanguage(lang);
  return translations[code] || translations.pt;
}

// Highlight incorrect phrases in student corrections
function getIncorrectPhrases(corrections) {
  const incorrects = [];
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

function getHighlightedTextHtml(text, corrections) {
  const incorrects = getIncorrectPhrases(corrections);
  if (incorrects.length === 0) {
    return `"${text}"`;
  }
  const escaped = incorrects
    .map(inc => inc.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'))
    .filter(inc => inc.trim().length > 0);

  if (escaped.length === 0) {
    return `"${text}"`;
  }

  const regex = new RegExp(`(${escaped.join('|')})`, 'gi');
  const parts = text.split(regex);

  return `"${parts.map(part => {
    const isMatch = incorrects.some(inc => inc.toLowerCase() === part.toLowerCase());
    if (isMatch) {
      return `<span class="bg-red-200 text-red-800 font-semibold px-1 rounded mx-0.5 line-through decoration-red-950 decoration-2" title="Erro identificado">${part}</span>`;
    }
    return part;
  }).join('')}"`;
}

/*
 * ============================================================
 * GEMINI CLIENT-SIDE DIRECT INTEGRATION (GitHub Pages Compatible)
 * ============================================================
 */
async function fetchGeminiDirect(apiKey, systemInstruction, contents) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contents: contents,
      systemInstruction: {
        parts: [{ text: systemInstruction }]
      },
      generationConfig: {
        temperature: 0.7
      }
    })
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData?.error?.message || `Erro HTTP ${response.status}`);
  }

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || "I could not generate a response. Please try again.";
}

async function fetchGeminiDirectJson(apiKey, prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: "application/json",
        temperature: 0.5
      }
    })
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData?.error?.message || `Erro HTTP ${response.status}`);
  }

  const data = await response.json();
  const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || "{}";
  return JSON.parse(rawText);
}

/*
 * ============================================================
 * OLLAMA LOCAL AI ACTIONS
 * ============================================================
 */
async function checkOllamaConnection(showLoading = false) {
  if (showLoading) {
    state.ollamaChecking = true;
    state.ollamaCheckMessage = {
      text: "Verificando conexão com o Ollama local...",
      type: "info"
    };
    render();
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(`${OLLAMA_URL}/api/tags`, {
      method: "GET",
      headers: { Accept: "application/json" },
      mode: "cors",
      signal: controller.signal
    });

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`HTTP_${response.status}`);
    }

    const data = await response.json();
    const modelList = Array.isArray(data.models) ? data.models : [];

    state.ollamaModels = modelList;
    state.ollamaStatus = "connected";

    if (modelList.length > 0) {
      const exists = modelList.some(
        m => m.name === state.activeLocalModel || m.name.startsWith(`${state.activeLocalModel}:`)
      );
      if (!exists) {
        state.activeLocalModel = modelList[0].name;
        localStorage.setItem("professor_active_local_model", modelList[0].name);
      }
    }

    if (showLoading) {
      state.ollamaCheckMessage = {
        text: modelList.length > 0
          ? `Ollama conectado com sucesso! ${modelList.length} modelo(s) encontrado(s).`
          : "Ollama conectado, mas nenhum modelo está instalado.",
        type: "success"
      };
      setTimeout(() => {
        state.ollamaCheckMessage = null;
        render();
      }, 5000);
    }
  } catch (error) {
    console.error("Erro ao conectar ao Ollama local:", error);
    state.ollamaStatus = "disconnected";

    let msg = "Não foi possível acessar o Ollama local em http://127.0.0.1:11434.";
    if (error?.name === "AbortError") {
      msg = "O Ollama não respondeu dentro do limite de 5s. Verifique se o servidor local está ativo.";
    } else {
      msg = "Conexão rejeitada. Garanta que o Ollama esteja rodando e com CORS liberado (OLLAMA_ORIGINS=\"*\").";
    }

    if (showLoading) {
      state.ollamaCheckMessage = {
        text: msg,
        type: "error"
      };
    }
  } finally {
    if (showLoading) {
      state.ollamaChecking = false;
      render();
    }
  }
}

async function handlePullModel() {
  const modelName = state.ollamaPullModelName.trim();
  if (!modelName) {
    state.ollamaPullProgress = "Por favor, digite o nome de um modelo.";
    render();
    return;
  }

  state.ollamaPullProgress = "Iniciando download do modelo...";
  render();

  try {
    const response = await fetch(`${OLLAMA_URL}/api/pull`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify({ name: modelName, stream: false })
    });

    if (!response.ok) {
      throw new Error(`Erro HTTP ${response.status}`);
    }

    state.ollamaPullProgress = `Modelo "${modelName}" baixado com sucesso!`;
    await checkOllamaConnection(false);
    state.activeLocalModel = modelName;
    saveStateToLocalStorage();
  } catch (err) {
    console.error("Erro ao baixar modelo local:", err);
    state.ollamaPullProgress = `Não foi possível baixar o modelo "${modelName}". Certifique-se de iniciar o Ollama no terminal com OLLAMA_ORIGINS="*"`;
  } finally {
    render();
  }
}

async function handleTestLocalAI() {
  if (state.ollamaTestingAI) return;
  if (!state.ollamaTestInput.trim()) {
    state.ollamaTestError = "Digite uma mensagem para testar.";
    render();
    return;
  }

  state.ollamaTestingAI = true;
  state.ollamaTestError = null;
  state.ollamaTestResponse = null;
  render();

  try {
    const response = await fetch(`${OLLAMA_URL}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify({
        model: state.activeLocalModel,
        messages: [{ role: "user", content: state.ollamaTestInput.trim() }],
        stream: false
      })
    });

    if (!response.ok) {
      throw new Error(`Erro na API do Ollama: ${response.status}`);
    }

    const data = await response.json();
    state.ollamaTestResponse = data.message?.content || "Modelo respondeu sem texto.";
  } catch (err) {
    console.error("Erro no teste da IA Local:", err);
    state.ollamaTestError = "Falha ao conectar. Verifique se o seu Ollama está rodando e inicie-o via PowerShell/Terminal com OLLAMA_ORIGINS=\"*\"";
  } finally {
    state.ollamaTestingAI = false;
    render();
  }
}

/*
 * ============================================================
 * CONVERSATIONAL ACTIONS
 * ============================================================
 */
async function handleStartExercise() {
  state.isLoading = true;
  state.apiError = null;
  render();

  const prompt = `You are a professional language teacher. 
Generate a level-appropriate writing topic/exercise for a student studying "${state.userLanguages.target}".
The student's level is "${state.userLanguages.level}".

Generate a creative topic in "${state.userLanguages.target}". It could be about daily routines, travel, family, hobbies, opinion on simple matters, or a hypothetical situation.

You MUST respond strictly with a valid JSON object matching this schema:
{
  "text": "The theme/topic title in ${state.userLanguages.target}",
  "instruction": "Detailed instructions on what the student should write about, entirely in ${state.userLanguages.target}"
}

Respond ONLY with the raw JSON string. Do not include markdown backticks or extra formatting.`;

  try {
    let data;

    if (state.useLocalAI) {
      const res = await fetch(`${OLLAMA_URL}/api/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify({
          model: state.activeLocalModel,
          prompt: prompt,
          format: "json",
          stream: false
        })
      });

      if (!res.ok) {
        throw new Error(`Erro na API local do Ollama (Status ${res.status}). Abra o app Ollama ou verifique se está executando com OLLAMA_ORIGINS="*"`);
      }

      const raw = await res.json();
      data = JSON.parse(raw.response || "{}");
    } else {
      if (!state.geminiApiKey) {
        throw new Error("key_missing");
      }
      data = await fetchGeminiDirectJson(state.geminiApiKey, prompt);
    }

    const title = data.text || "Minha Rotina";
    const inst = data.instruction || `Escreva um parágrafo no idioma ${state.userLanguages.target} sobre a sua rotina diária de estudos.`;

    state.messages.push({
      id: `ex_start_${Date.now()}`,
      role: "assistant",
      content: inst,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: "exercise_start",
      exerciseData: { text: title, instruction: inst }
    });

    state.exerciseState = {
      phase: "active",
      topic: title,
      instruction: inst,
      lastAnswer: ""
    };

    state.isLoading = false;
    saveStateToLocalStorage();
  } catch (err) {
    console.error(err);
    state.apiError = formatError(err);
    state.isLoading = false;
  }
  render();
}

async function handleSendExerciseAnswer() {
  const studentAns = state.inputValue.trim();
  if (!studentAns) return;

  state.inputValue = "";
  state.isLoading = true;
  state.apiError = null;

  // Add student message immediately
  state.messages.push({
    id: `user_${Date.now()}`,
    role: "user",
    content: studentAns,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    type: "text"
  });
  render();

  const prompt = `You are a professional language teacher of "${state.userLanguages.target}". 
A student of level "${state.userLanguages.level}" has submitted a text on the topic: "${state.exerciseState.topic}".
Their answer is: "${studentAns}".

Your job is to check their text for errors (grammar, spelling, vocabulary, prepositions, particles, word order, etc.) in "${state.userLanguages.target}".
Specifically identify wrong words or phrases, suggest corrections, and explain them briefly in "${state.userLanguages.target}".

If they have errors:
- set "hasErrors" to true.
- fill "corrections" array.
- write an encouraging message in "message" entirely in "${state.userLanguages.target}", politely pointing out that they have some mistakes and explicitly asking them to rewrite their answer and submit it again to practice (e.g. "Excellent try! Please rewrite your text correcting the wrong words and try again.").

If they have absolutely NO errors and their text is natural and perfect:
- set "hasErrors" to false.
- keep "corrections" empty.
- write a celebratory message in "message" entirely in "${state.userLanguages.target}" praising their flawless writing and saying they are ready for a new exercise.

You MUST respond strictly with a valid JSON object matching this schema:
{
  "hasErrors": boolean,
  "corrections": [
    {
      "original": "the exact wrong word or phrase from the student's answer",
      "corrected": "the corrected word or phrase in ${state.userLanguages.target}",
      "explanation": "brief, clear explanation of why it was wrong and how it was fixed, written completely in ${state.userLanguages.target}"
    }
  ],
  "message": "The professor's message to the student, written completely in ${state.userLanguages.target}"
}

Do not include any markdown formatting or code blocks outside of the JSON.`;

  try {
    let data;

    if (state.useLocalAI) {
      const res = await fetch(`${OLLAMA_URL}/api/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify({
          model: state.activeLocalModel,
          prompt: prompt,
          format: "json",
          stream: false
        })
      });

      if (!res.ok) {
        throw new Error(`Erro na API local do Ollama (Status ${res.status}).`);
      }

      const raw = await res.json();
      data = JSON.parse(raw.response || "{}");
    } else {
      if (!state.geminiApiKey) {
        throw new Error("key_missing");
      }
      data = await fetchGeminiDirectJson(state.geminiApiKey, prompt);
    }

    state.messages.push({
      id: `ex_fb_${Date.now()}`,
      role: "assistant",
      content: data.message || "Excelente trabalho! Continue praticando.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: "exercise_feedback",
      exerciseData: {
        hasErrors: data.hasErrors ?? false,
        corrections: data.corrections || [],
        topic: state.exerciseState.topic,
        studentAnswer: studentAns
      }
    });

    if (data.hasErrors) {
      state.exerciseState.lastAnswer = studentAns;
    } else {
      state.exerciseState = { phase: "none", topic: "", instruction: "", lastAnswer: "" };
    }

    state.isLoading = false;
    saveStateToLocalStorage();
  } catch (err) {
    console.error(err);
    state.apiError = formatError(err);
    state.isLoading = false;
  }
  render();
}

async function handleSendTextMessage() {
  const userText = state.inputValue.trim();
  if (!userText) return;

  state.inputValue = "";
  state.isLoading = true;
  state.apiError = null;

  // Append user message
  state.messages.push({
    id: `user_${Date.now()}`,
    role: "user",
    content: userText,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    type: "text"
  });
  render();

  const systemInstruction = `You are a professional, helpful, and friendly personal language teacher.
The student's native/source language is "${state.userLanguages.source}".
The student is learning "${state.userLanguages.target}" and is currently at proficiency level: "${state.userLanguages.level}".

CRITICAL DIRECTIVE: You must write your entire message in "${state.userLanguages.target}". Your greetings, feedback, and replies must be exclusively in "${state.userLanguages.target}". Do not use "${state.userLanguages.source}" unless explicitly asked for a translation or explanation.

Your message structure should always be:
1. If the student made any small spelling, grammar, punctuation, or word choice errors in their last message in "${state.userLanguages.target}", gently point out the corrections at the very beginning of your message in a highly readable, elegant, and polite way.
2. Reply directly to the student's message in "${state.userLanguages.target}" to keep the conversation going naturally, keeping your vocabulary and syntax appropriate for their level (${state.userLanguages.level}).
3. Ask a friendly, engaging follow-up question in "${state.userLanguages.target}" to prompt the student to write back.`;

  const contents = [];
  // Build simple history (last 10 messages)
  const recentMessages = state.messages.slice(-10);
  for (const m of recentMessages) {
    if (m.type === "text") {
      contents.push({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.content }]
      });
    }
  }

  try {
    let replyText = "";

    if (state.useLocalAI) {
      const response = await fetch(`${OLLAMA_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify({
          model: state.activeLocalModel,
          messages: [
            { role: "system", content: systemInstruction },
            ...contents.map(c => ({ role: c.role === "model" ? "assistant" : "user", content: c.parts[0].text }))
          ],
          stream: false
        })
      });

      if (!response.ok) {
        throw new Error(`Erro na API do Ollama: ${response.status}`);
      }
      const data = await response.json();
      replyText = data.message?.content || "Modelo não forneceu resposta.";
    } else {
      if (!state.geminiApiKey) {
        throw new Error("key_missing");
      }
      replyText = await fetchGeminiDirect(state.geminiApiKey, systemInstruction, contents);
    }

    state.messages.push({
      id: `prof_${Date.now()}`,
      role: "assistant",
      content: replyText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: "text"
    });

    state.isLoading = false;
    saveStateToLocalStorage();
  } catch (err) {
    console.error(err);
    state.apiError = formatError(err);
    state.isLoading = false;
  }
  render();
}

async function handleQuickExplain() {
  if (state.isLoading) return;
  
  // Find last teacher feedback or correction
  const assistantMessages = state.messages.filter(m => m.role === "assistant" && m.content);
  if (assistantMessages.length === 0) return;
  
  const lastTeacherMsg = assistantMessages[assistantMessages.length - 1].content;
  
  state.isLoading = true;
  state.apiError = null;
  render();

  const prompt = `You are a professional language teacher. Explain the grammatical rules and corrections implied in this teacher response in an extremely polite, highly structured, and didactic way:
"${lastTeacherMsg}"

Provide explanations in both the student's native language ("${state.userLanguages.source}") and target language ("${state.userLanguages.target}"), showing examples of correct vs incorrect usage.`;

  try {
    let replyText = "";

    if (state.useLocalAI) {
      const response = await fetch(`${OLLAMA_URL}/api/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify({
          model: state.activeLocalModel,
          prompt: prompt,
          stream: false
        })
      });

      if (!response.ok) {
        throw new Error(`Erro na API do Ollama: ${response.status}`);
      }
      const data = await response.json();
      replyText = data.response || "Não foi possível obter uma explicação.";
    } else {
      if (!state.geminiApiKey) {
        throw new Error("key_missing");
      }
      replyText = await fetchGeminiDirect(state.geminiApiKey, "You are a professional language teacher.", [{ parts: [{ text: prompt }] }]);
    }

    state.messages.push({
      id: `explain_${Date.now()}`,
      role: "assistant",
      content: replyText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: "text"
    });

    state.isLoading = false;
    saveStateToLocalStorage();
  } catch (err) {
    console.error(err);
    state.apiError = formatError(err);
    state.isLoading = false;
  }
  render();
}

function handleClearChat() {
  if (!confirm("Tem certeza de que deseja limpar todo o histórico de conversas?")) return;
  const currentDict = getActiveDictionary();
  state.messages = [
    {
      id: "welcome",
      role: "assistant",
      content: currentDict.welcomeMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: "text"
    }
  ];
  state.exerciseState = { phase: "none", topic: "", instruction: "", lastAnswer: "" };
  state.apiError = null;
  saveStateToLocalStorage();
  render();
}

function handleLanguageReset() {
  if (!confirm("Deseja redefinir suas configurações de idiomas e voltar à tela inicial?")) return;
  state.userLanguages = null;
  state.messages = [];
  state.exerciseState = { phase: "none", topic: "", instruction: "", lastAnswer: "" };
  state.apiError = null;
  localStorage.removeItem("professor_languages");
  localStorage.removeItem("professor_messages");
  localStorage.removeItem("professor_exercise_state_v2");
  render();
}

/*
 * ============================================================
 * MODALS AND DIALOGS
 * ============================================================
 */
window.openApiKeyModal = function() {
  document.getElementById("gemini-key-input").value = state.geminiApiKey;
  document.getElementById("api-key-modal").classList.remove("hidden");
};

window.closeApiKeyModal = function() {
  document.getElementById("api-key-modal").classList.add("hidden");
};

window.saveApiKey = function() {
  const key = document.getElementById("gemini-key-input").value.trim();
  state.geminiApiKey = key;
  saveStateToLocalStorage();
  closeApiKeyModal();
  if (key && state.apiError === "key_missing") {
    state.apiError = null;
  }
  render();
};

window.clearApiKey = function() {
  state.geminiApiKey = "";
  document.getElementById("gemini-key-input").value = "";
  saveStateToLocalStorage();
  closeApiKeyModal();
  render();
};

/*
 * ============================================================
 * INTERFACE RENDERING ENGINE
 * ============================================================
 */
function render() {
  const appContainer = document.getElementById("app");
  if (!appContainer) return;

  // 1. Render Setup/Language Selector if no language configured
  if (!state.userLanguages) {
    renderLanguageSelector(appContainer);
    lucide.createIcons();
    return;
  }

  const dict = getActiveDictionary();
  const uiLangCode = normalizeLanguage(state.activeUILanguage === "target" ? state.userLanguages.target : state.userLanguages.source);

  // 2. Render Main Application Frame (Sidebar + Content Panel)
  appContainer.innerHTML = `
    <!-- Mobile Sidebar Drawer Overlay -->
    <div id="sidebar-overlay" class="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${state.isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}" onclick="toggleSidebar(false)"></div>

    <!-- Sidebar Layout -->
    <aside id="sidebar-aside" class="fixed md:static inset-y-0 left-0 w-64 bg-white border-r border-[#EDEDED] flex flex-col z-40 transform transition-transform duration-300 md:transform-none ${state.isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}">
      
      <!-- Logo Header -->
      <div class="h-20 border-b border-[#EDEDED] flex items-center justify-between px-6 flex-shrink-0">
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 rounded-full bg-[#F8F8F8] border border-[#EDEDED] flex items-center justify-center text-black">
            <i data-lucide="globe" class="w-4 h-4"></i>
          </div>
          <span class="text-sm tracking-tight text-black font-serif italic font-semibold">Professor</span>
        </div>
        <button onclick="toggleSidebar(false)" class="md:hidden p-1.5 border border-[#EDEDED] rounded-full text-black hover:bg-[#F8F8F8] cursor-pointer">
          <i data-lucide="chevron-left" class="w-4 h-4"></i>
        </button>
      </div>

      <!-- Scrollable Navigation (Scrollbar hidden) -->
      <nav class="flex-1 space-y-8 overflow-y-auto pr-2 pl-6 py-8 no-scrollbar" style="scrollbar-width: none; ms-overflow-style: none;">
        <div>
          <p class="text-[10px] uppercase tracking-widest text-[#999999] mb-4 font-bold">
            ${dict.studySection || "Estudo"}
          </p>
          <div class="space-y-1">
            <button onclick="switchTab('fale_sobre')" class="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all ${state.activeTab === 'fale_sobre' ? 'bg-black text-white shadow-sm' : 'text-neutral-600 hover:bg-[#F8F8F8] hover:text-black'}">
              <i data-lucide="sparkles" class="w-4 h-4"></i>
              <span>${dict.faleSobre || "Speak About"}</span>
            </button>
          </div>
        </div>

        <div>
          <p class="text-[10px] uppercase tracking-widest text-[#999999] mb-4 font-bold">
            ${uiLangCode === 'ja' ? '準備中' : 'Futuros Exercícios'}
          </p>
          <div class="space-y-1">
            ${['conversacao', 'vocabulario', 'gramatica', 'traducao', 'escuta', 'pronuncia', 'revisao'].map(tab => `
              <div class="flex items-center justify-between px-4 py-3 rounded-xl text-xs font-semibold text-neutral-400 select-none">
                <div class="flex items-center space-x-3">
                  <i data-lucide="book-open" class="w-4 h-4 text-neutral-300"></i>
                  <span>${dict[tab]}</span>
                </div>
                <span class="text-[8px] uppercase tracking-widest text-neutral-400 bg-neutral-100 px-1.5 py-0.5 rounded font-bold">${dict.comingSoon || "Breve"}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </nav>

    </aside>

    <!-- Content Workspace -->
    <main class="flex-1 flex flex-col h-full overflow-hidden min-w-0 bg-[#FAFAFA] relative">
      ${state.activeTab === "ollama" ? renderOllamaTabHtml() : renderFaleSobreTabHtml()}
    </main>
  `;

  // Attach dynamic event handlers or run initial scrolls
  const conversationFeed = document.getElementById("conversation-feed");
  if (conversationFeed) {
    conversationFeed.scrollTop = conversationFeed.scrollHeight;
  }

  // Set Lucide icons active
  lucide.createIcons();
}

// Sidebar Drawer toggling
window.toggleSidebar = function(isOpen) {
  state.isSidebarOpen = isOpen;
  render();
};

window.switchTab = function(tabName) {
  state.activeTab = tabName;
  state.isSidebarOpen = false;
  render();
  if (tabName === "ollama") {
    checkOllamaConnection(false);
  }
};

window.toggleUILanguage = function(langType) {
  state.activeUILanguage = langType;
  render();
};

/*
 * ============================================================
 * TAB 1: CONVERSATION VIEW TEMPLATES ("Fale Sobre")
 * ============================================================
 */
function renderFaleSobreTabHtml() {
  const dict = getActiveDictionary();
  const uiLangCode = normalizeLanguage(state.activeUILanguage === "target" ? state.userLanguages.target : state.userLanguages.source);

  return `
    <!-- Top Header Bar -->
    <header class="min-h-20 py-3 md:py-0 border-b border-[#EDEDED] bg-white flex flex-col md:flex-row md:items-center justify-between px-6 md:px-10 flex-shrink-0 z-10 gap-3 md:gap-0">
      <div class="flex flex-wrap items-center gap-3 w-full md:w-auto">
        <button onclick="toggleSidebar(true)" class="md:hidden p-2 border border-[#EDEDED] rounded-full text-black hover:bg-[#F8F8F8] cursor-pointer flex-shrink-0">
          <i data-lucide="menu" class="w-4 h-4"></i>
        </button>
        
        <!-- 1. Nome do Modo e exercício (no caso "Speak About"), barra / o idioma -->
        <div class="flex items-center space-x-2 text-xs text-[#666666] flex-shrink-0 mr-1">
          <span class="font-bold text-black text-sm">${dict.faleSobre || "Speak About"}</span>
          <span class="text-neutral-300 font-medium">/</span>
          <span class="capitalize font-semibold text-neutral-700">${state.userLanguages.target}</span>
        </div>

        <!-- 2. O input de escolha "Local (Ollama)" ou "Cloud (Gemini)" -->
        <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold bg-[#FAFAFA] border-[#EDEDED] flex-shrink-0">
          <select id="engine-select" onchange="toggleEngine(this.value)" class="bg-transparent border-none text-xs text-slate-700 py-0.5 px-1 focus:outline-none cursor-pointer outline-none font-bold">
            <option value="ollama" ${state.useLocalAI ? 'selected' : ''}>Local (Ollama)</option>
            <option value="gemini" ${!state.useLocalAI ? 'selected' : ''}>Cloud (Gemini)</option>
          </select>
        </div>
      </div>

      <div class="flex flex-wrap items-center gap-2 w-full md:w-auto md:justify-end">
        <!-- 3. Nova Lição Button -->
        <button onclick="handleStartExercise()" class="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs font-semibold transition-all shadow-sm cursor-pointer">
          <i data-lucide="play" class="w-2.5 h-2.5 fill-white text-white"></i>
          <span>Nova Lição</span>
        </button>

        <!-- 4. Bate-papo Livre Button -->
        <button onclick="handleSendTextMessage('Quero conversar um pouco')" class="px-4 py-2 bg-[#EDF5FD] hover:bg-[#D6E6F7] text-[#1E3A8A] border border-[#D6E6F7] rounded-full text-xs font-semibold transition-all cursor-pointer shadow-sm">
          Bate-papo Livre
        </button>

        <!-- Configure Gemini Key Button (helper when Gemini selected) -->
        ${!state.useLocalAI ? `
          <button onclick="openApiKeyModal()" class="flex items-center space-x-1.5 px-3 py-1.5 border border-[#EDEDED] rounded-full text-xs font-bold bg-white text-neutral-800 hover:border-black cursor-pointer transition-all shadow-sm mr-1">
            <i data-lucide="key" class="w-3.5 h-3.5 text-neutral-500"></i>
            <span>${state.geminiApiKey ? 'Editar Chave' : 'Configurar Chave'}</span>
          </button>
        ` : ''}

        <!-- Conexão Local Button (Icon Only) -->
        <button onclick="switchTab('ollama')" class="p-2 border border-[#EDEDED] rounded-full hover:bg-black hover:text-white transition-colors cursor-pointer text-[#666666] hover:text-white" title="Conexão Local (Ollama)">
          <i data-lucide="cpu" class="w-3.5 h-3.5"></i>
        </button>

        <!-- 6. Traduzir Interface Icon Button -->
        <button onclick="toggleUILanguage(state.activeUILanguage === 'target' ? 'source' : 'target')" class="p-2 border border-[#EDEDED] rounded-full hover:bg-black hover:text-white transition-colors cursor-pointer text-[#666666] hover:text-white" title="Traduzir Interface">
          <i data-lucide="languages" class="w-3.5 h-3.5"></i>
        </button>

        <!-- 7. Limpar Tudo Button -->
        <button onclick="handleClearChat()" class="p-2 border border-[#EDEDED] rounded-full hover:bg-black hover:text-white transition-colors cursor-pointer text-[#999999]" title="Limpar Histórico do Chat">
          <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    </header>

    <!-- Conversation Feed Container (Aligned perfectly with left border) -->
    <div id="conversation-feed" class="flex-1 overflow-y-auto pl-6 md:pl-10 pr-6 md:pr-12 py-10 no-scrollbar">
      <div class="max-w-4xl space-y-8 pb-36 text-left">
        
        <!-- Key Missing Banner -->
        ${!state.useLocalAI && !state.geminiApiKey ? `
          <div class="p-5 bg-amber-50 border border-amber-200 rounded-2xl flex flex-col gap-2.5 text-xs text-amber-800 animate-in fade-in shadow-sm text-left">
            <div class="flex gap-3 items-center">
              <i data-lucide="alert-circle" class="w-5 h-5 text-amber-600 flex-shrink-0"></i>
              <span class="font-bold text-amber-900">${dict.apiKeyErrorTitle}</span>
            </div>
            <p class="pl-8 text-neutral-700 leading-relaxed">
              ${dict.apiKeyErrorDesc}
            </p>
            <div class="pl-8 flex gap-3 pt-1">
              <button onclick="openApiKeyModal()" class="px-3 py-1.5 bg-black text-white text-[11px] font-bold uppercase rounded-lg shadow cursor-pointer hover:bg-neutral-800 transition-all">Inserir Chave Gemini</button>
              <button onclick="toggleEngine('ollama')" class="px-3 py-1.5 bg-white border border-neutral-200 hover:border-black text-[11px] font-bold uppercase rounded-lg shadow cursor-pointer hover:bg-neutral-50 transition-all">Mudar para Ollama Local</button>
            </div>
          </div>
        ` : ''}

        <!-- Error Banner -->
        ${state.apiError && state.apiError !== "key_missing" ? `
          <div class="p-4 bg-white border border-red-200 rounded-2xl flex flex-col gap-1.5 text-xs text-red-600 animate-in fade-in duration-200 shadow-sm text-left">
            <div class="flex gap-3 items-center">
              <i data-lucide="alert-circle" class="w-4 h-4 text-red-500 flex-shrink-0"></i>
              <span class="font-bold">${dict.errorGeneric}</span>
            </div>
            <p class="pl-7 text-[11px] text-red-500/70 font-mono break-all leading-normal whitespace-pre-wrap">${state.apiError}</p>
          </div>
        ` : ''}

        <!-- Chat history rendering loop -->
        ${state.messages.map(msg => {
          const isAssistant = msg.role === "assistant";
          return `
            <div class="flex flex-col ${isAssistant ? 'items-start' : 'items-end'} space-y-1.5">
              <span class="text-[10px] uppercase tracking-widest text-[#999999] px-1 font-semibold">
                ${isAssistant ? 'Professor' : 'Você'} • ${msg.timestamp || '00:00'}
              </span>

              <!-- Standard text messages -->
              ${msg.type === "text" ? `
                <div class="max-w-[85%] px-5 py-3.5 rounded-2xl text-sm leading-relaxed border shadow-sm text-left ${isAssistant ? 'bg-white border-[#EDEDED] text-[#111111] rounded-tl-none font-serif italic' : 'bg-[#EDF5FD] border-[#D6E6F7] text-[#1E3A8A] rounded-tr-none'}">
                  ${msg.content}
                </div>
              ` : ''}

              <!-- Exercise Start Template -->
              ${msg.type === "exercise_start" && msg.exerciseData ? `
                <div class="w-full bg-white border border-[#EDEDED] p-8 rounded-2xl shadow-sm space-y-6 text-left animate-in fade-in zoom-in-95 duration-200">
                  <div class="flex justify-between items-start">
                    <span class="text-[10px] uppercase tracking-widest text-[#999999] font-bold">${dict.exerciseTitle || "Exercício"}</span>
                    <span class="text-[10px] text-[#999999] font-mono font-medium">${Math.round((msg.exerciseData.text || '').split(/\s+/).length)} palavras</span>
                  </div>
                  <p class="text-lg leading-relaxed font-serif text-[#333333] italic">
                    "${msg.exerciseData.text}"
                  </p>
                  <div class="border-t border-[#EDEDED] pt-4 mt-4">
                    <span class="text-[10px] uppercase tracking-widest text-[#999999] block mb-2 font-bold">Instrução</span>
                    <p class="text-sm text-[#333333] font-medium leading-relaxed bg-[#F8F8F8] border border-[#EDEDED]/50 p-4 rounded-xl">
                      ${msg.exerciseData.instruction}
                    </p>
                  </div>
                </div>
              ` : ''}

              <!-- Exercise Evaluation feedback and Corrections Template -->
              ${msg.type === "exercise_feedback" && msg.exerciseData ? `
                <div class="w-full space-y-4 text-left animate-in fade-in duration-200">
                  <!-- Professor Greeting Explanation card -->
                  <div class="bg-white border border-[#EDEDED] p-6 rounded-2xl shadow-sm text-left">
                    <span class="text-[10px] uppercase tracking-widest text-[#999999] font-bold block mb-2">Professor</span>
                    <p class="text-sm leading-relaxed text-[#111111] whitespace-pre-wrap font-serif italic">
                      ${msg.content}
                    </p>
                  </div>

                  <!-- Incorrect student text highlighted with errors crossed out -->
                  ${msg.exerciseData.studentAnswer ? `
                    <div class="bg-neutral-50 border border-[#EDEDED] p-6 rounded-2xl shadow-sm text-left space-y-2">
                      <span class="text-[10px] uppercase tracking-widest text-[#999999] font-bold">Sua Resposta Avaliada</span>
                      <p class="text-sm font-serif italic text-neutral-800 leading-relaxed">
                        ${getHighlightedTextHtml(msg.exerciseData.studentAnswer, msg.exerciseData.corrections || [])}
                      </p>
                    </div>
                  ` : ''}

                  <!-- Recommended Correction Lines -->
                  ${msg.exerciseData.corrections && msg.exerciseData.corrections.length > 0 ? `
                    <div class="bg-white border border-[#EDEDED] p-6 rounded-2xl shadow-sm space-y-4">
                      <p class="text-[10px] uppercase tracking-widest text-red-500 font-bold">
                        ${uiLangCode === 'ja' ? '推奨される修正' : 'Correções Recomendadas'}
                      </p>
                      <div class="divide-y divide-[#EDEDED] border-t border-[#EDEDED]/60">
                        ${msg.exerciseData.corrections.map((corr, i) => `
                          <div class="py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-3 text-sm">
                            <div class="flex flex-wrap items-center gap-2">
                              <span class="line-through text-red-700 font-medium bg-red-50 px-2 py-0.5 rounded text-xs border border-red-100">
                                ${corr.original}
                              </span>
                              <span class="text-[#999999] text-xs">→</span>
                              <span class="text-green-800 font-bold bg-green-50 px-2 py-0.5 rounded text-xs border border-green-100">
                                ${corr.corrected}
                              </span>
                            </div>
                            <p class="text-xs text-[#666666] leading-relaxed md:max-w-[50%]">
                              ${corr.explanation}
                            </p>
                          </div>
                        `).join('')}
                      </div>
                    </div>
                  ` : `
                    <!-- Celebration Card if no errors -->
                    <div class="p-5 bg-green-50/50 border border-green-100 rounded-2xl flex items-center gap-3 text-green-800">
                      <i data-lucide="check-circle" class="w-5 h-5 text-green-600"></i>
                      <span class="text-xs font-semibold">Excelente! Nenhuma correção necessária. Você dominou este exercício!</span>
                    </div>
                  `}

                  <!-- Restart or next options -->
                  ${!msg.exerciseData.hasErrors ? `
                    <div class="flex justify-start pt-2">
                      <button onclick="handleStartExercise()" class="px-6 py-3 bg-black hover:bg-neutral-800 text-white rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer transition-all shadow-sm">
                        ${dict.newExercise || "Novo Exercício"}
                      </button>
                    </div>
                  ` : `
                    <div class="flex justify-start pt-2">
                      <button onclick="fillLastAnswer()" class="px-6 py-3 bg-white border border-neutral-200 hover:border-black text-black rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer transition-all shadow-sm">
                        Reescrever Resposta
                      </button>
                    </div>
                  `}
                </div>
              ` : ''}

            </div>
          `;
        }).join('')}

        <!-- Teacher typing indicator -->
        ${state.isLoading ? `
          <div class="flex flex-col items-start space-y-1.5 text-left">
            <span class="text-[10px] uppercase tracking-widest text-[#999999] px-1 font-semibold">
              Professor • ${dict.typingIndicator || "Escrevendo..."}
            </span>
            <div class="bg-white border border-[#EDEDED] text-[#999999] text-xs py-2.5 px-4 rounded-2xl flex items-center gap-2 shadow-sm">
              <div class="flex gap-1">
                <span class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 0ms"></span>
                <span class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 150ms"></span>
                <span class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 300ms"></span>
              </div>
            </div>
          </div>
        ` : ''}

        <!-- Empty Welcome state screen if no conversation started -->
        ${state.messages.length === 0 ? `
          <div class="bg-white border border-[#EDEDED] rounded-2xl p-8 md:p-10 shadow-sm text-center max-w-xl mx-auto space-y-6">
            <div class="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mx-auto text-black">
              <i data-lucide="sparkles" class="w-5 h-5"></i>
            </div>
            <div class="space-y-2">
              <h3 class="text-lg font-serif italic font-semibold text-[#111111]">Iniciar Prática Oral</h3>
              <p class="text-xs text-neutral-500 leading-relaxed max-w-xs mx-auto">
                Pratique escrita e conversação focado no seu nível com feedback instantâneo da inteligência artificial.
              </p>
            </div>
            <button onclick="handleStartExercise()" class="inline-flex items-center gap-2 px-6 py-3.5 bg-black hover:bg-neutral-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer">
              <span>${dict.startExercise || "Começar Exercício"}</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          </div>
        ` : ''}

      </div>
    </div>

    <!-- Input Dock form area bottom aligned -->
    <div class="absolute bottom-0 inset-x-0 bg-white border-t border-[#EDEDED] h-24 flex items-center pl-6 md:pl-10 pr-6 md:pr-12 z-10">
      <div class="w-full max-w-4xl relative space-y-2">
        
        <!-- Active context indicator overlay -->
        ${state.exerciseState.phase === 'active' ? `
          <div class="absolute top-[-30px] left-0 right-0 flex items-center justify-between px-4 py-1 bg-[#EDF5FD] text-[#1E3A8A] text-[10px] rounded-t-lg border-x border-t border-[#D6E6F7]">
            <div class="flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
              <span class="font-bold uppercase tracking-wider text-[#1E40AF]/80">
                ${uiLangCode === 'ja' ? '練習中' : 'Exercício Ativo'}
              </span>
            </div>
            <div class="text-[#1E40AF]/60 font-semibold truncate max-w-[70%] text-left">
              ${state.exerciseState.topic}
            </div>
          </div>
        ` : ''}

        <!-- Message/Form input field -->
        <form onsubmit="submitForm(event)" class="relative flex items-center w-full">
          <input 
            id="chat-input"
            type="text" 
            value="${state.inputValue}" 
            oninput="state.inputValue = this.value"
            placeholder="${state.exerciseState.phase === 'active' ? (uiLangCode === 'ja' ? 'ここに回答を入力してください...' : 'Escreva sua resposta...') : dict.placeholderMessage}" 
            ${state.isLoading || (!state.useLocalAI && !state.geminiApiKey) ? 'disabled' : ''}
            class="w-full py-4 pl-6 pr-44 bg-[#F8F8F8] border border-[#EDEDED] rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:border-black focus:bg-white transition-all disabled:opacity-60 text-left"
          />

          <div class="absolute right-3 top-2.5 bottom-2.5 flex items-center gap-2">
            <!-- Explain didactic button helper -->
            <button 
              type="button" 
              onclick="handleQuickExplain()" 
              ${state.isLoading || state.messages.length === 0 ? 'disabled' : ''}
              class="hidden sm:flex items-center gap-1 px-3 py-1 bg-white hover:bg-[#F8F8F8] text-[11px] font-semibold text-slate-700 rounded-md border border-[#EDEDED] transition-all disabled:opacity-50 cursor-pointer"
              title="Solicitar explicação didática em linguagem natural"
            >
              <i data-lucide="help-circle" class="w-3.5 h-3.5 text-[#999999]"></i>
              <span>${dict.btnExplain}</span>
            </button>

            <!-- Submit trigger -->
            <button 
              type="submit" 
              id="send-btn"
              ${state.isLoading ? 'disabled' : ''}
              class="h-full px-5 bg-black text-white rounded-lg text-xs font-semibold uppercase tracking-wide disabled:bg-slate-200 disabled:text-slate-400 hover:opacity-90 transition-all cursor-pointer flex items-center justify-center"
            >
              ${dict.btnSend || "Enviar"}
            </button>
          </div>
        </form>

      </div>
    </div>
  `;
}

// Event hooks inside Fale Sobre
window.toggleEngine = function(val) {
  state.useLocalAI = val === "ollama";
  localStorage.setItem("professor_use_local_ai", String(state.useLocalAI));
  state.apiError = null;
  render();
};

window.fillLastAnswer = function() {
  if (state.exerciseState.lastAnswer) {
    state.inputValue = state.exerciseState.lastAnswer;
    render();
    const chatInput = document.getElementById("chat-input");
    if (chatInput) {
      chatInput.focus();
    }
  }
};

window.submitForm = function(e) {
  e.preventDefault();
  if (state.isLoading) return;
  
  if (!state.inputValue.trim()) return;

  if (state.exerciseState.phase === "active") {
    handleSendExerciseAnswer();
  } else {
    handleSendTextMessage();
  }
};

/*
 * ============================================================
 * TAB 2: OLLAMA STATUS AND TESTING COMPONENT TEMPLATES
 * ============================================================
 */
function renderOllamaTabHtml() {
  return `
    <!-- Top Header Bar -->
    <header class="min-h-20 py-3 md:py-0 border-b border-[#EDEDED] bg-white flex flex-col sm:flex-row sm:items-center justify-between px-6 md:px-10 flex-shrink-0 z-10 gap-3">
      <div class="flex flex-wrap items-center gap-2 md:gap-3">
        <button onclick="toggleSidebar(true)" class="md:hidden p-2 border border-[#EDEDED] rounded-full text-black hover:bg-[#F8F8F8] cursor-pointer">
          <i data-lucide="menu" class="w-4 h-4"></i>
        </button>
        <div class="flex items-center space-x-2 text-xs text-[#666666]">
          <span class="font-semibold text-black">Ollama Configuração</span>
          <span>/</span>
          <span>Conexão Local</span>
        </div>
      </div>
      <div class="flex justify-end">
        <button onclick="switchTab('fale_sobre')" class="flex items-center space-x-2 px-4 py-2 bg-black text-white hover:bg-slate-800 transition-all rounded-full text-xs font-semibold cursor-pointer shadow-sm">
          <span>Ir para Aula</span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    </header>

    <!-- Scrollable Workspace container -->
    <div class="flex-1 overflow-y-auto px-6 md:px-10 py-10 no-scrollbar">
      <div class="w-full max-w-4xl mx-auto space-y-8 pb-20 text-left">
        
        <!-- Header Introduction banner -->
        <div class="bg-white border border-[#EDEDED] p-8 md:p-10 rounded-2xl shadow-sm text-left">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div class="space-y-3">
              <h1 class="text-3xl font-serif italic font-semibold text-[#111111] tracking-tight">IA Local — Ollama</h1>
              <p class="text-sm text-[#666666] max-w-2xl leading-relaxed">
                Execute modelos de inteligência artificial diretamente no seu computador, de forma local, gratuita e sem depender de APIs externas.
              </p>
              <div class="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 rounded-full border border-neutral-200">
                <i data-lucide="cpu" class="w-3.5 h-3.5 text-neutral-800"></i>
                <span class="text-[10px] font-bold uppercase tracking-wider text-neutral-800">Processamento Local</span>
              </div>
            </div>
            
            <!-- Beautiful Custom SVG Logo for Ollama -->
            <div class="flex-shrink-0 flex items-center justify-center">
              <svg class="w-20 h-20 md:w-24 md:h-24 text-neutral-900" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" rx="20" fill="#F8F8F8" />
                <path d="M50 25C40 25 32 33 32 43C32 50 35 55 40 58V75H60V58C65 55 68 50 68 43C68 33 60 25 50 25ZM50 35C54.4 35 58 38.6 58 43C58 47.4 54.4 51 50 51C45.6 51 42 47.4 42 43C42 38.6 45.6 35 50 35Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Downloads and Status Dashboard grids -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <!-- Download Links with Premium SVG OS Logos -->
          <div class="bg-white border border-[#EDEDED] p-6 md:p-8 rounded-2xl shadow-sm flex flex-col justify-between text-left">
            <div>
              <h2 class="text-base font-bold text-[#111111] mb-2 flex items-center gap-2">
                <i data-lucide="download" class="w-4 h-4"></i>
                Download do Ollama
              </h2>
              <p class="text-xs text-[#666666] mb-6 leading-relaxed">
                Instale o Ollama no seu computador para executar os modelos localmente.
              </p>
            </div>

            <div class="space-y-3">
              <!-- Windows download link -->
              <a href="https://ollama.com/download/OllamaSetup.exe" target="_blank" rel="noopener noreferrer" class="flex items-center justify-between p-4 bg-[#F8F8F8] hover:bg-neutral-100 border border-[#EDEDED] rounded-xl transition-all group">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center p-1.5 flex-shrink-0">
                    <svg class="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M0 3.449L9.75 2.1v9.451H0V3.449zM0 12.45h9.75v9.451L0 20.551V12.45zM10.749 1.95L24 0v11.55H10.749V1.95zM10.749 12.45H24v11.55l-13.251-1.95V12.45z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs font-bold text-neutral-800">Versão para Windows</p>
                    <p class="text-[10px] text-neutral-500">OllamaSetup.exe • Win 10+</p>
                  </div>
                </div>
                <i data-lucide="chevron-right" class="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform"></i>
              </a>

              <!-- macOS download link -->
              <a href="https://ollama.com/download/Ollama.dmg" target="_blank" rel="noopener noreferrer" class="flex items-center justify-between p-4 bg-[#F8F8F8] hover:bg-neutral-100 border border-[#EDEDED] rounded-xl transition-all group">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center p-1.5 flex-shrink-0">
                    <svg class="w-5 h-5 text-neutral-800" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.5-.63.73-1.18 1.87-1.03 2.98.12.01.24.02.36.02.88 0 2-.63 2.62-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs font-bold text-neutral-800">Versão para macOS</p>
                    <p class="text-[10px] text-neutral-500">Ollama.dmg • Silicon ou Intel</p>
                  </div>
                </div>
                <i data-lucide="chevron-right" class="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform"></i>
              </a>

              <!-- Linux script command line information -->
              <a href="https://ollama.com/download/linux" target="_blank" rel="noopener noreferrer" class="flex items-center justify-between p-4 bg-[#F8F8F8] hover:bg-neutral-100 border border-[#EDEDED] rounded-xl transition-all group">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center p-1.5 flex-shrink-0">
                    <svg class="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .007c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.536 17.514c-.381.185-.724.164-.993-.075l-4.431-4.148c-.417-.39-.427-1.04-.022-1.442l.859-.854c.4-.399 1.042-.387 1.443.023l2.457 2.505 5.586-6.196c.391-.433 1.035-.46 1.455-.062l.894.846c.422.399.431 1.053.023 1.464l-7.271 7.942z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs font-bold text-neutral-800">Versão para Linux</p>
                    <p class="text-[10px] text-neutral-500">Comando via terminal curl</p>
                  </div>
                </div>
                <i data-lucide="chevron-right" class="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </div>

          <!-- Status Panel and Model settings config -->
          <div class="bg-white border border-[#EDEDED] p-6 md:p-8 rounded-2xl shadow-sm flex flex-col justify-between text-left">
            <div>
              <div class="flex justify-between items-center mb-4">
                <h2 class="text-base font-bold text-[#111111] flex items-center gap-2">
                  <i data-lucide="layers" class="w-4 h-4"></i>
                  Status do Ollama
                </h2>
                <button onclick="checkOllamaConnection(true)" ${state.ollamaChecking ? 'disabled' : ''} class="p-1.5 border border-neutral-200 rounded-full hover:bg-neutral-50 cursor-pointer text-neutral-600 disabled:opacity-50">
                  <i data-lucide="refresh-cw" class="w-3.5 h-3.5 ${state.ollamaChecking ? 'animate-spin' : ''}"></i>
                </button>
              </div>

              <!-- Live connection state box card -->
              <div class="p-5 rounded-xl border flex gap-4 items-start ${
                state.ollamaStatus === 'connected' 
                  ? 'bg-green-50/50 border-green-100' 
                  : state.ollamaStatus === 'disconnected' 
                  ? 'bg-amber-50/50 border-amber-100' 
                  : 'bg-neutral-50 border-neutral-200'
              }">
                <div class="pt-0.5">
                  ${state.ollamaStatus === 'connected' 
                    ? '<i data-lucide="check-circle" class="w-5 h-5 text-green-600"></i>' 
                    : state.ollamaStatus === 'disconnected' 
                    ? '<i data-lucide="x-circle" class="w-5 h-5 text-amber-600"></i>' 
                    : '<i data-lucide="refresh-cw" class="w-5 h-5 text-neutral-400 animate-spin"></i>'
                  }
                </div>
                <div class="space-y-1.5">
                  <p class="text-xs font-bold text-neutral-900 uppercase tracking-wide">
                    ${state.ollamaStatus === 'connected' ? 'Ollama Conectado' : state.ollamaStatus === 'disconnected' ? 'Ollama Desconectado' : 'Verificando...'}
                  </p>
                  <p class="text-xs text-neutral-600 leading-relaxed">
                    ${state.ollamaStatus === 'connected' 
                      ? `${state.ollamaModels.length} modelo(s) de linguagem disponível(is) localmente.` 
                      : state.ollamaStatus === 'disconnected' 
                      ? 'Não foi possível detectar o serviço do Ollama na porta padrão 11434.' 
                      : 'Carregando comunicação de soquete de rede local com localhost...'
                    }
                  </p>
                </div>
              </div>

              <!-- Manual check feedback messages -->
              ${state.ollamaCheckMessage ? `
                <div class="mt-3 p-3 rounded-lg text-xs font-medium border ${
                  state.ollamaCheckMessage.type === 'success' 
                    ? 'bg-green-50 border-green-100 text-green-800' 
                    : state.ollamaCheckMessage.type === 'error' 
                    ? 'bg-red-50 border-red-100 text-red-800' 
                    : 'bg-blue-50 border-blue-100 text-blue-800'
                }">
                  ${state.ollamaCheckMessage.text}
                </div>
              ` : ''}
            </div>

            <!-- Active model selection or Pull panel -->
            <div class="mt-6 space-y-4 pt-4 border-t border-[#EDEDED]/50">
              ${state.ollamaStatus === 'connected' ? `
                <label class="text-[10px] uppercase tracking-widest text-[#999999] font-bold block">
                  Modelo de IA Ativo
                </label>
                ${state.ollamaModels.length > 0 ? `
                  <div class="flex gap-2">
                    <select id="active-model-select" onchange="changeActiveModel(this.value)" class="flex-1 text-xs py-2.5 px-3 border border-neutral-200 rounded-lg bg-white">
                      ${state.ollamaModels.map(m => `
                        <option value="${m.name}" ${m.name === state.activeLocalModel ? 'selected' : ''}>
                          ${m.name} ${m.details?.parameter_size ? `(${m.details.parameter_size})` : ''}
                        </option>
                      `).join('')}
                    </select>
                    <button onclick="toggleUseLocal(true)" class="px-4 text-xs font-bold rounded-lg border cursor-pointer transition-all ${
                      state.useLocalAI 
                        ? 'bg-green-600 text-white border-green-600' 
                        : 'bg-white text-neutral-800 border-neutral-200'
                    }">
                      ${state.useLocalAI ? 'Ativo' : 'Ativar'}
                    </button>
                  </div>
                ` : `
                  <!-- No models installed panel pull -->
                  <div class="space-y-3">
                    <p class="text-xs text-amber-600 bg-amber-50 p-3 rounded-lg border border-amber-100">
                      O serviço está ativo, porém nenhum modelo foi baixado localmente.
                    </p>
                    <div class="flex gap-2">
                      <input id="pull-model-input" type="text" value="${state.ollamaPullModelName}" oninput="state.ollamaPullModelName = this.value" placeholder="ex: llama3.2" class="flex-1 text-xs px-3 py-2 border border-neutral-200 rounded-lg" />
                      <button onclick="handlePullModel()" class="px-4 py-2 bg-neutral-950 text-white text-xs font-bold rounded-lg">Baixar</button>
                    </div>
                    ${state.ollamaPullProgress ? `
                      <p class="text-[10px] text-neutral-500 font-mono">${state.ollamaPullProgress}</p>
                    ` : ''}
                  </div>
                `}
              ` : `
                <p class="text-xs text-neutral-500 bg-neutral-100 p-3.5 rounded-lg border border-neutral-200/50">
                  💡 <strong>Dica:</strong> Certifique-se de iniciar o Ollama no seu computador antes de tentar conectar.
                </p>
              `}
            </div>
          </div>
        </div>

        <!-- Installation Guidelines timeline -->
        <div class="bg-white border border-[#EDEDED] p-8 md:p-10 rounded-2xl shadow-sm text-left">
          <h2 class="text-base font-bold text-[#111111] mb-6 flex items-center gap-2">
            <i data-lucide="help-circle" class="w-4 h-4"></i>
            Como Instalar e Configurar o Ollama
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-5 gap-6">
            <div class="space-y-2">
              <div class="w-8 h-8 rounded-full bg-neutral-950 text-white flex items-center justify-center text-xs font-bold">1</div>
              <p class="text-xs font-bold">Baixe o Ollama</p>
              <p class="text-[11px] text-neutral-500 leading-relaxed">Baixe a versão correspondente ao seu sistema operacional.</p>
            </div>
            <div class="space-y-2">
              <div class="w-8 h-8 rounded-full bg-neutral-100 border flex items-center justify-center text-xs font-bold text-neutral-800">2</div>
              <p class="text-xs font-bold">Instale o app</p>
              <p class="text-[11px] text-neutral-500 leading-relaxed">Dê dois cliques no arquivo baixado e siga o assistente.</p>
            </div>
            <div class="space-y-2">
              <div class="w-8 h-8 rounded-full bg-neutral-100 border flex items-center justify-center text-xs font-bold text-neutral-800">3</div>
              <p class="text-xs font-bold">Conecte via CORS</p>
              <p class="text-[11px] text-neutral-500 leading-relaxed">O navegador precisa de permissão de origem para requisições.</p>
            </div>
            <div class="space-y-2">
              <div class="w-8 h-8 rounded-full bg-neutral-100 border flex items-center justify-center text-xs font-bold text-neutral-800">4</div>
              <p class="text-xs font-bold">Inicie o serviço</p>
              <p class="text-[11px] text-neutral-500 leading-relaxed">Execute o Ollama com a origem liberada.</p>
            </div>
            <div class="space-y-2">
              <div class="w-8 h-8 rounded-full bg-neutral-100 border flex items-center justify-center text-xs font-bold text-neutral-800">5</div>
              <p class="text-xs font-bold">Baixe o modelo</p>
              <p class="text-[11px] text-neutral-500 leading-relaxed">Baixe o modelo recomendado para começar.</p>
            </div>
          </div>

          <div class="mt-8 p-6 bg-blue-50 border border-blue-100 rounded-xl space-y-4 text-xs text-neutral-700">
            <div class="flex gap-3">
              <i data-lucide="terminal" class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"></i>
              <p class="font-bold text-neutral-900 text-sm">Primeira vez configurando? Habilite o CORS para comunicação segura:</p>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
              <!-- Windows Steps -->
              <div class="space-y-2 bg-white/60 p-4 rounded-lg border border-blue-100/50 flex flex-col justify-between">
                <div>
                  <span class="inline-block px-2 py-0.5 bg-blue-600 text-white rounded text-[10px] font-bold uppercase mb-2">Windows</span>
                  <ol class="list-decimal pl-4 space-y-1.5 text-neutral-700 text-[11px] leading-relaxed">
                    <li>Feche o Ollama clicando com o botão direito no ícone da lhama na barra de tarefas (perto do relógio) e selecionando <strong>Quit</strong>.</li>
                    <li>Se estiver usando o <strong>PowerShell</strong>, execute:</li>
                    <code class="block p-1.5 bg-neutral-900 text-neutral-200 rounded font-mono text-[9px] select-all">$env:OLLAMA_ORIGINS="*" ; ollama serve</code>
                    <li>Se estiver usando o <strong>Prompt de Comando (CMD)</strong> tradicional, execute:</li>
                    <code class="block p-1.5 bg-neutral-900 text-neutral-200 rounded font-mono text-[9px] select-all">set OLLAMA_ORIGINS=* && ollama serve</code>
                    <li>Em uma nova aba ou janela de terminal, baixe o modelo recomendado:</li>
                    <code class="block p-1.5 bg-neutral-900 text-neutral-200 rounded font-mono text-[9px] select-all">ollama pull llama3.2</code>
                  </ol>
                </div>
              </div>

              <!-- macOS Steps -->
              <div class="space-y-2 bg-white/60 p-4 rounded-lg border border-blue-100/50 flex flex-col justify-between">
                <div>
                  <span class="inline-block px-2 py-0.5 bg-neutral-800 text-white rounded text-[10px] font-bold uppercase mb-2">macOS</span>
                  <ol class="list-decimal pl-4 space-y-1.5 text-neutral-700 text-[11px] leading-relaxed">
                    <li>Feche o Ollama clicando no ícone do menu superior e selecionando <strong>Quit</strong>.</li>
                    <li>Abra o seu <strong>Terminal</strong> e configure a variável global de CORS executando:</li>
                    <code class="block p-1.5 bg-neutral-900 text-neutral-200 rounded font-mono text-[9px] select-all">launchctl setenv OLLAMA_ORIGINS "*"</code>
                    <li>Inicie o Ollama via terminal para carregar as alterações:</li>
                    <code class="block p-1.5 bg-neutral-900 text-neutral-200 rounded font-mono text-[9px] select-all">OLLAMA_ORIGINS="*" ollama serve</code>
                    <li>Baixe o modelo em uma nova aba do terminal:</li>
                    <code class="block p-1.5 bg-neutral-900 text-neutral-200 rounded font-mono text-[9px] select-all">ollama pull llama3.2</code>
                  </ol>
                </div>
              </div>

              <!-- Linux Steps -->
              <div class="space-y-2 bg-white/60 p-4 rounded-lg border border-blue-100/50 flex flex-col justify-between">
                <div>
                  <span class="inline-block px-2 py-0.5 bg-orange-600 text-white rounded text-[10px] font-bold uppercase mb-2">Linux</span>
                  <ol class="list-decimal pl-4 space-y-1.5 text-neutral-700 text-[11px] leading-relaxed">
                    <li>Se o Ollama estiver rodando como um serviço do systemd, edite o arquivo de configuração executando:</li>
                    <code class="block p-1.5 bg-neutral-900 text-neutral-200 rounded font-mono text-[9px] select-all">sudo systemctl edit ollama</code>
                    <li>Adicione estas linhas no editor que abrir:</li>
                    <pre class="block p-1.5 bg-neutral-900 text-neutral-200 rounded font-mono text-[9px] whitespace-pre">[Service]
Environment="OLLAMA_ORIGINS=*"</pre>
                    <li>Recarregue o systemd e reinicie o serviço:</li>
                    <code class="block p-1.5 bg-neutral-900 text-neutral-200 rounded font-mono text-[9px] select-all">sudo systemctl daemon-reload && sudo systemctl restart ollama</code>
                    <li>Baixe o modelo pelo terminal:</li>
                    <code class="block p-1.5 bg-neutral-900 text-neutral-200 rounded font-mono text-[9px] select-all">ollama pull llama3.2</code>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Testing Playground Component Panel -->
        <div class="bg-white border border-[#EDEDED] p-8 md:p-10 rounded-2xl shadow-sm text-left">
          <h2 class="text-base font-bold text-[#111111] mb-2 flex items-center gap-2">
            <i data-lucide="play" class="w-4 h-4"></i>
            Testar IA Local
          </h2>
          <p class="text-xs text-[#666666] mb-6 leading-relaxed">
            Envie um prompt para testar a velocidade de processamento offline do seu modelo local.
          </p>

          <div class="space-y-4">
            <div class="flex flex-col sm:flex-row gap-3">
              <input 
                id="ollama-test-prompt-input"
                type="text" 
                value="${state.ollamaTestInput}" 
                oninput="state.ollamaTestInput = this.value"
                placeholder="Escreva algo..." 
                ${state.ollamaTestingAI ? 'disabled' : ''}
                class="flex-1 py-3 px-4 bg-[#F8F8F8] border border-[#EDEDED] rounded-xl text-sm focus:outline-none focus:border-black text-left"
              />
              <button onclick="handleTestLocalAI()" ${state.ollamaTestingAI ? 'disabled' : ''} class="px-6 py-3 bg-neutral-950 text-white rounded-xl text-xs font-semibold disabled:bg-neutral-200 disabled:text-neutral-400 flex items-center justify-center gap-2 flex-shrink-0">
                ${state.ollamaTestingAI ? 'Processando...' : 'Testar IA'}
              </button>
            </div>

            <!-- Playground Testing responses -->
            ${state.ollamaTestResponse ? `
              <div class="p-5 bg-green-50/20 border border-green-100 rounded-xl">
                <span class="text-[10px] font-bold uppercase tracking-wider text-green-800">Resposta do modelo local</span>
                <p class="text-sm text-neutral-800 font-serif italic mt-2 leading-relaxed">"${state.ollamaTestResponse}"</p>
              </div>
            ` : ''}

            <!-- Playground Testing errors -->
            ${state.ollamaTestError ? `
              <div class="p-5 bg-red-50/20 border border-red-100 rounded-xl flex gap-3 text-xs text-red-700">
                <i data-lucide="alert-circle" class="w-4.5 h-4.5 text-red-600 flex-shrink-0"></i>
                <p class="leading-relaxed font-medium">${state.ollamaTestError}</p>
              </div>
            ` : ''}
          </div>
        </div>

      </div>
    </div>
  `;
}

// Ollama event listeners hooks
window.changeActiveModel = function(modelName) {
  state.activeLocalModel = modelName;
  localStorage.setItem("professor_active_local_model", modelName);
  render();
};

window.toggleUseLocal = function(forceVal = null) {
  state.useLocalAI = forceVal !== null ? forceVal : !state.useLocalAI;
  localStorage.setItem("professor_use_local_ai", String(state.useLocalAI));
  render();
};


/*
 * ============================================================
 * SETUP / ONBOARDING VIEW TEMPLATES
 * ============================================================
 */
let setupState = {
  showForm: false,
  target: "",
  source: "",
  level: "Intermediário",
  error: ""
};

function renderLanguageSelector(container) {
  const targetSuggestions = ["Inglês", "Francês", "Espanhol", "Alemão", "Italiano", "Japonês", "Português"];
  const sourceSuggestions = ["Português", "Espanhol", "Inglês"];

  container.innerHTML = `
    <div class="min-h-screen w-full flex items-center justify-center bg-[#FAFAFA] px-4 py-12">
      <div class="w-full max-w-md bg-white border border-[#EDEDED] rounded-2xl p-8 shadow-sm text-left">
        
        <!-- Onboarding welcome banner -->
        ${!setupState.showForm ? `
          <div class="text-center mb-8 animate-in fade-in zoom-in-95 duration-300">
            <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F8F8F8] border border-[#EDEDED] mb-4 text-black">
              <i data-lucide="globe" class="w-5 h-5"></i>
            </div>
            <h1 class="text-2xl text-[#111111] tracking-tight">
              <span class="font-serif italic font-semibold">Professor</span>
            </h1>
            <div class="w-8 h-0.5 bg-black mx-auto mt-2 mb-3"></div>
            <p class="text-xs text-[#666666] max-w-xs mx-auto leading-relaxed">
              Seu professor particular de idiomas baseado em Inteligência Artificial.
            </p>
          </div>

          <div class="space-y-3 animate-in fade-in duration-300">
            <button onclick="toggleSetupForm(true)" class="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm active:scale-[0.98] cursor-pointer">
              <span>Selecionar Novo Idioma</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>

            <button onclick="continueStudyingDefault()" class="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#F8F8F8] hover:bg-[#EDEDED] text-[#111111] text-xs font-bold uppercase tracking-wider rounded-xl transition-all border border-[#EDEDED] active:scale-[0.98] cursor-pointer">
              <span>Continuar Estudando (Padrão: Inglês)</span>
            </button>
          </div>
        ` : `
          <!-- Minimised Header selector form -->
          <div class="flex items-center justify-between mb-8 pb-4 border-b border-[#EDEDED] animate-in slide-in-from-top-4 duration-300">
            <button onclick="toggleSetupForm(false)" class="p-2 -ml-2 rounded-full hover:bg-[#F8F8F8] text-[#666666] hover:text-black transition-colors cursor-pointer" title="Voltar">
              <i data-lucide="arrow-left" class="w-4 h-4"></i>
            </button>
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 rounded-full bg-[#F8F8F8] border border-[#EDEDED] flex items-center justify-center">
                <i data-lucide="globe" class="w-3 h-3 text-black"></i>
              </div>
              <span class="text-xs tracking-tight text-[#111111]">
                <span class="font-serif italic font-semibold">Professor</span> / Configuração
              </span>
            </div>
            <div class="w-8"></div>
          </div>

          <form onsubmit="submitSetupForm(event)" class="space-y-6 animate-in fade-in duration-300">
            <!-- Source Language Suggestions -->
            <div>
              <label class="block text-[10px] uppercase tracking-widest text-[#999999] mb-2.5 font-bold">
                Seu idioma de origem
              </label>
              <div class="flex flex-wrap gap-2">
                ${sourceSuggestions.map(lang => `
                  <button type="button" onclick="selectSourceLanguage('${lang}')" class="text-xs px-4 py-2.5 rounded-xl border transition-all font-semibold ${
                    setupState.source === lang 
                      ? 'bg-black border-black text-white shadow-sm' 
                      : 'bg-[#F8F8F8] border-[#EDEDED] text-slate-600 hover:border-black hover:bg-white'
                  }">
                    ${lang}
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Target Language Suggestions -->
            <div>
              <label class="block text-[10px] uppercase tracking-widest text-[#999999] mb-2.5 font-bold">
                Idioma que deseja aprender
              </label>
              <div class="flex flex-wrap gap-2">
                ${targetSuggestions.map(lang => `
                  <button type="button" onclick="selectTargetLanguage('${lang}')" class="text-xs px-4 py-2.5 rounded-xl border transition-all font-semibold ${
                    setupState.target === lang 
                      ? 'bg-black border-black text-white shadow-sm' 
                      : 'bg-[#F8F8F8] border-[#EDEDED] text-slate-600 hover:border-black hover:bg-white'
                  }">
                    ${lang}
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Proficiency Levels -->
            <div>
              <label class="block text-[10px] uppercase tracking-widest text-[#999999] mb-2.5 font-bold">
                Nível atual no idioma
              </label>
              <div class="grid grid-cols-3 gap-2">
                ${["Básico", "Intermediário", "Avançado"].map(lvl => `
                  <button type="button" onclick="selectSetupLevel('${lvl}')" class="py-2.5 px-3 text-xs font-semibold border rounded-xl transition-all cursor-pointer ${
                    setupState.level === lvl 
                      ? 'bg-black border-black text-white shadow-sm' 
                      : 'bg-[#F8F8F8] border-[#EDEDED] text-slate-600 hover:border-black hover:bg-white'
                  }">
                    ${lvl}
                  </button>
                `).join('')}
              </div>
            </div>

            ${setupState.error ? `
              <p class="text-xs font-semibold text-red-500 text-center">${setupState.error}</p>
            ` : ''}

            <button type="submit" class="w-full flex items-center justify-center gap-2 py-3 px-4 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm cursor-pointer">
              <span>Começar a estudar</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          </form>
        `}

        <div class="mt-8 pt-6 border-t border-[#EDEDED] flex items-center justify-center gap-2 text-[10px] text-slate-400">
          <i data-lucide="sparkles" class="w-3.5 h-3.5 text-amber-500 animate-pulse"></i>
          <span class="uppercase tracking-wider font-bold">Tecnologia Open-Source Gratuita</span>
        </div>
      </div>
    </div>
  `;
}

// Onboarding actions helpers
window.toggleSetupForm = function(show) {
  setupState.showForm = show;
  render();
};

window.selectSourceLanguage = function(lang) {
  setupState.source = lang;
  setupState.error = "";
  render();
};

window.selectTargetLanguage = function(lang) {
  setupState.target = lang;
  setupState.error = "";
  render();
};

window.selectSetupLevel = function(lvl) {
  setupState.level = lvl;
  render();
};

window.continueStudyingDefault = function() {
  const defaultLangs = {
    target: "Inglês",
    source: "Português",
    level: "Intermediário"
  };
  saveLanguagesAndGreet(defaultLangs);
};

window.submitSetupForm = function(e) {
  e.preventDefault();
  if (!setupState.source || !setupState.target) {
    setupState.error = "Por favor, selecione ambos os idiomas para iniciar.";
    render();
    return;
  }
  const chosen = {
    target: setupState.target,
    source: setupState.source,
    level: setupState.level
  };
  saveLanguagesAndGreet(chosen);
};

function saveLanguagesAndGreet(langs) {
  state.userLanguages = langs;
  state.activeUILanguage = "target";
  
  const code = normalizeLanguage(langs.target);
  const dict = translations[code] || translations.en;
  
  state.messages = [
    {
      id: "welcome",
      role: "assistant",
      content: dict.welcomeMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: "text"
    }
  ];
  
  saveStateToLocalStorage();
  render();
}

/*
 * ============================================================
 * BOOTSTRAPPING APPLICATION INIT
 * ============================================================
 */
document.addEventListener("DOMContentLoaded", () => {
  loadLocalStorage();
  render();
  checkOllamaConnection(false);
});
