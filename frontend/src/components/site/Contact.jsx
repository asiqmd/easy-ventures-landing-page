import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Send, Loader2 } from "lucide-react";
import { Icon, Overline, Reveal } from "@/components/site/primitives";
import { SOCIALS } from "@/i18n/translations";
import { useT } from "@/i18n/LanguageContext";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const Field = ({ label, ...props }) => (
  <label className="block">
    <span className="mb-2 block text-xs uppercase tracking-wider text-slate-500">{label}</span>
    <input
      {...props}
      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric"
    />
  </label>
);

const empty = { full_name: "", company: "", email: "", phone: "", subject: "", message: "" };

export default function Contact() {
  const t = useT();
  const [form, setForm] = useState(empty);
  const [loading, setLoading] = useState(false);

  const change = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.full_name || !form.email || !form.message) {
      toast.error(t.contact.form.requiredErr);
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success(t.contact.form.successMsg);
      setForm(empty);
    } catch {
      toast.error(t.contact.form.genericErr);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-28 lg:py-36">
      <div className="pointer-events-none absolute right-1/4 top-0 h-96 w-96 rounded-full bg-electric/8 blur-[140px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Reveal className="mb-16 max-w-2xl">
          <Overline>{t.contact.overline}</Overline>
          <h2 className="mt-4 font-display text-4xl font-light tracking-tight text-slate-900 sm:text-6xl">
            {t.contact.titleBefore}<span className="text-gradient-blue font-medium">{t.contact.titleAccent}</span>
          </h2>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left: info */}
          <Reveal className="flex flex-col gap-8">
            <div className="space-y-6">
              {[
                { label: t.contact.labels.office, value: t.contact.info.address, Cmp: MapPin },
                { label: t.contact.labels.phone, value: t.contact.info.phone, Cmp: Phone },
                { label: t.contact.labels.email, value: t.contact.info.email, Cmp: Mail },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-electric/10 text-electric">
                    <c.Cmp className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-400">{c.label}</div>
                    <div className="mt-1 text-slate-900">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  onClick={(e) => e.preventDefault()}
                  data-testid={`social-${s.label.toLowerCase()}`}
                  data-cursor="hover"
                  className="flex h-11 w-11 items-center justify-center rounded-xl glass text-slate-600 transition-all hover:bg-electric hover:text-white"
                >
                  <Icon name={s.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <iframe
                title="Easy Ventures location"
                src="https://maps.google.com/maps?q=Dubai&t=&z=11&ie=UTF8&iwloc=&output=embed"
                className="h-56 w-full grayscale-[0.25]"
                loading="lazy"
              />
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <motion.form
              onSubmit={submit}
              data-testid="contact-form"
              className="rounded-3xl glass-strong p-7 sm:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label={t.contact.form.fullName} name="full_name" value={form.full_name} onChange={change} placeholder={t.contact.form.fullNamePh} data-testid="contact-full-name" />
                <Field label={t.contact.form.company} name="company" value={form.company} onChange={change} placeholder={t.contact.form.companyPh} data-testid="contact-company" />
                <Field label={t.contact.form.email} name="email" type="email" value={form.email} onChange={change} placeholder={t.contact.form.emailPh} data-testid="contact-email" />
                <Field label={t.contact.form.phone} name="phone" value={form.phone} onChange={change} placeholder={t.contact.form.phonePh} data-testid="contact-phone" />
              </div>
              <div className="mt-5">
                <Field label={t.contact.form.subject} name="subject" value={form.subject} onChange={change} placeholder={t.contact.form.subjectPh} data-testid="contact-subject" />
              </div>
              <label className="mt-5 block">
                <span className="mb-2 block text-xs uppercase tracking-wider text-slate-500">{t.contact.form.message}</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={change}
                  rows={5}
                  data-testid="contact-message"
                  placeholder={t.contact.form.messagePh}
                  className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric"
                />
              </label>
              <button
                type="submit"
                disabled={loading}
                data-testid="contact-submit"
                data-cursor="hover"
                className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-electric px-7 py-4 text-sm font-medium text-white transition-all hover:bg-[#0052cc] hover:glow-blue disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> {t.contact.form.sending}
                  </>
                ) : (
                  <>
                    {t.contact.form.submit}
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </motion.form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
