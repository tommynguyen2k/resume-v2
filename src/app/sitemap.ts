import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sr-fe-portfolio.vercel.app';

  const routes = [
    '',
    '/about',
    '/contact',
    '/learn',
    '/learn/animations',
    '/learn/apis',
    '/learn/bundlers',
    '/learn/folder-structure',
    '/learn/forms',
    '/learn/git-cicd',
    '/learn/javascript-typescript',
    '/learn/state-management',
    '/learn/testing',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
