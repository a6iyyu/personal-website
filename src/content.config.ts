import { defineCollection, z } from "astro:content";

export const collections = {
  articles: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string().min(1, { message: "Title is required!" }).trim(),
      description: z.string().min(1, { message: "Description is required!" }).trim(),
      tags: z.array(z.string()).optional(),
      date: z.string().refine(value => /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4})$/.test(value), { message: "Date must be in DD-MM-YYYY format!" }),
      reading_time: z.number().int().positive().min(1, { message: "Reading time is required!" }),
      thumbnail: z.string().trim(),
    }),
  }),
  views: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string().trim().optional(),
      description: z.string().trim().optional(),
    }),
  }),
};