import { TopicalDuasPage } from "@/components/topical-duas-page";
import { familyDuas } from "@/data/duas";
import { adhkarCategoryCards, duaCategoryCards, rabbanaDuasCard } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Duas for Family",
  description:
    "Read reviewed duas for spouses, children, protection, and barakah in family life with Arabic, English, Urdu, and visible source links.",
  path: "/duas/family",
});

export default function FamilyDuasPage() {
  return (
    <TopicalDuasPage
      eyebrow="Duas"
      title="Duas for family"
      description="Read reviewed supplications for spouses, children, righteous homes, protection, mercy, and barakah in family life."
      introTitle="Ask Allah for righteous homes and protected hearts"
      introText="These duas gather a Qur'anic prayer for family joy, a prophetic protection dua for children, and a prophetic supplication for barakah, forgiveness, and mercy in what Allah provides."
      items={familyDuas}
      relatedCards={[
        rabbanaDuasCard,
        duaCategoryCards[7],
        adhkarCategoryCards[0],
      ]}
    />
  );
}
