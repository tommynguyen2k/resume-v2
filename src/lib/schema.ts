import type { Person, WithContext } from 'schema-dts';

export const personSchema: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nguyen Thuy Van Truong',
  alternateName: 'Tommy Nguyen',
  url: 'https://sr-fe-portfolio.vercel.app',
  image: 'https://sr-fe-portfolio.vercel.app/avatar.png',
  sameAs: [
    'https://github.com/tommynguyen2k',
    'https://www.linkedin.com/in/tommynguyen2k', // Assuming this is the LinkedIn
  ],
  jobTitle: 'Senior Frontend Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'SmartDev LLC',
  },
  description: 'Senior Frontend Engineer with 5+ years of experience in React, Next.js, and modern web technologies.',
};
