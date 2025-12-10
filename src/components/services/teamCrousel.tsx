'use client'
import { motion } from "framer-motion";
import React from 'react';

// Mocked components and constants necessary for this file to compile
const Card = ({ children, className }: any) => <div className={`border rounded-lg ${className}`}>{children}</div>;
const ArrowRight = (props: any) => <span {...props}>&rarr;</span>; // Mock ArrowRight icon

const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
};

interface TeamMember {
    name: string;
    role: string;
    expertise: string;
    link: string;
    avatar: string;
}

const TeamMembersCarousel: React.FC = () => {

    const teamMembers: TeamMember[] = [
        { name: "Ayush Arya", role: "Backend Developer", expertise: "Specialist in building scalable, high-performance REST APIs using Node.js, Express, and MongoDB.", link: "https://www.linkedin.com/in/ayush-arya-36505a218/", avatar: "/team/Ayush.jpeg" },
        { name: "Ritesh Singh", role: "Full Stack Developer & Technical Lead", expertise: "10+ years of expertise in Node.js, TypeScript, Next.js, AWS/CI-CD pipeline management and leading AI platform development.", link: "https://www.linkedin.com/in/1124ritesh/", avatar: "/team/Ritesh.jpeg" },
        { name: "Shashi Bhushan Jha", role: "Full-Stack Specialist", expertise: "Expert in cross-platform mobile development using Flutter and integrating payment gateways.", link: "https://www.linkedin.com/in/shashi-bhushan-jha-7797371a3/", avatar: "/team/Shashi.jpeg" },
        { name: "Mritunjay Gupta", role: "Product Engineer", expertise: "SaaS product scaling, feature lifecycle management, and B2B/B2C product strategy.", link: "https://www.linkedin.com/in/mritunjay-gupta/", avatar: "/team/Mritunjay.jpeg" },
        { name: "Vipin Rathore", role: "Motion Graphic Designer & Video Editor", expertise: "Professional video production and motion graphics specialist for digital marketing and content.", link: "https://www.linkedin.com/in/vipin-rathore-615a3019b/", avatar: "/team/Vipin.jpeg" },
        { name: "Simran Meena", role: "Content Writer", expertise: "SEO-focused technical content creation, documentation, and user guide development.", link: "https://www.linkedin.com/in/simran-meena-a44b262a7/", avatar: "/team/Simran.jpeg" },
        { name: "Raghvender Singh", role: "UI/UX Engineer", expertise: "Frontend architecture design, responsive UI/UX.", link: "https://www.linkedin.com/in/raghvender-singh-627089121/", avatar: "/team/Raghvender.jpeg" },
    ];

    // Duplicate the array 3 times for a continuous scroll on various screen sizes
    const duplicatedTeamMembers = [...teamMembers, ...teamMembers, ...teamMembers, ...teamMembers];

    const renderCard = (member: TeamMember, index: number) => (
        <motion.div
            key={`${member.name}-${index}`}
            variants={fadeInUp}
            transition={{ delay: index * 0.1 }}
            // Increased Card width for mobile and desktop views
            className="flex-shrink-0 w-[320px] sm:w-[360px] lg:w-[320px] p-2"
        >
            <Card className="p-5 border border-white/10 bg-gradient-to-br from-[#061025]/50 to-transparent backdrop-blur-md hover:shadow-xl rounded-xl transition-all duration-300 h-full">

                {/* Top Section: Avatar and Main Info (Centered) */}
                <div className="flex flex-col items-center text-center pb-4 border-b border-white/10 mb-4">

                    {/* Larger Avatar Placeholder */}
                    {/* <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#06b6d4] to-[#3ed6ac] flex items-center justify-center text-white text-2xl font-extrabold flex-shrink-0 mb-3">
                        {member.name.charAt(0)}
                    </div> */}

                    <img
                        src={member.avatar}
                        alt={`Avatar of ${member.name}`}
                        className="w-20 h-20 rounded-full object-cover border-2 border-white/50 shadow-md shadow-white/80 flex-shrink-0 mb-3 backdrop-blur-sm"
                        width="64" height="64"
                    />

                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-sm text-[#06b6d4] font-semibold mt-0.5">{member.role}</p>
                </div>

                {/* Description / Expertise Area */}
                <div className="text-center">
                    <p className="text-sm text-slate-400 leading-relaxed italic mb-4">
                        {member.expertise}
                    </p>
                </div>

                {/* LinkedIn Link */}
                <div className="flex justify-center pt-2">
                    <a
                        href={member.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 transition-colors"
                        aria-label={`View ${member.name}'s LinkedIn`}
                    >
                        View Profile <ArrowRight className="w-3 h-3" />
                    </a>
                </div>
            </Card>
        </motion.div>
    );

    const totalCards = teamMembers.length;
    // Calculate scroll distance needed to loop seamlessly (1/3 of the total track width)
    const animationDistance = 100 / 3;
    const scrollDuration = totalCards * 4; // Adjusted duration for smooth scroll (e.g., 4s per card)

    return (
        <div className="collaborators-container overflow-hidden max-w-7xl mx-auto">
            <h1 className="sr-only">Meet the Core Development Team and Specialists for Full Stack and MERN Projects</h1>

            {/* User-facing section header (SEO-friendly content) */}
            <header className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4]">
                    Meet the Core Team
                </h2>
                <p className="text-sm text-slate-300 max-w-xl mx-auto mt-2">
                    A curated network of specialists in{' '}
                    <span className="text-[#3ed6ac] font-semibold">Digital Marketing</span>,{' '}
                    <span className="text-[#3ed6ac] font-semibold">Video Editing</span>,{' '}
                    <span className="text-[#3ed6ac] font-semibold">Full-Stack Engineering</span>,{' '}
                    <span className="text-[#3ed6ac] font-semibold">Mobile</span>, and{' '}
                    <span className="text-[#3ed6ac] font-semibold">Product Strategy</span>
                    , built to deliver robust, scalable solutions.
                </p>
            </header>

            <style jsx global>{`
                @keyframes scroll-loop {
                    0% { transform: translateX(0); }
                    /* Target 1/3 of the track width */
                    100% { transform: translateX(-${animationDistance}%); } 
                }
                
                .carousel-track {
                    display: flex;
                    /* Total width must accommodate 3 full sets of team members */
                    width: 300%; 
                    animation: scroll-loop ${scrollDuration}s linear infinite; 
                }
                
                .collaborators-container:hover .carousel-track {
                    animation-play-state: paused;
                }
                /* Optional: Hide scrollbar on desktop */
                .collaborators-container {
                    scrollbar-width: none;
                    -ms-overflow-style: none; 
                }
                .collaborators-container::-webkit-scrollbar {
                    display: none;
                }
            `}</style>

            {/* The main scrolling track, holding duplicated data */}
            <div className="carousel-track">
                {duplicatedTeamMembers.map(renderCard)}
            </div>
        </div>
    );
};

export default TeamMembersCarousel;