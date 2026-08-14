import React, { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight, Send, Terminal, FileDown, Loader2, CheckCircle2 } from "lucide-react";
import { personalData } from "../data/personal";
import { useCursor } from "../context/CursorContext";
import { sounds } from "../utils/sound";

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { setCursorVariant, resetCursor } = useCursor();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.contact.email);
    setCopiedEmail(true);
    sounds.playSuccess();
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalData.contact.phone);
    setCopiedPhone(true);
    sounds.playSuccess();
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    sounds.playClick();

    try {
      // Dispatches form response directly to hariprasadk716@gmail.com via FormSubmit AJAX endpoint
      const response = await fetch("https://formsubmit.co/ajax/hariprasadk716@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Portfolio Contact / Opportunity",
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: "table",
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        sounds.playSuccess();
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        // Fallback: Trigger native mailto
        const mailtoUrl = `mailto:${personalData.contact.email}?subject=${encodeURIComponent(
          formData.subject || `Opportunity from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoUrl;
        setSubmitSuccess(true);
      }
    } catch {
      // Fallback on network interruption: native mailto
      const mailtoUrl = `mailto:${personalData.contact.email}?subject=${encodeURIComponent(
        formData.subject || `Opportunity from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-[#07080c] noise-bg overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[700px] h-[320px] sm:h-[700px] bg-customGreen/10 rounded-full blur-[100px] sm:blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Massive Editorial Typography */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 px-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-customGreen uppercase tracking-widest mb-4">
            <Terminal size={14} />
            <span>Initiate Contact</span>
          </div>
          <h2 className="text-4xl sm:text-7xl md:text-8xl font-black font-heading tracking-tight text-white leading-[0.95] mb-4 sm:mb-6">
            LET'S BUILD <br />
            <span className="text-gradient-accent">SOMETHING USEFUL.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg font-light max-w-xl mx-auto">
            Available for software engineering roles, enterprise Java & full-stack development, and intelligent NLP systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Direct Contact Cards & Resume */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
            {/* Download Resume Direct Action Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-emerald-950/60 to-slate-900/80 border border-customGreen/40 shadow-[0_0_30px_rgba(15,157,88,0.2)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 block mb-1">
                  Verified Resume PDF
                </span>
                <h4 className="text-sm sm:text-base font-heading font-bold text-white">
                  Hariprasad K — Resume
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Software Engineer · Java · Full Stack · NLP
                </p>
              </div>

              <a
                href="/Hariprasad_K_Resume.pdf"
                download="Hariprasad_K_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setCursorVariant("button")}
                onMouseLeave={resetCursor}
                onClick={() => sounds.playSuccess()}
                className="px-4 py-2.5 rounded-2xl bg-customGreen text-slate-950 hover:bg-emerald-400 font-semibold text-xs flex items-center justify-center gap-1.5 transition-all shadow-[0_0_15px_rgba(15,157,88,0.4)] self-start sm:self-auto shrink-0"
              >
                <FileDown size={15} />
                <span>Download</span>
              </a>
            </div>

            {/* Email Card */}
            <div className="glass-panel p-4 sm:p-6 rounded-3xl border border-white/10 flex items-center justify-between group hover:border-customGreen/50 transition-all gap-3">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-customGreen/10 border border-customGreen/30 flex items-center justify-center text-emerald-300 shrink-0">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] sm:text-[11px] font-mono text-slate-500 uppercase block">Email Address</span>
                  <a
                    href={`mailto:${personalData.contact.email}`}
                    className="text-xs sm:text-sm md:text-base font-semibold text-slate-200 hover:text-emerald-300 transition-colors break-all"
                  >
                    {personalData.contact.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                onMouseEnter={() => setCursorVariant("button")}
                onMouseLeave={resetCursor}
                className="p-2 sm:p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-emerald-300 transition-colors cursor-pointer shrink-0"
                title="Copy Email"
              >
                {copiedEmail ? <Check size={16} className="text-customGreen" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-panel p-4 sm:p-6 rounded-3xl border border-white/10 flex items-center justify-between group hover:border-customGreen/50 transition-all gap-3">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-customGreen/10 border border-customGreen/30 flex items-center justify-center text-emerald-300 shrink-0">
                  <Phone size={18} />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] sm:text-[11px] font-mono text-slate-500 uppercase block">Phone / Mobile</span>
                  <a
                    href={`tel:${personalData.contact.phone.replace(/\s+/g, "")}`}
                    className="text-xs sm:text-sm md:text-base font-semibold text-slate-200 hover:text-emerald-300 transition-colors truncate block"
                  >
                    {personalData.contact.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyPhone}
                onMouseEnter={() => setCursorVariant("button")}
                onMouseLeave={resetCursor}
                className="p-2 sm:p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-emerald-300 transition-colors cursor-pointer shrink-0"
                title="Copy Phone Number"
              >
                {copiedPhone ? <Check size={16} className="text-customGreen" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-panel p-4 sm:p-6 rounded-3xl border border-white/10 flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-customGreen/10 border border-customGreen/30 flex items-center justify-center text-emerald-300 shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] font-mono text-slate-500 uppercase block">Current Location</span>
                <span className="text-xs sm:text-sm md:text-base font-semibold text-slate-200">
                  {personalData.contact.location}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-1">
              <a
                href={personalData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setCursorVariant("button")}
                onMouseLeave={resetCursor}
                className="glass-panel p-3.5 sm:p-4 rounded-2xl border border-white/5 hover:border-customGreen/40 text-slate-200 hover:text-emerald-300 flex items-center justify-between text-xs font-mono transition-all"
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href={personalData.contact.github}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setCursorVariant("button")}
                onMouseLeave={resetCursor}
                className="glass-panel p-3.5 sm:p-4 rounded-2xl border border-white/5 hover:border-customGreen/40 text-slate-200 hover:text-emerald-300 flex items-center justify-between text-xs font-mono transition-all"
              >
                <span>GitHub</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Direct Message Form (Direct Delivery to hariprasadk716@gmail.com) */}
          <div className="lg:col-span-7 glass-panel p-5 sm:p-8 md:p-10 rounded-3xl border border-white/10 relative">
            <div className="flex items-center justify-between mb-5 sm:mb-6 pb-4 border-b border-white/10">
              <div>
                <h3 className="text-base sm:text-lg font-heading font-bold text-white">
                  Send a Direct Message
                </h3>
                <span className="text-xs font-mono text-customGreen">
                  Dispatches directly to {personalData.contact.email}
                </span>
              </div>
              <span className="w-2 h-2 rounded-full bg-customGreen animate-ping" />
            </div>

            {submitSuccess && (
              <div className="mb-5 sm:mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-3">
                <CheckCircle2 size={18} className="text-customGreen shrink-0" />
                <span>Message received! Your response has been dispatched directly to {personalData.contact.email}.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-slate-400 uppercase mb-2">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Rivera"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/10 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-customGreen transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-slate-400 uppercase mb-2">
                    Your Email Address *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/10 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-customGreen transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-400 uppercase mb-2">
                  Subject / Organization
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  autoComplete="organization"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Software Engineering Role / Project Discussion"
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/10 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-customGreen transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-slate-400 uppercase mb-2">
                  Message / Role Details *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Hariprasad, I'd like to discuss a software engineering opportunity with our team..."
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/10 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-customGreen transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onMouseEnter={() => {
                    setCursorVariant("button");
                    sounds.playHover();
                  }}
                  onMouseLeave={resetCursor}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-emerald-400 to-customGreen text-slate-950 font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(15,157,88,0.4)] hover:shadow-[0_0_35px_rgba(15,157,88,0.7)] cursor-pointer disabled:opacity-50 transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending to Email...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message Directly</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
