import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { getClient } from "@/lib/sanity";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");

  // Validate secret
  if (
    !secret ||
    secret.trim() !== process.env.SANITY_REVALIDATE_SECRET?.trim()
  ) {
    return new Response("Invalid secret", { status: 401 });
  }

  // If no slug is provided, redirect to home
  if (!slug) {
    (await draftMode()).enable();
    redirect("/");
  }

  // Use the preview client to verify the post exists (even if it's a draft)
  const token = process.env.VIEWER_TOKEN_SANITY;
  const previewClient = getClient(token);

  const post = await previewClient.fetch(
    `*[_type == "post" && (slug.current == $slug || _id == $slug || _id == "drafts." + $slug)][0]`,
    { slug },
  );

  if (!post) {
    return new Response("Invalid slug", { status: 404 });
  }

  // Enable Draft Mode by setting the cookie
  (await draftMode()).enable();

  // Redirect to the blog post
  redirect(`/blogs/${post.slug.current || post.slug}`);
}
