import { Separator } from "@/components/ui/separator";
import { FadeIn } from "@/components/motion/fade-in";
import { ZustandExample } from "./_components/zustand-example";
import { ContextExample } from "./_components/context-example";
import { ComparisonTable } from "./_components/comparison-table";

export default function StateManagementPage() {
  return (
    <div className="space-y-12">
      <FadeIn>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            State Management
          </h1>
          <p className="text-muted-foreground text-lg">
            Compare different state management approaches in React. Learn when
            to use Zustand, Redux, or Context API based on your needs.
          </p>
        </div>
      </FadeIn>

      <section id="comparison" className="scroll-mt-20">
        <ComparisonTable />
      </section>

      <Separator />

      <section id="zustand" className="scroll-mt-20">
        <ZustandExample />
      </section>

      <Separator />

      <section id="context" className="scroll-mt-20">
        <ContextExample />
      </section>
    </div>
  );
}
