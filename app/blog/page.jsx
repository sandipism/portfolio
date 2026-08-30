import { SectionWrapper, SectionHeading } from "@/components/Section";
import BlogList from "@/components/BlogList";
import { BLOG_CATEGORIES } from "@/lib/blog/posts";
import { getAllBlogPosts } from "@/lib/blog/posts";

export const metadata = {
  title: "Blog",
  description:
    "Technical articles and insights from Sandip Acharya on disaster risk reduction, flood risk management, resilient infrastructure, GIS & remote sensing, civil engineering, and post-disaster recovery.",
};

export const dynamic = "force-static";

export default async function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <SectionWrapper id="blog">
      <SectionHeading
        eyebrow="Blog"
        title="Insights & Articles"
        description="Technical articles and field insights on disaster risk reduction, flood risk, resilient infrastructure, GIS, engineering, and post-disaster recovery."
      />

      <div className="mt-12">
        <BlogList posts={posts} />
      </div>

      {posts.length === 0 && (
        <div className="mx-auto mt-12 max-w-2xl rounded-lg border border-ink-800 bg-ink-900/60 p-6">
          <h2 className="text-lg font-semibold text-ink-50">
            Article categories planned
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-300">
            Articles will be published across the following themes. Each article
            is added as a Markdown file in the project — no code changes needed.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {BLOG_CATEGORIES.map((cat) => (
              <li
                key={cat}
                className="rounded-full border border-ink-700 bg-ink-800/70 px-3 py-1 text-sm text-ink-200"
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>
      )}
    </SectionWrapper>
  );
}
