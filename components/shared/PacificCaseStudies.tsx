export interface PacificCaseStudy {
  id: string;
  sector: string;
  headline: string;
  body: string;
  /** Kept for call-site compatibility; the Chambers design runs no generated imagery here. */
  image?: { src: string; alt: string };
}

interface PacificCaseStudiesProps {
  items: PacificCaseStudy[];
}

/** Chambers case studies: three hairline-bordered columns of text, no imagery. */
export function PacificCaseStudies({ items }: PacificCaseStudiesProps) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {items.map((study) => (
        <article
          key={study.id}
          className="kit-r flex flex-col border border-line border-t-[3px] border-t-[var(--k-blue)] bg-card p-6"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            {study.sector}
          </p>
          <h3 className="kit-display mt-3 text-[clamp(1.05rem,1.5vw,1.25rem)] uppercase leading-tight">
            {study.headline}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted">{study.body}</p>
          <p className="mt-5 border-t border-line pt-4 text-xs text-muted">
            Anonymised to protect client confidentiality
          </p>
        </article>
      ))}
    </div>
  );
}
