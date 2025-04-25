import { defineCollection, z } from "astro:content";

export const collections = {
  "articles": defineCollection({
    type: "content",
    schema: z.object({
      title: z.string().min(1, { message: "Title is required!" }).trim(),
      description: z.string().min(1, { message: "Description is required!" }).trim(),
      tags: z.array(z.string()),
      date: z.coerce.date(),
      reading_time: z.number().int().positive().min(1, { message: "Reading time is required!" }),
      thumbnail: z.string().trim(),
    }),
  }),
  "projects": defineCollection({
    type: "content",
    schema: z.object({
      title: z.string().min(1, { message: "Title is required!" }).trim(),
      description: z.string().min(1, { message: "Description is required!" }).trim(),
      language: z.array(z.string()).min(1, { message: "Language is required!" }),
      start_month: z.string().regex(/^\d{2}-\d{4}$/, { message: "Start month must be in MM-YYYY format" }).optional(),
      end_month: z.string().regex(/^\d{2}-\d{4}$/, { message: "End month must be in MM-YYYY format" }).optional(),
      tags: z.array(z.string()).optional(),
      thumbnail: z.string().trim(),
    }),
  }),
};