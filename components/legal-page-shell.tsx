import { CorrectionNote } from "@/components/correction-note";
import { PageHero } from "@/components/page-hero";

type LegalPageSection = {
  title: string;
  body: string;
};

type LegalPageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: LegalPageSection[];
  showCorrectionNote?: boolean;
};

export function LegalPageShell({
  eyebrow,
  title,
  description,
  sections,
  showCorrectionNote = true,
}: LegalPageShellProps) {
  return (
    <div className="page-shell space-y-12 py-6 pb-16 sm:space-y-16 sm:py-8">
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        aside={
          <div className="reading-copy border-l-2 border-[var(--border-soft)] pl-5 text-[var(--foreground)]">
            This page is written to keep the project transparent, careful, and
            easy to understand.
          </div>
        }
      />

      <div className="space-y-8">
        {sections.map((section) => (
          <section
            key={section.title}
            className="border-t border-[var(--border-soft)] pt-6"
          >
            <div className="max-w-3xl space-y-3">
              <p className="eyebrow">Policy detail</p>
              <h2 className="text-2xl font-semibold text-[var(--foreground)]">
                {section.title}
              </h2>
              <p className="reading-copy text-[var(--muted)]">
                {section.body}
              </p>
            </div>
          </section>
        ))}
      </div>

      {showCorrectionNote ? <CorrectionNote plain /> : null}
    </div>
  );
}
