import { styles } from "../styles";
import { testimonials } from "../constants";
import Reveal from "./Reveal";

const Testimonials = () => {
  const t = testimonials[0];

  return (
    <section className={`${styles.section} ${styles.paddingY}`}>
      <div className={styles.container}>
        <Reveal>
          <p className={`${styles.eyebrow} mb-10`}>(Kind words)</p>
        </Reveal>

        <div className="relative mx-auto max-w-4xl text-center">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 font-serif-soft text-[180px] leading-none text-iris-lilac/15"
          >
            &ldquo;
          </span>

          <Reveal delay={0.05}>
            <blockquote className="relative font-serif-soft text-[26px] font-light leading-[1.4] text-cream-100 sm:text-[36px] lg:text-[44px]">
              {t.quote}
            </blockquote>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex items-center justify-center gap-4">
              <img
                src={t.image}
                alt={t.name}
                className="h-12 w-12 rounded-full object-cover ring-1 ring-cream-100/20"
              />
              <div className="text-left">
                <p className="font-display text-[16px] font-bold text-cream-100">
                  {t.name}
                </p>
                <p className="font-sans text-[13px] text-cream-300">
                  {t.designation}, {t.company}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
