
"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, CalendarDays, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Dairy Nine (Freelance)",
    role: "Lead Full-Stack Developer",
    dateRange: "Jan 2025 – Present",
    description: "Production-grade SaaS platform automating the dairy supply chain. Built multi-role dashboards and camera-based barcode scanning for real-time billing and inventory automation.",
    image: "/project-images/dairy-nine.png?v=refresh",
    imageHint: "dairy supply chain platform dashboard",
    githubLink: "https://github.com/Piyush0930/9dairy-UI",
    demoLink: "#",
    tags: ["Next.js", "React Native", "MongoDB", "Production", "SaaS"]
  },
  {
    title: "AI Recruiter",
    role: "Lead Developer",
    dateRange: "Sep 2024 – Mar 2025",
    description: "Built an intelligent talent engine using a hybrid AI approach (Gemini Flash & Local Ollama Qwen) for resume analysis and semantic scoring. Reduced manual screening effort by 70% with automated workflows.",
    image: "/project-images/ai-recruiter.png?v=refresh",
    imageHint: "ai recruitment platform interface",
    githubLink: "https://github.com/Tejas164321/AI-Recruiter",
    demoLink: "https://airecruiter.tejasfolio.in/",
    tags: ["Next.js", "Firebase", "Gemini 2.0 Flash", "Ollama", "Qwen", "Hybrid AI"]
  },
  {
    title: "FinPal",
    role: "Full-Stack Developer",
    dateRange: "Feb 2025 – Jun 2025",
    description: "Hybrid AI financial dashboard analyzing 1000+ UPI transactions with Local LLMs (Ollama/Qwen). Developed parsers for PhonePe, GPay, and bank statements with ML-assisted automated expense categorization.",
    image: "/project-images/finpal-analyzer.png?v=refresh",
    imageHint: "financial analyzer dashboard",
    githubLink: "https://github.com/Tejas164321/FinPal",
    demoLink: "https://finpal.tejasfolio.in/",
    tags: ["MERN", "Gemini Flash", "Ollama", "Qwen", "Hybrid AI", "Automation"]
  },
  {
    title: "MyDinner",
    role: "Full-Stack Developer (Firebase)",
    dateRange: "Jan 2025 – Aug 2025",
    description: "Mess operations platform with a fully Firebase-powered backend — Auth, Firestore, and Cloud Functions for billing, meal attendance, and student management. Built role-based portals in Next.js for real-time tracking.",
    image: "/project-images/mydinner-app.png?v=refresh",
    imageHint: "mess management platform app",
    githubLink: "https://github.com/Tejas164321/My-Dinner",
    demoLink: "https://mydinner.tejasfolio.in/",
    tags: ["Next.js", "Firebase", "Firestore", "Cloud Functions", "RBAC", "React"]
  },
  {
    title: "Personal Portfolio",
    role: "Full-Stack Developer",
    dateRange: "2024 - Present",
    description: "Interactive personal portfolio using Next.js, Tailwind CSS, and ShadCN UI. Integrated with GenAI for smart components and hosted on Firebase.",
    image: "/project-images/portfolio-site.png?v=refresh",
    imageHint: "tejas patil portfolio site",
    githubLink: "https://github.com/Tejas164321/TejasFolio",
    demoLink: "https://tejasfolio.in/",
    tags: ["Next.js", "React", "Tailwind CSS", "Firebase"]
  },
];

const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="container overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInDown}
        className="text-center mb-12"
      >
        <h2
          className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
        >
          My Projects
        </h2>
        <p
          className="mt-4 text-base md:text-lg text-muted-foreground"
        >
          A selection of projects I've worked on, showcasing my skills and passion.
        </p>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={fadeInUp}>
            <Card className="flex flex-col overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.01] h-full">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-40 sm:h-48"
                  data-ai-hint={project.imageHint}
                  priority={projects.indexOf(project) < 3} 
                />
              </CardHeader>
              <CardContent className="flex-grow p-6 space-y-3">
                <CardTitle className="font-headline text-base sm:text-lg md:text-xl leading-snug">{project.title} ({project.role})</CardTitle>
                <div className="flex items-center text-xs text-muted-foreground pt-1">
                  <CalendarDays className="h-4 w-4 mr-1.5" />
                  <span>{project.dateRange}</span>
                </div>
                <CardDescription>{project.description}</CardDescription>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-accent/20 text-accent-foreground dark:text-accent px-2 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 border-t">
                <div className="flex justify-between items-center w-full">
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </Link>
                  </Button>
                  <div> 
                    {project.demoLink && project.demoLink !== "#" && (
                      <Button asChild variant="outline" size="sm">
                        <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </Link>
                      </Button>
                    )}
                    {project.demoLink === "#" && (
                       <Button variant="outline" size="sm" disabled>
                         <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                       </Button>
                     )}
                  </div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
