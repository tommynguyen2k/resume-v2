import type { Metadata } from 'next';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'JavaScript & TypeScript',
  description: 'Modern JS (ES6+) and TypeScript examples with best practices—destructuring, spread/rest, optional chaining, async/await, and more.',
};
import { FadeIn, FadeInOnScroll } from '@/components/motion/fade-in';
import { CodeBlock } from '@/components/code-block';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const jsDestructuring = `// Destructuring – avoid repetitive .property access
const user = { id: 1, name: 'Jane', role: 'admin' };

// Object
const { name, role } = user;
const { name: userName, role = 'viewer' } = user; // rename + default

// Array
const [first, second, ...rest] = [1, 2, 3, 4];

// Nested
const { address: { city } } = user;

// In function params (best practice: only destructure what you use)
function greet({ name, role }: User) {
  return \`\${name} (\${role})\`;
}
`;

const jsOptionalChaining = `// Optional chaining (?.) – safe access to nested properties
const user = { profile: { avatar: { url: '...' } } };

// Instead of: user && user.profile && user.profile.avatar?.url
const url = user?.profile?.avatar?.url; // undefined if any step is null/undefined

// With arrays and optional call
const firstItem = items?.[0];
const result = obj.method?.(); // only call if method exists

// Nullish coalescing (??) – default only for null/undefined (not 0 or '')
const count = value ?? 10;
const name = input ?? 'Anonymous';`;

const jsAsync = `// async/await – prefer over raw .then() for readability
async function fetchUser(id) {
  const res = await fetch(\`/api/users/\${id}\`);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}

// Parallel requests (best practice: use Promise.all for independent calls)
const [user, posts] = await Promise.all([
  fetchUser(userId),
  fetchPosts(userId),
]);

// Sequential when order matters
const user = await fetchUser(id);
const posts = await fetchPosts(user.id);`;

const tsTypes = `// Prefer \`interface\` for object shapes; \`type\` for unions/intersections
interface User {
  id: string;
  name: string;
  email?: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';
type ApiResponse<T> = { data: T } | { error: string };

// Utility types – reuse and transform
type ReadonlyUser = Readonly<User>;
type PartialUser = Partial<User>;
type UserPreview = Pick<User, 'id' | 'name'>;
type UserWithoutEmail = Omit<User, 'email'>;

// Generic with constraint
function getById<T extends { id: string }>(items: T[], id: string): T | undefined {
  return items.find((item) => item.id === id);
}`;

const tsStrict = `// Enable strict mode in tsconfig.json: "strict": true
// Avoid \`any\` – use \`unknown\` when type is truly unknown, then narrow

function parsePayload(data: unknown): User {
  if (
    typeof data === 'object' &&
    data !== null &&
    'id' in data &&
    'name' in data
  ) {
    return data as User;
  }
  throw new Error('Invalid payload');
}

// Narrow with type guards
function isUser(value: unknown): value is User {
  return typeof value === 'object' && value !== null && 'id' in value;
}`;

const jsSpreadRest = `// Spread (...) – copy/merge arrays and objects (shallow)
const a = [1, 2, 3];
const b = [...a, 4, 5];        // [1, 2, 3, 4, 5]
const user = { name: 'Jane', role: 'admin' };
const updated = { ...user, role: 'viewer' };  // override

// Rest – collect remaining items
const [first, ...rest] = [1, 2, 3, 4];      // rest = [2, 3, 4]
function sum(...nums: number[]) {
  return nums.reduce((a, b) => a + b, 0);
}`;

const jsTemplateLiterals = `// Template literals – multiline and interpolation
const name = 'Jane';
const greeting = \`Hello, \${name}!\`;

// Multiline (no need for \\n)
const html = \`
  <div class="card">
    <h2>\${title}</h2>
  </div>
\`;

// Tagged template (custom processing)
function sql(strings: TemplateStringsArray, ...values: unknown[]) {
  return strings.reduce((acc, s, i) => acc + s + (values[i] ?? ''), '');
}`;

const jsArrayMethods = `// Array methods – prefer immutable patterns
const users = [{ id: 1, name: 'Jane' }, { id: 2, name: 'John' }];

// map – transform each item
const names = users.map((u) => u.name);

// filter – keep items that pass a test
const active = users.filter((u) => u.id > 1);

// reduce – single value from array
const total = [1, 2, 3].reduce((acc, n) => acc + n, 0);

// find / findIndex
const user = users.find((u) => u.id === 2);
const idx = users.findIndex((u) => u.name === 'Jane');

// some / every
const hasAdmin = users.some((u) => u.role === 'admin');
const allValid = users.every((u) => u.id > 0);`;

const jsModules = `// ES modules – import/export
// lib/utils.ts
export function formatDate(d: Date) {
  return d.toISOString().slice(0, 10);
}
export const APP_NAME = 'MyApp';
export default function greet(name: string) {
  return \`Hello, \${name}\`;
}

// app.ts
import greet, { formatDate, APP_NAME } from './lib/utils';
import * as utils from './lib/utils';
import type { User } from './types';  // type-only import`;

const jsErrorHandling = `// Error handling – try/catch and custom errors
async function fetchUser(id: string) {
  try {
    const res = await fetch(\`/api/users/\${id}\`);
    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
    return res.json();
  } catch (e) {
    if (e instanceof Error) console.error(e.message);
    throw e;
  }
}

// Custom error class
class ApiError extends Error {
  constructor(public code: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}`;

