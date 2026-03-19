import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/layout/PageHero";
import { CapabilityDownload } from "@/components/shared/CapabilityDownload";

export const metadata: Metadata = {
  title: "About CRC Public Relations",
  description:
    "CRC Public Relations is a boutique corporate PR firm founded by Lyall Mercer. 25 years of experience across Australia, the Pacific, and internationally.",
};

const STATS = [
  { value: "25+", label: "Years of experience" },
  { value: "Every continent", label: "Global reach" },
  { value: "100%", label: "Client retention" },
  { value: "500+", label: "Professionals trained" },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT US"
        title="About CRC Public Relations"
        description="Boutique corporate PR. 25 years of trusted counsel for companies, governments, and organisations across Australia, the Pacific, and internationally."
      />

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading font-black text-navy text-3xl">
              The firm
            </h2>
            <p className="text-charcoal-mid text-[15px] leading-relaxed mt-6">
              CRC Public Relations was founded on a simple principle: that
              organisations facing their most significant communications
              challenges deserve direct access to experienced, senior advisors —
              not account managers or junior staff.
            </p>
            <p className="text-charcoal-mid text-[15px] leading-relaxed mt-4">
              For over 25 years, CRC PR has provided that access. We are a
              boutique firm by design. Every client engagement is led by a
              senior advisor with deep expertise in corporate communications,
              reputation management, and crisis response.
            </p>
            <p className="text-charcoal-mid text-[15px] leading-relaxed mt-4">
              Our clients include ASX-listed companies, Federal and State
              Government departments, industry associations, independent schools,
              faith-based organisations, health and aged care providers, and
              Pacific governments and NGOs.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading font-black text-brand-gold text-4xl">
                  {stat.value}
                </p>
                <p className="text-charcoal-mid text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-off-white py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading font-black text-navy text-3xl">
            Our Mission
          </h2>
          <p className="italic text-charcoal text-base leading-relaxed mt-6">
            Being boutique and personal means that unlike many PR firms, at CRC
            Public Relations you will deal directly with senior and experienced
            advisors who take a genuine, long-term interest in your organisation.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl">
            Our Team
          </h2>
          <div className="mt-10 bg-off-white rounded-lg p-8 flex flex-col md:flex-row gap-8 items-start">
            <div className="bg-navy-mid rounded-lg w-[200px] h-[250px] shrink-0 flex items-center justify-center">
              <span className="text-white/20 text-sm">Portrait</span>
            </div>
            <div>
              <h3 className="font-heading font-black text-navy text-xl">
                Lyall Mercer
              </h3>
              <p className="text-brand-gold font-medium text-sm">
                {siteConfig.lyall.title}
              </p>
              <p className="text-charcoal-mid text-[15px] mt-3">
                {siteConfig.lyall.origin}
              </p>
              <Link
                href="/about/lyall-mercer"
                className="text-brand-gold font-medium text-sm mt-4 inline-block hover:underline"
              >
                Read full profile →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <CapabilityDownload />
      </div>
    </>
  );
}
