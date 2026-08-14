import { useEffect } from "react";
import Lenis from "lenis";
import { CursorProvider, useCursor } from "./context/CursorContext";
import { CustomCursor } from "./components/ui/CustomCursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { AISection } from "./components/AISection";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Achievement } from "./components/Achievement";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function PortfolioContent() {
  const { cursorVariant, cursorText } = useCursor();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#07080c] text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden w-full max-w-full">
      <CustomCursor variant={cursorVariant} cursorText={cursorText} />
      <Navbar />
      <main className="overflow-x-hidden w-full max-w-full">
        <Hero />
        <About />
        <Projects />
        <AISection />
        <Experience />
        <Skills />
        <Achievement />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <CursorProvider>
      <PortfolioContent />
    </CursorProvider>
  );
}
