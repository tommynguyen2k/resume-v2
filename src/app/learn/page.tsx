import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileCode, Database, Package, Sparkles, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-children";

const topics = [
  {
    title: "Forms & Validation",
    href: "/learn/forms",
    icon: FileCode,
    description:
      "Master React Hook Form with Zod validation. Learn patterns for complex form handling, multi-step wizards, dynamic fields, and async validation.",
    tags: ["React Hook Form", "Zod", "Validation"],
    examples: 6,
  },
  {
    title: "State Management",
    href: "/learn/state-management",
    icon: Database,
    description:
      "Compare and understand when to use Zustand, Redux Toolkit, or Context API. Learn best practices for global state in React applications.",
    tags: ["Zustand", "Redux", "Context"],
    examples: 5,
  },
  {
    title: "Bundlers",
    href: "/learn/bundlers",
    icon: Package,
    description:
      "Deep dive into modern JavaScript bundlers. Compare Vite, Webpack, and Turbopack configurations, performance, and use cases.",
    tags: ["Vite", "Webpack", "Turbopack"],
    examples: 4,
  },
  {
    title: "Animations",
    href: "/learn/animations",
    icon: Sparkles,
    description:
      "Create fluid animations with Motion (Framer Motion). Learn page transitions, scroll effects, gestures, and layout animations.",
    tags: ["Motion", "Framer", "Transitions"],
    examples: 8,
  },
];

export default function LearnPage() {
  return (
    <div className="space-y-8">
      <FadeIn>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Learn</h1>
          <p className="text-muted-foreground text-lg">
            Explore interactive examples and patterns for modern frontend development.
            Each topic includes code examples with explanations.
          </p>
        </div>
      </FadeIn>

      <StaggerContainer className="grid gap-4 sm:grid-cols-2" staggerDelay={0.1}>
        {topics.map((topic) => {
          const Icon = topic.icon;

          return (
            <StaggerItem key={topic.href}>
              <Link href={topic.href} className="block h-full">
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 group">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="flex items-center gap-2">
                          {topic.title}
                          <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </CardTitle>
                        <div className="text-sm text-muted-foreground">
                          {topic.examples} examples
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="line-clamp-3">
                      {topic.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-1.5">
                      {topic.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
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
