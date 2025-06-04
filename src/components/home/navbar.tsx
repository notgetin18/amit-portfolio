"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const handleDownloadResume = () => {
  let url: string;
  let filename: string;
  url = "/Amit-Resume.pdf";
  filename = "Amit_Kumar_Resume.pdf";

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200 max-w-6xl border-1 rounded-xl place-items-center"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          >
            Amit Kumar
          </motion.div>
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </div>
          <Button
            onClick={handleDownloadResume}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Download className="w-4 h-4 mr-2" />
            Resume
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
