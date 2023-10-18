// 1. Import your utilities and schemas
import { z, defineCollection, reference } from 'astro:content';

// 2. Define your collections
const meetUsCollection = defineCollection({
    schema: ({ image }) =>
      z.object({
        draft: z.boolean().optional(),
        title: z.string(),
        description: z.string(),
        author: reference('author').optional(),
        publishDate: z.date(),
        coverSVG: image().optional(),
        coverImage: image().optional(),
        socialImage: image().optional(),
        images: z.array(image()).optional(),
        gallery: z.string().optional(),
        categories: z.array(reference('category')).optional(),
        tags: z.array(z.string()).optional(),
        extra: z.array(z.enum(['math', 'markmap', 'mermaid', 'gallery'])).optional(),
        minutesRead: z.string().optional()
      })
  })
  
  const serviceCollection = defineCollection({
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string(),
        coverSVG: image(),
        socialImage: image()
      })
  })
  
  const industryCollection = defineCollection({
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string(),
        coverSVG: image(),
        socialImage: image()
      })
  })
  
  const socialCollection = defineCollection({
    type: 'data',
    schema: z.object({
      name: z.string(),
      link: z.string(),
      icon: z.string()
    })
  })
  
  // 3. Export multiple collections to register them
  export const collections = {
    meetUs: meetUsCollection,
    service: serviceCollection,
    industry: industryCollection,
    social: socialCollection
  }
  