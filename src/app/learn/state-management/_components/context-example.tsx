import { ExampleCard } from "@/components/example-card";
import { ContextDemo } from "./context-demo";

const code = `"use client";

import { createContext, useContext, useReducer, ReactNode } from "react";

// 1. Define types
interface ThemeState {
  theme: "light" | "dark";
  fontSize: "sm" | "md" | "lg";
}

type ThemeAction =
  | { type: "TOGGLE_THEME" }
  | { type: "SET_FONT_SIZE"; payload: "sm" | "md" | "lg" };

interface ThemeContextType extends ThemeState {
  toggleTheme: () => void;
  setFontSize: (size: "sm" | "md" | "lg") => void;
}

// 2. Create context
const ThemeContext = createContext<ThemeContextType | null>(null);

// 3. Create reducer
function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case "SET_FONT_SIZE":
      return { ...state, fontSize: action.payload };
    default:
      return state;
  }
}

// 4. Create provider
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(themeReducer, {
    theme: "light",
    fontSize: "md",
  });

  const toggleTheme = () => dispatch({ type: "TOGGLE_THEME" });
  const setFontSize = (size: "sm" | "md" | "lg") =>
    dispatch({ type: "SET_FONT_SIZE", payload: size });

  return (
    <ThemeContext.Provider value={{ ...state, toggleTheme, setFontSize }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 5. Create custom hook
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

// 6. Usage in components
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Current: {theme}
    </button>
  );
}

// 7. Wrap app with provider
function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  );
}`;

export function ContextExample() {
  return (
    <ExampleCard
      title="Context API Pattern"
      description="React's built-in Context API with useReducer for more complex state. Good for theme, auth, or localized state that doesn't change frequently."
      code={code}
      lang="tsx"
      filename="theme-context.tsx"
      tags={["Context", "useReducer", "Built-in"]}
      preview={<ContextDemo />}
    />
  );
}
