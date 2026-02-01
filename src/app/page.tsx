import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowRight,
  BookOpen,
  Code2,
  Layers,
  Sparkles,
  Zap,
  FileCode,
  Database,
  Package,
  FlaskConical,
  Globe,
  GitBranch,
  Braces,
} from 'lucide-react';
import { FadeIn, FadeInOnScroll } from '@/components/motion/fade-in';
import { StaggerContainer, StaggerItem } from '@/components/motion/stagger-children';
import LightRays from '@/components/LightRays';

const technologies = [
  { name: 'React 18+', category: 'Framework' },
  { name: 'Next.js (App Router)', category: 'Framework' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Motion / Framer', category: 'Animation' },
  { name: 'Zustand', category: 'State' },
  { name: 'React Hook Form', category: 'Forms' },
  { name: 'Zod', category: 'Validation' },
  { name: 'shadcn/ui', category: 'Components' },
  { name: 'Ant Design', category: 'Components' },
  { name: 'PrimeNG', category: 'Components' },
  { name: 'Vite', category: 'Build' },
  { name: 'Turbopack', category: 'Build' },
  { name: 'pnpm', category: 'Package Manager' },
];

// Order matches Technical Skills on About: languages → state → forms → tooling → testing → API → Git/CI
const features = [
  {
    icon: Braces,
    title: 'JavaScript & TypeScript',
    description:
      'ES6+ and TypeScript examples and best practices—destructuring, optional chaining, async/await, types, and React typing.',
    href: '/learn/javascript-typescript',
  },
  {
    icon: Database,
    title: 'State Management',
    description:
      'Redux Toolkit, Zustand, Context API, and React Query—when to use each and practical examples.',
    href: '/learn/state-management',
  },
  {
    icon: FileCode,
    title: 'Forms & Validation',
    description:
      'React Hook Form + Zod, multi-step flows, and schema-driven forms—patterns I use in production.',
    href: '/learn/forms',
  },
  {
    icon: Package,
    title: 'Bundlers & Tooling',
    description:
      'Vite, Webpack, and Turbopack—configs, trade-offs, and how I choose tooling for real projects.',
    href: '/learn/bundlers',
  },
  {
    icon: Sparkles,
    title: 'Animations',
    description:
      'Motion/Framer patterns for transitions, scroll effects, gestures, and layout animations.',
    href: '/learn/animations',
  },
  {
    icon: FlaskConical,
    title: 'Testing',
    description:
      'Jest, Vitest, and React Testing Library—setup, mocking, and testing patterns I rely on.',
    href: '/learn/testing',
  },
  {
    icon: Globe,
    title: 'APIs',
    description:
      'REST vs GraphQL, fetch patterns, React Query, and solid loading/error handling.',
    href: '/learn/apis',
  },
  {
    icon: GitBranch,
    title: 'Git & CI/CD',
    description:
      'Git workflows and GitHub Actions for lint, test, and deploy on every push.',
    href: '/learn/git-cicd',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <LightRays
        raysOrigin="top-center"
        raysColor="#ff6b35"
        raysSpeed={0.6}
        lightSpread={1.1}
        rayLength={2}
        pulsating={true}
        fadeDistance={1.0}
        saturation={1.0}
        className="!fixed inset-0 -z-10"
      />
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container px-4 md:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="mb-4">
                <Zap className="h-3 w-3 mr-1" />
                Senior Frontend Engineer · 5+ Years
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Tommy Nguyen&apos;s{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  Frontend Portfolio
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Results-driven Senior Frontend Engineer with experience across e-commerce, finance,
                government systems, and AI virtual agents. This site showcases the patterns, tools,
                and UI work I use daily with React, Next.js, Angular, Vue, and TypeScript.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg">
                  <Link href="/learn">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Explore Examples
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">
                    <Code2 className="h-5 w-5 mr-2" />
                    About Me
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 border-t bg-muted/30">
        <div className="container px-4 md:px-8">
          <FadeInOnScroll>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold">Tech Stack</h2>
              <p className="text-muted-foreground mt-2">Technologies used in this portfolio</p>
            </div>
          </FadeInOnScroll>
          <StaggerContainer
            className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto"
            staggerDelay={0.03}
          >
            {technologies.map((tech) => (
              <StaggerItem key={tech.name}>
                <Badge variant="outline" className="py-1.5 px-3">
                  {tech.name}
                </Badge>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container px-4 md:px-8">
          <FadeInOnScroll>
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Layers className="h-3 w-3 mr-1" />
                Learning Journey
              </Badge>
              <h2 className="text-3xl font-bold">
                Topics I&apos;ve Shipped &amp; Continue Exploring
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Notes and demos from production work and side learning—JS/TS, forms, state,
                bundlers, animations, testing, APIs, and CI/CD.
              </p>
            </div>
          </FadeInOnScroll>

          <StaggerContainer
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            staggerDelay={0.08}
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <StaggerItem key={feature.title}>
                  <Link href={feature.href} className="block h-full">
                    <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 group">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            <Icon className="h-5 w-5" />
                          </div>
                          <CardTitle className="flex items-center gap-2">
                            {feature.title}
                            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t">
        <div className="container px-4 md:px-8">
          <FadeInOnScroll>
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Ready to Explore?</h2>
              <p className="text-muted-foreground">
                Dive into the examples and learn modern frontend patterns with hands-on code demos.
              </p>
              <Button asChild size="lg">
                <Link href="/learn">
                  Start Learning
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </div>
  );
}
