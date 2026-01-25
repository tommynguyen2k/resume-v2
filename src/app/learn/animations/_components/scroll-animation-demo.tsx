"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function ScrollAnimationDemo() {
  const [key, setKey] = useState(0);

  const items = [
    { color: "from-blue-500 to-cyan-500", label: "Element 1" },
    { color: "from-purple-500 to-pink-500", label: "Element 2" },
    { color: "from-orange-500 to-yellow-500", label: "Element 3" },
    { color: "from-green-500 to-emerald-500", label: "Element 4" },
  ];

  return (
    <div className="flex flex-col items-center gap-6 py-4 w-full">
      <Button variant="outline" size="sm" onClick={() => setKey((k) => k + 1)}>
        <RefreshCw className="h-4 w-4 mr-2" />
        Replay
      </Button>

      <motion.div
        key={key}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="grid grid-cols-2 gap-3 w-full max-w-xs"
      >
        {items.map((item) => (
          <motion.div
            key={item.label}
            variants={itemVariants}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className={`h-20 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-medium text-sm shadow-lg`}
          >
            {item.label}
          </motion.div>
        ))}
      </motion.div>

      <p className="text-xs text-muted-foreground text-center max-w-xs">
        Elements animate with stagger when they enter the viewport. In real
        usage, scroll down to trigger.
      </p>
    </div>
  );
}
