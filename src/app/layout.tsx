import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import './globals.css';
import { DockUnderPage } from '@/components/DockUnderPage';

const geistSans = Geist({
  variable: '--font-geist-sans', // font-sans
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Tommy Nguyen | Senior Frontend Engineer Portfolio',
  description:
    'Portfolio of Tommy Nguyen (Nguyen Thuy Van Truong) - Senior Frontend Engineer with 5+ years of experience. Interactive examples, code demos, and learning resources showcasing work with React, Next.js, Angular, Vue, and TypeScript.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <footer className="border-t py-6 md:py-8">
              <div className="container flex flex-col items-center justify-center gap-2 text-center text-sm text-muted-foreground px-4">
                <p>
                  Built by Tommy Nguyen with Next.js, shadcn/ui, Motion, and modern web
                  technologies.
                </p>
                <p>
                  My personal portfolio documenting what I&apos;ve learned and what I&apos;m
                  currently exploring in frontend development.
                </p>
              </div>
            </footer>
          </div>
          <div className=" md:hidden">
            <DockUnderPage />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
