import { TopicalDuasPage } from "@/components/topical-duas-page";
import { forgivenessDuas } from "@/data/duas";
import { duaCategoryCards, rabbanaDuasCard } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Duas for Forgiveness",
  description:
    "Read reviewed duas for tawbah, pardon, and forgiveness with Arabic, English, Urdu, and visible Qur'an and hadith references.",
  path: "/duas/forgiveness",
});

export default function ForgivenessDuasPage() {
  return (
    <TopicalDuasPage
      eyebrow="Duas"
      title="Duas for forgiveness"
      description="Read reviewed supplications for repentance, confession, pardon, and asking Allah to forgive sins and accept return."
      introTitle="Return to Allah with repentance and hope"
      introText="These duas gather Qur'anic forgiveness, Sayyid al-Istighfar, and a short prophetic istighfar that can be repeated often. Keep them close in moments of tawbah and whenever the heart needs to return."
      items={forgivenessDuas}
      relatedCards={[
        rabbanaDuasCard,
        duaCategoryCards[1],
        duaCategoryCards[7],
      ]}
    />
  );
}
