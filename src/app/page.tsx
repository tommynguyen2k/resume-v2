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
} from 'lucide-react';
import { FadeIn, FadeInOnScroll } from '@/components/motion/fade-in';
import { StaggerContainer, StaggerItem } from '@/components/motion/stagger-children';
import LightRays from '@/components/LightRays';

const technologies = [
  { name: 'React 19', category: 'Framework' },
  { name: 'Next.js 16', category: 'Framework' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Motion', category: 'Animation' },
  { name: 'Zustand', category: 'State' },
  { name: 'React Hook Form', category: 'Forms' },
  { name: 'Zod', category: 'Validation' },
  { name: 'shadcn/ui', category: 'Components' },
  { name: 'Vite', category: 'Build' },
  { name: 'Turbopack', category: 'Build' },
  { name: 'pnpm', category: 'Package Manager' },
];

const features = [
  {
    icon: FileCode,
    title: 'Forms & Validation',
    description:
      'React Hook Form with Zod validation patterns, multi-step wizards, and dynamic fields.',
    href: '/learn/forms',
  },
  {
    icon: Database,
    title: 'State Management',
    description: 'Compare Zustand, Redux Toolkit, and Context API with practical examples.',
    href: '/learn/state-management',
  },
  {
    icon: Package,
    title: 'Bundlers',
    description: 'Deep dive into Vite, Webpack, and Turbopack configurations and trade-offs.',
    href: '/learn/bundlers',
  },
  {
    icon: Sparkles,
    title: 'Animations',
    description: 'Motion/Framer patterns for transitions, scroll effects, gestures, and layout.',
    href: '/learn/animations',
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
                Senior Frontend Developer
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Frontend Skills{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  Portfolio
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Interactive examples and patterns for modern frontend development. Explore code
                demos for React, Next.js, state management, animations, and more.
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
                Learning Sections
              </Badge>
              <h2 className="text-3xl font-bold">What You&apos;ll Learn</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Each section includes code examples with syntax highlighting, live previews, and
                explanations of best practices.
              </p>
            </div>
          </FadeInOnScroll>

          <StaggerContainer
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            staggerDelay={0.1}
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
