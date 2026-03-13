import Link from "next/link";

import { CategoryCard } from "@/components/category-card";
import { CorrectionNote } from "@/components/correction-note";
import { PageHero } from "@/components/page-hero";
import { aboutSectionCards, sourceReferences } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Sources",
  description:
    "Review the source method used across the site, including Qur'an and hadith references, language support, and publication standards.",
  path: "/sources",
});

const contentCategoryCards = [
  {
    title: "Qur’anic duas",
    text: "The Rabbana duas come from the Qur’an and should always display the surah and ayah reference clearly.",
  },
  {
    title: "Reviewed hadith-based adhkar",
    text: "Morning Adhkar, Evening Adhkar, and some last 10 nights duas come from reviewed hadith sources. Their references remain visible for checking and context.",
  },
  {
    title: "Structured for careful review",
    text: "The site is built with reusable data files so content can be checked, corrected, and expanded carefully over time.",
  },
];

const referenceMethodItems = [
  {
    title: "Source type: Qur’an",
    text: "Source format: Surah name and ayah number",
  },
  {
    title: "Source type: Hadith",
    text: "Source format: Collection name and reference number",
  },
  {
    title: "Reference hosts",
    text: "Quran.com, Sunnah.com, and HadithUnlocked.com where a card explicitly cites it",
  },
  {
    title: "Language support",
    text: "Arabic, English, Urdu",
  },
  {
    title: "Reading support",
    text: "Optional transliteration where enabled",
  },
];

const contentMapItems = [
  {
    title: "Last 10 Nights",
    text: "A focused set of duas and reminders relevant to the last ashra and Laylatul Qadr.",
  },
  {
    title: "Rabbana Duas",
    text: "Qur’anic supplications beginning with Rabbana, covering mercy, forgiveness, guidance, patience, protection, and goodness in this life and the next.",
  },
  {
    title: "Morning Adhkar",
    text: "Morning remembrance for protection, gratitude, and steadiness at the start of the day.",
  },
  {
    title: "Evening Adhkar",
    text: "Evening remembrance for reflection, protection, and peace before the night.",
  },
];

const trustPrinciples = [
  "Keep the words reviewed before publishing",
  "Keep the source visible",
  "Keep the design simple and readable",
  "Keep translations clear and respectful",
  "Keep room for careful review and correction",
];

const methodologyPoints = [
  {
    title: "Qur’an and authentic Sunnah",
    text: "The aim of the site is to stay close to the Qur’an and authentic Sunnah, while adding material carefully and section by section.",
  },
  {
    title: "References remain visible",
    text: "Wherever possible, the source stays visible directly on the page so readers can see what comes from the Qur’an and what comes from hadith.",
  },
  {
    title: "Corrections are welcome",
    text: "Religious content deserves humility and review. If something needs correction, the site should remain easy to improve without breaking the wider structure.",
  },
];

