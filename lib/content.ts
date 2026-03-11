import type { JourneyLink } from "@/lib/types";

export const journeyLinks: JourneyLink[] = [
  {
    href: "/last-ten-nights",
    title: "Last 10 Nights and Laylatul Qadr",
    eyebrow: "Special season",
    description:
      "Return to the most important duas and words to repeat in the most blessed nights of Ramadan.",
    buttonLabel: "Begin with these nights",
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
    href: "/adhkar#morning-adhkar-section",
    title: "Morning Adhkar",
    eyebrow: "Start the day",
    description:
      "Start your day with authentic remembrance, protection, gratitude, and trust in Allah.",
    buttonLabel: "Open Morning Adhkar",
  },
  {
    href: "/adhkar#evening-adhkar-section",
    title: "Evening Adhkar",
    eyebrow: "Close the day",
    description:
      "End your day with calm, protection, repentance, and remembrance before the night closes.",
    buttonLabel: "Open Evening Adhkar",
  },
];

export const siteLinks = [
  { href: "/", label: "Home" },
  {
    href: "/last-ten-nights",
    label: "Last 10 Nights",
  },
  {
    href: "/rabbana-duas",
    label: "Rabbana Duas",
  },
  {
    href: "/adhkar",
    label: "Adhkar",
    aliases: ["/morning-adhkar", "/morning-azkar", "/evening-adhkar", "/evening-azkar"],
  },
];

export const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export const correctionContact = "from abdul salam @ gmail . com";

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
    label: "Sunnah.com: Sunan Ibn Majah 3850",
    href: "https://sunnah.com/ibnmajah:3850",
    note: "Featured Laylatul Qadr dua with the wording shown on the site.",
  },
  {
    label: "Sunnah.com: Sahih Muslim 2723a",
    href: "https://sunnah.com/muslim:2723a",
    note: "Evening remembrance source text.",
  },
  {
    label: "Sunnah.com: Sahih al-Bukhari 3293",
    href: "https://sunnah.com/bukhari:3293",
    note: "Tahlil repeated one hundred times with reward and protection until evening.",
  },
  {
    label: "Sunnah.com: Sahih Muslim 2691",
    href: "https://sunnah.com/muslim:2691",
    note: "Parallel source for the daily tahlil dhikr.",
  },
  {
    label: "Sunnah.com: Sahih al-Bukhari 6405",
    href: "https://sunnah.com/bukhari:6405",
    note: "Subhan Allah wa bihamdih repeated one hundred times in the day.",
  },
  {
    label: "Sunnah.com: Jami` at-Tirmidhi 3388",
    href: "https://sunnah.com/tirmidhi:3388",
    note: "Morning and evening protection dhikr beginning with Bismillah.",
  },
  {
    label: "Sunnah.com: Sunan Abi Dawud 5074",
    href: "https://sunnah.com/abudawud:5074",
    note: "Supplication asking Allah for pardon, well-being, and protection.",
  },
  {
    label: "Sunnah.com: Sahih Muslim 2726a",
    href: "https://sunnah.com/muslim:2726a",
    note: "Juwairiyah hadith containing the weighty morning tasbih.",
  },
  {
    label: "Sunnah.com: Sahih al-Bukhari 4008",
    href: "https://sunnah.com/bukhari:4008",
    note: "Hadith on reciting the last two verses of Surah Al-Baqarah at night.",
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
    text: "Slow down in these nights and give your heart time with the Qur'an, dua, and sincere reflection.",
  },
  {
    title: "For your tongue",
    text: "Keep your tongue busy with authentic duas and adhkar, especially in the nights when reward is multiplied.",
  },
  {
    title: "For your akhirah",
    text: "Do not let the last 10 nights pass lightly. Fill them with remembrance, repentance, and hope in Allah's mercy.",
  },
];
