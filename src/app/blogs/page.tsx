import { client, urlFor } from "@/lib/sanity";
import { paginatedPostsQuery, totalPostsQuery, categoriesQuery } from "@/lib/sanity.queries";
import { BlogCard } from "@/components/blogs/BlogCard";
import { SearchBlogs } from "@/components/blogs/SearchBlogs";
import { CategoryFilter } from "@/components/blogs/CategoryFilter";
import { Pagination } from "@/components/blogs/Pagination";
import HeroBackground from "@/components/ui/HeroBackground";
import { staggerContainer, fadeInUp } from "@/constant";
import * as motion from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";

const POSTS_PER_PAGE = 6;

export const revalidate = 1500; // revalidate every 15 minutes

async function getPosts(search: string = "", page: number = 1, category: string = "All") {
    const start = (page - 1) * POSTS_PER_PAGE;
    const end = start + POSTS_PER_PAGE;
    const searchPattern = `*${search}*`;

    const posts = await client.fetch(paginatedPostsQuery, {
        search: searchPattern,
        category,
        start,
        end,
    });

    const total = await client.fetch(totalPostsQuery, {
        search: searchPattern,
        category,
    });

    return { posts, total };
}

async function getCategories() {
    return await client.fetch(categoriesQuery);
}

export default async function AllBlogsPage({
    searchParams,
}: {
    searchParams: Promise<{ search?: string; page?: string; category?: string }>;
}) {
    const { search = "", page = "1", category = "All" } = await searchParams;
    const currentPage = Number(page);
    const { posts, total } = await getPosts(search, currentPage, category);
    const categories = await getCategories();
    const totalPages = Math.ceil(total / POSTS_PER_PAGE);

    const featuredPost = posts.length > 0 && currentPage === 1 && !search && category === "All" ? posts[0] : null;
    const remainingPosts = featuredPost ? posts.slice(1) : posts;

    return (
        <main className="min-h-screen relative overflow-hidden bg-[#020617] pt-28 pb-20 px-4 sm:px-6 lg:px-8">
            <HeroBackground delay={500} />

            {/* Dynamic Background Accents */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#06b6d4]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#3ed6ac]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Hero Section */}
                <div className="text-center mb-12 sm:mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#06b6d4]/10 border border-[#06b6d4]/20 text-[#06b6d4] text-sm font-medium mb-6"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span className="text-[#fff">Insights & Innovations</span>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                        className="text-center mb-12"
                    >
                        <motion.h1
                            variants={fadeInUp}
                            className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] mb-4"
                        >
                            The Journal
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed"
                        >
                            Mastering the MERN stack and beyond. Explore technical deep-dives into high-performance web engineering.
                        </motion.p>
                    </motion.div>
                </div>

                {/* Featured Post Highlight */}
                {featuredPost && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-20"
                    >
                        <Link href={`/blog/${featuredPost.slug}`}>
                            <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#07162b]/40 backdrop-blur-xl hover:border-[#06b6d4]/30 transition-all duration-500">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden">
                                    <div className="relative h-[300px] lg:h-[400px] overflow-hidden">
                                        <Image
                                            src={urlFor(featuredPost.mainImage).url()}
                                            alt={featuredPost.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent lg:hidden" />
                                    </div>
                                    <div className="p-8 lg:p-16 flex flex-col justify-center">
                                        <div className="flex flex-wrap items-center gap-3 mb-6">
                                            {(Array.isArray(featuredPost.categories) ? featuredPost.categories : [featuredPost.categories]).map((cat: string, i: number) => (
                                                <span key={i} className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg bg-[#06b6d4] text-[#020617]">
                                                    {cat}
                                                </span>
                                            ))}
                                            <div className="flex items-center text-slate-400 text-xs">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                {new Date(featuredPost.publishedAt).toLocaleDateString()}
                                            </div>
                                        </div>

                                        <h2 className="text-xl sm:text-3xl font-bold text-white mb-6 group-hover:text-[#06b6d4] transition-colors leading-tight">
                                            {featuredPost.title}
                                        </h2>

                                        <p className="text-slate-400 text-lg line-clamp-3 leading-relaxed">
                                            {featuredPost.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between mt-auto">
                                            <div className="flex items-center text-slate-500 font-medium italic">
                                                <Clock className="w-4 h-4 mr-2" />
                                                {featuredPost.readTime || "5 min read"}
                                            </div>
                                            <div className="inline-flex items-center text-white font-bold group-hover:translate-x-2 transition-transform">
                                                Read Article <ArrowRight className="ml-2 w-5 h-5 text-[#06b6d4]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                )}

                {/* Operations Bar (Search & Filter) */}
                <div className="sticky top-24 z-50 mb-16">
                    <div className="max-w-4xl mx-auto p-2 sm:p-3 rounded-3xl bg-[#07162b]/40 border border-white/10 shadow-2xl shadow-black/50">
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <div className="w-full md:w-1/2">
                                <SearchBlogs />
                            </div>
                            <div className="w-full md:w-1/2 flex items-center justify-center">
                                <CategoryFilter categories={categories} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Article Grid */}
                {remainingPosts.length > 0 ? (
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {remainingPosts.map((post: any) => (
                            <BlogCard key={post._id} post={post} />
                        ))}
                    </motion.div>
                ) : !featuredPost ? (
                    <div className="text-center py-20 bg-[#07162b]/30 rounded-3xl border border-white/5">
                        <div className="text-6xl mb-6">🔭</div>
                        <h2 className="text-3xl font-bold text-white mb-2">No matches found</h2>
                        <p className="text-slate-400 text-lg">Try adjusting your search filters or exploring all topics.</p>
                    </div>
                ) : null}

                {totalPages > 1 && (
                    <div className="mt-20">
                        <Pagination totalPages={totalPages} />
                    </div>
                )}
            </div>
        </main>
    );
}
