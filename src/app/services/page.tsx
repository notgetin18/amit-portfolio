"use client";

import { motion } from "framer-motion";
import { Database, Smartphone, Globe, Zap, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

export default function ServicesPage() {
  const services = [
    {
      icon: Globe,
      title: "Full-Stack Web Development",
      description:
        "Complete MERN stack applications from concept to deployment",
      features: [
        "React.js Frontend",
        "Node.js Backend",
        "MongoDB Database",
        "Express.js API",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using React Native",
      features: [
        "iOS & Android",
        "Native Performance",
        "API Integration",
        "Push Notifications",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Database,
      title: "API Development & Integration",
      description: "RESTful APIs and third-party service integrations",
      features: [
        "REST APIs",
        "Database Design",
        "Payment Gateways",
        "Real-time Features",
      ],
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Speed up your existing applications and improve user experience",
      features: [
        "Code Optimization",
        "Database Tuning",
        "Caching Strategies",
        "Load Time Reduction",
      ],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "Understanding your requirements, goals, and technical specifications",
    },
    {
      step: "02",
      title: "Design & Architecture",
      description:
        "Creating wireframes, system architecture, and technical roadmap",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "Agile development with regular updates and comprehensive testing",
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Production deployment with ongoing maintenance and support",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-200"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              <Link href="/">Amit Kumar</Link>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-slate-700 hover:text-purple-600 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-slate-700 hover:text-purple-600 transition-colors"
              >
                About
              </Link>
              <Link href="/services" className="text-purple-600 font-medium">
                Services
              </Link>
              <Link
                href="/blog"
                className="text-slate-700 hover:text-purple-600 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-slate-700 hover:text-purple-600 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center mb-16"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-slate-800 mb-6"
            >
              Freelance Services
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            >
              Professional MERN stack development services to bring your ideas
              to life. From concept to deployment, I deliver scalable solutions
              that drive results.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 text-center">
              What I Offer
            </h2>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {services.map((service, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-slate-200 overflow-hidden">
                    <div
                      className={`h-20 bg-gradient-to-r ${service.gradient} flex items-center justify-center`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-slate-800 mb-3">
                        {service.title}
                      </h3>

                      <p className="text-slate-600 mb-4">
                        {service.description}
                      </p>

                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-slate-600"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Process Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 text-center">
              My Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center p-6 h-full hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm">{step.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Pricing Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 text-center">
              Flexible Pricing
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  Hourly Rate
                </h3>
                <div className="text-3xl font-bold text-purple-600 mb-4">
                  $25-40/hr
                </div>
                <p className="text-slate-600 mb-4">
                  Perfect for small tasks and consultations
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Bug fixes and updates</li>
                  <li>• Code reviews</li>
                  <li>• Technical consultations</li>
                  <li>• Performance optimization</li>
                </ul>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-purple-200 bg-gradient-to-b from-purple-50 to-white">
                <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Most Popular
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  Project Based
                </h3>
                <div className="text-3xl font-bold text-purple-600 mb-4">
                  $500-5000
                </div>
                <p className="text-slate-600 mb-4">
                  Complete project development
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Full-stack applications</li>
                  <li>• Mobile app development</li>
                  <li>• API development</li>
                  <li>• Deployment & maintenance</li>
                </ul>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  Monthly Retainer
                </h3>
                <div className="text-3xl font-bold text-purple-600 mb-4">
                  $2000+/mo
                </div>
                <p className="text-slate-600 mb-4">
                  Ongoing development and support
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Dedicated development time</li>
                  <li>• Priority support</li>
                  <li>• Regular updates</li>
                  <li>• Long-term partnership</li>
                </ul>
              </Card>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="p-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-purple-100 mb-6 max-w-2xl mx-auto">
                Let's discuss your requirements and create something amazing
                together. I'm here to turn your ideas into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="px-8 py-3"
                >
                  <Link href="/contact">Get a Quote</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="px-8 py-3 border-white text-white hover:bg-white hover:text-purple-600"
                >
                  <Link href="/about">View My Work</Link>
                </Button>
              </div>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
