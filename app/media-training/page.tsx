import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";

export const metadata: Metadata = {
  title: "Media Training Australia | Spokesperson & Executive Training",
  description:
    "Media training for executives, spokespeople, and teams. On-camera training, hostile media workshops, PR fundamentals, and online media training delivered across Australia.",
};

const TRAINING_TYPES = [
  {
    title: "Spokesperson and On-Camera Training",
    body: "Intensive one-on-one and small group sessions that prepare executives and spokespeople for television, radio, and press conference appearances. Real camera, real scenarios, real feedback.",
  },
  {
    title: "Dealing with Hostile Media — Workshops",
    body: "Workshops designed for senior leaders who may face aggressive or adversarial media questioning. We teach techniques for staying on message, managing provocation, and maintaining authority under pressure.",
  },
  {
    title: "PR 101 Fundamentals — Workshops",
    body: "Practical workshops covering media relations fundamentals, message development, media interview techniques, and communications planning. Ideal for communications teams and new spokespeople.",
  },
  {
    title: "Online Media Training — Remote Delivery",
    body: "Full media training programs delivered remotely for organisations with distributed teams, interstate offices, or Pacific Island locations. Same rigour, same results.",
  },
] as const;

export default function MediaTrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="MEDIA TRAINING"
        title="Media Training Australia — Spokespersons, Executives, Teams"
        description="Professional media training delivered by former broadcast journalists with decades of experience. We prepare your people to perform under pressure — on camera, on radio, and in the toughest interviews."
        ctaLabel="BOOK MEDIA TRAINING"
        ctaHref="/contact"
      />

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {TRAINING_TYPES.map((card) => (
            <div
              key={card.title}
              className="bg-off-white border-t-[3px] border-brand-gold rounded-lg p-8"
            >
              <h3 className="font-heading font-black text-navy text-xl">
                {card.title}
              </h3>
              <p className="text-charcoal-mid text-[15px] leading-relaxed mt-3">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="border-l-[3px] border-brand-gold pl-6 max-w-3xl text-charcoal text-[15px] leading-relaxed italic">
            Media training is delivered in partnership with television and radio
            journalists with decades of broadcast experience. Every session is
            tailored to your organisation, your industry, and the specific
            scenarios your people are most likely to face.
          </p>
        </div>
      </section>

      <LeadMagnetBanner magnet="mediaInterviewGuide" />

      <section className="bg-navy py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <Link
            href="/contact"
            className="inline-block bg-brand-gold text-navy font-heading font-black text-sm tracking-widest uppercase px-8 py-4 rounded-[4px] hover:bg-gold-light transition"
          >
            Book a media training session →
          </Link>
        </div>
      </section>
    </>
  );
}
