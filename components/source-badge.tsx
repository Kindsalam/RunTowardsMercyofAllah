import Link from "next/link";

import { buildSourceLinks } from "@/lib/source-links";
import type { DuaItem } from "@/lib/types";

type SourceBadgeProps = Pick<
  DuaItem,
  "sourceType" | "authenticity" | "sourceReference" | "sourceUrl"
>;

export function SourceBadge({
  sourceType,
  authenticity,
  sourceReference,
  sourceUrl,
}: SourceBadgeProps) {
  const sourceLinks = buildSourceLinks(sourceReference, sourceUrl);
  const sourceTypeClassName =
    sourceType === "quran"
      ? "brand-chip"
      : "border border-[var(--brand-border)] bg-transparent text-[var(--brand-ink)]";

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span
        className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] ${sourceTypeClassName}`}
      >
        {sourceType === "quran" ? "Qur'an" : "Hadith"}
      </span>
      {authenticity ? (
        <span className="rounded-full border border-[var(--brand-border)] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
          {authenticity === "quran"
            ? "Revelation"
            : authenticity === "hasan"
              ? "Hasan"
              : "Sahih"}
        </span>
      ) : null}
      {sourceLinks.map((link) =>
        link.href ? (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--brand-ink)] underline decoration-[var(--brand-border)] underline-offset-4 transition hover:text-[var(--brand)]"
          >
            {link.label}
          </Link>
        ) : (
          <span key={link.label} className="text-sm text-[var(--muted)]">
            {link.label}
          </span>
        ),
      )}
    </div>
  );
}
