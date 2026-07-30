import type { Metadata } from "next";
import { Hanken_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/layout/AppShell";

/* Editorial display serif. Roman only — the italic face is deliberately not
   loaded (client direction: no cursive anywhere on the site). */
const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  variable: "--font-display",
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crcpr.com.au"),
  title: {
    template: "%s | CRC Public Relations",
    default: "CRC Public Relations | Corporate PR, Reputation & Crisis Advisory",
  },
  description:
    "CRC Public Relations is a boutique corporate PR firm trusted by CEOs, directors, and executives across Australia, the Pacific, and internationally. Corporate communications, reputation management, crisis response, and media training.",
  openGraph: {
    siteName: "CRC Public Relations",
    locale: "en_AU",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
