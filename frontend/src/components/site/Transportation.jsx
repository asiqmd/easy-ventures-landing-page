import { motion } from "framer-motion";
import { IMAGES } from "@/data/content";
import { Icon, Overline, Reveal, Counter } from "@/components/site/primitives";
import { TRANSPORT_FEATURE_ICONS } from "@/i18n/translations";
import { useT } from "@/i18n/LanguageContext";

export default function Transportation() {
  const t = useT();
  return (
    <section id="transportation" className="relative overflow-hidden bg-[#EDF1F7] py-28 lg:py-36">
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-electric/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Reveal className="mb-16 max-w-3xl">
          <Overline>{t.transport.overline}</Overline>
          <h2 className="mt-4 font-display text-4xl font-light leading-tight tracking-tight text-slate-900 sm:text-6xl">
            {t.transport.titleBefore}<span className="text-gradient-blue font-medium">{t.transport.titleAccent}</span>
          </h2>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Sticky visual */}
          <div className="lg:sticky lg:top-28">
            <div className="relative h-[480px] overflow-hidden rounded-3xl border border-slate-200 shadow-[0_30px_60px_-30px_rgba(10,37,64,0.3)] sm:h-[560px] lg:h-[720px]">
              <img src={IMAGES.truck} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl bg-white/90 px-5 py-4 backdrop-blur-md">
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500">{t.common.liveNetwork}</div>
                  <div className="font-display text-lg text-slate-900">{t.common.citiesConnectedShort}</div>
                </div>
                <span className="flex items-center gap-2 text-xs font-medium text-emerald-600">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" /> {t.common.online}
                </span>
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="space-y-4">
            {t.transport.features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                data-testid={`transport-feature-${i}`}
                className="group flex items-start gap-5 rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:border-electric/40"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-electric/10 text-electric transition-transform group-hover:scale-110">
                  <Icon name={TRANSPORT_FEATURE_ICONS[i]} className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-medium tracking-tight text-slate-900">{f.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{f.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {t.transport.stats.map((s) => (
            <div key={s.label} className="rounded-3xl glass px-6 py-10 text-center" data-testid={`transport-stat-${s.label}`}>
              <div className="font-display text-4xl font-light tracking-tight text-slate-900 lg:text-5xl">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-wider text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
