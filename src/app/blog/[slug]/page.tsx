import { client, urlFor } from "@/lib/sanity";
import { postBySlugQuery } from "@/lib/sanity.queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import PortableText from "@/components/blogs/PortableText";
import { BlogCard } from "@/components/blogs/BlogCard";
import HeroBackground from "@/components/ui/HeroBackground";
import { Button } from "@/components/ui/button";

export const revalidate = 60; // revalidate every minute

async function getPost(slug: string) {
    return await client.fetch(postBySlugQuery, { slug });
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

    return (
        <main className="min-h-screen relative bg-gradient-to-br from-[#07162b]/80 via-[#061025]/70 to-[#071826]/95 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <HeroBackground delay={500} />

            {/* Decorative gradients */}
            <div className="absolute left-0 top-0 w-full h-96 bg-gradient-to-b from-[#06b6d4]/10 to-transparent pointer-events-none" aria-hidden />

            <div className="max-w-4xl mx-auto relative z-10">
                <Link href="/blog/all" className="inline-flex items-center text-[#06b6d4] hover:underline mb-8 transition-all group">
                    <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                    Back to Articles
                </Link>

                {/* Header Section */}
                <header className="mb-10">
                    <div className="flex items-center space-x-4 mb-6">
                        <span className="px-4 py-1.5 text-sm font-bold rounded-full bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/30">
                            {post.category}
                        </span>
                        <div className="flex items-center text-slate-400 text-sm">
                            <Calendar className="w-4 h-4 mr-2 text-slate-500" />
                            {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric"
                            })}
                        </div>
                        <div className="flex items-center text-slate-400 text-sm">
                            <Clock className="w-4 h-4 mr-2 text-slate-500" />
                            {post.readTime || "5 min read"}
                        </div>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-8">
                        {post.title}
                    </h1>

                    {post.mainImage && (
                        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-[#06b6d4]/10 mb-12">
                            <Image
                                src={urlFor(post.mainImage).url()}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}
                </header>

                {/* Content Section */}
                <article className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-slate-300 prose-a:text-[#06b6d4] prose-strong:text-white prose-code:text-[#3ed6ac] border-b border-white/10 pb-16">
                    <PortableText value={post.body} />
                </article>

                {/* Related Articles Section */}
                {post.relatedPosts && post.relatedPosts.length > 0 && (
                    <section className="mt-20">
                        <h2 className="text-3xl font-bold text-white mb-10 flex items-center">
                            <Tag className="w-6 h-6 mr-3 text-[#06b6d4]" />
                            Related Articles
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {post.relatedPosts.map((related: any) => (
                                <BlogCard key={related._id} post={related} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Footer CTA */}
                <section className="mt-24 p-12 rounded-3xl bg-gradient-to-br from-[#061025]/80 to-[#07162b]/50 border border-white/10 text-center backdrop-blur-md">
                    <h3 className="text-3xl font-bold text-white mb-4">Enjoyed this read?</h3>
                    <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                        Subscribe to my newsletter to get the latest articles and technical insights delivered straight to your inbox.
                    </p>
                    <Link href="/blog#newsletter">
                        <Button className="rounded-full px-10 py-6 text-lg bg-gradient-to-tr from-[#06b6d4] to-[#8ef3c1] text-[#061025] font-bold hover:shadow-lg hover:shadow-[#06b6d4]/30 transition-all">
                            Join the Newsletter
                        </Button>
                    </Link>
                </section>
            </div>
        </main>
    );
}
