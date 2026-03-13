import type { JourneyLink, NavLink } from "@/lib/types";

export const rabbanaDuasCard: JourneyLink = {
  href: "/quran/rabbana-duas",
  title: "Rabbana Duas",
  eyebrow: "Qur’anic supplications",
  description:
    "Read the Rabbana duas taught in the Qur’an for guidance, mercy, forgiveness, patience, and success.",
  buttonLabel: "Open Rabbana Duas",
};

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
    ...rabbanaDuasCard,
    title: "Qur’anic Rabbana Duas",
    eyebrow: "From the Qur'an",
    buttonLabel: "Read Rabbana Duas",
  },
  {
    href: "/adhkar/morning",
    title: "Morning Adhkar",
    eyebrow: "Start the day",
    description:
      "Start your day with remembrance, protection, gratitude, and trust in Allah.",
    buttonLabel: "Open Morning Adhkar",
  },
  {
    href: "/adhkar/evening",
    title: "Evening Adhkar",
    eyebrow: "Close the day",
    description:
      "End your day with calm, protection, repentance, and remembrance before the night closes.",
    buttonLabel: "Open Evening Adhkar",
  },
];

export const siteLinks: NavLink[] = [
  { href: "/", label: "Home" },
  {
    href: "/last-ten-nights",
    label: "Last 10 Nights",
  },
  {
    href: "/adhkar",
    label: "Adhkar",
    aliases: ["/morning-adhkar", "/morning-azkar", "/evening-adhkar", "/evening-azkar"],
    children: [
      { href: "/adhkar/morning", label: "Morning" },
      { href: "/adhkar/evening", label: "Evening" },
    ],
  },
  {
    href: "/duas",
    label: "Duas",
    aliases: ["/quran/rabbana-duas", "/rabbana-duas"],
    children: [
      { href: "/quran/rabbana-duas", label: "Rabbana Duas" },
      { href: "/duas/prophetic", label: "Prophetic Duas" },
      { href: "/duas/shifa", label: "Shifa" },
      { href: "/duas/forgiveness", label: "Forgiveness" },
      { href: "/duas/rizq", label: "Rizq" },
      { href: "/duas/family", label: "Family" },
      { href: "/duas/travel", label: "Travel" },
      { href: "/duas/daily-life", label: "Daily Life" },
    ],
  },
  {
    href: "/about",
    label: "About",
    aliases: ["/sources", "/methodology", "/disclaimer", "/privacy-policy", "/terms-of-use", "/cookie-policy"],
    children: [
      { href: "/sources", label: "Sources" },
      { href: "/disclaimer", label: "Disclaimer" },
    ],
  },
];

