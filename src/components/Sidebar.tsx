import { UIStringDictionary, UserLanguages } from "../types";
import { X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  dict: UIStringDictionary;
  userLanguages?: UserLanguages | null;
}

export default function Sidebar({ isOpen, onClose, dict, userLanguages }: SidebarProps) {
  // Lista de modalidades futuras para mostrar a arquitetura pronta
  const futureModes = [
    { name: dict.conversacao },
    { name: dict.vocabulario },
    { name: dict.gramatica },
    { name: dict.traducao },
    { name: dict.escuta },
    { name: dict.pronuncia },
    { name: dict.revisao },
  ];

  const sidebarContent = (
    <div className="flex flex-col h-full bg-white border-r border-[#EDEDED] py-10 px-8">
      {/* Header / Brand */}
      <div className="mb-12 flex items-center justify-between">
        <div>
          <h1 className="text-2xl tracking-tight text-[#111111] select-none">
            <span className="font-serif italic font-semibold">{dict.appName || "Professor"}</span>
          </h1>
          <div className="w-8 h-0.5 bg-black mt-1.5" />
        </div>
        {/* Mobile Close Button */}
        <button
          onClick={onClose}
          className="md:hidden p-1 rounded-md text-[#999999] hover:text-black transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-8 overflow-y-auto pr-2">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-[#999999] mb-4">
            {dict.studySection || "Étude"}
          </p>
          <ul className="space-y-1">
            {/* Modalidade Ativa: Fale Sobre */}
            <li>
              <button className="w-full flex items-center py-2 text-sm font-medium text-black text-left hover:opacity-85 transition-opacity">
                <span className="w-1.5 h-1.5 bg-black rounded-full mr-3" />
                <span>{dict.faleSobre}</span>
              </button>
            </li>

            {/* Modalidades Futuras (Preparadas na Arquitetura) */}
            {futureModes.map((mode, idx) => (
              <li key={idx}>
                <div className="flex items-center py-2 text-sm text-[#999999] opacity-50 cursor-not-allowed">
                  <span className="w-1.5 h-1.5 border border-[#999999] rounded-full mr-3" />
                  <span>{mode.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Footer / Learning Status Card */}
      <div className="mt-auto pt-6 border-t border-[#EDEDED]">
        <div className="p-4 bg-[#F8F8F8] rounded-xl border border-[#EDEDED]/40">
          <p className="text-[10px] text-[#666666] uppercase tracking-wider mb-1">
            {dict.studySection || "Aprendizado"}
          </p>
          <p className="text-sm font-semibold text-[#111111]">
            {userLanguages?.target || "Idioma"}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (hidden on mobile, fixed width) */}
      <aside className="hidden md:block w-64 h-screen sticky top-0 flex-shrink-0">
        {sidebarContent}
      </aside>

      {/* Mobile Sidebar (sliding drawer) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-[1px]"
            onClick={onClose}
          />
          {/* Drawer container */}
          <div className="relative w-64 max-w-sm h-full shadow-xl animate-in slide-in-from-left duration-200 bg-white">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
