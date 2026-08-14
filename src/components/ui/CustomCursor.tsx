import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export type CursorVariant = "default" | "button" | "project" | "text" | "hidden";

interface CustomCursorProps {
  variant?: CursorVariant;
  cursorText?: string;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({
  variant = "default",
  cursorText = "",
}) => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isPointerDevice, setIsPointerDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on precise pointer devices (desktop/mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsPointerDevice(mediaQuery.matches);

    const handlePointerChange = (e: MediaQueryListEvent) => {
      setIsPointerDevice(e.matches);
    };
    mediaQuery.addEventListener("change", handlePointerChange);

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.body.addEventListener("mouseleave", onMouseLeave);
    document.body.addEventListener("mouseenter", onMouseEnter);

    return () => {
      mediaQuery.removeEventListener("change", handlePointerChange);
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseleave", onMouseLeave);
      document.body.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (!isPointerDevice || !isVisible || variant === "hidden") {
    return null;
  }

  const getVariantStyles = () => {
    switch (variant) {
      case "project":
        return {
          width: 80,
          height: 80,
          backgroundColor: "rgba(212, 175, 55, 0.95)",
          borderColor: "rgba(255, 255, 255, 0.6)",
          scale: 1,
        };
      case "button":
        return {
          width: 48,
          height: 48,
          backgroundColor: "rgba(212, 175, 55, 0.2)",
          borderColor: "rgba(212, 175, 55, 0.8)",
          scale: 1.1,
        };
      case "text":
        return {
          width: 36,
          height: 36,
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderColor: "rgba(255, 255, 255, 0.4)",
          scale: 1,
        };
      default:
        return {
          width: 24,
          height: 24,
          backgroundColor: "rgba(212, 175, 55, 0.1)",
          borderColor: "rgba(212, 175, 55, 0.7)",
          scale: 1,
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <>
      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-50 flex items-center justify-center backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - styles.width / 2,
          y: mousePosition.y - styles.height / 2,
          width: styles.width,
          height: styles.height,
          backgroundColor: styles.backgroundColor,
          borderColor: styles.borderColor,
          scale: styles.scale,
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 350,
          mass: 0.5,
        }}
      >
        {variant === "project" && (
          <span className="text-[10px] tracking-widest font-mono font-bold text-slate-950 uppercase">
            {cursorText || "VIEW"}
          </span>
        )}
      </motion.div>

      {/* Central Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#D4AF37] rounded-full pointer-events-none z-50 shadow-[0_0_10px_#D4AF37]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          opacity: variant === "project" ? 0 : 1,
        }}
        transition={{
          type: "spring",
          damping: 45,
          stiffness: 600,
          mass: 0.1,
        }}
      />
    </>
  );
};
