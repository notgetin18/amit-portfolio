"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Award,
  Users,
  TrendingUp,
  Code,
  Wrench,
  Palette,
  Rocket,
  MapPin,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import StatTile from "@/components/ui/StatTile";
import TimelineItem from "@/components/ui/TimelineItem";
import ProfileCard from "@/components/ui/ProfileCard";
import { handleDownloadResume } from "@/utility";
import { fadeInUp, staggerContainer } from "@/constant";
import HeroBackground from "@/components/ui/HeroBackground";

export default function AboutUs() {
  return (
    <div className="min-h-screen relative overflow-y-auto bg-gradient-to-br from-[#07162b]/80 via-[#061025]/70 to-[#071826]/95">
      {/* Reuse home hero background (particles + overlay) */}
      <HeroBackground />
      {/* Decorative gradient layers to match homepage hero visuals */}
      <div className="absolute -left-20 -top-10 w-72 h-72 bg-gradient-to-tr from-[#34d399]/30 to-[#06b6d4]/12 rounded-full blur-3xl mix-blend-screen pointer-events-none z-10" aria-hidden />
      <div className="absolute -right-14 bottom-8 w-80 h-80 bg-gradient-to-bl from-[#6ee7b7]/25 to-[#06b6d4]/8 rounded-full blur-3xl mix-blend-screen pointer-events-none z-10" aria-hidden />

      <div className="pt-28 pb-28 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="mb-14 mt-6 sm:mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] leading-tight">
                  About — Amit Kumar
                </motion.h1>

                <motion.p variants={fadeInUp} className="mt-4 text-lg text-slate-300 max-w-3xl leading-relaxed">
                  I craft production-grade web platforms with a focus on performance, resilience, and delightful UX. From fast Next.js frontends to robust Node/Express backends, I help teams ship measurable outcomes and scale with confidence.
                </motion.p>

                <motion.div variants={fadeInUp} className="mt-6 flex gap-3 flex-wrap">
                  <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/3 border border-white/5 text-xs text-slate-200">MERN • TypeScript • Next.js</div>
                  <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/3 border border-white/5 text-xs text-slate-200">Performance-focused</div>
                </motion.div>
              </div>

              <div className="lg:col-span-5">
                <motion.div variants={fadeInUp}>
                  <ProfileCard
                    name="Amit Kumar"
                    title="MERN Full‑Stack Developer · Product Engineer"
                    description="I love turning product ideas into reliable, scalable experiences. Recent work includes Bright Digi Gold (1M+ users), TestOfire (real-time platform), and Medical Kundali (healthcare SaaS)."
                    email="notgetin18@gmail.com"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-14"
          >
            {[
              { Icon: Users, number: "100k+", label: "Users Served" },
              { Icon: TrendingUp, number: "30%", label: "Performance Boost" },
              { Icon: Code, number: "20%", label: "Revenue Increase" },
              { Icon: Award, number: "4+", label: "Years Experience" },
            ].map((stat, index) => (
              <StatTile key={index} index={index} Icon={stat.Icon} number={stat.number} label={stat.label} />
            ))}
          </motion.div>

          {/* Experience Timeline */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4]">Professional Journey</h2>
              <p className="mt-3 text-sm text-slate-300 max-w-2xl mx-auto">A condensed timeline of roles and achievements — product first, engineer second.</p>
            </div>

            <div className="space-y-8">
              {/* Current Role */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <TimelineItem
                  id="current-role-label"
                  title="Software Engineer (SE)"
                  company="Bright Digital Gold"
                  dateRange="April 2022 - Present"
                  bullets={[
                    'Developed responsive web and mobile interfaces serving 50,000+ users with JavaScript, React.js, TypeScript, and Redux',
                    'Boosted website speed by 30% through React State management optimization and KYC/transaction improvements',
                    'Implemented promotional strategies driving 20% revenue increase through coupon calculations and gifting scenarios',
                    'Led cross-functional teams achieving 10% revenue growth and 15% boost in customer engagement',
                  ]}
                  accent="#06b6d4"
                />
              </motion.div>

              {/* Medical Kundali (Freelance / Product) */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <TimelineItem
                  id="medical-kundali-label"
                  title="Product Engineer / Freelance"
                  company="Medical Kundali — Healthcare SaaS"
                  dateRange="2024 - Present"
                  bullets={[
                    'Developing a comprehensive medical platform delivering personalized health insights and care workflows',
                    'Built with MERN stack, focusing on UX, data security and HIPAA-aware safeguards for clinical data',
                    'Improved performance and data sync for patient records and analytics; designed scalable APIs and observability',
                  ]}
                  accent="#00c4a7"
                />
              </motion.div>

              {/* Previous Role */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <TimelineItem
                  id="previous-role-label"
                  title="Software Engineer (SE)"
                  company="TestOfire Technologies"
                  dateRange="November 2021 - November 2024"
                  bullets={[
                    'Orchestrated creation of pioneering student and coaching app platform with real-time synchronization',
                    'Architected resilient API-based infrastructure facilitating dynamic data exchange between applications',
                    'Enhanced communication efficiency through seamless user experience and instant updates',
                  ]}
                  accent="#6c5ce7"
                />
              </motion.div>
            </div>
          </motion.section>

          {/* Services Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] mb-8 text-center">Services I Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: 'Product & Frontend Engineering',
                  icon: Wrench,
                  desc: 'Designing accessible, high-performance React & Next.js frontends — component architecture, UX optimizations and CI flow.',
                },
                {
                  title: 'API Design & Integrations',
                  icon: Code,
                  desc: "REST and GraphQL APIs, payments integrations and resilient event-driven backends with Node/Express and TypeScript.",
                },
                {
                  title: 'Performance & Observability',
                  icon: TrendingUp,
                  desc: 'Lighthouse-driven LCP/TTFB optimizations, caching, and observability for resilient production systems.',
                },
                {
                  title: 'Cloud & Infrastructure',
                  icon: Rocket,
                  desc: 'AWS-native deployments, CI/CD, Docker workflows and scalable infra design for sustainable cost/performance trade-offs.',
                },
                {
                  title: 'Mobile & App Development',
                  icon: Code,
                  desc: 'Full-stack mobile & cross-platform apps with React Native and performance-focused architectures.',
                },
                {
                  title: 'SEO & Growth Optimization',
                  icon: TrendingUp,
                  desc: 'Technical SEO, structured data, and Lighthouse-first engineering to improve discoverability and conversion.',
                },
                {
                  title: 'Digital Marketing & Acquisition',
                  icon: Users,
                  desc: 'Data-driven acquisition, landing page optimization, analytics and A/B testing to scale user growth.',
                },
                {
                  title: 'Web Development',
                  icon: Code,
                  desc: 'Production-ready websites using Next.js, TypeScript — focused on accessibility, SEO and speed.',
                },
                {
                  title: 'Consulting & Architecture',
                  icon: Wrench,
                  desc: 'Architecture reviews, migration planning and developer experience improvements for teams scaling fast.',
                },
                {
                  title: 'UX & Product Design',
                  icon: Palette,
                  desc: 'Human-first design, rapid prototyping and accessible UI systems that convert users into customers.',
                },
              ].map((s) => (
                <motion.div key={s.title} whileHover={{ y: -6 }} whileFocus={{ y: -6 }} tabIndex={0} role="article" aria-label={s.title} className="outline-none">
                  <Card className="p-6 rounded-xl bg-white/3">
                      {s.icon ? (
                        // if a custom icon provided use it
                        <s.icon className="w-8 h-8 text-[#8ef3c1] mx-auto mb-3" />
                      ) : (
                        // fallback icon
                        <div className="w-8 h-8 mx-auto mb-3 text-[#8ef3c1] flex items-center justify-center">
                          <Code className="w-6 h-6" />
                        </div>
                      )}
                    <h3 className="text-xl font-semibold text-white mb-2 text-center">{s.title}</h3>
                    <p className="text-slate-300 text-center text-sm">{s.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Education & Achievements */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Education */}
              <motion.div whileHover={{ y: -6 }} whileFocus={{ y: -6 }} tabIndex={0} role="article" aria-label="Education section" className="outline-none">
                <Card className="p-6 rounded-xl bg-white/3 transition-transform duration-150 hover:translate-y-[-3px]">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                    <Award className="w-6 h-6 mr-3 text-blue-600" />
                    Education
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800">
                        Master of Computer Application
                      </h4>
                      <p className="text-blue-600 font-medium">
                        Maharaja Agrasen Himalayan Garhwal University (MAHGU)
                      </p>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-5 h-5 text-slate-700 " />
                        <span>Uttarakhand</span>
                      </div>
                      <div className="flex items-center text-slate-600 mt-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        2021 - 2023
                      </div>
                    </div>
                    <div className="border-l-2 border-slate-200">
                      <h4 className="text-lg font-semibold text-slate-800">
                        Bachelor in Computer Application
                      </h4>
                      <p className="text-blue-600 font-medium">
                        Indira Gandhi National Open University (IGNOU)
                      </p>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-5 h-5 text-slate-700 " />
                        <span>Delhi</span>
                      </div>
                      <div className="flex items-center text-slate-600 mt-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        2018 - 2021
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Community Work */}
              <motion.div whileHover={{ y: -6 }} whileFocus={{ y: -6 }} tabIndex={0} role="article" aria-label="Community impact" className="outline-none">
                <Card className="p-6 rounded-xl bg-white/3 transition-transform duration-150 hover:translate-y-[-3px]">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                    <Users className="w-6 h-6 mr-3 text-green-600" />
                    Community Impact
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800">
                        Computer Skills & Education Volunteer
                      </h4>
                      <p className="text-green-600 font-medium">
                        Local Community
                      </p>
                      <div className="flex items-center text-slate-600 mt-1 mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        July 2020 - April 2022
                      </div>
                      <p className="text-slate-600">
                        Volunteered as a tutor for locals in my village, teaching
                        underprivileged children basic computer skills and primary
                        education.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.section>

          {/* Personal Interests */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] mb-8 text-center">Beyond Code</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.div whileHover={{ y: -6 }} whileFocus={{ y: -6 }} tabIndex={0} role="article" aria-label="Audio books" className="outline-none">
                <Card className="p-6 rounded-xl bg-white/3 transition-transform duration-150 hover:translate-y-[-3px]">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Audio Books
                  </h3>
                  <p className="text-slate-600">
                    Passionate about continuous learning through audiobooks,
                    staying updated with technology trends and personal
                    development.
                  </p>
                </Card>
              </motion.div>
              <motion.div whileHover={{ y: -6 }} whileFocus={{ y: -6 }} tabIndex={0} role="article" aria-label="Cricket" className="outline-none">
                <Card className="p-6 rounded-xl bg-white/3 transition-transform duration-150 hover:translate-y-[-3px]">
                  <div className="text-4xl mb-4">🏏</div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Cricket
                  </h3>
                  <p className="text-slate-600">
                    Enjoy playing and watching cricket, which helps me stay active
                    and develop teamwork and strategic thinking skills.
                  </p>
                </Card>
              </motion.div>
              <motion.div whileHover={{ y: -6 }} whileFocus={{ y: -6 }} tabIndex={0} role="article" aria-label="Gardening" className="outline-none">
                <Card className="p-6 rounded-xl bg-white/3 transition-transform duration-150 hover:translate-y-[-3px]">
                  <div className="text-4xl mb-4">🌱</div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Gardening
                  </h3>
                  <p className="text-slate-600">
                    Find peace and satisfaction in gardening, nurturing plants and
                    creating a green space.
                  </p>
                </Card>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
