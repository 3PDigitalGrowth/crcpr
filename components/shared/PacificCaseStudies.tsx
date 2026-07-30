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
          className="flex flex-col rounded-[1.5rem] border-t-4 border-brand-gold border-x border-b border-brand-border bg-warm-white/70 backdrop-blur overflow-hidden"
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
            <p className="mb-2 font-sans inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-gold">
              <span className="h-px w-8 bg-current opacity-50" aria-hidden />
              {study.sector}
            </p>
            <h3 className="font-heading text-navy text-2xl leading-tight mb-4">
              {study.headline}
            </h3>
            <p className="text-charcoal text-sm leading-relaxed">
              {study.body}
            </p>
            <p className="text-charcoal-mid text-xs mt-5 pt-4 border-t border-brand-border">
              Anonymised to protect client confidentiality
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
