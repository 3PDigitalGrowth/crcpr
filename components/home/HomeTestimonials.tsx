const testimonials = [
  {
    quote:
      "CRC Public Relations has developed a crisis communications plan for Christian schools and has assisted many of our member schools across Australia to effectively communicate when issues have arisen.",
    name: "Vanessa Cheng",
    title: "Executive Officer, Australian Association of Christian Schools",
    borderColor: "border-brand-gold",
  },
  {
    quote:
      "CRC Public Relations has helped us generate major, ongoing, national exposure and ensure that our message is widely heard.",
    name: "Peter White AM",
    title: "Managing Director, Finance Brokers Association of Australia",
    borderColor: "border-navy",
  },
  {
    quote:
      "The invaluable customer relations support from CRC Public Relations helps ensure a high level of trust in, and growth for, our chain of more than 50 restaurants.",
    name: "Hamish Watson",
    title: "Director, Cafe 63",
    borderColor: "border-brand-gold",
  },
];

export function HomeTestimonials() {
  return (
    <section className="bg-off-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`bg-white p-6 rounded-lg border-l-[3px] ${t.borderColor}`}
            >
              <p className="font-sans italic text-charcoal text-[15px] leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="font-sans font-medium text-navy text-sm mt-4">
                {t.name}
              </p>
              <p className="text-charcoal-mid text-xs">{t.title}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-[15px]">
          <span className="font-sans italic text-charcoal-mid">
            100% of our consulting clients would recommend CRC PR to a peer.
          </span>{" "}
          <span className="font-sans text-charcoal-mid">
            — CRC PR Client Survey
          </span>
        </p>
      </div>
    </section>
  );
}
