import Image from "next/image";
import { siteConfig } from "@/config/site";
import { PHOTOS } from "@/components/altkit/data";

export function isLyallPortraitSrc(src?: string) {
  return (
    src === siteConfig.lyall.portraitSrc ||
    src?.endsWith("/lyall-mercer-portrait.png") === true
  );
}

/** Old generated portrait paths resolve to the real 2026 photographs. */
function resolvePortraitSrc(src: string) {
  if (isLyallPortraitSrc(src)) return PHOTOS.lyallNavyClose;
  if (src.includes("barbara-gorogh-portrait")) return PHOTOS.barbaraBrownClose;
  return src;
}

interface PortraitPlaceholderProps {
  size?: "xs" | "sm" | "md" | "lg" | "fluid";
  initials?: string;
  className?: string;
  /** Card-style frame (default) or minimal frame for inline avatars. */
  variant?: "card" | "avatar";
  /** When set, fills the frame with a cropped portrait. */
  imageSrc?: string;
  imageAlt?: string;
  /** Override object position for head-focused crop (e.g. `object-[center_12%]`). */
  imageObjectClassName?: string;
}

const SIZE_CLASS = {
  xs: "h-16 w-16 text-lg",
  sm: "h-24 w-24 text-2xl",
  md: "h-48 w-48 text-5xl",
  lg: "h-64 w-64 text-7xl",
  fluid: "aspect-[4/5] w-full text-7xl",
} as const;

const SIZES_ATTR = {
  xs: "64px",
  sm: "96px",
  md: "192px",
  lg: "256px",
  fluid: "min(100vw, 384px)",
} as const;

/**
 * Chambers portrait frame. Real people render their real 2026 photograph in a
 * hairline `kit-r` frame; with no image it falls back to quiet initials.
 */
export function PortraitPlaceholder({
  size = "md",
  initials = "LM",
  className = "",
  variant = "card",
  imageSrc,
  imageAlt,
  imageObjectClassName,
}: PortraitPlaceholderProps) {
  const frameClass =
    variant === "avatar"
      ? "relative flex-shrink-0 overflow-hidden"
      : "kit-r relative flex flex-shrink-0 items-center justify-center overflow-hidden border border-line bg-card";

  return (
    <div className={`${SIZE_CLASS[size]} ${frameClass} ${className}`}>
      {imageSrc ? (
        <Image
          src={resolvePortraitSrc(imageSrc)}
          alt={imageAlt ?? ""}
          fill
          sizes={SIZES_ATTR[size]}
          className={imageObjectClassName ?? "object-cover object-[50%_18%]"}
        />
      ) : (
        <span
          className="kit-display flex h-full w-full select-none items-center justify-center text-accent"
          aria-label={initials === "LM" ? "Lyall Mercer" : initials}
        >
          {initials}
        </span>
      )}
    </div>
  );
}
