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
          className="bg-white border-t-4 border-brand-gold border-x border-b border-brand-border rounded-b-lg p-6"
        >
          <p className="text-brand-gold text-xs font-medium mb-2">
            <span {...bind(`caseStudies.${index}.sector`)}>{study.sector}</span>
          </p>
          <p className="font-heading font-black text-navy text-2xl leading-tight mb-1">
            <span {...bind(`caseStudies.${index}.outcome`)}>{study.outcome}</span>
          </p>
          <p className="text-charcoal-mid text-sm italic mb-5">
            <span {...bind(`caseStudies.${index}.outcomeSub`)}>{study.outcomeSub}</span>
          </p>
          <hr className="border-brand-border mb-5" />
          <div className="space-y-4">
            <div>
              <p className="text-navy text-xs font-medium mb-1">
                Situation
              </p>
              <p className="text-charcoal text-sm leading-relaxed">
                <span {...bind(`caseStudies.${index}.context`)}>{study.context}</span>
              </p>
            </div>
            <div>
              <p className="text-navy text-xs font-medium mb-1">
                Challenge
              </p>
              <p className="text-charcoal text-sm leading-relaxed">
                <span {...bind(`caseStudies.${index}.challenge`)}>{study.challenge}</span>
              </p>
            </div>
            <div>
              <p className="text-navy text-xs font-medium mb-1">
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
          className="bg-white border-t-4 border-brand-gold border-x border-b border-brand-border rounded-b-lg p-6"
        >
          <p className="text-brand-gold text-xs font-medium mb-2">
            {study.sector}
          </p>
          <p className="font-heading font-black text-navy text-2xl leading-tight mb-1">
            {study.outcome}
          </p>
          <p className="text-charcoal-mid text-sm italic">
            {study.outcomeSub}
          </p>
        </div>
      ))}
    </div>
  );
}
