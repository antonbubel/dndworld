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
    mapPath: z.string().optional(),
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

const pantheonCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    nature: z.enum(["good", "neutral", "evil"]),
    lostPowers: z.boolean().optional(),
    note: z.string().optional(),
    domain: z.string(),
    symbol: z.string(),
    sortOrder: z.number(),
    image: z.string().optional(),
  }),
});

const hellsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    domain: z.string(),
    symbol: z.string().optional(),
    circle: z.number(),
    sortOrder: z.number(),
    image: z.string().optional(),
  }),
});

const populationCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    sortOrder: z.number(),
    image: z.string().optional(),
  }),
});

const guildsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    sortOrder: z.number(),
    image: z.string().optional(),
  }),
});

const bestiaryCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    sortOrder: z.number(),
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
  pantheon: pantheonCollection,
  hells: hellsCollection,
  population: populationCollection,
  guilds: guildsCollection,
  bestiary: bestiaryCollection,
  legends: legendsCollection,
};
