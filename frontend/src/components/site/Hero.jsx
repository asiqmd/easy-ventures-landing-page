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
  const dots = Array.from({ length: 26 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => {
        const size = 1 + (i % 3);
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        const dur = 6 + (i % 7);
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-electric/70"
            style={{ width: size, height: size, left: `${left}%`, top: `${top}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.15, 0.8, 0.15] }}
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
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.9]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const go = (href) => {
    const el = document.querySelector(href);
    if (el && lenis) lenis.scrollTo(el, { offset: -20, duration: 1.4 });
  };

  return (
    <section id="hero" ref={ref} className="relative h-[100svh] min-h-[720px] w-full overflow-hidden bg-ink grain">
      {/* Parallax image */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={IMAGES.heroParallax} alt="" className="h-full w-full object-cover" />
      </motion.div>
      <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-ink" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/70" />
      <div className="absolute inset-0 grid-lines opacity-40" />
      <Particles />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-electric" />
          <span className="text-xs uppercase tracking-[0.3em] text-gray-300">The Easy Ventures Group</span>
        </motion.div>

        <h1 className="font-display text-4xl font-light leading-[1.02] tracking-tighter text-white sm:text-6xl lg:text-[5.5rem]">
          {HEADLINE.map((line, i) => (
            <span key={i} className="block overflow-hidden py-1">
              <motion.span
                custom={i}
                variants={maskLine}
                initial="hidden"
                animate="show"
                className="block"
              >
                {i === 2 ? (
                  <span className="text-gradient-blue font-medium">{line}</span>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-8 max-w-xl text-base text-gray-300 sm:text-lg"
        >
          Easy Ventures unites innovative companies transforming industries through logistics,
          construction, and digital excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => go("#brands")}
            data-testid="hero-explore-btn"
            data-cursor="hover"
            className="group flex items-center gap-2 rounded-full bg-electric px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-[#2a80ff] hover:glow-blue"
          >
            Explore Our Brands
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
          </button>
          <button
            onClick={() => go("#contact")}
            data-testid="hero-contact-btn"
            data-cursor="hover"
            className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white transition-all hover:border-white/60 hover:bg-white/5"
          >
            Contact Us
          </button>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.8 }}
          className="mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 md:grid-cols-4"
        >
          {HERO_METRICS.map((m) => (
            <div key={m.label} className="glass px-5 py-6" data-testid={`hero-metric-${m.label}`}>
              <div className="font-display text-3xl font-light tracking-tight text-white lg:text-4xl">
                <Counter value={m.value} suffix={m.suffix} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-wider text-gray-400">{m.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-gray-400"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </motion.div>
    </section>
  );
}
