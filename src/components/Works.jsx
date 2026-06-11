import { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import Reveal, { MaskText, ParallaxReveal } from "./Reveal";
import { EASE } from "../utils/motion";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ project, index, onClick }) => {
  const offset = index % 2 === 1 ? "lg:mt-24" : "";
  return (
    <ParallaxReveal
      className={offset}
      offset={60 + index * 10}
      scaleFrom={0.92}
    >
      <motion.div
        data-cursor
        onClick={() => onClick(project)}
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="group block cursor-pointer"
      >
        <div className="iris-border relative overflow-hidden rounded-[18px] bg-ink-700 sm:rounded-[20px]">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            {/* on-brand fallback */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ink-600 via-ink-700 to-ink-800">
              <span className="px-4 text-center font-display text-[34px] font-extrabold leading-none tracking-tighter text-cream-100/10 sm:text-[54px]">
                {project.name}
              </span>
            </div>
            <img
              src={project.image}
              alt={project.name}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.opacity = 0;
              }}
              className="relative h-full w-full object-cover opacity-90 transition-all duration-[900ms] ease-out group-hover:scale-105 group-hover:opacity-100"
            />
          </div>

          {/* gradient veil */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />

          {/* corner arrow */}
          <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream-100/10 backdrop-blur-md transition-all duration-500 group-hover:bg-cream-100 group-hover:text-ink-900">
            <span className="text-[18px] transition-transform duration-500 group-hover:rotate-45">
              &#8599;
            </span>
          </div>

          {/* Hover shimmer overlay */}
          <motion.div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-cream-100/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ transform: "skewX(-15deg)" }}
          />

          {/* year + role chip */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <span className="rounded-full bg-ink-900/60 px-3 py-1 font-sans text-[11px] text-cream-100 backdrop-blur-md">
              {project.role}
            </span>
            <span className="rounded-full bg-ink-900/60 px-3 py-1 font-sans text-[11px] text-cream-300 backdrop-blur-md">
              {project.year}
            </span>
          </div>
        </div>

        <div className="mt-5 sm:mt-6">
          <h3 className="font-display text-[22px] font-bold tracking-tight text-cream-100 sm:text-[28px] md:text-[32px]">
            {project.name}
          </h3>
          <p className="mt-2 max-w-md font-sans text-[13px] text-cream-200/70 sm:text-[14px]">
            {project.description}
          </p>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="font-sans text-[11px] text-cream-300 sm:text-[12px]"
            >
              #{t}
            </span>
          ))}
        </div>
      </motion.div>
    </ParallaxReveal>
  );
};

const Works = () => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="work" className={`${styles.section} ${styles.paddingY}`}>
        <div className={styles.container}>
          <div className="mb-12 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <h2 className={styles.heading}>
              <MaskText text="Selected" />
              <br />
              <MaskText text="Work" delay={0.1} wordClassName="text-iridescent" />
            </h2>
            <Reveal delay={0.1}>
              <span className="font-sans text-[13px] text-cream-300">
                ({String(projects.length).padStart(2, "0")} projects)
              </span>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-x-10 md:gap-y-8">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.name}
                project={project}
                index={i}
                onClick={setSelected}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Full-screen project modal */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
};

export default Works;
