"use client";

import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react"; // Added Menu and X icons
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { handleDownloadResume } from "@/utility";
import Image from "next/image";
import amitImage from "../../../public/favicons/web-app-manifest-192x192.png";
import PrimaryButtons from "../buttons/primaryButtons";

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
      style={{
        background:
          "linear-gradient(to right,rgb(70, 80, 188) 0%, rgba(209, 213, 255, 0) 50%, rgba(255, 255, 255, 0.3) 100%)",
      }}
      className="w-full max-w-7xl fixed top-3 backdrop-blur-lg z-20 border-b border-[0.5px] border-blue-200 rounded-xl shadow-[0px_0px_65px_0_rgba(147,197,253,0.5)]"
    // bg-gradient-to-r from-blue-500 via-purple-500 to-gray-900
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          >
            Amit Kumar
          </motion.div> */}

          <motion.div whileHover={{ scale: 1.05 }} className="  ">
            <Image
              src={amitImage}
              width={192}
              height={192}
              alt="amit image"
              className="h-16 w-16 rounded-full"
            />
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-slate-200 hover:text-blue-600 transition-colors font-semibold"
              aria-label="Go to Home page"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-slate-200 hover:text-blue-600 transition-colors font-semibold"
              aria-label="Go to About page"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-slate-200 hover:text-blue-600 transition-colors font-semibold"
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
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium uppercase"
              style={{
                fontWeight: 500,
                borderRadius: "20px",
                border: "0.5px solid #F9DDB5",
                background:
                  "linear-gradient(90deg, #EEB056 0%,rgb(161, 103, 16) 100%)", // Gradient background
                boxShadow: "0px 4px 8px 0pxrgba(251, 250, 250, 0.3)", // Subtle shadow for depth
                position: "relative", // Ensure proper layering
                outline: "none", // Remove default outline
              }}
              aria-label="Download Amit Kumar's resume in PDF format"
            >
              <Download className="w-4 h-4 mr-1 text-white " />
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
              className="text-slate-200 hover:text-blue-600 transition-colors text-center font-semibold"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Go to Home page"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-slate-200 hover:text-blue-600 transition-colors text-center font-semibold"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Go to About page"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-slate-200 hover:text-blue-600 transition-colors text-center font-semibold"
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
