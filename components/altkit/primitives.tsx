import type { ReactNode } from "react";
import { siteConfig } from "@/config/site";

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
  return <div className={`relative mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`kit-eyebrow flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.26em] ${className}`}>
      <span className="kit-eyebrow-dot h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
      {children}
    </p>
  );
}

export function BlueRule({ width = "2.25rem" }: { width?: string }) {
  return <span aria-hidden className="block h-[3px] bg-[var(--accent)]" style={{ width }} />;
}

/** Outlined word behind a section. Only Signal shows these (see --k-ghost). */
export function GhostWord({
  children,
  align = "left",
  className = "",
}: {
  children: string;
  align?: "left" | "right";
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={`ghost-word absolute top-4 ${align === "left" ? "left-0" : "right-0"} text-[clamp(3.5rem,10vw,9rem)] ${className}`}
    >
      {children}
    </span>
  );
}

export function H2({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <h2 id={id} className={`kit-display kit-h2 ${className}`}>
      {children}
    </h2>
  );
}

/** Frosted name tag that sits on a photo. */
export function PhotoChip({ title, sub, className = "" }: { title: string; sub?: string; className?: string }) {
  return (
    <div className={`glass-photo rounded-xl px-3.5 py-2.5 ${className}`}>
      <p className="text-sm font-bold leading-tight">{title}</p>
      {sub ? <p className="on-photo-muted mt-0.5 text-xs">{sub}</p> : null}
    </div>
  );
}

/* Colour marks need their own sizing: AFR is an app-style square, the stock
   Sky News file carries a grey backdrop (the kit uses a tight crop). */
const LOGO_OVERRIDES: Record<string, { src?: string; className: string }> = {
  AFR: { className: "h-8 w-8 rounded-lg" },
  "Sky News": { src: "/images/crc-2026/media/sky-news.png", className: "h-6 w-auto rounded-[4px]" },
  "Australian Associated Press": { className: "h-8 w-auto rounded-md bg-white px-2 py-1" },
};

export function MediaMarquee({
  label = "Expert commentary from our advisers, featured in",
  center = false,
}: {
  label?: string;
  center?: boolean;
}) {
  const links = siteConfig.lyall.mediaLinks;
  const loop = [...links, ...links];
  return (
    <div>
      <p className={`text-[11px] font-semibold uppercase tracking-[0.26em] text-muted ${center ? "text-center" : ""}`}>
        {label}
      </p>
      <div className="relative mt-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="marquee-track flex w-max items-center gap-12">
          {loop.map((m, i) => (
            <a
              key={`${m.name}-${i}`}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={i >= links.length ? -1 : undefined}
              aria-hidden={i >= links.length ? true : undefined}
              className="flex shrink-0 items-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={LOGO_OVERRIDES[m.name]?.src ?? m.logoSrc}
                alt={m.name}
                className={
                  m.tone === "mono"
                    ? "logo-mono h-5 w-auto object-contain"
                    : `object-contain ${LOGO_OVERRIDES[m.name]?.className ?? "h-7 w-auto"}`
                }
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
