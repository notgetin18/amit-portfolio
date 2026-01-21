"use client";

import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
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
import GlowText from "@/components/home/glowText";


const Projects = React.lazy(() => import("@/components/home/projects"));
const Services = React.lazy(() => import("@/components/home/services"));
const Testimonials = React.lazy(() => import("@/components/home/testimonials"));
const CTAsection = React.lazy(() => import("@/components/home/ctaSection"));


export default function ClientHomePage() {
    return (
        <LazyMotion features={domAnimation} strict>
            <div className="relative overflow-hidden">
                <HeroBackground delay={2500} />
                <div
                    className="absolute left-2 sm:-left-20 -top-10 w-20 sm:w-72 h-72 bg-gradient-to-tr from-[#34d399]/30 to-[#06b6d4]/12 rounded-full blur-3xl mix-blend-screen pointer-events-none z-10"
                    aria-hidden
                />
                <div
                    className="absolute right-3 sm:-right-14 bottom-8 w-20 sm:w-80 h-80 bg-gradient-to-bl from-[#6ee7b7]/25 to-[#06b6d4]/8 rounded-full blur-3xl mix-blend-screen pointer-events-none z-10"
                    aria-hidden
                />

                <header
                    className="pt-[calc(4rem+2rem)] px-4 sm:px-6 lg:px-8 relative z-10"
                    role="banner"
                >
                    <div className="max-w-7xl mx-auto">
                        <m.div
                            variants={staggerContainer}
                            initial="initial"
                            animate="animate"
                            className="text-center lg:text-left"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6 sm:py-10 md:py-12">
                                {/* Left column */}
                                <div className="lg:col-span-7 px-4 sm:px-6 md:px-0">
                                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] drop-shadow-2xl">
                                        Amit Kumar
                                        <span className="block text-2xl md:text-4xl font-semibold text-white/80 mt-2 tracking-normal">
                                            MERN Full‑Stack Developer India & Product Engineer
                                        </span>
                                    </h1>

                                    <m.p
                                        variants={fadeInUp}
                                        className="mt-6 leading-snug text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl"
                                    >
                                        I design and ship resilient, production-grade web
                                        applications — from fast, SEO-friendly Next.js frontends to
                                        scalable Node/Express backends and resilient cloud infra.
                                        I’ve launched SaaS products and platforms used by 1M+ users.
                                    </m.p>

                                    <m.div
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
                                    </m.div>

                                    <m.div
                                        variants={fadeInUp}
                                        className="mt-6 flex items-center gap-4 flex-wrap text-sm text-slate-300"
                                    >
                                        <div className="inline-flex items-center gap-3">
                                            <strong className="text-white text-lg font-bold">
                                                1M+
                                            </strong>
                                            <GlowText />
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
                                    </m.div>
                                </div>

                                {/* Right column – hero image */}
                                <div className="lg:col-span-5 flex justify-center lg:justify-end px-4 sm:px-6 md:px-0">
                                    <m.div
                                        variants={fadeInUp}
                                        className="relative w-[300px] sm:w-[360px] md:w-[420px] lg:w-[520px] rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-gradient-to-br from-[#07162b]/70 via-[#07162b]/40 to-[#0b1f2b]/30 p-6 backdrop-blur-md"
                                    >
                                        <div className="relative z-10 flex items-center justify-center p-6 bg-gradient-to-br from-white/5 to-transparent rounded-2xl">
                                            <Image
                                                src="/hero-illustration.svg"
                                                alt="Developer illustration"
                                                width={900}
                                                height={600}
                                                className="w-full h-auto"
                                                style={{ height: 'auto' }}
                                                priority
                                                fetchPriority="high"
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
                                                    <div className="text-xs text-slate-300">
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
                                    </m.div>
                                </div>
                            </div>

                            {/* Achievements badges */}
                            <m.div
                                variants={staggerContainer}
                                initial="initial"
                                animate="animate"
                                className="flex justify-center gap-3 items-center flex-wrap"
                                aria-hidden
                            >
                                <m.span
                                    variants={fadeInUp}
                                    className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-sm text-slate-200"
                                >
                                    ⭐ Bright Digi Gold — 1M+ users
                                </m.span>
                                <m.span
                                    variants={fadeInUp}
                                    className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-sm text-slate-200"
                                >
                                    🏥 Medical Kundali — healthcare SaaS
                                </m.span>
                                <m.span
                                    variants={fadeInUp}
                                    className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-sm text-slate-200"
                                >
                                    🎓 TestOfire — real-time EdTech
                                </m.span>
                            </m.div>

                            {/* Social icons */}
                            <m.div
                                variants={fadeInUp}
                                className="flex justify-center space-x-6 mt-8"
                            >
                                <m.a
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    href="https://github.com/notgetin18"
                                    className="text-gray-200 hover:text-[#eeb056] transition-colors"
                                    aria-label="GitHub"
                                >
                                    <GitHubIcon className="w-7 h-7" />
                                </m.a>
                                <m.a
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    href="https://www.linkedin.com/in/notgetin18"
                                    className="text-gray-200 hover:text-[#eeb056] transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <LinkedinIcon className="w-7 h-7" />
                                </m.a>
                                <m.a
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    href="https://x.com/Amitsin40190332"
                                    className="text-gray-100 hover:text-[#eeb056] transition-colors"
                                    aria-label="X"
                                >
                                    <XIcon className="w-10 h-10 my-1" />
                                </m.a>
                                <m.a
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    href="mailto:notgetin18@gmail.com"
                                    className="text-gray-200 hover:text-[#eeb056] transition-colors"
                                    aria-label="Email"
                                >
                                    <Mail className="w-7 h-7" />
                                </m.a>
                            </m.div>
                        </m.div>

                        {/* Arrow down */}
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="flex justify-center my-4 sm:my-6"
                        >
                            <m.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                            >
                                <ArrowDown className="w-8 h-8 text-white" />
                            </m.div>
                        </m.div>
                    </div>
                </header>

                <main className="relative z-10" id="main-content">
                    <section aria-labelledby="skills-heading" className="py-6">
                        <h2 id="skills-heading" className="sr-only">
                            Skills and Technologies
                        </h2>
                        <Skills />
                    </section>

                    <section
                        aria-labelledby="projects-heading"
                        className="relative z-10 py-8"
                    >
                        <h2 id="projects-heading" className="sr-only">
                            Featured Projects
                        </h2>
                        <Projects />
                    </section>

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
                    <CTAsection />
                </main>
            </div>
        </LazyMotion>
    );
}
