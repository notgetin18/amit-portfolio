"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Phone, Github, Linkedin, Twitter, Download, MapPin, Send } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You can integrate with email services like EmailJS, Formspree, etc.
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleDownloadResume = (format: string) => {
    let resumeContent = `
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
    `

    let blob: Blob
    let filename: string

    if (format === "pdf") {
      resumeContent = "PDF Resume content here (replace with actual PDF generation logic)"
      blob = new Blob([resumeContent], { type: "application/pdf" })
      filename = "AmitKumar_Resume.pdf"
    } else if (format === "docx") {
      resumeContent = "DOCX Resume content here (replace with actual DOCX generation logic)"
      blob = new Blob([resumeContent], {
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      })
      filename = "AmitKumar_Resume.docx"
    } else {
      blob = new Blob([resumeContent], { type: "text/plain" })
      filename = "AmitKumar_Resume.txt"
    }

    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
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
              <Link href="/">Amit Kumar</Link>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-slate-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-blue-600 font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="text-center mb-16">
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Let's Connect
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your next project or just want to say hello? I'm available for freelance opportunities
              and would love to explore how we can work together.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Get in Touch</h2>
                <p className="text-lg text-slate-600 mb-8">
                  I'm always open to discussing new freelance opportunities, interesting projects, or just having a chat
                  about technology and development.
                </p>
              </div>

              <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-6">
                <motion.div variants={fadeInUp}>
                  <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800">Email</h3>
                        <a
                          href="mailto:notgetin18@gmail.com"
                          className="text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          notgetin18@gmail.com
                        </a>
                      </div>
                    </div>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800">Phone</h3>
                        <a href="tel:+919660637657" className="text-green-600 hover:text-green-700 transition-colors">
                          (+91) 9660637657
                        </a>
                      </div>
                    </div>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800">Location</h3>
                        <p className="text-purple-600">Delhi, India</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pt-8"
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="https://github.com/amitkumar"
                    className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 hover:text-slate-800 hover:bg-slate-200 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="https://linkedin.com/in/amitkumar"
                    className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 hover:text-blue-700 hover:bg-blue-200 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="https://twitter.com/amitkumar"
                    className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600 hover:text-sky-700 hover:bg-sky-200 transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                  </motion.a>
                </div>
              </motion.div>

              {/* Resume Download */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-8"
              >
                <div className="flex flex-col space-y-4">
                  <Button
                    onClick={() => handleDownloadResume("pdf")}
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume (PDF)
                  </Button>
                  <Button
                    onClick={() => handleDownloadResume("docx")}
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume (DOCX)
                  </Button>
                  <Button
                    onClick={() => handleDownloadResume("txt")}
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume (Printable)
                  </Button>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Name
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
                <p className="text-sm text-slate-500 mt-4">
                  This form uses client-side validation and doesn't store your data. By sending, you agree that I will
                  receive your message via email.
                </p>
              </Card>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Card className="p-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
                Whether you need a full-stack application, API integration, or performance optimization, I'm here to
                help bring your ideas to life as a freelancer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="px-8 py-3">
                  <a href="mailto:notgetin18@gmail.com">Start a Conversation</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600"
                >
                  <Link href="/about">Learn More About Me</Link>
                </Button>
              </div>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  )
}
