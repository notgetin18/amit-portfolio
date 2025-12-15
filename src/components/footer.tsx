'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative pt-10 pb-12 overflow-hidden bg-gradient-to-t from-[#061025]/90 via-[#07162b]/70 to-transparent">
            <div
                className="absolute inset-0 z-1"
                style={{
                    background:
                        "linear-gradient(to right,rgb(34, 113, 225) 0%, rgba(62, 62, 71, 0) 27%, rgba(0, 0, 0, 0) 100%)",
                    opacity: "35%",
                }}
            />
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -left-20 top-10 w-80 h-80 bg-gradient-to-tr from-[#06b6d4]/10 to-transparent rounded-full blur-3xl" />
                <div className="absolute -right-20 bottom-10 w-80 h-80 bg-gradient-to-bl from-[#3ed6ac]/10 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-6 sm:mb-8">
                    {/* Left: Brand & Description */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4]">
                            Amit Dev Journey
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
                            Full-stack engineer delivering scalable web applications, performant backends, and modern user experiences.
                            Solo or with a curated expert team — built for measurable impact.
                        </p>
                    </div>

                    {/* Center: Quick Links */}
                    <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                        <ul className="sm:space-y-3 text-sm flex flex-row sm:flex-col flex-wrap gap-3">
                            {[
                                { label: "About", href: "/about" },
                                { label: "Services", href: "/services" },
                                { label: "Contact", href: "/contact" },
                                { label: "Blog", href: "/blog" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-300 hover:text-[#3ed6ac] transition-colors duration-200 inline-flex items-center gap-1 group"
                                    >
                                        {link.label}
                                        <span className="opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all hidden sm:block">
                                            →
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Message + Social Links */}
                    <div className="space-y-5">
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-white">Let's Build Together</h4>
                            <p className="text-sm text-slate-300 leading-relaxed">
                                Open for freelance projects, collaborations, and long-term partnerships.
                                Ready to turn your ideas into high-performance digital solutions.
                            </p>
                            <p className="text-xs text-slate-100">
                                Currently booking projects for 2026
                            </p>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex gap-5 sm:justify-start sm:space-x-2 pt-1.5 sm:pt-0">
                            {[
                                { icon: Linkedin, href: "https://www.linkedin.com/in/notgetin18", label: "LinkedIn" },
                                { icon: Github, href: "https://github.com/notgetin18", label: "GitHub" },
                                { icon: Twitter, href: "https://x.com/Amitsin40190332", label: "X (Twitter)" },
                                { icon: Instagram, href: "https://www.instagram.com/notgetin18/", label: "Instagram" },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Visit my ${social.label}`}
                                    className="w-11 h-11 rounded-full bg-white/5 border border-white/90 sm:border-white/10 flex items-center justify-center hover:bg-[#06b6d4]/20 hover:border-[#06b6d4]/50 hover:shadow-lg hover:shadow-[#06b6d4]/30 transition-all duration-300 group"
                                >
                                    <social.icon className="w-5 h-5 text-white/80 sm:text-slate-400 group-hover:text-[#3ed6ac] transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-6 sm:pt-8 border-t border-white/10 text-center text-sm text-slate-400">
                    <p>
                        © {currentYear} Amit Dev Journey. Crafted with passion for clean code and great design.
                    </p>
                    <p className='py-1 text-slate-400'>All rights reserved.</p>
                    <p className="mt-2 text-neutral-200">
                        Special Holiday Offer: {" "}
                        <span className="text-yellow-300 font-semibold">15% OFF</span> on all new projects booked this season!
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;