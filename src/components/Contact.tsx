import React, { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, Send, FileDown, Loader2, CheckCircle2 } from "lucide-react";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    sounds.playClick();

    // Construct direct mailto dispatch with prefilled subject and message body
    const targetEmail = personalData.contact.email;
    const emailSubject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject/Role: ${formData.subject}\n\nMessage:\n${formData.message}`
    );

    setTimeout(() => {
      window.location.href = `mailto:${targetEmail}?subject=${emailSubject}&body=${emailBody}`;
      setIsSubmitting(false);
      setSubmitSuccess(true);
      sounds.playSuccess();
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 6000);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-[#07080c] noise-bg overflow-hidden max-w-full">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[700px] h-[280px] sm:h-[700px] bg-amber-500/10 rounded-full blur-[90px] sm:blur-[200px] pointer-events-none overflow-hidden" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-full overflow-hidden">
        {/* Section Header with Massive Editorial Typography */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 px-2">
          <h2 className="text-3xl sm:text-7xl md:text-8xl font-black font-heading tracking-tight text-white leading-[0.95] mb-4 sm:mb-6">
            LET'S BUILD <br />
            <span className="text-gradient-accent">SOMETHING USEFUL.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg font-light max-w-xl mx-auto">
            Open to software engineering roles, enterprise Java & full-stack development, and intelligent NLP systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Direct Contact Cards & Resume */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
            {/* Download Resume Direct Action Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-amber-950/60 to-slate-900/80 border border-amber-500/40 shadow-[0_0_30px_rgba(212,175,55,0.2)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
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
                className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 hover:from-amber-300 hover:to-yellow-400 font-semibold text-xs flex items-center justify-center gap-1.5 transition-all shadow-[0_0_15px_rgba(212,175,55,0.4)] w-full sm:w-auto shrink-0"
              >
                <FileDown size={15} />
                <span>Download</span>
              </a>
            </div>

            {/* Email Card */}
            <div className="glass-panel p-4 sm:p-6 rounded-3xl border border-white/10 flex items-center justify-between group hover:border-amber-400/60 hover:bg-amber-950/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] transition-all gap-3">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 group-hover:scale-110 group-hover:border-amber-400 transition-all shrink-0">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] sm:text-[11px] font-mono text-slate-500 uppercase block">Email Address</span>
                  <a
                    href={`mailto:${personalData.contact.email}`}
                    className="text-xs sm:text-sm md:text-base font-semibold text-slate-200 hover:text-amber-300 transition-colors break-all"
                  >
                    {personalData.contact.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                onMouseEnter={() => setCursorVariant("button")}
                onMouseLeave={resetCursor}
                className="p-2 sm:p-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-amber-400/60 hover:bg-amber-950/40 text-slate-400 hover:text-amber-300 transition-all cursor-pointer shrink-0"
                title="Copy Email"
              >
                {copiedEmail ? <Check size={16} className="text-amber-400" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-panel p-4 sm:p-6 rounded-3xl border border-white/10 flex items-center justify-between group hover:border-amber-400/60 hover:bg-amber-950/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] transition-all gap-3">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 group-hover:scale-110 group-hover:border-amber-400 transition-all shrink-0">
                  <Phone size={18} />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] sm:text-[11px] font-mono text-slate-500 uppercase block">Phone / Mobile</span>
                  <a
                    href={`tel:${personalData.contact.phone.replace(/\s+/g, "")}`}
                    className="text-xs sm:text-sm md:text-base font-semibold text-slate-200 hover:text-amber-300 transition-colors truncate block"
                  >
                    {personalData.contact.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyPhone}
                onMouseEnter={() => setCursorVariant("button")}
                onMouseLeave={resetCursor}
                className="p-2 sm:p-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-amber-400/60 hover:bg-amber-950/40 text-slate-400 hover:text-amber-300 transition-all cursor-pointer shrink-0"
                title="Copy Phone Number"
              >
                {copiedPhone ? <Check size={16} className="text-amber-400" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-panel p-4 sm:p-6 rounded-3xl border border-white/10 hover:border-amber-400/60 hover:bg-amber-950/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] transition-all flex items-center gap-3 sm:gap-4 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 group-hover:scale-110 group-hover:border-amber-400 transition-all shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] font-mono text-slate-500 uppercase block">Current Location</span>
                <span className="text-xs sm:text-sm md:text-base font-semibold text-slate-200">
                  {personalData.contact.location}
                </span>
              </div>
            </div>
          </div>

          {/* Direct Message Form (Direct Delivery to hariprasadk716@gmail.com) */}
          <div className="lg:col-span-7 glass-panel p-5 sm:p-8 md:p-10 rounded-3xl border border-white/10 relative">
            <div className="flex items-center justify-between mb-5 sm:mb-6 pb-4 border-b border-white/10">
              <div>
                <h3 className="text-base sm:text-lg font-heading font-bold text-white">
                  Send a Direct Message
                </h3>
              </div>
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
            </div>

            {submitSuccess && (
              <div className="mb-5 sm:mb-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono flex items-center gap-3">
                <CheckCircle2 size={18} className="text-amber-400 shrink-0" />
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
                    className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/10 text-base sm:text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-amber-400 transition-colors"
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
                    className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/10 text-base sm:text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-amber-400 transition-colors"
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
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/10 text-base sm:text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-amber-400 transition-colors"
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
                  className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/10 text-base sm:text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-amber-400 transition-colors resize-none"
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
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-slate-950 font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(212,175,55,0.45)] hover:shadow-[0_0_35px_rgba(212,175,55,0.75)] cursor-pointer disabled:opacity-50 transition-all"
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
