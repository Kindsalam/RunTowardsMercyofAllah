import { DailyAdhkarPage } from "@/components/daily-adhkar-page";
import { morningAdhkar } from "@/data/morning-adhkar";

const benefitCards = [
  {
    title: "Protection",
    text: "Begin the day asking Allah to keep you safe from harm and loss.",
  },
  {
    title: "Gratitude",
    text: "Start the morning by remembering the One who gave you life, time, and another day.",
  },
  {
    title: "Steadiness",
    text: "Anchor your heart before the noise of the day begins.",
  },
];

export function MorningAdhkarPage() {
  return (
    <DailyAdhkarPage
      tone="morning"
      items={morningAdhkar}
      heroLabel="Authentic Daily Remembrance"
      heroTitle="Morning Adhkar"
      heroParagraph="Begin your day with remembrance, protection, gratitude, and trust in Allah. Read authentic morning adhkar in Arabic with full harakat, along with English and Urdu translation, in a calm and easy mobile-friendly layout."
      heroPreviewArabic="أَصْبَحْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَعَلَى كَلِمَةِ الْإِخْلَاصِ"
      heroPreviewText="Let the first words of the day draw the heart back to gratitude, reliance, and calm."
      introTitle="Start the day with what benefits the heart"
      introParagraph="The morning is the start of your day, your work, your plans, and your worries. Beginning it with remembrance of Allah brings protection, steadiness, gratitude, and peace. Even a few sincere moments each morning can shape the rest of the day."
      introSupportingLine="Read a little with consistency rather than rushing through a lot without presence."
      benefitCards={benefitCards}
      listTitle="Morning words to keep close"
      listIntro="This starter page is intentionally seeded with a small structured set only, so the full verified morning adhkar collection can be added later without changing the page design."
      reflectionTitle="Small words, repeated with sincerity"
      reflectionParagraph="Morning adhkar are not long for the sake of length. Their value is in truthfulness, consistency, and presence of heart. A believer begins the day by remembering Allah, asking for good, and seeking protection before stepping into the duties of life."
      bottomTitle="Carry remembrance into the rest of your day"
      bottomParagraph="Return to these words every morning and let them become part of your routine. What begins with remembrance is more likely to stay grounded, grateful, and protected."
      primaryCtaLabel="Open Evening Adhkar"
      primaryCtaHref="/evening-adhkar"
      secondaryCtaLabel="Read Rabbana Duas"
      secondaryCtaHref="/rabbana-duas"
      completionStoragePrefix="morning-read"
    />
  );
}
