import { useEffect, useState } from "react";

/**
 * Single source of truth for "is this a phone-sized device?".
 *
 * We intentionally key off viewport width (via matchMedia) rather than a raw
 * resize listener so the component only re-renders when the breakpoint is
 * actually crossed — not on every scroll-induced resize on mobile browsers
 * (where the URL bar collapsing fires resize events constantly).
 *
 * On mobile we serve lighter, GPU-composited animations (transform / opacity
 * only) and skip the expensive blur / backdrop-filter / scroll-linked work.
 */
const matches = (q) =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia(q).matches;

const useMediaQuery = (query) => {
  const [value, setValue] = useState(() => matches(query));

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mql = window.matchMedia(query);
    const onChange = (e) => setValue(e.matches);

    // Sync immediately in case it changed between render and effect.
    setValue(mql.matches);

    // addEventListener is the modern API; addListener is the Safari < 14 fallback.
    if (mql.addEventListener) mql.addEventListener("change", onChange);
    else mql.addListener(onChange);

    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", onChange);
      else mql.removeListener(onChange);
    };
  }, [query]);

  return value;
};

/** True on phone-sized viewports (<= 768px). */
export const useIsMobile = (breakpoint = 768) =>
  useMediaQuery(`(max-width: ${breakpoint}px)`);

/** True when the user has asked the OS to reduce motion. */
export const usePrefersReducedMotion = () =>
  useMediaQuery("(prefers-reduced-motion: reduce)");
