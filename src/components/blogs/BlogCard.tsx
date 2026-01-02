"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/constant";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";

interface BlogCardProps {
    post: {
        title: string;
        slug: string;
        excerpt: string;
        mainImage?: any;
        category: string;
        readTime?: string;
        publishedAt: string;
    };
}

export function BlogCard({ post }: BlogCardProps) {
    const neonTeal = "#06b6d4";

    return (
        <motion.div variants={fadeInUp}>
            <Card className="h-full bg-[#061025]/50 border border-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 hover:shadow-neon hover:shadow-[#06b6d4]/30 overflow-hidden group">
                <Link href={`/blog/${post.slug}`}>
                    <div className="relative h-48 w-full overflow-hidden">
                        {post.mainImage ? (
                            <Image
                                src={urlFor(post.mainImage).url()}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        ) : (
                            <div className="h-full w-full bg-gradient-to-br from-[#06b6d4]/20 to-[#3ed6ac]/20 flex items-center justify-center">
                                <span className="text-4xl">📝</span>
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#061025] via-transparent to-transparent opacity-60" />
                    </div>
                </Link>

                <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                        <span
                            className="px-3 py-1 text-xs font-semibold rounded-full"
                            style={{ backgroundColor: `${neonTeal}1A`, color: neonTeal, border: `1px solid ${neonTeal}40` }}
                        >
                            {post.category}
                        </span>
                        <div className="flex items-center text-slate-400 text-sm">
                            <Clock className="w-4 h-4 mr-1 text-slate-500" />
                            {post.readTime || "5 min read"}
                        </div>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 hover:text-[#06b6d4] transition-colors">
                            {post.title}
                        </h3>
                    </Link>

                    <p className="text-slate-300 mb-4 line-clamp-3 text-sm">
                        {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-2">
                        <span className="text-xs text-slate-500 font-medium">
                            {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric"
                            })}
                        </span>

                        <Link href={`/blog/${post.slug}`}>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-[#06b6d4] hover:text-white hover:bg-white/10 transition-colors p-0 hover:scale-110 hover:shadow-neon hover:shadow-[#06b6d4]/30 hover:-translate-y-1 hover:translate-x-1 hover:p-2 transition-all duration-300 ease-in-out"
                            >
                                Read More
                                <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
