import { createMetadata } from "@/lib/seo";
import Link from "next/link";

import { CopyDuaButton } from "@/components/copy-dua-button";
import { DuaCard } from "@/components/dua-card";
import { SacredArabicText } from "@/components/sacred-arabic-text";
import { lastTenRecommendedActs } from "@/data/duas";
import { publicLastTenNights } from "@/lib/public-content";

export const metadata = createMetadata({
  title: "Last 10 Nights and Laylatul Qadr",
  description:
    "Keep a reviewed set of duas and reminders close in the last ten nights of Ramadan and while seeking Laylatul Qadr.",
  path: "/last-ten-nights",
});

const laylatulQadrFocus = [
  {
    title: "Seek Laylatul Qadr",
    text: "Look for it in the last ten nights, especially the odd nights.",
  },
  {
    title: "Increase dua",
    text: "Repeat the most important reviewed duas often and with presence of heart.",
  },
  {
    title: "Stay with Qur’an and dhikr",
    text: "Keep these nights alive with recitation, remembrance, repentance, and reflection.",
  },
];

const worshipPriorities = [
  "Return often to the Laylatul Qadr dua",
  "Let Qur’an and dhikr fill the night",
  "Even a few sincere minutes can carry great reward",
];

export default function LastTenNightsPage() {
  const featuredDua =
    publicLastTenNights.find((item) => item.featured) ?? publicLastTenNights[0];
  const recommendedReadings = publicLastTenNights.filter(
    (item) => item.id !== featuredDua.id,
  );
  const featuredCopyText = [
    featuredDua.title,
    featuredDua.arabic,
    featuredDua.transliteration
      ? `Transliteration: ${featuredDua.transliteration}`
      : null,
    `English: ${featuredDua.english}`,
    `Urdu: ${featuredDua.urdu}`,
    `Reference: ${featuredDua.sourceReference}`,
  ]
    .filter(Boolean)
    .join("\n\n");

  return (
    <div className="page-shell space-y-10 pb-16 pt-1 sm:space-y-14 sm:pt-2">
      <section className="highlight-section rounded-[34px] px-5 py-5 sm:px-8 sm:py-6 lg:px-10 lg:py-7">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-[42rem] space-y-3.5">
            <p className="eyebrow">
              Last Ashra of Ramadan
            </p>
            <h1 className="font-display text-4xl leading-[0.96] text-[var(--foreground)] sm:text-[3.3rem] lg:text-[4.15rem]">
              Make these nights count
            </h1>
            <p className="reading-copy max-w-xl text-[var(--muted)]">
              Nights of mercy, forgiveness, dua, and hope. Begin with the
              most important supplications and reminders for Laylatul Qadr.
            </p>
            <div className="flex flex-col gap-2.5 sm:flex-row">
              <Link href="#featured-main-dua" className="button-primary">
                Begin with the main dua
              </Link>
              <Link href="#recommended-reading" className="button-secondary">
                Recommended reading
              </Link>
            </div>
          </div>

          <div className="grid gap-3.5 sm:grid-cols-2">
            <div className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)] p-4 shadow-[0_18px_44px_rgba(15,23,42,0.05)]">
              <p className="eyebrow mb-3">Laylatul Qadr focus</p>
              <div className="space-y-3">
                {laylatulQadrFocus.map((item) => (
                  <div key={item.title} className="space-y-1">
                    <p className="reading-copy-compact font-medium text-[var(--foreground)]">{item.title}</p>
                    <p className="reading-copy text-[var(--muted)]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)] p-4 shadow-[0_18px_44px_rgba(15,23,42,0.05)]">
              <p className="eyebrow mb-3">Worship priorities</p>
              <div className="space-y-3">
                {worshipPriorities.map((item) => (
                  <p key={item} className="reading-copy text-[var(--foreground)]">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-main-dua" className="space-y-6 scroll-mt-28">
        <div className="max-w-2xl space-y-3">
          <p className="eyebrow">Featured main dua</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            Dua for Laylatul Qadr
          </h2>
          <p className="reading-copy text-[var(--muted)]">
            This is one of the most important duas for Laylatul Qadr.
          </p>
        </div>

        <div className="highlight-section rounded-[34px] p-1">
          <div className="relative">
            <DuaCard
              item={featuredDua}
              copyButtonLabel="Copy dua"
              shareButtonLabel="Share"
            />
          </div>
        </div>
      </section>

      <section id="recommended-acts" className="space-y-6 scroll-mt-28">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">Last ten nights</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            Acts recommended in these nights
          </h2>
          <p className="reading-copy text-[var(--muted)]">
            These actions are drawn from authentic hadith about the final
            nights of Ramadan and the search for Laylatul Qadr.
          </p>
        </div>

        <div className="grid gap-6">
          {lastTenRecommendedActs.map((item) => (
            <DuaCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section id="recommended-reading" className="space-y-6 scroll-mt-28">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">Recommended reading</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            Words to keep close in these nights
          </h2>
          <p className="reading-copy text-[var(--muted)]">
            Keep this small reviewed set of duas and reminders close in the
            last ten nights. Each item is shown with its reference so the page
            stays useful without becoming noisy.
          </p>
        </div>

        <div className="grid gap-6">
          {recommendedReadings.map((item) => (
            <DuaCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="highlight-section rounded-[34px] px-5 py-8 sm:px-8 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8">
          <div className="max-w-3xl space-y-4">
            <p className="eyebrow">Laylatul Qadr</p>
            <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              A night better than a thousand months
            </h2>
            <p className="reading-copy text-[var(--foreground)]">
              The Night of Decree is better than a thousand months.
            </p>
            <p className="reading-copy text-[var(--muted)]">
              One night of sincere worship on Laylatul Qadr is better than a
              thousand months of worship.
            </p>
          </div>

          <div className="rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface)] p-6 shadow-[0_18px_44px_rgba(15,23,42,0.05)] sm:p-7">
            <div className="space-y-5">
              <SacredArabicText
                size="quran"
                variant="quran"
                className="text-[var(--foreground)]"
              >
                لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ
              </SacredArabicText>
              <div className="border-t border-[var(--border-soft)] pt-4">
                <Link
                  href="https://quran.com/97/3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[var(--brand-ink)] underline decoration-[var(--brand-border)] underline-offset-4 transition hover:text-[var(--brand)]"
                >
                  Surah Al-Qadr 97:3
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <p className="eyebrow">Reflection</p>
          <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
            A few sincere moments can carry great weight
          </h2>
          <p className="reading-copy text-[var(--muted)]">
            Not every person can do long worship every night. But every
            person can turn back to Allah with sincerity. A few honest
            minutes of dua, istighfar, dhikr, and Qur’an in these nights may
            be heavier than years of habit done without heart.
          </p>
        </div>
        <div className="flex lg:justify-end">
          <Link href="/quran/rabbana-duas" className="button-secondary">
            Read Rabbana Duas
          </Link>
        </div>
      </section>

      <section className="rounded-[34px] border border-[var(--border-soft)] bg-[var(--surface)] px-6 py-8 shadow-[0_20px_56px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="eyebrow">Next step</p>
            <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-5xl">
              Do not leave these nights empty
            </h2>
            <p className="reading-copy max-w-2xl text-[var(--muted)]">
              Stay with reviewed words, keep your tongue busy, and ask Allah
              for forgiveness, mercy, and the best of this world and the next.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <CopyDuaButton
              text={featuredCopyText}
              label="Copy the Laylatul Qadr dua"
            />
            <Link href="/adhkar/evening" className="button-secondary">
              Open Evening Adhkar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
