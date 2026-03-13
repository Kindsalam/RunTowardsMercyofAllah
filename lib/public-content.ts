import {
  eveningAdhkar,
  lastTenNights,
  morningAdhkar,
  rabbanaDuas,
} from "@/data/duas";
import type { DuaItem } from "@/lib/types";

const draftPrefix = "Sample:";

export function isPublishedDua(item: DuaItem) {
  return !item.title.startsWith(draftPrefix);
}

function toPublicReadingSet(items: DuaItem[]) {
  return items.filter(isPublishedDua);
}

export function pickFeaturedItem(items: DuaItem[]) {
  return items.find((item) => item.featured) ?? items[0];
}

export const publicMorningAdhkar = toPublicReadingSet(morningAdhkar);
export const publicEveningAdhkar = toPublicReadingSet(eveningAdhkar);
export const publicRabbanaDuas = toPublicReadingSet(rabbanaDuas);
export const publicLastTenNights = toPublicReadingSet(lastTenNights);
