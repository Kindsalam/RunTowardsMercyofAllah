import { correctionContact } from "@/lib/content";

type CorrectionNoteProps = {
  plain?: boolean;
};

export function CorrectionNote({ plain = false }: CorrectionNoteProps) {
  return (
    <section
      className={
        plain
          ? "border-t border-[var(--border-soft)] pt-6"
          : "rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-6 shadow-[0_18px_60px_rgba(8,24,19,0.06)] sm:px-6"
      }
    >
      <div className="max-w-3xl space-y-3">
        <p className="eyebrow">Corrections and review</p>
        <p className="reading-copy text-[var(--muted)]">
          This project was built carefully using AI tools and human review. If
          you notice any mistakes in Arabic text, translation, or references,
          please contact us so it can be corrected.
        </p>
        <p className="reading-copy font-medium text-[var(--foreground)]">
          {correctionContact}
        </p>
      </div>
    </section>
  );
}