export const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export const aboutLinks = [
  { href: "/about", label: "About" },
  { href: "/sources", label: "Sources" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
  { href: "/cookie-policy", label: "Cookie Policy" },
];

export const adhkarCategoryCards: JourneyLink[] = [
  {
    href: "/adhkar/morning",
    title: "Morning Adhkar",
    eyebrow: "Start the day",
    description:
      "Begin the morning with remembrance, gratitude, and reliance upon Allah before the day unfolds.",
    buttonLabel: "Open Morning Adhkar",
  },
  {
    href: "/adhkar/evening",
    title: "Evening Adhkar",
    eyebrow: "Close the day",
    description:
      "End the day with protection, reflection, and calm remembrance before the night settles.",
    buttonLabel: "Open Evening Adhkar",
  },
];

export const duaCategoryCards: JourneyLink[] = [
  rabbanaDuasCard,
  {
    href: "/duas/prophetic",
    title: "Prophetic Duas",
    eyebrow: "From the Qur'an",
    description:
      "Direct supplications of the Prophets preserved in the Qur'an, with Arabic, translation, and clear source links.",
    buttonLabel: "Open Prophetic Duas",
  },
  {
    href: "/duas/shifa",
    title: "Duas for Shifa",
    eyebrow: "Healing and relief",
    description:
      "A carefully prepared section for duas connected to healing, relief, and asking Allah for well-being.",
    buttonLabel: "Open Shifa Duas",
  },
  {
    href: "/duas/forgiveness",
    title: "Duas for Forgiveness",
    eyebrow: "Tawbah and pardon",
    description:
      "Supplications that help the heart return to repentance, humility, and hope in Allah’s mercy.",
    buttonLabel: "Open Forgiveness Duas",
  },
  {
    href: "/duas/rizq",
    title: "Duas for Rizq",
    eyebrow: "Provision and barakah",
    description:
      "A section for supplications about provision, sufficiency, gratitude, and halal barakah.",
    buttonLabel: "Open Rizq Duas",
  },
  {
    href: "/duas/family",
    title: "Duas for Family",
    eyebrow: "Home and loved ones",
    description:
      "A place for duas connected to righteous homes, spouses, children, and family well-being.",
    buttonLabel: "Open Family Duas",
  },
  {
    href: "/duas/travel",
    title: "Travel Duas",
    eyebrow: "Journeys and return",
    description:
      "Supplications for departure, travel, reliance upon Allah, and safe return.",
    buttonLabel: "Open Travel Duas",
  },
  {
    href: "/duas/daily-life",
    title: "Daily Life Duas",
    eyebrow: "Ordinary moments",
    description:
      "A growing place for duas connected to daily routines, habits, and moments of ordinary life.",
    buttonLabel: "Open Daily Life Duas",
  },
];

export const aboutSectionCards: JourneyLink[] = [
  {
    href: "/about",
    title: "About",
    eyebrow: "Project intention",
    description:
      "Read the intention, background, and long-term purpose behind this Sadaqah Jariyah project.",
    buttonLabel: "Open About",
  },
  {
    href: "/sources",
    title: "Sources",
    eyebrow: "References and review",
    description:
      "See how Qur’an and hadith references are shown, reviewed, and kept visible across the site.",
    buttonLabel: "Open Sources",
  },
  {
    href: "/disclaimer",
    title: "Disclaimer",
    eyebrow: "Care and verification",
    description:
      "Read the disclaimer about review, AI-assisted production, and the need for careful verification.",
    buttonLabel: "Open Disclaimer",
  },
  {
    href: "/privacy-policy",
    title: "Privacy Policy",
    eyebrow: "Storage and respect",
    description:
      "Review the site’s simple approach to privacy, local storage, and future analytics changes.",
    buttonLabel: "Open Privacy Policy",
  },
  {
    href: "/terms-of-use",
    title: "Terms of Use",
    eyebrow: "Use with care",
    description:
      "Read the terms that frame responsible use, sharing, and verification of religious content.",
    buttonLabel: "Open Terms of Use",
  },
  {
    href: "/cookie-policy",
    title: "Cookie Policy",
    eyebrow: "Minimal storage",
    description:
      "See how the site handles functional storage and lightweight preference saving.",
    buttonLabel: "Open Cookie Policy",
  },
];

export const correctionContact = "salam @ mercyofallah . com";

export const sourceReferences = [
  {
    label: "Quran.com: Surah Al-Baqarah 2:186",
    href: "https://quran.com/2/186",
    note: "Used for the reflection verse on nearness and answered prayer.",
  },
  {
    label: "Quran.com: Surah Al-Baqarah 2:201",
    href: "https://quran.com/2/201",
    note: "Rabbana dua for good in this life and the next.",
  },
  {
    label: "Quran.com: Surah Ali 'Imran 3:8",
    href: "https://quran.com/3/8",
    note: "Rabbana dua asking for steadfast hearts and mercy.",
  },
  {
    label: "Quran.com: Surah Al-Furqan 25:74",
    href: "https://quran.com/25/74",
    note: "Rabbana dua for righteous families.",
  },
  {
    label: "Quran.com: Surah Al-Baqarah 2:286",
    href: "https://quran.com/2/286",
    note: "Supplication for pardon, forgiveness, and mercy.",
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
  {
    label: "HadithUnlocked.com: Abū Dāwūd 1516",
    href: "https://hadithunlocked.com/abudawud:1516",
    note: "An additional hadith reference host the site can display when a card explicitly cites it.",
  },
];

export const whyTheseNightsCards = [
  {
    title: "For your heart",
    text: "Slow down in these nights and give your heart time with the Qur'an, dua, and sincere reflection.",
  },
  {
    title: "For your tongue",
    text: "Keep your tongue busy with Qur’anic duas and reviewed adhkar, especially in the nights when reward is multiplied.",
  },
  {
    title: "For your akhirah",
    text: "Do not let the last 10 nights pass lightly. Fill them with remembrance, repentance, and hope in Allah's mercy.",
  },
];
