import { TopicalDuasPage } from "@/components/topical-duas-page";
import { travelDuas } from "@/data/topical-duas";
import { adhkarCategoryCards, duaCategoryCards } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Travel Duas",
  description:
    "Read reviewed travel duas for departure, halting, and return with Arabic, English, Urdu, and clickable Sunnah references.",
  path: "/duas/travel",
});

export default function TravelDuasPage() {
  return (
    <TopicalDuasPage
      eyebrow="Duas"
      title="Travel duas"
      description="Read reviewed supplications for setting out, halting safely during travel, and returning with repentance and praise."
      introTitle="Travel with remembrance and reliance upon Allah"
      introText="These duas keep journeys connected to tawhid, piety, ease, protection, and thankful return. They are useful for departure, for stopping at a place, and for the return home."
      items={travelDuas}
      relatedCards={[
        adhkarCategoryCards[4],
        adhkarCategoryCards[0],
        duaCategoryCards[6],
      ]}
    />
  );
}
