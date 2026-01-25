import { ExampleCard } from "@/components/example-card";
import { ZustandDemo } from "./zustand-demo";

const code = `import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

// Define the store interface
interface CounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  incrementBy: (amount: number) => void;
}

// Create the store with middleware
export const useCounterStore = create<CounterStore>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
        reset: () => set({ count: 0 }),
        incrementBy: (amount) =>
          set((state) => ({ count: state.count + amount })),
      }),
      {
        name: "counter-storage", // localStorage key
      }
    )
  )
);

// Usage in components - no provider needed!
function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

// Selective subscription - component only re-renders when count changes
function CountDisplay() {
  const count = useCounterStore((state) => state.count);
  return <p>Count: {count}</p>;
}

// Async actions example
interface TodoStore {
  todos: string[];
  loading: boolean;
  fetchTodos: () => Promise<void>;
  addTodo: (todo: string) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  loading: false,
  fetchTodos: async () => {
    set({ loading: true });
    const response = await fetch("/api/todos");
    const todos = await response.json();
    set({ todos, loading: false });
  },
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
}));`;

export function ZustandExample() {
  return (
    <ExampleCard
      title="Zustand Store"
      description="A lightweight state management library with a simple API. Features persist middleware for localStorage, devtools integration, and selective subscriptions."
      code={code}
      lang="tsx"
      filename="store.ts"
      tags={["Zustand", "Persist", "DevTools"]}
      preview={<ZustandDemo />}
    />
  );
}
