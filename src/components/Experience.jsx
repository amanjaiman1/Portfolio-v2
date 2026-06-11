import { styles } from "../styles";
import { experiences } from "../constants";
import Reveal, { MaskText } from "./Reveal";

const ExperienceRow = ({ exp, index }) => (
  <Reveal delay={index * 0.05} y={24}>
    <div className="group grid grid-cols-1 gap-6 border-t border-cream-100/10 py-10 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-3">
        <span className="font-sans text-[13px] text-cream-300">{exp.date}</span>
      </div>

      <div className="md:col-span-9">
        <div className="flex items-center gap-4">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: exp.accent }}
          />
          <h3 className="font-display text-[24px] font-bold tracking-tight text-cream-100 sm:text-[30px]">
            {exp.title}
          </h3>
        </div>
        <p
          className="mt-1 pl-[26px] font-serif-soft text-[16px] italic"
          style={{ color: exp.accent }}
        >
          {exp.company}
        </p>

        <ul className="mt-5 flex flex-col gap-2.5 pl-[26px]">
          {exp.points.map((point, i) => (
            <li
              key={i}
              className="flex gap-3 font-sans text-[14px] leading-relaxed text-cream-200/75"
            >
              <span className="mt-2 h-[3px] w-[3px] shrink-0 rounded-full bg-cream-300" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Reveal>
);

const Experience = () => {
  return (
    <section id="experience" className={`${styles.section} ${styles.paddingY}`}>
      <div className={styles.container}>
        <div className="mb-12 flex items-end justify-between gap-6">
          <h2 className={styles.heading}>
            <MaskText text="The path" />
          </h2>
          <Reveal delay={0.1}>
            <p className={styles.eyebrow}>(Experience)</p>
          </Reveal>
        </div>

        <div className="border-b border-cream-100/10">
          {experiences.map((exp, i) => (
            <ExperienceRow key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
