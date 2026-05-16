
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeXml, Palette, FileJson2, Atom, ServerCog, Code2, Coffee, Database, GitFork, Container, Brain, Cloud, LayoutPanelLeft, Wrench, Rocket, CodeSquare, Layers, MessageCircleCode, Share2, Pipette, DatabaseZap, Network, Pyramid, Workflow, Send, CloudCog, Zap, Code, Package, TerminalSquare } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "Languages",
    icon: <CodeSquare className="h-6 w-6 text-primary mb-2" />,
    skills: [
      { name: "Python", icon: <Pipette className="h-10 w-10 text-accent" /> },
      { name: "JavaScript", icon: <FileJson2 className="h-10 w-10 text-accent" /> },
      { name: "TypeScript", icon: <FileJson2 className="h-10 w-10 text-accent" /> },
      { name: "HTML", icon: <CodeXml className="h-10 w-10 text-accent" /> },
      { name: "CSS", icon: <Palette className="h-10 w-10 text-accent" /> },
    ],
  },
  {
    name: "Frameworks & UI",
    icon: <Layers className="h-6 w-6 text-primary mb-2" />,
    skills: [
      { name: "React.js", icon: <Atom className="h-10 w-10 text-accent" /> },
      { name: "Next.js", icon: <Zap className="h-10 w-10 text-accent" /> },
      { name: "React Native", icon: <LayoutPanelLeft className="h-10 w-10 text-accent" /> },
      { name: "Node.js", icon: <ServerCog className="h-10 w-10 text-accent" /> },
      { name: "Express.js", icon: <ServerCog className="h-10 w-10 text-accent" /> },
      { name: "MERN Stack", icon: <Code2 className="h-10 w-10 text-accent" /> },
    ],
  },
  {
    name: "AI/ML & GenAI",
    icon: <Brain className="h-6 w-6 text-primary mb-2" />,
    skills: [
      { name: "NLP / LLMs", icon: <Brain className="h-10 w-10 text-accent" /> },
      { name: "Generative AI", icon: <Zap className="h-10 w-10 text-accent" /> },
      { name: "RAG & LangChain", icon: <Network className="h-10 w-10 text-accent" /> },
      { name: "Agentic AI", icon: <Workflow className="h-10 w-10 text-accent" /> },
      { name: "Hugging Face", icon: <MessageCircleCode className="h-10 w-10 text-accent" /> },
    ],
  },
  {
    name: "Databases",
    icon: <DatabaseZap className="h-6 w-6 text-primary mb-2" />,
    skills: [
      { name: "MongoDB", icon: <Database className="h-10 w-10 text-accent" /> },
      { name: "MySQL / SQL", icon: <Database className="h-10 w-10 text-accent" /> },
      { name: "Firebase", icon: <Cloud className="h-10 w-10 text-accent" /> },
      { name: "VectorDB", icon: <Pyramid className="h-10 w-10 text-accent" /> },
    ],
  },
  {
    name: "Tools & DevOps",
    icon: <Wrench className="h-6 w-6 text-primary mb-2" />,
    skills: [
      { name: "Git", icon: <GitFork className="h-10 w-10 text-accent" /> },
      { name: "Docker", icon: <Container className="h-10 w-10 text-accent" /> },
      { name: "Postman", icon: <Send className="h-10 w-10 text-accent" /> },
      { name: "GitHub Actions", icon: <Rocket className="h-10 w-10 text-accent" /> },
      { name: "n8n Automation", icon: <Workflow className="h-10 w-10 text-accent" /> },
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
            className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Technical Skills
          </h2>
          <p
            className="mt-4 text-base md:text-lg text-muted-foreground"
          >
            A glimpse into the technologies and tools I master.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-10 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {skillCategories.map((category) => (
            <motion.div key={category.name} variants={fadeInUp}>
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.01] h-full">
                <CardHeader className="items-center text-center px-3 pt-4 pb-2 sm:px-6 sm:pt-6 sm:pb-4">
                  {category.icon}
                  <CardTitle className="font-headline text-base sm:text-xl">{category.name}</CardTitle>
                </CardHeader>
                <CardContent className="px-2 pb-3 sm:px-6 sm:pb-6">
                  <ul className="space-y-2 sm:space-y-4">
                    {category.skills.map((skill) => (
                      <li key={skill.name} className="flex items-center space-x-2 sm:space-x-4 p-1.5 sm:p-3 rounded-md hover:bg-background/50">
                        <div className="flex-shrink-0 [&>svg]:h-6 [&>svg]:w-6 sm:[&>svg]:h-10 sm:[&>svg]:w-10">{skill.icon}</div>
                        <div className="flex-grow">
                          <p className="font-medium text-xs sm:text-base">{skill.name}</p>
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
