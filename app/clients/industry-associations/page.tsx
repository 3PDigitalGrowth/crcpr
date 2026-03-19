import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";

export const metadata: Metadata = {
  title: "Industry Association PR Australia",
  description:
    "Specialist PR and crisis communications for industry associations, peak bodies, and member organisations across Australia.",
};

const services = [
  "Regulatory crisis communications",
  "Member communications strategy",
  "Board governance and communications",
  "Public affairs and advocacy",
  "Media relations for associations",
  "Crisis communications planning",
  "Stakeholder engagement frameworks",
];

export default function IndustryAssociationsPage() {
  return (
    <>
      <PageHero
        eyebrow="INDUSTRY ASSOCIATIONS"
        title="Industry Association PR and Communications"
        description="Specialist communications counsel for peak bodies, member organisations, and industry associations across Australia."
      />

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3 space-y-6 text-charcoal-mid text-[15px] leading-relaxed">
            <p>
              Industry associations occupy a unique position in Australian public
              life. They must balance the interests of their members with the
              expectations of regulators, government, media, and the public. When
              an issue surfaces — whether it&apos;s a regulatory challenge, a
              member controversy, or a governance dispute — the association&apos;s
              response must be swift, precise, and strategic.
            </p>
            <p>
              CRC PR has worked with some of Australia&apos;s most prominent
              industry associations and peak bodies. We understand the complexities
              of member communications, board governance, advocacy campaigns, and
              the regulatory environment in which associations operate.
            </p>
            <p>
              Our approach is always tailored to the specific dynamics of your
              membership, your board, and your sector. We provide the strategic
              counsel and hands-on support that association CEOs and executive
              officers need — particularly when the stakes are highest.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-3">
              {services.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-charcoal-mid text-[15px] leading-snug"
                >
                  <Check
                    className="size-5 shrink-0 text-brand-gold mt-0.5"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-off-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <figure className="border-l-[3px] border-brand-gold bg-white p-6 rounded-lg">
            <blockquote className="text-charcoal text-[15px] leading-relaxed">
              &ldquo;CRC Public Relations has developed a crisis communications plan
              for Christian schools and has assisted many of our member schools
              across Australia to effectively communicate when issues have
              arisen.&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm text-charcoal-mid">
              <span className="font-sans font-semibold text-navy">
                Vanessa Cheng
              </span>
              , Executive Officer, Australian Association of Christian Schools
            </figcaption>
          </figure>
          <figure className="border-l-[3px] border-navy bg-white p-6 rounded-lg">
            <blockquote className="text-charcoal text-[15px] leading-relaxed">
              &ldquo;CRC Public Relations has helped us generate major, ongoing,
              national exposure and ensure that our message is widely heard.&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm text-charcoal-mid">
              <span className="font-sans font-semibold text-navy">
                Peter White AM
              </span>
              , Managing Director, Finance Brokers Association of Australia
            </figcaption>
          </figure>
        </div>
      </section>

      <LeadMagnetBanner magnet="associationCrisisGuide" />

      <section className="bg-navy py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h3 className="font-heading font-black text-white text-2xl md:text-3xl">
            Discuss your association&apos;s communications needs →
          </h3>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-brand-gold text-navy font-heading font-black text-sm tracking-widest uppercase px-8 py-4 rounded-[4px] hover:bg-gold-light transition"
          >
            Book a consultation →
          </Link>
        </div>
      </section>
    </>
  );
}
