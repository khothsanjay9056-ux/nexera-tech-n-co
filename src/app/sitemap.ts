import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nexeratech.com'
  
  const currentDate = new Date().toISOString()

  // Homepage - highest priority
  const homepage = {
    url: `${baseUrl}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 1.0,
  }

  // Main pages - high priority
  const mainPages = [
    { route: '/services', priority: 0.95 },
    { route: '/contact', priority: 0.9 },
    { route: '/about', priority: 0.85 },
    { route: '/projects', priority: 0.85 },
    { route: '/blog', priority: 0.8 },
  ].map(({ route, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority,
  }))

  // Service pages - very high priority for local SEO
  const servicePages = [
    '/services/power-bi-dashboards',
    '/services/excel-automation',
    '/services/web-ecommerce',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.92,
  }))

  // Blog posts - good priority for content SEO
  const blogPosts = [
    '/blog/excel-automation-small-business',
    '/blog/shopify-ultimate-launchpad',
    '/blog/business-automation-guide',
    '/blog/power-bi-vs-excel',
    '/blog/business-dashboard-importance',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [homepage, ...mainPages, ...servicePages, ...blogPosts]
}
