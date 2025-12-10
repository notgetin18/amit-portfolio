"use client";
import { motion } from "framer-motion";
import { Calendar, TrendingUp, Code, Wrench, Rocket, Users, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import PrimaryButtons from "@/components/buttons/primaryButtons";
import SecondaryButton from "@/components/buttons/secondaryButton";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/constant";
import HeroBackground from "@/components/ui/HeroBackground";
import CollaboratorsCarousel from "./teamCrousel";

export default function ServicesPage() {
    return (
        <div className="min-h-screen relative overflow-y-auto bg-gradient-to-br from-[#07162b]/80 via-[#061025]/70 to-[#071826]/95">

            {/* Reuse your hero background for consistency */}
            <HeroBackground delay={200} />

            {/* Decorative gradients */}
            <div className="absolute -left-20 -top-10 w-72 h-72 bg-gradient-to-tr from-[#34d399]/30 to-[#06b6d4]/12 rounded-full blur-3xl mix-blend-screen pointer-events-none z-10" aria-hidden />
            <div className="absolute -right-14 bottom-8 w-80 h-80 bg-gradient-to-bl from-[#6ee7b7]/25 to-[#06b6d4]/8 rounded-full blur-3xl mix-blend-screen pointer-events-none z-10" aria-hidden />

            <div className="pt-28 pb-28 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                        className="text-center mb-16"
                    >
                        <motion.div variants={fadeInUp}>
                            <div className="inline-flex items-center text-sm text-slate-300 uppercase tracking-widest rounded-full bg-gradient-to-r from-white/5 via-white/3 to-transparent px-3 py-1 my-4 sm:my-6">
                                Tailored Solutions
                            </div>
                            {/* <h1 className="text-3xl md:text-4xl font-extrabold"> Freelance Service</h1> */}
                            <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] leading-tight mb-4">
                                Services We Deliver
                            </p>
                            <p className="text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed">
                                As a MERN full-stack specialist, I offer end-to-end engineering—from performant frontends to scalable backends. Flexible: Solo for rapid prototypes, or leading my curated 10+ person team for enterprise-scale delivery. Let's build what scales.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Services Grid */}
                    <motion.section
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {[
                                {
                                    title: "Digital Marketing Strategy",
                                    icon: TrendingUp,
                                    desc: "Crafting data-driven strategies for SEO, content, and paid campaigns to boost online presence and conversions.",
                                    priceHint: "Starting at $2.5k",
                                    teamNote: "Growth-focused",
                                },
                                {
                                    title: "Social Media Advertising",
                                    icon: Users,
                                    desc: "Targeted ad campaigns on platforms like Facebook, Instagram, and LinkedIn to reach your ideal audience and drive engagement.",
                                    priceHint: "Starting at $1.5k",
                                    teamNote: "Audience expansion",
                                },
                                {
                                    title: "Lead Generation & Nurturing",
                                    icon: Rocket,
                                    desc: "Implementing systems to capture, qualify, and nurture leads, turning prospects into loyal customers.",
                                    priceHint: "Starting at $3k",
                                    teamNote: "Sales pipeline",
                                },
                                {
                                    title: "Product & Frontend Engineering",
                                    icon: Wrench,
                                    desc: "Custom React/Next.js UIs with TypeScript—optimized for speed, accessibility, and SEO. From MVPs to polished SaaS dashboards.",
                                    priceHint: "Starting at $5k",
                                    teamNote: "Solo or team-led",
                                },
                                {
                                    title: "API Design & Backend Development",
                                    icon: Code,
                                    desc: "Robust Node/Express APIs, REST/GraphQL, payments/KYC integrations. Built for high concurrency and resilience.",
                                    priceHint: "Starting at $4k",
                                    teamNote: "Ideal for scale",
                                },
                                {
                                    title: "Performance Optimization",
                                    icon: TrendingUp,
                                    desc: "Lighthouse audits, caching, and TTFB reductions—delivering 30%+ speed gains without compromising features.",
                                    priceHint: "Starting at $2k",
                                    teamNote: "Quick wins solo",
                                },
                                {
                                    title: "Cloud Infrastructure & DevOps",
                                    icon: Rocket,
                                    desc: "AWS/Docker deployments, CI/CD pipelines, and cost-optimized infra for sustainable growth.",
                                    priceHint: "Starting at $3k",
                                    teamNote: "Team for complex setups",
                                },
                                {
                                    title: "Mobile App Development",
                                    icon: Code,
                                    desc: "Cross-platform React Native apps with seamless web sync—focusing on UX and offline resilience.",
                                    priceHint: "Starting at $6k",
                                    teamNote: "Full team delivery",
                                },
                                {
                                    title: "Consulting & Architecture Reviews",
                                    icon: Users,
                                    desc: "Tech audits, migration strategies, and team enablement. 100% client satisfaction on 15+ projects.",
                                    priceHint: "Hourly $150+",
                                    teamNote: "Personalized guidance",
                                },

                            ].map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    variants={fadeInUp}
                                    whileHover={{ y: -6 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group"
                                >
                                    <Card className="h-full border border-white/15 bg-gradient-to-br from-[#061025]/50 via-[#07162b]/30 to-transparent backdrop-blur-md hover:shadow-2xl transition-all duration-300 rounded-xl">
                                        <CardContent className="p-6 flex flex-col justify-between h-full">
                                            <div>
                                                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#8ef3c1] to-[#06b6d4] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                                    <service.icon className="w-6 h-6 text-black" />
                                                </div>
                                                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                                                <p className="text-slate-300 mb-4 text-sm leading-relaxed">{service.desc}</p>
                                                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                                                    {/* <span>{service.priceHint}</span> */}
                                                    <span className="text-[#3ed6ac] font-medium text-sm sm:text-base">{service.teamNote}</span>
                                                </div>
                                            </div>
                                            <Link href="/contact" className="w-full">
                                                <SecondaryButton
                                                    title="Discuss This Service"
                                                    containerStyles="w-full px-4 py-2 font-semibold tracking-wide text-sm rounded-full"
                                                />
                                            </Link>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Process Timeline */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] mb-3">
                                My Delivery Process
                            </h2>
                            <p className="text-sm text-slate-300 max-w-2xl mx-auto">
                                Structured yet flexible—tailored for freelance speed or team-scale precision. 100% on-time delivery.
                            </p>
                        </div>
                        <div className="relative max-w-4xl mx-auto">
                            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-px bg-gradient-to-b from-[#06b6d4] to-[#3ed6ac] opacity-30" aria-hidden />
                            <div className="space-y-12">
                                {[
                                    { step: "1. Discovery", desc: "Align on goals, scope, and roadmap via a 30-min call. Define success metrics upfront.", icon: Calendar },
                                    { step: "2. Architecture & Prototype", desc: "Wireframes, tech stack selection, and MVP build. Iterate with feedback loops.", icon: Wrench },
                                    { step: "3. Development & Testing", desc: "Full-stack implementation with CI/CD. Rigorous QA for resilience (solo or team QA).", icon: Code },
                                    { step: "4. Launch & Optimization", desc: "Deployment, monitoring, and post-launch tweaks. Handover with docs and support.", icon: Rocket },
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.step}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.3 }}
                                        viewport={{ once: true }}
                                        className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} justify-between`}
                                    >
                                        <div className="flex-1 max-w-md">
                                            <h3 className="text-lg font-semibold text-white mb-2 sm:pl-4">{item.step}</h3>
                                            <p className="text-slate-400 text-sm sm:pl-4">{item.desc}</p>
                                        </div>
                                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-[#8ef3c1] to-[#06b6d4] flex items-center justify-center ml-4 ${index % 2 === 0 ? 'ml-4' : 'mr-4'}`}>
                                            <item.icon className="w-6 h-6 text-black" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    {/* Collaborators Section */}
                    <CollaboratorsCarousel />

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center my-8"
                    >
                        <div className="inline-flex items-center text-sm text-slate-300 uppercase tracking-widest rounded-full bg-gradient-to-r from-white/5 via-white/3 to-transparent px-3 py-1 mb-4">
                            Next Steps
                        </div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                            Ready to Scope Your Project?
                        </h2>
                        <p className="text-slate-400 mb-6 max-w-xl mx-auto">
                            Whether it's a quick audit or full-team build, I'm here to deliver measurable impact.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <PrimaryButtons title="Start Discovery Call" containerStyles="px-8 py-3 rounded-3xl text-lg" />
                            </Link>
                            <SecondaryButton title="View Case Studies" handleClick={() => {/* Scroll to projects or link */ }} containerStyles="px-8 py-3 rounded-3xl text-lg" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}