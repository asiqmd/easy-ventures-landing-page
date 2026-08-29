import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Overline, Reveal } from "@/components/site/primitives";
import { CULTURE_TILES } from "@/i18n/translations";
import { useT } from "@/i18n/LanguageContext";

export default function Culture() {
  const [active, setActive] = useState(null);
  const t = useT();

  return (
    <section id="culture" className="relative bg-white py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <Overline>{t.culture.overline}</Overline>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-light leading-tight tracking-tight text-slate-900 sm:text-5xl">
              {t.culture.titleBefore}<span className="text-gradient-blue font-medium">{t.culture.titleAccent}</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid auto-rows-[190px] grid-flow-dense grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-4">
          {CULTURE_TILES.map((img, i) => (
            <motion.button
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onClick={() => setActive(img.src)}
              data-testid={`culture-tile-${i}`}
              data-cursor="hover"
              className={`group relative overflow-hidden rounded-2xl border border-slate-200 ${img.span}`}
            >
              <img
                src={img.src}
                alt={t.culture.alts[i] || ""}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ objectPosition: img.position || "center" }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-900/0 transition-colors group-hover:bg-slate-900/40" />
              <span className="absolute bottom-4 left-4 text-left text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {t.culture.alts[i]}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            data-testid="culture-lightbox"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 p-6 backdrop-blur-md"
          >
            <button
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg"
              data-testid="culture-lightbox-close"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              src={active}
              alt=""
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-5xl rounded-2xl border border-white/15 object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
