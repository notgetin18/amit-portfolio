import { Metadata } from "next";
import AboutUs from "@/components/aboutUs/aboutUs";

export const metadata: Metadata = {
  title: "Amit Kumar | About Me - MERN Stack Developer",
  description:
    "Learn more about Amit Kumar, a MERN stack developer with expertise in JavaScript, React, Node.js, and MongoDB. Discover my journey, skills, and experience in building scalable web applications as a freelancer in Delhi, India.",
  keywords:
    "Amit Kumar, MERN stack, web developer, about, freelance, React, Node.js, MongoDB, JavaScript, TypeScript, Delhi, India, portfolio",
  openGraph: {
    title: "Amit Kumar | About Me - MERN Stack Developer",
    description:
      "Learn more about Amit Kumar, a MERN stack developer with expertise in JavaScript, React, Node.js, and MongoDB.",
    url: "https://www.amitdevjourney.xyz/about",
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
    title: "Amit Kumar | About Me - MERN Stack Developer",
    description:
      "Learn more about Amit Kumar, a MERN stack developer with expertise in JavaScript, React, Node.js, and MongoDB.",
    images: ["/og-image.jpg"],
  },
};

export default function AboutUsPage() {
  return (
    <>
      <AboutUs />
    </>
  );
}
