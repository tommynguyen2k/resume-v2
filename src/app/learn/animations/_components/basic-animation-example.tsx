import { ExampleCard } from "@/components/example-card";
import { BasicAnimationDemo } from "./basic-animation-demo";

const code = `"use client";

import { motion } from "motion/react";

// Basic animation with initial, animate, and transition
export function FadeInBox() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="p-6 bg-primary text-primary-foreground rounded-lg"
    >
      I fade in and slide up!
    </motion.div>
  );
}

// Animation with variants for reusability
const boxVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    rotate: -10 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export function SpringBox() {
  return (
    <motion.div
      variants={boxVariants}
      initial="hidden"
      animate="visible"
      className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"
    />
  );
}

// Stagger children animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export function StaggeredList() {
  const items = ["First", "Second", "Third", "Fourth"];

  return (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map((item) => (
        <motion.li key={item} variants={itemVariants}>
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}`;

export function BasicAnimationExample() {
  return (
    <ExampleCard
      title="Basic Animations & Variants"
      description="Learn the fundamentals of Motion animations: initial/animate states, transitions, spring physics, and variants for reusable animations."
      code={code}
      lang="tsx"
      filename="basic-animations.tsx"
      tags={["motion.div", "variants", "spring"]}
      preview={<BasicAnimationDemo />}
    />
  );
}
