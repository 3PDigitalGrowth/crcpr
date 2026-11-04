import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { A1Card } from "./insights";
import { formatDate } from "./format";

/** Article card without a photo: the words carry it. */
export function PostCard({ post }: { post: A1Card }) {
  return (
    <Link href={post.href} className="group kit-r flex h-full flex-col border border-line p-6 transition-colors hover:border-[var(--accent)]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">{post.category}</p>
      <h3 className="mt-3 text-lg font-bold leading-snug">{post.title}</h3>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
      <p className="mt-auto flex items-center justify-between gap-4 pt-6 text-xs text-muted">
        <span>
          {formatDate(post.date)} &middot; {post.readMins} min read
        </span>
        <ArrowUpRight
          className="h-4 w-4 shrink-0 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden
        />
      </p>
    </Link>
  );
}

/** Lead article: one office photograph with a glass panel overlapping its edge. */
export function FeaturedPost({ post }: { post: A1Card }) {
  return (
    <Link href={post.href} className="group grid items-center lg:grid-cols-[1.1fr,1fr]">
      <div className="kit-r relative aspect-[3/2] overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          priority
          sizes="(min-width: 1024px) 600px, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="relative z-10 mx-4 -mt-14 lg:mx-0 lg:-ml-16 lg:mt-0">
        <div className="glass-strong kit-r p-6 md:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">{post.category}</p>
          <h2 className="kit-display mt-3 text-[clamp(1.35rem,2.2vw,1.85rem)] leading-[1.12]">{post.title}</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">{post.excerpt}</p>
          <p className="mt-5 text-xs text-muted">
            {post.author} &middot; {formatDate(post.date)} &middot; {post.readMins} min read
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
            Read
            <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" aria-hidden />
          </span>
        </div>
      </div>
    </Link>
  );
}
