import Link from "next/link";

import { DuaCard } from "@/components/dua-card";
import {
  PremiumHeroPanel,
  PremiumPageHero,
} from "@/components/premium-page-hero";
import type { DuaItem } from "@/lib/types";

type BenefitCard = {
  title: string;
  text: string;
};

type DailyAdhkarPageProps = {
  tone: "morning" | "evening";
  items: DuaItem[];
  heroLabel: string;
  heroTitle: string;
  heroParagraph: string;
  heroPreviewArabic: string;
  heroPreviewText: string;
  introTitle: string;
  introParagraph: string;
  introSupportingLine: string;
  benefitCards: BenefitCard[];
  listTitle: string;
  listIntro: string;
  reflectionTitle: string;
  reflectionParagraph: string;
  bottomTitle: string;
  bottomParagraph: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  completionStoragePrefix: string;
};

export function DailyAdhkarPage({
  tone,
  items,
  heroLabel,
  heroTitle,
  heroParagraph,
  heroPreviewArabic,
  heroPreviewText,
  introTitle,
  introParagraph,
  introSupportingLine,
  benefitCards,
  listTitle,
  listIntro,
  reflectionTitle,
  reflectionParagraph,
  bottomTitle,
  bottomParagraph,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  completionStoragePrefix,
}: DailyAdhkarPageProps) {
  const featuredItem = items.find((item) => item.featured) ?? items[0];
  const remainingItems = items.filter((item) => item.id !== featuredItem.id);
  const firstGroup = remainingItems.slice(0, 2);
  const secondGroup = remainingItems.slice(2);
  const focusTitle =
    tone === "morning"
      ? "What to keep close at the start of the day"
      : "What to keep close as the day settles";
  const focusLabel = tone === "morning" ? "Morning focus" : "Evening focus";
  const previewLabel =
    tone === "morning" ? "A word to begin with" : "A word to end with";

  return (
    <div className="page-shell space-y-12 py-6 pb-16 sm:space-y-16 sm:py-8">
      <PremiumPageHero
        eyebrow={heroLabel}
        title={heroTitle}
        description={heroParagraph}
        actions={
          <>
            <Link href="#main-adhkar-list" className="button-primary">
              Go to the adhkar list
            </Link>
            <Link href={primaryCtaHref} className="button-secondary">
              {primaryCtaLabel}
            </Link>
          </>
        }
        aside={
          <>
            <PremiumHeroPanel
              eyebrow={focusLabel}
              title={focusTitle}
              items={benefitCards.map((card) => card.title)}
              description={introSupportingLine}
            />
            <PremiumHeroPanel
              eyebrow={previewLabel}
              tone="dark"
            >
              <p className="arabic-sacred reading-arabic-sm text-right text-[var(--foreground)]">
                {heroPreviewArabic}
              </p>
              <p className="reading-copy text-[var(--muted)]">{heroPreviewText}</p>
            </PremiumHeroPanel>
          </>
        }
      />

      <section className="rounded-[32px] border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-8 shadow-[0_20px_56px_rgba(15,23,42,0.05)] sm:px-8">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Reflection</p>
          <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
            {introTitle}
          </h2>
          <p className="reading-copy text-[var(--muted)]">
            {introParagraph}
          </p>
          <p className="reading-copy font-medium text-[var(--foreground)]">
            {introSupportingLine}
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {benefitCards.map((card) => (
          <article
            key={card.title}
            className="rounded-[26px] border border-[var(--border-soft)] bg-[var(--surface)] p-5 shadow-[0_18px_44px_rgba(15,23,42,0.05)]"
          >
            <p className="eyebrow mb-3">{tone === "morning" ? "Morning benefit" : "Evening benefit"}</p>
            <h2 className="text-xl font-semibold text-[var(--foreground)]">
              {card.title}
            </h2>
            <p className="reading-copy mt-3 text-[var(--muted)]">
              {card.text}
            </p>
          </article>
        ))}
      </section>

      <section id="main-adhkar-list" className="space-y-6 scroll-mt-28">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">Main adhkar list</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            {listTitle}
          </h2>
          <p className="reading-copy text-[var(--muted)]">
            {listIntro}
          </p>
        </div>

        <div className="highlight-section rounded-[34px] p-1">
          <div className="relative">
            <DuaCard
              item={featuredItem}
              allowCompletion
              completionStorageKey={`${completionStoragePrefix}:${featuredItem.id}`}
            />
          </div>
        </div>

        <div className="grid gap-6">
          {firstGroup.map((item) => (
            <DuaCard
              key={item.id}
              item={item}
              allowCompletion
              completionStorageKey={`${completionStoragePrefix}:${item.id}`}
            />
          ))}
        </div>
      </section>

      <section className="rounded-[32px] border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-8 shadow-[0_20px_56px_rgba(15,23,42,0.05)] sm:px-8">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Reflection</p>
          <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
            {reflectionTitle}
          </h2>
          <p className="reading-copy text-[var(--muted)]">
            {reflectionParagraph}
          </p>
        </div>
      </section>

      <section className="grid gap-6">
        {secondGroup.map((item) => (
          <DuaCard
            key={item.id}
            item={item}
            allowCompletion
            completionStorageKey={`${completionStoragePrefix}:${item.id}`}
          />
        ))}
      </section>

      <section className="rounded-[34px] border border-[var(--border-soft)] bg-[var(--surface)] px-6 py-8 shadow-[0_20px_56px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="eyebrow">Next step</p>
            <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-5xl">
              {bottomTitle}
            </h2>
            <p className="reading-copy max-w-2xl text-[var(--muted)]">
              {bottomParagraph}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link href={primaryCtaHref} className="button-primary">
              {primaryCtaLabel}
            </Link>
            <Link href={secondaryCtaHref} className="button-secondary">
              {secondaryCtaLabel}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
