import { getAllBlogPosts } from "@/lib/blog/posts";
import { siteUrl } from "@/lib/metadata";

const staticRoutes = [
  "",
  "/about",
  "/experience",
  "/projects",
  "/education",
  "/skills",
  "/blog",
  "/contact",
];

export default async function sitemap() {
  const posts = getAllBlogPosts();
  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: route === "" ? 1 : 0.7,
    })),
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    })),
  ];
}
