import Image from "next/image";

export type MediaOutletLogoVariant = "onDark" | "onLight";
export type MediaOutletLogoTone = "mono" | "color";

interface MediaOutletLogoLinkProps {
  href: string;
  name: string;
  logoSrc: string;
  /** onDark: rendered over navy / dark photo. onLight: rendered over white / off-white. */
  variant?: MediaOutletLogoVariant;
  /**
   * mono: monochrome silhouette (works for logos that read as a clear text/mark shape).
   * color: retained for compatibility; currently also rendered grayscale per site design.
   */
  tone?: MediaOutletLogoTone;
  className?: string;
}

/**
 * Media outlet mark with two tones:
 * - mono → flattens to a uniform light/dark silhouette (good for text-shaped marks)
 * - color → currently styled as grayscale for a consistent monochrome row
 * Source PNGs must have transparent backgrounds.
 */
export function MediaOutletLogoLink({
  href,
  name,
  logoSrc,
  variant = "onDark",
  tone = "mono",
  className = "",
}: MediaOutletLogoLinkProps) {
  const baseImg =
    "h-7 md:h-8 w-auto max-w-[9rem] object-contain object-left transition-opacity";

  let toneClass = "";
  if (variant === "onDark") {
    toneClass =
      tone === "mono"
        ? "opacity-85 hover:opacity-100 [filter:brightness(0)_invert(1)]"
        : "opacity-95 hover:opacity-100 [filter:grayscale(100%)_invert(1)_brightness(1.05)_contrast(1.1)]";
  } else {
    toneClass =
      tone === "mono"
        ? "opacity-65 hover:opacity-90 [filter:brightness(0)_grayscale(100%)]"
        : "opacity-90 hover:opacity-100 [filter:grayscale(100%)_contrast(1.05)]";
  }

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
        className={`${baseImg} ${toneClass}`}
      />
    </a>
  );
}
