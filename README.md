Tejas Patil - Personal Portfolio Website
This is the personal portfolio website for Tejas Patil, showcasing projects, skills, education, and a way to get in contact. It's built with a modern, responsive, and performant tech stack.

Tech Stack
This project leverages a range of modern web technologies to deliver a fast, interactive, and scalable user experience:

Framework: Next.js (v15+)
App Router: Used for routing, enabling server components, and streamlined data fetching.
React Server Components (RSC): Enhances performance by rendering components on the server, reducing client-side JavaScript.
TypeScript: For static typing, improving code quality and maintainability.
UI Library: React
Functional components and hooks are used extensively.
Styling:
Tailwind CSS: A utility-first CSS framework for rapid UI development.
ShadCN UI: A collection of beautifully designed, accessible, and customizable UI components built with Radix UI and Tailwind CSS. The components are directly integrated into the src/components/ui directory.
AI & Backend Functionality:
Genkit (by Google): An open-source framework for building AI-powered applications. Used here for:
Managing the contact form submission flow.
Integrating with Google's Gemini models (via @genkit-ai/googleai).
Resend: An email API platform used to send emails from the contact form.
Deployment:
Firebase Hosting: The project is configured for easy deployment to Firebase.
Development Tools:
Node.js: JavaScript runtime environment.
npm: Package manager for Node.js.
ESLint: For code linting and maintaining code quality.
VS Code: Recommended code editor. Project includes a .vscode/settings.json for optimal experience.
Prerequisites
Before you begin, ensure you have the following installed on your local machine:

Node.js: Version 18.x or later (LTS recommended). You can download it from nodejs.org.
npm: Usually comes bundled with Node.js.
Local Development Setup
Follow these steps to get the project running on your local machine:

Clone the Repository: If you have this project on GitHub, clone it to your local machine:

git clone <your-repository-url>
cd <repository-folder-name>
Install Dependencies: Navigate to the project's root directory and install the necessary npm packages:

npm install
Set Up Environment Variables: This project requires API keys for Resend (to send emails) and Google AI (for Genkit).

Create a new file named .env.local in the root directory of your project.

Add the following lines to your .env.local file, replacing the placeholder values with your actual API keys:

# Resend API Key for sending emails from the contact form
RESEND_API_KEY=your_actual_resend_api_key_here

# Google AI API Key for Genkit and Gemini models
GOOGLE_API_KEY=your_actual_google_ai_api_key_here
Important: The .env.local file is listed in .gitignore and should never be committed to your repository, as it contains sensitive information.

Run the Next.js Development Server: To start the main application:

npm run dev
This will typically start the development server on http://localhost:3000. Open this URL in your browser to see the application.

Run the Genkit Development Server (Optional but Recommended for AI Flow Testing): Genkit flows (like the contact form submission) can be developed and tested locally. The Genkit development server provides a UI to inspect and run flows.

To start the Genkit development server:
npm run genkit:dev
Or, to start it with automatic reloading on file changes:
npm run genkit:watch
The Genkit Developer UI will typically be available at http://localhost:4000.
Available Scripts
In the package.json file, you'll find several scripts for managing the project:

npm run dev: Starts the Next.js development server.
npm run genkit:dev: Starts the Genkit development server.
npm run genkit:watch: Starts the Genkit development server with file watching.
npm run build: Builds the Next.js application for production.
npm run start: Starts the Next.js production server (after running npm run build).
npm run lint: Runs ESLint to check for code quality issues.
npm run typecheck: Runs TypeScript compiler to check for type errors.
VS Code Setup
If you are using Visual Studio Code, the project includes a .vscode/settings.json file with recommended settings for a better development experience, including enabling inline AI completions if your VS Code setup supports it.

Project Structure Highlights
src/app/: Contains the main application pages and layouts (using Next.js App Router).
layout.tsx: The root layout for all pages.
page.tsx: The main home page component.
globals.css: Global styles and Tailwind CSS theme configuration.
src/components/: Contains React components.
layout/: Components for the overall page structure (Header, Footer).
sections/: Components for each distinct section of the portfolio (Hero, About, Projects, etc.).
ui/: ShadCN UI components.
src/ai/: Contains Genkit AI flows and configuration.
genkit.ts: Genkit initialization and configuration.
flows/: Directory for specific Genkit flows (e.g., sendMessageFlow.ts).
src/lib/: Utility functions and Firebase configuration.
public/: Static assets like images, resume PDF, and certificate images.
tailwind.config.ts: Tailwind CSS configuration file.
next.config.ts: Next.js configuration file.
Deployment
This project is configured for deployment on platforms like Firebase Hosting, Vercel, or Netlify. Remember to configure your environment variables (RESEND_API_KEY, GOOGLE_API_KEY) in your hosting provider's settings.

This README should provide a good overview and guide for anyone looking to understand or contribute to your portfolio project!