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
  const stars = [
    "left-[9%] top-[18%]",
    "left-[28%] top-[11%]",
    "left-[63%] top-[16%]",
    "left-[85%] top-[24%]",
    "left-[14%] top-[68%]",
    "left-[54%] top-[76%]",
    "left-[78%] top-[62%]",
  ];

  return (
    <section className="relative overflow-hidden rounded-[34px] border border-[var(--border-soft)] bg-[linear-gradient(160deg,rgba(9,43,33,0.96)_0%,rgba(18,71,53,0.92)_48%,rgba(201,171,103,0.22)_100%)] px-5 py-5 text-white shadow-[0_30px_120px_rgba(6,20,15,0.22)] sm:px-8 sm:py-6 lg:px-10 lg:py-7">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,246,214,0.2)_0%,_transparent_36%),radial-gradient(circle_at_bottom_left,_rgba(201,171,103,0.18)_0%,_transparent_34%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />
      {stars.map((position) => (
        <span
          key={position}
          className={`absolute ${position} h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_18px_rgba(255,255,255,0.65)]`}
        />
      ))}

      <div className="relative grid gap-5 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:items-center lg:gap-8 xl:grid-cols-[minmax(0,23rem)_minmax(0,1fr)]">
        <div className="max-w-[23rem] space-y-4">
          <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white/80 backdrop-blur">
            Reviewed Duas and Adhkar
          </div>
          <h1 className="font-display text-[3rem] leading-[0.92] sm:text-[3.35rem] lg:text-[4rem]">
            Remember Allah with Qur&apos;anic duas and daily adhkar
          </h1>
          <p className="reading-copy max-w-md text-white/82">
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
          <p className="reading-copy-compact text-white/74">
            A carefully reviewed starting collection, expanding over time.
          </p>
        </div>

        <div className="relative lg:flex lg:justify-end lg:pl-2">
          <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,246,214,0.58)_0%,_rgba(255,246,214,0.12)_36%,_transparent_66%)] blur-xl" />
          <div className="relative mx-auto w-full max-w-[25rem] rounded-[28px] border border-white/15 bg-white/10 p-3.5 shadow-[0_20px_70px_rgba(0,0,0,0.12)] backdrop-blur-md sm:max-w-[27rem] sm:p-4 lg:mx-0 lg:max-w-[31rem]">
            <div className="rounded-[24px] border border-white/12 bg-black/14 p-5 sm:p-6 lg:p-7">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="eyebrow text-white/70">{activeDua.label}</p>
                  <Link
                    href={activeDua.href}
                    className="text-xs text-white/72 transition hover:text-white"
                  >
                    Open
                  </Link>
                </div>
                <div className="space-y-3">
                  <h2 className="text-lg font-medium leading-snug text-white sm:text-[1.35rem]">
                    {activeDua.item.title}
                  </h2>
                  <p
                    dir="rtl"
                    lang="ar"
                    className={`${activeArabicClassName} text-right text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.18)]`}
                  >
                    {activeDua.item.arabic}
                  </p>
                  <p className="reading-copy max-w-[33ch] text-white/88">
                    {activeDua.item.english}
                  </p>
                </div>
                <div className="border-t border-white/10 pt-2.5">
                  {primarySource?.href ? (
                    <Link
                      href={primarySource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.95rem] text-white/82 underline decoration-white/30 underline-offset-4 transition hover:text-white"
                    >
                      {primarySource.label}
                    </Link>
                  ) : (
                    <p className="text-[0.95rem] text-white/82">
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
                        ? "border-white/25 bg-white text-[#0f3b2e]"
                        : "border-white/15 bg-white/8 text-white/78 hover:bg-white/14 hover:text-white"
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
