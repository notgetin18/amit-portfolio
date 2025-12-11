"use client";

import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useMemo } from "react";
import { handleDownloadResume } from "@/utility";
import Image from "next/image";
import amitImage from "../../../public/favicons/web-app-manifest-192x192.png";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = useMemo(
    () => [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/services", label: "Services" },
      { href: "/blog", label: "Blog" },
    ],
    []
  );

  const navVariants = {
    open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-7xl fixed top-3 -translate-x-1/2 bg-[#07162b]/50 backdrop-blur-lg z-20 border border-white/15 rounded-3xl shadow-lg shadow-black/20"
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
              className="h-16 w-16 rounded-full border-2 border-white/50 shadow-md shadow-white/80"
              priority
            />
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 border border-white/20 rounded-full px-8 py-3 shadow-sm shadow-white/30 backdrop-blur-lg">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-semibold transition-colors duration-300 ${isActive
                    ? "bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4]"
                    : "text-slate-300 hover:text-[#3ed6ac]"
                    }`}
                  aria-label={`Go to ${link.label} page`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-200 hover:text-[#3ed6ac] focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {/* Resume Button (Desktop) */}
          <div className="hidden md:block">
            <Button
              onClick={() => handleDownloadResume("pdf")}
              className=" text-white font-medium uppercase"
              style={{
                fontWeight: 600,
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
              <Download style={{ fontWeight: 600 }} className="w-4 h-4 mr-1 text-white" />
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
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={`mobile-${link.href}`}
                  href={link.href}
                  className={`text-center font-semibold transition-colors duration-300 py-2 ${isActive
                    ? "bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4]"
                    : "text-slate-200 hover:text-[#3ed6ac]"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-label={`Go to ${link.label} page`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button
              onClick={() => {
                handleDownloadResume("pdf");
                setIsMenuOpen(false);
              }}
              style={{
                fontWeight: 600,
                borderRadius: "20px",
                border: "0.5px solid #F9DDB5",
                background:
                  "linear-gradient(90deg, #EEB056 0%,rgb(161, 103, 16) 100%)", // Gradient background
                boxShadow: "0px 4px 8px 0pxrgba(251, 250, 250, 0.3)", // Subtle shadow for depth
                position: "relative", // Ensure proper layering
                outline: "none", // Remove default outline
              }}
              className=" text-white w-full tracking-wide"
              aria-label="Download Amit Kumar's resume in PDF format"
            >
              <Download
                className="w-4 h-4 mr-1.5"
                style={{ fontWeight: 600 }}
              />
              Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
