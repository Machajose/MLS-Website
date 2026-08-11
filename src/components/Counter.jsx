import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "motion/react";

export default function Counter({ value, suffix = "", duration = 1.6 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const hasStarted = useRef(false);
  const controlsRef = useRef(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  function startAnimation() {
    if (hasStarted.current) return;
    hasStarted.current = true;
    controlsRef.current?.stop();
    controlsRef.current = animate(count, value, { duration, ease: "easeOut" });
  }

  useEffect(() => {
    if (isInView) startAnimation();
  }, [isInView]);

  useEffect(() => {
    const fallback = setTimeout(() => {
      startAnimation();
    }, 1200);
    return () => clearTimeout(fallback);
  }, []);

  useEffect(() => {
    return () => controlsRef.current?.stop();
  }, []);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}