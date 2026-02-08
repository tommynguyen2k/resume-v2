'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Breadcrumbs() {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(Boolean);

  if (paths.length <= 1) return null;

  return (
    <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 overflow-x-auto no-scrollbar py-1">
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-primary transition-colors shrink-0"
      >
        <Home className="h-4 w-4" />
      </Link>
      {paths.map((path, index) => {
        const href = `/${paths.slice(0, index + 1).join('/')}`;
        const isLast = index === paths.length - 1;
        const label = path
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

        return (
          <div key={href} className="flex items-center gap-2 shrink-0">
            <ChevronRight className="h-4 w-4 opacity-50" />
            {isLast ? (
              <span className="font-medium text-foreground truncate max-w-[200px] md:max-w-none">
                {label}
              </span>
            ) : (
              <Link href={href} className="hover:text-primary transition-colors">
                {label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
