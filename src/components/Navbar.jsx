import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { navLinks } from "../constants";
import { useLenis, scrollToId } from "./SmoothScroll";
import { EASE } from "../utils/motion";
import { useIsMobile } from "../utils/useDevice";

const Navbar = () => {
  const lenis = useLenis();
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    // allow the overlay to begin closing before scrolling
    setTimeout(() => scrollToId(lenis, id), open ? 250 : 0);
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: EASE, delay: 0.2 }}
        className={`fixed inset-x-0 top-0 z-[90] transition-colors duration-500 ${
          scrolled
            ? `border-b border-cream-100/10 ${
                isMobile ? "bg-ink-900/95" : "bg-ink-900/70 backdrop-blur-xl"
              }`
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
          {/* Logo */}
          <button
            onClick={() => go("top")}
            data-cursor
            className="group flex items-center gap-3"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full">
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-iris-lilac via-iris-blush to-iris-sky opacity-90 transition-transform duration-500 group-hover:rotate-180" />
              <span className="relative font-display text-[13px] font-extrabold text-ink-900">
                A
              </span>
            </span>
            <span className="hidden font-display text-[15px] font-bold tracking-tight text-cream-100 sm:block">
              Me
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => go(link.id)}
                  data-cursor
                  className="link-sweep flex items-baseline gap-1.5 font-sans text-[14px] font-medium text-cream-200 transition-colors hover:text-cream-100"
                >
                  <span className="text-[10px] text-iris-lilac/80">
                    {link.index}
                  </span>
                  {link.title}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA + burger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => go("contact")}
              data-cursor
              className="hidden rounded-full border border-cream-100/20 px-5 py-2 font-sans text-[13px] font-medium text-cream-100 transition-all duration-300 hover:border-transparent hover:bg-cream-100 hover:text-ink-900 sm:block"
            >
              Let&apos;s talk
            </button>

            <button
              onClick={() => setOpen((v) => !v)}
              data-cursor
              aria-label="Menu"
              className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
            >
              <span
                className={`h-[2px] w-6 bg-cream-100 transition-transform duration-300 ${
                  open ? "translate-y-[8px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-6 bg-cream-100 transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[2px] w-6 bg-cream-100 transition-transform duration-300 ${
                  open ? "-translate-y-[8px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-[80] flex flex-col justify-center bg-ink-900/98 px-8 md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, ease: EASE, duration: 0.6 }}
                >
                  <button
                    onClick={() => go(link.id)}
                    className="flex items-baseline gap-3 font-display text-[12vw] font-bold tracking-tighter text-cream-100"
                  >
                    <span className="font-sans text-[14px] text-iris-lilac">
                      {link.index}
                    </span>
                    {link.title}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
