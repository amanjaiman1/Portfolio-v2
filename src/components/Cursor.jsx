import { useEffect, useRef } from "react";

/**
 * A two-part custom cursor (dot + trailing ring) — a creative-developer
 * signature (Richard Mattka). Grows when hovering interactive elements
 * marked with [data-cursor] or native links/buttons.
 */
const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;

    document.body.classList.add("has-cursor");

    const dot = dotRef.current;
    const ring = ringRef.current;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 3.5}px, ${mouseY - 3.5}px)`;
    };

    const render = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      const size = ring.classList.contains("is-hover") ? 32 : 20;
      ring.style.transform = `translate(${ringX - size}px, ${ringY - size}px)`;
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    const interactiveSel = "a, button, [data-cursor], input, textarea, label";
    const onOver = (e) => {
      if (e.target.closest(interactiveSel)) ring.classList.add("is-hover");
    };
    const onOut = (e) => {
      if (e.target.closest(interactiveSel)) ring.classList.remove("is-hover");
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.body.classList.remove("has-cursor");
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring hidden md:block" />
      <div ref={dotRef} className="cursor-dot hidden md:block" />
    </>
  );
};

export default Cursor;
