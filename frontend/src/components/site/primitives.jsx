import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import * as Icons from "lucide-react";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import { useLanguage, toBnDigits } from "@/i18n/LanguageContext";

export const Icon = ({ name, className }) => {
  const Cmp = Icons[name] || Icons.Circle;
  return <Cmp className={className} strokeWidth={1.5} />;
};

export const Overline = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-electric font-medium ${className}`}
  >
    <span className="h-px w-6 bg-electric/60" />
    {children}
  </span>
);

export const Reveal = ({ children, className = "", delay = 0 }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={viewport}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const RevealGroup = ({ children, className = "" }) => (
  <motion.div
    variants={stagger}
    initial="hidden"
    whileInView="show"
    viewport={viewport}
    className={className}
  >
    {children}
  </motion.div>
);

export const Counter = ({ value, suffix = "", decimals = 0, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const { lang } = useLanguage();
  const locale = lang === "bn" ? "bn-BD" : "en-US";
  const formatter = (v) => {
    const s = v.toLocaleString(locale, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
    return lang === "bn" ? toBnDigits(s) : s;
  };
  return (
    <span ref={ref} className={className}>
      {inView ? (
        <CountUp end={value} duration={2.2} decimals={decimals} formattingFn={formatter} />
      ) : (
        formatter(0)
      )}
      {suffix}
    </span>
  );
};
