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

    const previousImages = (await parent).openGraph?.images || [];
    const ogImage = post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : "/og-image.jpg";

    return {
        title: `${post.title} | Amit Kumar Blog`,
        description: post.excerpt,
        keywords: [post.category, "MERN stack", "Amit Kumar", "Developer", "Blog"],
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://www.amitdevjourney.xyz/blog/${slug}`,
            siteName: "Amit Kumar Portfolio",
            images: [ogImage, ...previousImages],
            type: "article",
            publishedTime: post.publishedAt,
            authors: ["Amit Kumar"],
            tags: [post.category],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
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

    const currentUrl = `https://www.amitdevjourney.xyz/blog/${slug}`;
    const categories = Array.isArray(post.categories) ? post.categories : (post.categories ? [post.categories] : ["General"]);
    const hashtags = categories.map((cat: string) => `#${cat.toLowerCase().replace(/\s+/g, "")}`).join(" ") + " #webdev #coding";

    return (
        <main className="min-h-screen relative bg-[#020617] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <HeroBackground delay={500} />

            {/* Background Decor */}
            <div className="absolute left-0 top-0 w-full h-[600px] bg-gradient-to-b from-[#06b6d4]/5 via-[#06b6d4]/2 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <Link href="/blog/all" className="inline-flex items-center text-[#06b6d4] hover:text-[#8ef3c1] font-semibold mb-10 transition-all group">
                    <div className="w-8 h-8 rounded-full bg-[#06b6d4]/10 flex items-center justify-center mr-3 group-hover:bg-[#06b6d4]/20 transition-colors">
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    </div>
                    Back to Articles
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">
                    {/* Main Content Column */}
                    <div className="lg:col-span-8">
                        <header className="mb-12">
                            <div className="flex flex-wrap items-center gap-3 mb-8">
                                {categories.map((cat: string, i: number) => (
                                    <span key={i} className="px-5 py-2 text-xs font-black uppercase tracking-[0.2em] rounded-lg bg-[#06b6d4] text-[#020617]">
                                        {cat}
                                    </span>
                                ))}
                                <div className="flex items-center text-slate-400 text-sm font-medium">
                                    <Calendar className="w-4 h-4 mr-2 text-[#06b6d4]" />
                                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric"
                                    })}
                                </div>
                                <div className="flex items-center text-slate-400 text-sm font-medium">
                                    <Clock className="w-4 h-4 mr-2 text-[#06b6d4]" />
                                    {post.readTime || "5 min read"}
                                </div>
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] mb-8">
                                {post.title}
                            </h1>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 p-6 rounded-2xl bg-[#07162b]/40 border border-white/5 backdrop-blur-sm mb-12">
                                <div className="text-[#06b6d4] font-bold italic tracking-wide">
                                    {hashtags}
                                </div>
                                <ShareButtons url={currentUrl} title={post.title} />
                            </div>

                            {post.mainImage && (
                                <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 mb-12">
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

                        <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-headings:font-black prose-p:text-slate-300 prose-p:leading-relaxed prose-a:text-[#06b6d4] prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:text-[#3ed6ac] prose-pre:bg-[#07162b] prose-pre:border prose-pre:border-white/5 border-b border-white/10 pb-16">
                            <PortableText value={post.body} />
                        </article>

                        <div className="py-12 flex flex-col items-center gap-6 border-b border-white/10">
                            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center">
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
                    <section className="mt-24">
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-3xl font-black text-white flex items-center">
                                <Tag className="w-8 h-8 mr-4 text-[#06b6d4]" />
                                Deep Dive Further
                            </h2>
                            <Link href="/blog/all" className="text-sm font-bold text-[#06b6d4] hover:underline">
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
                <section className="mt-24 p-1 rounded-3xl bg-gradient-to-r from-[#06b6d4] via-[#3ed6ac] to-[#06b6d4]">
                    <div className="bg-[#020617] p-12 sm:p-20 rounded-[calc(1.5rem-1px)] text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[#06b6d4]/5 pointer-events-none" />
                        <div className="relative z-10">
                            <h3 className="text-4xl sm:text-5xl font-black text-white mb-6">Master Your Craft</h3>
                            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                                Join 500+ developers receiving weekly technical insights and deep-dives into modern web engineering. No fluff, just code.
                            </p>
                            <Link href="/blog#newsletter">
                                <Button className="h-14 px-12 rounded-full bg-[#06b6d4] text-[#020617] font-black hover:bg-[#8ef3c1] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all text-lg">
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
