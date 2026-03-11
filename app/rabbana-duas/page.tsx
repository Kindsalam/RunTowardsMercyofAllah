import Link from "next/link";

import { BackToTopButton } from "@/components/back-to-top-button";
import { DuaCard } from "@/components/dua-card";
import { ExpandableDuaGroup } from "@/components/expandable-dua-group";
import { StickySectionIndex } from "@/components/sticky-section-index";
import { rabbanaDuas } from "@/data/rabbana-duas";

const themeChips = [
  "Forgiveness",
  "Mercy",
  "Guidance",
  "Protection",
  "Patience",
  "Dunya and Akhirah",
  "Family and Offspring",
];

const rabbanaBenefits = [
  "Guidance, mercy, and forgiveness",
  "Patience, protection, and steadfastness",
  "Goodness in both dunya and akhirah",
];

const readingApproach = [
  "Read the Arabic slowly with understanding",
  "Return to these duas in ease and difficulty",
  "Let them become part of daily worship",
];

const whyTheseDuasMatter = [
  "forgiveness when we fall short",
  "mercy when we are weak",
  "guidance when we are lost",
  "patience when life becomes heavy",
  "protection from harm and punishment",
  "goodness in both dunya and akhirah",
];

const rabbanaThemeSections = [
  {
    theme: "Forgiveness",
    id: "forgiveness-duas",
    title: "Rabbana duas for forgiveness",
    description: "Return to confession, pardon, and mercy when the heart needs repentance.",
  },
  {
    theme: "Mercy",
    id: "mercy-duas",
    title: "Rabbana duas for mercy",
    description: "Ask Allah for mercy that steadies the heart and keeps it close to Him.",
  },
  {
    theme: "Guidance",
    id: "guidance-duas",
    title: "Rabbana duas for guidance",
    description: "Read these duas when you need firmness after guidance and clarity in the heart.",
  },
  {
    theme: "Protection",
    id: "protection-duas",
    title: "Rabbana duas for protection",
    description: "Supplications asking Allah for safety from harm, punishment, and loss.",
  },
  {
    theme: "Patience",
    id: "patience-duas",
    title: "Rabbana duas for patience",
    description: "Keep these words close in testing moments, fear, and struggle.",
  },
  {
    theme: "Dunya and Akhirah",
    id: "dunya-akhirah-duas",
    title: "Rabbana duas for dunya and akhirah",
    description: "Balanced supplications asking Allah for good in this life and lasting success in the next.",
  },
  {
    theme: "Family and Offspring",
    id: "family-duas",
    title: "Rabbana duas for family and offspring",
    description: "Duas for righteous homes, comfort of the eyes, and leadership in goodness.",
  },
];

