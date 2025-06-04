"use client";

import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react"; // Added Menu and X icons
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { handleDownloadResume } from "@/utility";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navVariants = {
    open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200 max-w-7xl border-1 rounded-xl "
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          >
            Amit Kumar
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-slate-700 hover:text-blue-600 transition-colors"
              aria-label="Go to Home page"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-slate-700 hover:text-blue-600 transition-colors"
              aria-label="Go to About page"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-slate-700 hover:text-blue-600 transition-colors"
              aria-label="Go to Contact page"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-700 hover:text-blue-600 focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Resume Button (Desktop) */}
          <div className="hidden md:block">
            <Button
              onClick={() => handleDownloadResume("pdf")}
              className="bg-blue-600 hover:bg-blue-700 text-white"
              aria-label="Download Amit Kumar's resume in PDF format"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          variants={navVariants}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          className="md:hidden overflow-hidden"
        >
          <div className="flex flex-col space-y-4 pb-4">
            <Link
              href="/"
              className="text-slate-700 hover:text-blue-600 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Go to Home page"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-slate-700 hover:text-blue-600 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Go to About page"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-slate-700 hover:text-blue-600 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Go to Contact page"
            >
              Contact
            </Link>
            <Button
              onClick={() => {
                handleDownloadResume("pdf");
                setIsMenuOpen(false);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white w-full"
              aria-label="Download Amit Kumar's resume in PDF format"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
