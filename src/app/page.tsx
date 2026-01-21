import ClientHomePage from "@/components/home/ClientHomePage";
import { generatePersonSchema, generateWebsiteSchema, generateSoftwareAppSchema } from "@/lib/metadata/json-ld";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      generatePersonSchema(),
      generateWebsiteSchema(),
      generateSoftwareAppSchema()
    ]
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