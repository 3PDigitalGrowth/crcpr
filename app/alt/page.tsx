import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Homepage concepts | CRC PR",
};

const concepts = [
  { n: 1, name: "Signal", note: "Ink black, paper white, signal red. Big editorial type, marquee energy." },
  { n: 2, name: "Chambers", note: "Dark espresso frame, warm cream inner, numbered practice flow." },
  { n: 3, name: "Ember", note: "Charcoal ground, burnt orange accents, card-led services." },
  { n: 4, name: "Broadsheet", note: "Strict black and white corporate, step-by-step structure." },
  { n: 5, name: "Silhouette", note: "Black and crimson, backlit team panels, cinematic proof." },
  { n: 6, name: "Porcelain", note: "Soft cream, leather bronze, elegant serif, people-first." },
  { n: 7, name: "Monochrome", note: "Fashion-editorial black and white, oversized wordmark hero." },
  { n: 8, name: "Amplitude", note: "Giant display type interleaved with photography, stat band." },
  { n: 9, name: "Gallery", note: "Warm sand, product-editorial calm, partner logo band, badge motif." },
  { n: 10, name: "Fog", note: "Cool off-white, ink type cropped off-canvas, periwinkle glass." },
  { n: 11, name: "Nightdesk", note: "Pure black, white grotesk headlines, full-bleed photography." },
  { n: 12, name: "Wire", note: "Near black, acid lime micro-accents, numbered service ledger." },
];

export default function AltIndex() {
  return (
    <main className="min-h-screen bg-[#111111] px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F1AF32]">
          CRC Public Relations
        </p>
        <h1 className="mt-3 text-4xl font-bold">Homepage concepts</h1>
        <p className="mt-3 text-sm text-white/60">
          Twelve directions, one per reference. Approved copy only; fresh
          palette per concept. Internal review only, not indexed.
        </p>
        <ol className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {concepts.map((c) => (
            <li key={c.n}>
              <Link
                href={`/alt${c.n}`}
                className="group flex items-baseline gap-6 py-4 transition-colors hover:bg-white/5"
              >
                <span className="w-14 shrink-0 font-mono text-sm text-white/40">
                  /alt{c.n}
                </span>
                <span className="w-32 shrink-0 font-semibold group-hover:text-[#F1AF32]">
                  {c.name}
                </span>
                <span className="text-sm text-white/55">{c.note}</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
