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
import { publicLastTenNights, publicRabbanaDuas } from "@/lib/public-content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Qur'anic Duas and Adhkar",
  description:
    "Read reviewed Qur'anic duas, daily adhkar, and last-ten-nights reminders in Arabic, English, and Urdu with clear source references.",
  path: "/",
});

export default function HomePage() {
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

  const homeJourneyLinks = [
    {
      href: "/last-ten-nights",
      title: "Last 10 Nights",
      eyebrow: "Ramadan focus",
      description:
        "Keep the dua for Laylatul Qadr and the most important reminders for the final nights close.",
      buttonLabel: "Open Last 10 Nights",
    },
    {
      href: "/quran/rabbana-duas",
      title: "Rabbana Duas",
      eyebrow: "From the Qur'an",
      description:
        "Return to beloved Qur'anic supplications for guidance, mercy, forgiveness, and steadfastness.",
      buttonLabel: "Read Rabbana Duas",
    },
    {
      href: "/adhkar/morning",
      title: "Morning Adhkar",
      eyebrow: "Start the day",
      description:
        "Begin the day with protection, gratitude, and reliance upon Allah.",
      buttonLabel: "Open Morning Adhkar",
    },
    {
      href: "/adhkar/evening",
      title: "Evening Adhkar",
      eyebrow: "Close the day",
      description:
        "End the day with calm remembrance, repentance, and protection.",
      buttonLabel: "Open Evening Adhkar",
    },
  ];

  const ramadanFocusPoints = [
    {
      title: "For your heart",
      text: "Slow down and give these nights sincere moments of dua and Qur'an.",
    },
    {
      title: "For your tongue",
      text: "Keep istighfar, dhikr, and this dua near you through the night.",
    },
    {
      title: "For your akhirah",
      text: "Treat these nights as a chance for mercy, pardon, and return.",
    },
  ];

  const trustPoints = [
    "Reviewed Qur'an and hadith references",
    "Arabic, English, and Urdu together",
    "Clear source links on each reading card",
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

  return (
    <div className="page-shell space-y-12 pb-14 pt-1 sm:space-y-16 sm:pt-2">
      <HeroSection featuredItems={featuredHeroItems} />

      <section className="space-y-5">
        <div className="max-w-2xl space-y-2.5">
          <p className="eyebrow">Start here</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-[2.4rem]">
            Choose where to begin
          </h2>
          <p className="reading-copy text-[var(--muted)]">
            Start with the section that fits your day, your need, or the nights
            you want to make count.
          </p>
        </div>
        <div className="grid gap-3 lg:grid-cols-2">
          {homeJourneyLinks.map((link) => (
            <CategoryCard key={link.href} {...link} compact />
          ))}
        </div>
      </section>

      <section className="highlight-section rounded-[34px] px-5 py-5 sm:px-7 sm:py-6">
        <div className="grid gap-5 xl:grid-cols-[0.44fr_0.56fr] xl:items-start">
          <div className="space-y-4">
            <div className="max-w-2xl space-y-2.5">
              <p className="eyebrow">Featured for Ramadan</p>
              <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-[2.45rem]">
                Keep this dua close in the last 10 nights
              </h2>
              <p className="reading-copy text-[var(--muted)]">
                Return often to the dua taught for Laylatul Qadr and give these
                nights your clearest moments of remembrance.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
              {ramadanFocusPoints.map((point) => (
                <article
                  key={point.title}
                  className="rounded-[22px] border border-[var(--brand-border)] bg-[var(--surface)] px-4 py-3"
                >
                  <h3 className="text-base font-semibold text-[var(--foreground)]">
                    {point.title}
                  </h3>
                  <p className="reading-copy-compact mt-1.5 text-[var(--muted)]">
                    {point.text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <DuaCard
              item={laylatulQadrFeature}
              copyButtonLabel="Copy dua"
              shareButtonLabel="Share"
            />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="max-w-2xl space-y-2">
          <p className="eyebrow">Reviewed sources</p>
          <h2 className="font-display text-2xl text-[var(--foreground)] sm:text-[2rem]">
            Clear Qur&apos;an and hadith references
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {trustPoints.map((point) => (
            <div
              key={point}
              className="rounded-[22px] border border-[var(--border-soft)] bg-[var(--surface)] px-4 py-4"
            >
              <p className="text-sm font-medium leading-6 text-[var(--foreground)]">
                {point}
              </p>
            </div>
          ))}
        </div>

        <p className="reading-copy-compact text-[var(--muted)]">
          This is a Sadaqah Jariah project built to spread beneficial
          remembrance, reflection, and peace. The site is still growing
          carefully, so if you notice an issue, please refer to the{" "}
          <Link
            href="/disclaimer"
            className="text-[var(--brand)] underline decoration-[var(--brand-border)] underline-offset-4"
          >
            Disclaimer
          </Link>
          .
        </p>
      </section>

      <ReflectionSection />

      <section className="space-y-4">
        <div className="max-w-2xl space-y-2">
          <p className="eyebrow">Dunya and akhirah</p>
          <h2 className="font-display text-2xl text-[var(--foreground)] sm:text-[2rem]">
            Duas that steady this life and prepare the next
          </h2>
          <p className="reading-copy-compact text-[var(--muted)]">
            The best duas help the heart stay balanced in both.
          </p>
        </div>

        <div className="grid gap-3 lg:grid-cols-2">
          <div className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)] p-4 shadow-[0_18px_44px_rgba(15,23,42,0.05)]">
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
                  className="rounded-full border border-[var(--border-soft)] bg-[var(--background)] px-3 py-1.5 text-sm text-[var(--foreground)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)] p-4 shadow-[0_18px_44px_rgba(15,23,42,0.05)]">
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
                  className="rounded-full border border-[var(--border-soft)] bg-[var(--background)] px-3 py-1.5 text-sm text-[var(--foreground)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-4 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="reading-copy text-[var(--foreground)]">
            Keep one section close and return to it daily.
          </p>
          <Link href="/duas" className="button-primary sm:shrink-0">
            Explore Duas
          </Link>
        </div>
      </section>
    </div>
  );
}
