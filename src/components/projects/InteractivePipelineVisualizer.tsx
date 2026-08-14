import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, RotateCcw, Check } from "lucide-react";
import type { ProjectItem } from "../../data/projects";
import { sounds } from "../../utils/sound";

interface Props {
  project: ProjectItem;
}

export const InteractivePipelineVisualizer: React.FC<Props> = ({ project }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const handleReset = () => {
    setActiveStep(0);
    setIsRunning(false);
    sounds.playClick();
  };

  const runSimulation = () => {
    setIsRunning(true);
    sounds.playSuccess();
    let step = 0;
    const interval = setInterval(() => {
      if (step < project.pipelineSteps.length - 1) {
        step++;
        setActiveStep(step);
        sounds.playHover();
      } else {
        clearInterval(interval);
        setIsRunning(false);
        sounds.playSuccess();
      }
    }, 900);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 rounded-3xl bg-slate-950/80 border border-customGreen/30 relative overflow-hidden">
      {/* Visualizer Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-6 border-b border-white/10 gap-3 sm:gap-4">
        <div>
          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-customGreen block mb-1">
            Interactive Architecture Pipeline
          </span>
          <h4 className="text-base sm:text-lg font-heading font-bold text-white">
            {project.title} Execution Model
          </h4>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={runSimulation}
            disabled={isRunning}
            className="px-3.5 sm:px-4 py-2 rounded-xl bg-customGreen/20 hover:bg-customGreen/30 border border-customGreen/50 text-emerald-300 text-xs font-mono flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50"
          >
            <Play size={12} className={isRunning ? "animate-spin" : ""} />
            <span>{isRunning ? "Simulating..." : "Auto-Run Pipeline"}</span>
          </button>
          <button
            onClick={handleReset}
            className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
            title="Reset Pipeline"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>

      {/* Step Sequence Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 my-4 sm:my-6">
        {project.pipelineSteps.map((step, idx) => {
          const isCurrent = activeStep === idx;
          const isDone = activeStep > idx;
          const isLastOdd = idx === project.pipelineSteps.length - 1 && project.pipelineSteps.length % 2 !== 0;
          return (
            <button
              key={step.step}
              onClick={() => {
                setActiveStep(idx);
                sounds.playClick();
              }}
              className={`text-left p-2.5 sm:p-3 rounded-xl transition-all cursor-pointer border ${
                isLastOdd ? "col-span-2 sm:col-span-1" : ""
              } ${
                isCurrent
                  ? "bg-emerald-950/60 border-customGreen text-white shadow-[0_0_15px_rgba(15,157,88,0.3)]"
                  : isDone
                  ? "bg-slate-900/60 border-customGreen/40 text-emerald-300"
                  : "bg-slate-900/30 border-white/5 text-slate-500"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono font-bold">
                  STEP {step.step}
                </span>
                {isDone ? (
                  <Check size={12} className="text-customGreen shrink-0" />
                ) : isCurrent ? (
                  <span className="w-1.5 h-1.5 rounded-full bg-customGreen animate-ping shrink-0" />
                ) : null}
              </div>
              <p className="text-xs font-semibold truncate">
                {step.label}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Step Deep Dive Terminal */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.25 }}
          className="p-4 sm:p-6 rounded-2xl bg-[#090b12] border border-white/10 font-mono text-xs text-slate-300"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-3 sm:mb-4 text-slate-500 text-[10px] sm:text-[11px] gap-2 flex-wrap">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
              <span className="ml-1 sm:ml-2 text-slate-400">
                pipeline_node_0{activeStep + 1}.py
              </span>
            </div>
            <span className="text-customGreen">
              Stack: {project.pipelineSteps[activeStep].tech}
            </span>
          </div>

          <div className="space-y-2">
            <div className="text-emerald-300 font-bold text-xs sm:text-sm">
              &gt; Phase {project.pipelineSteps[activeStep].step}: {project.pipelineSteps[activeStep].label}
            </div>
            <p className="text-slate-300 font-sans text-xs sm:text-sm font-light leading-relaxed">
              {project.pipelineSteps[activeStep].description}
            </p>
          </div>

          {/* Contextual Code / Data Representation */}
          <div className="mt-3 sm:mt-4 p-3 sm:p-4 rounded-xl bg-black/50 border border-white/5 text-[10px] sm:text-[11px] text-slate-400 overflow-x-auto whitespace-pre-wrap break-words leading-relaxed">
            {project.id === "kannada-nlp-summarization" ? (
              activeStep === 0 ? (
                <code>
                  [INPUT_STREAM] Ingesting Kannada unstructured text corpus...<br />
                  Encoding: UTF-8 | Script: Kannada (Unicode block 0C80–0CFF)
                </code>
              ) : activeStep === 1 ? (
                <code>
                  [TOKENIZER] spaCy & NLTK Kannada pipeline active.<br />
                  &gt; Normalizing agglutinative suffixes, stopword masking, sentence segmentation.
                </code>
              ) : activeStep === 2 ? (
                <code>
                  [EXTRACTIVE_RANKER] Computing TF-IDF term weights & TextRank adjacency graph...<br />
                  &gt; Graph Centrality calculated: high-density sentence centroids selected.
                </code>
              ) : activeStep === 3 ? (
                <code>
                  [TRANSFORMER] Hugging Face Seq2Seq (BART & T5 Encoder-Decoder fine-tuned).<br />
                  &gt; Attending to cross-lingual positional embeddings and generating abstractive tokens.
                </code>
              ) : (
                <code>
                  [OUTPUT] Synthesized abstractive Kannada summary generated.<br />
                  &gt; Semantic evaluation complete across multilingual unstructured text.
                </code>
              )
            ) : (
              activeStep === 0 ? (
                <code>
                  [INPUT_STREAM] Parsing candidate resume documents & target job descriptions...<br />
                  &gt; Ingesting raw unstructured plain-text & PDF document streams.
                </code>
              ) : activeStep === 1 ? (
                <code>
                  [ENTITY_EXTRACTION] spaCy linguistic parsing identifying technical skills & roles...<br />
                  &gt; Lemmatization and domain keyword entity tokenization applied.
                </code>
              ) : activeStep === 2 ? (
                <code>
                  [VECTOR_SPACE] Scikit-learn TF-IDF matrix vectorization...<br />
                  &gt; Transforming n-grams into sparse high-dimensional vector representations.
                </code>
              ) : activeStep === 3 ? (
                <code>
                  [COSINE_SIMILARITY] Computing dot product distance: cos(θ) = (A · B) / (||A|| ||B||)<br />
                  &gt; Determining geometric angular proximity between resume and job vectors.
                </code>
              ) : (
                <code>
                  [RANKING_ENGINE] Candidate scored & ranked against qualification benchmarks.<br />
                  &gt; Deterministic match score produced with full auditability.
                </code>
              )
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
