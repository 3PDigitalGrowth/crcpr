import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Homepage design concepts | CRC Public Relations",
};

type Concept = {
  n: number;
  name: string;
  mood: string;
  description: string;
  fonts: string;
  palette: string[];
};

const concepts: Concept[] = [
  {
    n: 1,
    name: "Signal",
    mood: "Bold editorial",
    description:
      "Black and white with one disciplined red accent. Oversized ghost words (TRUST, RESULTS, ADVISERS) sit behind each section, greyscale photography and a scrolling media strip give it newsroom energy while the layout stays strict and corporate.",
    fonts: "Archivo Black headings, Hanken Grotesk body",
    palette: ["#0A0A0A", "#F7F6F3", "#E02B20"],
  },
  {
    n: 2,
    name: "Chambers",
    mood: "Warm gallery calm",
    description:
      "The whole page sits inside a dark espresso frame like a mounted print. Giant capital headlines, a numbered practice stack, and a four card team row put the people and the flow of who you are front and centre. The quietest, most considered read of the set.",
    fonts: "Archivo headings, Hanken Grotesk body",
    palette: ["#191512", "#EDE8DF", "#7A2E22"],
  },
  {
    n: 3,
    name: "Ember",
    mood: "Dark premium warmth",
    description:
      "Warm charcoal cards with burnt orange accents and a duotone portrait treatment. Everything lives in large rounded panels with generous breathing room, case studies become a photo gallery and the orange is saved for moments that matter.",
    fonts: "Sora headings, Hanken Grotesk body",
    palette: ["#141210", "#FF6B2C", "#F5F1EC"],
  },
  {
    n: 4,
    name: "Broadsheet",
    mood: "Strict corporate mono",
    description:
      "Pure black and white, square corners, hairline rules. Heavy capital headlines, a giant 01 02 03 walk through why boutique matters, and a two by two service grid. No colour, no softness, maximum authority. The most conservative option here.",
    fonts: "Archivo headings, Public Sans body",
    palette: ["#111111", "#FFFFFF", "#8A8A8A"],
  },
  {
    n: 5,
    name: "Silhouette",
    mood: "Cinematic theatre",
    description:
      "Black stage, crimson backlit panels, white type. The three practices stand as glowing equal panels and Lyall and Barbara appear in the same lit treatment. Moody and theatrical but disciplined, built for a firm comfortable in the spotlight.",
    fonts: "Space Grotesk headings, Hanken Grotesk body",
    palette: ["#0C0C0C", "#C8102E", "#FFFFFF"],
  },
  {
    n: 6,
    name: "Porcelain",
    mood: "Elegant advisory",
    description:
      "Soft cream, bronze accents and arched photo frames, led by a large portrait and a refined serif. The closest cousin to the My PR Partner site: warm, personal and unmistakably professional, with the people carrying the story.",
    fonts: "Fraunces headings, Hanken Grotesk body",
    palette: ["#F6F1EA", "#2B211A", "#8C6A4A"],
  },
  {
    n: 9,
    name: "Gallery",
    mood: "Light product calm",
    description:
      "White and warm sand bands, light tracked capitals, a rotating circular badge over the hero photograph and a case study carousel. Feels like a considered showroom: everything unhurried, everything in its place.",
    fonts: "Figtree headings, Hanken Grotesk body",
    palette: ["#FFFFFF", "#F1E9DC", "#141414"],
  },
  {
    n: 10,
    name: "Fog",
    mood: "Modern glass",
    description:
      "A giant cropped REPUTATION word band sits above the page, which floats as a rounded frame beneath it. Cool fog grey with soft periwinkle panels and glass blur details. The most contemporary, product grade treatment of the set.",
    fonts: "Sora headings, Hanken Grotesk body",
    palette: ["#EEF0F2", "#101114", "#B9C6F2"],
  },
  {
    n: 11,
    name: "Nightdesk",
    mood: "Statement scroll",
    description:
      "Pure black with a video hero and one approved sentence given a full screen moment at a time. The strongest answer to the flow question: the page reads top to bottom as a single story with no boxes competing for attention.",
    fonts: "Schibsted Grotesk throughout",
    palette: ["#000000", "#FFFFFF", "#8B8B85"],
  },
  {
    n: 12,
    name: "Wire",
    mood: "Technical precision",
    description:
      "Near black inside a thin floating frame, tiny mono labels, and services set as a numbered ledger with acid lime used only in small doses. Precise and systematic, for a firm that wants to signal rigour above warmth.",
    fonts: "Space Grotesk headings, Space Mono labels, Hanken Grotesk body",
    palette: ["#0B0B0B", "#D6FF3D", "#8B8B85"],
  },
];

export default function AltIndex() {
  return (
    <main className="min-h-screen bg-[#F4F2EE] px-6 py-14 text-[#16150F] sm:py-20">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A8478]">
            CRC Public Relations
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Ten homepage directions.
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-[#57534A]">
            Each concept below is a complete, working homepage built with your
            existing approved wording only. Every one runs its own colour
            palette, its own fonts and its own layout, with crisis given equal
            weight, statistics grouped once, and your new photography
            throughout. Open any card to browse the full page on desktop or
            mobile. These pages are private: hidden from Google and from site
            visitors.
          </p>
        </header>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map((c) => (
            <Link
              key={c.n}
              href={`/alt${c.n}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#E2DED6] bg-white shadow-sm transition-shadow hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16150F]"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-[#E2DED6] bg-[#EAE7E1]">
                <Image
                  src={`/images/alt/thumbs/alt${c.n}.jpg`}
                  alt={`Concept ${c.n}: ${c.name} homepage design`}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="text-lg font-bold">
                    <span className="mr-2 font-mono text-sm font-normal text-[#8A8478]">
                      {String(c.n).padStart(2, "0")}
                    </span>
                    {c.name}
                  </h2>
                  <span className="shrink-0 rounded-full border border-[#E2DED6] px-2.5 py-0.5 text-[11px] font-medium text-[#57534A]">
                    {c.mood}
                  </span>
                </div>
                <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-[#57534A]">
                  {c.description}
                </p>
                <div className="mt-4 border-t border-[#EEEBE5] pt-4">
                  <div className="flex items-center gap-1.5">
                    {c.palette.map((hex) => (
                      <span
                        key={hex}
                        className="h-4 w-4 rounded-full border border-black/10"
                        style={{ backgroundColor: hex }}
                        title={hex}
                      />
                    ))}
                    <span className="ml-2 text-[11px] uppercase tracking-[0.08em] text-[#8A8478]">
                      Palette
                    </span>
                  </div>
                  <p className="mt-2 text-[12px] text-[#8A8478]">{c.fonts}</p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#16150F]">
                  View concept
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <footer className="mt-16 border-t border-[#E2DED6] pt-6 text-[12px] text-[#8A8478]">
          <p>
            Prepared for Lyall and Barbara, CRC Public Relations. Choose the
            direction that feels right and the rest of the site will be rebuilt
            around that design language.
          </p>
        </footer>
      </div>
    </main>
  );
}
