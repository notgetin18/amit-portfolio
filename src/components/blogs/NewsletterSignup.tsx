"use client";

import { useRef, useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSignup() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const email = inputRef.current?.value.trim();
    if (!email) {
      setSubmitting(false);
      toast.error("Please enter a valid email.", { duration: 3000 });
      return;
    }

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
              <Link href="/blogs" className="text-[#06b6d4] hover:underline">Browse Teasers →</Link>
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
    <motion.section
      id="newsletter" // Anchor ID for smooth scroll
      style={{ scrollMarginTop: '100px' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center py-8 px-4"
    >
      <Card className="p-5 sm:p-10 max-w-4xl mx-auto bg-gradient-to-r from-[#06b6d4]/20 to-[#3ed6ac]/20 border border-white/10 backdrop-blur-sm text-center">
        <h2 className="text-2xl sm:text-4xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4]">Stay Updated</h2>
        <p className="text-sm sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
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
  );
}
