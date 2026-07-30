import { motion } from "framer-motion";
import { IMAGES, TRANSPORT_FEATURES, TRANSPORT_STATS } from "@/data/content";
import { Icon, Overline, Reveal, Counter } from "@/components/site/primitives";

export default function Transportation() {
  return (
    <section id="transportation" className="relative overflow-hidden bg-navy py-28 lg:py-36">
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-electric/20 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Reveal className="mb-16 max-w-3xl">
          <Overline>Shaping Transportation</Overline>
          <h2 className="mt-4 font-display text-4xl font-light leading-tight tracking-tighter text-white sm:text-6xl">
            How we move the world <span className="text-gradient-blue font-medium">forward</span>
          </h2>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Sticky visual + timeline */}
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <img src={IMAGES.truck} alt="Logistics network" className="h-80 w-full object-cover sm:h-[420px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl glass-strong px-5 py-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-gray-400">Live network</div>
                  <div className="font-display text-lg text-white">140 cities connected</div>
                </div>
                <span className="flex items-center gap-2 text-xs text-green-400">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" /> Online
                </span>
              </div>
            </div>

            <div className="mt-8 space-y-6 border-l border-white/10 pl-6">
              {["2007 — Founded as a regional freight operator", "2015 — Digital tracking platform launched", "2021 — AI dispatch & electrified fleet", "2025 — 140 cities, one connected network"].map(
                (t, i) => (
                  <div key={i} className="relative">
                    <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-electric ring-4 ring-navy" />
                    <p className="text-sm text-gray-300">{t}</p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Feature cards */}
          <div className="space-y-4">
            {TRANSPORT_FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                data-testid={`transport-feature-${i}`}
                className="group flex items-start gap-5 rounded-2xl glass p-6 transition-all hover:border-electric/40 hover:bg-white/[0.06]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-electric/10 text-electric transition-transform group-hover:scale-110">
                  <Icon name={f.icon} className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-medium tracking-tight text-white">{f.title}</h3>
                  <p className="mt-1 text-sm text-gray-400">{f.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 lg:grid-cols-4">
          {TRANSPORT_STATS.map((s) => (
            <div key={s.label} className="glass px-6 py-10 text-center" data-testid={`transport-stat-${s.label}`}>
              <div className="font-display text-4xl font-light tracking-tight text-white lg:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-wider text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
