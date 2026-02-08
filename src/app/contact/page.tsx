import type { Metadata } from 'next';
import { ContactContent } from './contact-content';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Connect with Tommy Nguyen (Senior Frontend Engineer) for job opportunities, project ideas, or collaborations.',
};

export default function ContactPage() {
  return <ContactContent />;
}
