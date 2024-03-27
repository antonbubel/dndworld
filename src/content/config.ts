import { z, defineCollection } from "astro:content";

const regionsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    sortOrder: z.number(),
  }),
});

const citiesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    size: z.enum(["capital", "big", "medium", "small"]),
    holders: z.string().optional(),
    sortOrder: z.number(),
    region: z.string(),
    image: z.string().optional(),
  }),
});

const tribesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    sortOrder: z.number(),
    region: z.string(),
    image: z.string().optional(),
  }),
});

const legendsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    sortOrder: z.number(),
    image: z.string().optional(),
  }),
});

export const collections = {
  regions: regionsCollection,
  cities: citiesCollection,
  tribes: tribesCollection,
  legends: legendsCollection,
};
