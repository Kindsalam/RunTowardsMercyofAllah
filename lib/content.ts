import type { JourneyLink } from "@/lib/types";

export const journeyLinks: JourneyLink[] = [
  {
    href: "/last-ten-nights",
    title: "Last 10 Nights and Laylatul Qadr",
    eyebrow: "Tonight's beginning",
    description:
      "Begin with the most important duas and words to repeat in these blessed nights.",
    buttonLabel: "Begin tonight",
  },
  {
    href: "/rabbana-duas",
    title: "Qur’anic Rabbana Duas",
    eyebrow: "From the Qur'an",
    description:
      "Read the powerful supplications that Allah placed in His Book for guidance, mercy, forgiveness, and success.",
    buttonLabel: "Read Rabbana Duas",
  },
  {
    href: "/morning-azkar",
    title: "Morning Azkar",
    eyebrow: "Start the day",
    description:
      "Start your day with authentic remembrance, protection, gratitude, and trust in Allah.",
    buttonLabel: "Open Morning Azkar",
  },
  {
    href: "/evening-azkar",
    title: "Evening Azkar",
    eyebrow: "Close the day",
    description:
      "End your day with calm, protection, repentance, and remembrance before the night closes.",
    buttonLabel: "Open Evening Azkar",
  },
];

export const siteLinks = [
  { href: "/", label: "Home" },
  { href: "/rabbana-duas", label: "Rabbana Duas" },
  { href: "/morning-azkar", label: "Morning Azkar" },
  { href: "/evening-azkar", label: "Evening Azkar" },
  { href: "/last-ten-nights", label: "Last 10 Nights" },
  { href: "/sources", label: "Sources" },
];

export const sourceReferences = [
  {
    label: "Quran.com: Surah Al-Baqarah 2:186",
    href: "https://quran.com/2/186",
    note: "Used for the reflection verse on nearness and answered prayer.",
  },
  {
    label: "Quran.com: Surah Al-Baqarah 2:201",
    href: "https://quran.com/2/201",
    note: "Sample Rabbana dua for good in this life and the next.",
  },
  {
    label: "Quran.com: Surah Ali 'Imran 3:8",
    href: "https://quran.com/3/8",
    note: "Sample Rabbana dua asking for steadfast hearts and mercy.",
  },
  {
    label: "Quran.com: Surah Al-Furqan 25:74",
    href: "https://quran.com/25/74",
    note: "Sample Rabbana dua for righteous families.",
  },
  {
    label: "Quran.com: Surah Al-Baqarah 2:286",
    href: "https://quran.com/2/286",
    note: "Sample supplication for pardon, forgiveness, and mercy.",
  },
  {
    label: "Sunnah.com: Jami` at-Tirmidhi 3513",
    href: "https://sunnah.com/tirmidhi:3513",
    note: "Featured Laylatul Qadr dua.",
  },
  {
    label: "Sunnah.com: Sahih Muslim 2723a",
    href: "https://sunnah.com/muslim:2723a",
    note: "Evening remembrance source text.",
  },
  {
    label: "Sunnah.com: Hisn al-Muslim 77",
    href: "https://sunnah.com/hisn/78",
    note: "Morning wording and transliteration for the daily adhkar sample.",
  },
];

export const whyTheseNightsCards = [
  {
    title: "For your heart",
    text: "Slow down, leave the noise, and reconnect with Allah with words from the Qur'an and Sunnah.",
  },
  {
    title: "For your tongue",
    text: "Keep your tongue busy with authentic duas and adhkar that bring reward and peace.",
  },
  {
    title: "For your akhirah",
    text: "Do not let these nights pass empty. Fill them with remembrance, repentance, and hope.",
  },
];
