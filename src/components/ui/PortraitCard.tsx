import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MapPin } from "lucide-react";
import { useCursor } from "../../context/CursorContext";
import { sounds } from "../../utils/sound";

export const PortraitCard: React.FC<{ className?: string }> = ({ className = "" }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { setCursorVariant, resetCursor } = useCursor();

  // 3D Parallax Tilt Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !window.matchMedia("(pointer: fine)").matches) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    resetCursor();
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setCursorVariant("button");
        sounds.playHover();
      }}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative rounded-3xl p-1 bg-gradient-to-b from-amber-400/40 via-white/10 to-yellow-500/20 shadow-[0_20px_60px_rgba(0,0,0,0.8)] group transition-all duration-300 ${className}`}
    >
      {/* Outer Illuminated LED Glow Frame matching the photo */}
      <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-b from-amber-400/30 via-yellow-500/10 to-amber-500/30 blur-lg opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="relative rounded-[22px] overflow-hidden bg-[#0a0d16] border border-white/15">
        {/* Photo with smooth zoom on hover */}
        <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden">
          <img
            src="/hariprasad.jpg"
            alt="Hariprasad K — Software Engineer"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Cinematic Gradient Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080c] via-transparent to-black/30 pointer-events-none" />

          {/* Scanline grid overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_0)] bg-[size:16px_16px] opacity-20 pointer-events-none" />

          {/* Floating Top HUD Status Badge */}
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between pointer-events-none gap-2">
            <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] sm:text-[11px] font-mono text-amber-300 truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse shrink-0" />
              <span className="truncate">HARIPRASAD K</span>
            </div>
            <div className="flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[9px] sm:text-[10px] font-mono text-slate-300 shrink-0">
              <MapPin size={10} className="text-amber-400" />
              <span>BLR · IN</span>
            </div>
          </div>

          {/* Floating Bottom HUD Stats */}
          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-black/80 backdrop-blur-md border border-white/15 text-xs">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-amber-400 font-semibold">
                Software Engineer
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono text-slate-400">
                Java · AI · Full Stack
              </span>
            </div>
            <p className="text-slate-200 text-[11px] sm:text-xs font-light leading-snug">
              Building robust enterprise services & transformer NLP systems.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
