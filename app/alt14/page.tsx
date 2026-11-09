import type { Metadata } from "next";
import { Alt14Home } from "@/components/altkit/Alt14Home";
import { CONCEPTS } from "@/components/altkit/concepts";
import { getA1Posts, toCard } from "@/components/altkit/insights";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Alt 14 Private Office | CRC PR homepage concepts",
};

export default function PrivateOfficePage() {
  return <Alt14Home posts={getA1Posts(CONCEPTS.alt14.base).map(toCard)} />;
}
