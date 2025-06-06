"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { Engine, MoveDirection, OutMode } from "@tsparticles/engine";

interface BackgroundParticlesProps {
  particlesEnabled?: boolean;
}

export default function BackgroundParticles({
  particlesEnabled = true,
}: BackgroundParticlesProps) {
  const [init, setInit] = useState(false);

  const particlesInitCb = useCallback(async (engine: Engine) => {
    console.log("callback");
    await import("@tsparticles/engine").then(
      async ({ initParticlesEngine }: any) => {
        await initParticlesEngine(async (engine: any) => {
          await import("@tsparticles/all").then(async ({ loadAll }) => {
            await loadAll(engine);
          });
        });
      }
    );
  }, []);

  const particlesLoaded = useCallback(async (container?: unknown) => {
    console.log("loaded", container);
  }, []);

  useEffect(() => {
    if (!particlesEnabled) return;
    import("@tsparticles/engine")
      .then(async ({ initParticlesEngine }: any) => {
        await initParticlesEngine(particlesInitCb);
        setInit(true);
      })
      .catch((err) => {
        console.error("Failed to initialize tsParticles:", err);
      });
  }, [particlesInitCb, particlesEnabled]);

  // Base particle configuration
  const baseOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 60, // Reduced for better performance
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: ["#ffffff", "#d1d5ff", "#e1cfff"],
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: { min: 0.1, max: 0.7 },
          animation: {
            enable: true,
            speed: 0.5,
            sync: false,
          },
        },
        size: {
          value: { min: 0.5, max: 2 },
        },
        move: {
          enable: true,
          speed: { min: 0.05, max: 0.2 },
          direction: MoveDirection.none,
          random: true,
          straight: false,
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

  // Foreground particle configuration
  const foregroundOptions = useMemo(
    () => ({
      ...baseOptions,
      particles: {
        ...baseOptions.particles,
        number: {
          value: 30,
          density: {
            enable: true,
            area: 800,
          },
        },
        size: {
          value: { min: 1, max: 3 },
        },
        opacity: {
          value: { min: 0.3, max: 0.9 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },
        move: {
          enable: true,
          speed: { min: 0.1, max: 0.4 },
          direction: MoveDirection.none,
          random: true,
          straight: false,
          outModes: {
            default: OutMode.out,
          },
        },
      },
    }),
    []
  );

  if (!particlesEnabled || !init) return null;

  return (
    <>
      <Particles
        id="tsparticles-bg"
        options={baseOptions}
        particlesLoaded={particlesLoaded}
        className="absolute inset-0 z-0"
      />
      <Particles
        id="tsparticles-fg"
        options={foregroundOptions}
        particlesLoaded={particlesLoaded}
        className="absolute inset-0 z-0"
      />
    </>
  );
}