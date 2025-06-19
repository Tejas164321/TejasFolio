
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeXml, Palette, FileJson2, Atom, ServerCog, Code2, Coffee, Database, GitFork, Container, Brain, Cloud, LayoutPanelLeft, Wrench, Rocket, CodeSquare, Layers, MessageCircleCode, Share2, Pipette, DatabaseZap, Network, Pyramid, Workflow, Send, CloudCog, Zap, Code, Package, TerminalSquare } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "Programming & Frameworks",
    icon: <CodeSquare className="h-6 w-6 text-primary mb-2" />,
    skills: [
      { name: "Python", icon: <Pyramid className="h-10 w-10 text-accent" /> },
      { name: "Java", icon: <Coffee className="h-10 w-10 text-accent" /> },
      { name: "JavaScript", icon: <FileJson2 className="h-10 w-10 text-accent" /> },
      { name: "TypeScript", icon: <FileJson2 className="h-10 w-10 text-accent" /> },
      { name: "HTML", icon: <CodeXml className="h-10 w-10 text-accent" /> },
      { name: "CSS", icon: <Palette className="h-10 w-10 text-accent" /> },
    ],
  },
  {
    name: "Full-Stack Development",
    icon: <Layers className="h-6 w-6 text-primary mb-2" />,
    skills: [
      { name: "React.js", icon: <Atom className="h-10 w-10 text-accent" /> },
      { name: "Node.js", icon: <ServerCog className="h-10 w-10 text-accent" /> },
      { name: "Express.js", icon: <ServerCog className="h-10 w-10 text-accent" /> },
      { name: "MERN Stack", icon: <Code2 className="h-10 w-10 text-accent" /> },
      { name: "Django", icon: <CodeSquare className="h-10 w-10 text-accent" /> },
      { name: "Flask", icon: <ServerCog className="h-10 w-10 text-accent" /> },
    ],
  },
  {
    name: "AI & Data Science",
    icon: <Brain className="h-6 w-6 text-primary mb-2" />,
    skills: [
      { name: "Machine Learning", icon: <Brain className="h-10 w-10 text-accent" /> },
      { name: "NLP", icon: <MessageCircleCode className="h-10 w-10 text-accent" /> },
      { name: "TensorFlow", icon: <Share2 className="h-10 w-10 text-accent" /> },
      { name: "scikit-learn", icon: <Pipette className="h-10 w-10 text-accent" /> },
      { name: "Genkit", icon: <Zap className="h-10 w-10 text-accent" /> },
    ],
  },
  {
    name: "Databases & APIs",
    icon: <DatabaseZap className="h-6 w-6 text-primary mb-2" />,
    skills: [
      { name: "MongoDB", icon: <Database className="h-10 w-10 text-accent" /> },
      { name: "MySQL", icon: <Database className="h-10 w-10 text-accent" /> },
      { name: "SQL", icon: <Database className="h-10 w-10 text-accent" /> },
      { name: "PostgreSQL", icon: <Database className="h-10 w-10 text-accent" /> },
      { name: "Firebase", icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M18.23 7.22a21.62 21.62 0 0 0-6.23-5.22c-.5-.3-1.2-.3-1.72 0a21.62 21.62 0 0 0-6.23 5.22C3.52 7.9 3 8.94 3 10c0 2.76 2.24 5 5 5h8c2.76 0 5-2.24 5-5 0-1.06-.52-2.1-1.07-2.78Z"></path><path d="M3.5 15.5c.84.84 1.68 1.68 2.52 2.52"></path><path d="M10 15c.84.84 1.68 1.68 2.52 2.52"></path><path d="M14.5 15.5c.84.84 1.68 1.68 2.52 2.52"></path></svg> },
      { name: "REST APIs", icon: <Network className="h-10 w-10 text-accent" /> },
    ],
  },
  {
    name: "Cloud Computing",
    icon: <CloudCog className="h-6 w-6 text-primary mb-2" />,
    skills: [
      { name: "Cloud Deployment", icon: <Rocket className="h-10 w-10 text-accent" /> },
      { name: "CI/CD Pipelines", icon: <Workflow className="h-10 w-10 text-accent" /> },
      { name: "Docker", icon: <Container className="h-10 w-10 text-accent" /> },
      { name: "Firebase", icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M18.23 7.22a21.62 21.62 0 0 0-6.23-5.22c-.5-.3-1.2-.3-1.72 0a21.62 21.62 0 0 0-6.23 5.22C3.52 7.9 3 8.94 3 10c0 2.76 2.24 5 5 5h8c2.76 0 5-2.24 5-5 0-1.06-.52-2.1-1.07-2.78Z"></path><path d="M3.5 15.5c.84.84 1.68 1.68 2.52 2.52"></path><path d="M10 15c.84.84 1.68 1.68 2.52 2.52"></path><path d="M14.5 15.5c.84.84 1.68 1.68 2.52 2.52"></path></svg> },
      { name: "AWS Basics", icon: <Cloud className="h-10 w-10 text-accent" /> },
    ],
  },
  {
    name: "Tools",
    icon: <Wrench className="h-6 w-6 text-primary mb-2" />,
    skills: [
      { name: "Git", icon: <GitFork className="h-10 w-10 text-accent" /> },
      { name: "Postman", icon: <Send className="h-10 w-10 text-accent" /> },
      { name: "JavaFX", icon: <LayoutPanelLeft className="h-10 w-10 text-accent" /> },
      { name: "VS Code", icon: <Code className="h-10 w-10 text-accent" /> },
      { name: "npm/yarn", icon: <Package className="h-10 w-10 text-accent" /> },
      { name: "Linux Shell", icon: <TerminalSquare className="h-10 w-10 text-accent" /> },
    ],
  }
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

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-secondary dark:bg-muted/30 overflow-hidden">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInDown}
          className="text-center mb-16"
        >
          <h2
            className="font-headline text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Technical Skills
          </h2>
          <p
            className="mt-4 text-lg text-muted-foreground"
          >
            A glimpse into the technologies and tools I master.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {skillCategories.map((category) => (
            <motion.div key={category.name} variants={fadeInUp}>
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.01] h-full">
                <CardHeader className="items-center text-center">
                  {category.icon}
                  <CardTitle className="font-headline text-xl">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {category.skills.map((skill) => (
                      <li key={skill.name} className="flex items-center space-x-4 p-3 rounded-md hover:bg-background/50">
                        <div className="flex-shrink-0">{skill.icon}</div>
                        <div className="flex-grow">
                          <p className="font-medium">{skill.name}</p>
                        </div>
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
  );
}
