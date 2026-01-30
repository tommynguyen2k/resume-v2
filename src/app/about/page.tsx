'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Code2,
  Briefcase,
  GraduationCap,
  Heart,
  Layers,
  Zap,
  Globe,
  Terminal,
  Mail,
  Github,
} from 'lucide-react';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiVuedotjs,
  SiRedux,
  SiReactquery,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMui,
  SiAntdesign,
  SiGit,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiVite,
  SiNpm,
  SiPnpm,
  SiYarn,
  SiGithubactions,
  SiJest,
  SiVitest,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
} from 'react-icons/si';
import type { IconType } from 'react-icons';
import { FadeIn, FadeInOnScroll } from '@/components/motion/fade-in';
import { StaggerContainer, StaggerItem } from '@/components/motion/stagger-children';
import Particles from '@/components/Particles';
import Image from 'next/image';

const skills = {
  programmingLanguages: ['JavaScript (ES6+)', 'TypeScript'],
  frameworksAndLibraries: [
    'React 18+ (Hooks)',
    'Next.js (App Router, SSR/SSG)',
    'Angular',
    'Vue.js',
  ],
  stateManagement: ['Redux Toolkit', 'Zustand', 'Context API', 'React Query'],
  markupAndStyling: ['HTML5 (Semantic)', 'CSS3 (Flex/Grid, Animations)', 'Tailwind CSS'],
  uiLibraries: ['shadcn/ui', 'Radix UI', 'Material UI', 'Ant Design', 'PrimeNG'],
  versionControlAndTools: [
    'Git',
    'GitHub/GitLab/Bitbucket',
    'Vite',
    'npm/pnpm/yarn',
    'GitHub Actions',
    'CI/CD',
  ],
  testingAndQuality: ['Jest', 'Vitest'],
  backendIntermediate: ['Express.js', 'Nest.js', 'MongoDB (Mongoose)', 'PostgreSQL (Prisma)'],
  API: ['RESTful APIs', 'GraphQL'],
  languages: ['English (professional working proficiency)'],
};

// Tech brand icons (Simple Icons) – more specific keys first
const skillIconMap: [string, IconType][] = [
  ['react query', SiReactquery],
  ['next.js', SiNextdotjs],
  ['typescript', SiTypescript],
  ['javascript', SiJavascript],
  ['react', SiReact],
  ['angular', SiAngular],
  ['vue', SiVuedotjs],
  ['redux', SiRedux],
  ['html5', SiHtml5],
  ['html', SiHtml5],
  ['css3', SiCss3],
  ['css', SiCss3],
  ['tailwind', SiTailwindcss],
  ['material ui', SiMui],
  ['material', SiMui],
  ['ant design', SiAntdesign],
  ['github actions', SiGithubactions],
  ['github', SiGithub],
  ['gitlab', SiGitlab],
  ['bitbucket', SiBitbucket],
  ['git', SiGit],
  ['vite', SiVite],
  ['npm', SiNpm],
  ['pnpm', SiPnpm],
  ['yarn', SiYarn],
  ['jest', SiJest],
  ['vitest', SiVitest],
  ['express', SiExpress],
  ['nest', SiNestjs],
  ['mongodb', SiMongodb],
  ['postgresql', SiPostgresql],
];

function getSkillIcon(skill: string): IconType | typeof Code2 {
  const lower = skill.toLowerCase();
  for (const [key, icon] of skillIconMap) {
    if (lower.includes(key)) return icon;
  }
  return Code2;
}

