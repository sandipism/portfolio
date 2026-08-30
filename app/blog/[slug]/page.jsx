import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  getBlogPost,
  getAllBlogPosts,
  BLOG_CATEGORIES,
} from "@/lib/blog/posts";
import { siteUrl } from "@/lib/metadata";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const description = post.excerpt || `Article on ${post.category}.`;

  return {
    title: post.title,
    description,
    openGraph: {
      title: post.title,
      description,
      type: "article",
      url: `${siteUrl}/blog/${post.slug}`,
      publishedTime: post.date,
      tags: post.tags,
      section: post.category,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const allPosts = getAllBlogPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const prev = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const next =
    currentIndex >= 0 && currentIndex < allPosts.length - 1
      ? allPosts[currentIndex + 1]
      : null;
  const related = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  return (
    <article className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-400">
        <Link href="/blog" className="transition-colors hover:text-resilience-300">
          Blog
        </Link>
        <span className="mx-2 text-ink-600" aria-hidden="true">
          /
        </span>
        <span className="text-ink-300">{post.category}</span>
      </nav>

      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-semibold text-resilience-400 transition-colors hover:text-resilience-300"
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Back to Blogs
      </Link>

      <header className="mt-6">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          {post.category && (
            <span className="rounded-full border border-resilience-500/30 bg-resilience-500/10 px-3 py-0.5 font-semibold text-resilience-300">
              {post.category}
            </span>
          )}
          {post.featured && (
            <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-0.5 font-semibold text-amber-300">
              Featured
            </span>
          )}
        </div>
        <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
          {post.title}
        </h1>
        {post.excerpt && (
          <p className="mt-4 text-lg leading-relaxed text-ink-300">
            {post.excerpt}
          </p>
        )}
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-ink-800 pb-6 text-sm text-ink-400">
          <span>By {post.author}</span>
          {post.formattedDate && (
            <>
              <span aria-hidden="true">·</span>
              <time dateTime={post.date}>{post.formattedDate}</time>
            </>
          )}
          <span aria-hidden="true">·</span>
          <span>{post.readingTime}</span>
        </div>
      </header>

      {post.coverImage && (
        <figure className="mt-6">
          <img
            src={post.coverImage}
            alt={post.coverImageAlt || post.title}
            className="w-full rounded-lg"
          />
          {post.coverImageCaption && (
            <figcaption className="caption">{post.coverImageCaption}</figcaption>
          )}
        </figure>
      )}

      <div className="prose-article mt-8">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>

      {post.tags && post.tags.length > 0 && (
        <div className="mt-10 flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-ink-400">Tags:</span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-ink-700 bg-ink-800/70 px-3 py-1 text-xs text-ink-200"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Previous / Next */}
      {(prev || next) && (
        <nav
          aria-label="Blog post navigation"
          className="mt-10 grid gap-4 border-t border-ink-800 pt-6 sm:grid-cols-2"
        >
          {prev ? (
            <Link
              href={`/blog/${prev.slug}`}
              className="group rounded-lg border border-ink-800 bg-ink-900/50 p-5 transition-colors hover:border-resilience-500/50"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                Previous
              </p>
              <p className="mt-1 font-semibold text-ink-50 transition-colors group-hover:text-resilience-300">
                {prev.title}
              </p>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={`/blog/${next.slug}`}
              className="group rounded-lg border border-ink-800 bg-ink-900/50 p-5 text-right transition-colors hover:border-resilience-500/50"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                Next
              </p>
              <p className="mt-1 font-semibold text-ink-50 transition-colors group-hover:text-resilience-300">
                {next.title}
              </p>
            </Link>
          )}
        </nav>
      )}

      {/* Related articles */}
      {related.length > 0 && (
        <div className="mt-10">
          <h2 className="text-lg font-semibold text-ink-50">Related articles</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="group rounded-lg border border-ink-800 bg-ink-900/50 p-5 transition-colors hover:border-resilience-500/50"
              >
                <span className="text-xs text-resilience-300">{r.category}</span>
                <p className="mt-1 font-semibold text-ink-50 transition-colors group-hover:text-resilience-300">
                  {r.title}
                </p>
                <p className="mt-1 text-xs text-ink-400">{r.readingTime}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
