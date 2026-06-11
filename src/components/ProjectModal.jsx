import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE } from "../utils/motion";
import { useLenis } from "./SmoothScroll";
import { useIsMobile } from "../utils/useDevice";

// Extraordinary entrance: the backdrop sweeps in with blur
const backdrop = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, ease: EASE },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.45, ease: EASE, delay: 0.1 },
  },
};

// Desktop card: enters from below with a dramatic spring, rotation, and blur clearing
const cardDesktop = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.85,
    rotateX: 8,
    filter: "blur(12px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: -60,
    scale: 0.9,
    rotateX: -5,
    filter: "blur(8px)",
    transition: {
      duration: 0.45,
      ease: EASE,
    },
  },
};

// Mobile card: transform + opacity only (no blur / 3D)
const cardMobile = {
  hidden: { opacity: 0, y: 64, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.05,
      delayChildren: 0.12,
    },
  },
  exit: {
    opacity: 0,
    y: -40,
    scale: 0.94,
    transition: { duration: 0.35, ease: EASE },
  },
};

// Content items slide up with a stagger
const itemRevealDesktop = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: EASE },
  },
};

const itemRevealMobile = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE },
  },
};

const ProjectModal = ({ project, onClose }) => {
  const lenis = useLenis();
  const isMobile = useIsMobile();
  const card = isMobile ? cardMobile : cardDesktop;
  const itemReveal = isMobile ? itemRevealMobile : itemRevealDesktop;

  useEffect(() => {
    if (!project) return;
    lenis?.stop();
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [project, lenis, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center px-3 py-14 sm:px-8 sm:pt-24 sm:pb-10"
          variants={backdrop}
          initial="hidden"
          animate="show"
          exit="exit"
          onClick={onClose}
          style={isMobile ? undefined : { perspective: "1200px" }}
        >
          {/* Dark overlay */}
          {isMobile ? (
            <div className="absolute inset-0 bg-ink-900/97" />
          ) : (
            <motion.div
              className="absolute inset-0 bg-ink-900/90 backdrop-blur-2xl"
              initial={{ backdropFilter: "blur(0px)" }}
              animate={{ backdropFilter: "blur(24px)" }}
              exit={{ backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: EASE }}
            />
          )}

          {/* Glow orbs */}
          {isMobile ? (
            <>
              <motion.div
                className="pointer-events-none absolute left-[10%] top-[20%] h-[55vw] w-[55vw] rounded-full bg-iris-lilac/12 blur-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
              />
              <motion.div
                className="pointer-events-none absolute bottom-[15%] right-[8%] h-[45vw] w-[45vw] rounded-full bg-iris-blush/10 blur-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
              />
            </>
          ) : (
            <>
              <motion.div
                className="pointer-events-none absolute left-[10%] top-[20%] h-[30vmax] w-[30vmax] rounded-full bg-iris-lilac/12 blur-[80px]"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              />
              <motion.div
                className="pointer-events-none absolute bottom-[15%] right-[8%] h-[25vmax] w-[25vmax] rounded-full bg-iris-blush/10 blur-[60px]"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.8 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 1, delay: 0.15, ease: EASE }}
              />
            </>
          )}

          {/* Modal card */}
          <motion.div
            className="iris-border glass relative z-10 flex max-h-[calc(100vh-7rem)] w-full max-w-[920px] flex-col overflow-hidden rounded-[20px] sm:max-h-[calc(100vh-8.5rem)] sm:rounded-[28px]"
            variants={card}
            initial="hidden"
            animate="show"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            style={isMobile ? undefined : { transformStyle: "preserve-3d" }}
          >
            {/* Image */}
            <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-ink-600 via-ink-700 to-ink-800">
                <span className="px-6 text-center font-display text-[36px] font-extrabold leading-none tracking-tighter text-cream-100/15 sm:text-[64px]">
                  {project.name}
                </span>
                <span className="font-serif-soft text-[12px] italic text-cream-200/30 sm:text-[14px]">
                  {project.role}
                </span>
              </div>
              <motion.img
                src={project.image}
                alt={project.name}
                className="relative h-full w-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, ease: EASE }}
                onError={(e) => {
                  e.currentTarget.style.opacity = 0;
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent" />

              {/* Close button */}
              <motion.button
                onClick={onClose}
                data-cursor
                aria-label="Close"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-ink-900/60 text-cream-100 backdrop-blur-md transition-all duration-300 hover:rotate-90 hover:bg-cream-100 hover:text-ink-900 sm:right-5 sm:top-5 sm:h-11 sm:w-11"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>
            </div>

            {/* Content — scrollable */}
            <div className="min-h-0 flex-1 overflow-y-auto no-scrollbar p-5 sm:p-8">
              {/* Header */}
              <motion.div
                variants={itemReveal}
                className="flex flex-wrap items-start justify-between gap-3"
              >
                <div>
                  <h2 className="font-display text-[24px] font-extrabold tracking-tight text-cream-100 sm:text-[38px]">
                    {project.name}
                  </h2>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="font-serif-soft text-[13px] italic text-iris-lilac sm:text-[15px]">
                      {project.role}
                    </span>
                    <span className="font-sans text-[11px] text-cream-300 sm:text-[12px]">
                      {project.year}
                    </span>
                  </div>
                </div>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor
                  className="group/btn inline-flex shrink-0 items-center gap-2 rounded-full bg-cream-100 px-4 py-2 font-sans text-[12px] font-semibold text-ink-900 sm:px-6 sm:py-2.5 sm:text-[14px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{project.linkLabel || "Visit"}</span>
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                    &#8599;
                  </span>
                </motion.a>
              </motion.div>

              {/* Description */}
              <motion.p
                variants={itemReveal}
                className="mt-5 font-sans text-[13px] leading-[1.7] text-cream-200/80 sm:mt-6 sm:text-[15px]"
              >
                {project.description}
              </motion.p>

              {/* Tags */}
              <motion.div variants={itemReveal} className="mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-cream-100/15 bg-cream-100/5 px-3 py-1 font-sans text-[11px] text-cream-200 sm:px-3.5 sm:py-1.5 sm:text-[12px]"
                  >
                    #{t}
                  </span>
                ))}
              </motion.div>

              {/* Divider */}
              <motion.div variants={itemReveal} className="my-5 h-px w-full sm:my-6">
                <div className="h-full bg-gradient-to-r from-transparent via-iris-lilac/30 to-transparent" />
              </motion.div>

              {/* Link row */}
              <motion.div
                variants={itemReveal}
                className="flex flex-wrap items-center justify-between gap-3"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor
                  className="link-sweep break-all font-sans text-[12px] text-cream-100 sm:text-[14px]"
                >
                  {project.link}
                </a>
                <span className="font-sans text-[10px] uppercase tracking-widest text-cream-300 sm:text-[11px]">
                  {project.year}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
