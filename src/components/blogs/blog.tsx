"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/constant";
import HeroBackground from "@/components/ui/HeroBackground";
import { Input } from "@/components/ui/input";
import { UpcomingArticles } from "@/components/blogs/upcomingArticles";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export function Blog() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [submitting, setSubmitting] = useState(false);

  // Scroll handler for "Get Notified" button
  const scrollToNewsletter = () => {
    const element = document.getElementById("newsletter");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const email = inputRef.current?.value.trim();
    if (!email) {
      setSubmitting(false);
      toast.error("Please enter a valid email.", { duration: 3000 });
      return;
    }

    // console.log("email", email);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        if (inputRef.current) {
          inputRef.current.value = ""; // Clear the input
        }
        toast.success(
          <div className="text-left max-w-md">
            <h3 className="text-xl font-bold text-white mb-2">Welcome Aboard the Code Journey! 🚀</h3>
            <p className="text-slate-300 mb-3 leading-relaxed text-sm sm:text-base">
              Thanks for subscribing—your inbox is now primed for deep dives into MERN mastery, perf hacks, and real-talk project wins. First post drops soon: "Scaling Next.js to 1M+ Users (Lessons from Bright DiGi Gold)."
            </p>
            <div className="flex gap-2 text-sm">
              <Link href="/blog" className="text-[#06b6d4] hover:underline">Browse Teasers →</Link>
              <span className="text-slate-500">|</span>
              <Link href="/contact" className="text-[#06b6d4] hover:underline">Hire Me →</Link>
            </div>
          </div>,
          {
            duration: 7000,
            style: {
              background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
              border: "1px solid #06b6d4",
              borderRadius: "12px",
              padding: "16px"
            },
            iconTheme: { primary: "#8ef3c1", secondary: "#1e293b" }
          }
        );
      } else {
        const errorData = await res.json();
        toast.error(errorData.error || "Something went wrong. Please try again.", { duration: 4000 });
      }
    } catch (error) {
      toast.error("Network error. Please check your connection and try again.", { duration: 4000 });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="min-h-screen relative overflow-y-auto bg-gradient-to-br from-[#07162b]/80 via-[#061025]/70 to-[#071826]/95">

        {/* Reuse your hero background for consistency */}
        <HeroBackground delay={500} />

        {/* Decorative gradients */}
        <div className="absolute left-2 sm:-left-20 -top-10 w-20 sm:w-72 h-72 bg-gradient-to-tr from-[#34d399]/30 to-[#06b6d4]/12 rounded-full blur-3xl mix-blend-screen pointer-events-none z-10" aria-hidden />
        <div className="absolute right-3 sm:-right-14 bottom-8 w-20 sm:w-80 h-80 bg-gradient-to-bl from-[#6ee7b7]/25 to-[#06b6d4]/8 rounded-full blur-3xl mix-blend-screen pointer-events-none z-10" aria-hidden />

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
                <Button
                  onClick={scrollToNewsletter}
                  className="rounded-full bg-gradient-to-tr from-[#06b6d4] to-[#8ef3c1] font-semibold text-black shadow-md shadow-[#8ef3c1]/50"
                >
                  Get Notified When I Publish
                </Button>
              </Card>
            </motion.div>
            <UpcomingArticles />

            {/* Newsletter Signup - Add ID for scrolling */}
            <motion.section
              id="newsletter" // Anchor ID for smooth scroll
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
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto w-full">
                  <Input
                    ref={inputRef}
                    type="email"
                    placeholder="Enter your email"
                    required
                    disabled={submitting}
                    className="w-full bg-white/5 border-white/20 text-white placeholder:text-slate-400 focus:ring-[#3ed6ac] disabled:opacity-50"
                  />
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="rounded-md bg-gradient-to-tr from-[#06b6d4] to-[#8ef3c1] font-semibold text-black hover:shadow-md hover:shadow-[#8ef3c1]/50 ease-in-out duration-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-1 sm:flex-none"
                  >
                    {submitting ? "Subscribing..." : "Subscribe"}
                  </Button>
                </form>
              </Card>
            </motion.section>
          </div>
        </div>
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#1e293b",
            color: "#f1f5f9",
            border: "1px solid #334155",
          },
          success: {
            style: {
              borderColor: "#10b981",
            },
          },
          error: {
            style: {
              borderColor: "#ef4444",
            },
          },
        }}
      />
    </>
  );
}