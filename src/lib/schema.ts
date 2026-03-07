import type { Person, WithContext } from 'schema-dts';

export const personSchema: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nguyen Thuy Van Truong',
  alternateName: 'Tommy Nguyen',
  url: 'https://truongnguyen.cv',
  image: 'https://truongnguyen.cv/avatar.png',
  sameAs: [
    'https://github.com/tommynguyen2k',
    'https://www.linkedin.com/in/tommynguyen2k',
  ],
  jobTitle: 'Senior Frontend Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'SmartDev LLC',
  },
  description: 'Senior Frontend Engineer with 5+ years of experience in React, Next.js, and modern web technologies.',
};
