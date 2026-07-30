import Marquee from "react-fast-marquee";

const WORDS = ["Logistics", "Infrastructure", "Technology", "Innovation", "Reliability", "Growth"];

export default function EditorialMarquee() {
  return (
    <section className="relative border-y border-slate-200 bg-[#EDF1F7] py-8" aria-hidden data-testid="editorial-marquee">
      <Marquee speed={40} gradient={false} autoFill>
        {WORDS.map((w, i) => (
          <span key={i} className="mx-8 flex items-center gap-8">
            <span className="font-display text-5xl font-light tracking-tighter text-slate-800/80 sm:text-7xl">
              {w}
            </span>
            <span className="h-2.5 w-2.5 rotate-45 bg-electric" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
