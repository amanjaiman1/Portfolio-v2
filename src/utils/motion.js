// Shared easing — soft, editorial (Pola) feel
export const EASE = [0.16, 1, 0.3, 1];
export const EASE_SOFT = [0.65, 0, 0.35, 1];

export const fadeUp = (delay = 0, y = 40, duration = 1) => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration, delay, ease: EASE },
  },
});

export const fadeIn = (delay = 0, duration = 1) => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration, delay, ease: EASE } },
});

// Word / line reveal that rises from behind a mask
export const lineReveal = (delay = 0) => ({
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: 1.05, delay, ease: EASE },
  },
});

export const scaleReveal = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, delay, ease: EASE },
  },
});

export const slideIn = (direction = "left", delay = 0, duration = 1) => ({
  hidden: {
    x: direction === "left" ? -80 : direction === "right" ? 80 : 0,
    y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration, delay, ease: EASE },
  },
});

export const staggerContainer = (stagger = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});
