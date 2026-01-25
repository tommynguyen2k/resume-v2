'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Code2, Briefcase, GraduationCap, Heart, Layers, Zap, Globe, Terminal } from 'lucide-react';
import { FadeIn, FadeInOnScroll } from '@/components/motion/fade-in';
import { StaggerContainer, StaggerItem } from '@/components/motion/stagger-children';
import Particles from '@/components/Particles';

const skills = {
  frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
  styling: ['Tailwind CSS', 'CSS Modules', 'SCSS/SASS', 'Styled Components', 'CSS-in-JS'],
  state: ['Zustand', 'Redux Toolkit', 'React Query', 'Context API', 'Jotai'],
  tools: ['Git', 'pnpm/npm/yarn', 'Vite', 'Webpack', 'Turbopack', 'ESLint'],
  testing: ['Jest', 'React Testing Library', 'Cypress', 'Playwright'],
  other: ['REST APIs', 'GraphQL', 'WebSockets', 'PWA', 'Performance Optimization'],
};

const experiences = [
  {
    role: 'Senior Frontend Developer',
    company: 'Tech Company',
    period: '2022 - Present',
    description:
      'Lead frontend development for enterprise applications. Architecting scalable solutions with React, Next.js, and TypeScript.',
    highlights: [
      'Led migration from CRA to Next.js, improving performance by 40%',
      'Implemented design system used across 5+ products',
      'Mentored junior developers and conducted code reviews',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Startup',
    period: '2020 - 2022',
    description:
      'Built interactive web applications with focus on user experience and performance.',
    highlights: [
      'Developed customer-facing dashboard with real-time updates',
      'Reduced bundle size by 60% through code splitting',
      'Integrated third-party APIs and payment systems',
    ],
  },
  {
    role: 'Junior Developer',
    company: 'Agency',
    period: '2018 - 2020',
    description:
      'Started career building responsive websites and learning modern frontend technologies.',
    highlights: [
      'Built 20+ responsive websites for clients',
      'Learned React and modern JavaScript',
      'Collaborated with designers to implement pixel-perfect UIs',
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <Particles
        particleColors={['#ffffff']}
        particleCount={500}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover
        alphaParticles={false}
        disableRotation={false}
        pixelRatio={1}
        className="!fixed inset-0 z-0"
      />
      <div className="container relative z-10 py-12 md:py-20 px-4 md:px-8 max-w-4xl">
        {/* Header */}
        <FadeIn>
          <div className="space-y-4 mb-12">
            <Badge variant="secondary">
              <Code2 className="h-3 w-3 mr-1" />
              About Me
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight">Senior Frontend Developer</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Passionate about building exceptional user experiences with modern web technologies. I
              love clean code, great design, and teaching others.
            </p>
          </div>
        </FadeIn>

        {/* Philosophy */}
        <FadeInOnScroll>
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                My Philosophy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                I believe in writing code that is not just functional, but maintainable, testable,
                and a joy to work with. Great frontend development is about understanding users,
                mastering fundamentals, and staying curious about new technologies.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Performance First</h4>
                    <p className="text-sm text-muted-foreground">Fast, optimized experiences</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Layers className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Clean Architecture</h4>
                    <p className="text-sm text-muted-foreground">Scalable, maintainable code</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Accessibility</h4>
                    <p className="text-sm text-muted-foreground">Inclusive for everyone</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeInOnScroll>

        {/* Skills */}
        <section className="mb-12">
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Terminal className="h-6 w-6" />
              Technical Skills
            </h2>
          </FadeInOnScroll>

          <div className="grid sm:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <FadeInOnScroll key={category}>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base capitalize">
                      {category.replace(/([A-Z])/g, ' $1').trim()}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeInOnScroll>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Experience */}
        <section>
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="h-6 w-6" />
              Experience
            </h2>
          </FadeInOnScroll>

          <StaggerContainer className="space-y-6" staggerDelay={0.15}>
            {experiences.map((exp) => (
              <StaggerItem key={exp.role + exp.company}>
                <Card>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <CardTitle className="text-lg">{exp.role}</CardTitle>
                        <CardDescription className="text-base">{exp.company}</CardDescription>
                      </div>
                      <Badge variant="outline">{exp.period}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{exp.description}</p>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1.5">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        <Separator className="my-12" />

        {/* Education */}
        <section>
          <FadeInOnScroll>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6" />
              Continuous Learning
            </h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  I&apos;m a firm believer in continuous learning. This portfolio itself is a
                  learning project where I explore and document new technologies and patterns.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Frontend Masters</Badge>
                  <Badge>Egghead.io</Badge>
                  <Badge>Official Docs</Badge>
                  <Badge>Open Source</Badge>
                  <Badge>Tech Blogs</Badge>
                </div>
              </CardContent>
            </Card>
          </FadeInOnScroll>
        </section>
      </div>
    </div>
  );
}
