import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, CheckCircle2, Layers } from "lucide-react";
import { experiences } from "../data/experience";
import { useCursor } from "../context/CursorContext";
import { sounds } from "../utils/sound";

export const Experience: React.FC = () => {
  const [activeExpId, setActiveExpId] = useState<string>(experiences[0].id);
  const { setCursorVariant, resetCursor } = useCursor();

  const activeExp = experiences.find((e) => e.id === activeExpId) || experiences[0];

  return (
    <section id="experience" className="py-20 sm:py-28 relative bg-[#07080c] noise-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-customGreen uppercase tracking-widest mb-3">
              <Briefcase size={14} />
              <span>Professional Timeline</span>
            </div>
            <h2 className="text-3xl sm:text-6xl font-black font-heading tracking-tight text-white">
              INTERNSHIP <br />
              <span className="text-gradient-accent">EXPERIENCE</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-400 text-sm sm:text-base font-light">
            Hands-on software engineering internships across Java Full Stack, Spring Boot, Next.js, and MERN architectures.
          </p>
        </div>

        {/* Timeline Navigation Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-8 sm:mb-10">
          {experiences.map((exp, idx) => {
            const isActive = exp.id === activeExpId;
            return (
              <button
                key={exp.id}
                onClick={() => {
                  setActiveExpId(exp.id);
                  sounds.playClick();
                }}
                onMouseEnter={() => {
                  setCursorVariant("button");
                  sounds.playHover();
                }}
                onMouseLeave={resetCursor}
                className={`text-left p-3 sm:p-5 rounded-2xl transition-all duration-300 relative border cursor-pointer ${
                  isActive
                    ? "bg-slate-900/90 border-customGreen/60 shadow-[0_0_25px_rgba(15,157,88,0.2)]"
                    : "glass-panel border-white/5 hover:border-white/20 text-slate-400"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTimelineGlow"
                    className="absolute inset-0 rounded-2xl bg-customGreen/5 -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <span className={`text-[9px] sm:text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full ${isActive ? "bg-customGreen/20 text-emerald-300" : "bg-white/5 text-slate-500"}`}>
                    {exp.period}
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono text-slate-500">0{idx + 1}</span>
                </div>
                <h4 className={`text-xs sm:text-sm font-heading font-bold truncate ${isActive ? "text-white" : "text-slate-300"}`}>
                  {exp.company}
                </h4>
                <p className="text-[10px] sm:text-xs text-slate-400 truncate mt-0.5">
                  {exp.role.replace(" Intern", "")}
                </p>
              </button>
            );
          })}
        </div>

        {/* Detailed Experience Display Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeExp.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="glass-panel p-5 sm:p-8 md:p-12 rounded-3xl border border-white/10"
          >
            {/* Header of Active Experience */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 sm:pb-8 border-b border-white/10 gap-4 sm:gap-6">
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <span className="px-3 py-1 rounded-full bg-customGreen/10 border border-customGreen/30 text-emerald-300 text-xs font-mono">
                    {activeExp.period}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {activeExp.year}
                  </span>
                </div>
                <h3 className="text-lg sm:text-3xl md:text-4xl font-heading font-black text-white">
                  {activeExp.role}
                </h3>
                <p className="text-sm sm:text-lg text-emerald-300 font-medium mt-1">
                  {activeExp.company}
                </p>
              </div>

              {/* Summary quote */}
              <div className="lg:max-w-md bg-slate-900/60 p-3.5 sm:p-4 rounded-2xl border border-white/5 text-xs sm:text-sm text-slate-300 font-light italic">
                "{activeExp.highlightSummary}"
              </div>
            </div>

            {/* Content Body: Projects & Achievements */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mt-6 sm:mt-8">
              {/* Projects Built during Internship */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                <h4 className="text-xs font-mono uppercase tracking-widest text-customGreen flex items-center gap-2">
                  <Layers size={14} />
                  <span>Projects & Deliverables</span>
                </h4>

                <div className="space-y-3 sm:space-y-4">
                  {activeExp.projects.map((proj, pIdx) => (
                    <div
                      key={proj.name}
                      className="p-5 sm:p-6 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-customGreen/40 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="text-sm sm:text-base font-heading font-bold text-white flex items-center gap-2">
                          <span className="text-customGreen text-xs font-mono">0{pIdx + 1}.</span>
                          {proj.name}
                        </h5>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 font-light mb-3 sm:mb-4">
                        {proj.description}
                      </p>

                      {/* Features list if present */}
                      {proj.features && (
                        <div className="mb-3 sm:mb-4 flex flex-wrap gap-1.5 sm:gap-2">
                          {proj.features.map((feat) => (
                            <span
                              key={feat}
                              className="px-2 sm:px-2.5 py-1 rounded-lg bg-emerald-950/40 border border-customGreen/30 text-[10px] sm:text-[11px] text-emerald-300 font-mono"
                            >
                              ✓ {feat}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Stack details */}
                      <div className="pt-3 border-t border-white/5 flex flex-wrap items-center gap-1.5 sm:gap-2">
                        {proj.stack.map((stk) => (
                          <span
                            key={stk}
                            className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] sm:text-[11px] font-mono text-slate-300"
                          >
                            {stk}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements & Stack Summary */}
              <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
                {/* Key Achievements */}
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950 border border-customGreen/30">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-customGreen flex items-center gap-2 mb-3 sm:mb-4">
                    <CheckCircle2 size={14} />
                    <span>Key Engineering Achievements</span>
                  </h4>
                  <ul className="space-y-2.5 sm:space-y-3">
                    {activeExp.keyAchievements.map((achieve, i) => (
                      <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-300 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-customGreen mt-1.5 shrink-0" />
                        <span>{achieve}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/50 border border-white/5">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2.5 sm:mb-3">
                    Technologies Applied
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {activeExp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 sm:px-3 py-1 rounded-xl bg-customGreen/10 border border-customGreen/30 text-[11px] sm:text-xs font-mono text-emerald-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
