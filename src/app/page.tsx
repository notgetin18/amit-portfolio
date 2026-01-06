import React from "react";
import ClientHomePage from "@/components/home/ClientHomePage";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Amit Kumar",
    url: "https://www.amitdevjourney.xyz/",
    sameAs: [
      "https://github.com/notgetin18",
      "https://www.linkedin.com/in/notgetin18",
      "https://x.com/Amitsin40190332",
    ],
    jobTitle: "MERN Full-Stack Developer & Product Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Bright DiGi Gold",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        key="person-jsonld"
      />
      <ClientHomePage />
    </>
  );
}
