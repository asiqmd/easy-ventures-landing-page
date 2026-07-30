import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Send, Loader2 } from "lucide-react";
import { CONTACT_INFO } from "@/data/content";
import { Icon, Overline, Reveal } from "@/components/site/primitives";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const Field = ({ label, ...props }) => (
  <label className="block">
    <span className="mb-2 block text-xs uppercase tracking-wider text-gray-400">{label}</span>
    <input
      {...props}
      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-gray-600 transition-colors focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric"
    />
  </label>
);

const empty = { full_name: "", company: "", email: "", phone: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [loading, setLoading] = useState(false);

  const change = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.full_name || !form.email || !form.message) {
      toast.error("Please fill in your name, email and message.");
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/contact`, form);
      toast.success(data.message || "Message sent!");
      setForm(empty);
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-28 lg:py-36">
      <div className="pointer-events-none absolute right-1/4 top-0 h-96 w-96 rounded-full bg-electric/10 blur-[140px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Reveal className="mb-16 max-w-2xl">
          <Overline>Get in touch</Overline>
          <h2 className="mt-4 font-display text-4xl font-light tracking-tighter text-white sm:text-6xl">
            Let&apos;s build the <span className="text-gradient-blue font-medium">future together</span>
          </h2>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left: info */}
          <Reveal className="flex flex-col gap-8">
            <div className="space-y-6">
              {[
                { icon: "MapPin", label: "Head office", value: CONTACT_INFO.address, Cmp: MapPin },
                { icon: "Phone", label: "Phone", value: CONTACT_INFO.phone, Cmp: Phone },
                { icon: "Mail", label: "Email", value: CONTACT_INFO.email, Cmp: Mail },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-electric/10 text-electric">
                    <c.Cmp className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-gray-500">{c.label}</div>
                    <div className="mt-1 text-white">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {CONTACT_INFO.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  onClick={(e) => e.preventDefault()}
                  data-testid={`social-${s.label.toLowerCase()}`}
                  data-cursor="hover"
                  className="flex h-11 w-11 items-center justify-center rounded-xl glass text-gray-300 transition-all hover:bg-electric hover:text-white"
                >
                  <Icon name={s.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Easy Ventures location"
                src="https://maps.google.com/maps?q=Dubai&t=&z=11&ie=UTF8&iwloc=&output=embed"
                className="h-56 w-full grayscale invert-[0.92] contrast-[0.9]"
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
                <Field label="Full name *" name="full_name" value={form.full_name} onChange={change} placeholder="Jane Doe" data-testid="contact-full-name" />
                <Field label="Company" name="company" value={form.company} onChange={change} placeholder="Acme Inc." data-testid="contact-company" />
                <Field label="Email *" name="email" type="email" value={form.email} onChange={change} placeholder="jane@acme.com" data-testid="contact-email" />
                <Field label="Phone" name="phone" value={form.phone} onChange={change} placeholder="+1 000 000 0000" data-testid="contact-phone" />
              </div>
              <div className="mt-5">
                <Field label="Subject" name="subject" value={form.subject} onChange={change} placeholder="How can we help?" data-testid="contact-subject" />
              </div>
              <label className="mt-5 block">
                <span className="mb-2 block text-xs uppercase tracking-wider text-gray-400">Message *</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={change}
                  rows={5}
                  data-testid="contact-message"
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-gray-600 transition-colors focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric"
                />
              </label>
              <button
                type="submit"
                disabled={loading}
                data-testid="contact-submit"
                data-cursor="hover"
                className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-electric px-7 py-4 text-sm font-medium text-white transition-all hover:bg-[#2a80ff] hover:glow-blue disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message
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
