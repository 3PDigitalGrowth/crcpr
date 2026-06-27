import type { Metadata } from "next";
import { Instrument_Serif, Hanken_Grotesk } from "next/font/google";
import { RedesignHomeV2 } from "@/components/redesign/v2/RedesignHomeV2";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    absolute: "Home redesign concept | CRC Public Relations",
  },
  description:
    "New-age visual concept for the CRC Public Relations home page. Internal preview.",
  robots: { index: false, follow: false },
};

export default function RedesignPreviewPage() {
  return (
    <div className={`${display.variable} ${bodyFont.variable}`}>
      <RedesignHomeV2 />
    </div>
  );
}
