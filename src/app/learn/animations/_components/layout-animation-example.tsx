import { ExampleCard } from '@/components/example-card';
import { LayoutAnimationDemo } from './layout-animation-demo';

const code = `"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

// Layout animation - automatic transition when layout changes
export function ExpandableCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      className="bg-card border rounded-xl p-4 cursor-pointer overflow-hidden"
      style={{ width: isExpanded ? 300 : 200 }}
    >
      <motion.h3 layout="position" className="font-medium">
        Click to expand
      </motion.h3>
      <AnimatePresence>
        {isExpanded && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-2 text-muted-foreground"
          >
            Additional content appears here with a smooth layout animation.
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Shared layout animation (tabs, lists)
export function AnimatedTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Home", "About", "Contact"];

  return (
    <div className="flex gap-2 relative">
      {tabs.map((tab, i) => (
        <button
          key={tab}
          onClick={() => setActiveTab(i)}
          className="px-4 py-2 relative"
        >
          {activeTab === i && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-primary rounded-lg"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative z-10">{tab}</span>
        </button>
      ))}
    </div>
  );
}

// Reorderable list with layout
export function ReorderableList() {
  const [items, setItems] = useState([1, 2, 3, 4]);

  const shuffle = () => {
    setItems(items.toSorted(() => Math.random() - 0.5));
  };

  return (
    <div>
      <button onClick={shuffle}>Shuffle</button>
      <ul className="space-y-2">
        {items.map((item) => (
          <motion.li
            key={item}
            layout
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="p-4 bg-muted rounded-lg"
          >
            Item {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}`;

export function LayoutAnimationExample() {
  return (
    <ExampleCard
      title="Layout Animations"
      description="Automatically animate layout changes with the layout prop. Create smooth transitions for expanding cards, tabs with shared elements, and reorderable lists."
      code={code}
      lang="tsx"
      filename="layout-animations.tsx"
      tags={['layout', 'layoutId', 'AnimatePresence']}
      preview={<LayoutAnimationDemo />}
    />
  );
}
