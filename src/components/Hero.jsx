import { lazy, Suspense, useState } from "react";
import { motion } from "framer-motion";

import { profile, blobPresets } from "../constants";
import { useLenis, scrollToId } from "./SmoothScroll";
import { EASE } from "../utils/motion";

// Defer the three.js bundle so it loads after first paint
const BlobCanvas = lazy(() => import("./canvas/Blob"));

// Character-by-character reveal for the name
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

// Whole-word reveal for iridescent text
const WordReveal = ({ text, delay = 0, className = "" }) => (
  <span className="reveal-mask">
    <motion.span
      className={`inline-block ${className}`}
      initial={{ y: "120%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {text}
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
      className="relative flex h-[100svh] min-h-[580px] w-full flex-col overflow-hidden"
    >
      {/* soft background spotlight */}
      <div className="spotlight pointer-events-none absolute inset-0" />

      {/* CSS fallback blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[55vmin] w-[55vmin] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-colors duration-700 sm:h-[60vmin] sm:w-[60vmin]"
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

      {/* ---------- Foreground content ---------- */}
      <div className="pointer-events-none relative z-10 mx-auto flex h-full w-full max-w-[1400px] flex-col px-5 pb-4 pt-[72px] sm:px-10 sm:pb-8 sm:pt-[116px] lg:px-16">
        {/* Top labels */}
        <div className="flex items-start justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.6, ease: EASE }}
            className="font-sans text-[9px] uppercase leading-relaxed tracking-[0.18em] text-cream-300 sm:text-[12px] sm:tracking-[0.35em]"
          >
            <span>Creative</span>
            <br />
            <span>Developer</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.6, ease: EASE }}
            className="text-right font-sans text-[9px] uppercase leading-relaxed tracking-[0.18em] text-cream-300 sm:text-[12px] sm:tracking-[0.35em]"
          >
            <span>{profile.location} &mdash; Remote</span>
            <br />
            <span className="hidden xs:inline">{profile.available}</span>
            <span className="xs:hidden">Open &rsquo;26</span>
          </motion.div>
        </div>

        {/* Headline block — pushed to the bottom */}
        <div className="mt-auto">
          {/* Name — smaller on mobile so everything fits */}
          <h1 className="font-display font-extrabold leading-[0.9] tracking-tighter text-cream-100 text-[13vw] xs:text-[12vw] sm:text-[10vw] lg:text-[8.5vw]">
            {/* Mobile: stack vertically */}
            <span className="block sm:hidden">
              <CharReveal text="Aman" delay={1.2} />
            </span>
            <span className="block sm:hidden">
              <WordReveal text="Jaiman" delay={1.45} className="text-iridescent" />
            </span>

            {/* Desktop */}
            <span className="hidden sm:block">
              <CharReveal text="Aman" delay={1.2} />
            </span>
            <span className="hidden sm:block">
              <WordReveal text="Jaiman" delay={1.45} className="text-iridescent" />
            </span>
          </h1>

          {/* Tagline — smaller on mobile */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1, duration: 1.2, ease: EASE }}
            className="mt-2 max-w-xl font-sans text-[12px] leading-relaxed text-cream-200/80 sm:mt-6 sm:text-[17px]"
          >
            {profile.tagline}
          </motion.p>

          {/* Blob mixer — compact on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 1, ease: EASE }}
            className="mt-4 sm:mt-10"
          >
            <div className="pointer-events-auto">
              <p className="mb-1.5 font-sans text-[9px] uppercase tracking-[0.3em] text-cream-300 sm:mb-2 sm:text-[10px]">
                Mix the blob
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {blobPresets.map((p, i) => (
                  <button
                    key={p.name}
                    data-cursor
                    onClick={() => setActive(i)}
                    className={`rounded-full border px-2 py-0.5 font-sans text-[10px] transition-all duration-300 sm:px-3 sm:py-1.5 sm:text-[12px] ${
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
          </motion.div>

          {/* Scroll down button — centered, visible on mobile start */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.8, ease: EASE }}
            className="mt-5 flex justify-center sm:mt-8"
          >
            <button
              data-cursor
              onClick={() => scrollToId(lenis, "about")}
              className="pointer-events-auto group flex flex-col items-center gap-1.5 sm:gap-2"
              aria-label="Scroll down"
            >
              <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-cream-300 sm:text-[10px]">
                Scroll down
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cream-100/20 transition-all duration-300 group-hover:border-cream-100/60 group-hover:bg-cream-100/10 sm:h-10 sm:w-10">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-3.5 w-3.5 text-cream-100 sm:h-4 sm:w-4"
                  animate={{ y: [0, 3, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  />
                </motion.svg>
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
