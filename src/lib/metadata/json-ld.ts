/**
 * Centralized JSON-LD generators for SEO.
 * This file contains helper functions to generate structured data for different pages.
 */

const BASE_URL = "https://www.amitdevjourney.xyz";
const PERSON_ID = `${BASE_URL}/#person`;
const WEBSITE_ID = `${BASE_URL}/#website`;

export const PERSON_SCHEMA = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Amit Kumar",
  url: BASE_URL,
  jobTitle: "MERN Full-Stack Developer & Product Engineer",
  image: `${BASE_URL}/og-image.jpg`,
  sameAs: [
    "https://github.com/notgetin18",
    "https://www.linkedin.com/in/notgetin18",
    "https://x.com/Amitsin40190332",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Bright DiGi Gold",
  },
  knowsAbout: [
    "MERN Stack",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "FinTech Development",
    "SaaS Architecture",
  ],
};

export function generatePersonSchema() {
  return PERSON_SCHEMA;
}

export function generateWebsiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: BASE_URL,
    name: "Amit Dev Journey | MERN Stack Portfolio",
    publisher: { "@id": PERSON_ID },
  };
}

export function generateSoftwareAppSchema() {
  return {
    "@type": "SoftwareApplication",
    name: "Bright DiGi Gold",
    operatingSystem: "Web",
    applicationCategory: "FinanceApplication",
    author: { "@id": PERSON_ID },
    description:
      "A high-scale digital gold platform built with Next.js and MERN stack for 1M+ users.",
  };
}

export function generateBlogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "The Journal | Amit Kumar Portfolio",
    description:
      "Deep-dives into MERN stack development, high-performance web engineering, and digital innovation.",
    publisher: {
      "@type": "Organization",
      name: "Amit Dev Journey",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/og-image.jpg`,
      },
    },
  };
}

export function generateBlogPostSchema(post: any, ogImage: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: ogImage
      ? ogImage
      : post.mainImage
        ? post.mainImage
        : `${BASE_URL}/og-image.jpg`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Amit Kumar",
      url: BASE_URL,
      sameAs: [
        "https://github.com/notgetin18",
        "https://www.linkedin.com/in/notgetin18",
        "https://x.com/Amitsin40190332",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "Amit Dev Journey",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/og-image.jpg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blogs/${post.slug}`,
    },
  };
}

export function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Full-Stack Web Development",
    provider: { "@id": PERSON_ID },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Development & Marketing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "MERN Stack Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO & Growth Optimization",
          },
        },
      ],
    },
  };
}

export function generateAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: { "@id": PERSON_ID },
  };
}

export function generateContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Amit Kumar",
    description:
      "Get in touch with Amit Kumar for MERN stack development and SEO services.",
    mainEntity: { "@id": PERSON_ID },
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFaqSchema(
  faqs: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
