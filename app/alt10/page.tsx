import type { Metadata } from "next";
import { Alt10 } from "@/components/alt/Alt10";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Alt 10 | CRC PR homepage concepts",
};

export default function Alt10Page() {
  return <Alt10 />;
}
