import { z, defineCollection } from "astro:content";
import { citySizes } from "src/cities";

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
    size: z.enum(citySizes),
    sortOrder: z.number(),
    region: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = {
  regions: regionCollection,
  cities: cityCollection,
};
