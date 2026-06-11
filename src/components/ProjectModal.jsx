import { motion, AnimatePresence } from "framer-motion";
import { EASE } from "../utils/motion";

const backdrop = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4, ease: EASE } },
  exit: { opacity: 0, transition: { duration: 0.35, ease: EASE } },
};

const modal = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    y: 80,
    rotateX: 12,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: EASE,
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    y: 60,
    rotateX: -8,
    filter: "blur(8px)",
    transition: { duration: 0.4, ease: EASE },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: EASE } },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 1.1, filter: "blur(8px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: EASE },
  },
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
          variants={backdrop}
          initial="hidden"
          animate="show"
          exit="exit"
          onClick={onClose}
        >
          {/* Dark overlay with blur */}
          <motion.div
            className="absolute inset-0 bg-ink-900/85 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Decorative glow orbs */}
          <motion.div
            className="pointer-events-none absolute left-[20%] top-[20%] h-[30vmax] w-[30vmax] rounded-full bg-iris-lilac/15 blur-3xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 1, ease: EASE }}
          />
          <motion.div
            className="pointer-events-none absolute bottom-[10%] right-[15%] h-[25vmax] w-[25vmax] rounded-full bg-iris-blush/10 blur-3xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: EASE }}
          />

          {/* Modal content */}
          <motion.div
            className="relative z-10 w-full max-w-[900px] max-h-[90vh] overflow-y-auto no-scrollbar rounded-[24px] sm:rounded-[32px]"
            variants={modal}
            initial="hidden"
            animate="show"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            style={{ perspective: "1200px" }}
          >
            <div className="iris-border glass overflow-hidden rounded-[24px] sm:rounded-[32px]">
              {/* Image */}
              <motion.div
                variants={imageReveal}
                className="relative aspect-[16/9] w-full overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ink-600 via-ink-700 to-ink-800">
                  <span className="px-4 text-center font-display text-[48px] font-extrabold leading-none tracking-tighter text-cream-100/8 sm:text-[80px]">
                    {project.name}
                  </span>
                </div>
                <img
                  src={project.image}
                  alt={project.name}
                  className="relative h-full w-full object-cover"
                  onError={(e) => { e.currentTarget.style.opacity = 0; }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent" />

                {/* Close button */}
                <button
                  onClick={onClose}
                  data-cursor
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink-900/60 backdrop-blur-md transition-all duration-300 hover:bg-cream-100 hover:text-ink-900 sm:right-6 sm:top-6 sm:h-12 sm:w-12"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>

              {/* Content */}
              <div className="p-6 sm:p-10">
                {/* Header */}
                <motion.div variants={itemUp} className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-[28px] font-extrabold tracking-tight text-cream-100 sm:text-[40px]">
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
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor
                    variants={itemUp}
                    className="group/btn inline-flex items-center gap-2 rounded-full bg-cream-100 px-5 py-2.5 font-sans text-[13px] font-semibold text-ink-900 transition-transform duration-300 hover:scale-105 sm:px-6 sm:py-3 sm:text-[14px]"
                  >
                    <span>{project.linkLabel || "Visit"}</span>
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">&#8599;</span>
                  </motion.a>
                </motion.div>

                {/* Description */}
                <motion.p
                  variants={itemUp}
                  className="mt-6 font-sans text-[14px] leading-[1.7] text-cream-200/80 sm:text-[16px]"
                >
                  {project.description}
                </motion.p>

                {/* Tags with staggered entrance */}
                <motion.div variants={itemUp} className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((t, i) => (
                    <motion.span
                      key={t}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.05, duration: 0.4, ease: EASE }}
                      className="rounded-full border border-cream-100/15 bg-cream-100/5 px-3.5 py-1.5 font-sans text-[12px] text-cream-200 sm:text-[13px]"
                    >
                      #{t}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Animated divider */}
                <motion.div
                  variants={itemUp}
                  className="my-6 h-px w-full"
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-transparent via-iris-lilac/40 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.6, duration: 0.8, ease: EASE }}
                  />
                </motion.div>

                {/* Link row */}
                <motion.div variants={itemUp} className="flex items-center justify-between">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor
                    className="link-sweep font-sans text-[14px] text-cream-100 sm:text-[15px]"
                  >
                    {project.link}
                  </a>
                  <span className="font-sans text-[11px] uppercase tracking-widest text-cream-300">
                    {project.year}
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
