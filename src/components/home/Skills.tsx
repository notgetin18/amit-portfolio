import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/constant";

const Skills = () => {
  return (
    <>
      {/* Skills Section */}
      <section className="px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-4">
              Technical Expertise
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Proficient in modern web technologies with a focus on creating
              scalable, user-friendly applications
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                category: "Frontend",
                skills: [
                  "React.js",
                  "Next.js 14",
                  "TypeScript",
                  "Tailwind CSS",
                ],
              },
              {
                category: "Backend",
                skills: [
                  "Node.js",
                  "Express.js",
                  "API Integration",
                  "TypeScript",
                ],
              },
              {
                category: "Database",
                skills: [
                  "MongoDB",
                  "MySQL",
                  "AWS",
                  "Data Visualization",
                ],
              },
              {
                category: "DevOps",
                skills: ["Docker", "Git & GitHub", "Jira", "Slack"],
              },
            ].map((skillGroup, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-gradient-to-bl from-gray-100 to-indigo-600 hover:shadow-lg transition-shadow duration-300 border-slate-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">
                      {skillGroup.category}
                    </h3>
                    <ul className="space-y-2">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <li
                          key={skillIndex}
                          className="text-slate-600 flex items-center"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Skills;

// const RevolvingLogos = () => {
//   const logos = [
//     { src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg", alt: "MongoDB" },
//     { src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/express.svg", alt: "Express.js" },
//     { src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg", alt: "React" },
//     { src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg", alt: "Node.js" },
//   ];

//   return (
//     <div className="relative w-64 h-64 mx-auto my-8">
//       {logos.map((logo, index) => (
//         <div
//           key={logo.alt}
//           className="absolute w-full h-full animate-revolve"
//           style={{
//             transformOrigin: "center",
//             animationDelay: `${index * 1.5}s`, // Stagger the start of each logo's animation
//           }}
//         >
//           <img
//             src={logo.src}
//             alt={logo.alt}
//             className="absolute w-12 h-12 text-white fill-current top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform-origin-[50%_128px] drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
//             style={{
//               transform: `rotate(${index * 90}deg) translate(128px) rotate(-${index * 90}deg)`, // Position logos at 90-degree intervals
//             }}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

//  <style jsx>{`
//         @keyframes revolve {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
//         .animate-revolve {
//           animation: revolve 6s linear infinite;
//         }
//         .transform-origin-[50%_128px] {
//           transform-origin: 50% 128px;
//         }
//       `}</style>
