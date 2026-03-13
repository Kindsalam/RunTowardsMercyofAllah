import Link from "next/link";

import { BackToTopButton } from "@/components/back-to-top-button";
import { DuaCard } from "@/components/dua-card";
import { ExpandableDuaGroup } from "@/components/expandable-dua-group";
import { StickySectionIndex } from "@/components/sticky-section-index";
import { publicRabbanaDuas } from "@/lib/public-content";

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
    description:
      "Return to confession, pardon, and mercy when the heart needs repentance.",
  },
  {
    theme: "Mercy",
    id: "mercy-duas",
    title: "Rabbana duas for mercy",
    description:
      "Ask Allah for mercy that steadies the heart and keeps it close to Him.",
  },
  {
    theme: "Guidance",
    id: "guidance-duas",
    title: "Rabbana duas for guidance",
    description:
      "Read these duas when you need firmness after guidance and clarity in the heart.",
  },
  {
    theme: "Protection",
    id: "protection-duas",
    title: "Rabbana duas for protection",
    description:
      "Supplications asking Allah for safety from harm, punishment, and loss.",
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
    description:
      "Balanced supplications asking Allah for good in this life and lasting success in the next.",
  },
  {
    theme: "Family and Offspring",
    id: "family-duas",
    title: "Rabbana duas for family and offspring",
    description:
      "Duas for righteous homes, comfort of the eyes, and leadership in goodness.",
  },
];

export function RabbanaDuasPage() {
  const featuredDua =
    publicRabbanaDuas.find((item) => item.featured) ?? publicRabbanaDuas[0];
  const themeSections = rabbanaThemeSections
    .map((section) => ({
      ...section,
      items: publicRabbanaDuas.filter(
        (item) => item.theme === section.theme && item.id !== featuredDua.id,
      ),
    }))
    .filter((section) => section.items.length > 0);
  const browseTarget =
    themeSections.length > 0 ? "#all-rabbana-duas" : "#why-rabbana-duas-matter";
  const browseLabel =
    themeSections.length > 0 ? "Browse the duas" : "Why they matter";
  const sectionIndexLinks = [
    { href: "#featured-rabbana-dua", label: "Featured" },
    ...themeSections.map((section) => ({
      href: `#${section.id}`,
      label: section.theme,
    })),
    { href: "#why-rabbana-duas-matter", label: "Why they matter" },
  ];

  return (
    <div
      id="page-top"
      className="page-shell space-y-10 pb-16 pt-1 sm:space-y-14 sm:pt-2"
    >
      <section className="highlight-section rounded-[34px] px-5 py-5 sm:px-8 sm:py-6 lg:px-10 lg:py-7">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-[42rem] space-y-3.5">
            <p className="eyebrow">Qur’anic Supplications</p>
            <h1 className="font-display text-4xl leading-[0.96] text-[var(--foreground)] sm:text-[3.3rem] lg:text-[4.15rem]">
              Rabbana duas from the Qur’an
            </h1>
            <p className="reading-copy max-w-xl text-[var(--muted)]">
              Words Allah placed in His Book, teaching us to ask for guidance,
              mercy, forgiveness, patience, protection, and success.
            </p>
            <div className="flex flex-col gap-2.5 sm:flex-row">
              <Link href="#featured-rabbana-dua" className="button-primary">
                Begin with a Rabbana dua
              </Link>
              <Link href={browseTarget} className="button-secondary">
                {browseLabel}
              </Link>
            </div>
          </div>

          <div className="grid gap-3.5 sm:grid-cols-2">
            <div className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)] p-4 shadow-[0_18px_44px_rgba(15,23,42,0.05)]">
              <p className="eyebrow mb-3">What these duas ask for</p>
              <div className="space-y-3">
                {rabbanaBenefits.map((item) => (
                  <p key={item} className="reading-copy text-[var(--foreground)]">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)] p-4 shadow-[0_18px_44px_rgba(15,23,42,0.05)]">
              <p className="eyebrow mb-3">How to keep them close</p>
              <div className="space-y-3">
                {readingApproach.map((item) => (
                  <p key={item} className="reading-copy text-[var(--foreground)]">
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
        <p className="reading-copy text-[var(--muted)]">
          The Rabbana duas are special because they are not just beautiful
          words. They are words chosen by Allah and preserved in the Qur’an.
          They teach us what to ask for, how to ask, and what truly matters
          most.
        </p>
        <p className="reading-copy font-medium text-[var(--foreground)]">
          Read them slowly, understand their meaning, and make them part of
          your daily life.
        </p>
      </section>

      <section id="featured-rabbana-dua" className="space-y-6 scroll-mt-28">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">Main dua list</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            Keep these supplications close
          </h2>
          <p className="reading-copy text-[var(--muted)]">
            This page currently carries a carefully reviewed starting set of
            Rabbana duas. More entries can be added only after they are checked
            with the same care.
          </p>
        </div>

        <div className="highlight-section rounded-[34px] p-1">
          <div className="relative">
            <DuaCard item={featuredDua} />
          </div>
        </div>
      </section>

      {themeSections.length > 0 ? (
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
      ) : null}

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
              className="reading-copy rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)] p-5 text-[var(--foreground)] shadow-[0_18px_44px_rgba(15,23,42,0.05)]"
            >
              {point}
            </div>
          ))}
        </div>
        <p className="reading-copy text-[var(--muted)]">
          A believer does not only ask for relief. A believer asks for what
          brings nearness to Allah and lasting success.
        </p>
      </section>

      <section className="rounded-[34px] border border-[var(--border-soft)] bg-[var(--surface)] px-6 py-8 shadow-[0_20px_56px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="eyebrow">Next step</p>
            <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-5xl">
              Take these words with you every day
            </h2>
            <p className="reading-copy max-w-2xl text-[var(--muted)]">
              Do not leave the Rabbana duas only for Ramadan. Read them often,
              understand them deeply, and return to them in times of ease and
              in times of difficulty.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link href="/adhkar/morning" className="button-primary">
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
