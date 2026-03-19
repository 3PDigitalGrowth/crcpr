import Link from "next/link";
import { siteConfig } from "@/config/site";

export function HomeAbout() {
  return (
    <section className="bg-navy py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Portrait placeholder */}
          <div className="bg-navy-mid rounded-lg aspect-[3/4] max-w-[360px] flex items-center justify-center">
            <span className="text-white/20">Portrait placeholder</span>
          </div>

          {/* Bio */}
          <div>
            <p className="font-sans font-medium text-brand-teal text-xs tracking-[0.14em] uppercase">
              The Adviser Behind the Firm
            </p>
            <h2 className="text-white font-heading font-black text-3xl md:text-[42px] mt-3">
              Lyall Mercer
            </h2>
            <p className="text-brand-gold font-sans font-medium text-lg mt-2">
              {siteConfig.lyall.title}
            </p>

            <div className="text-white/75 text-base leading-relaxed mt-6 space-y-4">
              <p>
                Lyall Mercer began his career as a journalist, writing for some
                of Australia&rsquo;s leading newspapers. That foundation —
                understanding exactly how media thinks, moves, and decides what
                becomes a story — is what makes his approach to corporate
                communications and crisis advice unlike any other.
              </p>
              <p>
                Over the past 25 years, Lyall has built a reputation across
                Australasia as a leader in corporate public relations, reputation
                and issues management, and crisis communications. He has advised
                national and international companies, governments, senior
                executives, politicians, celebrities, and sporting figures — and
                has worked with clients and media on every continent.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-[3px] border-brand-gold pl-4 mt-6">
              <p className="font-sans italic text-white/85 text-base">
                &ldquo;{siteConfig.lyall.quote}&rdquo;
              </p>
              <p className="font-sans font-medium text-brand-gold text-sm mt-2">
                — Lyall Mercer
              </p>
            </blockquote>

            <div className="mt-6 space-y-2">
              <Link
                href="/about/lyall-mercer"
                className="text-brand-gold font-sans font-medium text-sm block hover:opacity-80 transition"
              >
                → Read Lyall&rsquo;s full profile
              </Link>
              <a
                href={siteConfig.lyall.mediaLinks[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-teal font-sans font-medium text-sm block hover:opacity-80 transition"
              >
                → View media appearances
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
