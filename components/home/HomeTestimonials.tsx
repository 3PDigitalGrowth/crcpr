"use client";

import { AnimateIn } from "@/components/shared/AnimateIn";

const testimonials = [
  {
    quote:
      "CRC Public Relations has developed a crisis communications plan for Christian schools and has assisted many of our member schools across Australia to effectively communicate when issues have arisen.",
    name: "Vanessa Cheng",
    title: "Executive Officer, Australian Association of Christian Schools",
    featured: true,
  },
  {
    quote:
      "CRC Public Relations has helped us generate major, ongoing, national exposure and ensure that our message is widely heard.",
    name: "Peter White AM",
    title: "Managing Director, Finance Brokers Association of Australia",
    featured: false,
  },
  {
    quote:
      "The invaluable customer relations support from CRC Public Relations helps ensure a high level of trust in, and growth for, our chain of more than 50 restaurants.",
    name: "Hamish Watson",
    title: "Director, Cafe 63",
    featured: false,
  },
];

export function HomeTestimonials() {
  return (
    <section className="bg-off-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Asymmetric: featured testimonial large on left, two smaller on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Featured large card, 7 cols */}
          <AnimateIn className="lg:col-span-7">
            <div className="bg-white rounded-lg p-10 h-full border-l-[3px] border-brand-gold shadow-sm hover:shadow-md hover:shadow-navy/5 transition-shadow duration-300">
              <svg
                width="32"
                height="24"
                viewBox="0 0 32 24"
                fill="none"
                className="text-brand-gold/20 mb-6"
                aria-hidden
              >
                <path
                  d="M0 24V14.4C0 6.13 5.01 1.31 13.33 0l1.34 4.8C9.09 5.87 6.67 9.07 6.67 14.4H12V24H0zm18.67 0V14.4c0-8.27 5-13.09 13.33-14.4l1.33 4.8C27.76 5.87 25.33 9.07 25.33 14.4h5.34V24H18.67z"
                  fill="currentColor"
                />
              </svg>
              <p className="font-sans italic text-charcoal text-lg leading-relaxed">
                &ldquo;{testimonials[0].quote}&rdquo;
              </p>
              <div className="mt-6 pt-6 border-t border-brand-border">
                <p className="font-sans font-medium text-navy text-sm">
                  {testimonials[0].name}
                </p>
                <p className="text-charcoal-mid text-xs mt-1">
                  {testimonials[0].title}
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Two smaller cards stacked, 5 cols */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {testimonials.slice(1).map((t, i) => (
              <AnimateIn key={t.name} delay={(i + 1) * 150}>
                <div
                  className={`bg-white rounded-lg p-8 border-l-[3px] shadow-sm hover:shadow-md hover:shadow-navy/5 transition-shadow duration-300 ${
                    i === 0 ? "border-navy" : "border-brand-gold"
                  }`}
                >
                  <p className="font-sans italic text-charcoal text-[15px] leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-5 pt-5 border-t border-brand-border">
                    <p className="font-sans font-medium text-navy text-sm">{t.name}</p>
                    <p className="text-charcoal-mid text-xs mt-1">{t.title}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* Survey stat, pull-quote style, not a card */}
        <AnimateIn>
          <div className="mt-16 text-center">
            <p className="font-sans italic text-charcoal-mid text-base">
              &ldquo;100% of our consulting clients would recommend CRC PR to a
              peer.&rdquo;
              <span className="not-italic font-medium text-charcoal-mid/60 text-sm ml-2">
                – CRC PR Client Survey
              </span>
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
