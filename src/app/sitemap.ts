import { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const staticRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/features', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/download', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/help', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/privacy', priority: 0.3, changeFrequency: 'monthly' as const },
    { path: '/terms', priority: 0.3, changeFrequency: 'monthly' as const },
  ];

  return staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}