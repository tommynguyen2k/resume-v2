'use client';

import { createContext, useContext, useReducer, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Moon, Sun, Type } from 'lucide-react';

interface ThemeState {
  theme: 'light' | 'dark';
  fontSize: 'sm' | 'md' | 'lg';
}

type ThemeAction =
  | { type: 'TOGGLE_THEME' }
  | { type: 'SET_FONT_SIZE'; payload: 'sm' | 'md' | 'lg' };

interface ThemeContextType extends ThemeState {
  toggleTheme: () => void;
  setFontSize: (size: 'sm' | 'md' | 'lg') => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    case 'SET_FONT_SIZE':
      return { ...state, fontSize: action.payload };
    default:
      return state;
  }
}

function ThemeProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(themeReducer, {
    theme: 'light',
    fontSize: 'md',
  });

  const toggleTheme = () => dispatch({ type: 'TOGGLE_THEME' });
  const setFontSize = (size: 'sm' | 'md' | 'lg') =>
    dispatch({ type: 'SET_FONT_SIZE', payload: size });

  return (
    <ThemeContext.Provider value={{ ...state, toggleTheme, setFontSize }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

function ThemeControls() {
  const { theme, fontSize, toggleTheme, setFontSize } = useTheme();

  const fontSizes: ('sm' | 'md' | 'lg')[] = ['sm', 'md', 'lg'];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Theme</span>
        <Button variant="outline" size="sm" onClick={toggleTheme}>
          {theme === 'light' ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
          {theme}
        </Button>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Font Size</span>
        <div className="flex gap-1">
          {fontSizes.map((size) => (
            <Button
              key={size}
              variant={fontSize === size ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFontSize(size)}
            >
              {size.toUpperCase()}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

function PreviewBox() {
  const { theme, fontSize } = useTheme();

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  return (
    <div
      className={`p-4 rounded-lg border ${
        theme === 'dark' ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-900'
      }`}
    >
      <p className={sizeClasses[fontSize]}>
        Preview text with {theme} theme and {fontSize} size
      </p>
    </div>
  );
}

export function ContextDemo() {
  return (
    <ThemeProvider>
      <div className="w-full max-w-xs space-y-4">
        <div className="flex items-center gap-2 justify-center">
          <Badge variant="outline">Context API</Badge>
          <Badge variant="secondary">
            <Type className="h-3 w-3 mr-1" />
            useReducer
          </Badge>
        </div>
        <ThemeControls />
        <PreviewBox />
        <p className="text-xs text-muted-foreground text-center">
          Good for theme, auth, or localized state
        </p>
      </div>
    </ThemeProvider>
  );
}
