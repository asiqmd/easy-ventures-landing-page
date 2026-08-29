import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Overline, Reveal } from "@/components/site/primitives";
import { BRANDS_STATIC } from "@/i18n/translations";
import { useT } from "@/i18n/LanguageContext";

const BrandCard = ({ brand, index, t }) => {
  const copy = t.brands.items[brand.id];
  const external = /^https?:\/\//.test(brand.url);
  const Card = brand.url ? motion.a : motion.article;
  return (
    <Card
      href={brand.url}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
      data-testid={`brand-card-${brand.id}`}
      data-cursor={brand.url ? "hover" : undefined}
      className={`group relative flex w-[85vw] shrink-0 snap-start self-stretch flex-col overflow-hidden rounded-3xl glass transition-all duration-500 sm:w-[380px] lg:w-[calc((100%-3rem)/3)] ${brand.url ? "hover:-translate-y-2 hover:glow-blue" : ""}`}
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

        {brand.url ? (
          <div className="mt-6 flex h-8 items-center justify-between">
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
        ) : (
          <div className="mt-6 h-8 shrink-0" aria-hidden />
        )}
      </div>
    </Card>
  );
};

export default function Brands() {
  const t = useT();
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateArrowState = () => {
    const track = trackRef.current;
    if (!track) return;
    setAtStart(track.scrollLeft <= 4);
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 4);
  };

  const scrollCards = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.firstElementChild?.getBoundingClientRect().width || track.clientWidth;
    track.scrollBy({ left: direction * (cardWidth + 24), behavior: "smooth" });
  };

  return (
    <section id="brands" className="relative bg-white py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-16 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <Overline>{t.brands.overline}</Overline>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-light leading-tight tracking-tight text-slate-900 sm:text-6xl">
              {t.brands.titleBefore}<span className="text-gradient-blue font-medium">{t.brands.titleAccent}</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollCards(-1)}
                disabled={atStart}
                aria-label={t.brands.prevLabel}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 text-slate-900 transition-colors hover:border-slate-900 hover:bg-slate-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-slate-300 disabled:hover:bg-transparent disabled:hover:text-slate-900"
              >
                <ArrowLeft className="h-5 w-5" strokeWidth={1.8} />
              </button>
              <button
                type="button"
                onClick={() => scrollCards(1)}
                disabled={atEnd}
                aria-label={t.brands.nextLabel}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-900 bg-slate-900 text-white transition-colors hover:bg-electric disabled:cursor-not-allowed disabled:border-slate-300 disabled:bg-transparent disabled:text-slate-900 disabled:opacity-30"
              >
                <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
              </button>
            </div>
          </Reveal>
        </div>

        <div
          ref={trackRef}
          onScroll={updateArrowState}
          className="scrollbar-none flex snap-x snap-mandatory gap-6 overflow-x-auto"
          aria-label={t.brands.scrollLabel}
        >
          {BRANDS_STATIC.map((b, i) => (
            <BrandCard key={b.id} brand={b} index={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
