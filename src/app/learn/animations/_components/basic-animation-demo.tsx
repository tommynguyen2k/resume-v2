"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

const boxVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotate: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 20,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 24,
    },
  },
};

export function BasicAnimationDemo() {
  const [key, setKey] = useState(0);

  const replay = () => setKey((k) => k + 1);

  const items = ["Spring", "Stagger", "Variants", "Ease"];

  return (
    <div className="flex flex-col items-center gap-6 py-4 w-full">
      <Button variant="outline" size="sm" onClick={replay}>
        <RefreshCw className="h-4 w-4 mr-2" />
        Replay
      </Button>

      <div className="flex items-center gap-8" key={key}>
        {/* Spring box */}
        <motion.div
          variants={boxVariants}
          initial="hidden"
          animate="visible"
          className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg"
        />

        {/* Staggered list */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-2"
        >
          {items.map((item) => (
            <motion.li
              key={item}
              variants={itemVariants}
              className="px-4 py-2 bg-muted rounded-lg text-sm font-medium"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
