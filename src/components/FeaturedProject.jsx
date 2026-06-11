import { motion } from "framer-motion";
import { styles } from "../styles";
import Reveal, { MaskText } from "./Reveal";
import { EASE } from "../utils/motion";

const featured = {
  name: "3D T-Shirt Designer",
  year: "2023",
  role: "Open Source Lead",
  description:
    "An immersive, browser-based 3D t-shirt customizer that lets anyone design wearable art in real time. Pick colours, upload textures, or let GPT generate unique graphics on the fly — all rendered on a photorealistic 3D model you can spin, zoom and export.",
  longDescription:
    "Built as an open-source project headed by me, this tool pushes the boundary of what a web app can feel like. It combines Next.js for routing and SSR, Three.js for the real-time 3D viewport, Firebase for auth and storage, and GPT for AI-powered design generation — all wrapped in a buttery Tailwind UI.",
  tags: ["Next.js", "Tailwind CSS", "Firebase", "GPT", "Three.js"],
  image: "/projects/3DTshirt.jpg",
  link: "https://product-3-d.vercel.app/",
  highlights: [
    { label: "Real-time 3D", value: "Three.js viewport with HDRI lighting" },
    { label: "AI-Powered", value: "GPT generates textures & graphics on demand" },
    { label: "Open Source", value: "Community-driven, headed by me" },
  ],
};

const FeaturedProject = () => {
  return (
    <section className={`${styles.section} relative overflow-hidden py-20 sm:py-28 md:py-36`}>
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[80vmax] w-[80vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-iris-lilac/10 via-iris-blush/8 to-transparent blur-3xl" />
      </div>

      <div className={styles.container}>
        {/* Section header */}
        <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <p className={styles.eyebrow}>(Featured Project)</p>
            </Reveal>
            <h2 className="mt-4 font-display text-[32px] font-extrabold leading-[0.95] tracking-tighter text-cream-100 sm:text-[48px] lg:text-[64px]">
              <MaskText text="3D T-Shirt" />
              <br />
              <MaskText
                text="Designer"
                delay={0.1}
                wordClassName="text-iridescent"
              />
            </h2>
          </div>
          <Reveal delay={0.15}>
            <span className="inline-flex items-center gap-2 rounded-full border border-iris-lilac/30 bg-iris-lilac/10 px-4 py-2 font-sans text-[12px] font-medium text-iris-lilac sm:text-[13px]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-iris-lilac" />
              Open Source
            </span>
          </Reveal>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Image / Preview */}
          <motion.a
            href={featured.link}
            target="_blank"
            rel="noreferrer"
            data-cursor
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, ease: EASE }}
            className="group relative lg:col-span-7"
          >
            <div className="iris-border relative overflow-hidden rounded-[20px] sm:rounded-[28px]">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-ink-600 via-ink-700 to-ink-800">
                {/* Fallback */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="px-6 text-center font-display text-[40px] font-extrabold leading-none tracking-tighter text-cream-100/8 sm:text-[72px]">
                    3D
                  </span>
                </div>
                <img
                  src={featured.image}
                  alt={featured.name}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.opacity = 0; }}
                  className="relative h-full w-full object-cover opacity-90 transition-all duration-[1200ms] ease-out group-hover:scale-[1.03] group-hover:opacity-100"
                />
              </div>

              {/* Overlay gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />

              {/* Corner arrow */}
              <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-cream-100/10 backdrop-blur-md transition-all duration-500 group-hover:bg-cream-100 group-hover:text-ink-900 sm:right-6 sm:top-6 sm:h-14 sm:w-14">
                <span className="text-[20px] transition-transform duration-500 group-hover:rotate-45">
                  &#8599;
                </span>
              </div>

              {/* Year + role badges */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 sm:bottom-6 sm:left-6">
                <span className="rounded-full bg-ink-900/60 px-3.5 py-1.5 font-sans text-[12px] font-medium text-cream-100 backdrop-blur-md">
                  {featured.role}
                </span>
                <span className="rounded-full bg-ink-900/60 px-3.5 py-1.5 font-sans text-[12px] text-cream-300 backdrop-blur-md">
                  {featured.year}
                </span>
              </div>
            </div>
          </motion.a>

          {/* Details panel */}
          <div className="flex flex-col justify-center lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="font-sans text-[15px] leading-[1.7] text-cream-200/80 sm:text-[16px]">
                {featured.description}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-5 font-sans text-[14px] leading-[1.7] text-cream-200/60">
                {featured.longDescription}
              </p>
            </Reveal>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-1 gap-4 xs:grid-cols-3">
              {featured.highlights.map((h, i) => (
                <Reveal key={h.label} delay={0.22 + i * 0.06}>
                  <div className="glass rounded-2xl px-4 py-4">
                    <p className="font-display text-[14px] font-bold text-cream-100 sm:text-[15px]">
                      {h.label}
                    </p>
                    <p className="mt-1 font-sans text-[12px] leading-snug text-cream-300">
                      {h.value}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Tags */}
            <Reveal delay={0.35}>
              <div className="mt-8 flex flex-wrap gap-2">
                {featured.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-cream-100/15 px-3 py-1.5 font-sans text-[12px] text-cream-300"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal delay={0.4}>
              <a
                href={featured.link}
                target="_blank"
                rel="noreferrer"
                data-cursor
                className="group/btn mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-cream-100 px-7 py-3.5 font-sans text-[14px] font-semibold text-ink-900 transition-transform duration-300 hover:scale-[1.03]"
              >
                <span>View live project</span>
                <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                  &#8594;
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
