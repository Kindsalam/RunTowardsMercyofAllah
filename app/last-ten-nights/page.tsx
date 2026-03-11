import Link from "next/link";

import { CopyDuaButton } from "@/components/copy-dua-button";
import { DuaCard } from "@/components/dua-card";
import { lastTenNights } from "@/data/last-ten-nights";

const quickFocusItems = [
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
      <section className="relative overflow-hidden rounded-[34px] border border-[var(--border-soft)] bg-[linear-gradient(160deg,rgba(9,43,33,0.96)_0%,rgba(18,71,53,0.92)_52%,rgba(201,171,103,0.18)_100%)] px-5 py-8 text-white shadow-[0_30px_120px_rgba(6,20,15,0.18)] sm:px-8 sm:py-10 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,246,214,0.18)_0%,_transparent_34%),radial-gradient(circle_at_bottom_left,_rgba(201,171,103,0.14)_0%,_transparent_36%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-3xl space-y-4">
            <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white/80 backdrop-blur">
              Last Ashra of Ramadan
            </p>
            <h1 className="font-display text-4xl leading-none text-white sm:text-5xl lg:text-6xl">
              Make these nights count
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-white/82 sm:text-base">
              These are the nights of mercy, forgiveness, dua, and hope. Begin
              with the most important supplications and reminders for the last
              10 nights and Laylatul Qadr, presented in Arabic with full
              harakat, English, and Urdu.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,246,214,0.45)_0%,_rgba(255,246,214,0.08)_36%,_transparent_68%)] blur-xl" />
            <div className="relative mx-auto max-w-sm rounded-[28px] border border-white/15 bg-white/10 p-5 backdrop-blur-md">
              <div className="space-y-4">
                <div className="h-11 w-11 rounded-full border border-white/20 bg-white/10" />
                <p className="arabic-text text-right text-[2rem] leading-[1.95] text-white">
                  اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي
                </p>
                <div className="rounded-[22px] border border-white/10 bg-black/10 p-4 text-sm leading-7 text-white/78">
                  Keep this dua close in the odd nights and return to it often
                  with presence and hope.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {quickFocusItems.map((item) => (
          <article
            key={item.title}
            className="rounded-[26px] border border-[var(--border-soft)] bg-[var(--surface)]/95 p-5 shadow-[0_18px_60px_rgba(8,24,19,0.06)]"
          >
            <p className="eyebrow mb-3">Quick focus</p>
            <h2 className="text-xl font-semibold text-[var(--foreground)]">
              {item.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              {item.text}
            </p>
          </article>
        ))}
      </section>

      <section className="space-y-6">
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

      <section className="space-y-6">
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

      <section className="rounded-[32px] border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-8 shadow-[0_20px_80px_rgba(8,24,19,0.07)] sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
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
            <Link href="/evening-azkar" className="button-secondary">
              Open Evening Azkar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
