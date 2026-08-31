import type { Metadata } from "next";
import { Alt3 } from "@/components/alt/Alt3";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Alt 3 | CRC PR homepage concepts",
};

export default function Alt3Page() {
  return <Alt3 />;
}
