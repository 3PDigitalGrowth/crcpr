import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1A2B4A",
        "navy-mid": "#253D62",
        "brand-gold": "#C9A84C",
        "gold-light": "#F5EDD4",
        "brand-teal": "#07AFBB",
        charcoal: "#2C2C2C",
        "charcoal-mid": "#4A4A4A",
        "off-white": "#F5F2EC",
        "brand-border": "#E5E5E5",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [typography],
};
export default config;
