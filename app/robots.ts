import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots {
  // Preproduction is never indexable. robots.txt is not access control.
  return { rules: { userAgent: '*', disallow: '/' } };
}
