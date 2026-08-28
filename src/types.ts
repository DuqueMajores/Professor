export type AppLanguage = "pt" | "en" | "fr" | "es" | "de" | "it" | "ja";

export interface UserLanguages {
  target: string; // O idioma que deseja aprender (ex: "Francês")
  source: string; // O idioma de origem (ex: "Português")
  level: string;  // Nível: "Básico", "Intermediário", "Avançado"
}

export type MessageType = "text" | "exercise_start" | "exercise_feedback";

export interface ExerciseStartData {
  text: string;
  instruction: string;
}

export interface CorrectionItem {
  original: string;
  corrected: string;
  explanation: string;
}

export interface ExerciseFeedbackData {
  hasErrors: boolean;
  corrections: CorrectionItem[];
  message: string;
  topic: string;
  studentAnswer: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string; // Texto principal
  timestamp: string;
  type: MessageType;
  exerciseData?: ExerciseStartData | ExerciseFeedbackData;
}

export interface UIStringDictionary {
  appName: string;
  studySection: string;
  faleSobre: string;
  comingSoon: string;
  conversacao: string;
  vocabulario: string;
  gramatica: string;
  traducao: string;
  escuta: string;
  pronuncia: string;
  revisao: string;
  startExercise: string;
  newExercise: string;
  placeholderMessage: string;
  setupTitle: string;
  setupSubtitle: string;
  targetLangLabel: string;
  targetLangPlaceholder: string;
  sourceLangLabel: string;
  sourceLangPlaceholder: string;
  levelLabel: string;
  levelBasic: string;
  levelIntermediate: string;
  levelAdvanced: string;
  btnStart: string;
  btnExplain: string;
  btnToggleLang: string;
  emptyError: string;
  apiKeyErrorTitle: string;
  apiKeyErrorDesc: string;
  errorGeneric: string;
  welcomeMessage: string;
  exerciseTitle: string;
  interpretationLabel: string;
  rewriteLabel: string;
  evaluationTitle: string;
  scoreTitle: string;
  btnSend: string;
  typingIndicator: string;
}
