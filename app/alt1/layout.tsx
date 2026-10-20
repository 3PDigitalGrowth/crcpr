import type { Metadata } from "next";
import "./alt1.css";
import { bodyFont, displayFont } from "@/components/alt1/fonts";
import { Header, ThemeSwitch } from "@/components/alt1/chrome";
import { Footer } from "@/components/alt1/Footer";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

/* Runs before first paint so the white version never flashes ink. */
const themeScript = `(function(){try{var r=document.getElementById('a1-root');var q=new URLSearchParams(location.search).get('theme');var s=null;try{s=localStorage.getItem('a1-theme')}catch(e){}var t=(q==='white'||q==='dark')?q:s;if(q){try{localStorage.setItem('a1-theme',q)}catch(e){}}r.setAttribute('data-theme',t==='white'?'white':'dark');}catch(e){}})();`;

export default function Alt1Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="a1-root"
      data-theme="dark"
      suppressHydrationWarning
      className={`a1 ${displayFont.variable} ${bodyFont.variable} min-h-screen`}
    >
      <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      <Header />
      <main>{children}</main>
      <Footer />
      <ThemeSwitch />
    </div>
  );
}
