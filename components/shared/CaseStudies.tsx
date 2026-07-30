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
  columnsClassName?: string;
}

export function CaseStudies({
  extra,
  columnsClassName = "md:grid-cols-3",
}: CaseStudiesProps = {}) {
  return (
    <div className={`grid grid-cols-1 ${columnsClassName} gap-6`}>
      {siteConfig.caseStudies.map((study, index) => (
        <div
          key={study.id}
          className="rounded-[1.5rem] border-t-4 border-brand-gold border-x border-b border-brand-border bg-warm-white/70 p-6 backdrop-blur"
        >
          <p className="mb-2 font-sans inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-gold">
            <span className="h-px w-8 bg-current opacity-50" aria-hidden />
            <span {...bind(`caseStudies.${index}.sector`)}>{study.sector}</span>
          </p>
          <p className="font-heading text-navy text-2xl leading-tight mb-1">
            <span {...bind(`caseStudies.${index}.outcome`)}>{study.outcome}</span>
          </p>
          <p className="text-charcoal-mid text-sm mb-5">
            <span {...bind(`caseStudies.${index}.outcomeSub`)}>{study.outcomeSub}</span>
          </p>
          <hr className="border-brand-border mb-5" />
          <div className="space-y-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-link-teal mb-1">
                Situation
              </p>
              <p className="text-charcoal text-sm leading-relaxed">
                <span {...bind(`caseStudies.${index}.context`)}>{study.context}</span>
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-link-teal mb-1">
                Challenge
              </p>
              <p className="text-charcoal text-sm leading-relaxed">
                <span {...bind(`caseStudies.${index}.challenge`)}>{study.challenge}</span>
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-link-teal mb-1">
                Our approach
              </p>
              <p className="text-charcoal text-sm leading-relaxed">
                <span {...bind(`caseStudies.${index}.approach`)}>{study.approach}</span>
              </p>
            </div>
          </div>
        </div>
      ))}

      {extra?.map((study) => (
        <div
          key={study.id}
          className="rounded-[1.5rem] border-t-4 border-brand-gold border-x border-b border-brand-border bg-warm-white/70 p-6 backdrop-blur"
        >
          <p className="mb-2 font-sans inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-gold">
            <span className="h-px w-8 bg-current opacity-50" aria-hidden />
            {study.sector}
          </p>
          <p className="font-heading text-navy text-2xl leading-tight mb-1">
            {study.outcome}
          </p>
          <p className="text-charcoal-mid text-sm">
            {study.outcomeSub}
          </p>
        </div>
      ))}
    </div>
  );
}
