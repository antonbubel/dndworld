import { getCollection, type CollectionEntry } from "astro:content";

export interface Pantheon {
  good: CollectionEntry<"pantheon">[];
  neutral: CollectionEntry<"pantheon">[];
  evil: CollectionEntry<"pantheon">[];
  lostPower: CollectionEntry<"pantheon">[];
}

export function getNature(deity: CollectionEntry<"pantheon">): string {
  const natures = {
    good: "Доброе",
    neutral: "Нейтральное",
    evil: "Злое",
  };

  return natures[deity.data.nature] || "Неизвестное";
}

export async function getPantheon(): Promise<Pantheon> {
  const pantheonCollection = (await getCollection("pantheon")).sort(
    (a, b) => a.data.sortOrder - b.data.sortOrder
  );

  return {
    good: pantheonCollection.filter(
      (deity) => deity.data.nature === "good" && !deity.data.lostPowers
    ),
    neutral: pantheonCollection.filter(
      (deity) => deity.data.nature === "neutral" && !deity.data.lostPowers
    ),
    evil: pantheonCollection.filter(
      (deity) => deity.data.nature === "evil" && !deity.data.lostPowers
    ),
    lostPower: pantheonCollection.filter((deity) => deity.data.lostPowers),
  };
}
