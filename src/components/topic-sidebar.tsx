"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  FileCode,
  Database,
  Package,
  Sparkles,
  ChevronRight,
} from "lucide-react";

interface TopicItem {
  title: string;
  href: string;
  icon: React.ElementType;
  description: string;
  examples?: { title: string; href: string }[];
}

const topics: TopicItem[] = [
  {
    title: "Forms & Validation",
    href: "/learn/forms",
    icon: FileCode,
    description: "React Hook Form + Zod patterns",
    examples: [
      { title: "Basic Form", href: "/learn/forms#basic" },
      { title: "Multi-step Wizard", href: "/learn/forms#multi-step" },
      { title: "Dynamic Arrays", href: "/learn/forms#dynamic-arrays" },
    ],
  },
  {
    title: "State Management",
    href: "/learn/state-management",
    icon: Database,
    description: "Zustand, Redux, Context patterns",
    examples: [
      { title: "Zustand Store", href: "/learn/state-management#zustand" },
      { title: "Redux Toolkit", href: "/learn/state-management#redux" },
      { title: "Context API", href: "/learn/state-management#context" },
    ],
  },
  {
    title: "Bundlers",
    href: "/learn/bundlers",
    icon: Package,
    description: "Vite vs Webpack vs Turbopack",
    examples: [
      { title: "Comparison", href: "/learn/bundlers#comparison" },
      { title: "Vite Config", href: "/learn/bundlers#vite" },
      { title: "Webpack Config", href: "/learn/bundlers#webpack" },
    ],
  },
  {
    title: "Animations",
    href: "/learn/animations",
    icon: Sparkles,
    description: "Motion/Framer patterns",
    examples: [
      { title: "Page Transitions", href: "/learn/animations#transitions" },
      { title: "Scroll Effects", href: "/learn/animations#scroll" },
      { title: "Gestures", href: "/learn/animations#gestures" },
    ],
  },
];

export function TopicSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0 border-r hidden md:block fixed top-16 left-0 h-[calc(100vh-4rem)] z-40 bg-background">
      <ScrollArea className="h-full py-6">
        <div className="px-4 mb-4">
          <h2 className="text-lg font-semibold">Topics</h2>
          <p className="text-sm text-muted-foreground">
            Explore frontend patterns
          </p>
        </div>
        <nav className="space-y-1 px-2">
          {topics.map((topic) => {
            const Icon = topic.icon;
            const isActive = pathname.startsWith(topic.href);

            return (
              <div key={topic.href}>
                <Link
                  href={topic.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-accent/50 text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{topic.title}</div>
                  </div>
                  <ChevronRight
                    className={cn(
                      "h-4 w-4 transition-transform",
                      isActive && "rotate-90"
                    )}
                  />
                </Link>
                {isActive && topic.examples && (
                  <div className="ml-7 mt-1 space-y-1 border-l pl-3">
                    {topic.examples.map((example) => (
                      <Link
                        key={example.href}
                        href={example.href}
                        className="block py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {example.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </ScrollArea>
    </aside>
  );
}

// Mobile version
export function TopicMobileNav() {
  const pathname = usePathname();

  return (
    <div className="md:hidden border-b overflow-x-auto">
      <nav className="flex gap-1 p-2">
        {topics.map((topic) => {
          const Icon = topic.icon;
          const isActive = pathname.startsWith(topic.href);

          return (
            <Link
              key={topic.href}
              href={topic.href}
              className={cn(
                "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              {topic.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
