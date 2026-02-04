import { client } from "@/lib/sanity";
import { postBySlugQuery, postSlugsQuery } from "@/lib/sanity.queries";
import { generateBlogPostSchema } from "@/lib/metadata/json-ld";
import { notFound } from "next/navigation";
import BlogPostContent from "@/components/blogs/BlogPostContent";
import type { Metadata, ResolvingMetadata } from "next";
import { urlFor } from "@/lib/sanity";

export const revalidate = 1500; // revalidate every 15 minutes

export async function generateStaticParams() {
    const slugs = await client.fetch(postSlugsQuery);
    return slugs.map((slug: string) => ({ slug }));
}

async function getPost(slug: string) {
    return await client.fetch(postBySlugQuery, { slug });
}

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) return { title: "Post Not Found" };

    const ogImage = post.mainImage
        ? urlFor(post.mainImage).width(1200).height(630).fit("crop").format("jpg").url()
        : "https://www.amitdevjourney.xyz/og-image.jpg";

    const categories = Array.isArray(post.categories) ? post.categories : (post.categories ? [post.categories] : ["General"]);
    const dynamicKeywords = Array.isArray(post.keywords) ? post.keywords : [];

    return {
        title: post.title,
        description: post.excerpt,
        keywords: [...dynamicKeywords, ...categories, "MERN stack", "Amit Kumar", "Developer", "Blog"],
        alternates: {
            canonical: `https://www.amitdevjourney.xyz/blogs/${slug}`,
        },
        authors: [{ name: "Amit Kumar" }],
        publisher: "Amit Kumar",
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
            },
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://www.amitdevjourney.xyz/blogs/${slug}`,
            siteName: "Amit Kumar Portfolio",
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                }
            ],
            type: "article",
            publishedTime: post.publishedAt,
            authors: ["Amit Kumar"],
            tags: categories,
        },
        twitter: {
            card: "summary_large_image",
            site: "@Amitsin40190332",
            creator: "@Amitsin40190332",
            title: post.title,
            description: post.excerpt?.length > 160 ? post.excerpt.substring(0, 157) + "..." : post.excerpt,
            images: [ogImage],
        },
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    const currentUrl = `https://www.amitdevjourney.xyz/blogs/${slug}`;

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBlogPostSchema(post)) }}
            />
            <BlogPostContent post={post} currentUrl={currentUrl} />
        </>
    );
}
