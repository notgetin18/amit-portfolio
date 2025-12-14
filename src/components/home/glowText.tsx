"use client";
import { useEffect, useState } from "react";

export default function GlowText() {
    const [showGlow, setShowGlow] = useState(false);

    useEffect(() => {
        // Wait ~3000ms so the headline is already painted
        const timer = setTimeout(() => setShowGlow(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    if (!showGlow) {
        return (
            <div className="text-sm text-white/90 font-medium">
                users reached via Bright Digi Gold
            </div>
        );
    }

    return (
        <div
            className="text-sm"
            style={{
                color: "#fff",
                textShadow:
                    "0 0 5px #ff005e, 0 0 10px #ff005e, 0 0 20px #ff005e, 0 0 40px #ff005e, 0 0 80px #ff005e",
                animation: "glow 2s infinite alternate",
            }}
        >
            users reached via Bright Digi Gold
        </div>
    );
}