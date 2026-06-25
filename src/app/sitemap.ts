import { MetadataRoute } from 'next';
import { getAllTemplates } from '@/lib/templates/registry';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.suratindong.web.id';

  // Static pages
  const staticRoutes = [
    '',
    '/tentang',
    '/bantuan',
    '/syarat',
    '/privasi',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic template pages
  const templates = getAllTemplates();
  const templateRoutes = templates.map((template) => ({
    url: `${baseUrl}/editor/${template.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...templateRoutes];
}
