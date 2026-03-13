"use client";

import { useState } from "react";

import { DuaSources } from "@/components/dua-sources";
import { SacredArabicText } from "@/components/sacred-arabic-text";
import Link from "next/link";

type HeroFeature = {
  key: string;
  label: string;
  title: string;
  supportingLine: string;
  href: string;
  ctaLabel: string;
  snippet?: {
    id: string;
    arabic: string;
    english: string;
    sourceReference: string;
    sourceUrl?: string;
  };
};

type HeroSectionProps = {
  featuredItems: HeroFeature[];
};

function getHeroArabicSize(key: string, arabic: string) {
  if (key === "rabbana") {
    return arabic.length > 120 ? "lg" : "quran";
  }

  if (arabic.length > 180) {
    return "md";
  }

  if (arabic.length > 90) {
    return "lg";
  }

  return "hero";
}

export function HeroSection({ featuredItems }: HeroSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  function goToIndex(index: number) {
    setActiveIndex(index);
  }
  return (
    <section className="highlight-section rounded-[34px] px-5 py-5 text-[var(--foreground)] sm:px-8 sm:py-6 lg:px-10 lg:py-7">
      <div className="relative grid gap-5 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:items-center lg:gap-8 xl:grid-cols-[minmax(0,23rem)_minmax(0,1fr)]">
        <div className="max-w-[23rem] space-y-4">
          <div className="brand-chip inline-flex rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.24em]">
            Reviewed Duas and Adhkar
          </div>
          <h1 className="font-display text-[3rem] leading-[0.92] sm:text-[3.35rem] lg:text-[4rem]">
            Remember Allah with Qur&apos;anic duas and daily adhkar
          </h1>
          <p className="reading-copy max-w-md text-[var(--muted)]">
            Read Qur&apos;anic duas and a reviewed set of hadith-based adhkar in
            Arabic, English, and Urdu.
          </p>
          <div className="flex flex-col gap-2.5 sm:flex-row">
            <Link href="/duas" className="button-light sm:min-w-[10rem]">
              Explore Duas
            </Link>
            <Link
              href="/quran/rabbana-duas"
              className="button-ghost-light sm:min-w-[10rem]"
            >
              Read Rabbana Duas
            </Link>
          </div>
          <p className="reading-copy-compact text-[var(--muted)]">
            A carefully reviewed starting collection, expanding over time.
          </p>
        </div>

        <div className="relative lg:flex lg:justify-end lg:pl-2">
          <div className="highlight-card relative mx-auto w-full max-w-[26rem] overflow-hidden rounded-[28px] p-3.5 sm:max-w-[29rem] sm:p-4 lg:mx-0 lg:max-w-[34rem]">
            <div className="rounded-[24px] border border-[var(--brand-border)] bg-[var(--surface-subtle)] p-4 sm:p-5 lg:p-6">
              <div className="relative h-[24rem] sm:h-[26rem]">
                {featuredItems.map((entry, index) => {
                  const isActive = index === activeIndex;
                  const arabicSize = entry.snippet
                    ? getHeroArabicSize(entry.key, entry.snippet.arabic)
                    : "hero";

                  return (
                    <div
                      key={entry.key}
                      className={`absolute inset-0 flex flex-col transition-opacity duration-300 ${
                        isActive
                          ? "opacity-100"
                          : "pointer-events-none opacity-0"
                      }`}
                      aria-hidden={!isActive}
                    >
                      <div className="flex h-full flex-col">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between gap-3">
                            <p className="eyebrow">{entry.label}</p>
                            <Link
                              href={entry.href}
                              className="text-sm text-[var(--brand-ink)] underline decoration-[var(--brand-border)] underline-offset-4 transition hover:text-[var(--brand)]"
                            >
                              Open
                            </Link>
                          </div>
                          <h2 className="text-lg font-medium leading-snug text-[var(--foreground)] sm:text-[1.45rem]">
                            {entry.title}
                          </h2>
                        </div>

                        <div className="mt-4 min-h-0 flex-1">
                          {entry.snippet ? (
                            <Link
                              href={entry.href}
                              className="flex h-full min-h-0 items-stretch overflow-hidden rounded-[22px] border border-[var(--border-soft)] bg-[var(--surface)] px-4 py-5 transition hover:border-[var(--brand-border-strong)] sm:px-5 sm:py-6"
                            >
                              <div className="w-full overflow-y-auto pr-1">
                                <SacredArabicText
                                  size={arabicSize}
                                  className="w-full text-[var(--foreground)]"
                                >
                                  {entry.snippet.arabic}
                                </SacredArabicText>
                              </div>
                            </Link>
                          ) : null}
                        </div>

                        {entry.snippet ? (
                          <div className="mt-3 flex items-center justify-between gap-3 border-t border-[var(--border-soft)] pt-3">
                            <DuaSources
                              variant="compact"
                              sourceReference={entry.snippet.sourceReference}
                              sourceUrl={entry.snippet.sourceUrl}
                            />
                            <p className="shrink-0 text-xs text-[var(--muted)]">
                              {index + 1} / {featuredItems.length}
                            </p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {featuredItems.map((entry, index) => {
                const active = index === activeIndex;

                return (
                  <button
                    key={entry.key}
                    type="button"
                    onClick={() => goToIndex(index)}
                    className={`rounded-full border px-3 py-1.5 text-sm transition ${
                      active
                        ? "border-[var(--brand-border-strong)] bg-[var(--brand)] text-white shadow-[0_10px_24px_rgb(var(--brand-rgb)/0.18)]"
                        : "border-[var(--brand-border)] bg-[var(--surface)] text-[var(--brand-ink)] hover:bg-[var(--brand-surface)] hover:border-[var(--brand-border-strong)]"
                    }`}
                    aria-pressed={active}
                    aria-label={`Show featured section: ${entry.title}`}
                  >
                    {entry.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
