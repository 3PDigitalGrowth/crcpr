import type { Metadata } from "next";
import { Alt11 } from "@/components/alt/Alt11";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Alt 11 | CRC PR homepage concepts",
};

export default function Alt11Page() {
  return <Alt11 />;
}
