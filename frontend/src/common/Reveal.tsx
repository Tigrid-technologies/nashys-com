import type { ReactNode } from "react";
import { motion } from "motion/react";

type Direction = "left" | "right" | "up";

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
}

const offsets: Record<Direction, { x?: number; y?: number }> = {
  left: { x: -50 },
  right: { x: 50 },
  up: { y: 30 },
};

const Reveal = ({
  children,
  direction = "left",
  delay = 0,
  duration = 1.5,
  className,
}: RevealProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
