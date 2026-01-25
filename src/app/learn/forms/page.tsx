import { Separator } from "@/components/ui/separator";
import { FadeIn } from "@/components/motion/fade-in";
import { BasicFormExample } from "./_components/basic-form-example";
import { MultiStepFormExample } from "./_components/multi-step-form-example";
import { DynamicArrayExample } from "./_components/dynamic-array-example";

export default function FormsPage() {
  return (
    <div className="space-y-12">
      <FadeIn>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Forms & Validation
          </h1>
          <p className="text-muted-foreground text-lg">
            Learn React Hook Form with Zod validation. These patterns cover
            common form scenarios from basic to advanced.
          </p>
        </div>
      </FadeIn>

      <section id="basic" className="scroll-mt-20">
        <BasicFormExample />
      </section>

      <Separator />

      <section id="multi-step" className="scroll-mt-20">
        <MultiStepFormExample />
      </section>

      <Separator />

      <section id="dynamic-arrays" className="scroll-mt-20">
        <DynamicArrayExample />
      </section>
    </div>
  );
}
