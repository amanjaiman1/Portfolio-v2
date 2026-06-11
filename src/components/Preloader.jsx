import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE } from "../utils/motion";

/**
 * Minimal cinematic preloader.
 * Fades out cleanly — no sliding/translating off-screen which can cause
 * horizontal overflow on mobile browsers.
 */
const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

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
        setTimeout(() => setDone(true), 500);
      }
    };
    const id = setTimeout(tick, 200);
    return () => clearTimeout(id);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center overflow-hidden bg-ink-900"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="px-4 text-center"
          >
            <h1 className="font-display text-[28px] font-extrabold leading-none tracking-tighter text-cream-100 sm:text-[42px]">
              Aman Jaiman
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
              className="mt-3 font-sans text-[11px] uppercase tracking-[0.2em] text-cream-300 sm:text-[12px] sm:tracking-[0.3em]"
            >
              Creative Developer
            </motion.p>
          </motion.div>

          {/* Progress bar — fixed width, no overflow risk */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3, ease: EASE }}
            className="absolute bottom-10 flex flex-col items-center gap-3 sm:bottom-14"
          >
            <div className="h-[1px] w-[100px] overflow-hidden rounded-full bg-cream-100/10 sm:w-[140px]">
              <motion.div
                className="h-full bg-gradient-to-r from-iris-lilac to-iris-blush"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="tabular font-sans text-[10px] tracking-widest text-cream-300/50">
              {progress}%
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
