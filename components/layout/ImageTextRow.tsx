import Image from "next/image";
import type { ReactNode } from "react";

export interface ImageTextRowProps {
  imageSrc: string;
  imageAlt: string;
  /** Desktop column order: image on left or right */
  imagePosition?: "left" | "right";
  /** Tailwind aspect ratio class, e.g. aspect-[3/2] or aspect-[4/3] */
  aspectClass?: string;
  children: ReactNode;
}

/** Real photography from the CRC 2026 shoot. Everything else is generated imagery. */
const REAL_PHOTO = "/images/crc-2026/";

/**
 * Text beside an image. In the Chambers design only real CRC photographs are
 * shown (Lyall, 1 Nov 2026: far fewer photos); any other image is dropped and
 * the text runs on its own.
 */
export function ImageTextRow({
  imageSrc,
  imageAlt,
  imagePosition = "left",
  aspectClass = "aspect-[3/2]",
  children,
}: ImageTextRowProps) {
  if (!imageSrc.startsWith(REAL_PHOTO)) {
    return <div className="max-w-3xl">{children}</div>;
  }

  const imageOrder = imagePosition === "left" ? "order-1 md:order-1" : "order-1 md:order-2";
  const textOrder = imagePosition === "left" ? "order-2 md:order-2" : "order-2 md:order-1";

  return (
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
      <div className={`kit-r relative w-full overflow-hidden ${aspectClass} ${imageOrder}`}>
        <Image src={imageSrc} alt={imageAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" loading="lazy" />
      </div>
      <div className={textOrder}>{children}</div>
    </div>
  );
}
