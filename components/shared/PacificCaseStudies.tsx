import Image from "next/image";

export interface PacificCaseStudy {
  id: string;
  sector: string;
  headline: string;
  body: string;
  image: { src: string; alt: string };
}

interface PacificCaseStudiesProps {
  items: PacificCaseStudy[];
}

export function PacificCaseStudies({ items }: PacificCaseStudiesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((study) => (
        <article
          key={study.id}
          className="flex flex-col bg-white border-t-4 border-brand-gold border-x border-b border-brand-border rounded-b-lg overflow-hidden"
        >
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <Image
              src={study.image.src}
              alt={study.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col flex-1 p-6">
            <p className="text-brand-gold text-xs font-medium mb-2">
              {study.sector}
            </p>
            <h3 className="font-heading font-black text-navy text-xl leading-tight mb-4">
              {study.headline}
            </h3>
            <p className="text-charcoal text-sm leading-relaxed">
              {study.body}
            </p>
            <p className="text-charcoal-mid text-xs italic mt-5 pt-4 border-t border-brand-border">
              Anonymised; details adjusted to protect client identity.
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
