"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, Tag } from "lucide-react";
import PortableText from "./PortableText";
import { BlogCard } from "./BlogCard";
import { ShareButtons } from "./ShareButtons";
import { RelatedSidebar } from "./RelatedSidebar";
import { NewsletterSignup } from "./NewsletterSignup";
import { sanityImageLoader } from "@/lib/image-loader";
import { urlFor } from "@/lib/sanity";
import { fadeInUp, staggerContainer } from "@/constant";

interface BlogPostContentProps {
    post: any;
    currentUrl: string;
}

export default function BlogPostContent({ post, currentUrl }: BlogPostContentProps) {
    const categories = Array.isArray(post.categories) ? post.categories : (post.categories ? [post.categories] : ["General"]);

    return (
        <LazyMotion features={domAnimation}>
            <div className="min-h-screen relative bg-[#212121]/45 pt-32 pb-5 sm:pb-10 px-4 sm:px-6 lg:px-8">
                {/* Background Decor */}
                <div className="absolute left-0 top-0 w-full h-[300px] bg-gradient-to-b from-[#06b6d4]/3 to-transparent pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <m.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="/blogs" className="inline-flex items-center text-slate-300 hover:text-[#8ef3c1] font-semibold mb-6 sm:mb-10 transition-all group">
                            <div className="w-8 h-8 rounded-full bg-[#06b6d4]/5 flex items-center justify-center mr-3 group-hover:bg-[#06b6d4]/10 transition-colors">
                                <ArrowLeft className="w-4 h-4 text-center text-[#8ef3c1] transition-transform group-hover:-translate-x-1" />
                            </div>
                            Back to Journal
                        </Link>
                    </m.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">
                        {/* Main Content Column */}
                        <m.div
                            variants={staggerContainer}
                            initial="initial"
                            animate="animate"
                            className="lg:col-span-8"
                        >
                            <header className="mb-12">
                                <m.div variants={fadeInUp} className="flex flex-wrap items-center gap-3 mb-8">
                                    {categories.map((cat: string, i: number) => (
                                        <span key={i} className="px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] rounded-lg bg-white/5 border border-white/15 text-slate-200">
                                            {cat}
                                        </span>
                                    ))}
                                    <div className="flex items-center text-slate-200 text-xs font-medium mt-2">
                                        <Calendar className=" w-4 h-4 mr-2 text-[#06b6d4]/70" />
                                        {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                                            month: "long",
                                            day: "numeric",
                                            year: "numeric"
                                        })}
                                    </div>
                                    <div className="flex items-center text-slate-200 text-xs font-medium mt-2">
                                        <Clock className="w-4 h-4 mr-2 text-[#06b6d4]/70" />
                                        {post.readTime || "5 min read"}
                                    </div>
                                </m.div>

                                <m.h1 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-100 leading-[1.1] mb-8 tracking-wide sm:tracking-tight">
                                    {post.title}
                                </m.h1>

                                {post.mainImage && (
                                    <m.div variants={fadeInUp} className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-white/5 shadow-2xl shadow-black/50 mb-10 sm:mb-16 bg-[#020617]/40">
                                        <Image
                                            loader={sanityImageLoader}
                                            src={urlFor(post.mainImage).url()}
                                            alt={post.title}
                                            fill
                                            sizes="(max-width: 1280px) 100vw, 1280px"
                                            className="object-contain"
                                            priority
                                        />
                                    </m.div>
                                )}
                            </header>

                            <m.article
                                variants={fadeInUp}
                                className="prose prose-invert prose-slate max-w-none 
                                prose-p:text-slate-300 prose-p:leading-[1.8] prose-p:mb-4 prose-p:text-sm prose-sm:text-lg
                                prose-headings:text-slate-100 prose-headings:font-black tracking-tight
                                prose-a:text-[#06b6d4] prose-a:no-underline hover:prose-a:underline 
                                prose-strong:text-white prose-code:text-[#3ed6ac] 
                                prose-pre:bg-[#07162b] prose-pre:border prose-pre:border-white/5 
                                border-b border-white/10 pb-6 sm:pb-12"
                            >
                                <PortableText value={post.body} />
                            </m.article>

                            <m.div variants={fadeInUp} className="py-6 sm:py-12 flex flex-col items-center gap-6 border-b border-white/30">
                                <h4 className="text-sm font-bold text-slate-200 uppercase tracking-widest flex items-center">
                                    <Share2 className="w-4 h-4 mr-2" /> Share this Article
                                </h4>
                                <ShareButtons url={currentUrl} title={post.title} />
                            </m.div>
                        </m.div>

                        {/* Sidebar Column */}
                        <m.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-4 lg:block"
                        >
                            <div className="sticky top-32">
                                <RelatedSidebar posts={post.relatedPosts} />
                            </div>
                        </m.div>
                    </div>

                    {/* Related Articles Bottom Grid (for mobile & extra recommendations) */}
                    {post.relatedPosts && post.relatedPosts.length > 0 && (
                        <m.section
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="sm:mt-20 mt-10"
                        >
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
                        </m.section>
                    )}

                    {/* Footer Newsletter */}
                    <m.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <NewsletterSignup />
                    </m.section>
                </div>
            </div>
        </LazyMotion>
    );
}
