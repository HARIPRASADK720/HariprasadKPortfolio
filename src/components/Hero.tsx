import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileDown, Code2, Brain, Database, Cpu } from "lucide-react";
import { TechNetworkCanvas } from "./3d/TechNetworkCanvas";
import { MagneticButton } from "./ui/MagneticButton";

const ROTATING_ROLES = [
  { first: "SOFTWARE", highlight: "ENGINEER" },
  { first: "AI", highlight: "ENGINEER" },
  { first: "FULL STACK", highlight: "DEVELOPER" },
];

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROTATING_ROLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen w-full max-w-full flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden noise-bg z-20">
      {/* 3D Tech Network Canvas Canvas in Background */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none overflow-hidden max-w-full">
        <TechNetworkCanvas className="w-full h-full" />
      </div>

      {/* Radial Gradient Glows (contained within section) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[550px] md:w-[700px] h-[280px] sm:h-[550px] md:h-[700px] bg-customGreen/15 rounded-full blur-[80px] sm:blur-[140px] pointer-events-none overflow-hidden" />
      <div className="absolute bottom-10 right-0 sm:right-10 w-[200px] sm:w-[450px] h-[200px] sm:h-[450px] bg-emerald-600/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none overflow-hidden" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full flex flex-col items-center text-center overflow-hidden">
        {/* Top Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl sm:rounded-full glass-panel border border-customGreen/30 mb-6 sm:mb-8 max-w-[calc(100vw-32px)]"
        >
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-customGreen opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-customGreen"></span>
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-0.5 text-[10px] sm:text-xs font-mono text-emerald-300 tracking-wide">
            <span className="whitespace-nowrap">Java</span>
            <span className="text-emerald-500/60">·</span>
            <span className="whitespace-nowrap">Spring Boot</span>
            <span className="text-emerald-500/60">·</span>
            <span className="whitespace-nowrap">React.js</span>
            <span className="text-emerald-500/60">·</span>
            <span className="whitespace-nowrap">Next.js</span>
            <span className="text-emerald-500/60">·</span>
            <span className="whitespace-nowrap">Python NLP</span>
          </div>
        </motion.div>

        {/* Hero Title with Animated Rotating Role Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto w-full px-2"
        >
          <div className="mb-2 sm:mb-3">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-emerald-400 font-semibold">
              HARIPRASAD K
            </span>
          </div>
          <div className="min-h-[100px] sm:min-h-[160px] md:min-h-[210px] lg:min-h-[240px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={roleIndex}
                initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30, filter: "blur(6px)" }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-6xl md:text-8xl lg:text-9xl font-black font-heading tracking-tight leading-[0.95] text-white break-words"
              >
                {ROTATING_ROLES[roleIndex].first} <br />
                <span className="text-gradient-accent">
                  {ROTATING_ROLES[roleIndex].highlight}
                </span>
              </motion.h1>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Supporting Tagline / Core Statement */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 max-w-2xl text-sm sm:text-base md:text-lg text-slate-300 font-light leading-relaxed px-4"
        >
          Architecting robust enterprise backends, high-performance web applications, and intelligent low-resource NLP pipelines.
        </motion.p>

        {/* Quick Tech Core Intersection Pills */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-2xl px-2"
        >
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-white/10 text-[11px] sm:text-xs font-mono text-slate-300 backdrop-blur-md">
            <Code2 size={13} className="text-customGreen shrink-0" />
            <span className="whitespace-nowrap">Java & Spring Boot</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-white/10 text-[11px] sm:text-xs font-mono text-slate-300 backdrop-blur-md">
            <Cpu size={13} className="text-emerald-400 shrink-0" />
            <span className="whitespace-nowrap">React & Next.js</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-white/10 text-[11px] sm:text-xs font-mono text-slate-300 backdrop-blur-md">
            <Brain size={13} className="text-teal-400 shrink-0" />
            <span className="whitespace-nowrap">Python & Transformers</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-white/10 text-[11px] sm:text-xs font-mono text-slate-300 backdrop-blur-md">
            <Database size={13} className="text-customGreen shrink-0" />
            <span className="whitespace-nowrap">SQL & NoSQL</span>
          </div>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 md:gap-6 w-full max-w-sm sm:max-w-none px-4"
        >
          <MagneticButton
            href="#projects"
            variant="primary"
            icon={<ArrowDown size={16} />}
            className="w-full sm:w-auto"
          >
            Explore Featured Work
          </MagneticButton>

          <MagneticButton
            href="/Hariprasad_K_Resume.pdf"
            download="Hariprasad_K_Resume.pdf"
            target="_blank"
            variant="secondary"
            icon={<FileDown size={16} />}
            className="w-full sm:w-auto"
          >
            Download Resume
          </MagneticButton>

          <MagneticButton
            href="#contact"
            variant="outline"
            icon={<ArrowUpRight size={16} />}
            className="w-full sm:w-auto"
          >
            Contact
          </MagneticButton>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mt-12 sm:mt-16 md:mt-24 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-slate-500 uppercase">
            Scroll to discover
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-5 h-9 rounded-full border border-slate-700 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 bg-customGreen rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
