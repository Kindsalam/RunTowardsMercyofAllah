import Link from "next/link";

import { CorrectionNote } from "@/components/correction-note";
import { PageHero } from "@/components/page-hero";

const technologyPoints = [
  "Prompt engineered by Salam Khan",
  "Built with AI assistance",
  "Tools include ChatGPT, Codex, and Cursor",
];

const intentionPoints = [
  "verified duas",
  "authentic references",
  "clear translations",
  "accessible design",
];

export default function AboutPage() {
  return (
    <div className="page-shell space-y-12 py-6 pb-16 sm:space-y-16 sm:py-8">
      <PageHero
        eyebrow="About this project"
        title="A long-term Sadaqah Jariah project"
        description="This website exists to help people remember Allah, read authentic duas and adhkar, reflect on the guidance of the Qur’an and Sunnah, and keep benefiting from beneficial knowledge over time."
        aside={
          <div className="border-l-2 border-[var(--border-soft)] pl-5 text-sm leading-7 text-[var(--foreground)]">
            Created by Salam Khan as a Sadaqah Jariah initiative so people can
            keep benefiting from remembrance, dua, and reflection even after
            the creator has passed away.
          </div>
        }
      />

      <section className="border-t border-[var(--border-soft)] pt-6">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Why this project exists</p>
          <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
            Built to remain beneficial after the creator passes away
          </h2>
          <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
            This site was created as a Sadaqah Jariah project so that people
            can continue benefiting from it even after the creator passes away.
            The intention is to spread beneficial knowledge, encourage ibadah
            and reflection, and help people remember Allah through authentic
            duas and adhkar.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--border-soft)] pt-6">
        <div className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <p className="eyebrow">Hadith about Sadaqah Jariah</p>
            <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
              Ongoing charity and beneficial knowledge
            </h2>
          </div>
          <div className="border-s-2 border-[var(--border-soft)] bg-[color-mix(in_srgb,var(--panel-strong)_58%,transparent)] px-5 py-4 sm:px-6">
            <p
              dir="rtl"
              lang="ar"
              className="arabic-text text-right text-[calc(1.85rem*var(--dua-scale))] leading-[1.95] text-[var(--foreground)]"
            >
              إِذَا مَاتَ ابْنُ آدَمَ انْقَطَعَ عَمَلُهُ إِلَّا مِنْ ثَلَاثٍ:
              صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ
              يَدْعُو لَهُ
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="text-sm leading-7 text-[var(--foreground)] sm:text-base">
              When a person dies, their deeds come to an end except for three:
              ongoing charity, beneficial knowledge, or a righteous child who
              prays for them.
            </p>
            <Link
              href="https://sunnah.com/muslim:1631"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-[var(--brand)] underline decoration-[var(--border-strong)] underline-offset-4"
            >
              Sahih Muslim 1631
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border-soft)] pt-6">
        <div className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <p className="eyebrow">Qur’anic encouragement to do good</p>
            <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
              Help one another in righteousness and piety
            </h2>
          </div>
          <div className="border-s-2 border-[var(--border-soft)] bg-[color-mix(in_srgb,var(--panel-strong)_58%,transparent)] px-5 py-4 sm:px-6">
            <p
              dir="rtl"
              lang="ar"
              className="arabic-text text-right text-[calc(2rem*var(--dua-scale))] leading-[1.95] text-[var(--foreground)]"
            >
              وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="text-sm leading-7 text-[var(--foreground)] sm:text-base">
              Help one another in righteousness and piety.
            </p>
            <Link
              href="https://quran.com/5/2"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-[var(--brand)] underline decoration-[var(--border-strong)] underline-offset-4"
            >
              Surah Al-Ma&apos;idah 5:2
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-8 border-t border-[var(--border-soft)] pt-6 lg:grid-cols-2">
        <article className="space-y-4">
          <p className="eyebrow mb-3">Technology used</p>
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">
            Built collaboratively with modern AI tools
          </h2>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-base">
            This website was built using modern AI tools in collaboration with a
            human creator. The process is guided by intention, review, and a
            commitment to clarity rather than automation for its own sake.
          </p>
          <div className="mt-5 space-y-3">
            {technologyPoints.map((point) => (
              <div
                key={point}
                className="border-b border-[var(--border-soft)] pb-3 text-sm leading-7 text-[var(--foreground)]"
              >
                {point}
              </div>
            ))}
          </div>
        </article>

        <article className="space-y-4">
          <p className="eyebrow mb-3">Long term intention</p>
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">
            Improving the site carefully over time
          </h2>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-base">
            The goal is not speed for its own sake. The goal is to keep
            improving the site over time so it becomes more accurate, more
            useful, and more accessible for people around the world.
          </p>
          <div className="mt-5 space-y-3">
            {intentionPoints.map((point) => (
              <div
                key={point}
                className="border-b border-[var(--border-soft)] pb-3 text-sm leading-7 text-[var(--foreground)]"
              >
                {point}
              </div>
            ))}
          </div>
        </article>
      </section>

      <CorrectionNote plain />
    </div>
  );
}
