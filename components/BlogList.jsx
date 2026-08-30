"use client";

import { useState } from "react";
import Link from "next/link";

export default function BlogList({ posts }) {
  const [active, setActive] = useState("All");

  const categories = ["All", ...new Set(posts.map((p) => p.category))];
  const filtered =
    active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter blog posts by category"
      >
        {categories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                isActive
                  ? "border-resilience-500 bg-resilience-600 text-white"
                  : "border-ink-700 bg-ink-900/60 text-ink-200 hover:border-resilience-500/50 hover:text-resilience-300"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-ink-300">
          No articles published in this category yet. Check back soon.
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-lg border border-ink-800 bg-ink-900/60 transition-colors hover:border-resilience-500/50"
            >
              {post.coverImage ? (
                <div className="relative aspect-[16/9] overflow-hidden bg-ink-800">
                  <img
                    src={post.coverImage}
                    alt={post.coverImageAlt || post.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div
                  className="grid-pattern flex aspect-[16/9] items-center justify-center overflow-hidden bg-ink-800/50"
                  aria-hidden="true"
                >
                  <svg
                    className="h-12 w-12 text-resilience-500/40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="M10 9H8" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                  </svg>
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded-full border border-resilience-500/30 bg-resilience-500/10 px-2.5 py-0.5 font-semibold text-resilience-300">
                    {post.category}
                  </span>
                  {post.featured && (
                    <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 py-0.5 font-semibold text-amber-300">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="mt-3 text-base font-semibold leading-snug text-ink-50 transition-colors group-hover:text-resilience-300">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">
                    {post.excerpt}
                  </p>
                )}
                <div className="mt-4 flex items-center gap-2 text-xs text-ink-400">
                  {post.formattedDate && <span>{post.formattedDate}</span>}
                  <span aria-hidden="true">·</span>
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
