import Link from "next/link";

import { buildSourceLinks } from "@/lib/source-links";
import type { DuaItem } from "@/lib/types";

type SourceBadgeProps = Pick<
  DuaItem,
  "sourceType" | "authenticity" | "sourceReference"
>;

export function SourceBadge({
  sourceType,
  authenticity,
  sourceReference,
}: SourceBadgeProps) {
  const sourceLinks = buildSourceLinks(sourceReference);
  const tone =
    sourceType === "quran"
      ? "bg-emerald-100 text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-100"
      : "bg-amber-100 text-amber-900 dark:bg-amber-950/50 dark:text-amber-100";

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] ${tone}`}>
        {sourceType === "quran" ? "Qur'an" : "Hadith"}
      </span>
      {authenticity ? (
        <span className="rounded-full border border-[var(--border-strong)] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
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
            rel="noreferrer"
            className="text-sm text-[var(--muted)] underline decoration-[var(--border-strong)] underline-offset-4 transition hover:text-[var(--foreground)]"
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
