import { Suspense } from "react";
import { client } from "@/lib/sanity";
import { paginatedPostsQuery, totalPostsQuery } from "@/lib/sanity.queries";
import { BlogCard } from "@/components/blogs/BlogCard";
import { SearchBlogs } from "@/components/blogs/SearchBlogs";
import { Pagination } from "@/components/blogs/Pagination";
import HeroBackground from "@/components/ui/HeroBackground";
import { staggerContainer } from "@/constant";
import * as motion from "framer-motion/client";

const POSTS_PER_PAGE = 6;

export const revalidate = 1500; // revalidate every 15 minutes

async function getPosts(search: string = "", page: number = 1) {
    const start = (page - 1) * POSTS_PER_PAGE;
    const end = start + POSTS_PER_PAGE;
    const searchPattern = `*${search}*`;

    const posts = await client.fetch(paginatedPostsQuery, {
        search: searchPattern,
        start,
        end,
    });

    const total = await client.fetch(totalPostsQuery, {
        search: searchPattern,
    });

    return { posts, total };
}

export default async function AllBlogsPage({
    searchParams,
}: {
    searchParams: Promise<{ search?: string; page?: string }>;
}) {
    const { search = "", page = "1" } = await searchParams;
    const currentPage = Number(page);
    const { posts, total } = await getPosts(search, currentPage);
    const totalPages = Math.ceil(total / POSTS_PER_PAGE);

    return (
        <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#07162b]/80 via-[#061025]/70 to-[#071826]/95 pt-32 px-4 sm:px-6 lg:px-8">
            
            {/* Decorative gradient layers */}
            <HeroBackground delay={500} />
            <div className="absolute left-2 sm:-left-20 -top-10 w-20 sm:w-72 h-72 bg-gradient-to-tr from-[#34d399]/30 to-[#06b6d4]/12 rounded-full blur-3xl mix-blend-screen pointer-events-none z-10" aria-hidden />
            <div className="absolute right-3 sm:-right-14 bottom-8 w-20 sm:w-80 h-80 bg-gradient-to-bl from-[#6ee7b7]/25 to-[#06b6d4]/8 rounded-full blur-3xl mix-blend-screen pointer-events-none z-10" aria-hidden />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] leading-tight mb-6">
                        All Articles
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
                        Deep dives into modern web development, performance hacks, and my personal journey as a developer.
                    </p>
                </div>

                <SearchBlogs />

                {posts.length > 0 ? (
                    <>
                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            animate="animate"
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {posts.map((post: any) => (
                                <BlogCard key={post._id} post={post} />
                            ))}
                        </motion.div>
                        <Pagination totalPages={totalPages} />
                    </>
                ) : (
                    <div className="text-center py-20">
                        <div className="text-4xl mb-4">🔍</div>
                        <h2 className="text-2xl font-bold text-slate-200 mb-2">No articles found</h2>
                        <p className="text-slate-400">Try searching for a different keyword or category.</p>
                    </div>
                )}
            </div>
        </main>
    );
}
