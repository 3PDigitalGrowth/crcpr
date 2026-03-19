import { siteConfig } from "@/config/site";

const stats = [
  { value: siteConfig.stats.yearsTrading, label: "Years Experience" },
  { value: siteConfig.stats.continents, label: "Global Reach" },
  { value: siteConfig.stats.clientRetention, label: "Client Retention" },
  { value: siteConfig.stats.professionsTrained, label: "Professionals Trained" },
];

export function HomeStats() {
  return (
    <section className="bg-navy-mid py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center gap-8 text-center">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex-1 min-w-[140px] ${
                i < stats.length - 1 ? "lg:border-r lg:border-white/15 lg:pr-8" : ""
              }`}
            >
              <p className="font-heading font-black text-brand-gold text-4xl">
                {stat.value}
              </p>
              <p className="font-sans font-medium text-white/50 text-[11px] tracking-widest uppercase mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
