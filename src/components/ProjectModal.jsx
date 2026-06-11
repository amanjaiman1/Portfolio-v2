import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE } from "../utils/motion";
import { useLenis } from "./SmoothScroll";

const backdrop = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.35, ease: EASE } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: EASE } },
};

const modal = {
  hidden: { opacity: 0, scale: 0.92, y: 40 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: EASE,
      staggerChildren: 0.05,
      delayChildren: 0.12,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 30,
    transition: { duration: 0.3, ease: EASE },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const ProjectModal = ({ project, onClose }) => {
  const lenis = useLenis();

  // Lock background scroll + close on Escape while the modal is open
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
          className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6"
          variants={backdrop}
          initial="hidden"
          animate="show"
          exit="exit"
          onClick={onClose}
        >
          {/* Dark overlay with blur */}
          <div className="absolute inset-0 bg-ink-900/85 backdrop-blur-xl" />

          {/* Decorative glow orbs */}
          <motion.div
            className="pointer-events-none absolute left-[15%] top-[15%] h-[28vmax] w-[28vmax] rounded-full bg-iris-lilac/15 blur-3xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
          />
          <motion.div
            className="pointer-events-none absolute bottom-[10%] right-[12%] h-[24vmax] w-[24vmax] rounded-full bg-iris-blush/10 blur-3xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 1.1, delay: 0.1, ease: EASE }}
          />

          {/* Modal card — flex column: fixed image, scrollable content */}
          <motion.div
            className="iris-border glass relative z-10 flex max-h-[92vh] w-full max-w-[920px] flex-col overflow-hidden rounded-[22px] sm:max-h-[88vh] sm:rounded-[30px]"
            variants={modal}
            initial="hidden"
            animate="show"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image (fixed height) */}
            <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden">
              {/* On-brand fallback (shown when no image is available) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-ink-600 via-ink-700 to-ink-800">
                <span className="px-6 text-center font-display text-[40px] font-extrabold leading-none tracking-tighter text-cream-100/20 sm:text-[68px]">
                  {project.name}
                </span>
                <span className="font-serif-soft text-[13px] italic text-cream-200/45 sm:text-[15px]">
                  {project.role}
                </span>
              </div>
              <img
                src={project.image}
                alt={project.name}
                className="relative h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.opacity = 0;
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent" />

              {/* Close button */}
              <button
                onClick={onClose}
                data-cursor
                aria-label="Close"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink-900/60 text-cream-100 backdrop-blur-md transition-all duration-300 hover:bg-cream-100 hover:text-ink-900 sm:right-6 sm:top-6 sm:h-12 sm:w-12"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Content (scrolls if it overflows) */}
            <div className="min-h-0 flex-1 overflow-y-auto no-scrollbar p-6 sm:p-9">
              {/* Header */}
              <motion.div
                variants={itemUp}
                className="flex flex-wrap items-start justify-between gap-4"
              >
                <div>
                  <h2 className="font-display text-[26px] font-extrabold tracking-tight text-cream-100 sm:text-[40px]">
                    {project.name}
                  </h2>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="font-serif-soft text-[14px] italic text-iris-lilac sm:text-[16px]">
                      {project.role}
                    </span>
                    <span className="font-sans text-[12px] text-cream-300">
                      {project.year}
                    </span>
                  </div>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor
                  className="group/btn inline-flex shrink-0 items-center gap-2 rounded-full bg-cream-100 px-5 py-2.5 font-sans text-[13px] font-semibold text-ink-900 transition-transform duration-300 hover:scale-105 sm:px-6 sm:py-3 sm:text-[14px]"
                >
                  <span>{project.linkLabel || "Visit"}</span>
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                    &#8599;
                  </span>
                </a>
              </motion.div>

              {/* Description */}
              <motion.p
                variants={itemUp}
                className="mt-6 font-sans text-[14px] leading-[1.7] text-cream-200/80 sm:text-[16px]"
              >
                {project.description}
              </motion.p>

              {/* Tags */}
              <motion.div variants={itemUp} className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-cream-100/15 bg-cream-100/5 px-3.5 py-1.5 font-sans text-[12px] text-cream-200 sm:text-[13px]"
                  >
                    #{t}
                  </span>
                ))}
              </motion.div>

              {/* Divider */}
              <motion.div variants={itemUp} className="my-6 h-px w-full">
                <div className="h-full bg-gradient-to-r from-transparent via-iris-lilac/40 to-transparent" />
              </motion.div>

              {/* Link row */}
              <motion.div
                variants={itemUp}
                className="flex flex-wrap items-center justify-between gap-3"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor
                  className="link-sweep break-all font-sans text-[13px] text-cream-100 sm:text-[15px]"
                >
                  {project.link}
                </a>
                <span className="font-sans text-[11px] uppercase tracking-widest text-cream-300">
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
