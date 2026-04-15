import Image from "next/image";

interface PortraitPlaceholderProps {
  size?: "sm" | "md" | "lg";
  initials?: string;
  className?: string;
  /** When set, fills the frame with a cropped portrait (square). */
  imageSrc?: string;
  imageAlt?: string;
  /** Override object position for head-focused crop (e.g. `object-[center_12%]`). */
  imageObjectClassName?: string;
}

const SIZE_PX = { sm: 96, md: 192, lg: 256 } as const;

export function PortraitPlaceholder({
  size = "md",
  initials = "LM",
  className = "",
  imageSrc,
  imageAlt,
  imageObjectClassName,
}: PortraitPlaceholderProps) {
  const sizes = {
    sm: "w-24 h-24 text-2xl",
    md: "w-48 h-48 text-5xl",
    lg: "w-64 h-64 text-7xl",
  };
  const px = SIZE_PX[size];

  return (
    <div
      className={`${sizes[size]} bg-navy-mid rounded-lg flex items-center justify-center border border-white/10 flex-shrink-0 overflow-hidden ${className}`}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt ?? ""}
          width={px}
          height={px}
          sizes={`${px}px`}
          className={`h-full w-full object-cover ${imageObjectClassName ?? "object-[center_14%]"}`}
          priority={false}
        />
      ) : (
        <span
          className="font-heading font-black text-brand-gold select-none"
          aria-label={initials === "LM" ? "Lyall Mercer" : initials}
        >
          {initials}
        </span>
      )}
    </div>
  );
}
