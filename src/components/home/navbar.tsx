"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Resume download function
const handleDownloadResume = () => {
  const resumeContent = `
AMIT KUMAR
MERN Stack Developer
Email: notgetin18@gmail.com
Phone: (+91) 9660637657

SUMMARY:
Full Stack Developer proficient in MERN stack technologies with solid back-end knowledge. Experienced in leading cross-functional teams and building scalable applications.

TECHNICAL SKILLS:
Frontend: JavaScript, React.js, React Native, Next.js 14, Redux, TypeScript, Tailwind CSS
Backend: Node.js, Express.js, TypeScript, API's Integration
DevOps: Docker (basics), Git and GitHub, Jira and Slack
Database: MongoDB, MySQL, AWS (basics)

EXPERIENCE:
Software Engineer (SE) - Bright Digital Gold | April 2022 - Present
• Developed responsive web and mobile interfaces with JavaScript, React.js, TypeScript, and Redux
• Effectively integrated APIs and engineered intuitive data visualizations for over 50,000 user base
• Boosted website speed by 30% using React State management, Formik, and optimizing KYC/transactions
• Collaborated with cross-functional teams to deliver superior software products, achieving a 10% revenue increase
• Implemented coupon discount calculations and promotional strategies, driving a revenue increase of over 20%

Software Engineer (SE) - TestOfire Technologies | November 2021 - Present
• Orchestrated the creation of a pioneering student and coaching app platform
• Enabled seamless user experiences by ensuring immediate updates between apps
• Architected a resilient API-based infrastructure, facilitating dynamic data exchange

Freelance Projects:
Medical Kundali | 2024 - Present
• Developing a comprehensive medical platform providing personalized health insights
• Built using MERN stack with focus on user experience and data security

EDUCATION:
Master of Computer Application | MAHGU | 2021 - 2023
Bachelor's Degree in Computer Application | IGNOU, Delhi | 2018 - 2021

ACHIEVEMENTS:
• Community Computer Skills and Education Volunteer (July 2020 - April 2022)
• Listening Audio Books and Cricket
  `;

  const blob = new Blob([resumeContent], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Amit_Kumar_Resume.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200 max-w-6xl border-1 rounded-xl items-center"
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
