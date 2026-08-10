import { createContext, useContext, useEffect, useState, useMemo, useCallback } from "react";
import dictionaries from "@/i18n/translations";

const LanguageContext = createContext(null);

const STORAGE_KEY = "ev_lang";
const DEFAULT_LANG = "bn"; // Bangla-first

const readInitial = () => {
  if (typeof window === "undefined") return DEFAULT_LANG;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "bn" || stored === "en") return stored;
  } catch (_) {
    // ignore
  }
  return DEFAULT_LANG;
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(readInitial);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {
      // ignore
    }
  }, [lang]);

  const setLang = useCallback((next) => setLangState(next === "bn" ? "bn" : "en"), []);
  const toggle = useCallback(() => setLangState((v) => (v === "bn" ? "en" : "bn")), []);

  const value = useMemo(
    () => ({ lang, setLang, toggle, t: dictionaries[lang] }),
    [lang, setLang, toggle]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
};

export const useT = () => useLanguage().t;

// Bangla-digit converter for numbers rendered as strings
const BN = "০১২৩৪৫৬৭৮৯";
export const toBnDigits = (input) => String(input).replace(/[0-9]/g, (d) => BN[+d]);

export const formatNumber = (lang, n, opts = {}) => {
  const decimals = opts.decimals || 0;
  const withCommas = (Math.round(n * 10 ** decimals) / 10 ** decimals).toLocaleString(
    lang === "bn" ? "bn-BD" : "en-US",
    { minimumFractionDigits: decimals, maximumFractionDigits: decimals }
  );
  return lang === "bn" ? toBnDigits(withCommas) : withCommas;
};
