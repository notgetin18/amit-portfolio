"use client";

import type { Metadata } from "next";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/constant";
import HeroBackground from "@/components/ui/HeroBackground";
import { Input } from "@/components/ui/input";
import { UpcomingArticles } from "@/components/blogs/upcomingArticles";

export const metadata: Metadata = {
  title: "Tech Blog | Amit Kumar - MERN Stack Developer",
  description:
    "Explore insightful articles, tutorials, and case studies on MERN stack, performance optimization, and modern web development from Amit Kumar's tech blog. Stay updated with the latest trends and best practices.",
  keywords: [
    "MERN stack",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "Web Development",
    "Tech Blog",
    "Performance Optimization",
    "Full-stack Developer",
    "Amit Kumar",
  ],
};

function BlogPageClient() {
  return (
    <div className="min-h-screen relative overflow-y-auto bg-gradient-to-br from-[#07162b]/80 via-[#061025]/70 to-[#071826]/95">

      {/* Reuse your hero background for consistency */}
      <HeroBackground delay={300} />

      {/* Decorative gradients */}
      <div className="absolute -left-20 -top-10 w-72 h-72 bg-gradient-to-tr from-[#34d399]/30 to-[#06b6d4]/12 rounded-full blur-3xl mix-blend-screen pointer-events-none z-10" aria-hidden />
      <div className="absolute -right-14 bottom-8 w-80 h-80 bg-gradient-to-bl from-[#6ee7b7]/25 to-[#06b6d4]/8 rounded-full blur-3xl mix-blend-screen pointer-events-none z-10" aria-hidden />

      <div className="pt-28 pb-28 px-4 sm:px-6 lg:px-8 relative z-10">
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
              <Button asChild className=" rounded-full bg-gradient-to-tr from-[#06b6d4] to-[#8ef3c1] font-semibold text-black shadow-md shadow-[#8ef3c1]/50">
                <Link href="/contact">Get Notified When I Publish</Link>
              </Button>
            </Card>
          </motion.div>
          <UpcomingArticles />

          {/* Newsletter Signup */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="p-8 max-w-4xl mx-auto bg-gradient-to-r from-[#06b6d4]/20 to-[#3ed6ac]/20 border border-white/10 backdrop-blur-sm text-center">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4]">Stay Updated</h2>
              <p className="text-base sm:text-xl text-slate-300 mb-6 max-w-2xl mx-auto">
                Be the first to know when I publish new articles about MERN
                stack development, performance tips, and project insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Input
                  type="text"
                  id="email"
                  placeholder="Enter your email"
                  name="email"
                  // value={formData.name}
                  // onChange={handleInputChange}
                  required
                  className="w-full bg-white/5 border-white/20 text-white placeholder:text-slate-400 focus:ring-[#3ed6ac]"
                // aria-invalid={!!errors.name}
                // aria-describedby={
                //   errors.name ? "name-error" : undefined
                // }
                />
                <Button asChild className=" rounded-md bg-gradient-to-tr from-[#06b6d4] to-[#8ef3c1] font-semibold text-black hover:shadow-md hover:shadow-[#8ef3c1]/50 ease-in-out duration-500 transition-colors">
                  <Link href="/contact">Subscribe</Link>
                </Button>
              </div>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <BlogPageClient />
  )
}
