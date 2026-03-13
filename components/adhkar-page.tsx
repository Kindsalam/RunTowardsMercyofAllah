import Link from "next/link";

import { BackToTopButton } from "@/components/back-to-top-button";
import { ExpandableDuaGroup } from "@/components/expandable-dua-group";
import { StickySectionIndex } from "@/components/sticky-section-index";
import { publicEveningAdhkar, publicMorningAdhkar } from "@/lib/public-content";
import type { DuaItem } from "@/lib/types";

const morningBenefits = [
  "Protection at the start of the day",
  "Gratitude for life and provision",
  "Steadiness before the day begins",
];

const eveningBenefits = [
  "Protection through the night",
  "Reflection and repentance",
  "Peace of heart before rest",
];

function pickItems(items: DuaItem[], ids: string[]) {
  const index = new Map(items.map((item) => [item.id, item]));

  return ids
    .map((id) => index.get(id))
    .filter((item): item is DuaItem => Boolean(item));
}

export function AdhkarPage() {
  const morningOpening = pickItems(publicMorningAdhkar, [
    "morning-ahmad-15360",
    "morning-tirmidhi-abu-dawud",
    "morning-abu-dawud-5072",
  ]);
  const morningProtection = pickItems(publicMorningAdhkar, [
    "morning-tirmidhi-3388",
    "morning-abu-dawud-5074",
    "morning-muslim-2723",
  ]);
  const morningPraise = pickItems(publicMorningAdhkar, [
    "morning-bukhari-3293-muslim-2691",
    "morning-bukhari-6405",
    "morning-muslim-2726a",
    "morning-bukhari-6306",
  ]);

  const eveningOpening = pickItems(publicEveningAdhkar, [
    "evening-ahmad-15360",
    "evening-tirmidhi-3391",
  ]);
  const eveningProtection = pickItems(publicEveningAdhkar, [
    "evening-tirmidhi-3388",
    "evening-abu-dawud-5074",
    "evening-muslim-2723",
  ]);
  const eveningClosing = pickItems(publicEveningAdhkar, [
    "evening-bukhari-6306",
    "evening-bukhari-4008",
  ]);
  const indexLinks = [
    { href: "#morning-opening", label: "Morning opening" },
    { href: "#morning-protection", label: "Morning protection" },
    { href: "#morning-praise", label: "Morning praise" },
    { href: "#evening-opening", label: "Evening opening" },
    { href: "#evening-protection", label: "Night protection" },
    { href: "#evening-closing", label: "Before sleep" },
  ];

  return (
    <div id="page-top" className="page-shell space-y-12 py-6 pb-16 sm:space-y-16 sm:py-8">
      <section className="highlight-section rounded-[34px] px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl space-y-4">
            <p className="eyebrow">Authentic Daily Remembrance</p>
            <h1 className="font-display text-4xl leading-none text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Morning and evening adhkar
            </h1>
            <p className="reading-copy max-w-2xl text-[var(--muted)]">
              Read morning and evening adhkar in Arabic with full harakat, with
              English and Urdu translation and clear source references, in one
              calm mobile-friendly space for daily remembrance.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="#morning-adhkar-section" className="button-primary">
                Morning Adhkar
              </Link>
              <Link href="#evening-adhkar-section" className="button-secondary">
                Evening Adhkar
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] border border-[var(--brand-border)] bg-[var(--surface)] p-5 shadow-[0_18px_44px_rgba(15,23,42,0.05)]">
              <p className="eyebrow mb-3">Morning benefits</p>
              <div className="space-y-3">
                {morningBenefits.map((item) => (
                  <p key={item} className="reading-copy text-[var(--foreground)]">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="highlight-card rounded-[24px] p-5">
              <p className="eyebrow mb-3">Evening benefits</p>
              <div className="space-y-3">
                {eveningBenefits.map((item) => (
                  <p key={item} className="reading-copy text-[var(--foreground)]">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <StickySectionIndex title="Jump to" links={indexLinks} />

      <section id="morning-adhkar-section" className="space-y-6 scroll-mt-28">
        <ExpandableDuaGroup
          id="morning-opening"
          eyebrow="Morning opening"
          title="Begin the day with identity and reliance"
          description="Start with words that renew faith, contentment, and trust before the day unfolds."
          items={morningOpening}
          initialCount={3}
          allowCompletion
          completionStoragePrefix="morning-read"
        />
        <ExpandableDuaGroup
          id="morning-protection"
          eyebrow="Morning protection"
          title="Protection and well-being for the day"
          description="These adhkar ask Allah for safety, well-being, and protection from the harms of the day."
          items={morningProtection}
          initialCount={3}
          allowCompletion
          completionStoragePrefix="morning-read"
        />
        <ExpandableDuaGroup
          id="morning-praise"
          eyebrow="Morning praise"
          title="Tasbih, tawhid, and forgiveness"
          description="Keep these short but weighty adhkar close throughout the day."
          items={morningPraise}
          initialCount={3}
          allowCompletion
          completionStoragePrefix="morning-read"
        />
      </section>

      <section id="evening-adhkar-section" className="space-y-6 scroll-mt-28">
        <ExpandableDuaGroup
          id="evening-opening"
          eyebrow="Evening opening"
          title="Enter the evening with remembrance"
          description="These adhkar help the heart settle into the evening with gratitude and reliance."
          items={eveningOpening}
          initialCount={3}
          allowCompletion
          completionStoragePrefix="evening-read"
        />
        <ExpandableDuaGroup
          id="evening-protection"
          eyebrow="Night protection"
          title="Protection and well-being through the night"
          description="Read these as the evening begins to ask Allah for safety, shelter, and calm."
          items={eveningProtection}
          initialCount={3}
          allowCompletion
          completionStoragePrefix="evening-read"
        />
        <ExpandableDuaGroup
          id="evening-closing"
          eyebrow="Before sleep"
          title="Forgiveness and sufficiency before the day closes"
          description="End the day with istighfar and the night recitations that keep the heart close to Allah."
          items={eveningClosing}
          initialCount={3}
          allowCompletion
          completionStoragePrefix="evening-read"
        />
      </section>

      <BackToTopButton />
    </div>
  );
}
