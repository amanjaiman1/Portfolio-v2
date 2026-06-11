import { useState } from "react";
import { styles } from "../styles";
import { capabilities } from "../constants";
import Reveal, { MaskText } from "./Reveal";

const Capabilities = () => {
  const [hover, setHover] = useState(null);

  return (
    <section className={`${styles.section} ${styles.paddingY}`}>
      <div className={styles.container}>
        <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className={styles.heading}>
            <MaskText text="What I do" />
          </h2>
          <Reveal delay={0.1}>
            <p className="max-w-sm font-sans text-[15px] text-cream-200/70">
              A blend of clean engineering and considered design — from the
              data layer all the way to the last micro-interaction.
            </p>
          </Reveal>
        </div>

        <div className="border-t border-cream-100/10">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.no} delay={i * 0.05} y={20}>
              <div
                data-cursor
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                className="group relative grid grid-cols-1 gap-4 border-b border-cream-100/10 py-8 transition-colors duration-500 md:grid-cols-12 md:items-center md:gap-8 md:py-10"
              >
                {/* hover sheen */}
                <span
                  className="pointer-events-none absolute inset-0 -z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(185,167,255,0.08), transparent 60%)",
                  }}
                />
                <div className="relative z-10 md:col-span-1">
                  <span className="font-sans text-[13px] text-iris-lilac">
                    {cap.no}
                  </span>
                </div>
                <div className="relative z-10 md:col-span-4">
                  <h3 className="font-display text-[26px] font-bold tracking-tight text-cream-100 transition-transform duration-500 group-hover:translate-x-2 sm:text-[32px]">
                    {cap.title}
                  </h3>
                </div>
                <div className="relative z-10 md:col-span-5">
                  <p className={styles.body}>{cap.desc}</p>
                </div>
                <div className="relative z-10 flex flex-wrap gap-2 md:col-span-2 md:justify-end">
                  {cap.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-cream-100/15 px-2.5 py-1 font-sans text-[11px] text-cream-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
