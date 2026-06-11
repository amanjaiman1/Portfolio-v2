import { socials, profile } from "../constants";
import { useLenis, scrollToId } from "./SmoothScroll";
import Marquee from "./Marquee";

const Footer = () => {
  const lenis = useLenis();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-cream-100/10 pt-14 sm:pt-20">
      {/* Big closing marquee */}
      <div className="pb-8 sm:pb-12">
        <Marquee
          items={["Let's build", "Say hello", "Open to work"]}
          duration="26s"
          className="font-display text-[11vw] font-extrabold uppercase leading-none tracking-tighter text-cream-100 sm:text-[9vw] lg:text-[8vw]"
          separator="•"
        />
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-10 border-t border-cream-100/10 py-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-[22px] font-bold text-cream-100">
              {profile.name}
            </p>
            <p className="mt-3 max-w-xs font-sans text-[14px] text-cream-200/70">
              {profile.tagline}
            </p>
            <a
              href={`mailto:${profile.email}`}
              data-cursor
              className="link-sweep mt-5 inline-block font-sans text-[15px] text-cream-100"
            >
              {profile.email}
            </a>
          </div>

          <div className="md:col-span-4">
            <p className="mb-4 font-sans text-[12px] uppercase tracking-[0.2em] text-cream-300">
              Elsewhere
            </p>
            <ul className="flex flex-col gap-2">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor
                    className="link-sweep inline-flex items-center gap-3 font-sans text-[15px] text-cream-200 hover:text-cream-100"
                  >
                    <span>{s.name}</span>
                    <span className="text-[12px] text-cream-300">{s.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start md:col-span-3 md:items-end">
            <button
              onClick={() => scrollToId(lenis, "top")}
              data-cursor
              className="group flex items-center gap-2 font-sans text-[14px] text-cream-100"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-100/20 transition-transform duration-300 group-hover:-translate-y-1">
                &#8593;
              </span>
              Back to top
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-cream-100/10 py-6 sm:flex-row">
          <p className="font-sans text-[12px] text-cream-300">
            &copy; {year} {profile.name}. Made with sleepless nights.
          </p>
          <p className="font-sans text-[12px] text-cream-300">
            Designed &amp; built with React, Three.js &amp; care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
