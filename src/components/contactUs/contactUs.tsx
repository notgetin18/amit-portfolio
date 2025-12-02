"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Download, MapPin, Send } from "lucide-react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import XIcon from "@/components/icons/XIcon";
import GitHubIcon from "@/components/icons/GitHubIcon";
import PrimaryButtons from "@/components/buttons/primaryButtons";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import HeroBackground from "../ui/HeroBackground";

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

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const validateForm = () => {
    const newErrors = { name: "", email: "", subject: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  const handleDownloadResume = (format: string) => {
    let url: string;
    let filename: string;

    if (format === "pdf") {
      url = "/Amit-Resume.pdf";
      filename = "Amit_Kumar_Resume.pdf";
    } else if (format === "docx") {
      url = "/Amit-Resume.docx";
      filename = "Amit_Kumar_Resume.docx";
    } else {
      return;
    }

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#07162b]/80 via-[#061025]/70 to-[#071826]/95">
      {/* Decorative gradient layers */}
      <HeroBackground />
      <div
        className="absolute -left-20 -top-10 w-72 h-72 bg-gradient-to-tr from-[#34d399]/30 to-[#06b6d4]/12 rounded-full blur-3xl mix-blend-screen pointer-events-none z-0"
        aria-hidden
      />
      <div
        className="absolute -right-14 bottom-8 w-80 h-80 bg-gradient-to-bl from-[#6ee7b7]/25 to-[#06b6d4]/8 rounded-full blur-3xl mix-blend-screen pointer-events-none z-0"
        aria-hidden
      />

      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center mb-12 sm:mb-16"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] mb-4"
            >
              Let's Connect
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed"
            >
              Ready to discuss your next project or just want to say hello? I'm
              available for freelance opportunities and would love to explore
              how we can work together.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8 lg:col-span-5"
            >
              <div>
                <h2 className="text-3xl font-bold text-[#06b6d4] mb-4">
                  Get in Touch
                </h2>
                <p className="text-base text-slate-400">
                  I'm always open to discussing new freelance opportunities or
                  interesting projects. Feel free to reach out.
                </p>
              </div>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="space-y-4"
              >
                <motion.div variants={fadeInUp}>
                  <Card className="p-4 bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-[#3ed6ac]" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-slate-100">
                          Email
                        </h3>
                        <a
                          href="mailto:notgetin18@gmail.com"
                          className="text-sm text-[#3ed6ac] hover:text-[#8ef3c1] transition-colors"
                          aria-label="Email Amit Kumar at notgetin18@gmail.com"
                        >
                          notgetin18@gmail.com
                        </a>
                      </div>
                    </div>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="p-4 bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-[#3ed6ac]" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-slate-100">
                          Phone
                        </h3>
                        <a
                          href="tel:+919660637657"
                          className="text-sm text-[#3ed6ac] hover:text-[#8ef3c1] transition-colors"
                          aria-label="Call Amit Kumar at +91 9660637657"
                        >
                          (+91) 9660637657
                        </a>
                      </div>
                    </div>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="p-4 bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-[#3ed6ac]" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-slate-100">
                          Location
                        </h3>
                        <p className="text-sm text-slate-300">Delhi, India</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="pt-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    href="https://www.github.com/notgetin18"
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-300 bg-white/10 hover:text-white hover:bg-white/20 transition-all duration-300"
                    aria-label="Visit Amit Kumar's GitHub profile"
                  >
                    <GitHubIcon className="w-7 h-7" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="https://www.linkedin.com/in/notgetin18"
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-300 bg-white/10 hover:text-white hover:bg-white/20 transition-all duration-300"
                    aria-label="Visit Amit Kumar's LinkedIn profile"
                  >
                    <LinkedinIcon className="w-7 h-7" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="https://x.com/notgetin18"
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-300 bg-white/10 hover:text-white hover:bg-white/20 transition-all duration-300"
                    aria-label="Visit Amit Kumar's X profile"
                  >
                    <XIcon className="w-10 h-10 pt-2.5 pl-2.5" />
                  </motion.a>
                </div>
              </motion.div>

              {/* Resume Download */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="pt-6"
              >
                <div className="flex flex-col space-y-4">
                  <button
                    type="button"
                    onClick={() => handleDownloadResume("pdf")}
                    className="w-full flex items-center justify-center py-3 text-base rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-200 text-white"
                    aria-label="Download Amit Kumar's resume in PDF format"
                  >
                    <Download className="w-5 h-5 mr-2 text-[#3ed6ac]" />
                    <span>Download Resume (PDF)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDownloadResume("docx")}
                    className="w-full flex items-center justify-center py-3 text-base rounded-md bg-transparent border border-white/10 hover:bg-white/5 transition-colors duration-200 text-white"
                    aria-label="Download Amit Kumar's resume in DOCX format"
                  >
                    <Download className="w-5 h-5 mr-2 text-[#3ed6ac]" />
                    <span>Download Resume (DOCX)</span>
                  </button>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <Card className="p-6 sm:p-8 bg-white/5 border border-white/10 backdrop-blur-lg">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-300 mb-2"
                      >
                        Name
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/5 border-white/20 text-white placeholder:text-slate-400 focus:ring-[#3ed6ac]"
                        placeholder="Your name"
                        aria-invalid={!!errors.name}
                        aria-describedby={
                          errors.name ? "name-error" : undefined
                        }
                      />
                      {errors.name && (
                        <p
                          id="name-error"
                          className="text-red-600 text-sm mt-1"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-300 mb-2"
                      >
                        Email
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/5 border-white/20 text-white placeholder:text-slate-400 focus:ring-[#3ed6ac]"
                        placeholder="your.email@example.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                      />
                      {errors.email && (
                        <p
                          id="email-error"
                          className="text-red-600 text-sm mt-1"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/5 border-white/20 text-white placeholder:text-slate-400 focus:ring-[#3ed6ac]"
                      placeholder="What's this about?"
                      aria-invalid={!!errors.subject}
                      aria-describedby={
                        errors.subject ? "subject-error" : undefined
                      }
                    />
                    {errors.subject && (
                      <p
                        id="subject-error"
                        className="text-red-600 text-sm mt-1"
                      >
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full bg-white/5 border-white/20 text-white placeholder:text-slate-400 focus:ring-[#3ed6ac]"
                      placeholder="Tell me about your project or just say hello..."
                      aria-invalid={!!errors.message}
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                    />
                    {errors.message && (
                      <p
                        id="message-error"
                        className="text-red-600 text-sm mt-1"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <PrimaryButtons
                    title="Send Message"
                    // Icon={Send}
                    btnType="submit"
                    containerStyles="w-full justify-center py-3 text-xl font-semibold rounded-2xl"
                    ariaLabel="Send message to Amit Kumar"
                  />
                </form>
                <p className="text-xs text-slate-500 mt-4 text-center">
                  This form uses client-side validation and doesn't store your
                  data. By sending, you agree that I will receive your message
                  via email.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
