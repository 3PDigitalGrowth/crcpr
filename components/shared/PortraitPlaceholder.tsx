import Image from "next/image";
import { siteConfig } from "@/config/site";

export function isLyallPortraitSrc(src?: string) {
  return (
    src === siteConfig.lyall.portraitSrc ||
    src?.endsWith("/lyall-mercer-portrait.png") === true
  );
}

interface PortraitPlaceholderProps {
  size?: "xs" | "sm" | "md" | "lg";
  initials?: string;
  className?: string;
  /** Card-style frame (default) or minimal frame for inline avatars. */
  variant?: "card" | "avatar";
  /** When set, fills the frame with a cropped portrait (square). */
  imageSrc?: string;
  imageAlt?: string;
  /** Override object position for head-focused crop (e.g. `object-[center_12%]`). */
  imageObjectClassName?: string;
}

const SIZE_PX = { xs: 64, sm: 96, md: 192, lg: 256 } as const;

export function PortraitPlaceholder({
  size = "md",
  initials = "LM",
  className = "",
  variant = "card",
  imageSrc,
  imageAlt,
  imageObjectClassName,
}: PortraitPlaceholderProps) {
  const sizes = {
    xs: "w-16 h-16 text-lg",
    sm: "w-24 h-24 text-2xl",
    md: "w-48 h-48 text-5xl",
    lg: "w-64 h-64 text-7xl",
  };
  const px = SIZE_PX[size];
  const isLyallPortrait = isLyallPortraitSrc(imageSrc);
  const resolvedObjectClassName =
    imageObjectClassName ??
    (isLyallPortrait
      ? siteConfig.lyall.portraitObjectClassName
      : "object-cover object-center");

  const frameClass =
    variant === "avatar"
      ? "flex-shrink-0 overflow-hidden"
      : "bg-navy-mid rounded-lg flex items-center justify-center border border-white/10 flex-shrink-0 overflow-hidden";

  return (
    <div className={`${sizes[size]} ${frameClass} ${className}`}>
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt ?? ""}
          width={px}
          height={px}
          sizes={`${px}px`}
          className={`h-full w-full ${resolvedObjectClassName}`}
          priority={false}
        />
      ) : (
        <span
          className="font-heading font-black text-brand-gold select-none flex h-full w-full items-center justify-center"
          aria-label={initials === "LM" ? "Lyall Mercer" : initials}
        >
          {initials}
        </span>
      )}
    </div>
  );
}
