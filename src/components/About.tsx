import React from "react";
import { motion } from "framer-motion";
import { Server, Layout, Brain, GraduationCap, Award, CheckCircle2, Sparkles, Terminal, FileDown } from "lucide-react";
import { personalData } from "../data/personal";
import { educationData, certificationsData } from "../data/education";
import { PortraitCard } from "./ui/PortraitCard";
import { useCursor } from "../context/CursorContext";
import { sounds } from "../utils/sound";

export const About: React.FC = () => {
  const { setCursorVariant, resetCursor } = useCursor();

  return (
    <section id="about" className="py-20 sm:py-28 relative bg-[#07080c] overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-customGreen/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-emerald-500/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-customGreen uppercase tracking-widest mb-3">
              <Terminal size={14} />
              <span>Engineering Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight text-white">
              WHO I AM & <br />
              <span className="text-gradient-accent">WHAT I BUILD</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="max-w-md text-slate-400 text-sm sm:text-base font-light leading-relaxed">
              Combining rigorous computer science fundamentals with modern full-stack architectures and machine learning systems.
            </p>
            <a
              href="/Hariprasad_K_Resume.pdf"
              download="Hariprasad_K_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursorVariant("button")}
              onMouseLeave={resetCursor}
              onClick={() => sounds.playSuccess()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 border border-customGreen/40 hover:border-customGreen text-emerald-300 text-xs font-mono transition-all shadow-[0_0_15px_rgba(15,157,88,0.2)] whitespace-nowrap cursor-pointer"
            >
              <FileDown size={14} />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>

        {/* Narrative & Visual Portrait Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 sm:mb-16 items-start">
          {/* Creative Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <PortraitCard className="w-full max-w-sm sm:max-w-md" />
          </motion.div>

          {/* Main Story & Credentials Panel */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Narrative Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-6 sm:p-8 md:p-10 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none hidden sm:block">
                <Brain size={140} className="text-customGreen" />
              </div>

              <span className="text-xs font-mono uppercase tracking-widest text-customGreen/90 mb-3 block">
                Core Identity & Mission
              </span>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-slate-100 mb-4 sm:mb-5 leading-snug">
                Software Engineer focused on Full-Stack systems and Natural Language Processing.
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                <p>
                  As a software engineer with hands-on internship experience across enterprise Java (Spring Boot, Hibernate), modern frontends (React.js, Next.js), and Python NLP ecosystems, I build reliable, high-throughput digital systems.
                </p>
                <p>
                  From engineering modular backend components that reduced code redundancy by ~30% and optimizing SQL database queries using 3NF indexing, to developing hybrid extractive + abstractive Kannada summarization systems with BART and T5 Transformers, I focus on scalable software engineering grounded in real-world efficacy.
                </p>
              </div>

              {/* Core CS Foundation Points */}
              <div className="mt-6 sm:mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <div>
                  <span className="block text-[10px] sm:text-[11px] font-mono text-slate-500 uppercase">Architecture</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">OOP & Microservices</span>
                </div>
                <div>
                  <span className="block text-[10px] sm:text-[11px] font-mono text-slate-500 uppercase">Database</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">SQL 3NF & NoSQL</span>
                </div>
                <div>
                  <span className="block text-[10px] sm:text-[11px] font-mono text-slate-500 uppercase">AI Paradigm</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">Seq2Seq & Vector</span>
                </div>
                <div>
                  <span className="block text-[10px] sm:text-[11px] font-mono text-slate-500 uppercase">Performance</span>
                  <span className="text-xs sm:text-sm font-semibold text-emerald-300">25% Faster Loading</span>
                </div>
              </div>
            </motion.div>

            {/* Academic & Certifications Side-by-Side Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Education Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-panel p-5 sm:p-7 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-customGreen">
                      <GraduationCap size={16} />
                      <span>Academic Foundation</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-customGreen/10 border border-customGreen/30 text-[10px] sm:text-[11px] font-mono text-emerald-300">
                      {educationData.period}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-heading font-bold text-white mb-0.5">
                    {educationData.degree}
                  </h4>
                  <p className="text-xs text-emerald-300 font-medium mb-1">
                    {educationData.field}
                  </p>
                  <p className="text-[11px] text-slate-400 mb-4">
                    {educationData.institution} · {educationData.location}
                  </p>
                </div>

                {/* CGPA Spotlight */}
                <div className="p-3 rounded-2xl bg-slate-900/80 border border-customGreen/30 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Cumulative GPA</span>
                    <span className="text-lg sm:text-xl font-black font-heading text-white">
                      {educationData.cgpa} <span className="text-xs font-normal text-slate-400">/ {educationData.cgpaMax}</span>
                    </span>
                  </div>
                  <div className="h-8 w-8 rounded-lg bg-customGreen/20 text-emerald-300 flex items-center justify-center">
                    <CheckCircle2 size={16} />
                  </div>
                </div>
              </motion.div>

              {/* Certifications Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-panel p-5 sm:p-7 rounded-3xl"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-customGreen mb-3">
                  <Award size={16} />
                  <span>Verified Credentials</span>
                </div>
                <div className="space-y-2.5">
                  {certificationsData.map((cert) => (
                    <div
                      key={cert.id}
                      className="p-3 rounded-xl bg-slate-900/60 border border-white/5 hover:border-customGreen/40 transition-all flex items-start gap-2.5"
                    >
                      <div className="mt-0.5 p-1 rounded-md bg-customGreen/15 text-customGreen shrink-0">
                        <Sparkles size={12} />
                      </div>
                      <div>
                        <h5 className="text-[11px] font-semibold text-slate-200 leading-tight">
                          {cert.title}
                        </h5>
                        <p className="text-[10px] text-slate-400 mt-0.5">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {personalData.summary.pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => setCursorVariant("button")}
              onMouseLeave={resetCursor}
              className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl flex flex-col justify-between group"
            >
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-customGreen/10 border border-customGreen/30 flex items-center justify-center text-emerald-300 mb-5 sm:mb-6 group-hover:scale-110 group-hover:border-customGreen transition-all duration-300 shadow-[0_0_15px_rgba(15,157,88,0.2)]">
                  {idx === 0 && <Server size={22} />}
                  {idx === 1 && <Layout size={22} />}
                  {idx === 2 && <Brain size={22} />}
                </div>
                <h4 className="text-base sm:text-lg font-heading font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
              <div className="mt-5 sm:mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-500">
                <span>Pillar 0{idx + 1}</span>
                <span className="text-customGreen/80">Verified Experience</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
