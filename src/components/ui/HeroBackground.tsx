"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";
import { MoveDirection, OutMode } from "@tsparticles/engine";

// Load particles only in the browser and when not running tests (vitest/jsdom)
const Particles = dynamic(() => import("@tsparticles/react"), { ssr: false });

export default function HeroBackground({ delay = 400 }: { delay?: number }) {
    const shouldReduceMotion = useReducedMotion();
    const [init, setInit] = useState(false);

    const particlesInitCb = useCallback(async () => {
        try {
            // Dynamically load engine and presets
            const engineModule = await import("@tsparticles/engine");
            const tsParticles = engineModule.tsParticles || engineModule.default;
            if (tsParticles) {
                const { loadAll } = await import("@tsparticles/all");
                await loadAll(tsParticles);
            }
        } catch (err) {
            // swallow — background is decorative
            // eslint-disable-next-line no-console
            console.error("tsParticles init failed", err);
        }
    }, []);

    useEffect(() => {
        // Avoid initializing in Vitest environment (import.meta.vitest) to keep tests fast
        // Also skip on server where window is undefined
        const isTest = typeof (import.meta as any).vitest !== "undefined";
        if (typeof window === "undefined" || isTest) return;

        const t = setTimeout(() => {
            // load engine lazily and then mark init
            import("@tsparticles/engine")
                .then(async (engineModule) => {
                    const tsParticles = engineModule.tsParticles || engineModule.default;
                    if (tsParticles) {
                        await particlesInitCb();
                        setInit(true);
                    }
                })
                .catch(() => {
                    // ignore
                });
        }, delay);

        return () => clearTimeout(t);
    }, [delay, particlesInitCb]);

    const backgroundParticles = useMemo(
        () => ({
            background: { color: { value: "#000000" } },
            fpsLimit: 60,
            particles: {
                number: { value: typeof window !== "undefined" && window.innerWidth < 640 ? 80 : 600, density: { enable: true, area: 1000 } },
                color: { value: ["#dde2e6", "#fff", "#dde2e6"] },
                shape: { type: ["circle", "square"] },
                opacity: { value: { min: 0.7, max: 0.2 } },
                size: { value: { min: 0.5, max: 1 } },
                move: { enable: false },
                links: { enable: false },
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

    // In test or SSR, just render a decorative gradient overlay without the heavy particle library
    const isTest = typeof (import.meta as any).vitest !== "undefined";

    return (
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
            {init && !isTest ? (
                <>
                    {/* background layer */}
                    <Particles id="tsparticles-background" options={backgroundParticles} className="absolute inset-0 z-0" />
                    {/* foreground */}
                    <Particles id="tsparticles-foreground" options={foregroundParticles} className="absolute inset-0 z-0" />

                    <div
                        className="absolute inset-0 z-1"
                        style={{
                            background: "linear-gradient(to right,rgb(34, 113, 225) 0%, rgba(62, 62, 71, 0) 30%, rgba(0, 0, 0, 0) 100%)",
                            opacity: "50%",
                        }}
                    />
                </>
            ) : (
                // static decorative overlay variant
                <div className="absolute inset-0 bg-gradient-to-r from-[#07162b]/90 via-[#061025]/60 to-[#071826]/90 z-0" />
            )}
        </div>
    );
}
