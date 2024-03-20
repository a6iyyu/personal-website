import { defineCollection, z } from "astro:content";

const BlogCollections = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().max(200, { message: "Title must be 200 characters or less!" }),
    date: z.date(),
    author: z.string(),
    image: z.object({
        src: z.string(),
        alt: z.string(),
      }).optional(),
    tags: z.enum(["Opinion", "Education", "Entertainment"]),
  }),
});

const ProjectCollections = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().max(300, { message: "Title must be 300 characters or less!" }),
    startdate: z.date(),
    enddate: z.date(),
    producer: z.array(z.string()),
    image: z.object({
        src: z.string(),
        alt: z.string(),
      }).optional(),
    source: z.string().optional(),
    demo: z.string().nullable().default(null).optional(),
  }),
});

export const collections = {
  blog: BlogCollections,
  project: ProjectCollections,
};