import { motion, m } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/constant";

// Small animated SVG donut used for skill proficiency
function SkillDonut({ value, size = 64, strokeWidth = 8, label }: { value: number; size?: number; strokeWidth?: number; label?: string }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - Math.min(Math.max(value, 0), 100) / 100);

  return (
    <div className="relative w-[64px] h-[64px] flex items-center justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <m.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#grad)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="transparent"
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: dashOffset }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ strokeDasharray: circumference }}
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#8ef3c1" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-xs text-white/90 font-semibold">{label}</div>
    </div>
  );
}

const Skills = () => {
  return (
    <>
      {/* Skills Section */}
      <section className="px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center text-sm text-slate-300 uppercase tracking-widest rounded-full bg-gradient-to-r from-white/5 via-white/3 to-transparent px-3 py-1 mb-4">Expertise & Focus</div>
            <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] mb-3">
              Technical Expertise & Core Strengths
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              I design, build and operate production-grade web platforms — performant frontends, resilient backends, and reliable cloud infrastructure. Below are the core skill areas and my proficiency level.
            </p>
          </m.div>

          <m.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                category: "Frontend",
                icon: (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <g stroke="#61DBFB" strokeWidth="1.2" fill="none">
                      <ellipse cx="12" cy="12" rx="6.5" ry="2.6" transform="rotate(25 12 12)" />
                      <ellipse cx="12" cy="12" rx="6.5" ry="2.6" transform="rotate(-25 12 12)" />
                      <circle cx="12" cy="12" r="1.6" fill="#61DBFB" />
                    </g>
                  </svg>
                ),
                skills: [
                  { name: "React & Next.js", level: 92 },
                  { name: "TypeScript", level: 88 },
                  { name: "Tailwind & CSS", level: 86 },
                ],
              },
              {
                category: "Backend",
                icon: (
                  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 2l7 4v8l-7 4-7-4V6l7-4z" fill="#8CC84B" />
                  </svg>
                ),
                skills: [
                  { name: "Node.js & Express", level: 88 },
                  { name: "API Design", level: 80 },
                  { name: "TypeScript", level: 82 },
                ],
              },
              {
                category: "Database & Infra",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <rect x="3" y="4" width="18" height="16" rx="3" fill="#47A248" />
                  </svg>
                ),
                skills: [
                  { name: "MongoDB", level: 84 },
                  { name: "MySQL & Analytics", level: 74 },
                  { name: "Redis / RabbitMQ", level: 70 },
                ],
              },
              {
                category: "Platform & DevOps",
                icon: (
                  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M3 18h18v-2H3v2z" fill="#FF9900" opacity="0.95" />
                  </svg>
                ),
                skills: [
                  { name: "AWS & Cloud", level: 78 },
                  { name: "Docker / CI", level: 75 },
                  { name: "Observability", level: 70 },
                ],
              },
            ].map((skillGroup, index) => (
              <m.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-gradient-to-br from-[#061025]/60 via-[#07162b]/50 to-[#071826]/40 hover:shadow-2xl transition-shadow duration-300 border border-white/5 backdrop-blur-md">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-white/5 to-transparent flex items-center justify-center text-lg text-white/90 drop-shadow-sm">{skillGroup.icon}</div>
                        <h3 className="text-xl font-semibold text-white">{skillGroup.category}</h3>
                      </div>
                      <div className="text-xs text-slate-400">Proficiency</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 items-center">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center gap-4">
                          {/* Skill donut chart */}
                          <SkillDonut value={skill.level} size={64} strokeWidth={8} label={`${skill.level}%`} />

                          <div className="flex-1">
                            <div className="text-sm text-slate-200 font-semibold">{skill.name}</div>
                            <div className="text-xs text-slate-400 mt-1">{skillIndex === 0 ? "Expert" : skillIndex === 1 ? "Advanced" : "Intermediate"}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>
    </>
  );
};

export default Skills;

//   const logos = [
//     { src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg", alt: "MongoDB" },
//     { src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/express.svg", alt: "Express.js" },
//     { src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg", alt: "React" },
//     { src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg", alt: "Node.js" },
//   ];
   