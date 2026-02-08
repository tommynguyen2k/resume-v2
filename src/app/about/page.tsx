import type { Metadata } from 'next';
import { AboutContent } from './about-content';

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Senior Frontend Engineer (Tommy Nguyen) with 5+ years of experience building scalable, user-centric web applications using React, Next.js, Angular, Vue.js, and TypeScript.',
};

export default function AboutPage() {
  return <AboutContent />;
}
