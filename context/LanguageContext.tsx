"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "tr" | "en";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (tr: string, en: string) => string;
}

const LanguageContext = createContext<LangCtx>({
  lang: "tr",
  setLang: () => {},
  t: (tr) => tr,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("tr");

  useEffect(() => {
    const saved = localStorage.getItem("sayol-lang") as Lang | null;
    if (saved === "en" || saved === "tr") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("sayol-lang", l);
  };

  const t = (tr: string, en: string) => (lang === "en" ? en : tr);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
