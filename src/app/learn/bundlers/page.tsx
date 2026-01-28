import { Separator } from '@/components/ui/separator';
import { FadeIn, FadeInOnScroll } from '@/components/motion/fade-in';
import { CodeBlock } from '@/components/code-block';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X, Zap, Package, Gauge } from 'lucide-react';

const bundlers = [
  {
    name: 'Vite',
    description: 'Next generation frontend tooling with native ES modules',
    icon: Zap,
    color: 'text-purple-500',
    pros: [
      'Instant server start (no bundling in dev)',
      'Lightning fast HMR',
      'Native ESM-based development',
      'Rich plugin ecosystem',
      'Simple configuration',
    ],
    cons: ['Production uses Rollup (different from dev)', 'Less mature for large enterprise apps'],
    bestFor: 'Modern web apps, Vue/React/Svelte projects, rapid development',
  },
  {
    name: 'Webpack',
    description: 'The most configurable and battle-tested bundler',
    icon: Package,
    color: 'text-blue-500',
    pros: [
      'Extremely configurable',
      'Huge ecosystem of loaders/plugins',
      'Battle-tested in production',
      'Great for complex requirements',
      'Federation for micro-frontends',
    ],
    cons: ['Slower dev server startup', 'Complex configuration', 'Steeper learning curve'],
    bestFor: 'Enterprise apps, complex build requirements, micro-frontends',
  },
  {
    name: 'Turbopack',
    description: 'Rust-based successor to Webpack, integrated with Next.js',
    icon: Gauge,
    color: 'text-red-500',
    pros: [
      'Written in Rust (extremely fast)',
      'Native Next.js integration',
      'Incremental computation',
      'Compatible with Webpack loaders',
      '700x faster than Webpack (claimed)',
    ],
    cons: ['Still in development', 'Next.js specific (for now)', 'Limited standalone usage'],
    bestFor: 'Next.js projects, teams wanting maximum performance',
  },
];

const viteConfig = `// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
});`;

const webpackConfig = `// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    port: 3000,
    hot: true,
    open: true,
  },
};`;

const turbopackConfig = `// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Turbopack is enabled by default in Next.js 15+
  // for development with 'next dev --turbopack'
  
  experimental: {
    // Turbopack-specific options
    turbo: {
      rules: {
        // Custom loader rules (Webpack-compatible)
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
      resolveAlias: {
        // Custom aliases
        '@components': './src/components',
      },
    },
  },
};

export default nextConfig;`;

export default function BundlersPage() {
  return (
    <div className="space-y-12">
      <FadeIn>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Bundlers Comparison</h1>
          <p className="text-muted-foreground text-lg">
            Compare modern JavaScript bundlers: Vite, Webpack, and Turbopack. Understand their
            strengths, trade-offs, and when to use each.
          </p>
        </div>
      </FadeIn>

      <section id="comparison" className="scroll-mt-20">
        <FadeInOnScroll>
          <div className="grid gap-6 md:grid-cols-3">
            {bundlers.map((bundler) => {
              const Icon = bundler.icon;
              return (
                <Card key={bundler.name} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Icon className={`h-8 w-8 ${bundler.color}`} />
                      <div>
                        <CardTitle>{bundler.name}</CardTitle>
                      </div>
                    </div>
                    <CardDescription>{bundler.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2 text-green-600">Pros</h4>
                      <ul className="space-y-1">
                        {bundler.pros.map((pro) => (
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
                        {bundler.cons.map((con) => (
                          <li key={con} className="flex items-start gap-2 text-sm">
                            <X className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 border-t">
                      <Badge variant="secondary" className="text-xs">
                        Best for: {bundler.bestFor}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </FadeInOnScroll>
      </section>

      <Separator />

      <section id="vite" className="scroll-mt-20 space-y-4">
        <FadeInOnScroll>
          <h2 className="text-2xl font-bold">Vite Configuration</h2>
          <p className="text-muted-foreground">
            Vite uses native ES modules in development and Rollup for production builds.
            Configuration is minimal and intuitive.
          </p>
          <CodeBlock code={viteConfig} lang="typescript" filename="vite.config.ts" />
        </FadeInOnScroll>
      </section>

      <Separator />

      <section id="webpack" className="scroll-mt-20 space-y-4">
        <FadeInOnScroll>
          <h2 className="text-2xl font-bold">Webpack Configuration</h2>
          <p className="text-muted-foreground">
            Webpack requires more configuration but offers unmatched flexibility. Loaders and
            plugins can handle any build requirement.
          </p>
          <CodeBlock code={webpackConfig} lang="javascript" filename="webpack.config.js" />
        </FadeInOnScroll>
      </section>

      <Separator />

      <section id="turbopack" className="scroll-mt-20 space-y-4">
        <FadeInOnScroll>
          <h2 className="text-2xl font-bold">Turbopack with Next.js</h2>
          <p className="text-muted-foreground">
            Turbopack is integrated into Next.js and requires minimal configuration. It&apos;s
            compatible with most Webpack loaders.
          </p>
          <CodeBlock code={turbopackConfig} lang="typescript" filename="next.config.ts" />
        </FadeInOnScroll>
      </section>
    </div>
  );
}
