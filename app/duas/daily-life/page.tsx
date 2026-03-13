import { TopicalDuasPage } from "@/components/topical-duas-page";
import { dailyLifeDuas } from "@/data/duas";
import { adhkarCategoryCards, rabbanaDuasCard } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Daily Life Duas",
  description:
    "Read reviewed daily-life duas for morning remembrance, increase in knowledge, and asking Allah to set right religion, life, and final return.",
  path: "/duas/daily-life",
});

export default function DailyLifeDuasPage() {
  return (
    <TopicalDuasPage
      eyebrow="Duas"
      title="Daily life duas"
      description="Read reviewed supplications for ordinary moments of life: entering the day with remembrance, asking for more knowledge, and asking Allah to set every part of life right."
      introTitle="Keep everyday moments tied to remembrance"
      introText="Daily life needs duas that can be returned to often without clutter. These supplications keep mornings, learning, work, responsibility, and the final return to Allah connected to remembrance."
      items={dailyLifeDuas}
      relatedCards={[
        adhkarCategoryCards[0],
        adhkarCategoryCards[1],
        rabbanaDuasCard,
      ]}
    />
  );
}
