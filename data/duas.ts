import { buildSourceLinks } from "@/lib/source-links";
import type { DuaCategory, DuaItem, DuaRecord, DuaSource } from "@/lib/types";

import { eveningAdhkar as eveningAdhkarLegacy } from "@/data/evening-adhkar";
import { lastTenNights as lastTenNightsLegacy } from "@/data/last-ten-nights";
import { morningAdhkar as morningAdhkarLegacy } from "@/data/morning-adhkar";
import { propheticQuranDuas as propheticQuranDuasLegacy } from "@/data/prophetic-quran-duas";
import { rabbanaDuas as rabbanaDuasLegacy } from "@/data/rabbana-duas";
import {
  dailyLifeDuas as dailyLifeDuasLegacy,
  familyDuas as familyDuasLegacy,
  forgivenessDuas as forgivenessDuasLegacy,
  rizqDuas as rizqDuasLegacy,
  shifaDuas as shifaDuasLegacy,
  travelDuas as travelDuasLegacy,
} from "@/data/topical-duas";

const quranAnnotationRangePattern = /[\u06D6-\u06ED]/u;
const quranUnsupportedDisplayPattern = /[\u06DF\u06E0\u06E1\u06E2\u06E3\u06E5\u06E6\u06ED]/gu;
const tatweelBeforeSuperscriptAlifPattern = /\u0640(?=\u0670)/gu;

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[`'’"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function buildReviewedDisplayArabic(item: DuaItem) {
  if (item.sourceType !== "quran") {
    return item.displayArabic;
  }

  if (item.displayArabic) {
    return item.displayArabic;
  }

  if (!quranAnnotationRangePattern.test(item.arabic)) {
    return undefined;
  }

  const cleaned = item.arabic
    .replace(quranUnsupportedDisplayPattern, "")
    .replace(tatweelBeforeSuperscriptAlifPattern, "")
    .replace(/\s{2,}/g, " ")
    .trim();

  return cleaned === item.arabic ? undefined : cleaned;
}

function sourceLabelToStructuredSource(
  label: string,
  href: string | null,
  sourceType: "quran" | "hadith",
): DuaSource {
  const normalized = label.trim();

  if (sourceType === "quran") {
    const quranMatch = normalized.match(/(\d+:\d+[a-z]?)/i);

    return {
      sourceName: "Qur'an",
      reference: quranMatch?.[1] ?? normalized,
      url: href ?? undefined,
    };
  }

  const hostMatch = normalized.match(
    /^(Quran\.com|Sunnah\.com|HadithUnlocked\.com):\s*(.*)$/i,
  );

  if (hostMatch) {
    return {
      sourceName: hostMatch[1],
      reference: hostMatch[2].trim(),
      url: href ?? undefined,
    };
  }

  const collectionMatch = normalized.match(
    /^(.*?)(\d+[a-z]?(?:\s*\(.*\))?)$/,
  );

  if (collectionMatch) {
    return {
      sourceName: collectionMatch[1].trim(),
      reference: collectionMatch[2].trim(),
      url: href ?? undefined,
    };
  }

  return {
    sourceName: "Hadith",
    reference: normalized,
    url: href ?? undefined,
  };
}

function normalizeSources(item: DuaItem): DuaSource[] {
  if (item.sources?.length) {
    return item.sources;
  }

  return buildSourceLinks(item.sourceReference, item.sourceUrl).map((link) =>
    sourceLabelToStructuredSource(link.label, link.href, item.sourceType),
  );
}

function legacyItemToRecord(item: DuaItem): DuaRecord {
  return {
    id: item.id,
    slug: slugify(item.title || item.id),
    title: item.title,
    published: item.published,
    arabic: item.arabic,
    displayArabic: buildReviewedDisplayArabic(item),
    transliteration: item.transliteration,
    translation: {
      english: item.english,
      urdu: item.urdu,
    },
    category: item.category,
    sourceType: item.sourceType,
    sources: normalizeSources(item),
    sourceReferenceText: item.sourceReference,
    theme: item.theme,
    benefit: item.benefit,
    repetition: item.repetition,
    authenticity: item.authenticity,
    featured: item.featured,
  };
}

function recordToItem(record: DuaRecord): DuaItem {
  return {
    id: record.id,
    category: record.category,
    title: record.title,
    published: record.published,
    theme: record.theme,
    benefit: record.benefit,
    arabic: record.arabic,
    displayArabic: record.displayArabic,
    transliteration: record.transliteration,
    english: record.translation.english,
    urdu: record.translation.urdu,
    sourceType: record.sourceType,
    sourceReference:
      record.sourceReferenceText ??
      record.sources
        .map((source) => `${source.sourceName} ${source.reference}`.trim())
        .join("; "),
    sourceUrl: record.sources.length === 1 ? record.sources[0].url : undefined,
    sources: record.sources,
    repetition: record.repetition,
    authenticity: record.authenticity,
    featured: record.featured,
  };
}

function buildRegistry(records: DuaRecord[]) {
  const seen = new Set<string>();

  for (const record of records) {
    if (seen.has(record.id)) {
      throw new Error(`Duplicate dua id found in registry: ${record.id}`);
    }

    seen.add(record.id);
  }

  return records;
}

const additionalLastTenActsLegacy: DuaItem[] = [
  {
    id: "last-ten-prayer-on-laylatul-qadr",
    category: "last-ten-nights",
    title: "Stand in prayer on Laylatul Qadr",
    arabic:
      "مَنْ قَامَ لَيْلَةَ الْقَدْرِ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ",
    english:
      "Whoever stands in prayer on Laylatul Qadr with faith and seeking reward will have his past sins forgiven.",
    urdu:
      "جو شخص لیلۃ القدر میں ایمان کے ساتھ اور ثواب کی نیت سے قیام کرے، اس کے پچھلے گناہ معاف کر دیے جاتے ہیں۔",
    benefit:
      "Even a small portion of the night spent in sincere prayer can lead to forgiveness of past sins.",
    sourceType: "hadith",
    sourceReference: "Sahih al-Bukhari 1901",
    sourceUrl: "https://sunnah.com/bukhari:1901",
    authenticity: "sahih",
  },
  {
    id: "last-ten-seek-laylatul-qadr",
    category: "last-ten-nights",
    title: "Seek Laylatul Qadr in the last ten nights",
    arabic:
      "تَحَرَّوْا لَيْلَةَ الْقَدْرِ فِي الْعَشْرِ الأَوَاخِرِ مِنْ رَمَضَانَ",
    english: "Seek Laylatul Qadr in the last ten nights of Ramadan.",
    urdu: "لیلۃ القدر کو رمضان کی آخری دس راتوں میں تلاش کرو۔",
    benefit:
      "Increase worship in all the final nights, especially the odd nights.",
    sourceType: "hadith",
    sourceReference: "Sahih al-Bukhari 2020",
    sourceUrl: "https://sunnah.com/bukhari:2020",
    authenticity: "sahih",
  },
  {
    id: "last-ten-revive-the-night",
    category: "last-ten-nights",
    title: "Revive the night with worship",
    arabic:
      "كَانَ النَّبِيُّ ﷺ إِذَا دَخَلَ الْعَشْرُ الأَوَاخِرُ شَدَّ مِئْزَرَهُ وَأَحْيَا لَيْلَهُ وَأَيْقَظَ أَهْلَهُ",
    english:
      "When the last ten nights began, the Prophet would strive harder, spend the night in worship, and wake his family.",
    urdu:
      "جب آخری عشرہ داخل ہوتا تو نبی ﷺ کمر کس لیتے، رات کو عبادت میں گزارتے، اور اپنے گھر والوں کو جگاتے تھے۔",
    benefit:
      "Dedicate these nights to prayer, Qur’an, dhikr, and encourage your family to worship as well.",
    sourceType: "hadith",
    sourceReference: "Sahih al-Bukhari 2024",
    sourceUrl: "https://sunnah.com/bukhari:2024",
    authenticity: "sahih",
  },
  {
    id: "last-ten-increase-charity",
    category: "last-ten-nights",
    title: "Increase charity in Ramadan",
    arabic:
      "كَانَ رَسُولُ اللَّهِ ﷺ أَجْوَدَ النَّاسِ، وَكَانَ أَجْوَدَ مَا يَكُونُ فِي رَمَضَانَ",
    english:
      "The Messenger of Allah was the most generous of people, and he was even more generous in Ramadan.",
    urdu:
      "رسول اللہ ﷺ سب لوگوں سے زیادہ سخی تھے، اور رمضان میں آپ اور بھی زیادہ سخی ہو جاتے تھے۔",
    benefit:
      "Follow the example of the Prophet by giving charity and helping others during these blessed nights.",
    sourceType: "hadith",
    sourceReference: "Sahih al-Bukhari 6",
    sourceUrl: "https://sunnah.com/bukhari:6",
    authenticity: "sahih",
  },
];

const homeMorningHeroLegacy: DuaItem = {
  id: "hero-tirmidhi-3524",
  category: "morning",
  title: "Ya Hayyu Ya Qayyum",
  arabic: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ",
  english: "O Ever-Living, O Sustainer, in Your mercy I seek relief.",
  sourceType: "hadith",
  sourceReference: "Jami` at-Tirmidhi 3524",
};

