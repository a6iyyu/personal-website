import { defineCollection, z } from "astro:content";

export const collection = {
  articles: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string().trim(),
      description: z.string().trim().optional(),
      date: z.string().date(),
    }),
  }),
};