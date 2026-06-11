import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import Reveal, { MaskText, ScaleReveal } from "./Reveal";
import { EASE } from "../utils/motion";

const ExperienceRow = ({ exp, index }) => (
  <ScaleReveal delay={index * 0.04}>
    <div className="group grid grid-cols-1 gap-4 border-t border-cream-100/10 py-8 sm:gap-6 sm:py-10 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-3">
        <span className="font-sans text-[12px] text-cream-300 sm:text-[13px]">{exp.date}</span>
      </div>

      <div className="md:col-span-9">
        <div className="flex items-center gap-3 sm:gap-4">
          <span
            className="h-2 w-2 shrink-0 rounded-full sm:h-2.5 sm:w-2.5"
            style={{ backgroundColor: exp.accent }}
          />
          <h3 className="font-display text-[20px] font-bold tracking-tight text-cream-100 sm:text-[26px] md:text-[30px]">
            {exp.title}
          </h3>
        </div>
        <p
          className="mt-1 pl-[20px] font-serif-soft text-[14px] italic sm:pl-[26px] sm:text-[16px]"
          style={{ color: exp.accent }}
        >
          {exp.company}
        </p>

        <ul className="mt-4 flex flex-col gap-2 pl-[20px] sm:mt-5 sm:gap-2.5 sm:pl-[26px]">
          {exp.points.map((point, i) => (
            <li
              key={i}
              className="flex gap-2.5 font-sans text-[13px] leading-relaxed text-cream-200/75 sm:gap-3 sm:text-[14px]"
            >
              <span className="mt-2 h-[3px] w-[3px] shrink-0 rounded-full bg-cream-300" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </ScaleReveal>
);

/**
 * Special instructor card — visually distinct from regular timeline rows.
 * Rendered as a glass panel with an iridescent border and a "teaching" badge.
 */
const InstructorCard = ({ exp, index }) => (
  <ScaleReveal delay={index * 0.04}>
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: EASE }}
      className="iris-border glass relative mt-4 mb-4 overflow-hidden rounded-[20px] p-6 sm:mt-6 sm:mb-6 sm:rounded-[24px] sm:p-8"
    >
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-iris-mint/15 blur-3xl sm:h-56 sm:w-56" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-iris-lilac/10 blur-2xl sm:h-44 sm:w-44" />

      <div className="relative z-10">
        {/* Header row */}
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-iris-mint/20 sm:h-10 sm:w-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 text-iris-mint sm:h-5 sm:w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </span>
              <h3 className="font-display text-[20px] font-bold tracking-tight text-cream-100 sm:text-[26px]">
                {exp.title}
              </h3>
            </div>
            <p className="mt-1.5 pl-[44px] font-serif-soft text-[14px] italic text-iris-mint sm:pl-[52px] sm:text-[16px]">
              {exp.company}
            </p>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-iris-mint/30 bg-iris-mint/10 px-3 py-1.5 font-sans text-[11px] font-medium uppercase tracking-wider text-iris-mint">
            <span className="h-1.5 w-1.5 rounded-full bg-iris-mint" />
            Educator
          </span>
        </div>

        {/* Date */}
        <p className="mt-4 pl-[44px] font-sans text-[12px] text-cream-300 sm:pl-[52px] sm:text-[13px]">
          {exp.date}
        </p>

        {/* Points */}
        <ul className="mt-5 flex flex-col gap-2.5 pl-[44px] sm:pl-[52px]">
          {exp.points.map((point, i) => (
            <li
              key={i}
              className="flex gap-2.5 font-sans text-[13px] leading-relaxed text-cream-200/80 sm:gap-3 sm:text-[14px]"
            >
              <span className="mt-2 h-[3px] w-[3px] shrink-0 rounded-full bg-iris-mint" />
              {point}
            </li>
          ))}
        </ul>

        {/* Stats strip */}
        <div className="mt-6 flex flex-wrap gap-4 pl-[44px] sm:gap-6 sm:pl-[52px]">
          <div>
            <p className="font-display text-[28px] font-extrabold leading-none tracking-tighter text-cream-100 sm:text-[36px]">
              250+
            </p>
            <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.15em] text-cream-300">
              Students
            </p>
          </div>
          <div>
            <p className="font-display text-[28px] font-extrabold leading-none tracking-tighter text-cream-100 sm:text-[36px]">
              6
            </p>
            <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.15em] text-cream-300">
              Months
            </p>
          </div>
          <div>
            <p className="font-display text-[28px] font-extrabold leading-none tracking-tighter text-cream-100 sm:text-[36px]">
              DSA
            </p>
            <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.15em] text-cream-300">
              Subject
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  </ScaleReveal>
);

const Experience = () => {
  return (
    <section id="experience" className={`${styles.section} ${styles.paddingY}`}>
      <div className={styles.container}>
        <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <h2 className={styles.heading}>
            <MaskText text="The path" />
          </h2>
          <Reveal delay={0.1}>
            <p className={styles.eyebrow}>(Experience)</p>
          </Reveal>
        </div>

        <div className="border-b border-cream-100/10">
          {experiences.map((exp, i) =>
            exp.isInstructor ? (
              <InstructorCard key={exp.company} exp={exp} index={i} />
            ) : (
              <ExperienceRow key={exp.company} exp={exp} index={i} />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
