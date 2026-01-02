import { Blog } from "@/components/blogs/blog";
import type { Metadata } from "next";
import { client } from "@/lib/sanity";
import { postsQuery } from "@/lib/sanity.queries";

export const revalidate = 1500; // revalidate every 15 minutes

export const metadata: Metadata = {
  title: "Tech Blog | Amit Kumar - MERN Stack Developer",
  description:
    "Explore insightful articles, tutorials, and case studies on MERN stack, performance optimization, and modern web development from Amit Kumar's tech blog. Stay updated with the latest trends and best practices.",
  keywords: [
    "MERN stack",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "Web Development",
    "Tech Blog",
    "Performance Optimization",
    "Full-stack Developer",
    "Amit Kumar",
  ],
  authors: [{ name: "Amit Kumar" }],
  alternates: {
    canonical: "https://www.amitdevjourney.xyz/blog",
    languages: {
      "en-US": "https://www.amitdevjourney.xyz/blog",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Tech Blog | Amit Kumar - MERN Stack Developer",
    description:
      "Explore insightful articles, tutorials, and case studies on MERN stack, performance optimization, and modern web development from Amit Kumar's tech blog. Stay updated with the latest trends and best practices.",
    url: "https://www.amitdevjourney.xyz/blog",
    siteName: "Amit Kumar Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amit Kumar Tech Blog",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Blog | Amit Kumar - MERN Stack Developer",
    description:
      "Explore insightful articles, tutorials, and case studies on MERN stack, performance optimization, and modern web development from Amit Kumar's tech blog.",
    images: ["/og-image.jpg"],
  },
};

export default async function BlogPage() {
  const posts = await client.fetch(postsQuery);
  return <Blog initialPosts={posts} />;
}