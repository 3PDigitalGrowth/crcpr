import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Homepage design concepts | CRC Public Relations",
};

type Shortlisted = {
  n: number;
  name: string;
  description: string;
  fonts: string;
  palette: string[];
};

/* The four directions Lyall shortlisted (20 Oct 2026), each built out. */
const shortlist: Shortlisted[] = [
  {
    n: 1,
    name: "Signal",
    description:
      "Ink and white with your logo blue as the one accent. Strong capital headlines, quiet outlined words behind each section and frosted glass panels.",
    fonts: "Archivo Black headings, Hanken Grotesk body",
    palette: ["#0B1220", "#FFFFFF", "#1C74BC"],
  },
  {
    n: 2,
    name: "Chambers",
    description:
      "The page sits inside a navy frame like a mounted print. Numbered practice areas, editorial lists for outcomes and articles, the calmest of the four.",
    fonts: "Archivo headings, Hanken Grotesk body",
    palette: ["#0F1B2D", "#F5F3EF", "#1C74BC"],
  },
  {
    n: 3,
    name: "Ember",
    description:
      "Dark rounded panels with blue light behind them. Everything sits in its own card, with small round portraits of you both.",
    fonts: "Sora headings, Hanken Grotesk body",
    palette: ["#0E1218", "#171E28", "#1C74BC"],
  },
  {
    n: 9,
    name: "Gallery",
    description:
      "White and pale blue bands, light tracked capitals and a centred layout. Reordered so it reads who you are, what you do, why you, then the people.",
    fonts: "Figtree headings, Hanken Grotesk body",
    palette: ["#FFFFFF", "#EEF3F8", "#141414"],
  },
];

const pages = [
  { label: "Home page", path: "" },
  { label: "Insights", path: "/insights" },
  { label: "Article", path: "/insights/what-your-board-needs-to-know-about-reputation-risk" },
  { label: "Crisis communications", path: "/services/crisis-communications" },
];

const others = [
  { n: 4, name: "Broadsheet", mood: "Strict corporate mono" },
  { n: 5, name: "Silhouette", mood: "Cinematic theatre" },
  { n: 6, name: "Porcelain", mood: "Elegant advisory" },
  { n: 10, name: "Fog", mood: "Modern glass" },
  { n: 11, name: "Nightdesk", mood: "Statement scroll" },
  { n: 12, name: "Wire", mood: "Technical precision" },
];

export default function AltIndex() {
  return (
    <main className="min-h-screen bg-[#F4F2EE] px-4 py-12 text-[#16150F] sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A8478]">CRC Public Relations</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Your four shortlisted directions.</h1>
          <p className="mt-4 text-[15px] leading-relaxed text-[#57534A]">
            Each direction is built out as four working pages in your logo blue, with your new photography used
            sparingly and no video. Every page has a Dark and White switch in the bottom corner. The wording is your
            existing approved copy. These pages are private: hidden from Google and from site visitors.
          </p>
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {shortlist.map((c) => (
            <section key={c.n} className="flex flex-col overflow-hidden rounded-2xl border border-[#E2DED6] bg-white shadow-sm">
              <Link href={`/alt${c.n}`} className="group relative block aspect-[16/10] overflow-hidden border-b border-[#E2DED6] bg-[#EAE7E1]">
                <Image
                  src={`/images/alt/thumbs/alt${c.n}.jpg`}
                  alt={`Concept ${c.n}, ${c.name}, home page`}
                  fill
                  sizes="(min-width: 768px) 540px, 92vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </Link>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h2 className="text-lg font-bold">
                  <span className="mr-2 font-mono text-sm font-normal text-[#8A8478]">{String(c.n).padStart(2, "0")}</span>
                  {c.name}
                </h2>
                <p className="mt-2 text-[14px] leading-relaxed text-[#57534A]">{c.description}</p>
                <div className="mt-3 flex items-center gap-1.5">
                  {c.palette.map((hex) => (
                    <span key={hex} className="h-3.5 w-3.5 rounded-full border border-black/10" style={{ backgroundColor: hex }} title={hex} />
                  ))}
                  <span className="ml-2 text-[11px] text-[#8A8478]">{c.fonts}</span>
                </div>
                <ul className="mt-5 divide-y divide-[#EEEBE5] border-y border-[#EEEBE5] text-[14px]">
                  {pages.map((p) => (
                    <li key={p.label} className="flex items-center justify-between gap-4 py-2.5">
                      <span className="font-semibold">{p.label}</span>
                      <span className="flex gap-2">
                        <Link
                          href={`/alt${c.n}${p.path}?theme=dark`}
                          className="rounded-full bg-[#0B1220] px-3 py-1 text-[12px] font-semibold text-white"
                        >
                          Dark
                        </Link>
                        <Link
                          href={`/alt${c.n}${p.path}?theme=white`}
                          className="rounded-full border border-[#1C74BC] px-3 py-1 text-[12px] font-semibold text-[#1C74BC]"
                        >
                          White
                        </Link>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>

        <h2 className="mt-16 text-sm font-semibold uppercase tracking-[0.2em] text-[#8A8478]">Earlier concepts</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((c) => (
            <Link
              key={c.n}
              href={`/alt${c.n}`}
              className="group flex items-center gap-4 overflow-hidden rounded-xl border border-[#E2DED6] bg-white p-3 transition-shadow hover:shadow-md"
            >
              <span className="relative block aspect-[16/10] w-28 shrink-0 overflow-hidden rounded-lg bg-[#EAE7E1]">
                <Image src={`/images/alt/thumbs/alt${c.n}.jpg`} alt="" fill sizes="112px" className="object-cover object-top" />
              </span>
              <span>
                <span className="block text-[15px] font-bold">
                  <span className="mr-1.5 font-mono text-xs font-normal text-[#8A8478]">{String(c.n).padStart(2, "0")}</span>
                  {c.name}
                </span>
                <span className="block text-[12px] text-[#8A8478]">{c.mood}</span>
              </span>
            </Link>
          ))}
        </div>

        <footer className="mt-14 border-t border-[#E2DED6] pt-6 text-[12px] text-[#8A8478]">
          <p>Prepared for Lyall and Barbara, CRC Public Relations.</p>
        </footer>
      </div>
    </main>
  );
}
