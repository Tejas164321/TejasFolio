
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Brain, Users, Layers, LayoutPanelLeft } from "lucide-react";
import { motion } from "framer-motion";

const techSkills = [
  { name: "Python", icon: <Code2 className="h-8 w-8 text-accent" /> },
  { name: "MERN & Full-Stack Development", icon: <Layers className="h-8 w-8 text-accent" /> },
  { name: "AI/ML", icon: <Brain className="h-8 w-8 text-accent" /> },
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
    <section id="about" className="bg-secondary dark:bg-muted/30 overflow-hidden">
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div className="text-center mb-12" variants={fadeInDown}>
          <h2
            className="font-headline text-4xl font-bold tracking-tight sm:text-5xl"
          >
            About Me - Tejas Patil
          </h2>
          <p
            className="mt-4 text-lg text-muted-foreground"
          >
            Software Developer focused on building reliable, scalable, and user-centric applications from Pune, India.
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
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                I am a <strong>Software Developer</strong> based in <strong>Pune, India</strong>, with a degree in Computer Engineering from <strong>Savitribai Phule Pune University</strong>. My focus is on building production-grade, scalable applications using the <strong>MERN stack</strong> and <strong>Next.js</strong>, backed by well-structured REST APIs and modern backend architectures.
              </p>
              <p>
                I work extensively with <strong>Gen AI and LLMs</strong> to build intelligent, automation-driven solutions — from AI-powered workflows to real-world applications like a phone-camera barcode system for real-time billing and automated inventory management. I treat Gen AI not as a buzzword, but as a practical engineering tool.
              </p>
              <p>
                I was a recognized participant in the <strong>Alkimi MoveFWD Phase II</strong> hackathon hosted on HackerEarth — a Web3 competition focused on building decentralized applications using the <strong>Move programming language on the Sui blockchain</strong>. Top performers were also eligible for Web3 developer internship opportunities.
              </p>
              <h3 className="font-headline text-xl font-semibold flex items-center pt-4">
                <Users className="mr-2 h-5 w-5 text-primary" />
                Team Collaboration & Hackathons
              </h3>
              <p>
                I thrive in fast-paced, collaborative environments. I have hands-on hackathon experience from <strong>Smart India Hackathon (SIH)</strong> and <strong>GeeksforGeeks (GFG)</strong> competitions, and the Alkimi MoveFWD Phase II challenge. I value clear communication, strong ownership, and consistently delivering high-quality results under tight deadlines.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          variants={fadeInUp}
        >
          <h3 className="font-headline text-2xl font-semibold mb-8">Key Technology Areas:</h3>
          <motion.div
            className="flex flex-wrap justify-center gap-2 md:gap-4"
            variants={staggerContainer}
          >
            {techSkills.map((skill) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center space-y-2 p-3 rounded-lg transition-all hover:bg-card hover:shadow-md"
                variants={fadeInUp}
              >
                {skill.icon}
                <span className="text-sm font-medium text-muted-foreground">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
