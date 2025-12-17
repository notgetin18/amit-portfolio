import Services from '@/components/services/serviceHero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "MERN Stack & Digital Marketing Services | Amit Kumar",  // Excellent – root template appends "| Amit Kumar Portfolio"
  description:
    "Amit Kumar offers expert MERN full-stack development, digital marketing, and cloud DevOps services. From React/Next.js frontends to scalable Node.js backends and strategic SEO, I deliver end-to-end solutions for projects of any scale.",
  keywords: [
    "MERN stack",
    "Full-stack developer",
    "React developer",
    "Next.js developer",
    "Node.js",
    "API Development",
    "Digital Marketing",
    "SEO Strategy",
    "Social Media Advertising",
    "Cloud DevOps",
    "AWS",
    "React Native",
    "Freelance Developer",
    "Amit Kumar",
  ],
  authors: [{ name: "Amit Kumar" }],
  alternates: {  // ADD THIS – critical for canonical tag output
    canonical: "https://www.amitdevjourney.xyz/services",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {  // ADD full OG block for better social sharing
    title: "MERN Stack & Digital Marketing Services | Amit Kumar",
    description:
      "Amit Kumar offers expert MERN full-stack development, digital marketing, and cloud DevOps services. From React/Next.js frontends to scalable Node.js backends and strategic SEO.",
    url: "https://www.amitdevjourney.xyz/services",
    siteName: "Amit Kumar Portfolio",
    images: [
      {
        url: "/og-image.jpg",  // Reuse your existing OG image
        width: 1200,
        height: 630,
        alt: "Amit Kumar Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {  // ADD for X/Twitter card support
    card: "summary_large_image",
    title: "MERN Stack & Digital Marketing Services | Amit Kumar",
    description:
      "Expert MERN full-stack development, digital marketing, and DevOps services by Amit Kumar.",
    images: ["/og-image.jpg"],
  },
};

export default Services;