import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import Reveal, { MaskText } from "./Reveal";
import { EASE } from "../utils/motion";

const ProjectCard = ({ project, index }) => {
  const offset = index % 2 === 1 ? "lg:mt-24" : "";
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      data-cursor
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: EASE }}
      className={`group block ${offset}`}
    >
      <div className="iris-border relative overflow-hidden rounded-[20px] bg-ink-700">
        <div className="aspect-[4/3] w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            className="h-full w-full object-cover opacity-90 transition-all duration-[900ms] ease-out group-hover:scale-105 group-hover:opacity-100"
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

      <div className="mt-6 flex items-start justify-between">
        <div>
          <h3 className="font-display text-[26px] font-bold tracking-tight text-cream-100 sm:text-[32px]">
            {project.name}
          </h3>
          <p className="mt-2 max-w-md font-sans text-[14px] text-cream-200/70">
            {project.description}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="font-sans text-[12px] text-cream-300"
          >
            #{t}
          </span>
        ))}
      </div>
    </motion.a>
  );
};

const Works = () => {
  return (
    <section id="work" className={`${styles.section} ${styles.paddingY}`}>
      <div className={styles.container}>
        <div className="mb-16 flex items-end justify-between gap-6">
          <h2 className={styles.heading}>
            <MaskText text="Selected" />
            <br />
            <span className="text-iridescent">
              <MaskText text="Work" delay={0.1} />
            </span>
          </h2>
          <Reveal delay={0.1}>
            <span className="font-sans text-[13px] text-cream-300">
              ({String(projects.length).padStart(2, "0")} projects)
            </span>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
