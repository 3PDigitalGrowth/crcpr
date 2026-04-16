import Image from "next/image";

export type MediaOutletLogoVariant = "onDark" | "onLight";

interface MediaOutletLogoLinkProps {
  href: string;
  name: string;
  logoSrc: string;
  /** onDark: light grey / white logos over navy or photo. onLight: muted grey on white/off-white. */
  variant?: MediaOutletLogoVariant;
  className?: string;
}

/**
 * Media outlet mark in a consistent light grey. Source PNGs should be high-contrast;
 * transparent backgrounds work best over dark UI (onDark uses invert for dark marks).
 */
export function MediaOutletLogoLink({
  href,
  name,
  logoSrc,
  variant = "onDark",
  className = "",
}: MediaOutletLogoLinkProps) {
  const imgClass =
    variant === "onDark"
      ? "h-7 md:h-8 w-auto max-w-[9rem] object-contain object-left opacity-75 transition-opacity hover:opacity-100 [filter:grayscale(100%)_brightness(1.2)]"
      : "h-7 md:h-8 w-auto max-w-[9rem] object-contain object-left opacity-65 transition-opacity hover:opacity-90 [filter:grayscale(100%)_brightness(0.8)_contrast(1.1)]";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className={`inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/60 rounded-sm ${className}`}
    >
      <Image
        src={logoSrc}
        alt=""
        width={180}
        height={40}
        sizes="(max-width: 768px) 120px, 160px"
        className={imgClass}
      />
    </a>
  );
}
