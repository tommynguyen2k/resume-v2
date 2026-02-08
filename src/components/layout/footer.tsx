import Link from 'next/link';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t py-12 md:py-16 bg-muted/30">
      <div className="container flex flex-col items-center gap-8 px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-xl font-bold tracking-tight">Tommy Nguyen</h2>
          <p className="text-sm text-muted-foreground max-w-xs">
            Senior Frontend Engineer specialized in building modern, scalable web applications.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/tommynguyen2k"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full border bg-background hover:bg-secondary hover:text-primary transition-all shadow-sm"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="/contact"
            className="p-2 rounded-full border bg-background hover:bg-secondary hover:text-primary transition-all shadow-sm"
            aria-label="Contact via Email"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>

        <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground border-t w-full pt-8">
          <p>© {new Date().getFullYear()} Tommy Nguyen. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Built with Next.js, shadcn/ui, and Motion.
          </p>
        </div>
      </div>
    </footer>
  );
};