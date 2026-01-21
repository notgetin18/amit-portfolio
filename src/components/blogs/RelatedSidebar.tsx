"use client";

import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";
import { sanityImageLoader } from "@/lib/image-loader";
import { Calendar, Clock } from "lucide-react";

interface RelatedSidebarProps {
    posts: any[];
}

export function RelatedSidebar({ posts }: RelatedSidebarProps) {
    if (!posts || posts.length === 0) return null;

    return (
        <aside className="space-y-8">
            <div>
                <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-[#06b6d4]/30 flex items-center">
                    <span className="w-2 h-6 bg-[#8ef3c1] mr-3 rounded-full" />
                    More to Read
                </h3>

                <div className="space-y-6">
                    {posts.map((post) => (
                        <Link
                            key={post._id}
                            href={`/blogs/${post.slug}`}
                            className="group block"
                        >
                            <div className="flex gap-4">
                                <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden border border-white/10 group-hover:border-[#06b6d4]/40 transition-colors">
                                    <Image
                                        loader={sanityImageLoader}
                                        src={urlFor(post.mainImage).url()}
                                        alt={post.title}
                                        fill
                                        sizes="80px"
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                <div className="flex flex-col justify-center min-w-0">
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8ef3c1] mb-1">
                                        {Array.isArray(post.categories) ? post.categories[0] : (post.categories || "Article")}
                                    </span>
                                    <h4 className="text-sm font-bold text-slate-200 line-clamp-2 group-hover:text-white transition-colors leading-snug mb-1">
                                        {post.title}
                                    </h4>
                                    <div className="flex items-center gap-3 text-[10px] text-slate-300">
                                        <span className="flex items-center">
                                            <Calendar className="w-3 h-3 mr-1 text-[#8ef3c1]" />
                                            {new Date(post.publishedAt).toLocaleDateString("en-US", { month: 'short', day: 'numeric' })}
                                        </span>
                                        <span className="flex items-center">
                                            <Clock className="w-3 h-3 mr-1 text-[#8ef3c1]" />
                                            {post.readTime || "5 min"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#06b6d4]/10 to-transparent border border-[#06b6d4]/20">
                <h4 className="text-sm font-bold text-white mb-2">Want more insights?</h4>
                <p className="text-xs text-slate-200 mb-4 leading-relaxed">
                    Follow my journey and get the latest tech tips straight to your inbox.
                </p>
                <Link
                    href="#newsletter"
                    className="text-xs font-bold text-[#06b6d4] hover:underline flex items-center"
                >
                    Join Newsletter &rarr;
                </Link>
            </div>
        </aside>
    );
}
