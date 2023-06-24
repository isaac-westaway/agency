import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://sparkdigital.vercel.app',
      lastModified: new Date(),
    },
    {
        url: 'https://sparkdigital.vercel.app/pricing',
        lastModified: new Date(),
    },
    {
        url: 'https://sparkdigital.vercel.app/pricing/personal',
        lastModified: new Date(),
    },
    {
        url: 'https://sparkdigital.vercel.app/pricing/business',
        lastModified: new Date(),
    },
  ]
}