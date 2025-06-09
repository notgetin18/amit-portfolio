import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/constant";

const Projects = () => {
  return (
    <div>
      {/* Featured Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
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
                  <h2 className="text-2xl font-bold text-slate-800 mb-3">
                    BrightDigiGold
                  </h2>
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
                  <h2 className="text-2xl font-bold text-slate-800 mb-3">
                    TestOfire Technologies
                  </h2>
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
                  <h2 className="text-2xl font-bold text-slate-800 mb-3">
                    Medical Kundali
                  </h2>
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
    </div>
  );
};

export default Projects;
