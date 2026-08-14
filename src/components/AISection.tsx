import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Sparkles, Cpu, Binary, Layers, Network, Zap } from "lucide-react";
import { useCursor } from "../context/CursorContext";
import { sounds } from "../utils/sound";

export const AISection: React.FC = () => {
  const [activePipelineTab, setActivePipelineTab] = useState<"kannada" | "ats">("kannada");
  const { setCursorVariant, resetCursor } = useCursor();

  const pipelineStages = [
    {
      num: "01",
      title: "Raw Text Ingestion",
      desc: "Ingests raw multilingual and low-resource documents, stripping noise and preserving script fidelity.",
      icon: Layers,
      highlight: "Kannada Unicode Corpus & Resumes"
    },
    {
      num: "02",
      title: "Linguistic Processing",
      desc: "Applies spaCy & NLTK for morphological normalization, sentence boundary detection, and entity isolation.",
      icon: Binary,
      highlight: "Morphological Filtering"
    },
    {
      num: "03",
      title: "Semantic Representation",
      desc: "Builds TF-IDF term-frequency matrices and TextRank graph centroids across sentence nodes.",
      icon: Network,
      highlight: "Graph Centrality & Sparse Vectors"
    },
    {
      num: "04",
      title: "Transformer Modeling",
      desc: "Executes fine-tuned BART & T5 sequence-to-sequence neural architectures or Scikit-learn Cosine similarity.",
      icon: Brain,
      highlight: "Hugging Face Seq2Seq Attention"
    },
    {
      num: "05",
      title: "Intelligent Output",
      desc: "Delivers fluent abstractive summaries or auditable candidate match rankings.",
      icon: Cpu,
      highlight: "Abstractive Summary & Match Score"
    }
  ];

  return (
    <section id="ai-engineering" className="py-20 sm:py-28 relative bg-[#07080c] noise-bg overflow-hidden max-w-full">
      {/* Background Neural Glows */}
      <div className="absolute top-1/2 right-0 sm:right-1/4 w-[260px] sm:w-[600px] h-[260px] sm:h-[600px] bg-customGreen/10 rounded-full blur-[90px] sm:blur-[180px] pointer-events-none overflow-hidden" />
      <div className="absolute bottom-10 left-0 sm:left-10 w-[220px] sm:w-[500px] h-[220px] sm:h-[500px] bg-emerald-600/10 rounded-full blur-[80px] sm:blur-[160px] pointer-events-none overflow-hidden" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-full overflow-hidden">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-20 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-customGreen uppercase tracking-widest mb-3">
              <Brain size={14} />
              <span>Core Differentiator</span>
            </div>
            <h2 className="text-3xl sm:text-6xl font-black font-heading tracking-tight text-white">
              ENGINEERING <br />
              <span className="text-gradient-accent">INTELLIGENCE</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-400 text-sm sm:text-base font-light">
            Bridging modern full-stack software development with state-of-the-art transformer NLP and semantic machine learning.
          </p>
        </div>

        {/* Tab Switcher between Kannada NLP and ATS Ranker */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 mb-10 sm:mb-14 w-full">
          <button
            onClick={() => {
              setActivePipelineTab("kannada");
              sounds.playClick();
            }}
            onMouseEnter={() => {
              setCursorVariant("button");
              sounds.playHover();
            }}
            onMouseLeave={resetCursor}
            className={`w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-mono transition-all cursor-pointer border text-center ${
              activePipelineTab === "kannada"
                ? "bg-customGreen/20 border-customGreen text-emerald-300 shadow-[0_0_20px_rgba(15,157,88,0.3)]"
                : "glass-panel border-white/5 text-slate-400 hover:text-white"
            }`}
          >
            Kannada Low-Resource NLP Pipeline
          </button>
          <button
            onClick={() => {
              setActivePipelineTab("ats");
              sounds.playClick();
            }}
            onMouseEnter={() => {
              setCursorVariant("button");
              sounds.playHover();
            }}
            onMouseLeave={resetCursor}
            className={`w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-mono transition-all cursor-pointer border text-center ${
              activePipelineTab === "ats"
                ? "bg-customGreen/20 border-customGreen text-emerald-300 shadow-[0_0_20px_rgba(15,157,88,0.3)]"
                : "glass-panel border-white/5 text-slate-400 hover:text-white"
            }`}
          >
            ATS Semantic Vector Ranker
          </button>
        </div>

        {/* 5-Stage Animated Visual Pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 mb-12 sm:mb-16">
          {pipelineStages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-5 sm:p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between border border-white/10 group hover:border-customGreen/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-xs font-mono text-customGreen font-bold">
                      STAGE {stage.num}
                    </span>
                    <div className="p-2 rounded-xl bg-customGreen/10 text-customGreen group-hover:scale-110 transition-transform">
                      <Icon size={16} />
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-heading font-bold text-white mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed mb-4">
                    {stage.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <span className="text-[10px] font-mono text-emerald-300/80 block">
                    {stage.highlight}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Deep Dive Architecture Comparison Card */}
        <div className="glass-panel p-5 sm:p-8 md:p-12 rounded-3xl border border-customGreen/30">
          <AnimatePresence mode="wait">
            {activePipelineTab === "kannada" ? (
              <motion.div
                key="kannada"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8"
              >
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-customGreen">
                    <Sparkles size={14} />
                    <span>Low-Resource Language Synthesis</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white">
                    Hybrid Extractive + Abstractive Kannada Summarization
                  </h3>
                  <p className="text-slate-300 text-sm font-light leading-relaxed">
                    By synthesizing statistical graph-based sentence extraction (TextRank & TF-IDF) with fine-tuned sequence-to-sequence Transformer architectures (BART & T5), the system prevents generative hallucinations while preserving low-resource contextual semantics.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5 text-xs font-mono text-slate-300">
                      <span className="text-customGreen block mb-1">Extractive Layer:</span>
                      TextRank & TF-IDF Graph Centrality
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5 text-xs font-mono text-slate-300">
                      <span className="text-customGreen block mb-1">Abstractive Layer:</span>
                      Hugging Face BART & T5 Transformers
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 p-4 sm:p-6 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs text-slate-300 flex flex-col justify-between">
                  <div>
                    <span className="text-slate-500 text-[10px] sm:text-[11px] block mb-2">// PIPELINE_EXECUTION_METRIC</span>
                    <p className="text-emerald-300 text-xs leading-relaxed break-words whitespace-pre-wrap">
                      [INFO] Preprocessing multilingual raw text.<br />
                      [INFO] Building token adjacency matrices.<br />
                      [INFO] Encoder-decoder sequence generation ready.<br />
                      [STATUS] Complete end-to-end evaluation pipeline.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400">
                    <span>Python · Hugging Face</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="ats"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8"
              >
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-customGreen">
                    <Zap size={14} />
                    <span>Vector Space Information Retrieval</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white">
                    ATS Resume Ranker with Cosine Similarity Metrics
                  </h3>
                  <p className="text-slate-300 text-sm font-light leading-relaxed">
                    Employs linguistic parsing with spaCy to isolate domain competencies and builds n-gram TF-IDF high-dimensional vector representations, scoring candidates through multidimensional cosine similarity against target job descriptions.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5 text-xs font-mono text-slate-300">
                      <span className="text-customGreen block mb-1">Entity Layer:</span>
                      spaCy Named Entity & Lemmatization
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5 text-xs font-mono text-slate-300">
                      <span className="text-customGreen block mb-1">Geometric Math:</span>
                      Cosine Angular Dot Product Score
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs text-slate-300 flex flex-col justify-between">
                  <div>
                    <span className="text-slate-500 text-[10px] sm:text-[11px] block mb-2">// VECTOR_MATCH_LOG</span>
                    <p className="text-emerald-300 text-xs leading-relaxed">
                      [SIM] Target: Software Engineer / Spring Boot.<br />
                      [VEC] Cosine similarity computed in vector space.<br />
                      [RANK] Candidates ranked with measurable match scores.<br />
                      [STATUS] Deterministic candidate qualification.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400">
                    <span>Scikit-learn · spaCy</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
