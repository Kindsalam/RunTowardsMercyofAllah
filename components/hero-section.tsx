"use client";

import Link from "next/link";
import { useState } from "react";

import { buildSourceLinks } from "@/lib/source-links";
type HeroFeature = {
  key: "rabbana" | "morning" | "laylatul-qadr" | "reminder";
  label: string;
  href: string;
  item: {
    id: string;
    title: string;
    arabic: string;
    english: string;
    sourceReference: string;
  };
};

type HeroSectionProps = {
  featuredItems: HeroFeature[];
};

export function HeroSection({ featuredItems }: HeroSectionProps) {
  const [activeKey, setActiveKey] =
    useState<(typeof featuredItems)[number]["key"]>("laylatul-qadr");
  const activeDua =
    featuredItems.find((entry) => entry.key === activeKey) ?? featuredItems[0];
  const activeArabicClassName =
    activeDua.key === "rabbana" || activeDua.key === "reminder"
      ? "arabic-quran reading-arabic-quran"
      : "arabic-sacred reading-arabic-sm sm:reading-arabic-hero";
  const primarySource = buildSourceLinks(activeDua.item.sourceReference).find(
    (link) => link.href,
  );
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
          <div className="highlight-card relative mx-auto w-full max-w-[25rem] rounded-[28px] p-3.5 sm:max-w-[27rem] sm:p-4 lg:mx-0 lg:max-w-[31rem]">
            <div className="rounded-[24px] border border-[var(--brand-border)] bg-[var(--surface-subtle)] p-5 sm:p-6 lg:p-7">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="eyebrow">{activeDua.label}</p>
                  <Link
                    href={activeDua.href}
                    className="text-xs text-[var(--muted)] transition hover:text-[var(--brand)]"
                  >
                    Open
                  </Link>
                </div>
                <div className="space-y-3">
                  <h2 className="text-lg font-medium leading-snug text-[var(--foreground)] sm:text-[1.35rem]">
                    {activeDua.item.title}
                  </h2>
                  <p
                    dir="rtl"
                    lang="ar"
                    className={`${activeArabicClassName} text-right text-[var(--foreground)]`}
                  >
                    {activeDua.item.arabic}
                  </p>
                  <p className="reading-copy max-w-[33ch] text-[var(--muted)]">
                    {activeDua.item.english}
                  </p>
                </div>
                <div className="border-t border-[var(--border-soft)] pt-2.5">
                  {primarySource?.href ? (
                    <Link
                      href={primarySource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.95rem] text-[var(--brand-ink)] underline decoration-[var(--brand-border)] underline-offset-4 transition hover:text-[var(--brand)]"
                    >
                      {primarySource.label}
                    </Link>
                  ) : (
                    <p className="text-[0.95rem] text-[var(--muted)]">
                      {activeDua.item.sourceReference}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-2.5 flex flex-wrap gap-2">
              {featuredItems.map((entry) => {
                const active = entry.key === activeKey;

                return (
                  <button
                    key={entry.key}
                    type="button"
                    onClick={() => setActiveKey(entry.key)}
                    className={`rounded-full border px-3 py-1.5 text-sm transition ${
                      active
                        ? "border-[var(--brand-border-strong)] bg-[var(--brand)] text-white shadow-[0_10px_24px_rgb(var(--brand-rgb)/0.18)]"
                        : "border-[var(--brand-border)] bg-[var(--surface)] text-[var(--brand-ink)] hover:bg-[var(--brand-surface)] hover:border-[var(--brand-border-strong)]"
                    }`}
                    aria-pressed={active}
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
