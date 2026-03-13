import { TopicalDuasPage } from "@/components/topical-duas-page";
import { shifaDuas } from "@/data/topical-duas";
import { adhkarCategoryCards, quranCategoryCards } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Duas for Shifa",
  description:
    "Read reviewed duas for shifa and relief in Arabic with English and Urdu translation, visible Qur'an and hadith references, and clickable source links.",
  path: "/duas/shifa",
});

export default function ShifaDuasPage() {
  return (
    <TopicalDuasPage
      eyebrow="Duas"
      title="Duas for shifa"
      description="Read reviewed supplications for healing, pain, hardship, and asking Allah for relief and cure."
      introTitle="Turn to Allah for healing with humility and hope"
      introText="These duas gather a Qur'anic call from Prophet Ayyub and Prophetic words of ruqyah and refuge. Read them with certainty that healing and relief are in Allah's hand alone."
      items={shifaDuas}
      relatedCards={[
        adhkarCategoryCards[3],
        quranCategoryCards[0],
        adhkarCategoryCards[1],
      ]}
    />
  );
}
