
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Brain, Users, Layers, LayoutPanelLeft } from "lucide-react";
import { motion } from "framer-motion";

const techSkills = [
  { name: "Python", icon: <Code2 className="h-8 w-8 text-accent" /> },
  { name: "Full-Stack Development", icon: <Layers className="h-8 w-8 text-accent" /> },
  { name: "Gen AI", icon: <Brain className="h-8 w-8 text-accent" /> },
  { name: "Mobile (React Native)", icon: <LayoutPanelLeft className="h-8 w-8 text-accent" /> },
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

export default function AboutSection() {
  return (
    <section id="about" className="bg-secondary dark:bg-muted/30 overflow-hidden px-4 sm:px-0">
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div className="text-center mb-10 md:mb-12" variants={fadeInDown}>
          <h2
            className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            About Me — Tejas Patil
          </h2>
          <p
            className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Fresher and entry-level software developer building reliable, scalable, and user-centric applications from Pune, India.
          </p>
        </motion.div>

        <motion.div
          className="max-w-7xl 2xl:max-w-screen-2xl mx-auto"
          variants={fadeInUp}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">My Journey</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground text-sm sm:text-base">
              <p className="leading-relaxed">
                I am a <strong>Computer Engineering graduate</strong> from <strong>Savitribai Phule Pune University</strong>, having completed my degree in <strong>April 2026</strong>. I am a motivated <strong>fresher and entry-level software developer</strong> based in <strong>Pune, India</strong>, focused on building production-ready applications with the <strong>MERN stack</strong>, <strong>Next.js</strong>, and well-structured REST APIs.
              </p>
              <p className="leading-relaxed">
                Through internships, freelance work, and personal projects, I have gained hands-on experience across frontend, backend, databases, and deployment. I also work with <strong>Gen AI and LLMs</strong> to build practical automation-driven solutions, including AI-powered workflows and real-world applications for financial analysis, recruitment, billing, and inventory management.
              </p>
              <p className="leading-relaxed">
                I was a recognized participant in the <strong>Alkimi MoveFWD Phase II</strong> hackathon hosted on HackerEarth — a Web3 competition focused on building decentralized applications using the <strong>Move programming language on the Sui blockchain</strong>. Top performers were also eligible for Web3 developer internship opportunities.
              </p>
              <h3 className="font-headline text-lg sm:text-xl font-semibold flex items-center pt-2">
                <Users className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                Team Collaboration & Hackathons
              </h3>
              <p className="leading-relaxed">
                As I begin my professional career, I am actively seeking <strong>entry-level software engineering and full-stack development opportunities</strong> where I can contribute, learn from experienced teams, and grow through meaningful product work. I value clear communication, ownership, collaboration, and consistently delivering high-quality results.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="mt-12 md:mt-16 text-center"
          variants={fadeInUp}
        >
          <h3 className="font-headline text-xl sm:text-2xl font-semibold mb-6 md:mb-8">Key Technology Areas:</h3>
          <motion.div
            className="flex flex-wrap justify-center gap-3 md:gap-4"
            variants={staggerContainer}
          >
            {techSkills.map((skill) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center space-y-2 p-3 sm:p-4 rounded-lg transition-all hover:bg-card hover:shadow-md min-w-[80px]"
                variants={fadeInUp}
              >
                {skill.icon}
                <span className="text-xs sm:text-sm font-medium text-muted-foreground text-center">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
