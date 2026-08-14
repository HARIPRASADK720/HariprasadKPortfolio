import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Search, Sparkles } from "lucide-react";
import { skillTaxonomy } from "../data/skills";
import type { SkillItem } from "../data/skills";
import { useCursor } from "../context/CursorContext";
import { sounds } from "../utils/sound";

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { setCursorVariant, resetCursor } = useCursor();

  const allSkills: SkillItem[] = skillTaxonomy.flatMap((cat) => cat.skills);

  const filteredSkills = allSkills.filter((skill) => {
    const matchesCategory = selectedCategory === "all" || skill.category === selectedCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.appliedContext.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: "all", label: "All Constellations" },
    { id: "backend", label: "Backend & Systems" },
    { id: "nlpAi", label: "AI / NLP" },
    { id: "frontend", label: "Frontend" },
    { id: "languages", label: "Languages" },
    { id: "coreCs", label: "Core CS" },
    { id: "tools", label: "Tools & DevOps" },
  ];

  return (
    <section id="skills" className="py-20 sm:py-28 relative bg-[#07080c] noise-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-customGreen uppercase tracking-widest mb-3">
              <Code2 size={14} />
              <span>Technology Constellation</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black font-heading tracking-tight text-white">
              CORE TECHNICAL <br />
              <span className="text-gradient-accent">PROFICIENCIES</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-400 text-sm sm:text-base font-light">
            Interactive skill matrix. Hover over any node to explore its real-world implementation context in professional internships and projects.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 sm:mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none w-full lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  sounds.playClick();
                }}
                onMouseEnter={() => {
                  setCursorVariant("button");
                  sounds.playHover();
                }}
                onMouseLeave={resetCursor}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono whitespace-nowrap transition-all cursor-pointer border shrink-0 ${
                  selectedCategory === cat.id
                    ? "bg-customGreen/20 border-customGreen text-emerald-300 shadow-[0_0_15px_rgba(15,157,88,0.3)]"
                    : "glass-panel border-white/5 text-slate-400 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72">
            <label htmlFor="skills-search" className="sr-only">
              Search skills or context
            </label>
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
            <input
              id="skills-search"
              name="skillsSearch"
              type="text"
              placeholder="Search skill or context..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search skills or context"
              className="w-full pl-9 pr-4 py-2 rounded-full bg-slate-900/80 border border-white/10 text-xs font-mono text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-customGreen transition-colors"
            />
          </div>
        </div>

        {/* Live Context Inspector Pill (shows hovered skill context) */}
        <div className="min-h-[60px] mb-6 sm:mb-8 p-3.5 sm:p-4 rounded-2xl glass-panel border border-customGreen/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-all">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-customGreen/10 border border-customGreen/30 flex items-center justify-center text-emerald-300 shrink-0">
              <Sparkles size={16} />
            </div>
            <div>
              {hoveredSkill ? (
                <div>
                  <span className="text-xs font-mono text-customGreen font-bold mr-2">
                    {hoveredSkill.name} [{hoveredSkill.categoryLabel}]
                  </span>
                  <span className="text-xs font-sans text-slate-300 font-light">
                    — Applied in: {hoveredSkill.appliedContext}
                  </span>
                </div>
              ) : (
                <p className="text-xs font-mono text-slate-400">
                  Hover or tap any technology node to view its verified application in Hariprasad's resume.
                </p>
              )}
            </div>
          </div>
          {hoveredSkill && (
            <span className="self-end sm:self-auto px-2.5 py-0.5 rounded-full bg-customGreen/15 text-emerald-300 text-[10px] font-mono border border-customGreen/40">
              {hoveredSkill.proficiencyLevel}
            </span>
          )}
        </div>

        {/* Skills Constellation Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-3"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                onClick={() => {
                  setHoveredSkill(skill);
                  sounds.playClick();
                }}
                onMouseEnter={() => {
                  setHoveredSkill(skill);
                  setCursorVariant("button");
                  sounds.playHover();
                }}
                onMouseLeave={() => {
                  setHoveredSkill(null);
                  resetCursor();
                }}
                className={`p-3.5 sm:p-4 rounded-2xl glass-panel border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                  hoveredSkill?.name === skill.name
                    ? "border-customGreen bg-emerald-950/40 shadow-[0_0_20px_rgba(15,157,88,0.25)] -translate-y-1"
                    : "border-white/5 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase">
                    {skill.categoryLabel}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-customGreen/60 group-hover:bg-customGreen group-hover:shadow-[0_0_8px_#0F9D58] transition-all" />
                </div>

                <h4 className="text-xs sm:text-sm font-heading font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                  {skill.name}
                </h4>

                <div className="mt-2.5 sm:mt-3 pt-2 border-t border-white/5 text-[9px] sm:text-[10px] font-mono text-slate-500 truncate">
                  {skill.appliedContext.split(",")[0]}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
