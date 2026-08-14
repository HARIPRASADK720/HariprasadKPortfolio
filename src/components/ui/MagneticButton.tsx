import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useCursor } from "../../context/CursorContext";
import { sounds } from "../../utils/sound";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  icon?: React.ReactNode;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = "",
  onClick,
  href,
  download,
  target,
  rel,
  variant = "primary",
  icon,
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { setCursorVariant, resetCursor } = useCursor();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    setPosition({ x: distanceX * 0.25, y: distanceY * 0.25 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    resetCursor();
  };

  const handleMouseEnter = () => {
    setCursorVariant("button");
    sounds.playHover();
  };

  const handleClick = () => {
    sounds.playClick();
    if (onClick) onClick();
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-to-r from-emerald-500 to-customGreen text-slate-950 font-semibold shadow-[0_0_25px_rgba(15,157,88,0.4)] hover:shadow-[0_0_35px_rgba(15,157,88,0.7)] border border-emerald-300/40";
      case "secondary":
        return "bg-slate-900/80 text-white border border-slate-700/60 hover:border-customGreen/60 hover:bg-slate-800/80 backdrop-blur-md";
      case "outline":
        return "border border-customGreen/50 text-emerald-300 hover:bg-customGreen/20 hover:border-customGreen";
      case "ghost":
        return "text-slate-300 hover:text-emerald-300 hover:bg-white/5";
    }
  };

  const content = (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 20, mass: 0.5 }}
      className={`group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer overflow-hidden ${getVariantStyles()} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>}
      </span>
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} download={download} target={target} rel={rel} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
};
