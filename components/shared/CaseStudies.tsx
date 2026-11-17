import { siteConfig } from "@/config/site";
import { bind } from "@/components/editable";

interface ExtraCaseStudy {
  id: string;
  sector: string;
  outcome: string;
  outcomeSub: string;
}

interface CaseStudiesProps {
  extra?: ReadonlyArray<ExtraCaseStudy>;
  /** Kept for call-site compatibility; the Chambers layout is a single ledger. */
  columnsClassName?: string;
}

const num = (i: number) => `${String(i + 1).padStart(2, "0")}.`;

const STEPS = [
  ["Situation", "context"],
  ["Challenge", "challenge"],
  ["Our approach", "approach"],
] as const;

/** Chambers case studies: a hairline ledger, one row per engagement, detail in the right column. */
export function CaseStudies({ extra }: CaseStudiesProps = {}) {
  return (
    <div className="border-t border-line">
      {siteConfig.caseStudies.map((study, index) => (
        <div
          key={study.id}
          className="grid gap-6 border-b border-line py-8 lg:grid-cols-[3rem,0.9fr,1.3fr] lg:gap-10"
        >
          <span className="kit-display text-sm text-accent">{num(index)}</span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
              <span {...bind(`caseStudies.${index}.sector`)}>{study.sector}</span>
            </p>
            <p className="kit-display mt-2 text-[clamp(1.25rem,2vw,1.6rem)] leading-tight">
              <span {...bind(`caseStudies.${index}.outcome`)}>{study.outcome}</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              <span {...bind(`caseStudies.${index}.outcomeSub`)}>{study.outcomeSub}</span>
            </p>
          </div>
          <div className="divide-y divide-[var(--line)]">
            {STEPS.map(([label, key]) => (
              <div key={key} className="py-4 first:pt-0 last:pb-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">{label}</p>
                <p className="mt-1.5 text-sm leading-relaxed">
                  <span {...bind(`caseStudies.${index}.${key}`)}>{study[key]}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {extra?.map((study, i) => (
        <div
          key={study.id}
          className="grid gap-4 border-b border-line py-8 lg:grid-cols-[3rem,0.9fr,1.3fr] lg:gap-10"
        >
          <span className="kit-display text-sm text-accent">{num(siteConfig.caseStudies.length + i)}</span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">{study.sector}</p>
            <p className="kit-display mt-2 text-[clamp(1.25rem,2vw,1.6rem)] leading-tight">{study.outcome}</p>
          </div>
          <p className="text-sm leading-relaxed text-muted">{study.outcomeSub}</p>
        </div>
      ))}
    </div>
  );
}
