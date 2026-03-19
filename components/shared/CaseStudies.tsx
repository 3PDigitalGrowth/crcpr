import { siteConfig } from "@/config/site";

export function CaseStudies() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {siteConfig.caseStudies.map((study) => (
        <div
          key={study.id}
          className="bg-white border-t-4 border-brand-gold border-x border-b border-brand-border rounded-b-lg p-6"
        >
          <p className="text-brand-gold text-xs font-medium tracking-[0.14em] uppercase mb-2">
            {study.sector}
          </p>
          <p className="font-heading font-black text-navy text-2xl leading-tight mb-1">
            {study.outcome}
          </p>
          <p className="text-charcoal-mid text-sm italic mb-5">
            {study.outcomeSub}
          </p>
          <hr className="border-brand-border mb-5" />
          <div className="space-y-4">
            <div>
              <p className="text-navy text-xs font-medium uppercase tracking-wide mb-1">
                Situation
              </p>
              <p className="text-charcoal text-sm leading-relaxed">
                {study.context}
              </p>
            </div>
            <div>
              <p className="text-navy text-xs font-medium uppercase tracking-wide mb-1">
                Challenge
              </p>
              <p className="text-charcoal text-sm leading-relaxed">
                {study.challenge}
              </p>
            </div>
            <div>
              <p className="text-navy text-xs font-medium uppercase tracking-wide mb-1">
                Our approach
              </p>
              <p className="text-charcoal text-sm leading-relaxed">
                {study.approach}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
