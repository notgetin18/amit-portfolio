# Amit Kumar's Portfolio

A modern, responsive, and interactive personal portfolio website built to showcase my web development projects and skills.

## 🚀 Tech Stack

-   **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Database/Rate Limiting:** [Upstash Redis](https://upstash.com/)
-   **Email:** [Resend](https://resend.com/)
-   **Particles:** [TSParticles](https://github.com/matteobruni/tsparticles)
-   **Testing:** [Vitest](https://vitest.dev/)

## ✨ Key Features

-   **Responsive Design:** Optimized for all device sizes.
-   **Dark/Light Mode:** Seamless theme switching.
-   **Interactive UI:** Smooth animations and transitions using Framer Motion.
-   **Contact Form:** Integrated with Resend for emails and Upstash Redis for rate limiting.
-   **Resume Download:** Easy access to download resume in multiple formats (PDF, DOCX).
-   **Blog Section:** Dedicated area for sharing technical insights.

## 🛠️ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

-   Node.js (18+ recommended)
-   npm, yarn, pnpm, or bun

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/amit-portfolio.git
    cd amit-portfolio
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up environment variables:**

    Create a `.env` file in the root directory and add the following keys (you will need credentials from Upstash and Resend):

    ```env
    UPSTASH_REDIS_REST_URL=your_upstash_url
    UPSTASH_REDIS_REST_TOKEN=your_upstash_token
    # Add other necessary keys like RESEND_API_KEY if applicable
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🧪 Running Tests

To run the test suite:

```bash
npm run test
# or to run with UI
npm run test:ui
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
