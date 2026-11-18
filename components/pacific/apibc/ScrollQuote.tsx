"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";

/**
 * A quote that inks in word by word as it travels up the screen. Every word is
 * in the markup from the start (dimmed, never hidden), so it reads the same to
 * a screen reader, and it stays fully inked for anyone who prefers no motion.
 */
export function ScrollQuote({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "start 0.42"] });
  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <Word key={`${word}-${i}`} progress={scrollYProgress} index={i} total={words.length} still={Boolean(reduce)}>
          {word}
        </Word>
      ))}
    </p>
  );
}

function Word({
  children,
  progress,
  index,
  total,
  still,
}: {
  children: string;
  progress: MotionValue<number>;
  index: number;
  total: number;
  still: boolean;
}) {
  // Each word takes its turn, overlapping the next so the line fills smoothly.
  const start = index / (total + 2);
  const end = (index + 3) / (total + 2);
  const opacity = useTransform(progress, [start, end], [0.16, 1]);
  return (
    <>
      <motion.span style={still ? undefined : { opacity }}>{children}</motion.span>
      {index < total - 1 ? " " : null}
    </>
  );
}
