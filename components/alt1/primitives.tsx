import type { ReactNode } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { VIDEOS, type VideoKey } from "./data";

export type Tone = "base" | "deep" | "cta";

export function Section({
  tone = "base",
  className = "",
  children,
  id,
  ariaLabel,
}: {
  tone?: Tone;
  className?: string;
  children: ReactNode;
  id?: string;
  ariaLabel?: string;
}) {
  return (
    <section id={id} aria-label={ariaLabel} className={`tone-${tone} relative overflow-hidden ${className}`}>
      {children}
    </section>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`relative mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-muted ${className}`}
    >
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
      {children}
    </p>
  );
}

export function BlueRule({ width = "2.5rem" }: { width?: string }) {
  return <span aria-hidden className="block h-[3px] bg-[#1c74bc]" style={{ width }} />;
}

/** Oversized outlined word that sits behind a section (the Signal signature). */
export function GhostWord({
  children,
  align = "left",
  className = "",
}: {
  children: string;
  align?: "left" | "right" | "center";
  className?: string;
}) {
  const alignClass = align === "left" ? "left-0" : align === "right" ? "right-0" : "left-1/2 -translate-x-1/2";
  return (
    <span
      aria-hidden
      className={`ghost-word absolute top-6 ${alignClass} text-[clamp(4.5rem,15vw,15rem)] ${className}`}
    >
      {children}
    </span>
  );
}

export function H2({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`font-display text-[clamp(2rem,4.6vw,3.6rem)] leading-[1.02] tracking-[-0.01em] ${className}`}>
      {children}
    </h2>
  );
}

/**
 * Ambient loop with the house fallback: a static still under 768px (no video
 * download on phones), the video from md up. Always muted and decorative.
 */
export function VideoFill({
  video,
  alt,
  priority = false,
  className = "",
  stillClassName = "object-cover",
  sizes = "100vw",
}: {
  video: VideoKey;
  alt: string;
  priority?: boolean;
  className?: string;
  stillClassName?: string;
  sizes?: string;
}) {
  const v = VIDEOS[video];
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Image src={v.still} alt={alt} fill priority={priority} sizes={sizes} className={`md:hidden ${stillClassName}`} />
      <video
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={v.poster}
        aria-hidden
      >
        <source src={v.src} type="video/mp4" />
      </video>
    </div>
  );
}

/** Frosted name tag that sits on a photo. */
export function PhotoChip({
  title,
  sub,
  className = "",
}: {
  title: string;
  sub?: string;
  className?: string;
}) {
  return (
    <div className={`glass-photo rounded-2xl px-4 py-3 ${className}`}>
      <p className="text-sm font-bold leading-tight">{title}</p>
      {sub ? <p className="on-photo-muted mt-0.5 text-xs">{sub}</p> : null}
    </div>
  );
}

/* Colour marks need their own sizing: AFR is an app-style square, the stock
   Sky News file carries a grey backdrop (alt1 uses a tight crop). */
const LOGO_OVERRIDES: Record<string, { src?: string; className: string }> = {
  AFR: { className: "h-9 w-9 rounded-lg" },
  "Sky News": { src: "/images/alt1/media/sky-news.png", className: "h-7 w-auto rounded-[4px]" },
  "Australian Associated Press": { className: "h-9 w-auto rounded-md bg-white px-2.5 py-1.5" },
};

export function MediaMarquee({ label = "Expert commentary from our advisers, featured in" }: { label?: string }) {
  const links = siteConfig.lyall.mediaLinks;
  const loop = [...links, ...links];
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted">{label}</p>
      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="marquee-track flex w-max items-center gap-14">
          {loop.map((m, i) => (
            <a
              key={`${m.name}-${i}`}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={i >= links.length ? -1 : undefined}
              aria-hidden={i >= links.length ? true : undefined}
              className="flex shrink-0 items-center transition-opacity hover:opacity-100"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={LOGO_OVERRIDES[m.name]?.src ?? m.logoSrc}
                alt={m.name}
                className={
                  m.tone === "mono"
                    ? "logo-mono h-6 w-auto object-contain"
                    : `object-contain ${LOGO_OVERRIDES[m.name]?.className ?? "h-8 w-auto"}`
                }
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
