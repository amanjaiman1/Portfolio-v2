import { lazy, Suspense, useState } from "react";
import { motion } from "framer-motion";

import { profile, blobPresets } from "../constants";
import { useLenis, scrollToId } from "./SmoothScroll";
import { EASE } from "../utils/motion";

// Defer the three.js bundle so it loads after first paint
const BlobCanvas = lazy(() => import("./canvas/Blob"));

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

// Whole-word reveal — used for the iridescent name. A `background-clip: text`
// gradient MUST live on the same element as the transform; otherwise the
// transform spawns a new stacking context and the clipped text renders
// invisible (this is why "Jaiman" was disappearing).
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
      className="relative flex h-[100svh] min-h-[640px] w-full flex-col overflow-hidden"
    >
      {/* soft background spotlight */}
      <div className="spotlight pointer-events-none absolute inset-0" />

      {/* CSS fallback blob (sits behind the canvas) */}
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

      {/* ---------- Foreground content (flex column, fills the screen) ---------- */}
      <div className="pointer-events-none relative z-10 mx-auto flex h-full w-full max-w-[1400px] flex-col px-5 pb-6 pt-[84px] sm:px-10 sm:pb-8 sm:pt-[116px] lg:px-16">
        {/* Top labels — now visible on mobile too */}
        <div className="flex items-start justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.6, ease: EASE }}
            className="font-sans text-[10px] uppercase leading-relaxed tracking-[0.18em] text-cream-300 sm:text-[12px] sm:tracking-[0.35em]"
          >
            <span>Creative</span>
            <br />
            <span>Developer</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.6, ease: EASE }}
            className="text-right font-sans text-[10px] uppercase leading-relaxed tracking-[0.18em] text-cream-300 sm:text-[12px] sm:tracking-[0.35em]"
          >
            <span>{profile.location} &mdash; Remote</span>
            <br />
            <span className="hidden xs:inline">{profile.available}</span>
            <span className="xs:hidden">Open &rsquo;26</span>
          </motion.div>
        </div>

        {/* Headline block — pushed to the bottom, blob breathes in the gap above */}
        <div className="mt-auto">
          {/* Availability pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease: EASE }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-cream-100/15 bg-cream-100/5 px-3.5 py-1.5 backdrop-blur-sm sm:mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-iris-mint opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-iris-mint" />
            </span>
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-cream-200 sm:text-[11px]">
              Available for new work
            </span>
          </motion.div>

          {/* Name — the showstopper, always the full "Aman Jaiman" */}
          <h1 className="font-display font-extrabold leading-[0.9] tracking-tighter text-cream-100 text-[16vw] xs:text-[15vw] sm:text-[10vw] lg:text-[8.5vw]">
            {/* Mobile: stack vertically */}
            <span className="block sm:hidden">
              <CharReveal text="Aman" delay={1.2} />
            </span>
            <span className="block sm:hidden">
              <WordReveal text="Jaiman" delay={1.45} className="text-iridescent" />
            </span>

            {/* Desktop: name on two lines, subtitle riding the second line */}
            <span className="hidden sm:block">
              <CharReveal text="Aman" delay={1.2} />
            </span>
            <span className="hidden sm:block">
              <WordReveal text="Jaiman" delay={1.45} className="text-iridescent" />
            </span>
          </h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1, duration: 1.2, ease: EASE }}
            className="mt-4 max-w-xl font-sans text-[14px] leading-relaxed text-cream-200/80 sm:mt-6 sm:text-[17px]"
          >
            {profile.tagline}
          </motion.p>

          {/* Bottom row: blob mixer + scroll cue */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 1, ease: EASE }}
            className="mt-7 flex items-end justify-between gap-4 sm:mt-10"
          >
            {/* Blob mixer */}
            <div className="pointer-events-auto">
              <p className="mb-2 font-sans text-[10px] uppercase tracking-[0.3em] text-cream-300">
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
              className="pointer-events-auto flex shrink-0 flex-col items-center gap-2"
              aria-label="Scroll to about"
            >
              <span className="hidden font-sans text-[10px] uppercase tracking-[0.3em] text-cream-300 sm:block">
                Scroll
              </span>
              <span className="relative flex h-10 w-[1px] overflow-hidden bg-cream-100/20 sm:h-12">
                <motion.span
                  className="absolute left-0 top-0 h-1/2 w-full bg-cream-100"
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
