"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
    index?: number;
    Icon: React.ComponentType<any>;
    number: string;
    label: string;
};

export default function StatTile({ index = 0, Icon, number, label }: Props) {
    return (
        <motion.div variants={{ initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 } }}>
            <motion.div whileHover={{ y: -4 }} tabIndex={0} role="region" aria-labelledby={`stat-${index}-label`} className="outline-none focus-visible:ring-2 focus-visible:ring-[#06b6d4]/30 rounded-xl">
                {/* flatter, less boxed design — gentle translucent surface */}
                <div className="text-center p-6 transition-colors duration-200 bg-white/3 rounded-xl">
                    <div className="flex items-center justify-center mb-3">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-200 shadow">
                            <Icon className="w-5 h-5 text-[#8ef3c1]" aria-hidden />
                        </div>
                    </div>

                    <div aria-hidden className="text-2xl font-extrabold text-white mb-1">{number}</div>
                    <div id={`stat-${index}-label`} className="sr-only">{number} — {label}</div>
                    <div className="text-sm text-slate-300">{label}</div>
                </div>
            </motion.div>
        </motion.div>
    );
}
