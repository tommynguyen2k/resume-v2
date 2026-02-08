import type { Metadata } from 'next';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Testing',
  description: 'Jest and Vitest for unit and component tests. Learn setup, mocking, and best practices for frontend testing.',
};
import { FadeIn, FadeInOnScroll } from '@/components/motion/fade-in';
import { CodeBlock } from '@/components/code-block';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X, FlaskConical, Zap } from 'lucide-react';

const testFrameworks = [
  {
    name: 'Jest',
    description: 'Zero-config JavaScript testing framework by Meta',
    icon: FlaskConical,
    color: 'text-red-500',
    pros: [
      'Zero configuration out of the box',
      'Snapshot testing built-in',
      'Huge ecosystem and community',
      'Works with React Testing Library',
      'Mocking and spies included',
    ],
    cons: ['Can be slower in large codebases', 'ESM support improved but historically tricky'],
    bestFor: 'React apps, Node backends, teams already on Jest',
  },
  {
    name: 'Vitest',
    description: 'Vite-native unit test runner, Jest-compatible API',
    icon: Zap,
    color: 'text-green-500',
    pros: [
      'Uses Vite’s transform pipeline (very fast)',
      'Jest-compatible API (easy migration)',
      'Native ESM and TypeScript',
      'Watch mode with instant feedback',
      'Built-in coverage (v8/istanbul)',
    ],
    cons: ['Newer than Jest', 'Best experience in Vite projects'],
    bestFor: 'Vite/Next.js projects, teams wanting speed and ESM',
  },
];

const jestExample = `// sum.test.ts
import { sum } from './sum';

describe('sum', () => {
  it('adds two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('handles negatives', () => {
    expect(sum(-1, 1)).toBe(0);
  });
});

// Component test with React Testing Library
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

test('button calls onClick when clicked', async () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  await userEvent.click(screen.getByRole('button', { name: /click me/i }));
  expect(handleClick).toHaveBeenCalledTimes(1);
});`;

const vitestConfig = `// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: ['node_modules/', '**/*.d.ts'],
    },
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
});`;

const mockExample = `// Mocking a fetch module
import { vi } from 'vitest';

vi.mock('@/lib/api', () => ({
  fetchUser: vi.fn().mockResolvedValue({
    id: '1',
    name: 'Jane Doe',
    email: 'jane@example.com',
  }),
}));

// In your test
import { fetchUser } from '@/lib/api';
import { render, screen } from '@testing-library/react';
import { UserProfile } from './UserProfile';

test('displays user name', async () => {
  render(<UserProfile userId="1" />);
  expect(await screen.findByText('Jane Doe')).toBeInTheDocument();
  expect(fetchUser).toHaveBeenCalledWith('1');
});`;

export default function TestingPage() {
  return (
    <div className="space-y-12">
      <FadeIn>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Testing</h1>
          <p className="text-muted-foreground text-lg">
            Jest and Vitest for unit and component tests. Learn setup, mocking, and best practices
            for frontend testing.
          </p>
        </div>
      </FadeIn>

      <section id="comparison" className="scroll-mt-20">
        <FadeInOnScroll>
          <h2 className="text-2xl font-bold mb-4">Jest vs Vitest</h2>
          <p className="text-muted-foreground mb-6">
            Both support React Testing Library and a similar API. Vitest is faster and ESM-first;
            Jest is the industry standard with more docs and examples.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {testFrameworks.map((framework) => {
              const Icon = framework.icon;
              return (
                <Card key={framework.name} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Icon className={`h-8 w-8 ${framework.color}`} />
                      <div>
                        <CardTitle>{framework.name}</CardTitle>
                        <CardDescription>{framework.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2 text-green-600">Pros</h4>
                      <ul className="space-y-1">
                        {framework.pros.map((pro) => (
                          <li key={pro} className="flex items-start gap-2 text-sm">
                            <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2 text-red-600">Cons</h4>
                      <ul className="space-y-1">
                        {framework.cons.map((con) => (
                          <li key={con} className="flex items-start gap-2 text-sm">
                            <X className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Best for: {framework.bestFor}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </FadeInOnScroll>
      </section>

      <Separator />

      <section id="unit-tests" className="scroll-mt-20 space-y-4">
        <FadeInOnScroll>
          <h2 className="text-2xl font-bold">Unit & Component Tests</h2>
          <p className="text-muted-foreground">
            Use describe/it (or test) and expect. For React, pair with React Testing Library and
            user-event for realistic interactions.
          </p>
          <CodeBlock code={jestExample} lang="typescript" filename="sum.test.ts" />
        </FadeInOnScroll>
      </section>

      <Separator />

      <section id="vitest-setup" className="scroll-mt-20 space-y-4">
        <FadeInOnScroll>
          <h2 className="text-2xl font-bold">Vitest Configuration</h2>
          <p className="text-muted-foreground">
            Vitest reuses your Vite config. Enable globals for describe/it/expect, set environment
            to jsdom for DOM tests, and optionally add coverage.
          </p>
          <CodeBlock code={vitestConfig} lang="typescript" filename="vitest.config.ts" />
        </FadeInOnScroll>
      </section>

      <Separator />

      <section id="mocking" className="scroll-mt-20 space-y-4">
        <FadeInOnScroll>
          <h2 className="text-2xl font-bold">Mocking</h2>
          <p className="text-muted-foreground">
            Mock modules with vi.mock() and control return values with vi.fn().mockResolvedValue().
            Same pattern works in both Jest and Vitest.
          </p>
          <CodeBlock code={mockExample} lang="typescript" filename="UserProfile.test.tsx" />
        </FadeInOnScroll>
      </section>
    </div>
  );
}
