import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/navbar";
import HeroBackground from "@/components/ui/HeroBackground";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amitdevjourney.xyz/"),
  title: {
    default: "Amit Kumar | MERN Full-Stack Developer & Portfolio",
    template: "%s | Amit Kumar Portfolio",
  },
  description:
    "Amit Kumar — MERN Full‑Stack developer. I build production-grade web apps (React, Next.js, Node, Express, MongoDB) — shipped healthcare SaaS, real-time EdTech, and consumer apps with 1M+ users. Explore case studies and the dev journey.",
  keywords:
    "Amit Kumar, MERN, full stack developer, React, Next.js, Node.js, Express, MongoDB, TypeScript, JavaScript, SaaS, healthcare SaaS, EdTech, real-time, 1M+ users, portfolio, freelance, India",
  authors: [{ name: "Amit Kumar" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: "/favicons/favicon.ico", type: "image/x-icon" },
      { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicons/favicon.ico",
    apple: "/favicons/apple-touch-icon.png",
    other: [
      {
        rel: "manifest",
        url: "/favicons/site.webmanifest",
      },
    ],
  },
  openGraph: {
    title: "Amit Kumar | MERN Stack Developer Portfolio",
    description:
      "Amit Kumar — Full stack MERN developer. Built production SaaS, real-time platforms and consumer products (1M+ users). Explore case studies, architecture, and product-first engineering.",
    url: "https://www.amitdevjourney.xyz/",
    siteName: "Amit Kumar Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amit Kumar Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amit Kumar | MERN Stack Developer Portfolio",
    description:
      "Amit Kumar, MERN stack developer, specializes in JavaScript and its frameworks, building scalable web apps with React, Node.js, and MongoDB. Explore my portfolio!",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#061025" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sora.variable}>
      <body className="bg-black">
        <div className="flex justify-center ">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
