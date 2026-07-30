import { motion } from "framer-motion";
import { Linkedin, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { LEADERS } from "@/data/content";
import { Overline, Reveal } from "@/components/site/primitives";

export default function Leadership() {
  return (
    <section id="team" className="relative bg-navy py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Reveal className="mb-16 max-w-2xl">
          <Overline>Leadership</Overline>
          <h2 className="mt-4 font-display text-4xl font-light tracking-tighter text-white sm:text-6xl">
            Meet the people behind <span className="text-gradient-blue font-medium">Easy Ventures</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LEADERS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              data-testid={`leader-card-${i}`}
              className="group relative overflow-hidden rounded-3xl glass"
              data-cursor="hover"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1620] via-transparent to-transparent" />
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  data-testid={`leader-linkedin-${i}`}
                  className="absolute right-4 top-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full glass-strong text-white opacity-0 transition-all duration-300 hover:bg-electric group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-medium tracking-tight text-white">{p.name}</h3>
                <p className="mt-1 text-sm text-electric">{p.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{p.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <button
            onClick={() => toast("Full team directory coming soon", { description: "We're preparing 2,400+ profiles." })}
            data-testid="see-full-team-btn"
            data-cursor="hover"
            className="group flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white transition-all hover:border-electric hover:bg-electric/10"
          >
            See Full Team
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
