
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
            Computer Engineer and full-stack developer focused on building reliable, user-centric software from Pune, India.
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
                I am a Computer Engineering student at <strong>Savitribai Phule Pune University</strong> and a full-stack/mobile developer based in <strong>Pune, India</strong>. My work centers on scalable MERN and Next.js applications, AI-powered automation, and efficient REST APIs.
              </p>
              <p>
                I build practical products with <strong>React Native</strong> and <strong>Gen AI/LLMs</strong>, including a phone-camera barcode workflow for real-time billing and automated inventory management.
              </p>
              <h3 className="font-headline text-xl font-semibold flex items-center pt-4">
                <Users className="mr-2 h-5 w-5 text-primary" />
                Team Collaboration
              </h3>
              <p>
                I collaborate effectively in fast-paced teams, with hands-on experience from SIH and GFG hackathons. I focus on clear communication, ownership, and delivering high-quality outcomes under tight deadlines.
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
