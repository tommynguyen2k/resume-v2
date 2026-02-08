import type { Metadata } from 'next';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Git & CI/CD',
  description: 'Git workflows and GitHub Actions for lint, test, and deploy. Keep main green with automated checks on every push and PR.',
};
import { FadeIn, FadeInOnScroll } from '@/components/motion/fade-in';
import { CodeBlock } from '@/components/code-block';
import { GitBranch, Workflow, CheckCircle } from 'lucide-react';

const gitWorkflowExample = `# Feature branch workflow
git checkout main
git pull origin main
git checkout -b feature/add-login

# Work and commit
git add .
git commit -m "feat(auth): add login form and validation"
git push -u origin feature/add-login

# Open PR, merge, then cleanup
git checkout main
git pull origin main
git branch -d feature/add-login`;

const githubActionsLint = `# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  lint-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Lint
        run: npm run lint

      - name: Type check
        run: npm run build
        # or: npx tsc --noEmit

      - name: Test
        run: npm test
        # or: npm run test:ci
`;

const deployVercel = `# .github/workflows/deploy-preview.yml
name: Deploy Preview

on:
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install and build
        run: |
          npm ci
          npm run build

      # Optional: deploy to Vercel/Netlify via their GitHub integration
      # or use official actions (e.g. amondnet/vercel-action) with tokens in secrets
`;

export default function GitCICDPage() {
  return (
    <div className="space-y-12">
      <FadeIn>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Git & CI/CD</h1>
          <p className="text-muted-foreground text-lg">
            Git workflows and GitHub Actions for lint, test, and deploy. Keep main green with
            automated checks on every push and PR.
          </p>
        </div>
      </FadeIn>

      <section id="git-workflow" className="scroll-mt-20 space-y-4">
        <FadeInOnScroll>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <GitBranch className="h-6 w-6" />
            Git Workflow
          </h2>
          <p className="text-muted-foreground">
            Use feature branches, push to origin, and open pull requests. Merge after review and
            delete the branch to keep the repo tidy.
          </p>
          <CodeBlock code={gitWorkflowExample} lang="bash" filename="workflow" />
        </FadeInOnScroll>
      </section>

      <Separator />

      <section id="github-actions" className="scroll-mt-20 space-y-4">
        <FadeInOnScroll>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Workflow className="h-6 w-6" />
            GitHub Actions — CI
          </h2>
          <p className="text-muted-foreground">
            Run on push and pull_request to main/develop. Typical steps: checkout, setup Node,
            install deps, lint, type-check, and test. Use npm ci for reproducible installs.
          </p>
          <CodeBlock code={githubActionsLint} lang="yaml" filename=".github/workflows/ci.yml" />
        </FadeInOnScroll>
      </section>

      <Separator />

      <section id="deploy" className="scroll-mt-20 space-y-4">
        <FadeInOnScroll>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <CheckCircle className="h-6 w-6" />
            Build & Deploy
          </h2>
          <p className="text-muted-foreground">
            Add a job that runs build (and optionally deploy). For Vercel/Netlify, you can rely on
            their GitHub integration for preview and production deploys, or use their official
            actions with secrets.
          </p>
          <CodeBlock
            code={deployVercel}
            lang="yaml"
            filename=".github/workflows/deploy-preview.yml"
          />
        </FadeInOnScroll>
      </section>
    </div>
  );
}
