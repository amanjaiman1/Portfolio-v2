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
          className="fixed inset-0 z-[10000] flex items-end justify-between bg-ink-900 px-6 pb-10 sm:px-10 lg:px-16"
          exit={{ y: "-100%" }}
          transition={{ duration: 1.05, ease: EASE }}
        >
          <div className="flex items-end gap-3">
            <span className="font-display text-[14vw] font-extrabold leading-none tracking-tighter text-cream-100 sm:text-[7vw]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.32, ease: EASE }}
                  className="inline-block"
                >
                  {words[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>

          <div className="flex flex-col items-end">
            <span className="tabular font-display text-[18vw] font-extrabold leading-none tracking-tighter text-iridescent sm:text-[9vw]">
              {count}
            </span>
            <span className="mt-1 font-sans text-[11px] uppercase tracking-[0.4em] text-cream-300">
              Loading
            </span>
          </div>

          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-iris-lilac via-iris-blush to-iris-sky"
            initial={{ width: "0%" }}
            animate={{ width: `${count}%` }}
            transition={{ ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
