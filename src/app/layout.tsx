import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amitdevjourney.xyz/"), 
  title: "Amit Kumar | MERN Stack Developer & Portfolio",
  description:
    "Amit Kumar, MERN stack developer, specializes in JavaScript and its frameworks, building scalable web apps with React, Node.js, and MongoDB. Explore my portfolio!",
  keywords:
    "Amit Kumar, MERN stack, web developer, Full stack developer, React, Node.js, MongoDB, Next.js, TypeScript, JavaScript, portfolio",
  authors: [{ name: "Amit Kumar" }],
  openGraph: {
    title: "Amit Kumar | MERN Stack Developer Portfolio",
    description:
      "Amit Kumar, MERN stack developer, specializes in JavaScript and its frameworks, building scalable web apps with React, Node.js, and MongoDB. Explore my portfolio!",
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
  maximumScale: 1.25,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