const jsClosures = `// Closures – function retains access to outer scope
function createCounter(initial = 0) {
  let count = initial;
  return {
    get() {
      return count;
    },
    inc() {
      count += 1;
      return count;
    },
  };
}
const counter = createCounter(10);
counter.inc();  // 11
counter.get();  // 11`;

const tsGenerics = `// Generics – reusable types and functions
function identity<T>(x: T): T {
  return x;
}

// Generic constraint
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Generic interface
interface Result<T, E = Error> {
  ok: true;
  value: T;
} | {
  ok: false;
  error: E;
}`;

const tsDiscriminatedUnions = `// Discriminated unions – narrow by a common field
type Success = { kind: 'success'; data: string };
type Failure = { kind: 'error'; message: string };
type Result = Success | Failure;

function handle(r: Result) {
  if (r.kind === 'success') {
    console.log(r.data);
  } else {
    console.error(r.message);
  }
}`;

const tsMappedKeyof = `// Mapped types & keyof – derive types from object shape
interface User {
  id: string;
  name: string;
  email: string;
}

type UserKeys = keyof User;  // 'id' | 'name' | 'email'
type OptionalUser = { [K in keyof User]?: User[K] };
type ReadonlyUser = { readonly [K in keyof User]: User[K] };`;

const tsConstAssertions = `// const assertions – narrow to literal types
const config = {
  theme: 'dark',
  count: 42,
} as const;
// config.theme is 'dark', config.count is 42

const colors = ['red', 'green', 'blue'] as const;
type Color = typeof colors[number];  // 'red' | 'green' | 'blue'`;

const tsReact = `// Typing React components and hooks
import { ReactNode, FormEvent } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit';
}

function Button({ children, onClick, disabled = false, type = 'button' }: ButtonProps) {
  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

// Event handlers
const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // ...
};`;

const sections = [
  { id: 'js-modern', title: '1. Destructuring', desc: 'Use destructuring to keep code readable and avoid repeating object/array access.', code: jsDestructuring, lang: 'typescript' as const, badge: true },
  { id: 'js-spread-rest', title: '2. Spread & rest', desc: 'Spread copies/merges; rest collects remaining items in arrays or params.', code: jsSpreadRest, lang: 'typescript' as const },
  { id: 'js-optional', title: '3. Optional chaining & nullish coalescing', desc: 'Use ?. and ?? instead of nested conditionals.', code: jsOptionalChaining, lang: 'javascript' as const },
  { id: 'js-template-literals', title: '4. Template literals', desc: 'Multiline strings and interpolation with tagged templates.', code: jsTemplateLiterals, lang: 'typescript' as const },
  { id: 'js-array-methods', title: '5. Array methods', desc: 'map, filter, reduce, find, some, every – prefer immutable patterns.', code: jsArrayMethods, lang: 'typescript' as const },
  { id: 'js-modules', title: '6. ES modules', desc: 'import/export and type-only imports.', code: jsModules, lang: 'typescript' as const },
  { id: 'js-async', title: '7. Async/await', desc: 'Prefer async/await; use Promise.all for independent async calls.', code: jsAsync, lang: 'javascript' as const },
  { id: 'js-error-handling', title: '8. Error handling', desc: 'try/catch and custom error classes.', code: jsErrorHandling, lang: 'typescript' as const },
  { id: 'js-closures', title: '9. Closures', desc: 'Functions that retain access to their outer scope.', code: jsClosures, lang: 'typescript' as const },
  { id: 'ts-types', title: '10. Types, interfaces & utilities', desc: 'interface vs type; Readonly, Partial, Pick, Omit.', code: tsTypes, lang: 'typescript' as const },
  { id: 'ts-strict', title: '11. Strict mode & narrowing', desc: 'Use unknown and type guards instead of any.', code: tsStrict, lang: 'typescript' as const },
  { id: 'ts-generics', title: '12. Generics', desc: 'Reusable types and functions with constraints.', code: tsGenerics, lang: 'typescript' as const },
  { id: 'ts-discriminated-unions', title: '13. Discriminated unions', desc: 'Narrow by a common discriminant field.', code: tsDiscriminatedUnions, lang: 'typescript' as const },
  { id: 'ts-mapped-keyof', title: '14. Mapped types & keyof', desc: 'Derive types from object shapes.', code: tsMappedKeyof, lang: 'typescript' as const },
  { id: 'ts-const-assertions', title: '15. Const assertions', desc: 'Narrow to literal types with as const.', code: tsConstAssertions, lang: 'typescript' as const },
  { id: 'ts-react', title: '16. Typing React', desc: 'Props, ReactNode, FormEvent, and DOM event types.', code: tsReact, lang: 'typescript' as const },
];

export default function JavaScriptTypeScriptPage() {
  return (
    <div className="space-y-12">
      <FadeIn>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">JavaScript & TypeScript</h1>
          <p className="text-muted-foreground text-lg">
            Modern JS (ES6+) and TypeScript examples with best practices—destructuring, spread/rest,
            optional chaining, async/await, types, generics, and React typing.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge variant="secondary">ES6+</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Strict mode</Badge>
            <Badge variant="secondary">React types</Badge>
          </div>
        </div>
      </FadeIn>

      {sections.map((section, index) => (
        <section key={section.id} id={section.id} className="scroll-mt-20">
          <FadeInOnScroll>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {section.title}
                  {section.badge && <Badge variant="outline">Best practice</Badge>}
                </CardTitle>
                <CardDescription>{section.desc}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <CodeBlock lang={section.lang} code={section.code} />
              </CardContent>
            </Card>
          </FadeInOnScroll>
          {index < sections.length - 1 && <Separator className="mt-12" />}
        </section>
      ))}
    </div>
  );
}
