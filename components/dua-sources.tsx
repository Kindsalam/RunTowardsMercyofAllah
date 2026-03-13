import Link from "next/link";

import { buildSourceLinks, getTrustedSourceHref } from "@/lib/source-links";
import type { DuaItem, DuaSource } from "@/lib/types";

type DuaSourcesProps = {
  sourceType?: DuaItem["sourceType"];
  authenticity?: DuaItem["authenticity"];
  sourceReference?: string;
  sourceUrl?: string;
  sources?: DuaSource[];
  variant?: "default" | "compact";
};

function buildStructuredSourceLinks(
  sources: DuaSource[] | undefined,
): Array<{ label: string; href: string | null }> {
  if (!sources?.length) {
    return [];
  }

  return sources.map((source) => ({
    label: `${source.sourceName} ${source.reference}`.trim(),
    href: getTrustedSourceHref(source.url),
  }));
}

export function DuaSources({
  sourceType,
  authenticity,
  sourceReference,
  sourceUrl,
  sources,
  variant = "default",
}: DuaSourcesProps) {
  const sourceLinks =
    sources && sources.length > 0
      ? buildStructuredSourceLinks(sources)
      : sourceReference
        ? buildSourceLinks(sourceReference, sourceUrl)
        : [];

  if (sourceLinks.length === 0) {
    return null;
  }

  if (variant === "compact") {
    return (
      <div className="flex flex-wrap items-center gap-2">
        {sourceLinks.map((link) =>
          link.href ? (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.95rem] text-[var(--brand-ink)] underline decoration-[var(--brand-border)] underline-offset-4 transition hover:text-[var(--brand)]"
            >
              {link.label}
            </Link>
          ) : (
            <p key={link.label} className="text-[0.95rem] text-[var(--muted)]">
              {link.label}
            </p>
          ),
        )}
      </div>
    );
  }

  const sourceTypeClassName =
    sourceType === "quran"
      ? "brand-chip"
      : "border border-[var(--brand-border)] bg-transparent text-[var(--brand-ink)]";

  return (
    <div className="flex flex-wrap items-center gap-2">
      {sourceType ? (
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] ${sourceTypeClassName}`}
        >
          {sourceType === "quran" ? "Qur'an" : "Hadith"}
        </span>
      ) : null}
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
