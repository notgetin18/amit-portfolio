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
} from "lucide-react";
import { Card } from "@/components/ui/card";

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

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 */}

      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
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
              About Me
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            >
              A passionate full-stack developer specializing in the MERN stack,
              with a proven track record of building scalable applications and
              leading cross-functional teams to deliver exceptional digital
              experiences.
            </motion.p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { icon: Users, number: "50,000+", label: "Users Served" },
              { icon: TrendingUp, number: "30%", label: "Performance Boost" },
              { icon: Code, number: "20%", label: "Revenue Increase" },
              { icon: Award, number: "3+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-slate-800 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </Card>
              </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 text-center">
              Professional Journey
            </h2>

            <div className="space-y-8">
              {/* Current Role */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="p-6 ml-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="absolute -left-4 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">
                        Software Engineer (SE)
                      </h3>
                      <p className="text-blue-600 font-medium">
                        Bright Digital Gold
                      </p>
                    </div>
                    <div className="flex items-center text-slate-600 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      April 2022 - Present
                    </div>
                  </div>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Developed responsive web and mobile interfaces serving
                      50,000+ users with JavaScript, React.js, TypeScript, and
                      Redux
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Boosted website speed by 30% through React State
                      management optimization and KYC/transaction improvements
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Implemented promotional strategies driving 20% revenue
                      increase through coupon calculations and gifting scenarios
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Led cross-functional teams achieving 10% revenue growth
                      and 15% boost in customer engagement
                    </li>
                  </ul>
                </Card>
              </motion.div>

              {/* Previous Role */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="p-6 ml-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="absolute -left-4 top-6 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">
                        Software Engineer (SE)
                      </h3>
                      <p className="text-indigo-600 font-medium">
                        TestOfire Technologies
                      </p>
                    </div>
                    <div className="flex items-center text-slate-600 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      November 2021 - Present
                    </div>
                  </div>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Orchestrated creation of pioneering student and coaching
                      app platform with real-time synchronization
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Architected resilient API-based infrastructure
                      facilitating dynamic data exchange between applications
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Enhanced communication efficiency through seamless user
                      experience and instant updates
                    </li>
                  </ul>
                </Card>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 text-center">
              Services I Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <Wrench className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-slate-800 mb-2 text-center">
                  Web Development
                </h3>
                <p className="text-slate-600 text-center">
                  Crafting responsive and dynamic web applications using the
                  MERN stack.
                </p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <Palette className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-slate-800 mb-2 text-center">
                  UI/UX Design
                </h3>
                <p className="text-slate-600 text-center">
                  Creating intuitive and visually appealing user interfaces for
                  web and mobile platforms.
                </p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <Rocket className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-slate-800 mb-2 text-center">
                  Performance Optimization
                </h3>
                <p className="text-slate-600 text-center">
                  Enhancing application speed and efficiency through code
                  optimization and best practices.
                </p>
              </Card>
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
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                  <Award className="w-6 h-6 mr-3 text-blue-600" />
                  Education
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">
                      Master of Computer Application
                    </h4>
                    <p className="text-blue-600 font-medium">MAHGU</p>
                    <div className="flex items-center text-slate-600 mt-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      2021 - 2023
                    </div>
                  </div>
                  <div className="border-l-2 border-slate-200 pl-4">
                    <h4 className="text-lg font-semibold text-slate-800">
                      Bachelor's Degree in Computer Application
                    </h4>
                    <p className="text-blue-600 font-medium">IGNOU, Delhi</p>
                    <div className="flex items-center text-slate-600 mt-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      June 2018 - June 2021
                    </div>
                  </div>
                </div>
              </Card>

              {/* Community Work */}
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
              Beyond Code
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
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
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">🏏</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Cricket
                </h3>
                <p className="text-slate-600">
                  Enjoy playing and watching cricket, which helps me stay active
                  and develop teamwork and strategic thinking skills.
                </p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Gardening
                </h3>
                <p className="text-slate-600">
                  Find peace and satisfaction in gardening, nurturing plants and
                  creating a green space.
                </p>
              </Card>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
