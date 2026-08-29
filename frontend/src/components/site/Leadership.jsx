import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Overline, Reveal } from "@/components/site/primitives";
import { LEADER_ASSETS } from "@/i18n/translations";
import { useT } from "@/i18n/LanguageContext";

export default function Leadership() {
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
    <section id="team" className="relative bg-[#EDF1F7] py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-16 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <Reveal className="max-w-2xl">
            <Overline>{t.leadership.overline}</Overline>
            <h2 className="mt-4 font-display text-4xl font-light tracking-tight text-slate-900 sm:text-6xl">
              {t.leadership.titleBefore}<span className="text-gradient-blue font-medium">{t.leadership.titleAccent}</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollCards(-1)}
                disabled={atStart}
                aria-label={t.leadership.prevLabel}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 text-slate-900 transition-colors hover:border-slate-900 hover:bg-slate-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-slate-300 disabled:hover:bg-transparent disabled:hover:text-slate-900"
              >
                <ArrowLeft className="h-5 w-5" strokeWidth={1.8} />
              </button>
              <button
                type="button"
                onClick={() => scrollCards(1)}
                disabled={atEnd}
                aria-label={t.leadership.nextLabel}
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
          aria-label={t.leadership.scrollLabel}
          className="scrollbar-none flex snap-x snap-mandatory gap-6 overflow-x-auto"
        >
          {t.leadership.leaders.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              data-testid={`leader-card-${i}`}
              className="group relative w-[82vw] shrink-0 snap-start self-stretch overflow-hidden rounded-3xl glass sm:w-[300px] lg:w-[calc((100%-4.5rem)/4)]"
              data-cursor="hover"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={LEADER_ASSETS[i]}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-medium tracking-tight text-slate-900">{p.name}</h3>
                <p className="mt-1 text-sm text-electric">{p.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
