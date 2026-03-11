import { DuaCard } from "@/components/dua-card";
import { eveningAzkar } from "@/data/evening-azkar";

export default function EveningAzkarPage() {
  return (
    <div className="page-shell space-y-8 py-6 pb-16 sm:py-8">
      <section className="rounded-[32px] border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-8 sm:px-8">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Evening Adhkar</p>
          <h1 className="font-display text-4xl leading-none text-[var(--foreground)] sm:text-5xl">
            Let the day close with dhikr, gratitude, and refuge in Allah.
          </h1>
          <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
            The evening collection uses the same reusable card system with local
            progress tracking, clear references, and optional transliteration.
          </p>
        </div>
      </section>

      <div className="grid gap-6">
        {eveningAzkar.map((item) => (
          <DuaCard
            key={item.id}
            item={item}
            allowCompletion
            completionStorageKey={`evening-read:${item.id}`}
          />
        ))}
      </div>
    </div>
  );
}
