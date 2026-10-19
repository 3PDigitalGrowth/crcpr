import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";

/* Utility face for dates, status stamps and the run-sheet details. Display
   and body faces (Instrument Serif, Hanken Grotesk) come from the root. */
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Forward planner | CRC Public Relations",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default function PlanLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${mono.variable} planner min-h-screen bg-[#F5F2EC] text-[#3D3D3D]`}>
      {children}
    </div>
  );
}
