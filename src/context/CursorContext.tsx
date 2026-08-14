import React, { createContext, useContext, useState } from "react";
import type { CursorVariant } from "../components/ui/CustomCursor";

interface CursorContextType {
  cursorVariant: CursorVariant;
  cursorText: string;
  setCursorVariant: (variant: CursorVariant, text?: string) => void;
  resetCursor: () => void;
}

const CursorContext = createContext<CursorContextType>({
  cursorVariant: "default",
  cursorText: "",
  setCursorVariant: () => {},
  resetCursor: () => {},
});

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cursorVariant, setVariant] = useState<CursorVariant>("default");
  const [cursorText, setCursorText] = useState<string>("");

  const setCursorVariant = (variant: CursorVariant, text: string = "") => {
    setVariant(variant);
    setCursorText(text);
  };

  const resetCursor = () => {
    setVariant("default");
    setCursorText("");
  };

  return (
    <CursorContext.Provider
      value={{
        cursorVariant,
        cursorText,
        setCursorVariant,
        resetCursor,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
