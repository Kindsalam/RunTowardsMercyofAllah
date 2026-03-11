import Link from "next/link";

import { DuaCard } from "@/components/dua-card";
import { morningAdhkar } from "@/data/morning-adhkar";

const benefitCards = [
  {
    title: "Protection",
    text: "Begin the day asking Allah to keep you safe from harm and loss.",
  },
  {
    title: "Gratitude",
    text: "Start the morning by remembering the One who gave you life, time, and another day.",
  },
  {
    title: "Steadiness",
    text: "Anchor your heart before the noise of the day begins.",
  },
];

export function MorningAdhkarPage() {
  const featuredItem =
    morningAdhkar.find((item) => item.featured) ?? morningAdhkar[0];
  const remainingItems = morningAdhkar.filter((item) => item.id !== featuredItem.id);
  const firstGroup = remainingItems.slice(0, 2);
  const secondGroup = remainingItems.slice(2);

  return (
    <div className="page-shell space-y-12 py-6 pb-16 sm:space-y-16 sm:py-8">
      <section className="relative overflow-hidden rounded-[34px] border border-[var(--border-soft)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--surface)_84%,rgba(201,171,103,0.12)_16%),var(--surface))] px-5 py-8 shadow-[0_24px_90px_rgba(8,24,19,0.08)] sm:px-8 sm:py-10 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(201,171,103,0.18)_0%,_transparent_34%),radial-gradient(circle_at_bottom_left,_rgba(16,77,57,0.09)_0%,_transparent_36%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl space-y-4">
            <p className="eyebrow">Authentic Daily Remembrance</p>
            <h1 className="font-display text-4xl leading-none text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Morning Adhkar
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              Begin your day with remembrance, protection, gratitude, and trust
              in Allah. Read authentic morning adhkar in Arabic with full
              harakat, along with English and Urdu translation, in a calm and
              easy mobile-friendly layout.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(201,171,103,0.28)_0%,_rgba(201,171,103,0.08)_36%,_transparent_68%)] blur-xl" />
            <div className="relative mx-auto max-w-sm rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface)]/95 p-5 shadow-[0_20px_70px_rgba(8,24,19,0.06)]">
              <div className="space-y-4">
                <div className="h-11 w-11 rounded-full border border-[var(--border-soft)] bg-[var(--accent-soft)]" />
                <p className="arabic-text text-right text-[1.85rem] leading-[1.95] text-[var(--foreground)]">
                  أَصْبَحْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَعَلَى كَلِمَةِ
                  الْإِخْلَاصِ
                </p>
                <div className="rounded-[22px] border border-[var(--border-soft)] bg-[var(--background)] p-4 text-sm leading-7 text-[var(--muted)]">
                  Let the first words of the day draw the heart back to
                  gratitude, reliance, and calm.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[32px] border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-8 shadow-[0_20px_80px_rgba(8,24,19,0.07)] sm:px-8">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Intro reflection</p>
          <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
            Start the day with what benefits the heart
          </h2>
          <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
            The morning is the start of your day, your work, your plans, and
            your worries. Beginning it with remembrance of Allah brings
            protection, steadiness, gratitude, and peace. Even a few sincere
            moments each morning can shape the rest of the day.
          </p>
          <p className="text-sm font-medium leading-7 text-[var(--foreground)]">
            Read a little with consistency rather than rushing through a lot
            without presence.
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {benefitCards.map((card) => (
          <article
            key={card.title}
            className="rounded-[26px] border border-[var(--border-soft)] bg-[var(--surface)]/95 p-5 shadow-[0_18px_60px_rgba(8,24,19,0.06)]"
          >
            <p className="eyebrow mb-3">Morning benefit</p>
            <h2 className="text-xl font-semibold text-[var(--foreground)]">
              {card.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              {card.text}
            </p>
          </article>
        ))}
      </section>

      <section className="space-y-6">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">Main adhkar list</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            Morning words to keep close
          </h2>
          <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
            This starter page is intentionally seeded with five structured
            sample entries only, so the full verified morning adhkar set can be
            added later without changing the page design.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[34px] border border-[var(--border-soft)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--surface)_82%,rgba(201,171,103,0.12)_18%),var(--surface))] p-1 shadow-[0_24px_90px_rgba(8,24,19,0.08)]">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,_rgba(201,171,103,0.22)_0%,_transparent_70%)]" />
          <div className="relative">
            <DuaCard
              item={featuredItem}
              allowCompletion
              completionStorageKey={`morning-read:${featuredItem.id}`}
            />
          </div>
        </div>

        <div className="grid gap-6">
          {firstGroup.map((item) => (
            <DuaCard
              key={item.id}
              item={item}
              allowCompletion
              completionStorageKey={`morning-read:${item.id}`}
            />
          ))}
        </div>
      </section>

      <section className="rounded-[32px] border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-8 shadow-[0_20px_80px_rgba(8,24,19,0.07)] sm:px-8">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Reflection</p>
          <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
            Small words, repeated with sincerity
          </h2>
          <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
            Morning adhkar are not long for the sake of length. Their value is
            in truthfulness, consistency, and presence of heart. A believer
            begins the day by remembering Allah, asking for good, and seeking
            protection before stepping into the duties of life.
          </p>
        </div>
      </section>

      <section className="grid gap-6">
        {secondGroup.map((item) => (
          <DuaCard
            key={item.id}
            item={item}
            allowCompletion
            completionStorageKey={`morning-read:${item.id}`}
          />
        ))}
      </section>

      <section className="overflow-hidden rounded-[34px] border border-[var(--border-soft)] bg-[linear-gradient(135deg,var(--surface),color-mix(in_srgb,var(--surface)_74%,rgba(201,171,103,0.24)_26%))] px-6 py-8 sm:px-8 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="eyebrow">Next step</p>
            <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-5xl">
              Carry remembrance into the rest of your day
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              Return to these words every morning and let them become part of
              your routine. What begins with remembrance is more likely to stay
              grounded, grateful, and protected.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link href="/evening-adhkar" className="button-primary">
              Open Evening Adhkar
            </Link>
            <Link href="/rabbana-duas" className="button-secondary">
              Read Rabbana Duas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
