import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Lyall Mercer — Founder & Principal Advisor",
  description:
    "Lyall Mercer is the founder of CRC Public Relations. Former journalist, Australasia's leading crisis communications advisor, with 25+ years advising companies, governments, and high-profile individuals.",
};

export default function LyallMercerPage() {
  return (
    <>
      <PageHero
        eyebrow="FOUNDER & PRINCIPAL ADVISOR"
        title="Lyall Mercer"
      />

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <div className="bg-navy-mid rounded-lg aspect-[3/4] flex items-center justify-center">
              <span className="text-white/20 text-sm">Portrait</span>
            </div>
            <div className="mt-8">
              <h4 className="text-xs font-sans font-medium text-charcoal-mid tracking-[0.14em] uppercase mb-3">
                As seen in
              </h4>
              <ul className="list-none p-0 m-0">
                {siteConfig.lyall.mediaLinks.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-brand-gold hover:underline block py-1"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-navy font-heading font-black text-2xl">
              The journalist who became Australasia&apos;s leading crisis
              communications advisor
            </h2>
            <p className="text-charcoal-mid text-[15px] leading-relaxed mt-6">
              Lyall Mercer began his career as a journalist, writing for some of
              Australia&apos;s leading newspapers. That foundation —
              understanding exactly how media thinks, moves, and decides what
              becomes a story — is what makes his approach to corporate
              communications and crisis advice unlike any other.
            </p>
            <p className="text-charcoal-mid text-[15px] leading-relaxed mt-4">
              Over the past 25 years, Lyall has built a reputation across
              Australasia as a leader in corporate public relations, reputation
              and issues management, and crisis communications.
            </p>
            <p className="text-charcoal-mid text-[15px] leading-relaxed mt-4">
              He has advised national and international companies, governments,
              senior executives, politicians, celebrities, and sporting figures —
              and has worked with clients and media on every continent.
            </p>
            <p className="text-charcoal-mid text-[15px] leading-relaxed mt-4">
              Lyall is a sought-after conference speaker, delivering keynotes and
              workshops on crisis communications, reputation management, and media
              strategy across Australia and the Pacific.
            </p>

            <blockquote className="border-l-[3px] border-brand-gold pl-6 py-4 mt-8 bg-off-white rounded-r-lg">
              <p className="italic text-charcoal text-lg">
                {siteConfig.lyall.quote}
              </p>
              <footer className="text-brand-gold font-medium text-sm mt-2">
                — Lyall Mercer
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-off-white py-16">
        <div className="max-w-3xl mx-auto px-6 flex flex-col gap-4">
          <a
            href={siteConfig.lyallMercerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-gold hover:underline font-medium"
          >
            → Visit lyallmercer.com for the full profile
          </a>
          <a
            href={siteConfig.myPrPartnerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-teal hover:underline font-medium"
          >
            → Explore My PR Partner for training and workshops
          </a>
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <Link
            href="/contact"
            className="inline-block bg-brand-gold text-navy font-heading font-black text-sm tracking-widest uppercase px-8 py-4 rounded-[4px] hover:bg-gold-light transition"
          >
            Work with Lyall →
          </Link>
        </div>
      </section>
    </>
  );
}
