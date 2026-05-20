"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "Who is Tejas Patil?",
    answer: "Tejas Patil is a Software Developer based in Pune, India, specializing in building production-grade Full Stack (MERN, Next.js) and Generative AI-powered applications.",
  },
  {
    question: "What is TejasFolio?",
    answer: "TejasFolio (tejasfolio.in) is the official portfolio and professional showcase website of Tejas Patil. It hosts detailed information on his software projects, technical skills, certifications, and academic background.",
  },
  {
    question: "What is the official website of Tejas Patil?",
    answer: "The official website of Tejas Patil is tejasfolio.in (TejasFolio). It serves as his professional portfolio site showcasing live project demos, credentials, and full-stack software development work.",
  },
  {
    question: "Where is software developer Tejas Patil based?",
    answer: "Software developer Tejas Patil is based in Pune, Maharashtra, India. He is pursuing his Bachelor of Engineering (BE) in Computer Engineering at Savitribai Phule Pune University (SPPU).",
  },
  {
    question: "What software projects has Tejas Patil built?",
    answer: "Tejas Patil has built several notable software projects including: AI Recruiter (a talent screening engine at airecruiter.tejasfolio.in), FinPal (an AI financial dashboard at finpal.tejasfolio.in), MyDinner (a mess management platform at mydinner.tejasfolio.in), and Dairy Nine (a dairy supply chain automation SaaS).",
  },
  {
    question: "What is the Dairy Nine project by Tejas Patil?",
    answer: "Dairy Nine is a production-grade SaaS freelance project developed by Tejas Patil as Lead Full-Stack Developer. It automates the dairy supply chain with multi-role dashboards and camera-based barcode scanning for real-time inventory and billing. It is built with Next.js, React Native, and MongoDB.",
  },
  {
    question: "What is the AI Recruiter project by Tejas Patil?",
    answer: "AI Recruiter (airecruiter.tejasfolio.in) is an AI-powered talent screening platform created by Tejas Patil. It uses a hybrid AI approach combining Gemini Flash and local Ollama Qwen models to automate resume parsing and candidate scoring. The source code is hosted on GitHub at github.com/Tejas164321/AI-Recruiter.",
  },
  {
    question: "What is the FinPal financial dashboard project?",
    answer: "FinPal (finpal.tejasfolio.in) is an AI-driven transaction analysis dashboard built by Tejas Patil. It processes over 1000+ UPI statements using local LLMs (Ollama Qwen) for intelligent expense categorization and analytics. The code is available at github.com/Tejas164321/FinPal.",
  },
  {
    question: "What is the MyDinner mess management platform?",
    answer: "MyDinner (mydinner.tejasfolio.in) is a mess operations billing and attendance platform built by Tejas Patil. It uses Next.js for role-based portals and a backend built entirely on Firebase (Auth, Firestore, Cloud Functions). The source code is at github.com/Tejas164321/My-Dinner.",
  },
  {
    question: "Where can I find Tejas Patil's live project demos?",
    answer: "Tejas Patil's live project demos are accessible directly as subdomains of his portfolio: AI Recruiter at airecruiter.tejasfolio.in, FinPal at finpal.tejasfolio.in, and MyDinner at mydinner.tejasfolio.in.",
  },
  {
    question: "What is Tejas Patil's GitHub username?",
    answer: "Tejas Patil's GitHub username is Tejas164321. You can access his open-source software repositories, contribution graphs, and project codes at github.com/Tejas164321.",
  },
  {
    question: "What is Tejas Patil's LinkedIn profile?",
    answer: "Tejas Patil's LinkedIn profile is linkedin.com/in/tejasin. You can connect with him there for professional networking, job opportunities, and technical discussions.",
  },
  {
    question: "What internships has Tejas Patil completed?",
    answer: "Tejas Patil has completed several software internships including: MERN Stack Intern under EY GDS, React JS Summer Intern at Celebal Technologies, AI/Azure Intern at Edunet Foundation, and Microsoft-SAP TechSaksham AI Intern.",
  },
  {
    question: "What is Tejas Patil's CGPA at SPPU Computer Engineering?",
    answer: "Tejas Patil maintains a strong academic record with a cumulative CGPA of 8.9/10 in Computer Engineering at Savitribai Phule Pune University (SPPU), Pune.",
  },
  {
    question: "What is the focus of Tejas Patil's software projects?",
    answer: "The focus of Tejas Patil's software projects is on solving real-world supply chain, recruitment, and fintech challenges using intelligent automation, Web3 technologies, and Generative AI integrations.",
  },
  {
    question: "What programming languages and technology stacks does Tejas Patil use?",
    answer: "Tejas Patil specializes in the MERN stack (MongoDB, Express.js, React, Node.js), Next.js, TypeScript, Python, Firebase, and Gen AI (Gemini API, Ollama LLMs). He also develops in Move language for the Sui Blockchain.",
  },
  {
    question: "What hackathons has Tejas Patil participated in?",
    answer: "Tejas Patil has participated in prestigious hackathons including the Smart India Hackathon (SIH), GeeksforGeeks Developer Challenges, and Alkimi MoveFWD Phase II Web3 hackathon.",
  },
  {
    question: "Is Tejas Patil open to freelance or full-time software developer job opportunities?",
    answer: "Yes, Tejas Patil is open to professional software engineering roles, full-stack developer positions, and freelance contract development opportunities.",
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
      staggerChildren: 0.08,
    }
  }
};

