import { ExampleCard } from "@/components/example-card";
import { ScrollAnimationDemo } from "./scroll-animation-demo";

const code = `"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

// Simple whileInView animation
export function FadeInOnScroll() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      I animate when scrolled into view!
    </motion.div>
  );
}

// Scroll-linked progress bar
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left"
    />
  );
}

// Parallax effect with useTransform
export function ParallaxSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <div ref={ref} className="relative h-[400px] overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <h2 className="text-4xl font-bold">Parallax Effect</h2>
      </motion.div>
    </div>
  );
}

// Scroll-triggered stagger
export function ScrollStagger() {
  const items = ["One", "Two", "Three", "Four"];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: { staggerChildren: 0.1 },
        },
      }}
    >
      {items.map((item) => (
        <motion.div
          key={item}
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
}`;

export function ScrollAnimationExample() {
  return (
    <ExampleCard
      title="Scroll-Triggered Animations"
      description="Animate elements when they enter the viewport using whileInView, create parallax effects with useTransform, and build scroll progress indicators."
      code={code}
      lang="tsx"
      filename="scroll-animations.tsx"
      tags={["whileInView", "useScroll", "parallax"]}
      preview={<ScrollAnimationDemo />}
    />
  );
}
