'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Drawer } from '@/components/motion/drawer';
import {
  FileCode,
  Database,
  Package,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  FlaskConical,
  Globe,
  GitBranch,
  Braces,
} from 'lucide-react';

interface TopicItem {
  title: string;
  href: string;
  icon: React.ElementType;
  description: string;
  examples?: { title: string; href: string }[];
}

// Order matches Technical Skills on About / Learn index
const topics: TopicItem[] = [
  {
    title: 'JavaScript & TypeScript',
    href: '/learn/javascript-typescript',
    icon: Braces,
    description: 'ES6+, types, strict mode, React typing',
    examples: [
      { title: 'Destructuring', href: '/learn/javascript-typescript#js-modern' },
      { title: 'Spread & rest', href: '/learn/javascript-typescript#js-spread-rest' },
      { title: 'Optional chaining & ??', href: '/learn/javascript-typescript#js-optional' },
      { title: 'Template literals', href: '/learn/javascript-typescript#js-template-literals' },
      { title: 'Array methods', href: '/learn/javascript-typescript#js-array-methods' },
      { title: 'ES modules', href: '/learn/javascript-typescript#js-modules' },
      { title: 'Async/await', href: '/learn/javascript-typescript#js-async' },
      { title: 'Error handling', href: '/learn/javascript-typescript#js-error-handling' },
      { title: 'Closures', href: '/learn/javascript-typescript#js-closures' },
      { title: 'Types & utilities', href: '/learn/javascript-typescript#ts-types' },
      { title: 'Strict & narrowing', href: '/learn/javascript-typescript#ts-strict' },
      { title: 'Generics', href: '/learn/javascript-typescript#ts-generics' },
      { title: 'Discriminated unions', href: '/learn/javascript-typescript#ts-discriminated-unions' },
      { title: 'Mapped types & keyof', href: '/learn/javascript-typescript#ts-mapped-keyof' },
      { title: 'Const assertions', href: '/learn/javascript-typescript#ts-const-assertions' },
      { title: 'Typing React', href: '/learn/javascript-typescript#ts-react' },
    ],
  },
  {
    title: 'State Management',
    href: '/learn/state-management',
    icon: Database,
    description: 'Zustand, Redux, Context patterns',
    examples: [
      { title: 'Zustand Store', href: '/learn/state-management#zustand' },
      { title: 'Redux Toolkit', href: '/learn/state-management#redux' },
      { title: 'Context API', href: '/learn/state-management#context' },
    ],
  },
  {
    title: 'Forms & Validation',
    href: '/learn/forms',
    icon: FileCode,
    description: 'React Hook Form + Zod patterns',
    examples: [
      { title: 'Basic Form', href: '/learn/forms#basic' },
      { title: 'Multi-step Wizard', href: '/learn/forms#multi-step' },
      { title: 'Dynamic Arrays', href: '/learn/forms#dynamic-arrays' },
    ],
  },
  {
    title: 'Bundlers',
    href: '/learn/bundlers',
    icon: Package,
    description: 'Vite vs Webpack vs Turbopack',
    examples: [
      { title: 'Comparison', href: '/learn/bundlers#comparison' },
      { title: 'Vite Config', href: '/learn/bundlers#vite' },
      { title: 'Webpack Config', href: '/learn/bundlers#webpack' },
    ],
  },
  {
    title: 'Animations',
    href: '/learn/animations',
    icon: Sparkles,
    description: 'Motion/Framer patterns',
    examples: [
      { title: 'Page Transitions', href: '/learn/animations#transitions' },
      { title: 'Scroll Effects', href: '/learn/animations#scroll' },
      { title: 'Gestures', href: '/learn/animations#gestures' },
    ],
  },
  {
    title: 'Testing',
    href: '/learn/testing',
    icon: FlaskConical,
    description: 'Jest & Vitest, mocking, RTL',
    examples: [
      { title: 'Jest vs Vitest', href: '/learn/testing#comparison' },
      { title: 'Unit & Component', href: '/learn/testing#unit-tests' },
      { title: 'Vitest Config', href: '/learn/testing#vitest-setup' },
      { title: 'Mocking', href: '/learn/testing#mocking' },
    ],
  },
  {
    title: 'APIs',
    href: '/learn/apis',
    icon: Globe,
    description: 'REST, GraphQL, React Query',
    examples: [
      { title: 'REST vs GraphQL', href: '/learn/apis#comparison' },
      { title: 'Fetch & Errors', href: '/learn/apis#fetch' },
      { title: 'React Query', href: '/learn/apis#react-query' },
      { title: 'GraphQL Queries', href: '/learn/apis#graphql' },
    ],
  },
  {
    title: 'Git & CI/CD',
    href: '/learn/git-cicd',
    icon: GitBranch,
    description: 'GitHub Actions, workflows',
    examples: [
      { title: 'Git Workflow', href: '/learn/git-cicd#git-workflow' },
      { title: 'GitHub Actions CI', href: '/learn/git-cicd#github-actions' },
      { title: 'Build & Deploy', href: '/learn/git-cicd#deploy' },
    ],
  },
];

