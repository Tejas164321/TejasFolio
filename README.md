# 🌟 TejasFolio - Personal Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-11.8.1-orange)](https://firebase.google.com/)

Welcome to my personal portfolio website! This is a modern, responsive, and interactive showcase of my journey as an aspiring Software Engineer, Full-Stack Developer, and AI & ML Enthusiast. Built with cutting-edge technologies, this site highlights my projects, skills, education, certifications, and provides an easy way to get in touch.

🌟 **Live Demo**: [tejasfolio.vercel.app](https://tejasfolio.vercel.app/)

---

## 📋 Table of Contents

- [🌟 Introduction](#-introduction)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📦 Installation](#-installation)
- [🎯 Usage](#-usage)
- [🏗️ Project Structure](#️-project-structure)

---

## 🌟 Introduction

Hi, I'm **Tejas Patil** 👋, a passionate and dedicated developer based in Pune, India. Currently pursuing my Bachelor of Engineering in Computer Engineering at Savitribai Phule Pune University. I specialize in full-stack development, AI/ML applications, and scalable software solutions.

This portfolio website serves as a comprehensive digital resume, featuring:
- **Interactive Hero Section** with smooth animations
- **About Me** highlighting my journey and key skills
- **Project Showcase** with live demos and GitHub links
- **Technical Skills** categorized by expertise areas
- **Education & Certifications** timeline with clickable certificates
- **AI-Powered Contact Form** for seamless communication

Driven by innovation and a thirst for knowledge, I thrive on building impactful applications that solve real-world problems. Whether it's optimizing database performance, architecting RESTful APIs, or implementing AI-driven automation, I'm always eager to tackle new challenges.

---

## ✨ Features

### 🎨 Modern UI/UX
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Seamless theme switching with next-themes
- **Smooth Animations**: Powered by Framer Motion for engaging interactions
- **Accessible Components**: Built with Radix UI primitives via ShadCN UI

### 🤖 AI Integration
- **Intelligent Contact Form**: Uses Google's Genkit and Gemini models for message processing
- **Automated Email Sending**: Integrated with Resend API for reliable email delivery
- **Smart Flow Management**: Custom Genkit flows for handling user inquiries

### 📱 Interactive Sections
- **Hero Section**: Animated introduction with call-to-action buttons
- **About Section**: Personal journey and key technology areas
- **Projects Gallery**: Card-based layout with hover effects and project details
- **Skills Matrix**: Categorized technical competencies with visual icons
- **Education Timeline**: Interactive timeline with certificate previews
- **Contact Form**: Real-time validation and AI-powered message handling

### 🔧 Developer Experience
- **TypeScript**: Full type safety for robust development
- **ESLint**: Code quality and consistency enforcement
- **Hot Reload**: Instant feedback during development
- **SEO Optimized**: Meta tags and structured data for better search visibility

---

## 🛠️ Tech Stack

### Frontend Framework
- **[Next.js 15+](https://nextjs.org/)**: App Router, React Server Components, optimized performance
- **[React 18](https://react.dev/)**: Functional components, hooks, concurrent features
- **[TypeScript](https://www.typescriptlang.org/)**: Static typing for better code quality

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework
- **[ShadCN UI](https://ui.shadcn.com/)**: Beautiful, accessible components built on Radix UI
- **[Framer Motion](https://www.framer.com/motion/)**: Declarative animations and gestures

### Backend & AI
- **[Genkit](https://firebase.google.com/docs/genkit)**: Open-source framework for AI-powered apps
- **[@genkit-ai/googleai](https://github.com/googleapis/genkit-js)**: Integration with Google's Gemini models
- **[Resend](https://resend.com/)**: Email API for contact form submissions

### Database & Hosting
- **[Firebase](https://firebase.google.com/)**: Hosting, authentication, and real-time database
- **[Vercel](https://vercel.com/)**: Deployment platform with global CDN

### Development Tools
- **[Node.js 18+](https://nodejs.org/)**: JavaScript runtime
- **[npm](https://www.npmjs.com/)**: Package management
- **[ESLint](https://eslint.org/)**: Code linting
- **[VS Code](https://code.visualstudio.com/)**: Recommended IDE

---

## 📦 Installation

### Prerequisites
- **Node.js**: Version 18.x or later (LTS recommended)
- **npm**: Comes bundled with Node.js
- **Git**: For cloning the repository

### Setup Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Tejas164321/TejasFolio.git
   cd TejasFolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Resend API Key for email functionality
   RESEND_API_KEY=your_actual_resend_api_key_here

   # Google AI API Key for Genkit and Gemini models
   GOOGLE_API_KEY=your_actual_google_ai_api_key_here
   ```
   
   > **⚠️ Security Note**: Never commit `.env.local` to version control. It's already in `.gitignore`.

4. **Start Development Server**
   ```bash
   npm run dev
   ```
   
   The application will be available at `http://localhost:3000`.

5. **Optional: Genkit Development Server**
   ```bash
   # Start Genkit UI for flow testing
   npm run genkit:dev
   
   # Or with auto-reload
   npm run genkit:watch
   ```
   
   Access the Genkit Developer UI at `http://localhost:4000`.

---

## 🎯 Usage

### Available Scripts
- `npm run dev`: Start the Next.js development server
- `npm run genkit:dev`: Launch Genkit development UI
- `npm run genkit:watch`: Genkit UI with file watching
- `npm run build`: Create production build
- `npm run start`: Start production server
- `npm run lint`: Run ESLint for code quality
- `npm run typecheck`: TypeScript type checking

### Navigation
- **Hero Section**: Introduction and primary CTAs
- **About**: Personal background and expertise areas
- **Projects**: Portfolio of completed work with demos
- **Skills**: Technical competencies overview
- **Education**: Academic background and certifications
- **Contact**: Get in touch via AI-powered form

### Customization
To personalize for your own use:
1. Update personal information in component files
2. Replace project data in `src/components/sections/projects-section.tsx`
3. Add your certificates to `public/certificates/`
4. Modify contact details in `src/components/sections/contact-section.tsx`
5. Update social links and resume download

---

## 🏗️ Project Structure

```
TejasFolio/
├── app/                          # Next.js App Router
│   ├── favicon.ico
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── src/
│   ├── ai/                      # AI and Genkit configuration
│   │   ├── dev.ts
│   │   ├── genkit.ts
│   │   └── flows/
│   │       └── sendMessageFlow.ts
│   ├── components/
│   │   ├── layout/              # Layout components
│   │   │   ├── footer.tsx
│   │   │   └── header.tsx
│   │   ├── sections/            # Page sections
│   │   │   ├── about-section.tsx
│   │   │   ├── contact-section.tsx
│   │   │   ├── education-section.tsx
│   │   │   ├── hero-section.tsx
│   │   │   ├── projects-section.tsx
│   │   │   └── skills-section.tsx
│   │   ├── theme-provider.tsx
│   │   ├── theme-toggle.tsx
│   │   └── ui/                  # ShadCN UI components
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   └── lib/
│       └── utils.ts
├── public/                      # Static assets
│   ├── certificates/            # Certification images
│   ├── project-images/          # Project screenshots
│   └── resume/
│       └── Tejas-Patil-Resume.pdf
├── docs/
│   └── blueprint.md             # Project documentation
├── .env.local                   # Environment variables (not committed)
├── .gitignore
├── components.json              # ShadCN configuration
├── next.config.ts               # Next.js configuration
├── package.json
├── tailwind.config.ts           # Tailwind CSS config
├── tsconfig.json                # TypeScript config
└── README.md                    # This file
```

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **ShadCN UI** for beautiful, accessible components
- **Google Genkit** for seamless AI integration
- **Framer Motion** for smooth animations
- **Tailwind CSS** for rapid styling
- **Next.js** team for an amazing framework

---

**Your Personal Portfolio**


