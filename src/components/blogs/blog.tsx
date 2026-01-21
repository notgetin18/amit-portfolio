"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/constant";
import HeroBackground from "@/components/ui/HeroBackground";
import { UpcomingArticles } from "@/components/blogs/upcomingArticles";
import toast from "react-hot-toast";
import { ArrowRight } from "lucide-react";
import { BlogCard } from "@/components/blogs/BlogCard";
import { NewsletterSignup } from "@/components/blogs/NewsletterSignup";

export function Blog({ initialPosts = [] }: { initialPosts?: any[] }) {

  return (
    <>
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#07162b]/80 via-[#061025]/70 to-[#071826]/95">

        {/* Decorative gradient layers */}
        <HeroBackground delay={500} />
        <div className="absolute left-2 sm:-left-20 -top-10 w-20 sm:w-72 h-72 bg-gradient-to-tr from-[#34d399]/30 to-[#06b6d4]/12 rounded-full blur-3xl mix-blend-screen pointer-events-none z-10" aria-hidden />
        <div className="absolute right-3 sm:-right-14 bottom-8 w-20 sm:w-80 h-80 bg-gradient-to-bl from-[#6ee7b7]/25 to-[#06b6d4]/8 rounded-full blur-3xl mix-blend-screen pointer-events-none z-10" aria-hidden />

        <div className="pt-28 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="text-center mb-10 sm:mb-14"
            >
              <motion.h1
                variants={fadeInUp}
                className="mt-4 sm:mt-6 inline-flex items-center text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] leading-tight mb-4"
              >
                Tech Blog
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
              >
                Sharing insights, tutorials, and experiences from my journey as a
                MERN stack developer. Learn about best practices, performance
                optimization, and modern web development.
              </motion.p>
            </motion.div>

            {initialPosts.length > 0 ? (
              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
              >
                {initialPosts.slice(0, 6).map((post) => (
                  <BlogCard key={post._id} post={post} />
                ))}
              </motion.div>
            ) : (
              <>
                {/* Coming Soon Notice */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <Card className="p-8 border border-white/15 bg-gradient-to-br from-[#061025]/50 via-[#07162b]/30 to-transparent backdrop-blur-md hover:shadow-2xl transition-all duration-300 rounded-xl">
                    <div className="text-4xl mb-4">🚀</div>
                    <h2 className="text-2xl font-bold text-slate-200 mb-4">
                      Blog Coming Soon!
                    </h2>
                    <p className="text-lg text-slate-400 mb-6">
                      I'm currently working on creating valuable content about MERN
                      stack development, performance optimization, and real-world
                      project experiences. Stay tuned!
                    </p>
                    <Button
                      onClick={() => {
                        const element = document.getElementById("newsletter");
                        if (element) {
                          element.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                            inline: "nearest"
                          });
                        }
                      }}
                      className="rounded-full bg-gradient-to-tr from-[#06b6d4] to-[#8ef3c1] font-semibold text-black shadow-md shadow-[#8ef3c1]/50"
                    >
                      Get Notified When I Publish
                    </Button>
                  </Card>
                </motion.div>
                <UpcomingArticles />
              </>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center mb-16 group"
            >
              <Link href="/blogs">
                <Button
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(238, 176, 86, 0.3) 0%, rgba(238, 176, 86, 0.1) 50%, rgba(238, 176, 86, 0.3) 100%)",
                    boxShadow: "0px 4px 8px 0px #000000",
                    border: "0.5px solid #F9DDB5",
                    color: "#F6D4A2",
                    position: "relative",
                    outline: "none",
                  }}
                  className="rounded-full px-8 py-6 text-lg group-hover:gap-2 transition-all"
                >
                  See All Blogs
                  <ArrowRight className="ml-2 w-5 h-5 opacity-1 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </Button>
              </Link>
            </motion.div>

            {/* Newsletter Signup */}
            <NewsletterSignup />
          </div>
        </div>
      </div>
    </>
  );
}