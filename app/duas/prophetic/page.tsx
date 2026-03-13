import { TopicalDuasPage } from "@/components/topical-duas-page";
import { propheticQuranDuas } from "@/data/duas";
import { duaCategoryCards, rabbanaDuasCard } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Prophetic Duas",
  description:
    "Read direct supplications of the Prophets from the Qur'an in Arabic, English, and Urdu with visible ayah references and Quran.com links.",
  path: "/duas/prophetic",
});

export default function PropheticDuasPage() {
  return (
    <TopicalDuasPage
      eyebrow="Duas"
      title="Prophetic duas from the Qur'an"
      description="Read direct supplications made by Prophets in the Qur'an, kept together with Arabic, translation, and visible Quran.com references."
      introTitle="Direct supplications of the Prophets, preserved in the Qur'an"
      introText="These cards gather dua words spoken by Prophets across forgiveness, hardship, knowledge, gratitude, protection, prayer, and children. Each card keeps the Qur'anic Arabic and Quran.com translations together so the source stays visible while you read."
      items={propheticQuranDuas}
      heroSummaryEyebrow="Highlights"
      heroSummaryTitle="30 reviewed duas"
      heroSummaryItems={[
        "Forgiveness, mercy, hardship, and guidance",
        "Children, gratitude, knowledge, and protection",
        "Direct supplications of the Prophets",
        "Every card links straight to Quran.com",
      ]}
      heroReadingNotes={[
        "Arabic with clear harakat",
        "English and Urdu together",
        "Clickable Quran.com references",
      ]}
      relatedCards={[
        rabbanaDuasCard,
        duaCategoryCards[2],
        duaCategoryCards[3],
      ]}
    />
  );
}
