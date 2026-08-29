import { MapPin, Phone, Mail } from "lucide-react";
import { Overline, Reveal } from "@/components/site/primitives";
import { useT } from "@/i18n/LanguageContext";

export default function Contact() {
  const t = useT();
  const contacts = [
    { label: t.contact.labels.office, value: t.contact.info.address, Cmp: MapPin },
    { label: t.contact.labels.phone, value: t.contact.info.phone, Cmp: Phone, href: "tel:+8801898923559" },
    { label: t.contact.labels.email, value: t.contact.info.email, Cmp: Mail, href: "mailto:easyventuresofficial@gmail.com" },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-28 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-electric/8 blur-[140px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <div className="flex justify-center">
            <Overline>{t.contact.overline}</Overline>
          </div>
          <h2 className="mt-4 font-display text-4xl font-light tracking-tight text-slate-900 sm:text-6xl">
            {t.contact.titleBefore}<span className="text-gradient-blue font-medium">{t.contact.titleAccent}</span>
          </h2>
        </Reveal>

        <Reveal className="mx-auto max-w-5xl">
          <div className="grid gap-4 md:grid-cols-3">
            {contacts.map((contact) => {
              const Content = contact.href ? "a" : "div";
              return (
                <Content
                  key={contact.label}
                  href={contact.href}
                  className="flex min-h-52 flex-col items-center justify-center rounded-3xl glass px-6 py-8 text-center transition-all hover:-translate-y-1 hover:border-electric/40"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-electric/10 text-electric">
                    <contact.Cmp className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span className="mt-5 text-xs uppercase tracking-wider text-slate-400">{contact.label}</span>
                  <span className="mt-2 text-sm leading-relaxed text-slate-900 sm:text-base">{contact.value}</span>
                </Content>
              );
            })}
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 shadow-[0_24px_60px_-36px_rgba(10,37,64,0.4)]">
            <iframe
              title="Easy Ventures location"
              src="https://maps.google.com/maps?q=Silicon%20Tower%20Hi%20Tech%20Park%20Rajshahi%206203%20Bangladesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-72 w-full"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
