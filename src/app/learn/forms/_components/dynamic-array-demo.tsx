"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2, CheckCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const schema = z.object({
  teamName: z.string().min(2, "Team name required"),
  members: z
    .array(
      z.object({
        name: z.string().min(2, "Name required"),
        email: z.string().email("Valid email required"),
        role: z.string().min(2, "Role required"),
      })
    )
    .min(1, "At least one member required"),
});

type FormData = z.infer<typeof schema>;

export function DynamicArrayDemo() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      teamName: "",
      members: [{ name: "", email: "", role: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "members",
  });

  const onSubmit = (data: FormData) => {
    console.log("Team data:", data);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-2 py-8 text-green-600">
        <CheckCircle className="h-12 w-12" />
        <p className="font-medium">Team created!</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md space-y-6"
    >
      <div className="space-y-2">
        <Label htmlFor="teamName">Team Name</Label>
        <Input id="teamName" placeholder="Engineering Team" {...register("teamName")} />
        {errors.teamName && (
          <p className="text-sm text-destructive">{errors.teamName.message}</p>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <Label>Team Members</Label>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => append({ name: "", email: "", role: "" })}
          >
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>

        <AnimatePresence>
          {fields.map((field, index) => (
            <motion.div
              key={field.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-2 p-3 border rounded-lg bg-muted/30"
            >
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-muted-foreground">
                  Member {index + 1}
                </span>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => remove(index)}
                  disabled={fields.length === 1}
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <Input
                  placeholder="Name"
                  {...register(`members.${index}.name`)}
                  className="text-sm"
                />
                <Input
                  placeholder="Email"
                  {...register(`members.${index}.email`)}
                  className="text-sm"
                />
                <Input
                  placeholder="Role"
                  {...register(`members.${index}.role`)}
                  className="text-sm"
                />
              </div>
              {errors.members?.[index] && (
                <p className="text-xs text-destructive">
                  {errors.members[index]?.name?.message ||
                    errors.members[index]?.email?.message ||
                    errors.members[index]?.role?.message}
                </p>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {errors.members?.root && (
          <p className="text-sm text-destructive">
            {errors.members.root.message}
          </p>
        )}
      </div>

      <Button type="submit" className="w-full">
        Create Team
      </Button>
    </form>
  );
}
