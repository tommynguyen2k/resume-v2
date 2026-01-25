"use client";

import { create } from "zustand";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus, RotateCcw } from "lucide-react";
import { motion } from "motion/react";

// Create a simple counter store
interface CounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

// Component that only subscribes to count
function CountDisplay() {
  const count = useCounterStore((state) => state.count);

  return (
    <motion.div
      key={count}
      initial={{ scale: 1.2 }}
      animate={{ scale: 1 }}
      className="text-6xl font-bold tabular-nums"
    >
      {count}
    </motion.div>
  );
}

// Component that only subscribes to actions
function CounterControls() {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  return (
    <div className="flex gap-2">
      <Button variant="outline" size="icon" onClick={decrement}>
        <Minus className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" onClick={reset}>
        <RotateCcw className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" onClick={increment}>
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}

export function ZustandDemo() {
  return (
    <div className="flex flex-col items-center gap-6 py-4">
      <div className="flex items-center gap-2">
        <Badge variant="outline">Zustand Store</Badge>
        <Badge variant="secondary">~1KB</Badge>
      </div>
      <CountDisplay />
      <CounterControls />
      <p className="text-xs text-muted-foreground text-center max-w-xs">
        Components subscribe to specific state slices, preventing unnecessary
        re-renders.
      </p>
    </div>
  );
}
