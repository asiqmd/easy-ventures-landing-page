import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Overline, Reveal } from "@/components/site/primitives";
import { BRANDS_STATIC } from "@/i18n/translations";
import { useT } from "@/i18n/LanguageContext";

const BrandCard = ({ brand, index, t }) => {
  const copy = t.brands.items[brand.id];
  return (
    <motion.a
      href={brand.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
      data-testid={`brand-card-${brand.id}`}
      data-cursor="hover"
      className="group relative flex flex-col overflow-hidden rounded-3xl glass transition-all duration-500 hover:-translate-y-2 hover:glow-blue"
    >
      <div
        className="relative h-56 overflow-hidden"
        style={{ backgroundColor: brand.bg }}
      >
        <img
          src={brand.image}
          alt={copy.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-7">
        <span className="text-xs uppercase tracking-[0.2em]" style={{ color: brand.accent }}>
          {copy.tag}
        </span>
        <h3 className="mt-2 font-display text-2xl font-medium tracking-tight text-slate-900">{copy.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{copy.description}</p>

        <div className="mt-6 flex items-center justify-between">
          <span
            data-testid={`brand-learn-${brand.id}`}
            className="group/btn flex items-center gap-1.5 text-sm font-medium text-slate-900"
          >
            {t.common.learnMore}
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              strokeWidth={2}
            />
          </span>
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors group-hover:border-slate-900 group-hover:text-slate-900"
            aria-hidden
          >
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </span>
        </div>
      </div>
    </motion.a>
  );
};

export default function Brands() {
  const t = useT();
  return (
    <section id="brands" className="relative bg-white py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <Overline>{t.brands.overline}</Overline>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-light leading-tight tracking-tight text-slate-900 sm:text-6xl">
              {t.brands.titleBefore}<span className="text-gradient-blue font-medium">{t.brands.titleAccent}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm text-slate-600">{t.brands.intro}</p>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {BRANDS_STATIC.map((b, i) => (
            <BrandCard key={b.id} brand={b} index={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
