import React, { useState, useEffect } from "react";
import {
  Download,
  CheckCircle,
  XCircle,
  RefreshCw,
  Cpu,
  HelpCircle,
  AlertCircle,
  Layers,
  ChevronRight,
  Play,
  Terminal
} from "lucide-react";

interface OllamaSectionProps {
  onSetUseLocalAI: (useLocal: boolean, modelName: string) => void;
  activeLocalModel: string;
  useLocalAI: boolean;
}

interface OllamaModel {
  name: string;
  size?: number;
  details?: {
    parameter_size?: string;
    family?: string;
  };
}

const OLLAMA_URL = "http://127.0.0.1:11434";

export default function OllamaSection({
  onSetUseLocalAI,
  activeLocalModel,
  useLocalAI
}: OllamaSectionProps) {
  const [status, setStatus] = useState<
    "checking" | "connected" | "disconnected"
  >("checking");

  const [checking, setChecking] = useState(false);
  const [models, setModels] = useState<OllamaModel[]>([]);

  const [selectedModel, setSelectedModel] = useState<string>(
    activeLocalModel || "llama3.2"
  );

  const [testInput, setTestInput] = useState(
    "Olá! Você está funcionando localmente?"
  );

  const [testResponse, setTestResponse] = useState<string | null>(null);
  const [testingAI, setTestingAI] = useState(false);
  const [testError, setTestError] = useState<string | null>(null);

  const [isPulling, setIsPulling] = useState(false);
  const [pullModelName, setPullModelName] = useState("llama3.2");
  const [pullProgress, setPullProgress] = useState<string | null>(null);

  const [checkMessage, setCheckMessage] = useState<{
    text: string;
    type: "success" | "error" | "info";
  } | null>(null);

  /*
   * ============================================================
   * VERIFICAR CONEXÃO COM O OLLAMA
   * ============================================================
   */

  const checkOllamaConnection = async (showLoading = false) => {
    if (showLoading) {
      setChecking(true);
      setCheckMessage({
        text: "Verificando conexão com o Ollama...",
        type: "info"
      });
    }

    try {
      const controller = new AbortController();

      const timeout = setTimeout(() => {
        controller.abort();
      }, 5000);

      const response = await fetch(`${OLLAMA_URL}/api/tags`, {
        method: "GET",
        headers: {
          Accept: "application/json"
        },
        mode: "cors",
        signal: controller.signal
      });

      clearTimeout(timeout);

      if (!response.ok) {
        throw new Error(`HTTP_${response.status}`);
      }

      const data = await response.json();

      const modelList: OllamaModel[] = Array.isArray(data.models)
        ? data.models
        : [];

      setModels(modelList);
      setStatus("connected");

      /*
       * Se já houver modelos instalados,
       * verifica se o modelo selecionado existe.
       */

      if (modelList.length > 0) {
        const selectedExists = modelList.some(
          (model) =>
            model.name === selectedModel ||
            model.name.startsWith(`${selectedModel}:`)
        );

        if (!selectedExists) {
          const firstModel = modelList[0].name;

          setSelectedModel(firstModel);

          onSetUseLocalAI(useLocalAI, firstModel);
        }
      }

      if (showLoading) {
        setCheckMessage({
          text:
            modelList.length > 0
              ? `Ollama conectado. ${modelList.length} modelo(s) encontrado(s).`
              : "Ollama conectado, mas nenhum modelo está instalado.",
          type: "success"
        });

        setTimeout(() => {
          setCheckMessage(null);
        }, 5000);
      }
    } catch (error: any) {
      console.error("Erro ao conectar ao Ollama:", error);

      setStatus("disconnected");

      let message =
        "Não foi possível acessar a API do Ollama em http://127.0.0.1:11434.";

      if (error?.name === "AbortError") {
        message =
          "O Ollama não respondeu dentro do tempo esperado. Verifique se o servidor está em execução.";
      } else if (error?.message?.startsWith("HTTP_")) {
        message =
          `O Ollama respondeu com o erro ${error.message.replace(
            "HTTP_",
            "HTTP "
          )}.`;
      } else {
        message =
          "O navegador não conseguiu acessar o Ollama. Verifique se o Ollama está rodando e se OLLAMA_ORIGINS=* está configurado.";
      }

      if (showLoading) {
        setCheckMessage({
          text: message,
          type: "error"
        });
      }
    } finally {
      if (showLoading) {
        setChecking(false);
      }
    }
  };

  /*
   * ============================================================
   * BUSCAR MODELOS INSTALADOS
   * ============================================================
   */

  const fetchModels = async () => {
    try {
      const response = await fetch(`${OLLAMA_URL}/api/tags`, {
        method: "GET",
        headers: {
          Accept: "application/json"
        },
        mode: "cors"
      });

      if (!response.ok) {
        throw new Error(`HTTP_${response.status}`);
      }

      const data = await response.json();

      const modelList: OllamaModel[] = Array.isArray(data.models)
        ? data.models
        : [];

      setModels(modelList);

      if (modelList.length > 0) {
        const selectedExists = modelList.some(
          (model) =>
            model.name === selectedModel ||
            model.name.startsWith(`${selectedModel}:`)
        );

        if (!selectedExists) {
          const firstModel = modelList[0].name;

          setSelectedModel(firstModel);

          onSetUseLocalAI(useLocalAI, firstModel);
        }
      }
    } catch (error) {
      console.warn(
        "Não foi possível carregar os modelos do Ollama:",
        error
      );
    }
  };

  /*
   * ============================================================
   * TESTAR IA LOCAL
   * ============================================================
   */

  const handleTestAI = async () => {
    if (testingAI) return;

    if (!selectedModel) {
      setTestError(
        "Nenhum modelo foi selecionado. Instale um modelo do Ollama primeiro."
      );
      return;
    }

    if (!testInput.trim()) {
      setTestError("Digite uma mensagem para testar a IA.");
      return;
    }

    setTestingAI(true);
    setTestError(null);
    setTestResponse(null);

    try {
      const response = await fetch(`${OLLAMA_URL}/api/chat`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },

        mode: "cors",

        body: JSON.stringify({
          model: selectedModel,

          messages: [
            {
              role: "user",
              content: testInput.trim()
            }
          ],

          stream: false
        })
      });

      const responseText = await response.text();

      if (!response.ok) {
        let apiError = `HTTP ${response.status}`;

        try {
          const errorData = JSON.parse(responseText);

          if (errorData?.error) {
            apiError = errorData.error;
          }
        } catch {
          // A resposta não era JSON.
        }

        throw new Error(apiError);
      }

      let data;

      try {
        data = JSON.parse(responseText);
      } catch {
        throw new Error(
          "O Ollama respondeu em um formato que o site não conseguiu interpretar."
        );
      }

      const answer = data?.message?.content;

      if (!answer) {
        throw new Error(
          "O modelo respondeu, mas não enviou conteúdo de texto."
        );
      }

      setTestResponse(answer);
    } catch (error: any) {
      console.error("Erro no teste da IA local:", error);

      const errorMessage = String(error?.message || "");

      if (
        errorMessage.includes("Failed to fetch") ||
        errorMessage.includes("NetworkError") ||
        errorMessage.includes("fetch") ||
        error?.name === "TypeError"
      ) {
        setTestError(
          "O navegador não conseguiu acessar o Ollama. Verifique se o Ollama está rodando em http://127.0.0.1:11434 e se foi iniciado com OLLAMA_ORIGINS=*."
        );
      } else if (
        errorMessage.toLowerCase().includes("model") &&
        errorMessage.toLowerCase().includes("not found")
      ) {
        setTestError(
          `O modelo "${selectedModel}" não está instalado. Execute no terminal: ollama pull ${selectedModel}`
        );
      } else {
        setTestError(
          `O Ollama retornou um erro: ${errorMessage}`
        );
      }
    } finally {
      setTestingAI(false);
    }
  };

  /*
   * ============================================================
   * BAIXAR MODELO
   * ============================================================
   */

  const handlePullModel = async () => {
    if (isPulling) return;

    const modelName = pullModelName.trim();

    if (!modelName) {
      setPullProgress("Digite o nome de um modelo.");
      return;
    }

    setIsPulling(true);
    setPullProgress("Iniciando download do modelo...");

    try {
      const response = await fetch(`${OLLAMA_URL}/api/pull`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },

        mode: "cors",

        body: JSON.stringify({
          name: modelName,
          stream: false
        })
      });

      const responseText = await response.text();

      if (!response.ok) {
        let apiError = `HTTP ${response.status}`;

        try {
          const errorData = JSON.parse(responseText);

          if (errorData?.error) {
            apiError = errorData.error;
          }
        } catch {
          // Ignora resposta não JSON.
        }

        throw new Error(apiError);
      }

      setPullProgress(
        `Modelo "${modelName}" baixado com sucesso.`
      );

      await fetchModels();

      setSelectedModel(modelName);

      onSetUseLocalAI(useLocalAI, modelName);
    } catch (error: any) {
      console.error("Erro ao baixar modelo:", error);

      setPullProgress(
        `Não foi possível baixar "${modelName}". ${error?.message || ""}`
      );
    } finally {
      setIsPulling(false);
    }
  };

  /*
   * ============================================================
   * VERIFICAR AO ABRIR O COMPONENTE
   * ============================================================
   */

  useEffect(() => {
    checkOllamaConnection(false);

    const interval = setInterval(() => {
      checkOllamaConnection(false);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  /*
   * ============================================================
   * INTERFACE
   * ============================================================
   */

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300 pb-20">

      {/* HEADER */}

      <div className="bg-white border border-[#EDEDED] p-8 md:p-10 rounded-2xl shadow-sm text-left">

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

          <div className="space-y-3">

            <h1 className="text-3xl font-serif italic font-semibold text-[#111111] tracking-tight">
              IA Local — Ollama
            </h1>

            <p className="text-sm text-[#666666] max-w-2xl leading-relaxed">
              Execute modelos de inteligência artificial diretamente no seu
              computador, de forma local, gratuita e sem depender de APIs
              externas.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 rounded-full border border-neutral-200">

              <Cpu className="w-3.5 h-3.5 text-neutral-800" />

              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-800">
                Processamento Local
              </span>

            </div>

          </div>

          <div className="flex-shrink-0 flex items-center justify-center">

            <img
              src="/ollama-ai-logo.webp"
              onError={(event) => {
                (event.target as HTMLElement).style.display = "none";
              }}
              alt="Ollama Logo"
              className="w-20 h-20 md:w-24 md:h-24 object-contain"
            />

          </div>

        </div>

      </div>

      {/* DOWNLOAD + STATUS */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* DOWNLOAD */}

        <div className="bg-white border border-[#EDEDED] p-6 md:p-8 rounded-2xl shadow-sm flex flex-col justify-between text-left">

          <div>

            <h2 className="text-lg font-semibold text-[#111111] mb-2 flex items-center gap-2">

              <Download className="w-4 h-4" />

              Download do Ollama

            </h2>

            <p className="text-xs text-[#666666] mb-6 leading-relaxed">
              Instale o Ollama no seu computador para executar os modelos
              localmente.
            </p>

          </div>

          <div className="space-y-3">

            <a
              href="https://ollama.com/download/OllamaSetup.exe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-[#F8F8F8] hover:bg-neutral-100 border border-[#EDEDED] rounded-xl transition-all group"
            >

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center p-1.5">

                  <img
                    src="/logo-windows.png"
                    alt="Windows"
                    className="w-full h-full object-contain"
                  />

                </div>

                <div>

                  <p className="text-xs font-bold text-neutral-800">
                    Versão para Windows
                  </p>

                  <p className="text-[10px] text-neutral-500">
                    OllamaSetup.exe
                  </p>

                </div>

              </div>

              <ChevronRight className="w-4 h-4 text-neutral-400" />

            </a>

            <a
              href="https://ollama.com/download/Ollama.dmg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-[#F8F8F8] hover:bg-neutral-100 border border-[#EDEDED] rounded-xl transition-all group"
            >

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center p-1.5">

                  <img
                    src="/logo-macOS.png"
                    alt="macOS"
                    className="w-full h-full object-contain"
                  />

                </div>

                <div>

                  <p className="text-xs font-bold text-neutral-800">
                    Versão para macOS
                  </p>

                  <p className="text-[10px] text-neutral-500">
                    Ollama.dmg
                  </p>

                </div>

              </div>

              <ChevronRight className="w-4 h-4 text-neutral-400" />

            </a>

            <a
              href="https://ollama.com/download/linux"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-[#F8F8F8] hover:bg-neutral-100 border border-[#EDEDED] rounded-xl transition-all group"
            >

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center p-1.5">

                  <img
                    src="/logo-Linux.webp"
                    alt="Linux"
                    className="w-full h-full object-contain"
                  />

                </div>

                <div>

                  <p className="text-xs font-bold text-neutral-800">
                    Versão para Linux
                  </p>

                  <p className="text-[10px] text-neutral-500">
                    Instalação via terminal
                  </p>

                </div>

              </div>

              <ChevronRight className="w-4 h-4 text-neutral-400" />

            </a>

          </div>

        </div>

        {/* STATUS */}

        <div className="bg-white border border-[#EDEDED] p-6 md:p-8 rounded-2xl shadow-sm flex flex-col justify-between text-left">

          <div>

            <div className="flex justify-between items-center mb-4">

              <h2 className="text-lg font-semibold text-[#111111] flex items-center gap-2">

                <Layers className="w-4 h-4" />

                Status do Ollama

              </h2>

              <button
                onClick={() => checkOllamaConnection(true)}
                disabled={checking}
                className="p-1.5 border border-neutral-200 rounded-full hover:bg-neutral-50 disabled:opacity-50"
                title="Verificar conexão"
              >

                <RefreshCw
                  className={`w-3.5 h-3.5 ${
                    checking ? "animate-spin" : ""
                  }`}
                />

              </button>

            </div>

            <div
              className={`p-5 rounded-xl border flex gap-4 items-start ${
                status === "connected"
                  ? "bg-green-50/50 border-green-100"
                  : status === "disconnected"
                  ? "bg-amber-50/50 border-amber-100"
                  : "bg-neutral-50 border-neutral-200"
              }`}
            >

              <div className="pt-0.5">

                {status === "connected" ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : status === "disconnected" ? (
                  <XCircle className="w-5 h-5 text-amber-600" />
                ) : (
                  <RefreshCw className="w-5 h-5 text-neutral-400 animate-spin" />
                )}

              </div>

              <div className="space-y-1.5">

                <p className="text-xs font-bold text-neutral-900 uppercase tracking-wide">

                  {status === "connected"
                    ? "Ollama Conectado"
                    : status === "disconnected"
                    ? "Ollama Desconectado"
                    : "Verificando..."}

                </p>

                <p className="text-xs text-neutral-600 leading-relaxed">

                  {status === "connected"
                    ? models.length > 0
                      ? `${models.length} modelo(s) disponível(is) para uso local.`
                      : "API do Ollama funcionando, mas nenhum modelo está instalado."
                    : status === "disconnected"
                    ? "O site não conseguiu acessar a API local do Ollama."
                    : "Testando a comunicação com a API local..."}

                </p>

              </div>

            </div>

            {checkMessage && (

              <div
                className={`mt-3 p-3 rounded-lg text-xs font-medium border ${
                  checkMessage.type === "success"
                    ? "bg-green-50 border-green-100 text-green-800"
                    : checkMessage.type === "error"
                    ? "bg-red-50 border-red-100 text-red-800"
                    : "bg-blue-50 border-blue-100 text-blue-800"
                }`}
              >

                {checkMessage.text}

              </div>

            )}

          </div>

          {/* MODELOS */}

          {status === "connected" && (

            <div className="mt-6 space-y-4">

              <label className="text-[10px] uppercase tracking-widest text-[#999999] font-bold block">
                Modelo de IA Ativo
              </label>

              {models.length > 0 ? (

                <div className="flex gap-2">

                  <select
                    value={selectedModel}
                    onChange={(event) => {

                      const model = event.target.value;

                      setSelectedModel(model);

                      onSetUseLocalAI(useLocalAI, model);

                    }}
                    className="flex-1 text-xs py-2.5 px-3 border border-neutral-200 rounded-lg bg-white"
                  >

                    {models.map((model) => (

                      <option
                        key={model.name}
                        value={model.name}
                      >
                        {model.name}
                        {model.details?.parameter_size
                          ? ` (${model.details.parameter_size})`
                          : ""}
                      </option>

                    ))}

                  </select>

                  <button
                    onClick={() =>
                      onSetUseLocalAI(
                        !useLocalAI,
                        selectedModel
                      )
                    }
                    className={`px-4 text-xs font-bold rounded-lg border ${
                      useLocalAI
                        ? "bg-green-600 text-white border-green-600"
                        : "bg-white text-neutral-800 border-neutral-200"
                    }`}
                  >

                    {useLocalAI ? "Ativo" : "Usar este"}

                  </button>

                </div>

              ) : (

                <div className="space-y-3">

                  <p className="text-xs text-amber-600 bg-amber-50 p-3 rounded-lg border border-amber-100">

                    O Ollama está conectado, mas nenhum modelo está instalado.

                  </p>

                  <div className="flex gap-2">

                    <input
                      type="text"
                      value={pullModelName}
                      onChange={(event) =>
                        setPullModelName(event.target.value)
                      }
                      placeholder="Ex: llama3.2"
                      className="flex-1 text-xs px-3 py-2 border border-neutral-200 rounded-lg"
                    />

                    <button
                      onClick={handlePullModel}
                      disabled={isPulling}
                      className="px-3 py-2 bg-neutral-950 text-white text-xs font-bold rounded-lg disabled:opacity-50"
                    >

                      {isPulling
                        ? "Baixando..."
                        : "Baixar"}

                    </button>

                  </div>

                  {pullProgress && (

                    <p className="text-[10px] text-neutral-500 font-mono">
                      {pullProgress}
                    </p>

                  )}

                </div>

              )}

            </div>

          )}

        </div>

      </div>

      {/* INSTALAÇÃO */}

      <div className="bg-white border border-[#EDEDED] p-8 md:p-10 rounded-2xl shadow-sm text-left">

        <h2 className="text-lg font-semibold text-[#111111] mb-6 flex items-center gap-2">

          <HelpCircle className="w-4 h-4" />

          Como Instalar e Configurar o Ollama

        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">

          <div className="space-y-2">

            <div className="w-8 h-8 rounded-full bg-neutral-950 text-white flex items-center justify-center text-xs font-bold">
              1
            </div>

            <p className="text-xs font-bold">
              Baixe o Ollama
            </p>

            <p className="text-[11px] text-neutral-500">
              Baixe a versão correspondente ao seu sistema operacional.
            </p>

          </div>

          <div className="space-y-2">

            <div className="w-8 h-8 rounded-full bg-neutral-100 border flex items-center justify-center text-xs font-bold">
              2
            </div>

            <p className="text-xs font-bold">
              Execute o instalador
            </p>

            <p className="text-[11px] text-neutral-500">
              Execute o instalador baixado.
            </p>

          </div>

          <div className="space-y-2">

            <div className="w-8 h-8 rounded-full bg-neutral-100 border flex items-center justify-center text-xs font-bold">
              3
            </div>

            <p className="text-xs font-bold">
              Conclua a instalação
            </p>

            <p className="text-[11px] text-neutral-500">
              Siga as instruções apresentadas pelo instalador.
            </p>

          </div>

          <div className="space-y-2">

            <div className="w-8 h-8 rounded-full bg-neutral-100 border flex items-center justify-center text-xs font-bold">
              4
            </div>

            <p className="text-xs font-bold">
              Inicie o Ollama
            </p>

            <p className="text-[11px] text-neutral-500">
              Inicie o Ollama e mantenha o serviço ativo.
            </p>

          </div>

          <div className="space-y-2">

            <div className="w-8 h-8 rounded-full bg-neutral-100 border flex items-center justify-center text-xs font-bold">
              5
            </div>

            <p className="text-xs font-bold">
              Verifique a conexão
            </p>

            <p className="text-[11px] text-neutral-500">
              Retorne ao site e atualize o status.
            </p>

          </div>

        </div>

        <div className="mt-8 p-4 bg-blue-50/50 border border-blue-100 rounded-xl flex gap-3 text-xs text-neutral-700">

          <Terminal className="w-4 h-4 text-blue-600 flex-shrink-0" />

          <div className="space-y-1">

            <p className="font-bold text-neutral-900">
              Instalação do primeiro modelo
            </p>

            <p className="leading-relaxed">
              Depois de instalar o Ollama, instale um modelo de linguagem
              pelo terminal. Para este projeto, você pode utilizar:
            </p>

            <pre className="mt-2 p-2 bg-neutral-950 text-neutral-200 rounded-lg text-[10px] font-mono select-all">
              ollama pull llama3.2
            </pre>

          </div>

        </div>

      </div>

      {/* TESTE DA IA */}

      <div className="bg-white border border-[#EDEDED] p-8 md:p-10 rounded-2xl shadow-sm text-left">

        <h2 className="text-lg font-semibold text-[#111111] mb-2 flex items-center gap-2">

          <Play className="w-4 h-4" />

          Testar IA Local

        </h2>

        <p className="text-xs text-[#666666] mb-6 leading-relaxed">
          Envie uma mensagem diretamente para o modelo selecionado no Ollama.
        </p>

        <div className="space-y-4">

          <div className="flex flex-col sm:flex-row gap-3">

            <input
              type="text"
              value={testInput}
              onChange={(event) =>
                setTestInput(event.target.value)
              }
              disabled={
                status !== "connected" ||
                testingAI ||
                models.length === 0
              }
              placeholder={
                models.length === 0
                  ? "Instale um modelo primeiro..."
                  : "Digite uma mensagem..."
              }
              className="flex-1 py-3 px-4 bg-[#F8F8F8] border border-[#EDEDED] rounded-xl text-sm focus:outline-none focus:border-black disabled:opacity-50"
            />

            <button
              onClick={handleTestAI}
              disabled={
                status !== "connected" ||
                testingAI ||
                models.length === 0 ||
                !testInput.trim()
              }
              className="px-6 py-3 bg-neutral-950 text-white rounded-xl text-xs font-semibold disabled:bg-neutral-200 disabled:text-neutral-400 flex items-center justify-center gap-2"
            >

              {testingAI && (
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              )}

              {testingAI
                ? "Processando..."
                : "Testar IA"}

            </button>

          </div>

          {testResponse && (

            <div className="p-5 bg-green-50/20 border border-green-100 rounded-xl">

              <span className="text-[10px] font-bold uppercase tracking-wider text-green-800">
                Resposta do {selectedModel}
              </span>

              <p className="text-sm text-neutral-800 leading-relaxed font-serif italic mt-2">
                "{testResponse}"
              </p>

            </div>

          )}

          {testError && (

            <div className="p-5 bg-red-50/20 border border-red-100 rounded-xl flex gap-3 text-xs text-red-700">

              <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />

              <div>

                <p className="font-bold">
                  Erro na comunicação
                </p>

                <p className="leading-relaxed mt-1 whitespace-pre-line">
                  {testError}
                </p>

              </div>

            </div>

          )}

          {status !== "connected" && (

            <p className="text-xs text-neutral-500 italic">
              Conecte o Ollama para realizar o teste.
            </p>

          )}

          {status === "connected" && models.length === 0 && (

            <p className="text-xs text-neutral-500 italic">
              O Ollama está conectado. Instale um modelo para começar a utilizar a IA.
            </p>

          )}

        </div>

      </div>

    </div>
  );
}

