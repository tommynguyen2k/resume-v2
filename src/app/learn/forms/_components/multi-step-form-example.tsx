import { ExampleCard } from "@/components/example-card";
import { MultiStepFormDemo } from "./multi-step-form-demo";

const code = `"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "motion/react";

// Define schemas for each step
const step1Schema = z.object({
  firstName: z.string().min(2, "First name required"),
  lastName: z.string().min(2, "Last name required"),
});

const step2Schema = z.object({
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Phone number required"),
});

const step3Schema = z.object({
  company: z.string().min(2, "Company name required"),
  role: z.string().min(2, "Role required"),
});

// Combined schema
const fullSchema = step1Schema.merge(step2Schema).merge(step3Schema);
type FormData = z.infer<typeof fullSchema>;

const schemas = [step1Schema, step2Schema, step3Schema];
const stepTitles = ["Personal Info", "Contact Details", "Professional"];

export function MultiStepForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<Partial<FormData>>({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(schemas[step]),
    defaultValues: formData,
    mode: "onChange",
  });

  const nextStep = async () => {
    const isValid = await trigger();
    if (isValid) {
      handleSubmit((data) => {
        setFormData((prev) => ({ ...prev, ...data }));
        setStep((s) => s + 1);
      })();
    }
  };

  const prevStep = () => setStep((s) => s - 1);

  const onSubmit = (data: FormData) => {
    const finalData = { ...formData, ...data };
    console.log("Final submission:", finalData);
  };

  return (
    <div className="space-y-6">
      {/* Progress indicator */}
      <div className="flex justify-between">
        {stepTitles.map((title, i) => (
          <div
            key={i}
            className={\`flex items-center gap-2 \${
              i <= step ? "text-primary" : "text-muted-foreground"
            }\`}
          >
            <div className={\`w-8 h-8 rounded-full flex items-center justify-center
              \${i <= step ? "bg-primary text-white" : "bg-muted"}\`}>
              {i + 1}
            </div>
            <span className="hidden sm:inline text-sm">{title}</span>
          </div>
        ))}
      </div>

      {/* Form steps with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Step-specific fields rendered here */}
          </form>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <div className="flex justify-between">
        <Button onClick={prevStep} disabled={step === 0}>
          Previous
        </Button>
        {step < 2 ? (
          <Button onClick={nextStep}>Next</Button>
        ) : (
          <Button type="submit">Submit</Button>
        )}
      </div>
    </div>
  );
}`;

export function MultiStepFormExample() {
  return (
    <ExampleCard
      title="Multi-Step Form Wizard"
      description="A wizard-style form with step validation, progress indicator, and smooth transitions between steps. Each step validates independently."
      code={code}
      lang="tsx"
      filename="multi-step-form.tsx"
      tags={["Multi-step", "Wizard", "AnimatePresence"]}
      preview={<MultiStepFormDemo />}
    />
  );
}
