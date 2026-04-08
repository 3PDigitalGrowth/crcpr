interface ProofItem {
  label: string;
  value: string;
  detail: string;
}

interface PageProofStripProps {
  eyebrow?: string;
  title: string;
  items: ProofItem[];
  variant?: "white" | "off-white" | "navy";
}

export function PageProofStrip({
  eyebrow = "Why CRC Public Relations",
  title,
  items,
  variant = "off-white",
}: PageProofStripProps) {
  const sectionClass =
    variant === "navy"
      ? "bg-navy"
      : variant === "white"
        ? "bg-warm-white"
        : "bg-off-white";

  const cardClass =
    variant === "navy"
      ? "border-white/10 bg-white/[0.03]"
      : "border-brand-border bg-white shadow-sm shadow-navy/5";

  const titleClass = variant === "navy" ? "text-white" : "text-navy";
  const valueClass = variant === "navy" ? "text-white" : "text-navy";
  const detailClass =
    variant === "navy" ? "text-white/60" : "text-body";

  return (
    <section className={`${sectionClass} py-16 md:py-20`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-brand-gold font-sans font-medium text-xs mb-4">
            {eyebrow}
          </p>
          <h2 className={`font-heading font-black text-3xl ${titleClass}`}>
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {items.map((item) => (
            <div
              key={`${item.label}-${item.value}`}
              className={`border rounded-lg p-6 ${cardClass}`}
            >
              <p className="text-brand-gold text-xs font-medium mb-3">
                {item.label}
              </p>
              <p className={`font-heading font-black text-2xl ${valueClass}`}>
                {item.value}
              </p>
              <p className={`text-sm leading-relaxed mt-3 ${detailClass}`}>
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
