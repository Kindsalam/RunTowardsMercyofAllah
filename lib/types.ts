export type DuaCategory =
  | "rabbana"
  | "prophetic"
  | "morning"
  | "evening"
  | "last-ten-nights"
  | "shifa"
  | "forgiveness"
  | "rizq"
  | "family"
  | "travel"
  | "daily-life";

export type DuaItem = {
  id: string;
  category: DuaCategory;
  title: string;
  theme?: string;
  benefit?: string;
  arabic: string;
  transliteration?: string;
  english: string;
  urdu?: string;
  sourceType: "quran" | "hadith";
  sourceReference: string;
  sourceUrl?: string;
  repetition?: string;
  authenticity?: "sahih" | "hasan" | "quran";
  featured?: boolean;
};

export type JourneyLink = {
  href: string;
  title: string;
  eyebrow: string;
  description: string;
  buttonLabel: string;
};

export type NavChildLink = {
  href: string;
  label: string;
};

export type NavLink = {
  href: string;
  label: string;
  aliases?: string[];
  children?: NavChildLink[];
};
