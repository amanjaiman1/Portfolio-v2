import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE } from "../utils/motion";

const words = ["Design", "Develop", "Delight", "Aman Jaiman"];

const Preloader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  // count 0 -> 100
  useEffect(() => {
    let current = 0;
    const tick = () => {
      const step = Math.max(1, Math.round((100 - current) / 12));
      current = Math.min(100, current + step);
      setCount(current);
      if (current < 100) {
        setTimeout(tick, 90);
      } else {
        setTimeout(() => setDone(true), 450);
      }
    };
    const id = setTimeout(tick, 250);
    return () => clearTimeout(id);
  }, []);

  // rotate words
  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % words.length);
    }, 360);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-ink-900 px-5 sm:flex-row sm:items-end sm:justify-between sm:px-10 sm:pb-10 lg:px-16"
          exit={{ y: "-100%" }}
          transition={{ duration: 1.05, ease: EASE }}
        >
          {/* Mobile: centered layout. Desktop: bottom-aligned */}
          
          {/* Word rotation */}
          <div className="flex items-center justify-center sm:items-end sm:justify-start">
            <span className="font-display text-[12vw] font-extrabold leading-none tracking-tighter text-cream-100 sm:text-[7vw]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 24, rotateX: -60 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -24, rotateX: 60 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="inline-block"
                >
                  {words[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>

          {/* Counter */}
          <div className="mt-6 flex flex-col items-center sm:mt-0 sm:items-end">
            <motion.span
              key={count}
              initial={{ opacity: 0.6, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.15, ease: EASE }}
              className="tabular font-display text-[22vw] font-extrabold leading-none tracking-tighter text-iridescent sm:text-[9vw]"
            >
              {count}
            </motion.span>
            <span className="mt-2 font-sans text-[10px] uppercase tracking-[0.4em] text-cream-300 sm:mt-1 sm:text-[11px]">
              Loading
            </span>
          </div>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-iris-lilac via-iris-blush to-iris-sky sm:h-[2px]"
            initial={{ width: "0%" }}
            animate={{ width: `${count}%` }}
            transition={{ ease: "linear" }}
          />

          {/* Mobile decorative circle */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:hidden">
            <motion.div
              className="h-[45vw] w-[45vw] rounded-full border border-cream-100/5"
              animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
