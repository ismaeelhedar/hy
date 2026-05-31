"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { PropsWithChildren } from "react";

interface MagneticProps extends PropsWithChildren {
  className?: string;
}

export function Magnetic({ children, className }: MagneticProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.3 });

  return (
    <motion.div
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const target = event.currentTarget.getBoundingClientRect();
        const dx = event.clientX - (target.left + target.width / 2);
        const dy = event.clientY - (target.top + target.height / 2);
        x.set(dx * 0.12);
        y.set(dy * 0.12);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
