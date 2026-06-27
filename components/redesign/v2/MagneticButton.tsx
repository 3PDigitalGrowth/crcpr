"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  /** How far the element drifts toward the cursor (px at edge). */
  strength?: number;
  external?: boolean;
}

/**
 * A button or link that drifts gently toward the cursor while hovered, then
 * springs back. One of the highest-signal, lowest-cost premium micro-interactions
 * (per the 3P design system Level 6 checklist). Disabled under reduced motion.
 */
export function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  strength = 14,
  external = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set((relX / (rect.width / 2)) * strength);
    y.set((relY / (rect.height / 2)) * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  const inner =
    href != null ? (
      external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          className={className}
        >
          {children}
        </a>
      ) : (
        <Link href={href} onClick={onClick} className={className}>
          {children}
        </Link>
      )
    ) : (
      <button type="button" onClick={onClick} className={className}>
        {children}
      </button>
    );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy, display: "inline-flex" }}
    >
      {inner}
    </motion.div>
  );
}
