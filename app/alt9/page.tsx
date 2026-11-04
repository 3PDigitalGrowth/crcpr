import type { Metadata } from "next";
import { Alt9Home } from "@/components/altkit/Alt9Home";
import { CONCEPTS } from "@/components/altkit/concepts";
import { getA1Posts, toCard } from "@/components/altkit/insights";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Alt 9 Gallery | CRC PR homepage concepts",
};

export default function GalleryPage() {
  return <Alt9Home posts={getA1Posts(CONCEPTS.alt9.base).map(toCard)} />;
}
