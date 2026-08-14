import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Code2, Layers } from "lucide-react";
import { projectsData } from "../data/projects";
import { InteractivePipelineVisualizer } from "./projects/InteractivePipelineVisualizer";
import { useCursor } from "../context/CursorContext";

export const Projects: React.FC = () => {
  const { setCursorVariant, resetCursor } = useCursor();

  return (
    <section id="projects" className="py-20 sm:py-28 relative bg-[#07080c] overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] md:w-[800px] h-[350px] sm:h-[600px] bg-customGreen/5 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Monumental Editorial Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-20 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-customGreen uppercase tracking-widest mb-3">
              <Code2 size={14} />
              <span>Flagship Engineering Work</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-heading tracking-tight text-white leading-tight">
              FEATURED <br />
              <span className="text-gradient-accent">PROJECTS</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-400 text-sm sm:text-base font-light">
            In-depth architecture, natural language processing pipelines, and vector-space machine learning implementations.
          </p>
        </div>

        {/* Project Panels */}
        <div className="space-y-16 sm:space-y-24">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-5 sm:p-10 md:p-14 rounded-3xl border border-white/10 relative overflow-hidden"
              onMouseEnter={() => setCursorVariant("project", "CASE STUDY")}
              onMouseLeave={resetCursor}
            >
              {/* Giant Index Number Watermark */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-8 text-7xl sm:text-8xl md:text-9xl font-black font-heading text-white/[0.03] select-none pointer-events-none">
                {project.number}
              </div>

              {/* Project Badge & Domain */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5 sm:mb-6 relative z-10">
                <span className="px-3 sm:px-3.5 py-1 rounded-full bg-customGreen/10 border border-customGreen/30 text-emerald-300 text-xs font-mono">
                  {project.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {project.domain}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-6 sm:mb-8 relative z-10 max-w-4xl">
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-black font-heading text-white mb-2 sm:mb-3 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-lg md:text-xl text-emerald-300 font-medium font-heading">
                  {project.subtitle}
                </p>
              </div>

              {/* Description & Problem / Solution Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-8 sm:mb-10 relative z-10">
                <div className="lg:col-span-6 space-y-4 sm:space-y-6">
                  <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-rose-500/20">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-rose-400 mb-1">
                        Problem Statement
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 font-light">
                        {project.problem}
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-emerald-500/20">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-1">
                        Engineered Solution
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 font-light">
                        {project.solution}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 flex flex-col justify-between gap-6">
                  {/* Technical Architecture Points */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/40 border border-white/5 space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-customGreen flex items-center gap-2">
                      <Layers size={14} />
                      <span>Architecture Breakdown</span>
                    </h4>
                    <ul className="space-y-2 sm:space-y-2.5">
                      {project.technicalArchitecture.map((arch, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-customGreen mt-1.5 shrink-0" />
                          <span>{arch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlights Pill Badges */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-2.5">
                      Core Innovations
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((hl) => (
                        <span
                          key={hl}
                          className="px-3 py-1 rounded-xl bg-slate-900 border border-customGreen/30 text-xs font-mono text-emerald-200"
                        >
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Architecture Simulator Component */}
              <div className="relative z-10 mb-6 sm:mb-8">
                <InteractivePipelineVisualizer project={project} />
              </div>

              {/* Stack Footer & Key Outcome */}
              <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500 mr-1 sm:mr-2">Technologies:</span>
                  {project.stack.map((stk) => (
                    <span
                      key={stk}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300"
                    >
                      {stk}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-emerald-300 bg-emerald-950/30 px-3 py-1.5 rounded-xl border border-customGreen/30 self-start md:self-auto">
                  <CheckCircle2 size={14} className="text-customGreen shrink-0" />
                  <span>Pipeline Verified & Fully Functional</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
