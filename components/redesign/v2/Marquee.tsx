import { type ReactNode } from "react";

/**
 * Infinite horizontal ticker. Used as a living seam between the hero and the
 * bento so there is no hard edge between sections. The track is duplicated so
 * the -50% keyframe (in globals.css) loops seamlessly. Pauses on hover.
 */
export function Marquee({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`v2-marquee group relative overflow-hidden ${className}`}>
      {/* edge fades so logos dissolve into the canvas rather than cut off */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#F5F2EC] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#F5F2EC] to-transparent"
      />
      <div className="v2-marquee-track">
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
