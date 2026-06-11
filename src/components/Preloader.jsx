import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE } from "../utils/motion";

/**
 * Cinematic split-curtain preloader.
 * Two halves slide apart to reveal the site, with the name
 * fading in at the center during the load.
 */
const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  // Simulate loading progress
  useEffect(() => {
    let current = 0;
    const tick = () => {
      const remaining = 100 - current;
      const step = Math.max(1, Math.round(remaining / 8));
      current = Math.min(100, current + step);
      setProgress(current);
      if (current < 100) {
        setTimeout(tick, 80);
      } else {
        setTimeout(() => setDone(true), 600);
      }
    };
    const id = setTimeout(tick, 200);
    return () => clearTimeout(id);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          {/* Top curtain half */}
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-ink-900"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: EASE }}
          />

          {/* Bottom curtain half */}
          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-ink-900"
            exit={{ y: "100%" }}
            transition={{ duration: 0.9, ease: EASE }}
          />

          {/* Center content */}
          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6">
            {/* Name reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="text-center"
            >
              <h1 className="font-display text-[8vw] font-extrabold leading-none tracking-tighter text-cream-100 sm:text-[4vw]">
                Aman Jaiman
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: EASE }}
                className="mt-3 font-sans text-[12px] uppercase tracking-[0.3em] text-cream-300 sm:text-[13px]"
              >
                Creative Developer
              </motion.p>
            </motion.div>

            {/* Minimal progress indicator */}
            <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 sm:bottom-16">
              {/* Thin progress line */}
              <div className="h-[1px] w-[120px] overflow-hidden bg-cream-100/10 sm:w-[160px]">
                <motion.div
                  className="h-full bg-gradient-to-r from-iris-lilac to-iris-blush"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear", duration: 0.1 }}
                />
              </div>
              <span className="tabular font-sans text-[11px] tracking-widest text-cream-300/60">
                {progress}%
              </span>
            </div>
          </div>

          {/* Subtle corner accents */}
          <motion.div
            className="pointer-events-none absolute left-6 top-6 h-[1px] bg-cream-100/20 sm:left-10 sm:top-10"
            initial={{ width: 0 }}
            animate={{ width: 40 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          />
          <motion.div
            className="pointer-events-none absolute left-6 top-6 w-[1px] bg-cream-100/20 sm:left-10 sm:top-10"
            initial={{ height: 0 }}
            animate={{ height: 40 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          />
          <motion.div
            className="pointer-events-none absolute bottom-6 right-6 h-[1px] bg-cream-100/20 sm:bottom-10 sm:right-10"
            initial={{ width: 0 }}
            animate={{ width: 40 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          />
          <motion.div
            className="pointer-events-none absolute bottom-6 right-6 w-[1px] bg-cream-100/20 sm:bottom-10 sm:right-10"
            initial={{ height: 0 }}
            animate={{ height: 40 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
