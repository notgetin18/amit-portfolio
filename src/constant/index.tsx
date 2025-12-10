import {
    Calendar,
    Clock,
    ArrowRight,
    BookOpen,
    Code,
    Lightbulb,
} from "lucide-react";

export const resumeContent = `
AMIT KUMAR
MERN Stack Developer
Email: notgetin18@gmail.com
Phone: (+91) 9660637657

SUMMARY:
Full Stack Developer proficient in MERN stack technologies with solid back-end knowledge. Experienced in leading cross-functional teams and building scalable applications.

TECHNICAL SKILLS:
Frontend: JavaScript, React.js, React Native, Next.js 14, Redux, TypeScript, Tailwind CSS
Backend: Node.js, Express.js, TypeScript, API's Integration
DevOps: Docker (basics), Git and GitHub, Jira and Slack
Database: MongoDB, MySQL, AWS (basics)

EXPERIENCE:
Software Engineer (SE) - Bright Digital Gold | April 2022 - Present
• Developed responsive web and mobile interfaces with JavaScript, React.js, TypeScript, and Redux
• Effectively integrated APIs and engineered intuitive data visualizations for over 50,000 user base
• Boosted website speed by 30% using React State management, Formik, and optimizing KYC/transactions
• Collaborated with cross-functional teams to deliver superior software products, achieving a 10% revenue increase
• Implemented coupon discount calculations and promotional strategies, driving a revenue increase of over 20%

Software Engineer (SE) - TestOfire Technologies | November 2021 - Present
• Orchestrated the creation of a pioneering student and coaching app platform
• Enabled seamless user experiences by ensuring immediate updates between apps
• Architected a resilient API-based infrastructure, facilitating dynamic data exchange

Freelance Projects:
Medical Kundali | 2024 - Present
• Developing a comprehensive medical platform providing personalized health insights
• Built using MERN stack with focus on user experience and data security

EDUCATION:
Master of Computer Application | MAHGU | 2021 - 2023
Bachelor's Degree in Computer Application | IGNOU, Delhi | 2018 - 2021

ACHIEVEMENTS:
• Community Computer Skills and Education Volunteer (July 2020 - April 2022)
• Listening Audio Books and Cricket
                  `;

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const defaultBlogPosts = [
    {
        id: 1,
        title: "Building Scalable MERN Applications: Best Practices",
        excerpt:
            "Learn the essential patterns and practices for building robust MERN stack applications that can handle thousands of users.",
        date: "2024-01-15",
        readTime: "8 min read",
        category: "Development",
        icon: Code,
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        id: 2,
        title: "Optimizing React Performance: Real-world Techniques",
        excerpt:
            "Discover the performance optimization techniques I used to boost website speed by 30% in production applications.",
        date: "2024-01-10",
        readTime: "6 min read",
        category: "React",
        icon: Lightbulb,
        gradient: "from-purple-500 to-pink-500",
    },
    {
        id: 3,
        title: "API Integration Strategies for Modern Web Apps",
        excerpt:
            "Explore different approaches to API integration and how to handle complex data flows in MERN applications.",
        date: "2024-01-05",
        readTime: "10 min read",
        category: "Backend",
        icon: BookOpen,
        gradient: "from-green-500 to-teal-500",
    },
];
