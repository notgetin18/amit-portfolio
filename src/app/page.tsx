"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import Image from "next/image";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import XIcon from "@/components/icons/XIcon";
import GitHubIcon from "@/components/icons/GitHubIcon";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/constant";
import Skills from "@/components/home/Skills";
import SecondaryButton from "@/components/buttons/secondaryButton";
import PrimaryButtons from "@/components/buttons/primaryButtons";
import HeroBackground from "@/components/ui/HeroBackground";

const Projects = (React.lazy(() => import("@/components/home/projects")));
const Services = (React.lazy(() => import("@/components/home/services")));
const Testimonials = (React.lazy(() => import("@/components/home/testimonials")));
const CTAsection = (React.lazy(() => import("@/components/home/ctaSection")));


export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Amit Kumar",
    url: "https://www.amitdevjourney.xyz/",
    sameAs: [
      "https://github.com/notgetin18",
      "https://www.linkedin.com/in/notgetin18",
      "https://x.com/Amitsin40190332",
    ],
    jobTitle: "MERN Full-Stack Developer & Product Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Bright DiGi Gold",
    },
  };

  return (
    <div className="relative overflow-hidden" lang="en">
      {/* Add JSON-LD to the head of the document */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        key="person-jsonld"
      />

      <HeroBackground delay={400} />

      {/* Header (SEO + accessibility) */}
      <header
        className="pt-[calc(4rem+2rem)] px-4 sm:px-6 lg:px-8 relative z-10"
        role="banner"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center lg:text-left"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6 sm:py-10 md:py-12">
              {/* Left: premium headline + CTAs */}
              <div className="lg:col-span-7 px-4 sm:px-6 md:px-0">
                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] drop-shadow-2xl"
                >
                  Amit Kumar
                  <span className="block text-2xl md:text-4xl font-semibold text-white/80 mt-2 tracking-normal">
                    MERN Full‑Stack Developer & Product Engineer
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="mt-6 leading-snug text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl"
                >
                  I design and ship resilient, production-grade web applications
                  — from fast, SEO-friendly Next.js frontends to scalable
                  Node/Express backends and resilient cloud infra. I’ve launched
                  SaaS products and platforms used by 1M+ users.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="mt-6 flex flex-wrap gap-3 items-center"
                >
                  <div className="flex flex-row gap-2 sm:gap-4 justify-center items-center">
                    <Link href="/contact">
                      <SecondaryButton
                        title="Get In Touch"
                        containerStyles="px-4 sm:px-8 py-2 rounded-3xl text-sm sm:text-lg font-base sm:leading-wide"
                      />
                    </Link>
                    <Link href="/about">
                      <PrimaryButtons
                        title="More About Me"
                        containerStyles="px-4 sm:px-8 py-2 rounded-3xl text-sm sm:text-lg font-base sm:leading-wide"
                      />
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="mt-6 flex items-center gap-4 flex-wrap text-sm text-slate-300"
                >
                  <div className="inline-flex items-center gap-3">
                    <strong className="text-white text-lg">1M+</strong>
                    <div
                      className="text-sm"
                      style={{
                        color: "#fff",
                        textShadow:
                          "0 0 5px #ff005e, 0 0 10px #ff005e, 0 0 20px #ff005e, 0 0 40px #ff005e, 0 0 80px #ff005e",
                        animation: "glow 2s infinite alternate",
                      }}
                    >
                      users reached via Bright Digi Gold
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-3">
                    <strong className="text-white text-lg">SaaS</strong>
                    <div className="text-sm">
                      Medical Kundali — healthcare platform
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-3">
                    <strong className="text-white text-lg">Real-time</strong>
                    <div className="text-sm">
                      TestOfire — realtime education platform
                    </div>
                  </div>
                </motion.div>

                {/* Tech icons row */}
                <motion.div
                  variants={fadeInUp}
                  className="mt-6 flex items-center gap-3 flex-wrap"
                >
                  {/* This space can be used for tech stack icons in the future if desired. */}
                </motion.div>
              </div>

              {/* Right: visual card */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end px-4 sm:px-6 md:px-0">
                <motion.div
                  variants={fadeInUp}
                  className="relative w-[300px] sm:w-[360px] md:w-[420px] lg:w-[520px] rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-gradient-to-br from-[#07162b]/70 via-[#07162b]/40 to-[#0b1f2b]/30 p-6 backdrop-blur-md"
                >
                  <div className="absolute -left-10 -top-8 w-40 h-40 bg-gradient-to-tr from-[#34d399]/40 to-[#06b6d4]/20 rounded-full blur-3xl mix-blend-screen pointer-events-none" />
                  <div className="absolute -right-10 bottom-6 w-52 h-52 bg-gradient-to-bl from-[#6ee7b7]/30 to-[#06b6d4]/10 rounded-full blur-3xl mix-blend-screen pointer-events-none" />
                  <div className="relative z-10 flex items-center justify-center p-6 bg-gradient-to-br from-white/5 to-transparent rounded-2xl">
                    <Image
                      src="/hero-illustration.svg"
                      alt="Developer illustration"
                      width={900}
                      height={600}
                      className="w-full h-auto"
                      priority={true}
                    />
                  </div>

                  <div className="mt-4 flex justify-between items-center gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-10 text-white rounded-full flex items-center justify-center text-transparent bg-gradient-to-r from-[#739d88] via-[#52a18b] to-[#508c96] drop-shadow-2xl font-bold">
                        AK
                      </div>
                      <div>
                        <div className="text-sm text-slate-200 font-semibold">
                          Amit Kumar
                        </div>
                        <div className="text-xs text-slate-400">
                          MERN Full‑Stack • Product Engineer
                        </div>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300">
                      <div className="px-1.5 py-1 bg-white/5 rounded-full">
                        SaaS
                      </div>
                      <div className="px-1.5 py-1 bg-white/5 rounded-full">
                        Real-time
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Achievements */}
            <div
              className="flex justify-center gap-3 items-center flex-wrap"
              aria-hidden
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-sm text-slate-200">
                ⭐ Bright Digi Gold — 1M+ users
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-sm text-slate-200">
                🏥 Medical Kundali — healthcare SaaS
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-sm text-slate-200">
                🎓 TestOfire — real-time EdTech
              </span>
            </div>

            <motion.div
              variants={fadeInUp}
              className="flex justify-center space-x-6 mt-8"
            >
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://github.com/notgetin18"
                style={{}}
                className="text-gray-200 hover:text-[#eeb056] transition-colors"
                aria-label="Visit Amit Kumar's GitHub profile"
              >
                <GitHubIcon className="w-7 h-7" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.linkedin.com/in/notgetin18"
                className="text-gray-200 hover:text-[#eeb056] transition-colors"
                aria-label="Visit Amit Kumar's LinkedIn profile"
              >
                <LinkedinIcon className="w-7 h-7" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://x.com/notgetin18"
                className="text-gray-100 hover:text-[#eeb056] transition-colors "
                aria-label="Visit Amit Kumar's X profile"
              >
                <XIcon className="w-10 h-10 my-1" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="mailto:notgetin18@gmail.com"
                className="text-gray-200 hover:text-[#eeb056] transition-colors"
                aria-label="Email Amit Kumar"
              >
                <Mail className="w-7 h-7" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex justify-center my-4 sm:my-6"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            >
              <ArrowDown className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Main content (semantic) */}
      <main className="relative z-10" id="main-content">
        {/* Skills Section */}
        <section aria-labelledby="skills-heading" className="py-6">
          <h2 id="skills-heading" className="sr-only">
            Skills and Technologies
          </h2>
          <Skills />
        </section>

        {/* Projects Section — each project is an article in the Projects component */}
        <section
          aria-labelledby="projects-heading"
          className="relative z-10 py-8"
        >
          <h2 id="projects-heading" className="sr-only">
            Featured Projects
          </h2>
          <Projects />
        </section>

        {/* Services */}
        <section
          aria-labelledby="services-heading"
          className="relative z-10 py-10"
        >
          <h2 id="services-heading" className="sr-only">
            Services & Offerings
          </h2>
          <Services />
        </section>

        <section
          aria-labelledby="testimonials-heading"
          className="relative z-10 py-10"
        >
          <h2 id="testimonials-heading" className="sr-only">
            Testimonials
          </h2>
          <Testimonials />
        </section>

        {/* CTA Section / Contact */}
        <CTAsection />
      </main>
    </div>
  );
}
