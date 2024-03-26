import { getCollection } from "astro:content";

interface Root {
  regions: Page[];
}

interface Page {
  title: string;
  href: string;
  children?: Page[];
}

async function getRegions(): Promise<Page[]> {
  const regionsCollection = await getCollection("regions");
  const citiesCollection = await getCollection("cities");

  return regionsCollection
    .sort((a, b) => a.data.sortOrder - b.data.sortOrder)
    .map((region) => ({
      title: region.data.title,
      href: `/world/regions/${region.slug}`,
      children: citiesCollection.filter((city) => city.data.region === region.slug)
        .sort((a, b) => a.data.sortOrder - b.data.sortOrder)
        .map((city) => ({
          title: city.data.title,
          href: `/world/regions/${region.slug}/cities/${city.slug}`,
        })),
    }));
}

export async function getPageHierarchy(): Promise<Root> {
  const regions = await getRegions();

  return {
    regions,
  };
}
