import Link from "next/link";

import { CategoryCard } from "@/components/category-card";
import { DuaCard } from "@/components/dua-card";
import { HeroSection } from "@/components/hero-section";
import { ReflectionSection } from "@/components/reflection-section";
import { lastTenNights } from "@/data/last-ten-nights";
import { journeyLinks, whyTheseNightsCards } from "@/lib/content";

export default function HomePage() {
  const featuredDua =
    lastTenNights.find((item) => item.featured) ?? lastTenNights[0];
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
    "Authentic hadith-based adhkar only",
    "Arabic with full harakat",
    "English and Urdu translation",
    "Made for mobile reading",
  ];

  return (
    <div className="page-shell space-y-16 py-6 pb-16 sm:space-y-20 sm:py-8">
      <HeroSection />

      <section className="-mt-8 rounded-[24px] border border-[var(--border-soft)] bg-[color-mix(in_srgb,var(--surface-tint)_78%,transparent)] px-5 py-3 text-center text-sm leading-7 text-[var(--muted)] sm:px-6">
        This is a Sadaqah Jariah project built to spread beneficial remembrance,
        reflection, and peace.
      </section>

      <section className="space-y-6">
        <div className="max-w-2xl space-y-3">
          <p className="eyebrow">A special Ramadan focus</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            Give the last 10 nights special attention
          </h2>
          <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
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
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
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
          <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
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
            <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
              This is one of the most important duas to repeat in the search
              for Laylatul Qadr.
            </p>
          </div>
        </div>
        <DuaCard
          item={featuredDua}
          copyButtonLabel="Copy dua"
          shareButtonLabel="Share"
        />
      </section>

      <section className="space-y-6">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">Dunya and akhirah benefits</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            Duas that help you in this life and the next
          </h2>
          <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
            The best duas do not pull you away from life. They help you live it
            properly. They ask Allah for goodness, protection, mercy, guidance,
            patience, forgiveness, and success in the akhirah. The Rabbana duas
            especially gather deep meanings in very few words.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[30px] border border-[var(--border-soft)] bg-[var(--surface)] p-6">
          <p className="eyebrow mb-3">Benefit for your dunya</p>
          <h3 className="text-2xl font-semibold text-[var(--foreground)]">
            Benefit for your dunya
          </h3>
          <ul className="mt-4 grid gap-3 text-sm leading-7 text-[var(--muted)]">
            {dunyaBenefits.map((item) => (
              <li key={item} className="rounded-2xl bg-[var(--background)] px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[30px] border border-[var(--border-soft)] bg-[var(--surface)] p-6">
          <p className="eyebrow mb-3">Benefit for your akhirah</p>
          <h3 className="text-2xl font-semibold text-[var(--foreground)]">
            Benefit for your akhirah
          </h3>
          <ul className="mt-4 grid gap-3 text-sm leading-7 text-[var(--muted)]">
            {akhirahBenefits.map((item) => (
              <li key={item} className="rounded-2xl bg-[var(--background)] px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
        </div>
        <p className="text-center text-sm leading-7 text-[var(--muted)] sm:text-base">
          A believer asks Allah for both. Islam teaches balance, not neglect.
        </p>
      </section>

      <section className="rounded-[32px] border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-8 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-3">
            <p className="eyebrow">Authenticity</p>
            <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
              Clear, trusted, and easy to read
            </h2>
            <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
              This website focuses on Qur’anic Rabbana duas and authentic
              adhkar from reliable hadith sources. Arabic is shown with full
              harakat to help non-Arab readers. English and Urdu translations
              are included for understanding. References are shown clearly so
              you know what comes from the Qur’an and what comes from authentic
              hadith.
            </p>
          </div>
          <div className="grid gap-3">
            {authenticityPoints.map((point) => (
              <div
                key={point}
                className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--background)] p-5 text-sm leading-7 text-[var(--foreground)]"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-[34px] border border-[var(--border-soft)] bg-[linear-gradient(135deg,var(--surface),color-mix(in_srgb,var(--surface)_74%,rgba(201,171,103,0.26)_26%))] px-6 py-8 sm:px-8 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="eyebrow">Do not let Ramadan pass lightly</p>
            <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-5xl">
              Keep returning to words that matter in these days and nights
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              Return often with a few sincere minutes of dua, dhikr, and
              reflection. In Ramadan especially, keep your tongue busy with
              what is authentic and ask Allah for the best of this world and
              the next.
            </p>
            <p className="text-sm leading-7 text-[var(--muted)]">
              A few honest moments of remembrance may carry great weight.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link href="/last-ten-nights" className="button-primary">
              Begin with Last 10 Nights
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
