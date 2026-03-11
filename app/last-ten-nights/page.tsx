import Link from "next/link";

import { CopyDuaButton } from "@/components/copy-dua-button";
import { DuaCard } from "@/components/dua-card";
import { lastTenNights } from "@/data/last-ten-nights";

const laylatulQadrFocus = [
  {
    title: "Seek Laylatul Qadr",
    text: "Look for it in the last ten nights, especially the odd nights.",
  },
  {
    title: "Increase dua",
    text: "Repeat the most important authentic duas often and with presence of heart.",
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
    lastTenNights.find((item) => item.featured) ?? lastTenNights[0];
  const recommendedReadings = lastTenNights.filter(
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
    <div className="page-shell space-y-12 py-6 pb-16 sm:space-y-16 sm:py-8">
      <section className="relative overflow-hidden rounded-[34px] border border-[var(--border-soft)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--surface)_84%,rgba(201,171,103,0.12)_16%),var(--surface))] px-5 py-8 shadow-[0_24px_90px_rgba(8,24,19,0.08)] sm:px-8 sm:py-10 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(201,171,103,0.18)_0%,_transparent_34%),radial-gradient(circle_at_bottom_left,_rgba(16,77,57,0.09)_0%,_transparent_36%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl space-y-4">
            <p className="eyebrow">
              Last Ashra of Ramadan
            </p>
            <h1 className="font-display text-4xl leading-none text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Make these nights count
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              These are the nights of mercy, forgiveness, dua, and hope. Begin
              with the most important supplications and reminders for the last
              10 nights and Laylatul Qadr, presented in Arabic with full
              harakat, English, and Urdu.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="#featured-main-dua" className="button-primary">
                Begin with the main dua
              </Link>
              <Link href="#recommended-reading" className="button-secondary">
                Recommended reading
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)]/95 p-5 shadow-[0_18px_60px_rgba(8,24,19,0.06)]">
              <p className="eyebrow mb-3">Laylatul Qadr focus</p>
              <div className="space-y-3">
                {laylatulQadrFocus.map((item) => (
                  <div key={item.title} className="space-y-1">
                    <p className="text-sm font-medium text-[var(--foreground)]">{item.title}</p>
                    <p className="text-sm leading-7 text-[var(--muted)]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[24px] border border-[var(--border-soft)] bg-[linear-gradient(160deg,rgba(8,20,15,0.96)_0%,rgba(16,46,36,0.94)_100%)] p-5 text-white shadow-[0_18px_60px_rgba(8,24,19,0.12)]">
              <p className="eyebrow mb-3 text-white/70">Worship priorities</p>
              <div className="space-y-3">
                {worshipPriorities.map((item) => (
                  <p key={item} className="text-sm leading-7 text-white/86">
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
          <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
            This is one of the most important duas for Laylatul Qadr.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[34px] border border-[var(--border-soft)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--surface)_82%,rgba(201,171,103,0.12)_18%),var(--surface))] p-1 shadow-[0_24px_90px_rgba(8,24,19,0.08)]">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,_rgba(201,171,103,0.22)_0%,_transparent_70%)]" />
          <div className="relative">
            <DuaCard
              item={featuredDua}
              copyButtonLabel="Copy dua"
              shareButtonLabel="Share"
            />
          </div>
        </div>
      </section>

      <section id="recommended-reading" className="space-y-6 scroll-mt-28">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">Recommended reading</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            Words to keep close in these nights
          </h2>
          <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
            Use this section for a small set of high-priority sample duas and
            adhkar relevant to the last 10 nights. Keep the structure ready for
            verified content population later.
          </p>
        </div>

        <div className="grid gap-6">
          {recommendedReadings.map((item) => (
            <DuaCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <p className="eyebrow">Reflection</p>
          <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
            A few sincere moments can carry great weight
          </h2>
          <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
            Not every person can do long worship every night. But every
            person can turn back to Allah with sincerity. A few honest
            minutes of dua, istighfar, dhikr, and Qur’an in these nights may
            be heavier than years of habit done without heart.
          </p>
        </div>
        <div className="flex lg:justify-end">
          <Link href="/rabbana-duas" className="button-secondary">
            Read Rabbana Duas
          </Link>
        </div>
      </section>

      <section className="overflow-hidden rounded-[34px] border border-[var(--border-soft)] bg-[linear-gradient(135deg,var(--surface),color-mix(in_srgb,var(--surface)_74%,rgba(201,171,103,0.24)_26%))] px-6 py-8 sm:px-8 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="eyebrow">Next step</p>
            <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-5xl">
              Do not leave these nights empty
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              Stay with authentic words, keep your tongue busy, and ask Allah
              for forgiveness, mercy, and the best of this world and the next.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <CopyDuaButton
              text={featuredCopyText}
              label="Copy the Laylatul Qadr dua"
            />
            <Link href="/evening-adhkar" className="button-secondary">
              Open Evening Adhkar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
