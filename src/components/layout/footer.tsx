import Link from 'next/link';
import { Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-center gap-3 text-center text-sm text-muted-foreground px-4">
        <p>
          Built by Tommy Nguyen with Next.js, shadcn/ui, Motion, and modern web
          technologies.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-primary hover:underline underline-offset-4"
        >
          <Mail className="h-4 w-4" />
          Connect with me
        </Link>
      </div>
    </footer>
  );
};