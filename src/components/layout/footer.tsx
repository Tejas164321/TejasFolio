
import { Github, Linkedin, BookOpen } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {currentYear} Tejas Patil. All rights reserved.
        </p>
        <div className="flex items-center space-x-4 md:space-x-4">
          <Link href="https://github.com/Tejas164321" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className="p-1.5 rounded-full hover:bg-primary/10 transition-colors">
            <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/in/tejasin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="p-1.5 rounded-full hover:bg-primary/10 transition-colors">
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="https://tejas164321.medium.com/" target="_blank" rel="noopener noreferrer" aria-label="Medium"
            className="p-1.5 rounded-full hover:bg-primary/10 transition-colors">
            <BookOpen className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
