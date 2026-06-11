import { motion } from "framer-motion";
import { EASE } from "../utils/motion";

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
export const MaskText = ({ text, className = "", delay = 0, stagger = 0.06 }) => {
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
            className="inline-block"
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

export default Reveal;
