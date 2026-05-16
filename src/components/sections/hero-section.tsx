
/**
 * HeroSection component renders the hero section of the portfolio website.
 * It includes animated heading, subheading, call-to-action buttons, and a scroll down icon.
 * Uses framer-motion for animation effects and lucide-react for icons.
 */

"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown, Download, ChevronDown, Github, Linkedin, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Animation variants for the hero container to stagger child animations.
 */
const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
};

/**
 * Animation variants for individual hero items (heading, paragraph).
 */
const heroItemVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

/**
 * Animation variants for the hero buttons.
 */
const heroButtonsVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
};

/**
 * Scrolls smoothly to a section of the page by id.
 * @param e - Mouse event from the link click.
 * @param sectionId - The id of the section to scroll to.
 */
export default function HeroSection() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="container flex flex-col items-center justify-center text-center min-h-[70vh] md:min-h-[calc(100vh-56px)] py-12 md:py-24 overflow-hidden relative"
    >
      {/* SEO fallback for crawlers that don't execute JavaScript */}
      <noscript>
        <h1>Tejas Patil</h1>
        <h2>Computer Engineer &amp; Software Developer in Pune</h2>
        <p>Full-Stack Developer | Gen AI Enthusiast | Building Gen AI Powered Applications</p>
      </noscript>
      <motion.div
        className="max-w-5xl"
        initial="hidden"
        animate="visible"
        variants={heroContainerVariants}
      >
        <motion.h1
          className="font-headline text-4xl font-bold tracking-tight sm:text-6xl"
          variants={heroItemVariant}
        >
          Tejas Patil
        </motion.h1>
        <motion.h2
          className="mt-4 font-headline text-lg font-medium tracking-tight text-primary sm:text-2xl opacity-90"
          variants={heroItemVariant}
        >
          Software Developer | Full-Stack & Mobile Developer | Gen AI Powered Applications
        </motion.h2>
        <motion.p
          className="mt-4 text-base text-muted-foreground sm:text-lg max-w-3xl mx-auto"
          variants={heroItemVariant}
        >
          Building production-ready MERN, Next.js, and Gen AI powered full-stack applications.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          variants={heroButtonsVariant}
        >
          <Link href="#projects" onClick={(e) => scrollToSection(e, "projects")}>
            <Button
              size="lg"
              className="w-full sm:w-auto transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/resume/Tejas-Patil-Resume.pdf" download="Tejas-Patil-Resume.pdf">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110"
            >
              Download Resume
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
        <motion.div
          className="mt-12 flex items-center justify-center gap-6"
          variants={heroItemVariant}
        >
          <Link href="https://github.com/Tejas164321" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
            <Github className="h-6 w-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/tejasin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href="https://tejas164321.medium.com/" target="_blank" rel="noopener noreferrer" aria-label="Medium" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
            <BookOpen className="h-6 w-6" />
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        <Link
          href="#about"
          onClick={(e) => scrollToSection(e, "about")}
          aria-label="Scroll to about section"
        >
          <ChevronDown className="h-8 w-8 text-primary cursor-pointer hover:text-primary/80 transition-colors" />
        </Link>
      </motion.div>
    </section>
  );
}
