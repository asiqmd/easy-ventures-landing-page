import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "@/data/content";

const Logo = ({ onClick }) => (
  <button onClick={onClick} data-testid="nav-logo" className="group flex items-center gap-2.5" data-cursor="hover">
    <span className="relative flex h-8 w-8 items-center justify-center">
      <span className="absolute inset-0 rotate-45 border border-slate-300 transition-colors group-hover:border-electric" />
      <span className="h-2 w-2 bg-electric transition-transform group-hover:scale-150" />
    </span>
    <span className="font-display text-lg font-semibold tracking-tight text-slate-900">
      Easy<span className="text-electric">Ventures</span>
    </span>
  </button>
);

export default function Navbar() {
  const lenis = useLenis();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el && lenis) lenis.scrollTo(el, { offset: -20, duration: 1.4 });
    else if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6 lg:px-10"
      >
        <div
          className={`mx-auto mt-3 flex max-w-7xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong" : "border border-transparent bg-white/70 backdrop-blur-md"
          }`}
        >
          <Logo onClick={() => go("#hero")} />
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                data-testid={`nav-link-${l.href.replace("#", "")}`}
                data-cursor="hover"
                className="group relative text-sm text-slate-600 transition-colors hover:text-slate-900"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-electric transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={() => go("#contact")}
              data-testid="nav-contact-btn"
              data-cursor="hover"
              className="hidden items-center gap-1.5 rounded-full bg-electric px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#0052cc] hover:glow-blue sm:flex"
            >
              Contact <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              data-testid="nav-mobile-toggle"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 lg:hidden"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white/97 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex h-full flex-col items-start justify-center gap-6 px-10">
              {NAV_LINKS.map((l, i) => (
                <motion.button
                  key={l.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i }}
                  onClick={() => go(l.href)}
                  data-testid={`mobile-link-${l.href.replace("#", "")}`}
                  className="font-display text-4xl font-light tracking-tight text-slate-900"
                >
                  {l.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
