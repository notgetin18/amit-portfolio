"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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

export default function HomePage() {
  const handleDownloadResume = () => {
    // Create a simple text version of the resume for download
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
Bachelor's Degree in Computer Application | IGNOU, Delhi | June 2018 - June 2021

ACHIEVEMENTS:
• Community Computer Skills and Education Volunteer (July 2020 - April 2022)
• Listening Audio Books and Cricket
    `;

    const blob = new Blob([resumeContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "AmitKumar_Resume.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200"
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

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-slate-800 mb-6"
            >
              MERN Stack
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Developer
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Crafting exceptional digital experiences with modern technologies,
              specializing in the MERN stack. Building scalable applications for
              50,000+ users.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 py-3">
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex justify-center space-x-6"
            >
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://github.com/amitkumar"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://linkedin.com/in/amitkumar"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://twitter.com/amitkumar"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="mailto:notgetin18@gmail.com"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex justify-center mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            >
              <ArrowDown className="w-6 h-6 text-slate-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Technical Expertise
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Proficient in modern web technologies with a focus on creating
              scalable, user-friendly applications
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                category: "Frontend",
                skills: [
                  "React.js",
                  "Next.js 14",
                  "TypeScript",
                  "Tailwind CSS",
                ],
              },
              {
                category: "Backend",
                skills: [
                  "Node.js",
                  "Express.js",
                  "API Integration",
                  "TypeScript",
                ],
              },
              {
                category: "Database",
                skills: [
                  "MongoDB",
                  "MySQL",
                  "AWS (basics)",
                  "Data Visualization",
                ],
              },
              {
                category: "DevOps",
                skills: ["Docker", "Git & GitHub", "Jira", "Slack"],
              },
            ].map((skillGroup, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-slate-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">
                      {skillGroup.category}
                    </h3>
                    <ul className="space-y-2">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <li
                          key={skillIndex}
                          className="text-slate-600 flex items-center"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Showcasing impactful applications that serve thousands of users
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-slate-200">
                <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500"></div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">
                    BrightDigiGold
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Comprehensive digital gold platform serving 50,000+ users
                    with optimized performance and integrated payment gateways.
                    Achieved 30% speed improvement and 20% revenue increase.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["React.js", "Next.js", "TypeScript", "MongoDB"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-slate-200">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500"></div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">
                    TestOfire Technologies
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Revolutionary student and coaching app platform with
                    real-time synchronization. Architected API-based
                    infrastructure for seamless communication between
                    applications.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["React.js", "Next.js", "Node.js", "Express.js"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-slate-200">
                <div className="h-48 bg-gradient-to-br from-green-400 to-teal-500"></div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">
                    Medical Kundali
                  </h3>
                  <p className="text-slate-600 mb-4">
                    A comprehensive platform providing personalized medical
                    insights and health recommendations based on individual
                    data.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["React.js", "Next.js", "Node.js", "MongoDB"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Specializing in MERN stack development to deliver high-quality web
              solutions.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Web Application Development",
                description:
                  "Custom web applications tailored to your specific business needs.",
              },
              {
                title: "API Development and Integration",
                description:
                  "Building robust APIs and integrating them seamlessly into your applications.",
              },
              {
                title: "Performance Optimization",
                description:
                  "Improving the speed and efficiency of your existing web applications.",
              },
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-slate-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-slate-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next project and create exceptional
              digital experiences together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="px-8 py-3"
              >
                <Link href="/contact">Start a Project</Link>
              </Button>
              <Button
                onClick={handleDownloadResume}
                size="lg"
                variant="outline"
                className="px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
