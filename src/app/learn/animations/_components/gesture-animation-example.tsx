import { ExampleCard } from "@/components/example-card";
import { GestureAnimationDemo } from "./gesture-animation-demo";

const code = `"use client";

import { motion } from "motion/react";

// Hover and tap interactions
export function InteractiveButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="px-6 py-3 bg-primary text-white rounded-lg"
    >
      Click me
    </motion.button>
  );
}

// Draggable element
export function DraggableBox() {
  return (
    <motion.div
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      dragElastic={0.2}
      whileDrag={{ scale: 1.1, cursor: "grabbing" }}
      className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl cursor-grab"
    />
  );
}

// Drag with snap back
export function DragSnapBack() {
  return (
    <motion.div
      drag
      dragSnapToOrigin
      whileDrag={{ scale: 1.2 }}
      className="w-16 h-16 bg-blue-500 rounded-full cursor-grab"
    />
  );
}

// Focus state
export function FocusableInput() {
  return (
    <motion.input
      whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
      transition={{ duration: 0.2 }}
      className="px-4 py-2 border-2 rounded-lg outline-none"
      placeholder="Focus me"
    />
  );
}

// Combined gestures with variants
const cardVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  pressed: { scale: 0.95 },
};

export function GestureCard() {
  return (
    <motion.div
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      whileTap="pressed"
      className="p-6 bg-card border rounded-xl shadow-lg cursor-pointer"
    >
      <h3>Interactive Card</h3>
      <p>Hover and click me!</p>
    </motion.div>
  );
}`;

export function GestureAnimationExample() {
  return (
    <ExampleCard
      title="Gesture Animations"
      description="Create interactive elements with hover, tap, drag, and focus gestures. Motion makes it easy to add delightful micro-interactions."
      code={code}
      lang="tsx"
      filename="gesture-animations.tsx"
      tags={["whileHover", "whileTap", "drag"]}
      preview={<GestureAnimationDemo />}
    />
  );
}
