import { motion } from "framer-motion";
import { Target, Telescope } from "lucide-react";
import { Overline, Reveal } from "@/components/site/primitives";
import { useT } from "@/i18n/LanguageContext";

const Panel = ({ overline, title, text, icon: IconCmp, mesh, testid }) => (
  <Reveal className="relative">
    <div className="relative h-full overflow-hidden rounded-3xl glass p-10 lg:p-14" data-testid={testid}>
      {mesh && (
        <>
          <motion.div
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-electric/15 blur-[100px]"
            animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute -bottom-16 left-10 h-56 w-56 rounded-full bg-safety/12 blur-[100px]"
            animate={{ x: [0, -20, 0], y: [0, -25, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}
      <div className="relative">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-electric/10 text-electric">
          <IconCmp className="h-7 w-7" strokeWidth={1.5} />
        </div>
        <span className="mt-8 block text-xs uppercase tracking-[0.28em] text-electric">{overline}</span>
        <h3 className="mt-4 font-display text-3xl font-light tracking-tight text-slate-900 sm:text-4xl">{title}</h3>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-600">{text}</p>
      </div>
    </div>
  </Reveal>
);

export default function MissionVision() {
  const t = useT();
  return (
    <section id="mission" className="relative bg-white py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Reveal className="mb-14 text-center">
          <Overline className="justify-center">{t.mission.overline}</Overline>
          <h2 className="mt-4 font-display text-4xl font-light tracking-tight text-slate-900 sm:text-6xl">
            {t.mission.titleBefore}<span className="text-gradient-blue font-medium">{t.mission.titleAccent}</span>
          </h2>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-2">
          <Panel
            testid="mission-panel"
            overline={t.mission.mission.overline}
            title={t.mission.mission.title}
            text={t.mission.mission.text}
            icon={Target}
            mesh
          />
          <Panel
            testid="vision-panel"
            overline={t.mission.vision.overline}
            title={t.mission.vision.title}
            text={t.mission.vision.text}
            icon={Telescope}
          />
        </div>
      </div>
    </section>
  );
}
