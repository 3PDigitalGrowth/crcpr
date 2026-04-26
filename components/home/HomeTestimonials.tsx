"use client";

import { AnimateIn } from "@/components/shared/AnimateIn";

const testimonials = [
  {
    quote:
      "CRC Public Relations has developed a crisis communications plan for Christian schools and has assisted many of our member schools across Australia to effectively communicate when issues have arisen.",
    name: "christian-schools-sector",
    title: "Executive Officer, Christian schools sector",
  },
  {
    quote:
      "CRC Public Relations has helped us generate major, ongoing, national exposure and ensure that our message is widely heard.",
    name: "Peter",
    title: "CEO, national industry association with 14,000 members",
  },
  {
    quote:
      "The invaluable customer relations support from CRC Public Relations helps ensure a high level of trust in, and growth for, our chain of more than 50 restaurants.",
    name: "Hamish",
    title: "Director, hospitality sector",
  },
];

export function HomeTestimonials() {
  return (
    <section className="bg-warm-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <div className="text-center mb-14">
            <p className="font-sans font-medium text-brand-gold text-xs tracking-wide">
              Client endorsements
            </p>
            <h2 className="font-heading font-black text-navy text-3xl md:text-[42px] leading-[1.05] mt-3">
              What our clients say
            </h2>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 120}>
              <div className="bg-white rounded-lg p-8 h-full border border-brand-border border-t-[3px] border-t-brand-gold shadow-sm shadow-navy/5 hover:shadow-md transition-shadow duration-300 flex flex-col">
                <svg
                  width="28"
                  height="20"
                  viewBox="0 0 32 24"
                  fill="none"
                  className="text-brand-gold/20 mb-5 shrink-0"
                  aria-hidden
                >
                  <path
                    d="M0 24V14.4C0 6.13 5.01 1.31 13.33 0l1.34 4.8C9.09 5.87 6.67 9.07 6.67 14.4H12V24H0zm18.67 0V14.4c0-8.27 5-13.09 13.33-14.4l1.33 4.8C27.76 5.87 25.33 9.07 25.33 14.4h5.34V24H18.67z"
                    fill="currentColor"
                  />
                </svg>
                <p className="font-sans italic text-charcoal text-[15px] leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 pt-5 border-t border-brand-border">
                  <p className="text-charcoal-mid text-xs">{t.title}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={400}>
          <div className="mt-14 text-center">
            <p className="font-sans italic text-charcoal-mid text-base">
              &ldquo;100% of our consulting clients would recommend CRC Public
              Relations to a peer.&rdquo;
              <span className="not-italic font-medium text-charcoal-mid/60 text-sm ml-2">
                CRC Public Relations Client Survey
              </span>
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
