"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { urlFor } from "@/lib/sanity";
import { sanityImageLoader } from "@/lib/image-loader";
import Image from "next/image";

interface BlogCardProps {
    post: {
        title: string;
        slug: string;
        excerpt: string;
        mainImage?: any;
        thumbnailImage?: any;
        categories: string[];
        readTime?: string;
        publishedAt: string;
    };
}

export function BlogCard({ post }: BlogCardProps) {
    const categories = Array.isArray(post.categories) ? post.categories : (post.categories ? [post.categories] : ["General"]);

    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        >
            <Link href={`/blogs/${post.slug}`}>
                <Card className="group relative h-full flex flex-col overflow-hidden border border-white/10 bg-[#07162b]/40 backdrop-blur-md hover:border-[#06b6d4]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] rounded-2xl">
                    {/* Image Section */}
                    <div className="relative aspect-[16/9] overflow-hidden bg-[#020617]/50">
                        <Image
                            loader={sanityImageLoader}
                            src={urlFor(post.mainImage || post.thumbnailImage).url()}
                            alt={post.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-contain transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />

                        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                            {categories.slice(0, 2).map((cat, i) => (
                                <span key={i} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-md bg-black/70 backdrop-blur-sm text-neutral-300 shadow-lg border-neutral-300 border-[0.9px] text-center">
                                    {cat}
                                </span>
                            ))}
                            {categories.length > 2 && (
                                <span className="px-2 py-1 text-[10px] font-bold rounded-md bg-black/70 backdrop-blur-sm text-neutral-300 shadow-lg border-neutral-300 border-[0.9px]">
                                    +{categories.length - 2}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col flex-grow p-6">
                        <div className="flex items-center gap-4 sm:gap-6 mb-4 text-[11px] text-slate-500 font-medium">
                            <div className="flex items-center bg-gradient-to-br from-[#061025]/50 via-[#07162b]/30 to-transparent backdrop-blur-md hover:shadow-2xl transition-shadow duration-300 rounded-xl focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#06b6d4]/30">
                                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 text-[#8ef3c1] text-center" />
                                <span className="text-neutral-300 text-xs">{new Date(post.publishedAt).toLocaleDateString("en-US")}</span>
                            </div>
                            <div className="flex items-center bg-gradient-to-br from-[#061025]/50 via-[#07162b]/30 to-transparent backdrop-blur-md hover:shadow-2xl transition-shadow duration-300 rounded-xl focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#06b6d4]/30">
                                <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 text-[#8ef3c1] text-center" />
                                <span className="text-neutral-300 text-xs">{post.readTime || "5 min read"}</span>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-neutral-200 mb-3 line-clamp-2 leading-tight group-hover:text-white transition-colors">
                            {post.title}
                        </h3>

                        <p className="text-sm text-neutral-300 hover:text-neutral-100 line-clamp-3 mb-6 leading-relaxed">
                            {post.excerpt}
                        </p>

                        <div className="mt-auto flex items-center justify-between pt-4 border-t border-neutral-100/30 group-hover:border-[#06b6d4]/35 transition-all">
                            <span className="text-neutral-200 group-hover:text-[#06b6d4] text-xs font-bold tracking-wider uppercase flex items-center group-hover:gap-2 transition-all">
                                Read Article
                                <ArrowRight className="w-5 h-5 ml-3 opacity-100 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                            </span>
                        </div>
                    </div>
                </Card>
            </Link>
        </motion.div>
    );
}
