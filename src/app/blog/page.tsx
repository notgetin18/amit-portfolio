import { Blog } from "@/components/blogs/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Blog | Amit Kumar - MERN Stack Developer",  // Perfect – becomes "Tech Blog | Amit Kumar - MERN Stack Developer | Amit Kumar Portfolio"
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
    canonical: "https://www.amitdevjourney.xyz/blog",  // Critical – ensures correct canonical tag output
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
      "Explore insightful articles, tutorials, and case studies on MERN stack, performance optimization, and modern web development from Amit Kumar's tech blog. Stay updated with the latest trends and best practices.",  // ADD: Was empty – now matches page description for better shares
    url: "https://www.amitdevjourney.xyz/blog",
    siteName: "Amit Kumar Portfolio",
    images: [
      {
        url: "/og-image.jpg",  // Use your existing root OG image (or add a blog-specific one later)
        width: 1200,
        height: 630,
        alt: "Amit Kumar Tech Blog",
      },
    ],
    locale: "en_IN",  // ADD: Matches root layout for consistency
    type: "website",
  },
  twitter: {  // ADD entire twitter object – missing completely before
    card: "summary_large_image",
    title: "Tech Blog | Amit Kumar - MERN Stack Developer",
    description:
      "Explore insightful articles, tutorials, and case studies on MERN stack, performance optimization, and modern web development from Amit Kumar's tech blog.",
    images: ["/og-image.jpg"],
  },
};

export default Blog;