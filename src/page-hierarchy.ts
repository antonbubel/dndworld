import { getCollection } from "astro:content";

interface Root {
  regions: Region[];
}

interface Page {
  title: string;
  href: string;
}

interface Region extends Page {
  cities: Page[];
  tribes: Page[];
}

async function getRegions(): Promise<Region[]> {
  const regionsCollection = await getCollection("regions");
  const citiesCollection = await getCollection("cities");
  const tribesCollection = await getCollection("tribes");

  return regionsCollection
    .sort((a, b) => a.data.sortOrder - b.data.sortOrder)
    .map((region) => ({
      title: region.data.title,
      href: `/world/regions/${region.slug}`,
      cities: citiesCollection
        .filter((city) => city.data.region === region.slug)
        .sort((a, b) => a.data.sortOrder - b.data.sortOrder)
        .map((city) => ({
          title: city.data.title,
          href: `/world/regions/${region.slug}/cities/${city.slug}`,
        })),
      tribes: tribesCollection
        .filter((tribe) => tribe.data.region === region.slug)
        .sort((a, b) => a.data.sortOrder - b.data.sortOrder)
        .map((tribe) => ({
          title: tribe.data.title,
          href: `/world/regions/${region.slug}/tribes/${tribe.slug}`,
        })),
    }));
}

export async function getPageHierarchy(): Promise<Root> {
  const regions = await getRegions();

  return {
    regions,
  };
}