const SIDEBAR_WIDTH_EXPANDED = 'w-64';
const SIDEBAR_WIDTH_COLLAPSED = 'w-14';

export function TopicSidebar({
  collapsed = false,
  onCollapsedChange,
}: {
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
}) {
  const pathname = usePathname();
  const isCollapsed = collapsed;

  // Per-topic expand/collapse: which topic hrefs have their examples open
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(() => {
    const current = topics.find((t) => pathname.startsWith(t.href));
    return new Set(current ? [current.href] : []);
  });

  // When navigating to another topic, collapse the previous one and expand only the current.
  // Defer setState to avoid react-hooks/set-state-in-effect (sync setState in effect).
  useEffect(() => {
    const current = topics.find((t) => pathname.startsWith(t.href));
    const next = new Set(current ? [current.href] : []);
    const t = setTimeout(() => setExpandedTopics(next), 0);
    return () => clearTimeout(t);
  }, [pathname]);

  const toggleTopic = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedTopics((prev) => {
      const next = new Set(prev);
      if (next.has(href)) next.delete(href);
      else next.add(href);
      return next;
    });
  };

  const handleSidebarToggle = () => {
    onCollapsedChange?.(!isCollapsed);
  };

  return (
    <aside
      className={cn(
        'shrink-0 border-r hidden md:block fixed top-16 left-0 h-[calc(100vh-4rem)] z-40 bg-background transition-[width] duration-200 ease-in-out flex flex-col',
        isCollapsed ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH_EXPANDED
      )}
    >
      <ScrollArea className="flex-1 min-h-0 py-6">
        <div className={cn('px-4 mb-4 overflow-hidden', isCollapsed && 'px-0 flex flex-col items-center')}>
          {!isCollapsed && (
            <>
              <h2 className="text-lg font-semibold">Topics</h2>
              <p className="text-sm text-muted-foreground">Explore frontend patterns</p>
            </>
          )}
        </div>
        <nav className={cn('space-y-1 px-2', isCollapsed && 'px-2')}>
          {topics.map((topic) => {
            const Icon = topic.icon;
            const isActive = pathname.startsWith(topic.href);
            const hasExamples = topic.examples && topic.examples.length > 0;
            const isExpanded = expandedTopics.has(topic.href);

            return (
              <div key={topic.href}>
                <div
                  className={cn(
                    'flex items-center rounded-lg py-2 text-sm transition-colors',
                    isCollapsed ? 'justify-center px-2' : 'gap-1 px-3',
                    isActive
                      ? 'bg-accent text-accent-foreground'
                      : 'hover:bg-accent/50 text-muted-foreground hover:text-foreground'
                  )}
                >
                  <Link
                    href={topic.href}
                    title={isCollapsed ? topic.title : undefined}
                    className={cn(
                      'flex items-center min-w-0 flex-1 gap-2 rounded-md py-1 -my-1',
                      isCollapsed ? 'justify-center' : 'gap-3'
                    )}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    {!isCollapsed && (
                      <span className="font-medium truncate">{topic.title}</span>
                    )}
                  </Link>
                  {!isCollapsed && hasExamples && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 shrink-0 rounded"
                      onClick={(e) => toggleTopic(topic.href, e)}
                      aria-label={isExpanded ? `Collapse ${topic.title}` : `Expand ${topic.title}`}
                    >
                      <motion.span
                        animate={{ rotate: isExpanded ? 90 : 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="inline-block"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </motion.span>
                    </Button>
                  )}
                </div>
                {!isCollapsed && hasExamples && (
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="ml-7 mt-1 space-y-1 border-l pl-3">
                          {topic.examples!.map((example) => (
                            <Link
                              key={example.href}
                              href={example.href}
                              className="block py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {example.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </nav>
      </ScrollArea>
      <div className={cn('shrink-0 border-t p-2 bg-background', isCollapsed && 'flex justify-center')}>
        <Button
          variant="ghost"
          size={isCollapsed ? 'icon' : 'sm'}
          className="w-full"
          onClick={handleSidebarToggle}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <>
              <ChevronLeft className="h-4 w-4 mr-2" />
              Collapse
            </>
          )}
        </Button>
      </div>
    </aside>
  );
}

export const TOPIC_SIDEBAR_WIDTH_EXPANDED = '16rem'; // 256px = w-64
export const TOPIC_SIDEBAR_WIDTH_COLLAPSED = '3.5rem'; // 56px = w-14

// Mobile version: collapsible aside (sheet) with per-topic expand/collapse
export function TopicMobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(() => {
    const current = topics.find((t) => pathname.startsWith(t.href));
    return new Set(current ? [current.href] : []);
  });

  useEffect(() => {
    const current = topics.find((t) => pathname.startsWith(t.href));
    const next = new Set(current ? [current.href] : []);
    const t = setTimeout(() => setExpandedTopics(next), 0);
    return () => clearTimeout(t);
  }, [pathname]);

  const toggleTopic = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedTopics((prev) => {
      const next = new Set(prev);
      if (next.has(href)) next.delete(href);
      else next.add(href);
      return next;
    });
  };

  const navContent = (
    <nav className="space-y-1 px-2">
      {topics.map((topic) => {
        const Icon = topic.icon;
        const isActive = pathname.startsWith(topic.href);
        const hasExamples = topic.examples && topic.examples.length > 0;
        const isExpanded = expandedTopics.has(topic.href);

        return (
          <div key={topic.href}>
            <div
              className={cn(
                'flex items-center gap-1 rounded-lg px-3 py-2 text-sm transition-colors',
                isActive
                  ? 'bg-accent text-accent-foreground'
                  : 'hover:bg-accent/50 text-muted-foreground hover:text-foreground'
              )}
            >
              <Link
                href={topic.href}
                onClick={() => setOpen(false)}
                className="flex flex-1 min-w-0 items-center gap-3 rounded-md py-1 -my-1"
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="font-medium truncate">{topic.title}</span>
              </Link>
              {hasExamples && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 shrink-0 rounded"
                  onClick={(e) => toggleTopic(topic.href, e)}
                  aria-label={isExpanded ? `Collapse ${topic.title}` : `Expand ${topic.title}`}
                >
                  <motion.span
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="inline-block"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </motion.span>
                </Button>
              )}
            </div>
            {hasExamples && (
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="ml-7 mt-1 space-y-1 border-l pl-3">
                      {topic.examples!.map((example) => (
                        <Link
                          key={example.href}
                          href={example.href}
                          onClick={() => setOpen(false)}
                          className="block py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {example.title}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        );
      })}
    </nav>
  );

  return (
    <div className="md:hidden border-b flex items-center p-2">
      <Button
        variant="outline"
        size="sm"
        className="gap-2"
        onClick={() => setOpen(true)}
      >
        <Menu className="h-4 w-4" />
        Topics
      </Button>

      <Drawer open={open} onOpenChange={setOpen} side="left" className="w-64">
        <div className="flex items-center justify-between px-4 pt-6 pb-2 border-b">
          <div>
            <h2 className="text-lg font-semibold">Topics</h2>
            <p className="text-sm text-muted-foreground">Explore frontend patterns</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <ScrollArea className="flex-1 py-4">
          {navContent}
        </ScrollArea>
      </Drawer>
    </div>
  );
}
