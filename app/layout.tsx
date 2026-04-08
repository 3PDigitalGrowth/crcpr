import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/shared/MobileCallBar";
import { DesktopStickyBar } from "@/components/layout/DesktopStickyBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crcpr.com.au"),
  title: {
    template: "%s | CRC Public Relations",
    default: "CRC Public Relations | Corporate PR, Reputation & Crisis Advisory",
  },
  description:
    "CRC Public Relations is a boutique corporate PR firm trusted by CEOs, directors, and senior executives across Australia, the Pacific, and internationally. Corporate communications, reputation management, crisis response, and media training.",
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
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <body className="font-sans antialiased">
        <Nav />
        <DesktopStickyBar />
        <main>{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
