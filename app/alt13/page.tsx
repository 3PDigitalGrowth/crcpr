import type { Metadata } from "next";
import { Alt13Home } from "@/components/altkit/Alt13Home";
import { CONCEPTS } from "@/components/altkit/concepts";
import { getA1Posts, toCard } from "@/components/altkit/insights";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Alt 13 Letterhead | CRC PR homepage concepts",
};

export default function LetterheadPage() {
  return <Alt13Home posts={getA1Posts(CONCEPTS.alt13.base).map(toCard)} />;
}
