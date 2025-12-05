"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/constant"; // Assuming you have these from previous code

// Placeholder data - replace with your actual testimonials
const testimonials = [
    {
        quote:
            "Amit was instrumental in rebuilding our frontend architecture. His expertise in Next.js and performance optimization led to a 30% improvement in our page load times, which was a game-changer for our user engagement.",
        name: "Jane Doe",
        title: "CTO, ExampleCorp",
        avatar: "/avatars/jane-doe.png", // Replace with actual image path
    },
    {
        quote:
            "Working with Amit on the Medical Kundali project was a fantastic experience. He has a rare ability to grasp complex product requirements and translate them into a robust, scalable backend. A true product engineer.",
        name: "John Smith",
        title: "Product Manager, HealthTech Startup",
        avatar: "/avatars/john-smith.png", // Replace with actual image path
    },
    {
        quote:
            "Amit's ability to blend design intuition with engineering rigor is unmatched. He transformed our stagnant MVP into a polished product that users love, all while mentoring the team along the way.",
        name: "Emily Chen",
        title: "Founder, FinTech Innovators",
        avatar: "/avatars/emily-chen.png", // Replace with actual image path
    },
    {
        quote:
            "Collaborating with Amit felt like having a co-founder on board. His proactive problem-solving and deep knowledge of full-stack development accelerated our go-to-market by months.",
        name: "Michael Rodriguez",
        title: "CEO, EdTech Ventures",
        avatar: "/avatars/michael-rodriguez.png", // Replace with actual image path
    },
];

const Testimonials = () => {
    return (
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/20 via-[#1a1a2e]/10 to-[#16213e]/20" />

            <div className="relative max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center text-sm text-slate-300 uppercase tracking-widest rounded-full bg-gradient-to-r from-white/5 via-white/3 to-transparent px-3 py-1 mb-4">
                        Voices of Impact
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] mb-4">
                        What My Collaborators Say
                    </h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Real stories from leaders who’ve seen the difference firsthand. I thrive on building great products and even better relationships.
                    </p>
                </motion.div>

                {/* Premium Grid Layout */}
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="group relative"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: 1.02,
                                    y: -10,
                                    transition: { duration: 0.3, ease: "easeOut" }
                                }}
                                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#07162b]/60 via-[#071826]/50 to-[#0a0a0a]/40 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:border-white/20 transition-all duration-500 p-6 sm:p-8 h-full flex flex-col justify-between"
                            >
                                {/* Quote */}
                                <blockquote className="text-slate-100 text-base sm:text-lg leading-relaxed italic mb-6 relative z-10">
                                    <div className="relative">
                                        <span className="absolute -left-2 top-0 text-4xl text-[#06b6d4]/20 group-hover:text-[#06b6d4]/40 transition-colors duration-500">“</span>
                                        {testimonial.quote}
                                        <span className="absolute -right-2 bottom-0 text-4xl text-[#06b6d4]/20 group-hover:text-[#06b6d4]/40 transition-colors duration-500">”</span>
                                    </div>
                                </blockquote>

                                {/* Attribution */}
                                <div className="flex items-center gap-4 pt-4 border-t border-white/10 relative z-10">
                                    {/* Avatar */}
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="relative flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-tr from-[#06b6d4] to-[#3ed6ac] overflow-hidden group-hover:shadow-lg transition-shadow duration-300"
                                    >
                                        {testimonial.avatar ? (
                                            <img
                                                src={testimonial.avatar}
                                                alt={`${testimonial.name}'s avatar`}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center font-bold text-white text-sm">
                                                {testimonial.name.charAt(0)}
                                                {testimonial.name.split(" ")[1]?.charAt(0)}
                                            </div>
                                        )}
                                    </motion.div>

                                    {/* Name and Title */}
                                    <div>
                                        <div className="font-semibold text-white text-base group-hover:text-[#06b6d4] transition-colors duration-300">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-slate-400 text-sm">
                                            {testimonial.title}
                                        </div>
                                    </div>
                                </div>

                                {/* Subtle Glow Effect */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#06b6d4]/5 to-[#3ed6ac]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    animate={{
                                        scale: [1, 1.05, 1],
                                        opacity: ["0", "0.2", "0"]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatDelay: 3,
                                        times: [0, 0.5, 1]
                                    }}
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;