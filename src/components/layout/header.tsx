'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Code2, BookOpen, User, Sparkles, Download, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';

const navItems = [
  { href: '/', label: 'Home', icon: Sparkles },
  { href: '/learn', label: 'Learn', icon: BookOpen },
  { href: '/about', label: 'About', icon: User },
  { href: '/contact', label: 'Connect', icon: Mail },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container relative flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Code2 className="h-6 w-6" />
          <span>Tommy Nguyen</span>
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary',
                  isActive ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="hidden sm:flex">
            <a
              href="/TruongNguyen_SeniorFrontendEngineer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="h-4 w-4 mr-2" />
              Download CV
            </a>
          </Button>
          <AnimatedThemeToggler />
        </div>
      </div>
    </header>
  );
}
