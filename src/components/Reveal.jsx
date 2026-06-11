import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EASE } from "../utils/motion";
import { useIsMobile } from "../utils/useDevice";

/**
 * Reveal — fades/rises content into view on scroll (Pola-style soft entrance).
 * Use `as` to change the wrapper element.
 */
const Reveal = ({
  children,
  delay = 0,
  y = 36,
  duration = 0.9,
  className = "",
  as = "div",
  once = true,
  amount = 0.3,
}) => {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
};

/**
 * MaskText — splits a string into words, each rising from behind a mask.
 */
export const MaskText = ({
  text,
  className = "",
  wordClassName = "",
  delay = 0,
  stagger = 0.06,
}) => {
  const words = text.split(" ");
  return (
    <span
      className={className}
      style={{ display: "inline-flex", flexWrap: "wrap" }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="reveal-mask"
          style={{ marginRight: "0.28em" }}
        >
          <motion.span
            className={`inline-block ${wordClassName}`}
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: delay + i * stagger, ease: EASE }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

/**
 * ParallaxReveal — Desktop: scroll-linked parallax. Mobile: one-shot entrance.
 */
const ParallaxRevealDesktop = ({ children, className, offset, scaleFrom }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [offset, 0, -offset * 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [scaleFrom, 1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0.7]);

  return (
    <motion.div ref={ref} style={{ y, scale, opacity }} className={className}>
      {children}
    </motion.div>
  );
};

const ParallaxRevealMobile = ({ children, className, scaleFrom }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 44, scale: scaleFrom }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: EASE }}
  >
    {children}
  </motion.div>
);

export const ParallaxReveal = ({
  children,
  className = "",
  offset = 80,
  scaleFrom = 0.94,
}) => {
  const isMobile = useIsMobile();
  return isMobile ? (
    <ParallaxRevealMobile className={className} scaleFrom={scaleFrom}>
      {children}
    </ParallaxRevealMobile>
  ) : (
    <ParallaxRevealDesktop
      className={className}
      offset={offset}
      scaleFrom={scaleFrom}
    >
      {children}
    </ParallaxRevealDesktop>
  );
};

/**
 * ScaleReveal — Desktop: blur clear. Mobile: transform + opacity only.
 */
export const ScaleReveal = ({
  children,
  className = "",
  delay = 0,
}) => {
  const isMobile = useIsMobile();
  return (
    <motion.div
      className={className}
      initial={
        isMobile
          ? { opacity: 0, scale: 0.92, y: 24 }
          : { opacity: 0, scale: 0.88, filter: "blur(6px)" }
      }
      whileInView={
        isMobile
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 1, scale: 1, filter: "blur(0px)" }
      }
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: isMobile ? 0.65 : 0.9,
        delay: isMobile ? Math.min(delay, 0.12) : delay,
        ease: EASE,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
