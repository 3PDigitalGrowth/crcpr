"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);

  const numericMatch = value.match(/^(\d+)/);
  const numericPart = numericMatch ? parseInt(numericMatch[1], 10) : null;
  const suffix = numericMatch ? value.slice(numericMatch[0].length) : "";

  useEffect(() => {
    const el = ref.current;
    if (!el || numericPart === null) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.unobserve(el);

          const duration = 1600;
          const steps = 40;
          const stepDuration = duration / steps;
          let step = 0;

          const interval = setInterval(() => {
            step++;
            const progress = step / steps;
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(numericPart * eased);
            setDisplay(`${current}${suffix}`);

            if (step >= steps) {
              clearInterval(interval);
              setDisplay(value);
            }
          }, stepDuration);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [numericPart, suffix, value, hasAnimated]);

  if (numericPart === null) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {hasAnimated ? display : <span className="opacity-0">{value}</span>}
    </span>
  );
}
