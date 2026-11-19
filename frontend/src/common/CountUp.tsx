import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";

interface Props {
  value: number;
  duration?: number;
}

/** Counts from 0 to `value` the first time it scrolls into view. */
const CountUp = ({ value, duration = 2 }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => setCount(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

export default CountUp;