export default function RabbanaDuasPage() {
  const featuredDua = rabbanaDuas.find((item) => item.featured) ?? rabbanaDuas[0];
  const themeSections = rabbanaThemeSections
    .map((section) => ({
      ...section,
      items: rabbanaDuas.filter(
        (item) => item.theme === section.theme && item.id !== featuredDua.id,
      ),
    }))
    .filter((section) => section.items.length > 0);
  const sectionIndexLinks = [
    { href: "#featured-rabbana-dua", label: "Featured" },
    ...themeSections.map((section) => ({
      href: `#${section.id}`,
      label: section.theme,
    })),
    { href: "#why-rabbana-duas-matter", label: "Why they matter" },
  ];

  return (
    <div id="page-top" className="page-shell space-y-12 py-6 pb-16 sm:space-y-16 sm:py-8">
      <section className="relative overflow-hidden rounded-[34px] border border-[var(--border-soft)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--surface)_84%,rgba(201,171,103,0.12)_16%),var(--surface))] px-5 py-8 shadow-[0_24px_90px_rgba(8,24,19,0.08)] sm:px-8 sm:py-10 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(201,171,103,0.18)_0%,_transparent_34%),radial-gradient(circle_at_bottom_left,_rgba(16,77,57,0.09)_0%,_transparent_36%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl space-y-4">
            <p className="eyebrow">Qur’anic Supplications</p>
            <h1 className="font-display text-4xl leading-none text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Rabbana duas from the Qur’an
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              These are among the most powerful supplications a believer can
              make. They are words that Allah placed in His Book, teaching us
              how to ask for guidance, mercy, forgiveness, patience,
              protection, and success in this life and the next.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="#featured-rabbana-dua" className="button-primary">
                Begin with a Rabbana dua
              </Link>
              <Link href="#all-rabbana-duas" className="button-secondary">
                Browse the duas
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)]/95 p-5 shadow-[0_18px_60px_rgba(8,24,19,0.06)]">
              <p className="eyebrow mb-3">What these duas ask for</p>
              <div className="space-y-3">
                {rabbanaBenefits.map((item) => (
                  <p key={item} className="text-sm leading-7 text-[var(--foreground)]">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="rounded-[24px] border border-[var(--border-soft)] bg-[linear-gradient(160deg,rgba(8,20,15,0.96)_0%,rgba(16,46,36,0.94)_100%)] p-5 text-white shadow-[0_18px_60px_rgba(8,24,19,0.12)]">
              <p className="eyebrow mb-3 text-white/70">How to keep them close</p>
              <div className="space-y-3">
                {readingApproach.map((item) => (
                  <p key={item} className="text-sm leading-7 text-white/88">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <StickySectionIndex title="Jump to" links={sectionIndexLinks} />

      <section className="max-w-3xl space-y-4">
        <p className="eyebrow">Intro reflection</p>
        <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
          Words taught by Allah
        </h2>
        <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
          The Rabbana duas are special because they are not just beautiful
          words. They are words chosen by Allah and preserved in the Qur’an.
          They teach us what to ask for, how to ask, and what truly matters
          most.
        </p>
        <p className="text-sm font-medium leading-7 text-[var(--foreground)]">
          Read them slowly, understand their meaning, and make them part of
          your daily life.
        </p>
      </section>

      <section className="space-y-5">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">Themes</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            Common themes running through these duas
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {themeChips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-[var(--border-soft)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--foreground)] shadow-[0_12px_34px_rgba(8,24,19,0.04)]"
            >
              {chip}
            </span>
          ))}
        </div>
      </section>

      <section id="featured-rabbana-dua" className="space-y-6 scroll-mt-28">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">Main dua list</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            Keep these supplications close
          </h2>
          <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
            This starter page is intentionally seeded with five structured
            entries only, so the full verified Rabbana collection can be added
            later without changing the layout or card system.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[34px] border border-[var(--border-soft)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--surface)_82%,rgba(201,171,103,0.12)_18%),var(--surface))] p-1 shadow-[0_24px_90px_rgba(8,24,19,0.08)]">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,_rgba(201,171,103,0.22)_0%,_transparent_70%)]" />
          <div className="relative">
            <DuaCard item={featuredDua} />
          </div>
        </div>
      </section>

      <section id="all-rabbana-duas" className="space-y-10 scroll-mt-28">
        {themeSections.map((section) => (
          <ExpandableDuaGroup
            key={section.id}
            id={section.id}
            eyebrow={section.theme}
            title={section.title}
            description={section.description}
            items={section.items}
            initialCount={3}
          />
        ))}
      </section>

      <section id="why-rabbana-duas-matter" className="space-y-6 scroll-mt-28">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">Why these duas matter</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            These duas ask for what really matters
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {whyTheseDuasMatter.map((point) => (
            <div
              key={point}
              className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)]/95 p-5 text-sm leading-7 text-[var(--foreground)] shadow-[0_18px_60px_rgba(8,24,19,0.05)]"
            >
              {point}
            </div>
          ))}
        </div>
        <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
          A believer does not only ask for relief. A believer asks for what
          brings nearness to Allah and lasting success.
        </p>
      </section>

      <section className="overflow-hidden rounded-[34px] border border-[var(--border-soft)] bg-[linear-gradient(135deg,var(--surface),color-mix(in_srgb,var(--surface)_74%,rgba(201,171,103,0.24)_26%))] px-6 py-8 sm:px-8 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="eyebrow">Next step</p>
            <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-5xl">
              Take these words with you every day
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              Do not leave the Rabbana duas only for Ramadan. Read them often,
              understand them deeply, and return to them in times of ease and
              in times of difficulty.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link href="/morning-adhkar" className="button-primary">
              Open Morning Adhkar
            </Link>
            <Link href="/last-ten-nights" className="button-secondary">
              Return to Last 10 Nights
            </Link>
          </div>
        </div>
      </section>

      <BackToTopButton />
    </div>
  );
}
