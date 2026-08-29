import { useLenis } from "lenis/react";
import { useT, toBnDigits, useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
  const t = useT();
  const { lang } = useLanguage();
  const lenis = useLenis();

  const go = (href) => {
    const el = document.querySelector(href);
    if (el && lenis) lenis.scrollTo(el, { offset: -20, duration: 1.4 });
  };

  const year = new Date().getFullYear();
  const yearStr = lang === "bn" ? toBnDigits(year) : year;

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-[#EDF1F7]">
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full bg-electric/8 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Col 1 */}
          <div>
            <img
              src="/easy-ventures-logo.png"
              alt="Easy Ventures"
              className="h-10 w-auto"
              draggable="false"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-600">{t.footer.description}</p>
          </div>

          {/* Cols 2 & 3 */}
          {t.footer.cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs uppercase tracking-[0.2em] text-slate-500">{col.title}</h4>
              <ul className="mt-5 space-y-3">
                {col.links.map(([label, href]) => {
                  const external = href?.startsWith("http");
                  return (
                    <li key={label}>
                      {external ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-slate-600 transition-colors hover:text-electric"
                        >
                          {label}
                        </a>
                      ) : href ? (
                        <button
                          onClick={() => go(href)}
                          data-testid={`footer-link-${href.replace("#", "")}`}
                          className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                        >
                          {label}
                        </button>
                      ) : (
                        <span className="text-sm text-slate-600">{label}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {/* Col 4 contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-slate-500">{t.footer.newsletterTitle}</h4>
            <a href="mailto:easyventuresofficial@gmail.com" className="mt-5 inline-block text-sm text-slate-600 transition-colors hover:text-electric">
              {t.contact.info.email}
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-8 text-center">
          <p className="text-xs text-slate-500">© {yearStr} {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
