# Professor — Idiomas com Inteligência Artificial

Um sistema web completo, responsivo e profissional que funciona como um professor particular de idiomas baseado em Inteligência Artificial. Projetado com uma estética extremamente minimalista, limpa e elegante, o projeto prioriza o foco total do aluno na experiência de estudo, evitando ruídos visuais, cores exageradas ou poluição de informações.

O aplicativo utiliza **modelos de linguagem open-source totalmente gratuitos** (como Llama 3 e Qwen 2.5) rodando através de APIs compatíveis com o OpenAI (como OpenRouter e Groq), garantindo independência de serviços proprietários pagos.

---

## ✨ Funcionalidades Principais

*   **Configuração Livre de Idiomas:** O aluno simplesmente digita o nome do idioma que deseja aprender e seu idioma nativo (ex: "inglês", "francês", "espanhol"), sem ficar limitado a listas pré-definidas.
*   **Interface Bilíngue Dinâmica:** Após configurar os idiomas, toda a interface assume o idioma que o aluno está estudando. Um botão discreto e minimalista no canto superior permite alternar instantaneamente toda a interface para o idioma de origem e vice-versa.
*   **Modalidade "Fale Sobre" (MVP):** Um fluxo interativo e altamente pedagógico de leitura e reescrita estruturado em 3 fases:
    1.  **Leitura do Texto:** A IA gera um texto original curto (50 a 100 palavras) adequado ao nível do aluno em situações cotidianas. O aluno lê e escreve sua interpretação em suas próprias palavras.
    2.  **Avaliação Intermediária:** A IA calcula o nível de "sentido/compreensão" (0% a 100%), lista os principais problemas, apresenta correções objetivas, exibe uma versão mais natural e explica detalhadamente os erros relevantes. Em seguida, solicita que o aluno reescreva sua frase.
    3.  **Avaliação Final:** O aluno reescreve a resposta. A IA analisa as duas versões, mede a evolução e fornece uma nota final (0 a 10) com feedbacks encorajadores.
*   **Bate-Papo com o Professor:** O professor funciona como um chat de suporte de forma paralela. Ele responde de forma natural, curta, direta, descontraída e com humor leve.
*   **Comando "explique":** O professor só dará explicações gramaticais longas quando o aluno escrever a palavra "explique" (ou o equivalente em seu idioma de aprendizado), mantendo a conversa ágil por padrão.
*   **Modo Demo Integrado (Offline):** Caso nenhuma chave de API esteja configurada, a aplicação disponibiliza um "Modo de Demonstração" de alta fidelidade para testar os fluxos e interfaces instantaneamente sem travar a aplicação.

---

## 🛠️ Arquitetura Técnica

A aplicação é construída de forma modular separando claramente o Frontend do Backend:

*   **Frontend (React + Vite + Tailwind CSS v4 + Lucide Icons):** Uma aplicação single-page (SPA) extremamente performática, responsiva para celulares, tablets e computadores.
*   **Backend (Express + TSX + ESBuild):** O servidor atua como um proxy seguro para as APIs de IA, protegendo totalmente as chaves de API contra exposição no navegador. Utiliza `esbuild` para compilar o servidor TypeScript em um pacote otimizado e autônomo de produção.

---

## 🚀 Como Executar o Projeto Localmente

### 1. Pré-requisitos
*   **Node.js** (versão 18 ou superior)
*   **npm** (instalador de pacotes padrão do Node.js)

### 2. Instalar as Dependências
Clone ou abra o projeto no seu terminal e execute:
```bash
npm install
```

### 3. Configurar as Variáveis de Ambiente
Copie o arquivo `.env.example` para `.env` na raiz do projeto:
```bash
cp .env.example .env
```
Abra o arquivo `.env` e configure sua chave de API gratuita. Por exemplo, utilizando o **OpenRouter** (que oferece vários modelos open-source de ponta de forma 100% gratuita):
```env
LLM_API_KEY="SUA_CHAVE_OPENROUTER_AQUI"
LLM_BASE_URL="https://openrouter.ai/api/v1"
LLM_MODEL="meta-llama/llama-3-8b-instruct:free"
```

Alternativamente, para usar o provedor gratuito de altíssima velocidade **Groq**:
```env
LLM_API_KEY="SUA_CHAVE_GROQ_AQUI"
LLM_BASE_URL="https://api.groq.com/openai/v1"
LLM_MODEL="llama-3.1-8b-instant"
```

### 4. Executar em Modo de Desenvolvimento (HMR)
Inicie o servidor de desenvolvimento, que rodará tanto o backend Express quanto o frontend Vite na porta `3000`:
```bash
npm run dev
```
Acesse o aplicativo em seu navegador pelo link: **`http://localhost:3000`**

### 5. Compilar e Executar em Produção
Para gerar a build de produção totalmente otimizada (onde o frontend é compilado em arquivos estáticos e o backend é encapsulado em CommonJS):
```bash
npm run build
npm run start
```

---

## 📂 Estrutura de Pastas do Projeto

```text
├── /dist/                  # Build de produção compilada
├── /src/
│   ├── /components/
│   │   ├── LanguageSelector.tsx # Tela de configuração inicial de idiomas
│   │   └── Sidebar.tsx          # Barra lateral minimalista (responsiva)
│   ├── /utils/
│   │   └── translations.ts      # Dicionário de traduções e normalização linguística
│   ├── App.tsx             # Estado global, chat feed e layout principal
│   ├── index.css           # Estilos globais (Tailwind CSS v4)
│   ├── main.tsx            # Inicializador do React
│   └── types.ts            # Declarações e interfaces de tipos TypeScript
├── .env.example            # Exemplo de configuração de chaves
├── index.html              # Entrada HTML principal da aplicação
├── package.json            # Scripts e dependências do projeto
├── server.ts               # Servidor Express com endpoints e conexões da LLM
├── tsconfig.json           # Configurações do compilador TypeScript
└── vite.config.ts          # Configurações do Vite
```

---

## 🔒 Segurança de Chaves
Esta aplicação segue as melhores práticas de segurança de dados. **Nenhuma chave de API é exposta ou enviada ao navegador**. Todas as requisições para a IA passam de forma segura e encapsulada pelo servidor Node/Express backend.
