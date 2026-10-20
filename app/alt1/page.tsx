import type { Metadata } from "next";
import { Home } from "@/components/alt1/Home";
import { getA1Posts } from "@/components/alt1/insights";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Alt 1 | CRC PR homepage concepts",
};

export default function Alt1Page() {
  return <Home posts={getA1Posts()} />;
}
