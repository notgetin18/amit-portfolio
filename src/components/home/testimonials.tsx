"use client";
import { motion } from "framer-motion";

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
];

const Testimonials = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    What My Collaborators Say
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
                    I thrive on building great products and even better relationships.
                </p>
            </motion.div>

            <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#07162b]/60 to-[#071826]/50 p-6 sm:p-8 backdrop-blur-md shadow-lg"
                    >
                        <blockquote className="text-slate-200 text-base sm:text-lg">
                            <p>&ldquo;{testimonial.quote}&rdquo;</p>
                        </blockquote>
                        <figcaption className="mt-6 flex items-center gap-4">
                            {/* You can use an Image component here if you have avatar images */}
                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#06b6d4] to-[#3ed6ac] flex items-center justify-center font-bold text-white">
                                {testimonial.name.charAt(0)}
                                {testimonial.name.split(" ")[1]?.charAt(0)}
                            </div>
                            <div>
                                <div className="font-semibold text-white">
                                    {testimonial.name}
                                </div>
                                <div className="text-slate-400 text-sm">
                                    {testimonial.title}
                                </div>
                            </div>
                        </figcaption>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;