import Link from "next/link";

import { BackToTopButton } from "@/components/back-to-top-button";
import { CategoryCard } from "@/components/category-card";
import { CorrectionNote } from "@/components/correction-note";
import { DuaCard } from "@/components/dua-card";
import {
  PremiumHeroPanel,
  PremiumPageHero,
} from "@/components/premium-page-hero";
import type { DuaItem, JourneyLink } from "@/lib/types";

type TopicalDuasPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  introTitle: string;
  introText: string;
  items: DuaItem[];
  relatedCards: JourneyLink[];
  heroSummaryEyebrow?: string;
  heroSummaryTitle?: string;
  heroSummaryItems?: string[];
  heroReadingNotes?: string[];
};

const readingNotes = [
  "Arabic with clear harakat",
  "English and Urdu together",
  "Clickable Qur'an and hadith references",
];

export function TopicalDuasPage({
  eyebrow,
  title,
  description,
  introTitle,
  introText,
  items,
  relatedCards,
  heroSummaryEyebrow = "On this page",
  heroSummaryTitle,
  heroSummaryItems,
  heroReadingNotes = readingNotes,
}: TopicalDuasPageProps) {
  const primaryCard = relatedCards[0];
  const summaryItems = heroSummaryItems ?? items.map((item) => item.title);
  const summaryTitle = heroSummaryTitle ?? `${items.length} reviewed duas`;

  return (
    <div id="page-top" className="page-shell space-y-10 pb-16 pt-1 sm:space-y-14 sm:pt-2">
      <PremiumPageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        actions={
          <>
            <Link href="#topic-dua-list" className="button-primary">
              Begin reading
            </Link>
            {primaryCard ? (
              <Link href={primaryCard.href} className="button-secondary">
                {primaryCard.buttonLabel}
              </Link>
            ) : null}
          </>
        }
        aside={
          <>
            <PremiumHeroPanel
              eyebrow={heroSummaryEyebrow}
              title={summaryTitle}
              items={summaryItems}
            />
            <PremiumHeroPanel
              eyebrow="Reading notes"
              title="Keep the source visible"
              items={heroReadingNotes}
              tone="dark"
            />
          </>
        }
      />

      <section className="rounded-[32px] border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-6 shadow-[0_20px_80px_rgba(8,24,19,0.07)] sm:px-8">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">Intro reflection</p>
          <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
            {introTitle}
          </h2>
          <p className="reading-copy text-[var(--muted)]">{introText}</p>
        </div>
      </section>

      <section id="topic-dua-list" className="space-y-6 scroll-mt-28">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">Main dua list</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            Keep these supplications close
          </h2>
          <p className="reading-copy text-[var(--muted)]">
            Each card keeps the Arabic, translation, explanation, and source
            reference together so the reading flow stays calm and easy to
            review.
          </p>
        </div>
        <div className="space-y-5">
          {items.map((item) => (
            <DuaCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">Related sections</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            Continue into related reading
          </h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {relatedCards.map((card) => (
            <CategoryCard key={card.href} {...card} />
          ))}
        </div>
      </section>

      <CorrectionNote plain />
      <BackToTopButton />
    </div>
  );
}
