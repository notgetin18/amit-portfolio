import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amitdevjourney.xyz/"),
  title: "Amit Kumar | Full Stack Developer & Portfolio",
  description:
    "Amit Kumar, Full stack developer, specializes in JavaScript and its frameworks, building scalable web apps with React, Node.js, Express.js and MongoDB. Explore my portfolio!",
  keywords:
    "Amit Kumar, MERN stack, web developer, Full stack developer, React, Node.js, Express js, MongoDB, Next.js, TypeScript, JavaScript, portfolio, freelance, India",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Head>
        <link
          rel="icon"
          type="image/png"
          href="/favicons/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </Head> */}
      <body className={inter.className}>
        <div className="flex justify-center ">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
