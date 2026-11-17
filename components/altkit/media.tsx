import Image from "next/image";

/**
 * Framed imagery for the Chambers site. Lyall (1 Nov 2026) found the earlier
 * builds' photos "huge", so these sit inside a text column, never full bleed.
 * Barbara and Lyall (Jun 2026) asked for crisp, unblurred pictures: quality is
 * held at 85 rather than the default 75.
 */
export function FramedPhoto({
  src,
  alt,
  ratio = "aspect-[3/2]",
  position,
  sizes = "(min-width: 1024px) 560px, 100vw",
  className = "",
}: {
  src: string;
  alt: string;
  ratio?: string;
  position?: string;
  sizes?: string;
  className?: string;
}) {
  return (
    <div className={`kit-r relative overflow-hidden bg-card ${ratio} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={85}
        className="object-cover"
        style={position ? { objectPosition: position } : undefined}
      />
    </div>
  );
}

/** Client-supplied video in the same frame. Plays only when the visitor presses play. */
export function FramedVideo({
  src,
  poster,
  label,
  className = "",
}: {
  src: string;
  poster: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={`kit-r relative aspect-video overflow-hidden bg-[#0f1b2d] ${className}`}>
      <video
        className="h-full w-full object-cover"
        controls
        preload="none"
        playsInline
        poster={poster}
        aria-label={label}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
