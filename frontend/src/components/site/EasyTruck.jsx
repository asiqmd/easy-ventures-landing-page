import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { ArrowRight, Truck as TruckIcon, Activity } from "lucide-react";
import { TRUCK_FEATURES } from "@/data/content";
import { Icon, Overline, Reveal } from "@/components/site/primitives";

const TruckDashboard = () => (
  <div className="relative overflow-hidden rounded-3xl glass-strong p-5 glow-blue">
    <div className="mb-4 flex items-center justify-between">
      <div className="flex items-center gap-2 text-sm text-white">
        <TruckIcon className="h-4 w-4 text-electric" /> Fleet Control
      </div>
      <span className="flex items-center gap-1.5 text-xs text-green-400">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" /> Live
      </span>
    </div>

    {/* Map mock */}
    <div className="relative h-44 overflow-hidden rounded-2xl border border-white/10 bg-[#0b1017] grid-lines">
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <path d="M10,120 C120,40 220,160 340,60" fill="none" stroke="#0066FF" strokeWidth="2" strokeDasharray="4 6" opacity="0.7" />
        <path d="M20,20 C140,100 200,30 360,120" fill="none" stroke="#FF5A00" strokeWidth="2" strokeDasharray="4 6" opacity="0.6" />
      </svg>
      {[
        { l: "18%", t: "60%", c: "#0066FF" },
        { l: "52%", t: "30%", c: "#0066FF" },
        { l: "78%", t: "70%", c: "#FF5A00" },
        { l: "40%", t: "78%", c: "#0066FF" },
      ].map((p, i) => (
        <motion.span
          key={i}
          className="absolute h-3 w-3 rounded-full"
          style={{ left: p.l, top: p.t, background: p.c, boxShadow: `0 0 12px ${p.c}` }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
    </div>

    {/* Metrics */}
    <div className="mt-4 grid grid-cols-3 gap-3">
      {[
        { k: "Active", v: "312" },
        { k: "On-time", v: "98%" },
        { k: "Avg speed", v: "64" },
      ].map((m) => (
        <div key={m.k} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <div className="text-xs text-gray-400">{m.k}</div>
          <div className="font-display text-xl text-white">{m.v}</div>
        </div>
      ))}
    </div>

    {/* Bars */}
    <div className="mt-4 flex items-end gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] p-3">
      {[40, 65, 50, 80, 55, 90, 70, 60, 85].map((h, i) => (
        <motion.span
          key={i}
          className="flex-1 rounded-t bg-electric/70"
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
  const go = () => {
    const el = document.querySelector("#contact");
    if (el && lenis) lenis.scrollTo(el, { offset: -20, duration: 1.4 });
  };
  return (
    <section id="easy-truck" className="relative overflow-hidden bg-ink py-28 lg:py-36">
      <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-electric/15 blur-[130px]" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal>
          <Overline>Easy Truck</Overline>
          <h2 className="mt-4 font-display text-4xl font-light tracking-tighter text-white sm:text-5xl">
            Logistics, <span className="text-gradient-blue font-medium">reimagined</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-gray-300">
            Real-time fleet intelligence, route optimization and driver management in one command center.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {TRUCK_FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl glass p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-electric/10 text-electric">
                  <Icon name={f.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-medium text-white">{f.title}</h3>
                <p className="mt-1 text-xs text-gray-400">{f.text}</p>
              </div>
            ))}
          </div>
          <button
            onClick={go}
            data-testid="discover-easy-truck-btn"
            data-cursor="hover"
            className="group mt-8 flex items-center gap-2 rounded-full bg-electric px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-[#2a80ff] hover:glow-blue"
          >
            Discover Easy Truck
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </Reveal>

        <Reveal delay={0.1}>
          <TruckDashboard />
        </Reveal>
      </div>
    </section>
  );
}
