import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "content", "blog");

export const BLOG_CATEGORIES = [
  "Disaster Risk Reduction",
  "Flood Risk",
  "Resilient Infrastructure",
  "GIS & Remote Sensing",
  "Civil Engineering",
  "Post-Disaster Recovery",
  "Research",
  "Field Notes",
  "Data & Analysis",
];

function readingTime(content) {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export function getBlogSlugs() {
  if (!fs.existsSync(blogDirectory)) return [];
  return fs
    .readdirSync(blogDirectory)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

export function getBlogPost(slug) {
  const fullPath = path.join(blogDirectory, `${slug}.md`);
  const mdxPath = path.join(blogDirectory, `${slug}.mdx`);
  const source = fs.existsSync(fullPath)
    ? fullPath
    : fs.existsSync(mdxPath)
    ? mdxPath
    : null;
  if (!source) return null;

  const fileContents = fs.readFileSync(source, "utf8");
  const { data, content } = matter(fileContents);

  const frontmatter = {
    title: data.title || slug,
    slug: data.slug || slug,
    excerpt: data.excerpt || "",
    date: data.date ? new Date(data.date).toISOString() : null,
    category: data.category || "Uncategorized",
    tags: data.tags || [],
    coverImage: data.coverImage || null,
    featured: Boolean(data.featured),
    author: data.author || "Sandip Acharya",
  };

  const rawDate = data.date;
  const formattedDate = formatted(rawDate);
  const dateISO = rawDate ? new Date(rawDate).toISOString() : null;

  return {
    ...frontmatter,
    rawDate,
    date: dateISO,
    formattedDate,
    readingTime: readingTime(content),
    content,
  };
}

function formatted(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (isNaN(d)) return String(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getAllBlogPosts() {
  const slugs = getBlogSlugs();
  const posts = slugs
    .map((slug) => getBlogPost(slug))
    .filter(Boolean)
    .sort((a, b) => {
      const da = a.rawDate ? new Date(a.rawDate).getTime() : 0;
      const db = b.rawDate ? new Date(b.rawDate).getTime() : 0;
      return db - da;
    });
  return posts;
}
