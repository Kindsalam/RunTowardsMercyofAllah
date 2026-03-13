import { TopicalDuasPage } from "@/components/topical-duas-page";
import { rizqDuas } from "@/data/duas";
import { duaCategoryCards, rabbanaDuasCard } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Duas for Rizq",
  description:
    "Read reviewed duas for provision, barakah, halal sufficiency, and goodness in this life and the next with visible source links.",
  path: "/duas/rizq",
});

export default function RizqDuasPage() {
  return (
    <TopicalDuasPage
      eyebrow="Duas"
      title="Duas for rizq"
      description="Read reviewed supplications for halal provision, sufficiency, barakah, and goodness in both dunya and akhirah."
      introTitle="Ask Allah for provision with trust and restraint"
      introText="These duas ask for more than money alone. They ask for wholesome provision, accepted deeds, protection from haram, and lasting goodness in this life and the next."
      items={rizqDuas}
      relatedCards={[
        rabbanaDuasCard,
        duaCategoryCards[7],
        duaCategoryCards[5],
      ]}
    />
  );
}
