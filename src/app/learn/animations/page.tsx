import type { Metadata } from 'next';
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: 'Animations',
  description: 'Create fluid, performant animations with Motion (Framer Motion). Learn patterns for transitions, scroll effects, gestures, and layout animations.',
};
import { FadeIn } from "@/components/motion/fade-in";
import { BasicAnimationExample } from "./_components/basic-animation-example";
import { ScrollAnimationExample } from "./_components/scroll-animation-example";
import { GestureAnimationExample } from "./_components/gesture-animation-example";
import { LayoutAnimationExample } from "./_components/layout-animation-example";

export default function AnimationsPage() {
  return (
    <div className="space-y-12">
      <FadeIn>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Animations with Motion
          </h1>
          <p className="text-muted-foreground text-lg">
            Create fluid, performant animations with Motion (Framer Motion).
            Learn patterns for transitions, scroll effects, gestures, and layout
            animations.
          </p>
        </div>
      </FadeIn>

      <section id="transitions" className="scroll-mt-20">
        <BasicAnimationExample />
      </section>

      <Separator />

      <section id="scroll" className="scroll-mt-20">
        <ScrollAnimationExample />
      </section>

      <Separator />

      <section id="gestures" className="scroll-mt-20">
        <GestureAnimationExample />
      </section>

      <Separator />

      <section id="layout" className="scroll-mt-20">
        <LayoutAnimationExample />
      </section>
    </div>
  );
}
