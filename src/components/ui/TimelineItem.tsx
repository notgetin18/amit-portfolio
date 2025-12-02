"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

type Props = {
    id?: string;
    title: string;
    company: string;
    dateRange?: string;
    bullets?: string[];
    accent?: string;
};

export default function TimelineItem({ id, title, company, dateRange, bullets = [], accent = "#06b6d4" }: Props) {
    return (
        <motion.div whileHover={{ scale: 1.01 }} whileFocus={{ scale: 1.01 }} tabIndex={0} role="article" aria-labelledby={id} className="outline-none">
            {/* flatter timeline entry — less bordered, lighter surface */}
            <Card className="p-6 ml-8 transition-transform duration-200 bg-transparent rounded-lg relative overflow-visible">
                <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: `linear-gradient(135deg, ${accent}, #3ed6ac)` }} className="absolute -left-6 top-6 rounded-full shadow-sm" aria-hidden />

                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                        <h3 id={id} className="text-xl font-bold text-white">{title}</h3>
                        <p className="text-slate-200 font-medium">{company}</p>
                    </div>

                    {dateRange && (
                        <div className="flex items-center text-slate-600 mt-2 md:mt-0">
                            <span className="text-sm">{dateRange}</span>
                        </div>
                    )}
                </div>

                <ul className="space-y-2 text-slate-300">
                    {bullets.map((b, i) => (
                        <li className="flex items-start" key={i}>
                            <div className="w-2 h-2 bg-white/40 rounded-full mr-3 mt-2 flex-shrink-0" />
                            <div>{b}</div>
                        </li>
                    ))}
                </ul>
            </Card>
        </motion.div>
    );
}
