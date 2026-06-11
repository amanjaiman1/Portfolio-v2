import { lazy, Suspense, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { profile, blobPresets } from "../constants";
import { useLenis, scrollToId } from "./SmoothScroll";
import { EASE } from "../utils/motion";

// Defer the three.js bundle so it loads after first paint
const BlobCanvas = lazy(() => import("./canvas/Blob"));

// A single line that rises from behind a mask with dramatic timing
const Line = ({ children, delay = 0, className = "" }) => (
  <span className="reveal-mask">
    <motion.span
      initial={{ y: "120%", rotateX: -20 }}
      animate={{ y: "0%", rotateX: 0 }}
      transition={{ duration: 1.2, delay, ease: EASE }}
      className={`block ${className}`}
      style={{ transformOrigin: "bottom" }}
    >
      {children}
    </motion.span>
  </span>
);

// Character-by-character reveal for the name — stunning on both mobile and desktop
const CharReveal = ({ text, delay = 0, className = "" }) => (
  <span className={`inline-flex ${className}`}>
    {text.split("").map((char, i) => (
      <span key={i} className="reveal-mask">
        <motion.span
          className="inline-block"
          initial={{ y: "120%", opacity: 0, rotateX: -40 }}
          animate={{ y: "0%", opacity: 1, rotateX: 0 }}
          transition={{
            duration: 0.9,
            delay: delay + i * 0.05,
            ease: EASE,
          }}
          style={{ transformOrigin: "bottom" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      </span>
    ))}
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
        className="pointer-events-none absolute left-1/2 top-1/2 h-[50vmin] w-[50vmin] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-colors duration-700 sm:h-[60vmin] sm:w-[60vmin]"
        style={{
          background: `radial-gradient(circle at 35% 35%, ${preset.colorA}, ${preset.colorB} 60%, transparent 75%)`,
          opacity: 0.5,
        }}
      />

      {/* Dramatic glow burst on initial load */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0.8, scale: 0.2 }}
        animate={{ opacity: 0, scale: 3 }}
        transition={{ duration: 2.5, delay: 1.3, ease: EASE }}
      >
        <div className="h-[40vmin] w-[40vmin] rounded-full bg-gradient-to-br from-iris-lilac/40 via-iris-blush/30 to-transparent blur-2xl" />
      </motion.div>

      {/* Interactive 3D blob */}
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <BlobCanvas preset={preset} />
        </Suspense>
      </div>

      {/* Top labels — hidden on mobile */}
      <div className="pointer-events-none absolute inset-x-0 top-[80px] z-10 mx-auto hidden max-w-[1400px] items-start justify-between px-5 sm:top-[88px] sm:flex sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.8, ease: EASE }}
          className={styles.eyebrow}
        >
          <span>Creative</span>
          <br />
          <span>Developer</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.8, ease: EASE }}
          className={`${styles.eyebrow} text-right`}
        >
          <span>{profile.location} &mdash; Remote</span>
          <br />
          <span>{profile.available}</span>
        </motion.div>
      </div>

      {/* Headline — the showstopper */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[170px] z-10 mx-auto max-w-[1400px] px-5 xs:bottom-[155px] sm:bottom-[112px] sm:px-10 lg:px-16">
        <h1 className={styles.display}>
          <CharReveal text="Aman" delay={1.3} />
          <br className="sm:hidden" />
          <span className="flex flex-wrap items-end gap-x-4 sm:gap-x-6">
            <CharReveal text="Jaiman" delay={1.6} className="text-iridescent" />
            <Line
              delay={2.1}
              className="mb-1 hidden font-serif-soft text-[18px] font-light italic leading-tight text-cream-200 sm:block lg:text-[22px]"
            >
              — software, shaped like art.
            </Line>
          </span>
        </h1>

        {/* Tagline with staggered word fade */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1.2, ease: EASE }}
          className="mt-4 max-w-xl font-sans text-[14px] leading-relaxed text-cream-200/80 sm:mt-6 sm:text-[17px]"
        >
          {profile.tagline}
        </motion.p>

        {/* Mobile subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.8, ease: EASE }}
          className="mt-2 font-serif-soft text-[13px] italic text-cream-200/60 sm:hidden"
        >
          — software, shaped like art.
        </motion.p>
      </div>

      {/* Bottom row: mixer + scroll cue */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1, ease: EASE }}
        className="absolute inset-x-0 bottom-5 z-20 mx-auto flex max-w-[1400px] items-end justify-between px-5 sm:bottom-7 sm:px-10 lg:px-16"
      >
        {/* Blob mixer */}
        <div className="pointer-events-auto">
          <p className="mb-2 hidden font-sans text-[10px] uppercase tracking-[0.3em] text-cream-300 sm:block">
            Mix the blob
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {blobPresets.map((p, i) => (
              <button
                key={p.name}
                data-cursor
                onClick={() => setActive(i)}
                className={`rounded-full border px-2.5 py-1 font-sans text-[11px] transition-all duration-300 sm:px-3 sm:py-1.5 sm:text-[12px] ${
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
