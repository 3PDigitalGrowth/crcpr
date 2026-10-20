import { Archivo_Black, Hanken_Grotesk } from "next/font/google";

/** Wide, heavy display face (the client asked for nothing tall or skinny). */
export const displayFont = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--a1-display",
});

export const bodyFont = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--a1-body",
});
