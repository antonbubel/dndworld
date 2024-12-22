import { getCollection, type CollectionEntry } from "astro:content";
import { getPantheon } from "./pantheon";

export interface RootPage {
  regions: RegionPage[];
  pantheon: PantheonPages;
  hells: Page[];
  population: Page[];
  guilds: Page[];
  bestiary: Page[];
  legends: Page[];
}

export interface Page {
  title: string;
  href: string;
}

interface PantheonPages {
  good: Page[];
  neutral: Page[];
  evil: Page[];
  lostPower: Page[];
}

interface RegionPage extends Page {
  cities: Page[];
  tribes: Page[];
}

async function getRegionPages(): Promise<RegionPage[]> {
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

async function getPantheonPages(): Promise<PantheonPages> {
  const pantheon = await getPantheon();

  const mapToPage = (deity: CollectionEntry<"pantheon">) => ({
    title: deity.data.title,
    href: `/pantheon/${deity.slug}`,
  });

  return {
    good: pantheon.good.map(mapToPage),
    neutral: pantheon.neutral.map(mapToPage),
    evil: pantheon.evil.map(mapToPage),
    lostPower: pantheon.lostPower.map(mapToPage),
  };
}

async function getHellsPages(): Promise<Page[]> {
  const hellsCollection = await getCollection("hells");

  return hellsCollection
    .sort((a, b) => a.data.sortOrder - b.data.sortOrder)
    .map((hellsEntry) => ({
      title: hellsEntry.data.title,
      href: `/hells/${hellsEntry.slug}`,
    }));
}

async function getPopulationPages(): Promise<Page[]> {
  const populationCollection = await getCollection("population");

  return populationCollection
    .sort((a, b) => a.data.sortOrder - b.data.sortOrder)
    .map((race) => ({
      title: race.data.title,
      href: `/population/${race.slug}`,
    }));
}

async function getGuildsPages(): Promise<Page[]> {
  const guildsCollection = await getCollection("guilds");

  return guildsCollection
    .sort((a, b) => a.data.sortOrder - b.data.sortOrder)
    .map((guild) => ({
      title: guild.data.title,
      href: `/guilds/${guild.slug}`,
    }));
}

async function getBestiaryPages(): Promise<Page[]> {
  const bestiaryCollection = await getCollection("bestiary");

  return bestiaryCollection
    .sort((a, b) => a.data.sortOrder - b.data.sortOrder)
    .map((beast) => ({
      title: beast.data.title,
      href: `/bestiary/${beast.slug}`,
    }));
}

async function getLegendPages(): Promise<Page[]> {
  const legendsCollection = await getCollection("legends");

  return legendsCollection
    .sort((a, b) => a.data.sortOrder - b.data.sortOrder)
    .map((legend) => ({
      title: legend.data.title,
      href: `/legends/${legend.slug}`,
    }));
}

export async function getPageHierarchy(): Promise<RootPage> {
  const regions = await getRegionPages();
  const pantheon = await getPantheonPages();
  const hells = await getHellsPages();
  const population = await getPopulationPages();
  const guilds = await getGuildsPages();
  const bestiary = await getBestiaryPages();
  const legends = await getLegendPages();

  return {
    regions,
    pantheon,
    hells,
    population,
    guilds,
    bestiary,
    legends,
  };
}
