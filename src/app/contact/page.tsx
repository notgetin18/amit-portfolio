import ContactUs from "@/components/contactUs/contactUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Amit Kumar | Let's Build Together",  // Good – this will become "Contact Amit Kumar | Let's Build Together | Amit Kumar Portfolio" thanks to root template
  description:
    "Get in touch with Amit Kumar to discuss your next project. Available for freelance opportunities in web development, API design, and cloud infrastructure.",
  keywords: [  // It's empty – add some for better relevance!
    "contact Amit Kumar",
    "hire MERN developer",
    "freelance full-stack developer",
    "web development inquiry",
    "React Node.js developer",
    "India freelance developer",
  ],
  authors: [{ name: "Amit Kumar" }],
  alternates: {  // ADD THIS – critical for correct canonical URL
    canonical: "https://www.amitdevjourney.xyz/contact",
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
    title: "Contact Amit Kumar | Let's Build Together",
    description:
      "Get in touch with Amit Kumar to discuss your next project. Available for freelance opportunities in web development, API design, and cloud infrastructure.",  
    url: "https://www.amitdevjourney.xyz/contact",
    siteName: "Amit Kumar Portfolio",
    images: ["/og-image.jpg"],  // Optional: use a contact-specific image if you have one
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Amit Kumar | Let's Build Together",
    description:
      "Get in touch with Amit Kumar to discuss your next project. Available for freelance opportunities in web development, API design, and cloud infrastructure.",  // ADD description (was empty)
    images: ["/og-image.jpg"],
  },
};
export default ContactUs;
