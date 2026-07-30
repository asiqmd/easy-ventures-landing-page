// Shared Framer Motion variants for section reveals and micro-interactions
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// Masked line reveal (used in hero) — animate the inner line up from 100%
export const maskLine = {
  hidden: { y: "115%" },
  show: (i = 0) => ({
    y: "0%",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 + i * 0.12 },
  }),
};

export const viewport = { once: true, amount: 0.25 };
