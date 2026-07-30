import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { CULTURE_GALLERY } from "@/data/content";
import { Overline, Reveal } from "@/components/site/primitives";

export default function Culture() {
  const [active, setActive] = useState(null);

  return (
    <section id="culture" className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <Overline>Office & Culture</Overline>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-light leading-tight tracking-tighter text-white sm:text-5xl">
              We believe great companies are built by <span className="text-gradient-blue font-medium">great people</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4">
          {CULTURE_GALLERY.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onClick={() => setActive(img.src)}
              data-testid={`culture-tile-${i}`}
              data-cursor="hover"
              className={`group relative overflow-hidden rounded-2xl border border-white/10 ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/20 transition-colors group-hover:bg-ink/50" />
              <span className="absolute bottom-4 left-4 text-left text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {img.alt}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            data-testid="culture-lightbox"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-6 backdrop-blur-xl"
          >
            <button
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full glass-strong text-white"
              data-testid="culture-lightbox-close"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              src={active}
              alt=""
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-5xl rounded-2xl border border-white/15 object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
