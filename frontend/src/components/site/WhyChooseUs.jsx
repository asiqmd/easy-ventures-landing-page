import { motion } from "framer-motion";
import { Icon, Overline, Reveal, Counter } from "@/components/site/primitives";
import { WHY_ICONS } from "@/i18n/translations";
import { useT } from "@/i18n/LanguageContext";

export default function WhyChooseUs() {
  const t = useT();
  return (
    <section className="relative bg-white py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Reveal className="mb-16 max-w-2xl">
          <Overline>{t.why.overline}</Overline>
          <h2 className="mt-4 font-display text-4xl font-light tracking-tight text-slate-900 sm:text-6xl">
            {t.why.titleBefore}<span className="text-gradient-blue font-medium">{t.why.titleAccent}</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              data-testid={`why-card-${i}`}
              className="group relative overflow-hidden rounded-3xl glass p-8 transition-all hover:-translate-y-2 hover:glow-blue"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-electric/10 text-electric transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                <Icon name={WHY_ICONS[i]} className="h-7 w-7" />
              </div>
              <div className="font-display text-4xl font-light tracking-tight text-slate-900">
                <Counter value={c.value} suffix={c.suffix} />
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-slate-400">{c.metric}</div>
              <h3 className="mt-5 font-display text-lg font-medium tracking-tight text-slate-900">{c.title}</h3>
              <div className="mt-4 h-px w-full bg-slate-200">
                <div className="h-full w-0 bg-electric transition-all duration-700 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
