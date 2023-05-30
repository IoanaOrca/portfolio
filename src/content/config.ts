import { defineCollection, z } from 'astro:content';

const sharedSchema = {
  draft: z.boolean().default(false),
  title: z.string(),
  date: z.date(),
  description: z.string().optional(),
  image: z.object({
    src: z.string(),
    alt: z.string().default(''),
  }).optional(),
  tags: z.array(z.string()),
};

//https://docs.astro.build/en/guides/content-collections/
export const collections = {
  cooking: defineCollection({
    schema: z.object({
      ...sharedSchema,
      ingredients: z.array(z.object({
        title: z.string(),
        list: z.array(z.object({
          name: z.string(),
          quantity: z.string(),
        })),
      })),
    }),
  }),
  crafting: defineCollection({
    schema: z.object({
      ...sharedSchema,
      price: z.number().positive(),
      available: z.boolean(),
      dimensions: z.object({
        w: z.number().positive(),
        h: z.number().positive(),
        d: z.number().positive(),
      }),
      material: z.array(z.string()),
      link: z.string().url(),
    }),
  }),
};

// strings: , , price, available, , dimensions, materials, link to etsy
