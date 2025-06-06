"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/constant";
import Skills from "@/components/home/Skills";
import Projects from "@/components/home/projects";
import Particles from "@tsparticles/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Engine, MoveDirection, OutMode } from "@tsparticles/engine";
import { handleDownloadResume } from "@/utility";

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

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
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
          value: 300,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: ["#F5BF03"],
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: { min: 0.1, max: 0.4 },
          animation: {
            enable: true,
            speed: 2,
            sync: false,
          },
        },
        size: {
          value: { min: 1, max: 3 },
        },
        move: {
          enable: true,
          speed: { min: 1, max: 1 },
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
      {/* Particle Background - Moved to the top */}
      {init && (
        <Particles
          id="tsparticles"
          options={options}
          particlesLoaded={particlesLoaded}
          className="absolute inset-0 z-0"
        />
      )}

      {/* Hero Section */}
      <section className="pt-[calc(4rem+2rem)]  px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-white mb-6 mt-5"
            >
              MERN Stack
              <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Developer
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Crafting exceptional digital experiences with modern technologies,
              specializing in the MERN stack. Building scalable applications for
              1 Million+ users.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 py-3 text-black border-white hover:bg-white hover:text-blue-600"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex justify-center space-x-6"
            >
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://github.com/notgetin18"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label="Visit Amit Kumar's GitHub profile"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.linkedin.com/in/notgetin18"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label="Visit Amit Kumar's LinkedIn profile"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://x.com/notgetin18"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label="Visit Amit Kumar's Twitter profile"
              >
                <Twitter className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="mailto:notgetin18@gmail.com"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label="Email Amit Kumar"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex justify-center my-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            >
              <ArrowDown className="w-6 h-6 text-white" />
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

      {/* Services Section -->
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
