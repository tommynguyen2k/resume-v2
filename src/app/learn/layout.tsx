'use client';

import { useState } from 'react';
import { TopicSidebar, TopicMobileNav } from '@/components/topic-sidebar';
import { cn } from '@/lib/utils';

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex flex-col">
      <TopicSidebar
        collapsed={sidebarCollapsed}
        onCollapsedChange={setSidebarCollapsed}
      />
      <div
        className={cn(
          'flex-1 flex flex-col min-h-[calc(100vh-4rem)] transition-[margin] duration-200 ease-in-out',
          sidebarCollapsed ? 'md:ml-14' : 'md:ml-64'
        )}
      >
        <TopicMobileNav />
        <div className="flex-1 container py-6 md:py-8 px-4 md:px-8 max-w-5xl">
          {children}
        </div>
      </div>
    </div>
  );
}
