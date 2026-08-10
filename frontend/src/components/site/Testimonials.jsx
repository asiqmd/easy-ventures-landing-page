import Marquee from "react-fast-marquee";
import { Star, Quote } from "lucide-react";
import { Overline, Reveal } from "@/components/site/primitives";
import { TESTIMONIAL_IMAGES } from "@/i18n/translations";
import { useT } from "@/i18n/LanguageContext";

const Card = ({ t, item, image }) => (
  <div
    className="mx-3 flex w-[340px] shrink-0 flex-col rounded-3xl glass p-7 sm:w-[420px]"
    data-testid={`testimonial-${item.name.replace(/\s+/g, "-").toLowerCase()}`}
  >
    <Quote className="h-8 w-8 text-electric/50" />
    <p className="mt-4 flex-1 text-base leading-relaxed text-slate-700">
      {`\u201C${item.quote}\u201D`}
    </p>
    <div className="mt-6 flex items-center gap-4">
      <img src={image} alt={item.name} className="h-12 w-12 rounded-full object-cover grayscale" />
      <div className="flex-1">
        <div className="font-display font-medium text-slate-900">{item.name}</div>
        <div className="text-xs text-slate-500">{item.company}</div>
      </div>
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-safety text-safety" />
        ))}
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  const t = useT();
  return (
    <section className="relative overflow-hidden bg-[#EDF1F7] py-28 lg:py-36">
      <div className="mx-auto mb-14 max-w-7xl px-4 sm:px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <Overline>{t.testimonials.overline}</Overline>
          <h2 className="mt-4 font-display text-4xl font-light tracking-tight text-slate-900 sm:text-6xl">
            {t.testimonials.titleBefore}<span className="text-gradient-blue font-medium">{t.testimonials.titleAccent}</span>
          </h2>
        </Reveal>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#EDF1F7] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#EDF1F7] to-transparent" />
        <Marquee speed={30} pauseOnHover gradient={false}>
          {t.testimonials.items.map((it, i) => (
            <Card key={it.name} t={t} item={it} image={TESTIMONIAL_IMAGES[i % TESTIMONIAL_IMAGES.length]} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
