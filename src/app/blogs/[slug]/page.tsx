import { client, urlFor } from "@/lib/sanity";
import { sanityImageLoader } from "@/lib/image-loader";
import { postBySlugQuery, postSlugsQuery } from "@/lib/sanity.queries";
import { generateBlogPostSchema } from "@/lib/metadata/json-ld";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from "lucide-react";
import PortableText from "@/components/blogs/PortableText";
import { BlogCard } from "@/components/blogs/BlogCard";
import { ShareButtons } from "@/components/blogs/ShareButtons";
import { RelatedSidebar } from "@/components/blogs/RelatedSidebar";
import { NewsletterSignup } from "@/components/blogs/NewsletterSignup";
import type { Metadata, ResolvingMetadata } from "next";

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
    const categories = Array.isArray(post.categories) ? post.categories : (post.categories ? [post.categories] : ["General"]);

    return (
        <main className="min-h-screen relative bg-[#020617] pt-32 pb-5 sm:pb-10 px-4 sm:px-6 lg:px-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBlogPostSchema(post)) }}
            />
            {/* Background Decor */}
            <div className="absolute left-0 top-0 w-full h-[300px] bg-gradient-to-b from-[#06b6d4]/3 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <Link href="/blogs" className="inline-flex items-center text-slate-300 hover:text-[#8ef3c1] font-semibold mb-6 sm:mb-10 transition-all group">
                    <div className="w-8 h-8 rounded-full bg-[#06b6d4]/5 flex items-center justify-center mr-3 group-hover:bg-[#06b6d4]/10 transition-colors">
                        <ArrowLeft className="w-4 h-4 text-center text-[#8ef3c1] transition-transform group-hover:-translate-x-1" />
                    </div>
                    Back to Journal
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">
                    {/* Main Content Column */}
                    <div className="lg:col-span-8">
                        <header className="mb-12">
                            <div className="flex flex-wrap items-center gap-3 mb-8">
                                {categories.map((cat: string, i: number) => (
                                    <span key={i} className="px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] rounded-lg bg-white/5 border border-white/5 text-slate-400">
                                        {cat}
                                    </span>
                                ))}
                                <div className="flex items-center text-slate-300 text-xs font-medium mt-2">
                                    <Calendar className="w-3.5 h-3.5 mr-2 text-[#06b6d4]/60" />
                                    {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric"
                                    })}
                                </div>
                                <div className="flex items-center text-slate-300 text-xs font-medium mt-2">
                                    <Clock className="w-3.5 h-3.5 mr-2 text-[#06b6d4]/60" />
                                    {post.readTime || "5 min read"}
                                </div>
                            </div>

                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-100 leading-[1.1] mb-8 tracking-wide sm:tracking-tight">
                                {post.title}
                            </h1>

                            {post.mainImage && (
                                <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-white/5 shadow-2xl shadow-black/50 mb-10 sm:mb-16 bg-[#020617]/40">
                                    <Image
                                        loader={sanityImageLoader}
                                        src={urlFor(post.mainImage).url()}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 1280px) 100vw, 1280px"
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            )}
                        </header>

                        <article className="prose prose-invert prose-slate max-w-none 
                            prose-p:text-slate-300 prose-p:leading-[1.8] prose-p:mb-4 prose-p:text-sm prose-sm:text-lg
                            prose-headings:text-slate-100 prose-headings:font-black tracking-tight
                            prose-a:text-[#06b6d4] prose-a:no-underline hover:prose-a:underline 
                            prose-strong:text-white prose-code:text-[#3ed6ac] 
                            prose-pre:bg-[#07162b] prose-pre:border prose-pre:border-white/5 
                            border-b border-white/10 pb-6 sm:pb-12"
                        >
                            <PortableText value={post.body} />
                        </article>

                        <div className="py-6 sm:py-12 flex flex-col items-center gap-6 border-b border-white/30">
                            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-widest flex items-center">
                                <Share2 className="w-4 h-4 mr-2" /> Share this Article
                            </h4>
                            <ShareButtons url={currentUrl} title={post.title} />
                        </div>
                    </div>

                    {/* Sidebar Column */}
                    <div className="lg:col-span-4 lg:block">
                        <div className="sticky top-32">
                            <RelatedSidebar posts={post.relatedPosts} />
                        </div>
                    </div>
                </div>

                {/* Related Articles Bottom Grid (for mobile & extra recommendations) */}
                {post.relatedPosts && post.relatedPosts.length > 0 && (
                    <section className="sm:mt-20 mt-10">
                        <div className="flex items-center justify-between mb-8 sm:mb-12">
                            <h2 className="text-lg sm:text-3xl font-black text-white flex items-center">
                                <Tag className="w-5 h-5 mr-2 sm:w-8 sm:h-8 text-[#8ef3c1]" />
                                Deep Dive Further
                            </h2>
                            <Link href="/blogs" className="text-sm font-bold tracking-wider text-[#8ef3c1] hover:underline">
                                View all articles &rarr;
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {post.relatedPosts.slice(0, 3).map((related: any) => (
                                <BlogCard key={related._id} post={related} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Footer Newsletter */}
                <section>
                    <NewsletterSignup />
                </section>
            </div>
        </main>
    );
}
