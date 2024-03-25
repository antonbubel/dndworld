import { z, defineCollection } from "astro:content";

const regionCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    sortOrder: z.number(),
  }),
});

const cityCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    sortOrder: z.number(),
    region: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = {
  region: regionCollection,
  city: cityCollection,
};
