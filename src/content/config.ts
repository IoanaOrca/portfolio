import { defineCollection, z } from 'astro:content';

//https://docs.astro.build/en/guides/content-collections/
export const collections = {
  recipes: defineCollection({
    schema: z.object({
      draft: z.boolean().default(false),
      title: z.string(),
      description: z.string().optional(),
      date: z.date(),
      image: z.object({
        src: z.string(),
        alt: z.string().default(''),
      }).optional(),
      tags: z.array(z.string()),
      ingredients: z.array(z.object({
        name: z.string(),
        quantity: z.string(),
      })),
    }),
  }),
};
