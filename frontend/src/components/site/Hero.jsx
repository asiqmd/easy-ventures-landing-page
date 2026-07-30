import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLenis } from "lenis/react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { IMAGES, HERO_METRICS } from "@/data/content";
import { maskLine } from "@/lib/motion";
import { Counter } from "@/components/site/primitives";

const HEADLINE = [
  "Building the Future of",
  "Transportation, Infrastructure",
  "& Technology",
];

const Particles = () => {
  const dots = Array.from({ length: 20 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => {
        const size = 2 + (i % 3);
        const left = (i * 41) % 100;
        const top = (i * 57) % 100;
        const dur = 6 + (i % 7);
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-electric/40"
            style={{ width: size, height: size, left: `${left}%`, top: `${top}%` }}
            animate={{ y: [0, -28, 0], opacity: [0.1, 0.6, 0.1] }}
            transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
          />
        );
      })}
    </div>
  );
};

export default function Hero() {
  const ref = useRef(null);
  const lenis = useLenis();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  const go = (href) => {
    const el = document.querySelector(href);
    if (el && lenis) lenis.scrollTo(el, { offset: -20, duration: 1.4 });
  };

  return (
    <section id="hero" ref={ref} className="relative min-h-[100svh] w-full overflow-hidden bg-white pt-28">
      <div className="absolute inset-0 grid-lines opacity-60" />
      <div className="pointer-events-none absolute -top-24 right-0 h-[32rem] w-[32rem] rounded-full bg-electric/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-safety/10 blur-[120px]" />
      <Particles />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10 lg:pb-0 lg:pt-16">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-electric" />
            <span className="text-xs uppercase tracking-[0.3em] text-slate-500">The Easy Ventures Group</span>
          </motion.div>

          <h1 className="font-display text-4xl font-light leading-[1.03] tracking-tighter text-slate-900 sm:text-5xl lg:text-[4.4rem]">
            {HEADLINE.map((line, i) => (
              <span key={i} className="block overflow-hidden py-1">
                <motion.span custom={i} variants={maskLine} initial="hidden" animate="show" className="block">
                  {i === 2 ? <span className="text-gradient-blue font-medium">{line}</span> : line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="mt-7 max-w-lg text-base text-slate-600 sm:text-lg"
          >
            Easy Ventures unites innovative companies transforming industries through logistics,
            construction, and digital excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => go("#brands")}
              data-testid="hero-explore-btn"
              data-cursor="hover"
              className="group flex items-center gap-2 rounded-full bg-electric px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-[#0052cc] hover:glow-blue"
            >
              Explore Our Brands
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
            </button>
            <button
              onClick={() => go("#contact")}
              data-testid="hero-contact-btn"
              data-cursor="hover"
              className="rounded-full border border-slate-300 px-7 py-3.5 text-sm font-medium text-slate-900 transition-all hover:border-slate-900 hover:bg-slate-50"
            >
              Contact Us
            </button>
          </motion.div>
        </div>

        {/* Right: framed parallax image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200 shadow-[0_40px_80px_-40px_rgba(10,37,64,0.35)] sm:aspect-[5/5] lg:aspect-[4/5]">
            <motion.img
              style={{ y: imgY, scale: imgScale }}
              src={IMAGES.heroParallax}
              alt="Logistics at sunset"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-white/90 px-5 py-4 backdrop-blur-md"
            >
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-500">Live network</div>
                <div className="font-display text-lg text-slate-900">140 cities connected</div>
              </div>
              <span className="flex items-center gap-2 text-xs font-medium text-emerald-600">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" /> Online
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.25, duration: 0.8 }}
        className="relative z-10 mx-auto -mt-2 max-w-7xl px-4 pb-16 sm:px-6 lg:px-10"
      >
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {HERO_METRICS.map((m) => (
            <div key={m.label} className="rounded-2xl glass px-5 py-6" data-testid={`hero-metric-${m.label}`}>
              <div className="font-display text-3xl font-light tracking-tight text-slate-900 lg:text-4xl">
                <Counter value={m.value} suffix={m.suffix} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-wider text-slate-500">{m.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-slate-400"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </motion.div>
    </section>
  );
}
