// 1. Import your utilities and schemas
import { z, defineCollection, reference } from 'astro:content';

// 2. Define your collections
const nosotrosCollection = defineCollection({
    schema: () =>
      z.object({
        title: z.string(),
        description: z.string(),
      })
  })
  
  const servicioCollection = defineCollection({
    schema: () =>
      z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
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
    nosotros: nosotrosCollection,
    servicio: servicioCollection,
    social: socialCollection
  }
  