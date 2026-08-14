import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, FileDown } from "lucide-react";
import { personalData } from "../data/personal";
import { useCursor } from "../context/CursorContext";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setCursorVariant, resetCursor } = useCursor();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const navLinks = [
    { label: "Work", href: "#projects" },
    { label: "AI Architecture", href: "#ai-engineering" },
    { label: "Experience", href: "#experience" },
    { label: "Constellation", href: "#skills" },
    { label: "Achievement", href: "#achievements" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#07080c]/85 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Monogram */}
        <a
          href="#"
          onMouseEnter={() => setCursorVariant("button")}
          onMouseLeave={resetCursor}
          className="group flex items-center gap-3 relative"
        >
          <img
            src="/logo.png"
            alt="Hariprasad K Logo"
            className="w-10 h-10 object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-slate-100 group-hover:text-emerald-300 transition-colors">
              {personalData.name}
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 tracking-tight">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/[0.08] backdrop-blur-md shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onMouseEnter={() => setCursorVariant("button")}
              onMouseLeave={resetCursor}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-emerald-300 hover:bg-white/[0.06] transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Status Indicator & Audio & Resume & CTA */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Resume Download Button */}
          <a
            href="/Hariprasad_K_Resume.pdf"
            download="Hariprasad_K_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setCursorVariant("button")}
            onMouseLeave={resetCursor}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono text-emerald-300 bg-emerald-950/40 border border-customGreen/40 hover:bg-emerald-900/40 hover:border-customGreen transition-all shadow-[0_0_15px_rgba(15,157,88,0.2)]"
          >
            <FileDown size={14} />
            <span>Resume</span>
          </a>

          {/* Contact Button */}
          <a
            href="#contact"
            onMouseEnter={() => setCursorVariant("button")}
            onMouseLeave={resetCursor}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-customGreen text-slate-950 hover:bg-emerald-400 transition-all shadow-[0_0_15px_rgba(15,157,88,0.3)] hover:shadow-[0_0_25px_rgba(15,157,88,0.6)]"
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl border border-white/10 bg-slate-900/50 text-slate-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[#07080c]/98 backdrop-blur-2xl border-b border-white/10 p-5 sm:p-6 flex flex-col gap-4 shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-customGreen animate-pulse" />
                Available for opportunities
              </div>
              <span className="text-[11px] font-mono text-slate-500">{personalData.contact.location}</span>
            </div>

            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-emerald-300 hover:bg-white/5 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={16} className="text-slate-500" />
                </a>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mt-2">
              <a
                href="/Hariprasad_K_Resume.pdf"
                download="Hariprasad_K_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 rounded-xl text-center font-mono font-medium bg-slate-900 border border-customGreen/40 text-emerald-300 text-xs flex items-center justify-center gap-1.5"
              >
                <FileDown size={14} />
                <span>Resume PDF</span>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 rounded-xl text-center font-semibold bg-gradient-to-r from-emerald-400 to-customGreen text-slate-950 text-xs flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(15,157,88,0.4)]"
              >
                <span>Get In Touch</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
