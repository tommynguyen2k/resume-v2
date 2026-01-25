"use client";

import { motion } from "motion/react";
import { useRef } from "react";

export function GestureAnimationDemo() {
  const constraintsRef = useRef(null);

  return (
    <div className="flex flex-col items-center gap-8 py-4 w-full">
      {/* Hover and tap button */}
      <div className="space-y-2 text-center">
        <p className="text-xs text-muted-foreground">Hover & Tap</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium shadow-lg"
        >
          Interactive Button
        </motion.button>
      </div>

      {/* Draggable area */}
      <div className="space-y-2 text-center">
        <p className="text-xs text-muted-foreground">Drag within bounds</p>
        <motion.div
          ref={constraintsRef}
          className="w-48 h-32 bg-muted rounded-xl relative flex items-center justify-center"
        >
          <motion.div
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.1}
            whileDrag={{ scale: 1.1, cursor: "grabbing" }}
            className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg cursor-grab shadow-lg"
          />
        </motion.div>
      </div>

      {/* Hover card */}
      <div className="space-y-2 text-center">
        <p className="text-xs text-muted-foreground">Hover Card</p>
        <motion.div
          whileHover={{ scale: 1.02, y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="p-4 bg-card border rounded-xl shadow cursor-pointer"
        >
          <h4 className="font-medium">Hover me</h4>
          <p className="text-sm text-muted-foreground">I lift up on hover</p>
        </motion.div>
      </div>
    </div>
  );
}
