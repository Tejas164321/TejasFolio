"use client";

import Link from "next/link";
import { Menu, Feather } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  },
};

export default function Header() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const sectionId = href.substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
      // Close sheet if in mobile view and a nav item is clicked
      const mobileNavCloseButton = document.getElementById('mobile-nav-close');
      if (mobileNavCloseButton) {
        mobileNavCloseButton.click();
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-4 flex items-center space-x-2" aria-label="Home page">
          <Feather className="h-6 w-6 text-primary" aria-hidden="true" />
          <span className="font-bold">Tejas Patil</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 text-sm font-medium" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="px-4 py-2 transition-colors hover:text-primary text-foreground/60 relative group lg:text-base"
            >
              {item.label}
              <span className="absolute bottom-[6px] left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 ease-out group-hover:w-full group-hover:left-[50%] group-hover:translate-x-[-50%]"></span>
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          {mounted && <ThemeToggle />}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open mobile menu">
                <Menu className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Access sections of the portfolio including About, Projects, and Contact.
              </SheetDescription>
              <nav className="flex flex-col space-y-4 mt-12">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  className="flex flex-col space-y-4"
                >
                  {navItems.map((item) => (
                    <motion.div key={item.label} variants={itemVariants}>
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          onClick={(e) => scrollToSection(e, item.href)}
                          className="block px-4 py-3 text-xl font-medium transition-colors hover:text-primary rounded-xl hover:bg-primary/5 active:scale-95 transition-all"
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    </motion.div>
                  ))}
                </motion.div>
                <SheetClose id="mobile-nav-close" className="hidden"></SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
