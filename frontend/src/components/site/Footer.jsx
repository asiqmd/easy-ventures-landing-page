import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useLenis } from "lenis/react";
import { ArrowRight } from "lucide-react";
import { CONTACT_INFO } from "@/data/content";
import { Icon } from "@/components/site/primitives";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const COLS = [
  { title: "Company", links: [["About Us", "#mission"], ["Mission", "#mission"], ["Vision", "#mission"], ["Team", "#team"]] },
  { title: "Brands", links: [["Easy Truck", "#easy-truck"], ["Easy Brick", "#easy-brick"], ["Netro Systems", "#brands"]] },
];

export default function Footer() {
  const lenis = useLenis();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const go = (href) => {
    const el = document.querySelector(href);
    if (el && lenis) lenis.scrollTo(el, { offset: -20, duration: 1.4 });
  };

  const subscribe = async (e) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your email.");
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/newsletter`, { email });
      toast.success(data.message || "Subscribed!");
      setEmail("");
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Subscription failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-[#EDF1F7]">
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full bg-electric/8 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-8 w-8 items-center justify-center">
                <span className="absolute inset-0 rotate-45 border border-slate-300" />
                <span className="h-2 w-2 bg-electric" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-slate-900">
                Easy<span className="text-electric">Ventures</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-600">
              A diversified group shaping the future of transportation, infrastructure, and technology under one ecosystem.
            </p>
          </div>

          {/* Cols 2 & 3 */}
          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs uppercase tracking-[0.2em] text-slate-500">{col.title}</h4>
              <ul className="mt-5 space-y-3">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <button
                      onClick={() => go(href)}
                      data-testid={`footer-link-${label.replace(/\s+/g, "-").toLowerCase()}`}
                      className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Col 4 newsletter */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-slate-500">Stay in the loop</h4>
            <p className="mt-5 text-sm text-slate-600">{CONTACT_INFO.email}</p>
            <form onSubmit={subscribe} className="mt-4" data-testid="newsletter-form">
              <div className="flex items-center gap-2 rounded-full border border-slate-300 bg-white p-1.5 pl-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  data-testid="newsletter-email"
                  className="flex-1 bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  data-testid="newsletter-submit"
                  data-cursor="hover"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-electric text-white transition-all hover:bg-[#0052cc] disabled:opacity-60"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
            <div className="mt-5 flex gap-3">
              {CONTACT_INFO.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  onClick={(e) => e.preventDefault()}
                  data-testid={`footer-social-${s.label.toLowerCase()}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg glass text-slate-600 transition-all hover:bg-electric hover:text-white"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Easy Ventures. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-slate-500">
            <button className="transition-colors hover:text-slate-900" data-testid="footer-privacy">Privacy Policy</button>
            <button className="transition-colors hover:text-slate-900" data-testid="footer-terms">Terms & Conditions</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
