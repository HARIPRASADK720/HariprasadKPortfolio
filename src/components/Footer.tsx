import React from "react";
import { ArrowUp } from "lucide-react";
import { personalData } from "../data/personal";
import { useCursor } from "../context/CursorContext";
import { sounds } from "../utils/sound";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { setCursorVariant, resetCursor } = useCursor();

  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 sm:py-12 bg-[#050608] border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 pb-6 sm:pb-8 border-b border-white/5">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Hariprasad K Logo"
              className="w-9 h-9 object-contain shrink-0"
            />
            <div>
              <span className="text-sm font-heading font-bold text-white tracking-wide block">
                {personalData.name}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {personalData.role}
              </span>
            </div>
          </div>

          {/* Social & Contact Links */}
          <div className="flex items-center gap-4 sm:gap-6 text-xs font-mono text-slate-400">
            <a
              href={`mailto:${personalData.contact.email}`}
              className="hover:text-emerald-300 transition-colors"
            >
              Email
            </a>
            <a
              href={personalData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={personalData.contact.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-300 transition-colors"
            >
              GitHub
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            onMouseEnter={() => setCursorVariant("button")}
            onMouseLeave={resetCursor}
            className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-300 px-4 py-2 rounded-full border border-white/10 hover:border-customGreen/40 bg-slate-900/50 transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs font-mono text-slate-500">
          <p>© {currentYear} Hariprasad K. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
