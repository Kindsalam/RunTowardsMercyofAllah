export type DuaCategory =
  | "rabbana"
  | "morning"
  | "evening"
  | "last-ten-nights";

export type DuaItem = {
  id: string;
  category: DuaCategory;
  title: string;
  theme?: string;
  arabic: string;
  transliteration?: string;
  english: string;
  urdu: string;
  sourceType: "quran" | "hadith";
  sourceReference: string;
  repetition?: string;
  authenticity?: "sahih" | "quran";
  featured?: boolean;
};

export type JourneyLink = {
  href: string;
  title: string;
  eyebrow: string;
  description: string;
  buttonLabel: string;
};