const experiences = [
  {
    role: 'Senior Frontend Engineer',
    company: 'SmartDev LLC',
    period: '12/2024 - Present',
    description:
      'Leading frontend delivery across enterprise platforms, from climate finance proposal management to internal finance tools that replace Excel-heavy workflows.',
    highlights: [
      'Architected multi-step, schema-driven submission workflows using Next.js 15, JSON Forms (custom renderers/UI schema), React Hook Form + Zod, with conditional logic, uploads, and real-time previews',
      'Optimized form performance and UX, reducing submission errors by ~30% (estimated) through validation and guided flows',
      'Designed modular architecture and implemented RBAC using Context API + JWT; supported secure on-prem deployment (Nginx reverse proxy, SSL) and Azure integration',
    ],
  },
  {
    role: 'Frontend Engineer (FE Leader)',
    company: 'EM AND AI',
    period: '12/2023 - 12/2024',
    description:
      'Built a Virtual Agent product UI (AI-driven customer interaction) with a strong focus on reusable UI patterns, reporting insights, and developer productivity.',
    highlights: [
      'Created a draw-flow approach for building scripts to ensure consistency and speed up development',
      'Designed and implemented custom reporting charts with Chart.js to deliver actionable insights for clients',
      'Developed a reusable component library across the product to improve consistency and delivery speed',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'RikkeiSoft',
    period: '03/2021 - 12/2023',
    description:
      'Delivered features for high-traffic and government-facing web platforms, collaborating closely with designers and cross-region stakeholders.',
    highlights: [
      'Implemented advanced image editing (Canvas cropping, filters, DPI adjustments) to enhance asset download workflows on a stock media platform (123RF)',
      'Established scalable app structure (routing guards, Axios configuration) and customized Figma-based layouts; integrated Azure AD authentication',
      'Mentored team members, conducted code reviews, prepared technical docs, and supported cross-team collaboration (VN–SG)',
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
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
              <div className="flex-shrink-0 flex justify-center md:justify-start mb-6 md:mb-0">
                <Image
                  src="/avatar.png"
                  alt="Nguyen Thuy Van Truong"
                  width={250}
                  height={250}
                  className="rounded-full w-56 h-56 md:w-72 md:h-72 object-cover"
                  priority
                />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-2 text-center md:text-left">
                  Nguyen Thuy Van Truong
                </h1>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl text-center md:text-left mx-auto md:mx-0">
                  Senior Frontend Engineer (Tommy Nguyen) with 5+ years of hands-on experience
                  building scalable, user-centric web applications using React, Next.js, Angular,
                  Vue.js, and TypeScript. I enjoy clean architecture, performance/accessibility
                  work, and mentoring to raise product and team quality.
                </p>
                <div className="flex flex-wrap gap-2 pt-2 justify-center md:justify-start">
                  <Badge variant="outline" asChild>
                    <Link
                      href="mailto:truongnguyen1582000@gmail.com"
                      className="gap-2 inline-flex items-center"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      truongnguyen1582000@gmail.com
                    </Link>
                  </Badge>
                  <Badge variant="outline" asChild>
                    <Link
                      href="https://github.com/tommynguyen2k"
                      target="_blank"
                      rel="noreferrer"
                      className="gap-2 inline-flex items-center"
                    >
                      <Github className="h-3.5 w-3.5" />
                      github.com/tommynguyen2k
                    </Link>
                  </Badge>
                </div>
              </div>
            </div>
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
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                I care about outcomes and quality: shipping user-friendly features, keeping code
                bases maintainable, and building reusable foundations (components, patterns,
                tooling) that help teams move faster with confidence. I’m also committed to clean
                code practices, accessibility, and mentoring.
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
                      {items.map((skill) => {
                        const Icon = getSkillIcon(skill);
                        return (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-xs inline-flex items-center gap-1.5"
                          >
                            <Icon className="h-3 w-3 shrink-0" />
                            {skill}
                          </Badge>
                        );
                      })}
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
              Education
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <p className="font-medium">Duy Tan University (Da Nang, Vietnam)</p>
                    <p className="text-sm text-muted-foreground">Software Engineering</p>
                  </div>
                  <Badge variant="outline">08/2018 - 08/2022</Badge>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">GPA: 3.4/4</Badge>
                  <Badge variant="secondary">TOEIC: 750</Badge>
                </div>
              </CardContent>
            </Card>
          </FadeInOnScroll>
        </section>
      </div>
    </div>
  );
}
