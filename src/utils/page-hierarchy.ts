import { getCollection, type CollectionEntry } from "astro:content";
import { getPantheon } from "./pantheon";

export interface RootPage {
  regions: RegionPage[];
  pantheon: PantheonPages;
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
  const legends = await getLegendPages();

  return {
    regions,
    pantheon,
    legends,
  };
}
