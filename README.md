# Tommy Nguyen · Frontend Portfolio

A modern, joyful portfolio and learning hub built with **Next.js**, **React**, and **TypeScript**. Showcases experience, projects, and hands-on frontend topics—from JavaScript & TypeScript to state management, forms, animations, testing, APIs, and Git & CI/CD.

---

## ✨ What’s inside

- **Home** — Hero, tech stack, and learning journey links
- **About** — Experience, skills, and education
- **Learn** — Topic-based examples (JS/TS, state, forms, bundlers, animations, testing, APIs, Git & CI/CD) with collapsible sidebar and code samples
- **Contact** — Connect form with Brevo (Sendinblue) transactional email

Stack highlights: **Next.js 16** (App Router), **React 19**, **Tailwind CSS 4**, **Motion**, **Radix UI**, **React Hook Form**, **Zod**, **Zustand**, **Shiki** for syntax highlighting, and **pnpm** for package management.

---

## 🚀 Quick start

**Prerequisites:** Node.js 18+ and [pnpm](https://pnpm.io/installation).

```bash
# Clone and install
git clone https://github.com/tommynguyen2k/resume-v2.git
cd resume-v2
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Edit `src/app/page.tsx` (or any page) and see changes with fast refresh.

---

## 📜 Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `pnpm dev`      | Start dev server         |
| `pnpm build`    | Production build         |
| `pnpm start`    | Start production server  |
| `pnpm lint`     | Run ESLint               |
| `pnpm lint:fix` | Run ESLint with auto-fix |

Pre-commit (Husky + lint-staged) runs `eslint --fix` on staged `.js`, `.jsx`, `.ts`, `.tsx` files.

---

## 🔧 Environment (optional)

For the **Contact** form to send email via [Brevo](https://www.brevo.com), copy `.env.example` to `.env.local` and set:

- `BREVO_API_KEY` — API key from [Brevo](https://app.brevo.com/settings/keys/api)
- `BREVO_SENDER_EMAIL` / `BREVO_SENDER_NAME` — Verified sender
- `BREVO_CONTACT_RECIPIENT` — Where to receive submissions

The site works without these; the form falls back to a `mailto:` link.

---

## 📁 Project structure (high level)

```
src/
├── app/                    # Next.js App Router
│   ├── about/               # About page
│   ├── contact/            # Contact page + form
│   ├── learn/               # Learn hub + topic pages
│   │   ├── javascript-typescript/
│   │   ├── state-management/
│   │   ├── forms/
│   │   ├── bundlers/
│   │   ├── animations/
│   │   ├── testing/
│   │   ├── apis/
│   │   └── git-cicd/
│   └── api/contact/        # Contact form API route
├── components/              # Shared UI & layout
│   ├── layout/              # Header, footer
│   ├── motion/              # Fade-in, stagger, etc.
│   └── ui/                  # Buttons, cards, tooltips, etc.
└── lib/                     # Utils (e.g. cn)
```

---

## 🛠 Tech stack

- **Framework:** Next.js 16, React 19
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **UI:** Radix UI primitives, shadcn-style components, Lucide icons
- **Animation:** Motion (Framer Motion), GSAP
- **Forms & validation:** React Hook Form, Zod
- **State:** Zustand
- **Code blocks:** Shiki
- **Tooling:** ESLint, Husky, lint-staged, pnpm

---

## 📄 License

Private — portfolio and learning project.

---

Built with care by **Tommy Nguyen**.  
If you’d like to connect, use the [Contact](https://github.com/tommynguyen2k/resume-v2) page or reach out via the links in the repo.
