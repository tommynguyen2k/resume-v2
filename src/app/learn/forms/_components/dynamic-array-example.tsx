import { ExampleCard } from "@/components/example-card";
import { DynamicArrayDemo } from "./dynamic-array-demo";

const code = `"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2 } from "lucide-react";

// Schema with array validation
const schema = z.object({
  teamName: z.string().min(2, "Team name required"),
  members: z.array(
    z.object({
      name: z.string().min(2, "Name required"),
      email: z.string().email("Valid email required"),
      role: z.string().min(2, "Role required"),
    })
  ).min(1, "At least one member required"),
});

type FormData = z.infer<typeof schema>;

export function TeamForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      teamName: "",
      members: [{ name: "", email: "", role: "" }],
    },
  });

  // useFieldArray for dynamic fields
  const { fields, append, remove } = useFieldArray({
    control,
    name: "members",
  });

  const onSubmit = (data: FormData) => {
    console.log("Team data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label>Team Name</Label>
        <Input {...register("teamName")} />
        {errors.teamName && (
          <p className="text-destructive">{errors.teamName.message}</p>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3>Team Members</h3>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => append({ name: "", email: "", role: "" })}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Member
          </Button>
        </div>

        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-2 items-start">
            <Input
              placeholder="Name"
              {...register(\`members.\${index}.name\`)}
            />
            <Input
              placeholder="Email"
              {...register(\`members.\${index}.email\`)}
            />
            <Input
              placeholder="Role"
              {...register(\`members.\${index}.role\`)}
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => remove(index)}
              disabled={fields.length === 1}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
        
        {errors.members && (
          <p className="text-destructive">{errors.members.message}</p>
        )}
      </div>

      <Button type="submit">Create Team</Button>
    </form>
  );
}`;

export function DynamicArrayExample() {
  return (
    <ExampleCard
      title="Dynamic Field Arrays"
      description="Using useFieldArray to handle dynamic form fields. Add or remove team members with validation for each entry."
      code={code}
      lang="tsx"
      filename="team-form.tsx"
      tags={["useFieldArray", "Dynamic Fields", "Array Validation"]}
      preview={<DynamicArrayDemo />}
    />
  );
}
