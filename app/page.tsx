import Link from "next/link";

import { CategoryCard } from "@/components/category-card";
import { DuaCard } from "@/components/dua-card";
import { HeroSection } from "@/components/hero-section";
import { ReflectionSection } from "@/components/reflection-section";
import {
  homeMorningHeroDua,
  propheticQuranDuas,
  shifaDuas,
} from "@/data/duas";
import { journeyLinks, whyTheseNightsCards } from "@/lib/content";
import { publicLastTenNights, publicRabbanaDuas } from "@/lib/public-content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Qur'anic Duas and Adhkar",
  description:
    "Read reviewed Qur'anic duas, daily adhkar, and last-ten-nights reminders in Arabic, English, and Urdu with clear source references.",
  path: "/",
});

export default function HomePage() {
  const featuredDua =
    publicLastTenNights.find((item) => item.featured) ?? publicLastTenNights[0];
  const rabbanaFeature =
    publicRabbanaDuas.find((dua) => dua.id === "rabbana-2-201") ??
    publicRabbanaDuas[0];
  const healingFeature =
    shifaDuas.find((dua) => dua.id === "shifa-bukhari-5742") ?? shifaDuas[0];
  const laylatulQadrFeature =
    publicLastTenNights.find((dua) => dua.id === "laylatul-qadr-dua") ??
    publicLastTenNights[0];
  const hardshipFeature =
    propheticQuranDuas.find((dua) => dua.id === "prophetic-21-87") ??
    propheticQuranDuas[0];
  const featuredHeroItems = [
    {
      key: "rabbana",
      label: "Rabbana",
      title: "Rabbana duas from the Qur'an",
      supportingLine:
        "Begin with beloved Qur'anic supplications for goodness, mercy, guidance, and steadfastness.",
      href: "/quran/rabbana-duas#rabbana-2-201",
      ctaLabel: "Open Rabbana Duas",
      snippet: rabbanaFeature,
    },
    {
      key: "daily-adhkar",
      label: "Daily Adhkar",
      title: "Morning and evening adhkar",
      supportingLine:
        "Keep daily remembrance close for protection, gratitude, and steadiness at both ends of the day.",
      href: "/adhkar",
      ctaLabel: "Open Daily Adhkar",
      snippet: homeMorningHeroDua,
    },
    {
      key: "healing",
      label: "Healing",
      title: "Healing duas for shifa and relief",
      supportingLine:
        "Return to concise supplications for pain, illness, ruqyah, and hope in Allah's healing.",
      href: "/duas/shifa",
      ctaLabel: "Open Healing Duas",
      snippet: healingFeature,
    },
    {
      key: "last-ten-nights",
      label: "Last 10 Nights",
      title: "Dua for Laylatul Qadr",
      supportingLine:
        "Keep this beloved dua close in the search for Laylatul Qadr during the final nights of Ramadan.",
      href: "/last-ten-nights#laylatul-qadr-dua",
      ctaLabel: "Open Last 10 Nights",
      snippet: laylatulQadrFeature,
    },
    {
      key: "hardship",
      label: "Hardship",
      title: "Distress and hardship duas",
      supportingLine:
        "Turn to prophetic words of tawhid, repentance, and relief when the heart feels tight.",
      href: "/duas/prophetic#prophetic-21-87",
      ctaLabel: "Open Prophetic Duas",
      snippet: hardshipFeature,
    },
  ];
  const dunyaBenefits = [
    "Peace in the heart",
    "Clarity in hard times",
    "Guidance in decisions",
    "Patience in tests",
    "Protection from harm",
    "Barakah in daily life",
  ];
  const akhirahBenefits = [
    "Forgiveness of sins",
    "Mercy from Allah",
    "Accepted repentance",
    "Higher reward",
    "Safety from punishment",
    "Hope for Jannah",
  ];
  const authenticityPoints = [
    "Qur’anic duas with surah and ayah reference",
    "Hadith-based adhkar with visible references",
    "Arabic with full harakat",
    "English and Urdu translation",
    "A reviewed reading set that grows carefully over time",
  ];

  return (
    <div className="page-shell space-y-16 pb-16 pt-1 sm:space-y-20 sm:pt-2">
      <HeroSection featuredItems={featuredHeroItems} />

      <section className="reading-copy -mt-8 rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-3 text-center text-[var(--muted)] shadow-[0_12px_34px_rgba(15,23,42,0.04)] sm:px-6">
        <span>
          This is a Sadaqah Jariah project built to spread beneficial
          remembrance, reflection, and peace.
        </span>{" "}
        <span className="font-medium text-[var(--brand-ink)]">
          This site is currently in beta version, so if you experience some
          issues or find minor errors, please bear with us and refer to the{" "}
          <Link
            href="/disclaimer"
            className="text-[var(--brand)] underline decoration-[var(--brand-border)] underline-offset-4"
          >
            Disclaimer
          </Link>
          . This helps us give readers a better experience and correct any
          mistakes.
        </span>
      </section>

      <section className="space-y-6">
        <div className="max-w-2xl space-y-3">
          <p className="eyebrow">A special Ramadan focus</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            Give the last 10 nights special attention
          </h2>
          <p className="reading-copy text-[var(--muted)]">
            This website helps with duas and adhkar all year, but the last 10
            nights of Ramadan deserve special focus. In them is Laylatul Qadr,
            the night better than a thousand months, so this is the time to
            increase dua, dhikr, Qur&apos;an, and sincere turning back to Allah.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {whyTheseNightsCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[26px] border border-[var(--border-soft)] bg-[var(--surface)] p-5 shadow-[0_18px_60px_rgba(8,24,19,0.06)]"
            >
              <h3 className="text-xl font-semibold text-[var(--foreground)]">
                {card.title}
              </h3>
              <p className="reading-copy mt-3 text-[var(--muted)]">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="max-w-2xl space-y-3">
          <p className="eyebrow">Guided journey</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            Choose where to begin
          </h2>
          <p className="reading-copy text-[var(--muted)]">
            Start with the Ramadan section you need most, or return to the
            duas and adhkar you want to keep close every day.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {journeyLinks.map((link) => (
            <CategoryCard key={link.href} {...link} />
          ))}
        </div>
      </section>

      <ReflectionSection />

      <section className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="eyebrow">A special Ramadan dua</p>
            <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
              A dua to keep close in the last 10 nights
            </h2>
            <p className="reading-copy text-[var(--muted)]">
              This is one of the most important duas to repeat in the search
              for Laylatul Qadr.
            </p>
          </div>
        </div>
        <div className="highlight-section rounded-[34px] p-1">
          <DuaCard
            item={featuredDua}
            copyButtonLabel="Copy dua"
            shareButtonLabel="Share"
          />
        </div>
      </section>

      <section className="rounded-[32px] border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-6 shadow-[0_18px_44px_rgba(15,23,42,0.05)] sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="max-w-2xl space-y-3">
            <p className="eyebrow">Dunya and akhirah benefits</p>
            <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
              Duas that help you in this life and the next
            </h2>
            <p className="reading-copy text-[var(--muted)]">
              The best duas keep a believer balanced. They ask Allah for what
              steadies daily life while also preparing the heart for the
              akhirah.
            </p>
            <p className="reading-copy-compact font-medium text-[var(--foreground)]">
              Islam teaches balance, not neglect.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[26px] border border-[var(--border-soft)] bg-[var(--surface)] p-4 shadow-[0_18px_44px_rgba(15,23,42,0.05)]">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div>
                  <p className="eyebrow">Dunya</p>
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">
                    Benefit for your dunya
                  </h3>
                </div>
                <span className="brand-chip rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.18em]">
                  6 ways
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {dunyaBenefits.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[var(--border-soft)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--foreground)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[26px] border border-[var(--border-soft)] bg-[var(--surface)] p-4 shadow-[0_18px_44px_rgba(15,23,42,0.05)]">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div>
                  <p className="eyebrow">Akhirah</p>
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">
                    Benefit for your akhirah
                  </h3>
                </div>
                <span className="brand-chip rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.18em]">
                  6 ways
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {akhirahBenefits.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[var(--border-soft)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--foreground)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[32px] border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-6 shadow-[0_18px_44px_rgba(15,23,42,0.05)] sm:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="space-y-3">
            <p className="eyebrow">Authenticity</p>
            <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
              Clear, trusted, and easy to read
            </h2>
            <p className="reading-copy text-[var(--muted)]">
              The site stays focused on a reviewed starting set, with visible
              references and readable Arabic so trust does not come at the cost
              of ease.
            </p>
          </div>
          <div className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[22px] border border-[var(--border-soft)] bg-[var(--surface)] p-4">
                <p className="eyebrow mb-2">Reading support</p>
                <p className="text-sm font-medium text-[var(--foreground)]">
                  Arabic, English, and Urdu together
                </p>
              </div>
              <div className="rounded-[22px] border border-[var(--border-soft)] bg-[var(--surface)] p-4">
                <p className="eyebrow mb-2">Source visibility</p>
                <p className="text-sm font-medium text-[var(--foreground)]">
                  Qur&apos;an and hadith references stay clickable
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {authenticityPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-full border border-[var(--border-soft)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--foreground)]"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="highlight-section rounded-[34px] px-6 py-8 sm:px-8 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="eyebrow">Do not let Ramadan pass lightly</p>
            <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-5xl">
              Keep returning to words that matter in these days and nights
            </h2>
            <p className="reading-copy max-w-2xl text-[var(--muted)]">
              Return often with a few sincere minutes of dua, dhikr, and
              reflection. In Ramadan especially, keep your tongue busy with
              clearly referenced words and ask Allah for the best of this
              world and the next.
            </p>
            <p className="reading-copy text-[var(--muted)]">
              A few honest moments of remembrance may carry great weight.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link href="/last-ten-nights" className="button-primary">
              Begin with Last 10 Nights
            </Link>
            <Link href="/quran/rabbana-duas" className="button-secondary">
              Read Rabbana Duas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
