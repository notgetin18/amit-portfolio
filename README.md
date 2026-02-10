# Amit Kumar's Portfolio

A modern, responsive, and interactive personal portfolio website built to showcase my web development projects and skills.

## 🚀 Tech Stack

-   **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **CMS:** [Sanity.io](https://www.sanity.io/)
-   **Database/Rate Limiting:** [Upstash Redis](https://upstash.com/)
-   **Email:** [Resend](https://resend.com/)
-   **Monitoring:** [Vercel Analytics & Speed Insights](https://vercel.com/analytics)

## ✨ Key Features

-   **Optimized Newsletter:** Reusable subscription system integrated into home, blog archive, and every article with smooth scroll navigation and global toast notifications.
-   **Performance-First Blog:** Content-driven architecture using Sanity CMS with optimized images and SEO metadata.
-   **Resilient Rate Limiting:** Fail-open protection via Upstash Redis to ensure service availability during infrastructure downtime.
-   **Responsive Design:** Mobile-first UI with premium aesthetics, glassmorphism, and micro-animations.
-   **Contact Form:** Robust lead generation with real-time validation and Resend email integration.

## 🛠️ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

-   Node.js (20+ recommended)
-   npm, yarn, pnpm, or bun

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/mern-expert-amit/amit-portfolio.git
    cd amit-portfolio
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**

    Create a `.env` file in the root directory:

    ```env
    RESEND_API_KEY=re_...
    RESEND_API_KEY_BLOG_SUBSCRIPTION=re_...
    UPSTASH_REDIS_REST_URL=https://...
    UPSTASH_REDIS_REST_TOKEN=...
    NEXT_PUBLIC_SANITY_PROJECT_ID=...
    NEXT_PUBLIC_SANITY_DATASET=production
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
