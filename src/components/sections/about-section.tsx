
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coffee, Code2, Brain, Users } from "lucide-react";
import { motion } from "framer-motion";

const techSkills = [
  { name: "Java", icon: <Coffee className="h-8 w-8 text-accent" /> },
  { name: "MERN Stack", icon: <Code2 className="h-8 w-8 text-accent" /> },
  { name: "AI/ML", icon: <Brain className="h-8 w-8 text-accent" /> },
  { name: "Cloud Computing", icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg> },
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
            About Me
          </h2>
          <p
            className="mt-4 text-lg text-muted-foreground"
          >
            Driven by passion and a thirst for knowledge. Located in Pune, India.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-1 gap-8 items-start"
          variants={fadeInUp}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">My Journey</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                A passionate and dedicated developer, I thrive on the challenge of building scalable applications using technologies like the MERN stack, Java, and Python. My experience extends to AI-driven automation, optimizing database performance, and architecting efficient RESTful APIs. I am deeply committed to solving real-world problems by leveraging robust software architecture and insightful data-driven solutions, always aiming to deliver impactful and user-centric software.
              </p>
              <h3 className="font-headline text-xl font-semibold flex items-center pt-4">
                <Users className="mr-2 h-5 w-5 text-primary" />
                Team Collaboration
              </h3>
              <p>
                Proven expertise in dynamic team collaboration and coordination, demonstrated through successful participation in SIH and GFG hackathons. I excel at working closely with diverse teams, ensuring clear communication, efficient task distribution, and seamless integration of ideas. This collaborative approach drives innovative, high-quality solutions delivered within tight deadlines and high-pressure environments.
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
