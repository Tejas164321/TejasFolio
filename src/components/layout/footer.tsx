
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Tejasfolio (Tejas Patil). All rights reserved.
        </p>
        <div className="flex items-center space-x-3 md:space-x-4">
          <Link href="https://github.com/Tejas164321" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5 text-muted-foreground hover:text-brand transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/in/tejaspatil1643b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-brand transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
