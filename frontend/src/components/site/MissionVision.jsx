import { motion } from "framer-motion";
import { Target, Telescope } from "lucide-react";
import { Overline, Reveal } from "@/components/site/primitives";

const Panel = ({ overline, title, text, icon: IconCmp, mesh, testid }) => (
  <Reveal className="relative">
    <div className="relative h-full overflow-hidden rounded-3xl glass p-10 lg:p-14" data-testid={testid}>
      {mesh && (
        <>
          <motion.div
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-electric/30 blur-[100px]"
            animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute -bottom-16 left-10 h-56 w-56 rounded-full bg-safety/25 blur-[100px]"
            animate={{ x: [0, -20, 0], y: [0, -25, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}
      <div className="relative">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-electric">
          <IconCmp className="h-7 w-7" strokeWidth={1.5} />
        </div>
        <span className="mt-8 block text-xs uppercase tracking-[0.28em] text-electric">{overline}</span>
        <h3 className="mt-4 font-display text-3xl font-light tracking-tighter text-white sm:text-4xl">{title}</h3>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-gray-300">{text}</p>
      </div>
    </div>
  </Reveal>
);

export default function MissionVision() {
  return (
    <section id="mission" className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Reveal className="mb-14 text-center">
          <Overline className="justify-center">Purpose</Overline>
          <h2 className="mt-4 font-display text-4xl font-light tracking-tighter text-white sm:text-6xl">
            Driven by mission. <span className="text-gradient-blue font-medium">Guided by vision.</span>
          </h2>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-2">
          <Panel
            testid="mission-panel"
            overline="Our Mission"
            title="Simplify industries through innovation"
            text="Our mission is to simplify industries through innovation, efficiency, and technology — removing friction wherever things are built, moved, or connected."
            icon={Target}
            mesh
          />
          <Panel
            testid="vision-panel"
            overline="Our Vision"
            title="The ecosystem powering the future"
            text="To become the leading ecosystem powering the future of transportation, construction, and digital transformation across the regions we serve."
            icon={Telescope}
          />
        </div>
      </div>
    </section>
  );
}
