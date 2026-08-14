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
    <footer className="py-10 sm:py-12 bg-[#050608] border-t border-white/5 relative z-10 overflow-hidden max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-full overflow-hidden">
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

          {/* Social & Contact Links with Original Brand Icons (Icon Only) */}
          <div className="flex items-center gap-3">
            {/* Original Email Icon */}
            <a
              href={`mailto:${personalData.contact.email}`}
              onMouseEnter={() => setCursorVariant("button")}
              onMouseLeave={resetCursor}
              className="w-10 h-10 rounded-full bg-slate-900/80 border border-white/10 hover:border-amber-400 hover:bg-amber-950/40 text-slate-300 hover:text-amber-300 flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] group"
              aria-label="Email"
              title="Email Hariprasad K"
            >
              <svg className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>

            {/* Original LinkedIn Brand Icon */}
            <a
              href={personalData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setCursorVariant("button")}
              onMouseLeave={resetCursor}
              className="w-10 h-10 rounded-full bg-slate-900/80 border border-white/10 hover:border-[#0A66C2] hover:bg-[#0A66C2]/20 text-slate-300 hover:text-sky-300 flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(10,102,194,0)] hover:shadow-[0_0_20px_rgba(10,102,194,0.4)] group"
              aria-label="LinkedIn"
              title="LinkedIn Profile"
            >
              <svg className="w-4 h-4 text-[#0A66C2] group-hover:text-[#3897f0] group-hover:scale-110 transition-all shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>

            {/* Original GitHub Invertocat Brand Icon */}
            <a
              href={personalData.contact.github}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setCursorVariant("button")}
              onMouseLeave={resetCursor}
              className="w-10 h-10 rounded-full bg-slate-900/80 border border-white/10 hover:border-white/60 hover:bg-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] group"
              aria-label="GitHub"
              title="GitHub Profile"
            >
              <svg className="w-4 h-4 text-slate-300 group-hover:text-white group-hover:scale-110 transition-all shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            onMouseEnter={() => setCursorVariant("button")}
            onMouseLeave={resetCursor}
            className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-amber-300 px-4 py-2 rounded-full border border-white/10 hover:border-amber-400/40 bg-slate-900/50 transition-all cursor-pointer"
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
