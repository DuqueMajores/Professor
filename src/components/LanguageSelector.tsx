import React, { useState, useEffect } from "react";
import { UserLanguages } from "../types";
import { Globe, ArrowRight, Sparkles, ArrowLeft } from "lucide-react";

interface LanguageSelectorProps {
  onSave: (langs: UserLanguages) => void;
}

export default function LanguageSelector({ onSave }: LanguageSelectorProps) {
  const [showForm, setShowForm] = useState(false);
  const [target, setTarget] = useState("");
  const [source, setSource] = useState("");
  const [level, setLevel] = useState("Intermediário");
  const [error, setError] = useState("");
  const [savedLangs, setSavedLangs] = useState<UserLanguages | null>(null);

  const targetSuggestions = ["Inglês", "Francês", "Espanhol", "Alemão", "Italiano", "Japonês", "Português"];
  const sourceSuggestions = ["Português", "Espanhol", "Inglês"];

  useEffect(() => {
    try {
      const stored = localStorage.getItem("professor_languages");
      if (stored) {
        setSavedLangs(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Error reading stored languages", e);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!target.trim() || !source.trim()) {
      setError("Por favor, informe os dois idiomas para prosseguir.");
      return;
    }
    setError("");
    onSave({
      target: target.trim(),
      source: source.trim(),
      level,
    });
  };

  const handleContinueStudying = () => {
    if (savedLangs) {
      onSave(savedLangs);
    } else {
      // Fallback padrão se não houver nada salvo anteriormente
      onSave({
        target: "Inglês",
        source: "Português",
        level: "Intermediário",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] px-4 py-12 transition-all duration-300">
      <div className="w-full max-w-md bg-white border border-[#EDEDED] rounded-2xl p-8 shadow-sm transition-all duration-300">
        
        {/* HEADER SECTION */}
        {!showForm ? (
          /* LARGE BRANDING HEADER (Initial screen) */
          <div className="text-center mb-8 animate-in fade-in zoom-in-95 duration-300">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F8F8F8] border border-[#EDEDED] mb-4 text-[#111111]">
              <Globe className="w-5 h-5" />
            </div>
            <h1 className="text-2xl text-[#111111] tracking-tight">
              <span className="font-serif italic font-semibold">Professor</span>
            </h1>
            <div className="w-8 h-0.5 bg-black mx-auto mt-2 mb-3" />
            <p className="text-xs text-[#666666] max-w-xs mx-auto leading-relaxed">
              Seu professor particular de idiomas baseado em Inteligência Artificial.
            </p>
          </div>
        ) : (
          /* MINIMIZED HEADER (Form selection screen) */
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#EDEDED] animate-in slide-in-from-top-4 duration-300">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="p-2 -ml-2 rounded-full hover:bg-[#F8F8F8] text-[#666666] hover:text-black transition-colors cursor-pointer"
              title="Voltar"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#F8F8F8] border border-[#EDEDED] flex items-center justify-center">
                <Globe className="w-3 h-3 text-[#111111]" />
              </div>
              <span className="text-xs tracking-tight text-[#111111]">
                <span className="font-serif italic font-semibold">Professor</span> / Configuração
              </span>
            </div>
            <div className="w-8" /> {/* Balance spacer */}
          </div>
        )}

        {/* CONTENT OPTIONS / FORM */}
        {!showForm ? (
          /* INITIAL ACTIONS BLOCK */
          <div className="space-y-3 animate-in fade-in duration-300">
            <button
              onClick={() => setShowForm(true)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm active:scale-[0.98] cursor-pointer"
            >
              Selecionar Novo Idioma
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleContinueStudying}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#F8F8F8] hover:bg-[#EDEDED] text-[#111111] text-xs font-bold uppercase tracking-wider rounded-xl transition-all border border-[#EDEDED] active:scale-[0.98] cursor-pointer"
            >
              {savedLangs 
                ? `Continuar Estudando (${savedLangs.target})` 
                : "Continuar Estudando (Padrão: Inglês)"}
            </button>
          </div>
        ) : (
          /* MINIMIZED LANGUAGE SELECTION FORM */
          <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in duration-300">
            {/* Idioma de Origem */}
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-[#999999] mb-2.5 font-bold">
                Seu idioma de origem
              </label>
              <div className="flex flex-wrap gap-2">
                {sourceSuggestions.map((lang) => {
                  const isSelected = source === lang;
                  return (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => {
                        setSource(lang);
                        if (error) setError("");
                      }}
                      className={`text-xs px-4 py-2.5 rounded-xl border transition-all cursor-pointer font-semibold ${
                        isSelected
                          ? "bg-black border-black text-white shadow-sm"
                          : "bg-[#F8F8F8] border-[#EDEDED] text-slate-600 hover:border-black hover:bg-white"
                      }`}
                    >
                      {lang}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Idioma que deseja aprender */}
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-[#999999] mb-2.5 font-bold">
                Idioma que deseja aprender
              </label>
              <div className="flex flex-wrap gap-2">
                {targetSuggestions.map((lang) => {
                  const isSelected = target === lang;
                  return (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => {
                        setTarget(lang);
                        if (error) setError("");
                      }}
                      className={`text-xs px-4 py-2.5 rounded-xl border transition-all cursor-pointer font-semibold ${
                        isSelected
                          ? "bg-black border-black text-white shadow-sm"
                          : "bg-[#F8F8F8] border-[#EDEDED] text-slate-600 hover:border-black hover:bg-white"
                      }`}
                    >
                      {lang}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Nível de Proficiência */}
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-[#999999] mb-2.5 font-bold">
                Nível atual no idioma
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["Básico", "Intermediário", "Avançado"].map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setLevel(lvl)}
                    className={`py-2.5 px-3 text-xs font-semibold border rounded-xl transition-all cursor-pointer ${
                      level === lvl
                        ? "bg-black border-black text-white shadow-sm"
                        : "bg-[#F8F8F8] border-[#EDEDED] text-slate-600 hover:border-black hover:bg-white"
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {error && (
              <p className="text-xs font-semibold text-red-500 text-center">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm active:scale-[0.98] cursor-pointer"
            >
              Começar a estudar
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <div className="mt-8 pt-6 border-t border-[#EDEDED] flex items-center justify-center gap-2 text-[10px] text-slate-400">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span className="uppercase tracking-wider font-semibold">Tecnologia Open-Source Gratuita</span>
        </div>
      </div>
    </div>
  );
}
