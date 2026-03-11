import Link from "next/link";

import { BackToTopButton } from "@/components/back-to-top-button";
import { ExpandableDuaGroup } from "@/components/expandable-dua-group";
import { StickySectionIndex } from "@/components/sticky-section-index";
import { eveningAdhkar } from "@/data/evening-adhkar";
import { morningAdhkar } from "@/data/morning-adhkar";
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
  const morningOpening = pickItems(morningAdhkar, [
    "morning-ahmad-15360",
    "morning-tirmidhi-abu-dawud",
    "morning-abu-dawud-5072",
  ]);
  const morningProtection = pickItems(morningAdhkar, [
    "morning-tirmidhi-3388",
    "morning-abu-dawud-5074",
    "morning-muslim-2723",
  ]);
  const morningPraise = pickItems(morningAdhkar, [
    "morning-bukhari-3293-muslim-2691",
    "morning-bukhari-6405",
    "morning-muslim-2726a",
    "morning-bukhari-6306",
  ]);

  const eveningOpening = pickItems(eveningAdhkar, [
    "evening-ahmad-15360",
    "evening-tirmidhi-3391",
    "evening-abu-dawud-5073",
  ]);
  const eveningProtection = pickItems(eveningAdhkar, [
    "evening-tirmidhi-3388",
    "evening-abu-dawud-5074",
    "evening-muslim-2723",
  ]);
  const eveningClosing = pickItems(eveningAdhkar, [
    "evening-bukhari-6306",
    "evening-bukhari-4008",
  ]);
  const indexLinks = [
    { href: "#morning-adhkar-section", label: "Morning" },
    { href: "#morning-opening", label: "Morning opening" },
    { href: "#morning-protection", label: "Morning protection" },
    { href: "#morning-praise", label: "Morning praise" },
    { href: "#evening-adhkar-section", label: "Evening" },
    { href: "#evening-protection", label: "Night protection" },
    { href: "#evening-closing", label: "Before sleep" },
  ];

  return (
    <div id="page-top" className="page-shell space-y-12 py-6 pb-16 sm:space-y-16 sm:py-8">
      <section className="relative overflow-hidden rounded-[34px] border border-[var(--border-soft)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--surface)_84%,rgba(201,171,103,0.12)_16%),var(--surface))] px-5 py-8 shadow-[0_24px_90px_rgba(8,24,19,0.08)] sm:px-8 sm:py-10 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(201,171,103,0.18)_0%,_transparent_34%),radial-gradient(circle_at_bottom_left,_rgba(16,77,57,0.09)_0%,_transparent_36%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl space-y-4">
            <p className="eyebrow">Authentic Daily Remembrance</p>
            <h1 className="font-display text-4xl leading-none text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Morning and evening adhkar
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              Read authentic daily adhkar in Arabic with full harakat, with
              English and Urdu translation, in one calm mobile-friendly space
              for morning and evening remembrance.
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
            <div className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)]/95 p-5 shadow-[0_18px_60px_rgba(8,24,19,0.06)]">
              <p className="eyebrow mb-3">Morning benefits</p>
              <div className="space-y-3">
                {morningBenefits.map((item) => (
                  <p key={item} className="text-sm leading-7 text-[var(--foreground)]">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="rounded-[24px] border border-[var(--border-soft)] bg-[linear-gradient(160deg,rgba(8,20,15,0.96)_0%,rgba(16,46,36,0.94)_100%)] p-5 text-white shadow-[0_18px_60px_rgba(8,24,19,0.12)]">
              <p className="eyebrow mb-3 text-white/70">Evening benefits</p>
              <div className="space-y-3">
                {eveningBenefits.map((item) => (
                  <p key={item} className="text-sm leading-7 text-white/88">
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
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">Morning Adhkar</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            Begin the day with remembrance
          </h2>
          <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
            Start the morning with remembrance, gratitude, protection, and trust
            in Allah.
          </p>
        </div>
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
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">Evening Adhkar</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            End the day with remembrance
          </h2>
          <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
            Close the day with calm, gratitude, protection, repentance, and trust
            in Allah.
          </p>
        </div>
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
