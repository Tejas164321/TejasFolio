
"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, CalendarDays, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Powered Resume Screening & Ranking System",
    role: "Project Lead",
    dateRange: "Dec 2023 – May 2024",
    description: "Built an NLP-based AI system to automate candidate evaluation. Reduced manual screening time by 60%. Achieved 85% accuracy in matching candidates with job descriptions.",
    image: "/project-images/ai-resume-screening.png?v=refresh",
    imageHint: "ai resume screening",
    githubLink: "https://github.com/Tejas164321/AI-Powered-Resume-Parser-Rancker",
    demoLink: "https://resumerankai.vercel.app/",
    tags: ["AI/ML", "NLP", "Python", "Project Lead"]
  },
  {
    title: "Personal Expense Manager",
    role: "MERN Full-Stack Developer",
    dateRange: "Feb 2025 – Mar 2025",
    description: "Built a full-stack finance tracker with JWT auth and MongoDB. Managed 100+ users and implemented real-time expense dashboards.",
    image: "/project-images/expense-manager-mern.png?v=refresh",
    imageHint: "finance tracker mern",
    githubLink: "https://github.com/Tejas164321/MyExpenceManager-MERN-",
    demoLink: "#",
    tags: ["MERN", "MongoDB", "JWT", "Full-Stack"]
  },
  {
    title: "JavaFX Bus Booking Application",
    role: "Java Developer",
    dateRange: "Sep 2024 – Feb 2025",
    description: "GUI-based booking system using JavaFX + MySQL. Added real-time filtering and secure payment (UPI & Card).",
    image: "/project-images/bus-booking-javafx.png?v=refresh",
    imageHint: "bus booking java",
    githubLink: "https://github.com/Tejas164321/Online-Bus-Booking-Platform",
    demoLink: "#",
    tags: ["JavaFX", "Java", "MySQL", "Desktop App", "UI/UX"]
  },
  {
    title: "Currency Translator Web Application",
    role: "Web Developer",
    dateRange: "Jun 2024 – Jul 2024",
    description: "Responsive currency converter using real-time APIs. Enhanced UX with live exchange rate support.",
    image: "/project-images/currency-translator-web.png?v=refresh",
    imageHint: "currency converter api",
    githubLink: "https://github.com/Tejas164321/currency-translator-app",
    demoLink: "#",
    tags: ["JavaScript", "HTML/CSS", "API", "Web App"]
  },
  {
    title: "Personal Portfolio Website",
    role: "Full-Stack Developer & AI Integrator",
    dateRange: "2024 - Present",
    description: "Designed, developed, and deployed this interactive personal portfolio using Next.js, React, Tailwind CSS, ShadCN UI, and Genkit for the AI-powered contact form. Hosted on Firebase.",
    image: "/project-images/portfolio-site.png?v=refresh",
    imageHint: "portfolio design",
    githubLink: "https://github.com/Tejas164321",
    demoLink: "https://tejasfolio.vercel.app/",
    tags: ["Next.js", "React", "Tailwind CSS", "ShadCN", "Genkit", "Firebase", "Portfolio"]
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
          className="font-headline text-4xl font-bold tracking-tight sm:text-5xl"
        >
          My Projects
        </h2>
        <p
          className="mt-4 text-lg text-muted-foreground"
        >
          A selection of projects I've worked on, showcasing my skills and passion.
        </p>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={fadeInUp}>
            <Card className="flex flex-col overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.01] h-full" itemScope itemType="https://schema.org/SoftwareSourceCode">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={`Tejasfolio project: ${project.title}`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-48"
                  data-ai-hint={project.imageHint}
                  priority={projects.indexOf(project) < 3}
                  itemProp="image"
                />
              </CardHeader>
              <CardContent className="flex-grow p-6 space-y-3">
                <CardTitle className="font-headline text-xl" itemProp="name">{project.title} <span className="text-base font-normal text-muted-foreground">({project.role})</span></CardTitle>
                <div className="flex items-center text-xs text-muted-foreground pt-1">
                  <CalendarDays className="h-4 w-4 mr-1.5" />
                  <span>{project.dateRange}</span>
                </div>
                <CardDescription itemProp="description">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-accent/20 text-accent-foreground dark:text-accent px-2 py-1 rounded-full" itemProp="keywords">{tag}</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 border-t">
                <div className="flex justify-between items-center w-full">
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" itemProp="codeRepository">
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
