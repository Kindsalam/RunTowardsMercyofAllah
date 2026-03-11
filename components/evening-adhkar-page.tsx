import { DailyAdhkarPage } from "@/components/daily-adhkar-page";
import { eveningAdhkar } from "@/data/evening-adhkar";

const benefitCards = [
  {
    title: "Protection through the night",
    text: "Ask Allah to guard you, your family, and your home as the night begins.",
  },
  {
    title: "Reflection",
    text: "The evening is a moment to pause, reflect on the day, and seek forgiveness.",
  },
  {
    title: "Peace of heart",
    text: "Remembering Allah settles the heart before rest.",
  },
];

export function EveningAdhkarPage() {
  return (
    <DailyAdhkarPage
      tone="evening"
      items={eveningAdhkar}
      heroLabel="Authentic Daily Remembrance"
      heroTitle="Evening Adhkar"
      heroParagraph="Close your day with remembrance, protection, gratitude, and reflection. Read authentic evening adhkar in Arabic with full harakat, with English and Urdu translation, in a calm and simple layout designed for phone reading."
      heroPreviewArabic="أَمْسَيْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَعَلَى كَلِمَةِ الْإِخْلَاصِ"
      heroPreviewText="Let the final words of the day return the heart to calm, gratitude, and trust."
      introTitle="End the day with remembrance"
      introParagraph="Every day carries effort, mistakes, success, and worry. Ending the evening with remembrance helps the heart return to calm, gratitude, and reliance upon Allah."
      introSupportingLine="Let the final words of your day be words of remembrance."
      benefitCards={benefitCards}
      listTitle="Evening words to keep close"
      listIntro="This starter page is intentionally seeded with a small structured set only, so the full verified evening adhkar collection can be added later without changing the page design."
      reflectionTitle="Before the day closes"
      reflectionParagraph="Before sleep, the believer remembers Allah, asks forgiveness for mistakes, and places trust in the One who protects through the night. Ending the day with remembrance softens the heart and brings peace."
      bottomTitle="Return tomorrow with remembrance"
      bottomParagraph="Begin the next morning again with remembrance and gratitude. Small daily habits build a strong and steady heart."
      primaryCtaLabel="Open Morning Adhkar"
      primaryCtaHref="/morning-adhkar"
      secondaryCtaLabel="Read Rabbana Duas"
      secondaryCtaHref="/rabbana-duas"
      completionStoragePrefix="evening-read"
    />
  );
}
