import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import './globals.css';
import { DockUnderPage } from '@/components/DockUnderPage';
import { Footer } from '@/components/layout/footer';
import { personSchema } from '@/lib/schema';

const geistSans = Geist({
  variable: '--font-geist-sans', // font-sans
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sr-fe-portfolio.vercel.app'),
  title: {
    default: 'Tommy Nguyen | Senior Frontend Engineer Portfolio',
    template: '%s | Tommy Nguyen',
  },
  description:
    'Portfolio of Tommy Nguyen (Nguyen Thuy Van Truong) - Senior Frontend Engineer with 5+ years of experience. Interactive examples, code demos, and learning resources showcasing work with React, Next.js, Angular, Vue, and TypeScript.',
  keywords: [
    'Senior Frontend Engineer',
    'React Developer',
    'Next.js Portfolio',
    'TypeScript Expert',
    'Web Development Demos',
    'Frontend Architecture',
    'Nguyen Thuy Van Truong',
    'Tommy Nguyen',
  ],
  authors: [{ name: 'Tommy Nguyen', url: 'https://github.com/tommynguyen2k' }],
  creator: 'Tommy Nguyen',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sr-fe-portfolio.vercel.app',
    title: 'Tommy Nguyen | Senior Frontend Engineer Portfolio',
    description:
      'Explore interactive frontend demos and learning resources from a Senior Engineer experienced in React, Next.js, and more.',
    siteName: 'Tommy Nguyen Portfolio',
    images: [
      {
        url: '/og-image.png', // Assuming we might add one later or point to a default
        width: 1200,
        height: 630,
        alt: 'Tommy Nguyen Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tommy Nguyen | Senior Frontend Engineer Portfolio',
    description:
      'Senior Frontend Engineer portfolio featuring interactive demos and modern web patterns.',
    creator: '@tommynguyen', // Placeholder or real if known
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/tommyLogo.svg',
    apple: '/tommyLogo.svg',
  },
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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
          />
          <div className="relative min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <div className=" md:hidden">
            <DockUnderPage />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
