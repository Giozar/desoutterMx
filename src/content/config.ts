// 1. Import your utilities and schemas
import { z, defineCollection } from 'astro:content';

// 2. Define your collections
  const servicioCollection = defineCollection({
    schema: () =>
      z.object({
        title: z.string(),
        description: z.string(),
        previewDescription: z.string(),
        image: z.string(),
        imageBanner: z.string(),
        qya: z.array(z.object({
          q: z.string().optional(),
          a: z.string().optional(),
        })),
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
    servicio: servicioCollection,
    social: socialCollection
  }
  