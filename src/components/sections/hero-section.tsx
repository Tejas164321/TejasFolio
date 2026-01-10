
/**
 * HeroSection component renders the hero section of the portfolio website.
 * It includes animated heading, subheading, call-to-action buttons, and a scroll down icon.
 * Uses framer-motion for animation effects and lucide-react for icons.
 */

"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown, Download, ChevronDown } from "lucide-react";
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
      <motion.div
        className="max-w-3xl"
        initial="hidden"
        animate="visible"
        variants={heroContainerVariants}
      >
        <motion.h1
          className="font-headline text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          variants={heroItemVariant}
        >
          Hi, I’m <span className="text-brand">Tejasfolio</span> <br className="hidden md:block" /> (Tejas Patil) 👋
        </motion.h1>
        <motion.p
          className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
          variants={heroItemVariant}
        >
          Aspiring Software Engineer | Full-Stack Developer | AI & ML Enthusiast
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
          <a href="/resume/Tejas-Patil-Resume.pdf" download="Tejas-Patil-Resume.pdf">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110"
            >
              Download Resume
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </a>
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
          <ChevronDown className="h-8 w-8 text-brand cursor-pointer hover:text-brand/80 transition-colors" />
        </Link>
      </motion.div>
    </section>
  );
}
