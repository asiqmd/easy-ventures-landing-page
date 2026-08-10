import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { ArrowRight, Truck as TruckIcon, Activity } from "lucide-react";
import { Icon, Overline, Reveal } from "@/components/site/primitives";
import { TRUCK_FEATURE_ICONS } from "@/i18n/translations";
import { useT } from "@/i18n/LanguageContext";

const TruckDashboard = ({ t }) => (
  <div className="relative overflow-hidden rounded-3xl glass-strong p-5 glow-blue">
    <div className="mb-4 flex items-center justify-between">
      <div className="flex items-center gap-2 text-sm font-medium text-slate-900">
        <TruckIcon className="h-4 w-4 text-electric" /> {t.easyTruck.dashboard.title}
      </div>
      <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" /> {t.common.live}
      </span>
    </div>

    <div className="relative h-44 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 grid-lines">
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <path d="M10,120 C120,40 220,160 340,60" fill="none" stroke="#0066FF" strokeWidth="2" strokeDasharray="4 6" opacity="0.8" />
        <path d="M20,20 C140,100 200,30 360,120" fill="none" stroke="#FF5A00" strokeWidth="2" strokeDasharray="4 6" opacity="0.7" />
      </svg>
      {[
        { l: "18%", top: "60%", c: "#0066FF" },
        { l: "52%", top: "30%", c: "#0066FF" },
        { l: "78%", top: "70%", c: "#FF5A00" },
        { l: "40%", top: "78%", c: "#0066FF" },
      ].map((p, i) => (
        <motion.span
          key={i}
          className="absolute h-3 w-3 rounded-full"
          style={{ left: p.l, top: p.top, background: p.c, boxShadow: `0 0 12px ${p.c}` }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
    </div>

    <div className="mt-4 grid grid-cols-3 gap-3">
      {t.easyTruck.dashboard.metrics.map((m) => (
        <div key={m.k} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
          <div className="text-xs text-slate-500">{m.k}</div>
          <div className="font-display text-xl text-slate-900">{m.v}</div>
        </div>
      ))}
    </div>

    <div className="mt-4 flex items-end gap-1.5 rounded-xl border border-slate-200 bg-slate-50 p-3">
      {[40, 65, 50, 80, 55, 90, 70, 60, 85].map((h, i) => (
        <motion.span
          key={i}
          className="flex-1 rounded-t bg-electric/80"
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
          style={{ height: `${h}%` }}
        />
      ))}
      <Activity className="ml-2 h-4 w-4 text-electric" />
    </div>
  </div>
);

export default function EasyTruck() {
  const lenis = useLenis();
  const t = useT();
  const go = () => {
    const el = document.querySelector("#contact");
    if (el && lenis) lenis.scrollTo(el, { offset: -20, duration: 1.4 });
  };
  return (
    <section id="easy-truck" className="relative overflow-hidden bg-white py-28 lg:py-36">
      <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-electric/10 blur-[130px]" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal>
          <Overline>{t.easyTruck.overline}</Overline>
          <h2 className="mt-4 font-display text-4xl font-light tracking-tight text-slate-900 sm:text-5xl">
            {t.easyTruck.titleBefore}<span className="text-gradient-blue font-medium">{t.easyTruck.titleAccent}</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-600">{t.easyTruck.body}</p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {t.easyTruck.features.map((f, i) => (
              <div key={f.title} className="rounded-2xl glass p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-electric/10 text-electric">
                  <Icon name={TRUCK_FEATURE_ICONS[i]} className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-medium text-slate-900">{f.title}</h3>
                <p className="mt-1 text-xs text-slate-500">{f.text}</p>
              </div>
            ))}
          </div>
          <button
            onClick={go}
            data-testid="discover-easy-truck-btn"
            data-cursor="hover"
            className="group mt-8 flex items-center gap-2 rounded-full bg-electric px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-[#0052cc] hover:glow-blue"
          >
            {t.easyTruck.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </Reveal>

        <Reveal delay={0.1}>
          <TruckDashboard t={t} />
        </Reveal>
      </div>
    </section>
  );
}
