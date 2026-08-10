import { useLanguage } from "@/i18n/LanguageContext";

export default function LangSwitch({ className = "" }) {
  const { lang, setLang } = useLanguage();
  const btn = (code, label) => (
    <button
      key={code}
      onClick={() => setLang(code)}
      data-testid={`lang-switch-${code}`}
      className={`px-3 py-1.5 text-xs font-medium tracking-wide transition-colors ${
        lang === code ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"
      }`}
      aria-pressed={lang === code}
    >
      {label}
    </button>
  );
  return (
    <div
      className={`inline-flex items-center overflow-hidden rounded-full border border-slate-200 bg-white ${className}`}
      role="group"
      aria-label="Language"
    >
      {btn("bn", "বাংলা")}
      {btn("en", "EN")}
    </div>
  );
}
