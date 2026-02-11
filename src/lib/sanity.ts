import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false, // Set to true for production for faster response
});

/**
 * Returns a Sanity client configured for the current request.
 * If token is provided and we want to preview drafts, use the token.
 */
export function getClient(previewToken?: string) {
  if (previewToken) {
    return createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
      apiVersion: "2024-01-01",
      useCdn: false,
      token: previewToken,
      perspective: "drafts",
      stega: {
        enabled: true,
        studioUrl: "/studio",
      },
    });
  }
  return client;
}

const builder = createImageUrlBuilder(client as any);

export function urlFor(source: any) {
  return builder.image(source);
}
