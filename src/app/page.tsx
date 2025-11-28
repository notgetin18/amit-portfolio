"use client";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Loader2,
  Mail,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/constant";
import Skills from "@/components/home/Skills";
import Projects from "@/components/home/projects";
import Services from "@/components/home/services";
import Particles from "@tsparticles/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { MoveDirection, OutMode } from "@tsparticles/engine";
import { handleDownloadResume } from "@/utility";
import SecondaryButton from "@/components/buttons/secondaryButton";
import PrimaryButtons from "@/components/buttons/primaryButtons";

export default function HomePage() {
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
          value: 800,
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
          value: 400,
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
    }),
    []
  );

  return (
    <div className="min-h-screen relative overflow-hidden">
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
            <Loader2 className="w-12 h-12 text-[#FFFF00] animate-spin" />{" "}
          </div>
        </>
      )}

      {/* Hero Section */}
      <section className="pt-[calc(4rem+2rem)] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold primary-text-color shadow-xl shadow-primary-text-color py-6 mt-10 transform-[rotate(-28deg) skew(25deg)]"
            >
              MERN Stack
              <span className="block bg-clip-text ">Developer</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-white py-6"
            >
              <span className="font-extrabold h-8">“ </span>
              Built Medical Kundali (live healthcare SaaS) • Bright Digi Gold (1
              Million+ users) • TestOfire Technologies (Real-time EdTech){" "}
              <span>”</span>
              {/* Crafting exceptional digital experiences with modern technologies,
              specializing in the MERN stack. Building scalable applications for
              1 Million+ users. */}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center py-6"
            >
              <Link href="/contact">
                <SecondaryButton
                  title="Get In Touch"
                  containerStyles="px-8 py-3 rounded-3xl text-lg font-base leading-wide"
                />
              </Link>
              <Link href="/about">
                <PrimaryButtons
                  title="Learn More"
                  containerStyles="px-8 py-3 rounded-3xl text-lg font-base leading-wide"
                />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex justify-center space-x-8 py-4"
            >
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://github.com/notgetin18"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label="Visit Amit Kumar's GitHub profile"
              >
                <Github className="w-7 h-7" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.linkedin.com/in/notgetin18"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label="Visit Amit Kumar's LinkedIn profile"
              >
                <Linkedin className="w-7 h-7" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://x.com/notgetin18"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label="Visit Amit Kumar's Twitter profile"
              >
                <Twitter className="w-7 h-7" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="mailto:notgetin18@gmail.com"
                className="text-gray-300 hover:text-blue-400 transition-colors"
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
            className="flex justify-center my-8"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            >
              <ArrowDown className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative z-10">
        <Skills />
      </section>

      {/* Projects Section */}
      <section className="relative z-10">
        <Projects />
      </section>

      {/* Services Section */}
      <section className="relative z-10">
        <Services />
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next project and create exceptional
              digital experiences together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="px-8 py-3"
              >
                <Link href="/contact">Start a Project</Link>
              </Button>
              <Button
                onClick={() => handleDownloadResume("pdf")}
                size="lg"
                variant="outline"
                className="px-8 py-3 border-white text-black hover:bg-white hover:text-blue-600"
                aria-label="Download Amit Kumar's resume in PDF format"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