const allLegacyCollections: DuaItem[] = [
  ...morningAdhkarLegacy,
  ...eveningAdhkarLegacy,
  ...rabbanaDuasLegacy,
  ...lastTenNightsLegacy,
  ...propheticQuranDuasLegacy,
  ...shifaDuasLegacy,
  ...forgivenessDuasLegacy,
  ...rizqDuasLegacy,
  ...familyDuasLegacy,
  ...travelDuasLegacy,
  ...dailyLifeDuasLegacy,
  ...additionalLastTenActsLegacy,
  homeMorningHeroLegacy,
];

export const allDuaRecords = buildRegistry(
  allLegacyCollections.map(legacyItemToRecord),
);

export function getDuaRecordById(id: string) {
  return allDuaRecords.find((record) => record.id === id);
}

export function getDuaItemById(id: string) {
  const record = getDuaRecordById(id);
  return record ? recordToItem(record) : undefined;
}

export function getDuaRecordsByCategory(category: DuaCategory) {
  return allDuaRecords.filter((record) => record.category === category);
}

export function getDuaItemsByCategory(category: DuaCategory) {
  return getDuaRecordsByCategory(category).map(recordToItem);
}

export const morningAdhkar = getDuaItemsByCategory("morning");
export const eveningAdhkar = getDuaItemsByCategory("evening");
export const rabbanaDuas = getDuaItemsByCategory("rabbana");
export const lastTenNights = getDuaItemsByCategory("last-ten-nights");
export const propheticQuranDuas = getDuaItemsByCategory("prophetic");
export const shifaDuas = getDuaItemsByCategory("shifa");
export const forgivenessDuas = getDuaItemsByCategory("forgiveness");
export const rizqDuas = getDuaItemsByCategory("rizq");
export const familyDuas = getDuaItemsByCategory("family");
export const travelDuas = getDuaItemsByCategory("travel");
export const dailyLifeDuas = getDuaItemsByCategory("daily-life");

export const lastTenRecommendedActs = additionalLastTenActsLegacy.map((item) =>
  recordToItem(legacyItemToRecord(item)),
);

export const homeMorningHeroDua =
  getDuaItemById("hero-tirmidhi-3524") ??
  recordToItem(legacyItemToRecord(homeMorningHeroLegacy));
