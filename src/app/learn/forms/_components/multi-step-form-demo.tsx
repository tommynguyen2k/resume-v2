'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle } from 'lucide-react';

const step1Schema = z.object({
  firstName: z.string().min(2, 'First name required'),
  lastName: z.string().min(2, 'Last name required'),
});

const step2Schema = z.object({
  email: z.string().email('Valid email required'),
  phone: z.string().min(10, 'Phone number required'),
});

const step3Schema = z.object({
  company: z.string().min(2, 'Company name required'),
  role: z.string().min(2, 'Role required'),
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;
type Step3Data = z.infer<typeof step3Schema>;
type FormData = Step1Data & Step2Data & Step3Data;

const stepTitles = ['Personal', 'Contact', 'Work'];

function getSchemaForStep(step: number) {
  if (step === 0) return step1Schema;
  if (step === 1) return step2Schema;
  return step3Schema;
}

export function MultiStepFormDemo() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const [completed, setCompleted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Partial<FormData>>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(getSchemaForStep(step)) as any,
    defaultValues: formData,
  });

  const onNext = (data: Partial<FormData>) => {
    const newData = { ...formData, ...data };
    setFormData(newData);

    if (step < 2) {
      setStep((s) => s + 1);
    } else {
      console.log('Final submission:', newData);
      setCompleted(true);
      setTimeout(() => {
        setCompleted(false);
        setStep(0);
        setFormData({});
      }, 2000);
    }
  };

  const prevStep = () => setStep((s) => s - 1);

  if (completed) {
    return (
      <div className="flex flex-col items-center gap-2 py-8 text-green-600">
        <CheckCircle className="h-12 w-12" />
        <p className="font-medium">Registration complete!</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm space-y-6">
      {/* Progress indicator */}
      <div className="flex justify-between">
        {stepTitles.map((title, i) => (
          <div
            key={i}
            className={`flex flex-col items-center gap-1 ${
              i <= step ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                i < step
                  ? 'bg-primary text-primary-foreground'
                  : i === step
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted'
              }`}
            >
              {i < step ? '✓' : i + 1}
            </div>
            <span className="text-xs">{title}</span>
          </div>
        ))}
      </div>

      {/* Form steps */}
      <AnimatePresence mode="wait">
        <motion.form
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          onSubmit={handleSubmit(onNext)}
          className="space-y-4"
        >
          {step === 0 && (
            <>
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" {...register('firstName')} />
                {errors.firstName && (
                  <p className="text-sm text-destructive">{String(errors.firstName.message)}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" {...register('lastName')} />
                {errors.lastName && (
                  <p className="text-sm text-destructive">{String(errors.lastName.message)}</p>
                )}
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" {...register('email')} />
                {errors.email && (
                  <p className="text-sm text-destructive">{String(errors.email.message)}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" {...register('phone')} />
                {errors.phone && (
                  <p className="text-sm text-destructive">{String(errors.phone.message)}</p>
                )}
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" {...register('company')} />
                {errors.company && (
                  <p className="text-sm text-destructive">{String(errors.company.message)}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Input id="role" {...register('role')} />
                {errors.role && (
                  <p className="text-sm text-destructive">{String(errors.role.message)}</p>
                )}
              </div>
            </>
          )}

          <div className="flex justify-between pt-2">
            <Button type="button" variant="outline" onClick={prevStep} disabled={step === 0}>
              Previous
            </Button>
            <Button type="submit">{step < 2 ? 'Next' : 'Submit'}</Button>
          </div>
        </motion.form>
      </AnimatePresence>
    </div>
  );
}
