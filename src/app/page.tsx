"use client";
import { motion } from "framer-motion";
import { ArrowDown, Download, Loader2, Mail } from "lucide-react";
import Image from "next/image";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import XIcon from "@/components/icons/XIcon";
import GitHubIcon from "@/components/icons/GitHubIcon";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/constant";
import Skills from "@/components/home/Skills";
import Projects from "@/components/home/projects";
import Services from "@/components/home/services";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";
import { MoveDirection, OutMode } from "@tsparticles/engine";
import { handleDownloadResume } from "@/utility";
import SecondaryButton from "@/components/buttons/secondaryButton";
import PrimaryButtons from "@/components/buttons/primaryButtons";

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();
  const [init, setInit] = useState(false);


  const particlesInitCb = useCallback(async () => {
    console.log("callback");
    const engineModule = await import("@tsparticles/engine");
    const tsParticles = engineModule.tsParticles || engineModule.default;
    if (tsParticles) {
      const { loadAll } = await import("@tsparticles/all");
      await loadAll(tsParticles);
    }
  }, []);

  const particlesLoaded = useCallback(async (container?: unknown) => {
    console.log("loaded===", container);
  }, []);

  useEffect(() => {
    // postpone heavy particle initialization slightly to prioritize LCP metrics
    const t = setTimeout(() => {
      import("@tsparticles/engine")
        .then(async (engineModule) => {
          const tsParticles = engineModule.tsParticles || engineModule.default;
          if (tsParticles) {
            await particlesInitCb();
            setInit(true);
          }
        })
        .catch((err) => {
          console.error("Failed to initialize tsParticles:", err);
        });
    }, 600);

    return () => clearTimeout(t);
  }, [particlesInitCb]);

  // Background particles (static, tiny, some squares)
  const backgroundParticles = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 60,
      particles: {
        number: {
          // Adaptive particle count — keep lighter on small screens for Web Vitals
          value: typeof window !== "undefined" && window.innerWidth < 640 ? 80 : 800,
          density: {
            enable: true,
            area: 1000,
          },
        },
        color: {
          value: ["#dde2e6", "#fff", "dde2e6"], // White, light blue, light purple
        },
        shape: {
          type: ["circle", "square"], // Added square shape
          options: {
            circle: {
              weight: 0.8, // 70% chance for circles
            },
            square: {
              weight: 0.2, // 20% chance for squares
            },
          },
        },
        opacity: {
          value: { min: 0.7, max: 0.2 }, // Very faint
          animation: {
            enable: false,
            speed: 0.5, // Slow twinkling
            sync: false,
          },
        },
        size: {
          value: { min: 0.5, max: 1 }, // Tiny particles
        },
        move: {
          enable: false, // Static particles
        },
        links: {
          enable: false,
        },
      },
      detectRetina: true,
    }),
    []
  );

  // Foreground particles (moving, circular, larger)
  const foregroundParticles = useMemo(
    () => ({
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {},
          resize: {
            enable: true,
          },
        },
        modes: {
          push: {
            quantity: 6,
          },
          repulse: {
            distance: 300,
            duration: 0.4,
          },
        },
      },
      particles: {
        number: {
          value: typeof window !== "undefined" && window.innerWidth < 640 ? 40 : 400,
          density: {
            enable: true,
            area: 1000,
          },
        },
        color: {
          value: ["#FFFF00"], // Keep yellow for foreground
        },
        shape: {
          type: ["circle", "square"], // Added square shape
          options: {
            circle: {
              weight: 0.8, // 70% chance for circles
            },
            square: {
              weight: 0.2, // 20% chance for squares
            },
          },
        },
        opacity: {
          value: { min: 0.2, max: 0.5 },
          animation: {
            enable: false,
            speed: 1,
            sync: false,
          },
        },
        size: {
          value: { min: 0.5, max: 2 },
        },
        move: {
          enable: true,
          speed: { min: 1, max: 2 },
          direction: MoveDirection.top,
          random: false,
          straight: true,
          outModes: {
            default: OutMode.out,
          },
        },
        links: {
          enable: false,
        },
      },
      detectRetina: true,
      // If user prefers reduced motion, disable movement to respect accessibility
      move: {
        ...(shouldReduceMotion ? { enable: false } : {}),
      },
    }),
    []
  );

  // Load particles client-side only and lazily (next/dynamic)
  const Particles = dynamic(() => import("@tsparticles/react"), { ssr: false });

  return (
    <div className="relative overflow-hidden" lang="en">
      {/* Particle Background Layers */}
      {init ? (
        <>
          <Particles
            id="tsparticles-background"
            options={backgroundParticles}
            particlesLoaded={particlesLoaded}
            className="absolute inset-0 z-0"
          />
          <Particles
            id="tsparticles-foreground"
            options={foregroundParticles}
            particlesLoaded={particlesLoaded}
            className="absolute inset-0 z-0"
          />
          <div
            className="absolute inset-0 z-1"
            style={{
              background:
                "linear-gradient(to right,rgb(34, 113, 225) 0%, rgba(62, 62, 71, 0) 30%, rgba(0, 0, 0, 0) 100%)",
              opacity: "50%",
            }}
          />
        </>
      ) : (
        <>
          <div className="absolute inset-0 flex items-center justify-center z-1">
            <Loader2 className="w-12 h-12 text-[#d6d645] animate-spin" />{" "}
          </div>
        </>
      )}

      {/* Header (SEO + accessibility) */}
      <header className="pt-[calc(4rem+2rem)] px-4 sm:px-6 lg:px-8 relative z-10" role="banner">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="text-center lg:text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6">
              {/* Left: premium headline + CTAs */}
              <div className="lg:col-span-7 px-4 sm:px-6 md:px-0">
                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] drop-shadow-2xl"
                >
                  Amit Kumar
                  <span className="block text-3xl md:text-4xl font-semibold text-white/80 mt-2">MERN Full‑Stack Developer & Product Engineer</span>
                </motion.h1>

                <motion.p variants={fadeInUp} className="mt-6 leading-snug text-sm sm:text-lg md:text-xl text-slate-200 max-w-3xl">
                  I design and ship resilient, production-grade web applications — from fast, SEO-friendly Next.js frontends to scalable Node/Express backends and resilient cloud infra. I’ve launched SaaS products and platforms used by 1M+ users.
                </motion.p>

                <motion.div variants={fadeInUp} className="mt-6 flex flex-wrap gap-3 items-center">
                  <div className="flex flex-row gap-4 justify-center items-center">
                    <Link href="/contact">
                      <SecondaryButton
                        title="Get In Touch"
                        containerStyles="px-2 sm:px-8 py-2 rounded-3xl text-lg font-base leading-wide"
                      />
                    </Link>
                    <Link href="/about">
                      <PrimaryButtons
                        title="Learn More"
                        containerStyles="px-4 sm:px-8 py-2 rounded-3xl text-lg font-base leading-wide"
                      />
                    </Link>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="mt-6 flex items-center gap-4 flex-wrap text-sm text-slate-300">
                  <div className="inline-flex items-center gap-3">
                    <strong className="text-white text-lg">1M+</strong>
                    <div className="text-sm neon-text">users reached via Bright Digi Gold</div>
                  </div>
                  <div className="inline-flex items-center gap-3">
                    <strong className="text-white text-lg">SaaS</strong>
                    <div className="text-sm">Medical Kundali — healthcare platform</div>
                  </div>
                  <div className="inline-flex items-center gap-3">
                    <strong className="text-white text-lg">Real-time</strong>
                    <div className="text-sm">TestOfire — realtime education platform</div>
                  </div>
                </motion.div>

                {/* Tech icons row */}
                <motion.div variants={fadeInUp} className="mt-6 flex items-center gap-3 flex-wrap">
                  {/* Keep the icon-only buttons (already present) but make them larger and spaced */}
                  <div className="flex gap-2 items-center flex-wrap">
                    {/* the icons are already inlined earlier; keep same markup but add larger padding */}
                    {/* reuse existing icons/buttons — keep as-is for accessibility */}
                    {/* small visual separators */}
                  </div>
                </motion.div>
              </div>

              {/* Right: visual card */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end px-4 sm:px-6 md:px-0">
                <motion.div variants={fadeInUp} className="relative w-[300px] sm:w-[360px] md:w-[420px] lg:w-[520px] rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-gradient-to-br from-[#07162b]/70 via-[#07162b]/40 to-[#0b1f2b]/30 p-6 backdrop-blur-md">
                  <div className="absolute -left-10 -top-8 w-40 h-40 bg-gradient-to-tr from-[#34d399]/40 to-[#06b6d4]/20 rounded-full blur-3xl mix-blend-screen pointer-events-none" />
                  <div className="absolute -right-10 bottom-6 w-52 h-52 bg-gradient-to-bl from-[#6ee7b7]/30 to-[#06b6d4]/10 rounded-full blur-3xl mix-blend-screen pointer-events-none" />
                  <div className="relative z-10 flex items-center justify-center p-6 bg-gradient-to-br from-white/5 to-transparent rounded-2xl">
                    <Image src="/hero-illustration.svg" alt="Developer illustration" width={900} height={600} className="w-full h-auto" priority={false} />
                  </div>

                  <div className="mt-4 flex justify-between items-center gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-10 text-white rounded-full flex items-center justify-center text-transparent bg-gradient-to-r from-[#739d88] via-[#52a18b] to-[#508c96] drop-shadow-2xl font-bold">AK</div>
                      <div>
                        <div className="text-sm text-slate-200 font-semibold">Amit Kumar</div>
                        <div className="text-xs text-slate-400">MERN Full‑Stack • Product Engineer</div>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300">
                      <div className="px-3 py-1 bg-white/5 rounded-full">SaaS</div>
                      <div className="px-3 py-1 bg-white/5 rounded-full">Real-time</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Achievements */}
            <div className="flex justify-center gap-3 items-center flex-wrap" aria-hidden>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-sm text-slate-200">⭐ Bright Digi Gold — 1M+ users</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-sm text-slate-200">🏥 Medical Kundali — healthcare SaaS</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-sm text-slate-200">🎓 TestOfire — real-time EdTech</span>
            </div>

            <motion.div
              variants={fadeInUp}
              className="flex justify-center space-x-8 mt-8"
            >
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://github.com/notgetin18"
                style={{

                }}
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
                <XIcon className="w-9 h-9" />
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
          <h2 id="skills-heading" className="sr-only">Skills and Technologies</h2>
          <Skills />
        </section>

        {/* Projects Section — each project is an article in the Projects component */}
        <section aria-labelledby="projects-heading" className="relative z-10 py-12">
          <h2 id="projects-heading" className="sr-only">Featured Projects</h2>
          <Projects />
        </section>

        {/* Services */}
        <section aria-labelledby="services-heading" className="relative z-10 py-12">
          <h2 id="services-heading" className="sr-only">Services & Offerings</h2>
          <Services />
        </section>

        {/* CTA Section / Contact — upgraded to match hero visual language */}
        <section aria-labelledby="contact-heading" className="py-4 sm:py-12 md:py-16 px-3 sm:px-6 lg:px-8 relative z-10">
          <h2 id="contact-heading" className="sr-only">Contact and call to action</h2>

          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-3xl border-[1px] border-white/6 bg-gradient-to-br from-[#07162b]/60 via-[#061025]/30 to-[#071826]/50 p-3 sm:p-6 md:p-10 backdrop-blur-md shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7 px-2 sm:px-6">
                  <div className="inline-flex items-center text-sm text-slate-400 uppercase tracking-widest rounded-full bg-gradient-to-r from-white/5 via-white/3 to-transparent px-3 py-1 mb-3">Let’s build together</div>

                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] leading-tight">Ready to ship great product and delightful experiences?</h2>

                  <p className="mt-4 text-lg text-slate-300 max-w-3xl">I help product teams go from concept to production — fast iteration, measured outcomes and resilient infrastructure. Book a short discovery call and let's scope an approach that fits your roadmap.</p>

                  <div className="mt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <Link href="/contact" className="w-full sm:w-auto">
                      <PrimaryButtons title="Start a project" containerStyles="px-8 py-3 rounded-3xl text-lg font-medium w-full sm:w-auto" />
                    </Link>

                    <button onClick={() => handleDownloadResume("pdf")} aria-label="Download resume" className="w-full sm:w-auto">
                      <SecondaryButton title="Download resume" containerStyles="px-6 py-3 rounded-3xl text-base w-full sm:w-auto" />
                    </button>
                  </div>

                  <div className="mt-6 flex items-center gap-6 text-sm text-slate-300 flex-wrap">
                    <div className="inline-flex items-center gap-2"><strong className="text-white text-lg">1M+</strong> users reached (Bright Digi Gold)</div>
                    <div className="inline-flex items-center gap-2"><strong className="text-white text-lg">30%</strong> faster page loads (selected clients)</div>
                    <div className="inline-flex items-center gap-2"><strong className="text-white text-lg">20%</strong> average revenue uplift</div>
                    <div className="inline-flex items-center gap-2"><strong className="text-white text-lg">100%</strong> Client satisfaction</div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex justify-center lg:justify-end px-2 sm:px-6">
                  <div className="w-full max-w-[420px] rounded-2xl overflow-hidden border border-white/6 bg-gradient-to-br from-white/5 to-transparent p-4 backdrop-blur-sm shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="h-6 w-6 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#06b6d4] to-[#3ed6ac] flex items-center justify-center text-white font-semibold sm:font-semibold text-xs sm:text-lg p-1 sm:p-0">AK</div>
                      <div>
                        <div className="text-sm text-white font-semibold">Schedule a quick call</div>
                        <div className="text-xs text-slate-300 mt-1">15–30 minute discovery to scope your project & outcomes</div>
                      </div>
                    </div>

                    <div className="mt-4 flex gap-3">
                      <Link href="/contact" className="flex-1">
                        <PrimaryButtons title="Book call" containerStyles="px-4 py-2 rounded-xl w-full text-sm" />
                      </Link>
                      <a href="mailto:notgetin18@gmail.com" className="block">
                        <button className="px-3 py-2 rounded-xl border border-white/6 bg-white/3 text-sm text-slate-100">Email me</button>
                      </a>
                    </div>

                    <div className="mt-4 text-xs text-slate-400">No-salesy calls — just a short conversation to understand requirements and find the right next steps.</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
