import Link from "next/link";

import { DuaCard } from "@/components/dua-card";
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

const toneClasses = {
  morning: {
    hero:
      "bg-[linear-gradient(180deg,color-mix(in_srgb,var(--surface)_84%,rgba(201,171,103,0.12)_16%),var(--surface))] shadow-[0_24px_90px_rgba(8,24,19,0.08)]",
    overlay:
      "bg-[radial-gradient(circle_at_top_right,_rgba(201,171,103,0.18)_0%,_transparent_34%),radial-gradient(circle_at_bottom_left,_rgba(16,77,57,0.09)_0%,_transparent_36%)]",
    previewGlow:
      "bg-[radial-gradient(circle,_rgba(201,171,103,0.28)_0%,_rgba(201,171,103,0.08)_36%,_transparent_68%)]",
    previewCard: "bg-[var(--surface)]/95 border-[var(--border-soft)]",
    previewAccent: "bg-[var(--accent-soft)] border-[var(--border-soft)]",
    previewText: "text-[var(--foreground)]",
    previewNote: "bg-[var(--background)] text-[var(--muted)] border-[var(--border-soft)]",
  },
  evening: {
    hero:
      "bg-[linear-gradient(155deg,rgba(8,20,15,0.96)_0%,rgba(16,46,36,0.94)_54%,rgba(201,171,103,0.18)_100%)] text-white shadow-[0_30px_120px_rgba(4,12,9,0.24)]",
    overlay:
      "bg-[radial-gradient(circle_at_top_right,_rgba(255,244,214,0.14)_0%,_transparent_32%),radial-gradient(circle_at_bottom_left,_rgba(201,171,103,0.14)_0%,_transparent_36%)]",
    previewGlow:
      "bg-[radial-gradient(circle,_rgba(255,244,214,0.34)_0%,_rgba(255,244,214,0.08)_36%,_transparent_68%)]",
    previewCard: "bg-white/10 border-white/15 backdrop-blur-md",
    previewAccent: "bg-white/10 border-white/20",
    previewText: "text-white",
    previewNote: "bg-black/10 text-white/78 border-white/10",
  },
} as const;

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
  const classes = toneClasses[tone];

  return (
    <div className="page-shell space-y-12 py-6 pb-16 sm:space-y-16 sm:py-8">
      <section
        className={`relative overflow-hidden rounded-[34px] border border-[var(--border-soft)] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 ${classes.hero}`}
      >
        <div className={`absolute inset-0 ${classes.overlay}`} />
        {tone === "evening" ? (
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />
        ) : null}
        <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl space-y-4">
            <p
              className={
                tone === "evening"
                  ? "inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white/80 backdrop-blur"
                  : "eyebrow"
              }
            >
              {heroLabel}
            </p>
            <h1
              className={`font-display text-4xl leading-none sm:text-5xl lg:text-6xl ${
                tone === "evening" ? "text-white" : "text-[var(--foreground)]"
              }`}
            >
              {heroTitle}
            </h1>
            <p
              className={`reading-copy max-w-2xl ${
                tone === "evening" ? "text-white/82" : "text-[var(--muted)]"
              }`}
            >
              {heroParagraph}
            </p>
          </div>

          <div className="relative">
            <div
              className={`absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl ${classes.previewGlow}`}
            />
            <div
              className={`relative mx-auto max-w-sm rounded-[28px] border p-5 shadow-[0_20px_70px_rgba(8,24,19,0.06)] ${classes.previewCard}`}
            >
              <div className="space-y-4">
                <div
                  className={`h-11 w-11 rounded-full border ${classes.previewAccent}`}
                />
                <p
                  className={`arabic-text reading-arabic-sm text-right ${classes.previewText}`}
                >
                  {heroPreviewArabic}
                </p>
                <div
                  className={`reading-copy rounded-[22px] border p-4 ${classes.previewNote}`}
                >
                  {heroPreviewText}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[32px] border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-8 shadow-[0_20px_80px_rgba(8,24,19,0.07)] sm:px-8">
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
            className="rounded-[26px] border border-[var(--border-soft)] bg-[var(--surface)]/95 p-5 shadow-[0_18px_60px_rgba(8,24,19,0.06)]"
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

      <section className="space-y-6">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">Main adhkar list</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            {listTitle}
          </h2>
          <p className="reading-copy text-[var(--muted)]">
            {listIntro}
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[34px] border border-[var(--border-soft)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--surface)_82%,rgba(201,171,103,0.12)_18%),var(--surface))] p-1 shadow-[0_24px_90px_rgba(8,24,19,0.08)]">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,_rgba(201,171,103,0.22)_0%,_transparent_70%)]" />
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

      <section className="rounded-[32px] border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-8 shadow-[0_20px_80px_rgba(8,24,19,0.07)] sm:px-8">
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

      <section className="overflow-hidden rounded-[34px] border border-[var(--border-soft)] bg-[linear-gradient(135deg,var(--surface),color-mix(in_srgb,var(--surface)_74%,rgba(201,171,103,0.24)_26%))] px-6 py-8 sm:px-8 sm:py-10">
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
