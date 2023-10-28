// 1. Import your utilities and schemas
import { z, defineCollection, reference } from 'astro:content';

// 2. Define your collections
const meetUsCollection = defineCollection({
    schema: () =>
      z.object({
        title: z.string(),
        description: z.string(),
      })
  })
  
  const servicioCollection = defineCollection({
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string(),
        image: image(),
        qya: z.array(z.object({
          q: z.string().optional(),
          a: z.string().optional(),
        })),
      })
  })
  
  const industryCollection = defineCollection({
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string(),
        image: image(),
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
    servicio: servicioCollection,
    industry: industryCollection,
    social: socialCollection
  }
  