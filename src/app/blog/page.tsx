"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Code,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function BlogPage() {
  // Placeholder blog posts - you can replace with real content later
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable MERN Applications: Best Practices",
      excerpt:
        "Learn the essential patterns and practices for building robust MERN stack applications that can handle thousands of users.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Development",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Optimizing React Performance: Real-world Techniques",
      excerpt:
        "Discover the performance optimization techniques I used to boost website speed by 30% in production applications.",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "React",
      icon: Lightbulb,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "API Integration Strategies for Modern Web Apps",
      excerpt:
        "Explore different approaches to API integration and how to handle complex data flows in MERN applications.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Backend",
      icon: BookOpen,
      gradient: "from-green-500 to-teal-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-lime-50">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-orange-200"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
            >
              <Link href="/">Amit Kumar</Link>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-slate-700 hover:text-orange-600 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-slate-700 hover:text-orange-600 transition-colors"
              >
                About
              </Link>
              <Link href="/blog" className="text-orange-600 font-medium">
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-slate-700 hover:text-orange-600 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center mb-16"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-slate-800 mb-6"
            >
              Tech Blog
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
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
            <Card className="p-8 bg-gradient-to-r from-orange-100 to-amber-100 border-orange-200">
              <div className="text-4xl mb-4">🚀</div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                Blog Coming Soon!
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                I'm currently working on creating valuable content about MERN
                stack development, performance optimization, and real-world
                project experiences. Stay tuned!
              </p>
              <Button asChild className="bg-orange-600 hover:bg-orange-700">
                <Link href="/contact">Get Notified When I Publish</Link>
              </Button>
            </Card>
          </motion.div>

          {/* Planned Content Preview */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 text-center">
              Upcoming Articles
            </h2>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {blogPosts.map((post, index) => (
                <motion.div key={post.id} variants={fadeInUp}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-slate-200 overflow-hidden">
                    <div
                      className={`h-32 bg-gradient-to-r ${post.gradient} flex items-center justify-center`}
                    >
                      <post.icon className="w-12 h-12 text-white" />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center text-slate-500 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-slate-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-slate-500 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-orange-600 hover:text-orange-700"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Newsletter Signup */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="p-8 bg-gradient-to-r from-orange-600 to-red-600 text-white">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-xl text-orange-100 mb-6 max-w-2xl mx-auto">
                Be the first to know when I publish new articles about MERN
                stack development, performance tips, and project insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-slate-800 border-0 focus:ring-2 focus:ring-orange-300"
                />
                <Button variant="secondary" size="lg" className="px-8 py-3">
                  Subscribe
                </Button>
              </div>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
