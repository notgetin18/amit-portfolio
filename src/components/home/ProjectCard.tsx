"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Info, X } from "lucide-react";

interface ProjectCardProps {
    project: {
        title: string;
        description: string;
        techStack: string[];
        liveLink?: string;
        githubLink?: string;
        details: string; // Content for the back of the card
        image: string;
    };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const cardVariants = {
        front: { rotateY: 0 },
        back: { rotateY: 180 },
    };

    return (
        <div className="relative w-full h-[450px]" style={{ perspective: "1200px" }}>
            <motion.div
                className="relative w-full h-full"
                style={{ transformStyle: "preserve-3d" }}
                initial={false}
                animate={isFlipped ? "back" : "front"}
                variants={cardVariants}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                {/* Front of the card */}
                <div
                    style={{ backfaceVisibility: "hidden" }}
                    className="absolute w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#07162b]/80 to-[#071826]/70 p-6 flex flex-col justify-between backdrop-blur-md shadow-lg"
                >
                    <div>
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-bold text-white">{project.title}</h3>
                            <button
                                onClick={() => setIsFlipped(true)}
                                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                aria-label="Show project details"
                            >
                                <Info className="w-5 h-5 text-cyan-300" />
                            </button>
                        </div>
                        <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                    <div className="mt-4">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2 py-1 bg-cyan-400/10 text-cyan-300 text-xs rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center gap-4">
                            {project.liveLink && (
                                <Link
                                    href={project.liveLink}
                                    target="_blank"
                                    className="inline-flex items-center gap-1 text-white hover:text-cyan-300 transition-colors text-sm font-medium"
                                >
                                    Live Demo <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            )}
                            {project.githubLink && (
                                <Link
                                    href={project.githubLink}
                                    target="_blank"
                                    className="inline-flex items-center gap-1 text-white hover:text-cyan-300 transition-colors text-sm font-medium"
                                >
                                    GitHub <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>

                {/* Back of the card */}
                <div
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                    className="absolute w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#07162b]/95 to-[#071826]/90 p-6 flex flex-col backdrop-blur-md shadow-lg"
                >
                    <div className="flex justify-between items-start">
                        <h4 className="text-lg font-bold text-white">Project Details</h4>
                        <button
                            onClick={() => setIsFlipped(false)}
                            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                            aria-label="Hide project details"
                        >
                            <X className="w-5 h-5 text-cyan-300" />
                        </button>
                    </div>
                    <div className="mt-2 text-slate-300 text-sm leading-relaxed overflow-y-auto pr-2">
                        <p>{project.details}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectCard;