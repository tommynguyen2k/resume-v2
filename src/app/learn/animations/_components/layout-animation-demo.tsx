"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shuffle } from "lucide-react";

export function LayoutAnimationDemo() {
  const [activeTab, setActiveTab] = useState(0);
  const [items, setItems] = useState([1, 2, 3, 4]);

  const tabs = ["Home", "About", "Work"];

  const shuffle = () => {
    setItems([...items].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="flex flex-col items-center gap-8 py-4 w-full">
      {/* Animated tabs */}
      <div className="space-y-2 text-center">
        <p className="text-xs text-muted-foreground">Shared Layout (Tabs)</p>
        <div className="flex gap-1 p-1 bg-muted rounded-lg">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className="relative px-4 py-2 text-sm font-medium rounded-md"
            >
              {activeTab === i && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-background rounded-md shadow-sm"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Reorderable list */}
      <div className="space-y-3 w-full max-w-xs">
        <div className="flex items-center justify-between">
          <p className="text-xs text-muted-foreground">Layout Animation (List)</p>
          <Button variant="outline" size="sm" onClick={shuffle}>
            <Shuffle className="h-3 w-3 mr-1" />
            Shuffle
          </Button>
        </div>
        <div className="space-y-2">
          <AnimatePresence>
            {items.map((item) => (
              <motion.div
                key={item}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="p-3 bg-gradient-to-r from-muted to-muted/50 rounded-lg text-sm font-medium"
              >
                Item {item}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <p className="text-xs text-muted-foreground text-center max-w-xs">
        The layout prop automatically animates position and size changes.
      </p>
    </div>
  );
}
