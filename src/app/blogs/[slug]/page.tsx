import { client, urlFor } from "@/lib/sanity";
import { postBySlugQuery } from "@/lib/sanity.queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from "lucide-react";
import PortableText from "@/components/blogs/PortableText";
import { BlogCard } from "@/components/blogs/BlogCard";
import { ShareButtons } from "@/components/blogs/ShareButtons";
import { RelatedSidebar } from "@/components/blogs/RelatedSidebar";
import HeroBackground from "@/components/ui/HeroBackground";
import { Button } from "@/components/ui/button";
import type { Metadata, ResolvingMetadata } from "next";

export const revalidate = 1500; // revalidate every 15 minutes

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

    return {
        title: post.title,
        description: post.excerpt,
        keywords: [...categories, "MERN stack", "Amit Kumar", "Developer", "Blog"],
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
            <HeroBackground delay={500} />

            {/* Background Decor */}
            <div className="absolute left-0 top-0 w-full h-[600px] bg-gradient-to-b from-[#06b6d4]/5 via-[#06b6d4]/2 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <Link href="/blogs" className="inline-flex items-center text-slate-100 hover:text-[#8ef3c1] font-semibold mb-6 sm:mb-10 transition-all group">
                    <div className="w-8 h-8 rounded-full bg-[#06b6d4]/10 flex items-center justify-center mr-3 group-hover:bg-[#06b6d4]/20 transition-colors">
                        <ArrowLeft className="w-4 h-4 text-center text-[#8ef3c1] transition-transform group-hover:-translate-x-1" />
                    </div>
                    Back to Articles
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">
                    {/* Main Content Column */}
                    <div className="lg:col-span-8">
                        <header className="mb-12">
                            <div className="flex flex-wrap items-center gap-3 mb-8">
                                {categories.map((cat: string, i: number) => (
                                    <span key={i} className="px-5 py-2 text-xs font-black uppercase tracking-[0.15em] rounded-lg bg-white/5 border border-white/5 text-slate-200">
                                        {cat}
                                    </span>
                                ))}
                                <div className="flex items-center text-slate-300 text-sm font-medium mt-1">
                                    <Calendar className="w-4 h-4 mr-2 text-[#8ef3c1]" />
                                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric"
                                    })}
                                </div>
                                <div className="flex items-center text-slate-300 text-sm font-medium mt-1">
                                    <Clock className="w-4 h-4 mr-2 text-[#8ef3c1]" />
                                    {post.readTime || "5 min read"}
                                </div>
                            </div>

                            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-100 leading-[1.1] mb-8">
                                {post.title}
                            </h1>

                            {/* <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 p-6 rounded-2xl bg-[#07162b]/40 border border-white/5 backdrop-blur-sm mb-12">
                                <div className="text-[#06b6d4] font-bold italic tracking-wide">
                                    {hashtags}
                                </div>
                                <ShareButtons url={currentUrl} title={post.title} />
                            </div> */}

                            {post.mainImage && (
                                <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 mb-7 sm:mb-12">
                                    <Image
                                        src={urlFor(post.mainImage).url()}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 to-transparent" />
                                </div>
                            )}
                        </header>

                        <article className="prose prose-invert prose-lg max-w-none prose-headings:text-slate-100 prose-headings:font-black prose-p:text-slate-100 prose-p:leading-relaxed prose-a:text-[#06b6d4] prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:text-[#3ed6ac] prose-pre:bg-[#07162b] prose-pre:border prose-pre:border-white/5 border-b border-white/30 pb-16">
                            <PortableText value={post.body} />
                        </article>

                        <div className="py-12 flex flex-col items-center gap-6 border-b border-white/30">
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

                {/* Footer CTA */}
                <section className="mt-8 sm:mt-24 p-1 rounded-3xl bg-gradient-to-r from-[#06b6d4] via-[#3ed6ac] to-[#06b6d4]">
                    <div className="bg-[#020617] p-12 sm:p-20 rounded-[calc(1.5rem-1px)] text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[#06b6d4]/5 pointer-events-none" />
                        <div className="relative z-10">
                            <h3 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] leading-tight">Master Your Craft</h3>
                            <p className="text-slate-200 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                                Join 500+ developers receiving weekly technical insights and deep-dives into modern web engineering. No fluff, just code.
                            </p>
                            <Link href="/">
                                <Button className="h-14 px-12 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#06b6d4] to-[#8ef3c1] text-black font-semibold shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06b6d4] hover:bg-[#8ef3c1] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all text-lg">
                                    Join the Newsletter
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
