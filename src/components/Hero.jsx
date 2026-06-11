import { lazy, Suspense, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { profile, blobPresets } from "../constants";
import { useLenis, scrollToId } from "./SmoothScroll";
import { EASE } from "../utils/motion";

// Defer the three.js bundle so it loads after first paint (CSS blob shows meanwhile)
const BlobCanvas = lazy(() => import("./canvas/Blob"));

// A single line that rises from behind a mask — self-contained timing.
const Line = ({ children, delay = 0, className = "" }) => (
  <span className="reveal-mask">
    <motion.span
      initial={{ y: "110%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.05, delay, ease: EASE }}
      className={`block ${className}`}
    >
      {children}
    </motion.span>
  </span>
);

const Hero = () => {
  const lenis = useLenis();
  const [active, setActive] = useState(0);
  const preset = blobPresets[active];

  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden"
    >
      {/* soft background spotlight */}
      <div className="spotlight pointer-events-none absolute inset-0" />

      {/* CSS fallback blob (sits behind the canvas) */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-colors duration-700"
        style={{
          background: `radial-gradient(circle at 35% 35%, ${preset.colorA}, ${preset.colorB} 60%, transparent 75%)`,
          opacity: 0.5,
        }}
      />

      {/* Interactive 3D blob */}
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <BlobCanvas preset={preset} />
        </Suspense>
      </div>

      {/* Top labels */}
      <div className="pointer-events-none absolute inset-x-0 top-[80px] z-10 mx-auto flex max-w-[1400px] items-start justify-between px-5 sm:top-[88px] sm:px-10 lg:px-16">
        <div className={styles.eyebrow}>
          <Line delay={1.4}>Creative</Line>
          <Line delay={1.46}>Developer</Line>
        </div>
        <div className={`${styles.eyebrow} text-right`}>
          <Line delay={1.5}>{profile.location} &mdash; Remote</Line>
          <Line delay={1.56}>{profile.available}</Line>
        </div>
      </div>

      {/* Headline */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[170px] z-10 mx-auto max-w-[1400px] px-5 xs:bottom-[155px] sm:bottom-[112px] sm:px-10 lg:px-16">
        <h1 className={styles.display}>
          <Line delay={1.5}>Aman</Line>
          <span className="flex flex-wrap items-end gap-x-6">
            <Line delay={1.62}>
              <span className="text-iridescent">Jaiman</span>
            </Line>
            <Line
              delay={1.78}
              className="mb-2 hidden font-serif-soft text-[18px] font-light italic leading-tight text-cream-200 sm:block lg:text-[22px]"
            >
              — software, shaped like art.
            </Line>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.95, duration: 1, ease: EASE }}
          className="mt-6 max-w-xl font-sans text-[15px] leading-relaxed text-cream-200/80 sm:text-[17px]"
        >
          {profile.tagline}
        </motion.p>
      </div>

      {/* Bottom row: mixer + scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 1, ease: EASE }}
        className="absolute inset-x-0 bottom-5 z-20 mx-auto flex max-w-[1400px] items-end justify-between px-5 sm:bottom-7 sm:px-10 lg:px-16"
      >
        {/* Blob mixer */}
        <div className="pointer-events-auto">
          <p className="mb-2 hidden font-sans text-[10px] uppercase tracking-[0.3em] text-cream-300 sm:block">
            Mix the blob
          </p>
          <div className="flex flex-wrap gap-2">
            {blobPresets.map((p, i) => (
              <button
                key={p.name}
                data-cursor
                onClick={() => setActive(i)}
                className={`rounded-full border px-3 py-1.5 font-sans text-[12px] transition-all duration-300 ${
                  active === i
                    ? "border-transparent bg-cream-100 text-ink-900"
                    : "border-cream-100/20 text-cream-200 hover:border-cream-100/50"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <button
          data-cursor
          onClick={() => scrollToId(lenis, "about")}
          className="pointer-events-auto hidden flex-col items-center gap-2 sm:flex"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-cream-300">
            Scroll
          </span>
          <span className="relative flex h-12 w-[1px] overflow-hidden bg-cream-100/20">
            <motion.span
              className="absolute left-0 top-0 h-1/2 w-full bg-cream-100"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
