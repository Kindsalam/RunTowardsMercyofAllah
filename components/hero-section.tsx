"use client";

import Link from "next/link";
import { useState } from "react";

import { lastTenNights } from "@/data/last-ten-nights";
import { rabbanaDuas } from "@/data/rabbana-duas";
import { buildSourceLinks } from "@/lib/source-links";

const morningHeroDua = {
  id: "hero-tirmidhi-3524",
  title: "Ya Hayyu Ya Qayyum",
  arabic: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ",
  english: "O Ever-Living, O Sustainer, in Your mercy I seek relief.",
  sourceReference: "Jami` at-Tirmidhi 3524",
};

const featuredHeroDuas = [
  {
    key: "rabbana",
    label: "Rabbana",
    item: rabbanaDuas.find((dua) => dua.id === "rabbana-2-201") ?? rabbanaDuas[0],
    href: "/rabbana-duas#rabbana-2-201",
  },
  {
    key: "morning",
    label: "Morning",
    item: morningHeroDua,
    href: "/morning-adhkar",
  },
  {
    key: "laylatul-qadr",
    label: "Laylatul Qadr",
    item:
      lastTenNights.find((dua) => dua.id === "laylatul-qadr-dua") ??
      lastTenNights[0],
    href: "/last-ten-nights#laylatul-qadr-dua",
  },
] as const;

export function HeroSection() {
  const [activeKey, setActiveKey] = useState<(typeof featuredHeroDuas)[number]["key"]>(
    "laylatul-qadr",
  );
  const activeDua =
    featuredHeroDuas.find((entry) => entry.key === activeKey) ?? featuredHeroDuas[0];
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
    <section className="relative overflow-hidden rounded-[34px] border border-[var(--border-soft)] bg-[linear-gradient(160deg,rgba(9,43,33,0.96)_0%,rgba(18,71,53,0.92)_48%,rgba(201,171,103,0.22)_100%)] px-5 py-8 text-white shadow-[0_30px_120px_rgba(6,20,15,0.22)] sm:px-8 sm:py-10 lg:px-12 lg:py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,246,214,0.2)_0%,_transparent_36%),radial-gradient(circle_at_bottom_left,_rgba(201,171,103,0.18)_0%,_transparent_34%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />
      {stars.map((position) => (
        <span
          key={position}
          className={`absolute ${position} h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_18px_rgba(255,255,255,0.65)]`}
        />
      ))}

      <div className="relative grid gap-8 lg:grid-cols-[minmax(0,28rem)_minmax(0,1fr)] lg:items-center lg:gap-10">
        <div className="max-w-[27rem] space-y-6">
          <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white/80 backdrop-blur">
            Authentic Duas and Adhkar
          </div>
          <h1 className="font-display text-4xl leading-[0.96] sm:text-5xl lg:text-[3.7rem]">
            Remember Allah with authentic duas and adhkar
          </h1>
          <p className="max-w-md text-sm leading-7 text-white/82 sm:text-base">
            Read Qur’anic duas and authentic adhkar in Arabic, English, and Urdu.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/last-ten-nights" className="button-light sm:min-w-[10.5rem]">
              Explore Duas
            </Link>
            <Link
              href="/rabbana-duas"
              className="button-ghost-light sm:min-w-[10.5rem]"
            >
              Read Rabbana Duas
            </Link>
          </div>
          <p className="text-sm leading-6 text-white/74">
            Qur’an and authentic Sunnah only.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,246,214,0.58)_0%,_rgba(255,246,214,0.12)_36%,_transparent_66%)] blur-xl" />
          <div className="relative mx-auto max-w-md rounded-[28px] border border-white/15 bg-white/10 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.12)] backdrop-blur-md sm:p-5">
            <div className="rounded-[24px] border border-white/12 bg-black/12 p-5 sm:p-6">
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
                  <h2 className="text-lg font-medium leading-snug text-white sm:text-xl">
                    {activeDua.item.title}
                  </h2>
                  <p
                    dir="rtl"
                    lang="ar"
                    className="arabic-text text-right text-[calc(1.9rem*var(--dua-scale))] leading-[1.85] text-white sm:text-[calc(2.15rem*var(--dua-scale))]"
                  >
                    {activeDua.item.arabic}
                  </p>
                  <p className="text-sm leading-7 text-white/78">
                    {activeDua.item.english}
                  </p>
                </div>
                <div className="border-t border-white/10 pt-3">
                  {primarySource?.href ? (
                    <Link
                      href={primarySource.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-white/76 underline decoration-white/30 underline-offset-4 transition hover:text-white"
                    >
                      {primarySource.label}
                    </Link>
                  ) : (
                    <p className="text-sm text-white/76">
                      {activeDua.item.sourceReference}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {featuredHeroDuas.map((entry) => {
                const active = entry.key === activeKey;

                return (
                  <button
                    key={entry.key}
                    type="button"
                    onClick={() => setActiveKey(entry.key)}
                    className={`rounded-full border px-3 py-2 text-sm transition ${
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
