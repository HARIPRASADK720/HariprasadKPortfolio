import React from "react";
import { motion } from "framer-motion";
import { Trophy, Clock, Users, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { hackathonAchievement } from "../data/education";
import { useCursor } from "../context/CursorContext";
import { sounds } from "../utils/sound";

export const Achievement: React.FC = () => {
  const { setCursorVariant, resetCursor } = useCursor();

  const triggerConfetti = () => {
    sounds.playSuccess();
    confetti({
      particleCount: 85,
      spread: 75,
      origin: { y: 0.7 },
      colors: ["#D4AF37", "#F59E0B", "#FDE047", "#FFFFFF", "#B8860B"],
    });
  };

  return (
    <section id="achievements" className="py-20 sm:py-28 relative bg-[#07080c] overflow-hidden max-w-full">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[600px] h-[260px] sm:h-[600px] bg-amber-500/10 rounded-full blur-[90px] sm:blur-[180px] pointer-events-none overflow-hidden" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-full overflow-hidden">
        {/* Heroic Achievement Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel p-5 sm:p-10 md:p-16 rounded-3xl border border-amber-500/30 relative overflow-hidden text-center"
          onMouseEnter={() => setCursorVariant("button")}
          onMouseLeave={resetCursor}
          onClick={triggerConfetti}
        >
          {/* Subtle Ambient Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono mb-6 sm:mb-8 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <Sparkles size={14} />
            <span>Hackotsava 2K25 Hackathon Finalist</span>
          </div>

          {/* Monumental Numbers Display */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            {/* Rank */}
            <div className="p-4 sm:p-6 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-amber-400/60 hover:bg-amber-950/30 hover:shadow-[0_0_25px_rgba(212,175,55,0.25)] transition-all flex flex-col items-center">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <Trophy size={14} /> Finish Position
              </span>
              <span className="text-4xl sm:text-6xl md:text-7xl font-black font-heading text-white tracking-tight">
                TOP <span className="text-gradient-accent">07</span>
              </span>
              <span className="text-[11px] sm:text-xs text-slate-400 mt-2 font-mono">
                State-Level Hackathon
              </span>
            </div>

            {/* Field */}
            <div className="p-4 sm:p-6 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-yellow-400/60 hover:bg-amber-950/30 hover:shadow-[0_0_25px_rgba(212,175,55,0.25)] transition-all flex flex-col items-center">
              <span className="text-xs font-mono text-yellow-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <Users size={14} /> Competing Teams
              </span>
              <span className="text-4xl sm:text-6xl md:text-7xl font-black font-heading text-white tracking-tight">
                100<span className="text-amber-300">+</span>
              </span>
              <span className="text-[11px] sm:text-xs text-slate-400 mt-2 font-mono">
                Collegiate & Professional
              </span>
            </div>

            {/* Sprint Duration */}
            <div className="p-4 sm:p-6 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-amber-400/60 hover:bg-amber-950/30 hover:shadow-[0_0_25px_rgba(212,175,55,0.25)] transition-all flex flex-col items-center">
              <span className="text-xs font-mono text-amber-300 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <Clock size={14} /> Sprint Duration
              </span>
              <span className="text-4xl sm:text-6xl md:text-7xl font-black font-heading text-white tracking-tight">
                36<span className="text-xs font-mono text-slate-400 uppercase ml-1">HRS</span>
              </span>
              <span className="text-[11px] sm:text-xs text-slate-400 mt-2 font-mono">
                Continuous Full-Stack Execution
              </span>
            </div>
          </div>

          {/* Narrative description */}
          <div className="max-w-2xl mx-auto space-y-3 sm:space-y-4 mb-6 sm:mb-10 px-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white">
              Delivered a complete full-stack solution under a high-intensity 36-hour sprint.
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base font-light leading-relaxed">
              Demonstrated rapid architecture prototyping, algorithmic problem-solving, and end-to-end full-stack development under extreme time constraints.
            </p>
          </div>

          {/* Core Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {hackathonAchievement.highlights.map((item) => (
              <span
                key={item}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-slate-900 border border-amber-500/30 text-[11px] sm:text-xs font-mono text-amber-200"
              >
                ✓ {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
