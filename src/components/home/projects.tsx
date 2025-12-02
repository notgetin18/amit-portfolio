import { motion } from "framer-motion";
import GitHubIcon from "@/components/icons/GitHubIcon";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/constant";
import Image from "next/image";

const Projects = () => {
  return (
    <div>
      {/* Featured Projects — premium two-column layout */}
      <section className="px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center text-sm text-slate-400 uppercase tracking-widest rounded-full bg-gradient-to-r from-white/5 via-white/3 to-transparent px-3 py-1 mb-4">Featured Work</div>
            <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] mb-3">
              Selected projects — production ready
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              A hand-picked selection of high-impact products I designed, built and scaled — performance-first, user-centric and production-hardened.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
          >
            {/* Left: big featured project */}
            <motion.div variants={fadeInUp} className="order-2 lg:order-1">
              <Card className="relative overflow-hidden border border-white/15 bg-gradient-to-br from-[#07172a]/40 via-[#071826]/30 to-transparent backdrop-blur-md shadow-2xl hover:scale-[1.01] transition-transform duration-300">
                <div className="absolute inset-0 -z-10">
                  <Image alt="Bright Digi Gold" src="/Bright DiGi Gold.jpg" className="p-1 rounded-xl" fill style={{ opacity: 0.25, objectFit: "cover", filter: 'saturate(0.9) contrast(0.75) brightness(0.7)' }} />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-black/10 mix-blend-overlay" />
                </div>

                <CardContent className="p-8 relative z-20 min-h-[340px] flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="px-3 rounded-full text-xs text-slate-200 bg-white/3 border border-white/5">Enterprise</div>
                      <div className="text-xs text-slate-200 border px-2 rounded-full border-white/25">Performance & Scale</div>
                    </div>

                    <h3 className="text-3xl font-extrabold text-white mb-3">Bright DiGi Gold</h3>
                    <p className="text-slate-200 max-w-2xl leading-relaxed mb-6">
                      A production-grade digital-gold trading marketplace — built for high concurrency with optimized checkout, resilient payment integrations and observability.
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-200 mb-6">
                      <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#3ed6ac]" /> 100k+ users onboarded</li>
                      <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#8ef3c1] to-[#06b6d4]" /> Payments + KYC integrations</li>
                      <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3ed6ac] to-[#06b6d4]" /> 30% faster page loads</li>
                      <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#c7f2e2] to-[#3ed6ac]" /> Observability + incident playbooks</li>
                    </ul>

                    <div className="flex flex-wrap gap-3 mb-4">
                      {["React.js", "Next.js", "TypeScript", "MongoDB", "node.js"].map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-slate-200">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button size="sm" className="bg-white/8 hover:bg-white/10 shadow-sm border border-white/6 flex items-center gap-2" aria-label="View Bright Digi Gold code">
                      <GitHubIcon className="w-4 h-4 text-white/90" />
                      <span className="text-xs font-semibold">View Code</span>
                    </Button>

                    <a target="_blank" rel="noopener noreferrer" href="https://www.brightdigigold.com/">
                      <Button size="sm" className="bg-gradient-to-tr from-[#06b6d4] via-[#34d399] to-[#8ef3c1] text-black font-medium shadow-lg hover:scale-[1.03] transition-transform" aria-label="Open Bright Digi Gold live demo">
                        Live Demo
                      </Button>
                    </a>

                    {/* <Button variant="ghost" size="sm" className="text-xs text-slate-300 px-3" aria-label="Case study">Case study</Button> */}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right column — stacked cards */}
            <div className="flex flex-col gap-6 order-1 lg:order-2">
              <motion.div variants={fadeInUp}>
                <Card className="overflow-hidden border border-white/15 bg-gradient-to-br from-[#061025]/40 via-[#07162b]/30 to-transparent backdrop-blur-md hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative flex flex-col sm:flex-row items-stretch p-2 sm:p-0">
                    <div className="w-full sm:w-1/3 bg-gradient-to-tr from-[#6ee7b7]/40 to-[#06b6d4]/20 p-2 sm:p-4 flex items-center justify-center rounded-lg sm:rounded-none">
                      <Image alt="TestOfire" src="/Testofire.webp" width={160} height={120} className="object-contain rounded-lg h-20 w-20 sm:h-32 sm:w-32" />
                    </div>

                    <div className="flex-1 p-6">
                      <h4 className="text-lg font-semibold text-white mb-1">TestOfire Technologies</h4>
                      <p className="text-sm text-slate-300 mb-3">A real-time student & coaching platform — reliable syncing and API-first architecture.</p>

                      <div className="flex items-center gap-2 flex-wrap mb-4">
                        {["React", "Next", "Node", "Express.js"].map((t) => (
                          <span key={t} className="px-2 py-0.5 text-xs rounded-full bg-white/5 border border-white/5 text-slate-200">{t}</span>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" className="bg-white/8 hover:bg-white/10 shadow-sm border border-white/6 flex items-center gap-2" aria-label="View Bright Digi Gold code">
                          <GitHubIcon className="w-4 h-4 text-white/90" />
                          <span className="text-xs font-semibold">View Code</span>
                        </Button>
                        {/* <Button variant="outline" size="sm" className="border-white/6">View code</Button> */}
                        <a target="_blank" rel="noopener noreferrer" href="https://testofire.in/"><Button size="sm"
                          className="bg-gradient-to-tr from-[#34d399] to-[#06b6d4] text-black"
                        // className="bg-gradient-to-tr from-[#8b5cf6] to-[#7c3aed] text-white"
                        >Live Demo</Button></a>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="overflow-hidden border border-white/15 bg-gradient-to-br from-[#071826]/20 via-[#07162b]/10 to-transparent backdrop-blur-md hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative p-2 sm:p-4 flex sm:items-start gap-4 flex-col sm:flex-row items-stretch">
                    <div className="flex-shrink-0 w-full h-24 sm:w-44 sm:h-24 rounded-lg bg-gradient-to-br from-[#22c55e]/40 to-[#10b981]/20 flex items-center justify-center p-2">
                      <Image alt="Medical Kundali" src="/Medical Kundali.svg" width={176} height={176} className="object-contain" />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white">Medical Kundali</h4>
                      <p className="text-sm text-slate-300 mb-3">Personalized medical insights and care recommendations built with privacy-first design.</p>

                      <div className="flex items-center gap-2 mb-3">
                        {["React", "Next", "Node", "MongoDB"].map((t) => (
                          <span key={t} className="px-2 py-0.5 text-xs rounded-full bg-white/5 border border-white/5 text-slate-200">{t}</span>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" className="bg-white/8 hover:bg-white/10 shadow-sm border border-white/6 flex items-center gap-2" aria-label="View Bright Digi Gold code">
                          <GitHubIcon className="w-4 h-4 text-white/90" />
                          <span className="text-xs font-semibold">View Code</span>
                        </Button>
                        {/* <Button variant="outline" size="sm" className="border-white/6 text-slate-200/95"><GitHubIcon className="w-4 h-4 mr-2 text-slate-200/90" />Code</Button> */}
                        <a target="_blank" rel="noopener noreferrer" href="https://medicalkundali.com/"><Button size="sm" className="bg-gradient-to-tr from-[#bd4204] to-[#d47406] text-gray-200">Live Demo</Button></a>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
