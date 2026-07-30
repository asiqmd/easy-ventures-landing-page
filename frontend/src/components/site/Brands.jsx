import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { ArrowUpRight, Plus } from "lucide-react";
import { BRANDS } from "@/data/content";
import { Icon, Overline, Reveal } from "@/components/site/primitives";

const TARGETS = {
  "easy-truck": "#easy-truck",
  "easy-brick": "#easy-brick",
  "netro-systems": "#transportation",
};

const BrandCard = ({ brand, index }) => {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();
  const go = (href) => {
    const el = document.querySelector(href);
    if (el && lenis) lenis.scrollTo(el, { offset: -20, duration: 1.4 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
      onClick={() => setOpen((v) => !v)}
      data-testid={`brand-card-${brand.id}`}
      data-cursor="hover"
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl glass transition-all duration-500 hover:border-white/25 hover:-translate-y-2"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={brand.image}
          alt={brand.name}
          className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
        <div
          className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl glass-strong"
          style={{ boxShadow: `0 0 30px ${brand.accent}33` }}
        >
          <Icon name={brand.icon} className="h-5 w-5" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <span className="text-xs uppercase tracking-[0.2em]" style={{ color: brand.accent }}>
          {brand.tag}
        </span>
        <h3 className="mt-2 font-display text-2xl font-medium tracking-tight text-white">{brand.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-400">{brand.description}</p>

        <AnimatePresence initial={false}>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 flex flex-col gap-2 overflow-hidden"
            >
              {brand.points.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="h-1.5 w-1.5" style={{ background: brand.accent }} />
                  {p}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <div className="mt-auto flex items-center justify-between pt-6">
          <button
            onClick={(e) => {
              e.stopPropagation();
              go(TARGETS[brand.id]);
            }}
            data-testid={`brand-learn-${brand.id}`}
            className="group/btn flex items-center gap-1.5 text-sm font-medium text-white"
          >
            Learn More
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-gray-400 transition-transform duration-300"
            style={{ transform: open ? "rotate(45deg)" : "none" }}
          >
            <Plus className="h-4 w-4" />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default function Brands() {
  return (
    <section id="brands" className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <Overline>Our Portfolio</Overline>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-light leading-tight tracking-tighter text-white sm:text-6xl">
              Brands Powering <span className="text-gradient-blue font-medium">Tomorrow</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm text-gray-400">
              Three specialised companies, one shared standard of excellence. Tap a card to explore what each brand delivers.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {BRANDS.map((b, i) => (
            <BrandCard key={b.id} brand={b} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