export default function SourcesPage() {
  return (
    <div className="page-shell space-y-12 py-6 pb-16 sm:space-y-16 sm:py-8">
      <PageHero
        eyebrow="References and authenticity"
        title="Sources you can trust"
        description="This website is built to make reviewed duas and adhkar easier to read on a phone, with Arabic, English, and Urdu together in one place. Source references stay visible so the public reading set remains easy to review."
        aside={
          <div className="reading-copy border-l-2 border-[var(--border-soft)] pl-5 text-[var(--foreground)]">
            Qur’an and hadith references stay visible so the reader can review
            source and meaning without leaving the page.
          </div>
        }
      />

      <section className="border-t border-[var(--border-soft)] pt-6">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Why this page matters</p>
          <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
            Sacred words deserve care
          </h2>
          <p className="reading-copy text-[var(--muted)]">
            Duas and adhkar are not ordinary text. Their wording, source, and
            meaning matter. This page explains how the website handles Qur’anic
            supplications, hadith-based remembrance, source references, and
            ongoing review before wider public use.
          </p>
        </div>
      </section>

      <section className="space-y-6 border-t border-[var(--border-soft)] pt-6">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">Source categories</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            What content is reviewed here
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
        {contentCategoryCards.map((card) => (
          <article
            key={card.title}
            className="rounded-[26px] border border-[var(--border-soft)] bg-[var(--surface)]/95 p-5 shadow-[0_18px_60px_rgba(8,24,19,0.06)]"
          >
            <p className="eyebrow mb-3">Content category</p>
            <h2 className="text-xl font-semibold text-[var(--foreground)]">
              {card.title}
            </h2>
            <p className="reading-copy mt-3 text-[var(--muted)]">
              {card.text}
            </p>
          </article>
        ))}
        </div>
      </section>

      <section className="space-y-6 border-t border-[var(--border-soft)] pt-6">
        <div className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <p className="eyebrow">Reference method</p>
            <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
              How references are shown
            </h2>
            <p className="reading-copy text-[var(--muted)]">
              Each dua or dhikr card should clearly show whether its source is
              the Qur’an or hadith. Where possible, the reference should remain
              visible directly on the card so users can review the source while
              reading.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {referenceMethodItems.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)] p-5 shadow-[0_18px_60px_rgba(8,24,19,0.06)]"
              >
                <p className="eyebrow mb-3">Reference detail</p>
                <h3 className="text-lg font-semibold text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="reading-copy mt-2 text-[var(--muted)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border-soft)] pt-6">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Verification note</p>
          <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
            A note on verification
          </h2>
          <p className="reading-copy text-[var(--muted)]">
            This website begins with a smaller set of reviewed entries and can
            grow over time. Draft entries may be used during development, but
            they should stay out of the public reading set until Arabic
            wording, harakat, translations, and references are all checked
            with care.
          </p>
          <p className="reading-copy font-medium text-[var(--foreground)]">
            Ease of reading should never come at the cost of accuracy.
          </p>
        </div>
      </section>

      <section className="space-y-6 border-t border-[var(--border-soft)] pt-6">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">Site content map</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            What each section contains
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {contentMapItems.map((item) => (
            <article
              key={item.title}
              className="rounded-[26px] border border-[var(--border-soft)] bg-[var(--surface)] p-5 shadow-[0_18px_60px_rgba(8,24,19,0.06)]"
            >
              <h3 className="text-xl font-semibold text-[var(--foreground)]">
                {item.title}
              </h3>
              <p className="reading-copy mt-3 text-[var(--muted)]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6 border-t border-[var(--border-soft)] pt-6">
        <div className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <p className="eyebrow">Trust principles</p>
            <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
              Principles behind this website
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {trustPrinciples.map((principle) => (
              <div
                key={principle}
                className="reading-copy rounded-[24px] border border-[var(--border-soft)] bg-[var(--background)] p-5 text-[var(--foreground)]"
              >
                {principle}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6 border-t border-[var(--border-soft)] pt-6">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">How content is handled</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            Method principles folded into the same review page
          </h2>
          <p className="reading-copy text-[var(--muted)]">
            The site should grow carefully, keep references visible, and remain
            easy to correct when something needs review. These principles are
            now kept here with the wider sources page so the trust guidance
            lives in one place.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {methodologyPoints.map((point) => (
            <article
              key={point.title}
              className="rounded-[26px] border border-[var(--border-soft)] bg-[var(--surface)] p-5 shadow-[0_18px_60px_rgba(8,24,19,0.06)]"
            >
              <p className="eyebrow mb-3">Method principle</p>
              <h2 className="text-xl font-semibold text-[var(--foreground)]">
                {point.title}
              </h2>
              <p className="reading-copy mt-3 text-[var(--muted)]">
                {point.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6 border-t border-[var(--border-soft)] pt-6">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">Reference examples</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            Examples from the current public set
          </h2>
        </div>
        <div className="grid gap-4">
          {sourceReferences.map((source) => (
            <article
              key={source.href}
              className="rounded-[26px] border border-[var(--border-soft)] bg-[var(--surface)] p-5 shadow-[0_18px_60px_rgba(8,24,19,0.06)]"
            >
              <p className="eyebrow mb-3">Reference example</p>
              <Link
                href={source.href}
                className="text-lg font-semibold text-[var(--foreground)] underline decoration-[var(--border-strong)] underline-offset-4"
              >
                {source.label}
              </Link>
              <p className="reading-copy mt-3 text-[var(--muted)]">
                {source.note}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6 border-t border-[var(--border-soft)] pt-6">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">About section links</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            Read the wider trust and policy pages
          </h2>
          <p className="reading-copy text-[var(--muted)]">
            Use these pages to understand the project, its sources, and the
            practical policies around verification and use.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {aboutSectionCards.map((card) => (
            <CategoryCard key={card.href} {...card} />
          ))}
        </div>
      </section>

      <CorrectionNote plain />
    </div>
  );
}
