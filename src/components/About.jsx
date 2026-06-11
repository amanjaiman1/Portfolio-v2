import { styles } from "../styles";
import { about, techStack } from "../constants";
import Reveal, { MaskText } from "./Reveal";
import Marquee from "./Marquee";

const About = () => {
  return (
    <section id="about" className={`${styles.section} ${styles.paddingY}`}>
      {/* Tech marquee strip */}
      <div className="border-y border-cream-100/10 py-5">
        <Marquee
          items={techStack}
          duration="38s"
          className="font-display text-[26px] font-semibold text-cream-100/90 sm:text-[34px]"
        />
      </div>

      <div className={`${styles.container} pt-12 sm:pt-20`}>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <Reveal>
              <p className={styles.eyebrow}>(About)</p>
            </Reveal>
          </div>

          <div className="lg:col-span-9">
            <h2 className="font-display text-[26px] font-bold leading-[1.15] tracking-tight text-cream-100 sm:text-[40px] lg:text-[56px]">
              <MaskText text="I build for the web where" />
              <br className="hidden sm:block" />
              <span className="font-serif-soft font-light italic text-iridescent">
                <MaskText text="engineering meets emotion." delay={0.15} />
              </span>
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <p className={styles.body}>{p}</p>
                </Reveal>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-cream-100/10 pt-8 sm:mt-16 sm:gap-6 sm:pt-10">
              {about.stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.08}>
                  <div>
                    <p className="font-display text-[28px] font-extrabold leading-none tracking-tighter text-cream-100 sm:text-[48px] lg:text-[60px]">
                      {s.value}
                    </p>
                    <p className="mt-1.5 font-sans text-[10px] uppercase tracking-[0.15em] text-cream-300 sm:mt-2 sm:text-[12px] sm:tracking-[0.2em]">
                      {s.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
