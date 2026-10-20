import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { A1Card } from "./insights";
import { formatDate } from "./format";

export function PostCard({ post, sizes = "(min-width: 768px) 30vw, 90vw" }: { post: A1Card; sizes?: string }) {
  return (
    <Link href={post.href} className="group flex h-full flex-col">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[22px]">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />
        <span className="glass-photo absolute left-3 top-3 rounded-full px-3 py-1.5 text-[11px] font-semibold">
          {post.category}
        </span>
      </div>
      <p className="mt-5 text-xs text-muted">
        {formatDate(post.date)} &middot; {post.readMins} min read
      </p>
      <h3 className="mt-2 text-xl font-bold leading-snug transition-colors group-hover:text-accent">{post.title}</h3>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold">
        Read
        <ArrowUpRight className="h-4 w-4 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
      </span>
    </Link>
  );
}

/** Lead article: wide photo with a glass panel overlapping its edge. */
export function FeaturedPost({ post }: { post: A1Card }) {
  return (
    <Link href={post.href} className="group grid items-center lg:grid-cols-[1.25fr,1fr]">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[28px]">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          priority
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <div className="relative z-10 mx-4 -mt-16 lg:mx-0 lg:-ml-20 lg:mt-0">
        <div className="glass-strong rounded-[28px] p-7 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{post.category}</p>
          <h2 className="font-display mt-4 text-[clamp(1.6rem,2.8vw,2.5rem)] leading-[1.06]">{post.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{post.excerpt}</p>
          <p className="mt-6 text-xs text-muted">
            {post.author} &middot; {formatDate(post.date)} &middot; {post.readMins} min read
          </p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
            Read
            <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" aria-hidden />
          </span>
        </div>
      </div>
    </Link>
  );
}
