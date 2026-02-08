import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  FileCode,
  Database,
  Package,
  Sparkles,
  ArrowRight,
  FlaskConical,
  Globe,
  GitBranch,
  Braces,
} from 'lucide-react';
import { FadeIn } from '@/components/motion/fade-in';
import { StaggerContainer, StaggerItem } from '@/components/motion/stagger-children';

export const metadata: Metadata = {
  title: 'Learn',
  description:
    'Explore interactive examples and patterns for modern frontend development. Topics include JS/TS, state management, forms, animations, and more.',
};

// Order matches Technical Skills on About: languages → state → forms → tooling → testing → API → Git/CI
const topics = [
  {
    title: 'JavaScript & TypeScript',
    href: '/learn/javascript-typescript',
    icon: Braces,
    description:
      'Modern JS (ES6+) and TypeScript examples with best practices—destructuring, optional chaining, async/await, types, generics, and React typing.',
    tags: ['ES6+', 'TypeScript', 'Strict mode', 'React types'],
    examples: 16,
  },
  {
    title: 'State Management',
    href: '/learn/state-management',
    icon: Database,
    description:
      'Compare and understand when to use Zustand, Redux Toolkit, or Context API. Learn best practices for global state in React applications.',
    tags: ['Zustand', 'Redux', 'Context'],
    examples: 5,
  },
  {
    title: 'Forms & Validation',
    href: '/learn/forms',
    icon: FileCode,
    description:
      'Master React Hook Form with Zod validation. Learn patterns for complex form handling, multi-step wizards, dynamic fields, and async validation.',
    tags: ['React Hook Form', 'Zod', 'Validation'],
    examples: 6,
  },
  {
    title: 'Bundlers',
    href: '/learn/bundlers',
    icon: Package,
    description:
      'Deep dive into modern JavaScript bundlers. Compare Vite, Webpack, and Turbopack configurations, performance, and use cases.',
    tags: ['Vite', 'Webpack', 'Turbopack'],
    examples: 4,
  },
  {
    title: 'Animations',
    href: '/learn/animations',
    icon: Sparkles,
    description:
      'Create fluid animations with Motion (Framer Motion). Learn page transitions, scroll effects, gestures, and layout animations.',
    tags: ['Motion', 'Framer', 'Transitions'],
    examples: 8,
  },
  {
    title: 'Testing',
    href: '/learn/testing',
    icon: FlaskConical,
    description:
      'Unit and component testing with Jest and Vitest. Learn setup, mocking, and React Testing Library patterns.',
    tags: ['Jest', 'Vitest', 'RTL'],
    examples: 4,
  },
  {
    title: 'APIs',
    href: '/learn/apis',
    icon: Globe,
    description:
      'REST vs GraphQL, fetch patterns, and React Query. Consume APIs with proper loading and error handling.',
    tags: ['REST', 'GraphQL', 'React Query'],
    examples: 4,
  },
  {
    title: 'Git & CI/CD',
    href: '/learn/git-cicd',
    icon: GitBranch,
    description:
      'Git workflows and GitHub Actions. Run lint, test, and deploy on every push and pull request.',
    tags: ['Git', 'GitHub Actions', 'CI/CD'],
    examples: 3,
  },
];

export default function LearnPage() {
  return (
    <div className="space-y-8">
      <FadeIn>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Learn</h1>
          <p className="text-muted-foreground text-lg">
            Explore interactive examples and patterns for modern frontend development. Each topic
            includes code examples with explanations.
          </p>
        </div>
      </FadeIn>

      <StaggerContainer className="grid gap-4 sm:grid-cols-2" staggerDelay={0.1}>
        {topics.map((topic) => {
          const Icon = topic.icon;

          return (
            <StaggerItem key={topic.href}>
              <Link href={topic.href} className="block h-full group">
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/50 bg-background/60 backdrop-blur-md border-border/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardHeader className="relative">
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                          {topic.title}
                          <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </CardTitle>
                        <div className="text-sm text-muted-foreground mt-0.5">
                          {topic.examples} examples
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 relative">
                    <CardDescription className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                      {topic.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-1.5">
                      {topic.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-[10px] font-medium tracking-tight bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </div>
  );
}
