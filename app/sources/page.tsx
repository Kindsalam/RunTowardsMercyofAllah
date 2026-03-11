import Link from "next/link";

import { sourceReferences } from "@/lib/content";

const contentCategoryCards = [
  {
    title: "Qur’anic duas",
    text: "The Rabbana duas come from the Qur’an and should always display the surah and ayah reference clearly.",
  },
  {
    title: "Authentic hadith-based adhkar",
    text: "Morning Adhkar, Evening Adhkar, and some last 10 nights duas come from authentic hadith sources. Their references should remain visible for review.",
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
    text: "Authentic morning remembrance for protection, gratitude, and steadiness at the start of the day.",
  },
  {
    title: "Evening Adhkar",
    text: "Authentic evening remembrance for reflection, protection, and peace before the night.",
  },
];

const trustPrinciples = [
  "Keep the words authentic",
  "Keep the source visible",
  "Keep the design simple and readable",
  "Keep translations clear and respectful",
  "Keep room for careful review and correction",
];

export default function SourcesPage() {
  return (
    <div className="page-shell space-y-12 py-6 pb-16 sm:space-y-16 sm:py-8">
      <section className="relative overflow-hidden rounded-[34px] border border-[var(--border-soft)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--surface)_84%,rgba(201,171,103,0.12)_16%),var(--surface))] px-5 py-8 shadow-[0_24px_90px_rgba(8,24,19,0.08)] sm:px-8 sm:py-10 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(201,171,103,0.18)_0%,_transparent_34%),radial-gradient(circle_at_bottom_left,_rgba(16,77,57,0.09)_0%,_transparent_36%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl space-y-4">
            <p className="eyebrow">References and Authenticity</p>
            <h1 className="font-display text-4xl leading-none text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Sources you can trust
            </h1>
            <p className="reading-copy max-w-2xl text-[var(--muted)]">
              This website is built to make authentic duas and adhkar easier to
              read on a phone, with Arabic, English, and Urdu together in one
              place. It aims to stay close to the Qur’an and authentic Sunnah,
              while keeping source references visible and easy to review.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(201,171,103,0.28)_0%,_rgba(201,171,103,0.08)_36%,_transparent_68%)] blur-xl" />
            <div className="relative mx-auto max-w-sm rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface)]/95 p-5 shadow-[0_20px_70px_rgba(8,24,19,0.06)]">
              <div className="space-y-4">
                <div className="h-11 w-11 rounded-full border border-[var(--border-soft)] bg-[var(--accent-soft)]" />
                <div className="reading-copy rounded-[24px] border border-[var(--border-soft)] bg-[var(--background)] p-5 text-[var(--foreground)]">
                  Qur’an and hadith references stay visible so the reader can
                  review source and meaning without leaving the page.
                </div>
                <div className="reading-copy rounded-[24px] border border-[var(--border-soft)] bg-[var(--background)] p-5 text-[var(--muted)]">
                  Ease of reading is the aim. Loose quoting or casual
                  fabrication is not.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[32px] border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-8 shadow-[0_20px_80px_rgba(8,24,19,0.07)] sm:px-8">
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

      <section className="grid gap-4 md:grid-cols-3">
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
      </section>

      <section className="rounded-[32px] border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-8 shadow-[0_20px_80px_rgba(8,24,19,0.07)] sm:px-8">
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
                className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--background)] p-5"
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

      <section className="rounded-[32px] border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-8 shadow-[0_20px_80px_rgba(8,24,19,0.07)] sm:px-8">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Verification note</p>
          <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
            A note on verification
          </h2>
          <p className="reading-copy text-[var(--muted)]">
            This website may begin with a smaller set of reviewed entries and
            then grow over time. Sample entries may be used during
            development, but sacred text should always be checked carefully
            before public release or wide sharing. Arabic wording, harakat,
            translations, and references should all be reviewed with care.
          </p>
          <p className="reading-copy font-medium text-[var(--foreground)]">
            Ease of reading should never come at the cost of accuracy.
          </p>
        </div>
      </section>

      <section className="space-y-6">
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

      <section className="rounded-[32px] border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-8 shadow-[0_20px_80px_rgba(8,24,19,0.07)] sm:px-8">
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

      <section className="grid gap-4">
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
      </section>

      <section className="overflow-hidden rounded-[34px] border border-[var(--border-soft)] bg-[linear-gradient(135deg,var(--surface),color-mix(in_srgb,var(--surface)_74%,rgba(201,171,103,0.24)_26%))] px-6 py-8 sm:px-8 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="eyebrow">Final reflection</p>
            <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-5xl">
              Read with presence, share with care
            </h2>
            <p className="reading-copy max-w-2xl text-[var(--muted)]">
              The aim of this website is to help people remember Allah with
              ease, understanding, and reverence. Use it to read, reflect, and
              benefit. And when sharing sacred words with others, do so
              carefully and responsibly.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link href="/" className="button-primary">
              Return to Homepage
            </Link>
            <Link href="/rabbana-duas" className="button-secondary">
              Open Rabbana Duas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
