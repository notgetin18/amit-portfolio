import ContactUs from "@/components/contactUs/contactUs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Amit Kumar | Contact Me - MERN Stack Developer",
  description:
    "Get in touch with Amit Kumar, a MERN stack developer specializing in JavaScript, React, Node.js, and MongoDB. Reach out for freelance opportunities, project inquiries, or just to say hello. Based in Delhi, India.",
  keywords:
    "Amit Kumar, MERN stack, web developer, contact, freelance, React, Node.js, MongoDB, JavaScript, TypeScript, Delhi, India, portfolio",
  openGraph: {
    title: "Amit Kumar | Contact Me - MERN Stack Developer",
    description:
      "Get in touch with Amit Kumar, a MERN stack developer specializing in JavaScript, React, Node.js, and MongoDB.",
    url: "https://www.amitdevjourney.xyz/contact",
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
    title: "Amit Kumar | Contact Me - MERN Stack Developer",
    description:
      "Get in touch with Amit Kumar, a MERN stack developer specializing in JavaScript, React, Node.js, and MongoDB.",
    images: ["/og-image.jpg"],
  },
};

export default function ContactUsPage() {
  return (
    <>
      <ContactUs />
    </>
  );
}
