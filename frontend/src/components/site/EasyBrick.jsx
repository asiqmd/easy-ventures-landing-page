import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { ArrowRight, HardHat, TrendingUp } from "lucide-react";
import { BRICK_FEATURES, IMAGES } from "@/data/content";
import { Icon, Overline, Reveal } from "@/components/site/primitives";

const BrickDashboard = () => (
  <div className="relative overflow-hidden rounded-3xl glass-strong p-5 glow-orange">
    <div className="mb-4 flex items-center justify-between">
      <div className="flex items-center gap-2 text-sm font-medium text-slate-900">
        <HardHat className="h-4 w-4 text-safety" /> Project Tracker
      </div>
      <span className="text-xs text-slate-500">Q3 · 14 active sites</span>
    </div>

    <div className="relative mb-4 h-32 overflow-hidden rounded-2xl border border-slate-200">
      <img src={IMAGES.bridge} alt="" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
      <div className="absolute bottom-3 left-3 rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-slate-900 shadow">
        Harbour Bridge · 82% complete
      </div>
    </div>

    {/* Progress rows */}
    <div className="space-y-3">
      {[
        { k: "Materials delivered", v: 92, c: "#FF5A00" },
        { k: "Site readiness", v: 74, c: "#0066FF" },
        { k: "Budget utilized", v: 61, c: "#FF5A00" },
      ].map((r) => (
        <div key={r.k}>
          <div className="mb-1.5 flex justify-between text-xs text-slate-600">
            <span>{r.k}</span>
            <span className="font-medium text-slate-900">{r.v}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-200">
            <motion.div
              className="h-full rounded-full"
              style={{ background: r.c }}
              initial={{ width: 0 }}
              whileInView={{ width: `${r.v}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>
      ))}
    </div>

    <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3">
      <div>
        <div className="text-xs text-slate-500">Cost saved this quarter</div>
        <div className="font-display text-xl text-slate-900">$2.4M</div>
      </div>
      <span className="flex items-center gap-1 text-sm font-medium text-emerald-600">
        <TrendingUp className="h-4 w-4" /> +18%
      </span>
    </div>
  </div>
);

export default function EasyBrick() {
  const lenis = useLenis();
  const go = () => {
    const el = document.querySelector("#contact");
    if (el && lenis) lenis.scrollTo(el, { offset: -20, duration: 1.4 });
  };
  return (
    <section id="easy-brick" className="relative overflow-hidden bg-[#EDF1F7] py-28 lg:py-36">
      <div className="pointer-events-none absolute left-0 bottom-10 h-96 w-96 rounded-full bg-safety/10 blur-[130px]" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal className="order-2 lg:order-1">
          <BrickDashboard />
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <Overline className="!text-safety">Easy Brick</Overline>
          <h2 className="mt-4 font-display text-4xl font-light tracking-tighter text-slate-900 sm:text-5xl">
            Infrastructure, <span className="font-medium text-safety">engineered</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-600">
            Intelligent material management and project tracking that keep construction sites on time and on budget.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {BRICK_FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl glass p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-safety/10 text-safety">
                  <Icon name={f.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-medium text-slate-900">{f.title}</h3>
                <p className="mt-1 text-xs text-slate-500">{f.text}</p>
              </div>
            ))}
          </div>
          <button
            onClick={go}
            data-testid="discover-easy-brick-btn"
            data-cursor="hover"
            className="group mt-8 flex items-center gap-2 rounded-full bg-safety px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-[#e65100] hover:glow-orange"
          >
            Discover Easy Brick
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
