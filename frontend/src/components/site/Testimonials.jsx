import Marquee from "react-fast-marquee";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";
import { Overline, Reveal } from "@/components/site/primitives";

const Card = ({ t }) => (
  <div
    className="mx-3 flex w-[340px] shrink-0 flex-col rounded-3xl glass p-7 sm:w-[420px]"
    data-testid={`testimonial-${t.name.replace(/\s+/g, "-").toLowerCase()}`}
  >
    <Quote className="h-8 w-8 text-electric/60" />
    <p className="mt-4 flex-1 text-base leading-relaxed text-gray-200">{`\u201C${t.quote}\u201D`}</p>
    <div className="mt-6 flex items-center gap-4">
      <img src={t.image} alt={t.name} className="h-12 w-12 rounded-full object-cover grayscale" />
      <div className="flex-1">
        <div className="font-display font-medium text-white">{t.name}</div>
        <div className="text-xs text-gray-400">{t.company}</div>
      </div>
      <div className="flex gap-0.5">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-safety text-safety" />
        ))}
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-navy py-28 lg:py-36">
      <div className="mx-auto mb-14 max-w-7xl px-4 sm:px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <Overline>Client Voices</Overline>
          <h2 className="mt-4 font-display text-4xl font-light tracking-tighter text-white sm:text-6xl">
            Trusted by industry <span className="text-gradient-blue font-medium">leaders</span>
          </h2>
        </Reveal>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy to-transparent" />
        <Marquee speed={30} pauseOnHover gradient={false}>
          {TESTIMONIALS.map((t) => (
            <Card key={t.name} t={t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