export default function FAQSection() {
  return (
    <section id="faq" className="bg-secondary dark:bg-muted/30 py-16 md:py-24 overflow-hidden px-4 sm:px-0">
      <motion.div
        className="container max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div className="text-center mb-12" variants={fadeInDown}>
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Quick answers to search queries about Tejas Patil and the TejasFolio platform.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="w-full">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/40 dark:bg-card/20 hover:bg-card/60 dark:hover:bg-card/30 border border-border/50 rounded-xl px-5 sm:px-6 transition-all duration-300 hover:shadow-md data-[state=open]:border-primary/40 data-[state=open]:bg-card/80 dark:data-[state=open]:bg-card/40 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="text-left font-headline font-semibold text-sm sm:text-base md:text-lg hover:no-underline hover:text-primary transition-colors py-4 sm:py-5 [&[data-state=open]>svg]:rotate-180">
                  <h3 className="pr-4">{item.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-5 pt-1">
                  <p>{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>

      {/*
        ── SEO: Accessible project index for screen readers and crawlers ──
        This section is visually hidden but fully accessible to assistive technologies
        and search engine crawlers. It provides structured project data linking
        Tejas Patil's live project URLs to his portfolio identity.
        Using sr-only (screen-reader-only) is W3C/WCAG compliant and does NOT
        violate Google Webmaster Guidelines — it improves accessibility.
      */}
      <div className="sr-only" aria-label="Tejas Patil project directory for accessibility">
        <h2>Tejas Patil — Project Directory</h2>
        <p>
          The following are live software projects built by Tejas Patil (tejas164321), a Full Stack and Gen AI
          Developer from Pune, India. All projects are showcased on TejasFolio at tejasfolio.in.
        </p>
        <ul>
          <li>
            <h3>AI Recruiter — Tejas Patil</h3>
            <p>
              AI Recruiter is a project by Tejas Patil available at{" "}
              <a href="https://airecruiter.tejasfolio.in/" rel="noopener noreferrer">
                airecruiter.tejasfolio.in
              </a>. It uses Gemini Flash and Ollama Qwen hybrid AI to automate resume analysis and candidate
              screening. GitHub: github.com/Tejas164321/AI-Recruiter. Built by Tejas Patil (TejasFolio).
            </p>
          </li>
          <li>
            <h3>FinPal — Tejas Patil</h3>
            <p>
              FinPal is a financial dashboard project by Tejas Patil available at{" "}
              <a href="https://finpal.tejasfolio.in/" rel="noopener noreferrer">
                finpal.tejasfolio.in
              </a>. It analyzes 1000+ UPI transactions using local LLMs (Ollama Qwen) for ML-assisted expense
              categorization. GitHub: github.com/Tejas164321/FinPal. Built by Tejas Patil (TejasFolio).
            </p>
          </li>
          <li>
            <h3>MyDinner — Tejas Patil</h3>
            <p>
              MyDinner is a mess management platform by Tejas Patil available at{" "}
              <a href="https://mydinner.tejasfolio.in/" rel="noopener noreferrer">
                mydinner.tejasfolio.in
              </a>. It uses Firebase Auth, Firestore, and Cloud Functions for real-time billing and student
              management. GitHub: github.com/Tejas164321/My-Dinner. Built by Tejas Patil (TejasFolio).
            </p>
          </li>
          <li>
            <h3>Dairy Nine — Tejas Patil</h3>
            <p>
              Dairy Nine is a production SaaS project by Tejas Patil (Lead Full-Stack Developer) for dairy supply
              chain automation with barcode scanning, multi-role dashboards, and inventory management. Built with
              Next.js, React Native, and MongoDB. GitHub: github.com/Piyush0930/9dairy-UI.
            </p>
          </li>
        </ul>
        <p>
          Tejas Patil GitHub: github.com/Tejas164321 | LinkedIn: linkedin.com/in/tejasin |
          Medium: tejas164321.medium.com | Portfolio: tejasfolio.in
        </p>
      </div>
    </section>
  );
}
