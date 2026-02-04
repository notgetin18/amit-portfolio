"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { defaultBlogPosts, fadeInUp, staggerContainer } from "@/constant";

export function UpcomingArticles({ posts = defaultBlogPosts }) {
    const mainGradient = "bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4]";
    const neonTeal = "#06b6d4";

    return (
        <LazyMotion features={domAnimation}>
            <m.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <h2 className={`text-center text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent ${mainGradient} my-6 sm:my-10`}>
                    Upcoming Articles
                </h2>

                <m.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {posts.map((post) => (
                        <m.div key={post.id} variants={fadeInUp}>
                            <Card className="h-full bg-[#061025]/50 border border-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 hover:shadow-neon hover:shadow-[#06b6d4]/30 overflow-hidden">
                                {/* Visual header remains colored for distinction */}
                                <div className={`h-32 bg-gradient-to-r ${post.gradient} flex items-center justify-center`}>
                                    <post.icon className="w-12 h-12 text-white" />
                                </div>

                                <CardContent className="p-6">
                                    <div className="flex items-center space-x-4 mb-3">
                                        <span
                                            className={`px-3 py-1 text-xs font-semibold rounded-full`}
                                            style={{ backgroundColor: `${neonTeal}1A`, color: neonTeal, border: `1px solid ${neonTeal}40` }}
                                        >
                                            {post.category}
                                        </span>
                                        <div className="flex items-center text-slate-400 text-sm">
                                            <Clock className="w-4 h-4 mr-1 text-slate-500" />
                                            {post.readTime}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-slate-300 mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-2">
                                        {/* <div className="flex items-center text-slate-400 text-sm">
                                        <Calendar className="w-4 h-4 mr-1 text-slate-500" />
                                        {new Date(post.date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </div> */}

                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className={`text-[${neonTeal}] hover:text-white hover:bg-white/10 transition-colors`}
                                        >
                                            Read More
                                            <ArrowRight className="w-4 h-4 ml-1" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </m.div>
                    ))}
                </m.div>
            </m.section>
        </LazyMotion>
    );
}