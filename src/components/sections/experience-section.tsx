
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, CalendarDays, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const experiences = [
  {
    company: "Delxn Technologies",
    role: "Software Developer Intern",
    period: "Sep 2025 – Feb 2026",
    location: "Pune, India (Onsite)",
    description: [
      "Contributed to the development of SkyStruct V2 Lite, a construction workflow platform.",
      "Built and integrated core modules supporting large-scale project operations.",
      "Collaborated with senior engineers to implement scalable features and system fixes."
    ],
    icon: <Briefcase className="h-5 w-5 text-primary" />,
  },
  {
    company: "Celebal Technologies",
    role: "React.js Developer Intern",
    period: "May 2025 – Jul 2025",
    location: "Jaipur, India (Remote)",
    description: [
      "Developed Quora/Spotify-style interfaces using reusable React components.",
      "Integrated REST APIs and optimized performance via code splitting.",
      "Delivered responsive UI across multiple devices during Agile sprints."
    ],
    icon: <Briefcase className="h-5 w-5 text-primary" />,
  },
  {
    company: "EY GDS & Edunet Foundation",
    role: "MERN Stack Intern",
    period: "Feb 2025 – Mar 2025",
    location: "India (Virtual)",
    description: [
      "Engineered FinPal, an AI-powered UPI transaction analysis system.",
      "Implemented secure authentication using JWT and RBAC access control.",
      "Optimized backend queries, reducing API response time by ~30%."
    ],
    icon: <Briefcase className="h-5 w-5 text-primary" />,
  }
];

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardPopInVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-background py-16 md:py-24 overflow-hidden">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Professional Timeline
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            My journey through corporate exposure and industrial software development.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="relative">
          {/* Vertical line - hidden on small, centered on large */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-border transform -translate-x-1/2 h-full hidden md:block"></div>
          
          <motion.div 
            className="space-y-8 md:space-y-0"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {experiences.map((item, index) => {
              const isCardOnRight = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className={`relative flex flex-col md:items-stretch mb-8 md:mb-12 ${
                    isCardOnRight ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  variants={cardPopInVariant}
                >
                  {/* Empty spacer for the timeline effect */}
                  <div className="hidden md:flex md:w-1/2 relative items-stretch">
                  </div>
                  
                  {/* Content Container */}
                  <div className={`w-full md:w-1/2 md:px-6 lg:px-8`}>
                  {/* Mobile-only: simple top connector */}
                    <div className="md:hidden h-6 relative mb-2"> 
                      <div className="absolute top-0 left-4 w-0.5 h-full bg-border"></div>
                    </div>
                    
                    <Card className="w-full shadow-lg bg-card transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01]">
                      <CardHeader className="flex flex-row items-start p-4 md:p-6 text-left">
                        <div className="flex-shrink-0 mr-3">
                          {React.cloneElement(item.icon as React.ReactElement, { className: "h-6 w-6 text-primary" })}
                        </div>
                        <div className="flex flex-col w-full items-start text-left">
                          <CardTitle className="font-headline text-xl">{item.company}</CardTitle>
                          <CardDescription className="text-sm font-semibold text-primary pt-1">{item.role}</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 md:p-6 pt-0 text-left">
                        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-1 mb-4">
                           <div className="flex items-center text-xs text-muted-foreground">
                             <CalendarDays className="h-4 w-4 mr-2" />
                             <span>{item.period}</span>
                           </div>
                           <div className="flex items-center text-xs text-muted-foreground">
                             <MapPin className="h-4 w-4 mr-2" />
                             <span>{item.location}</span>
                           </div>
                        </div>
                        <ul className="list-disc list-outside space-y-2 text-sm text-muted-foreground ml-4">
                          {item.description.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
