"use client";

import { useState } from "react";

import { CompletionCheckbox } from "@/components/completion-checkbox";
import { useSiteSettings } from "@/components/site-settings-provider";
import { SourceBadge } from "@/components/source-badge";
import type { DuaItem } from "@/lib/types";

type DuaCardProps = {
  item: DuaItem;
  allowCompletion?: boolean;
  completionStorageKey?: string;
  copyButtonLabel?: string;
  shareButtonLabel?: string;
};

export function DuaCard({
  item,
  allowCompletion = false,
  completionStorageKey,
  copyButtonLabel = "Copy",
  shareButtonLabel = "Share",
}: DuaCardProps) {
  const { showTransliteration } = useSiteSettings();
  const [copyLabel, setCopyLabel] = useState(copyButtonLabel);
  const [shareLabel, setShareLabel] = useState(shareButtonLabel);
  const categoryLabel =
    item.category === "rabbana"
      ? "Qur’anic dua"
      : item.category === "morning"
        ? "Morning Adhkar"
        : item.category === "evening"
          ? "Evening Adhkar"
          : "Last ten nights";
  const shareText = [
    item.title,
    item.arabic,
    item.transliteration ? `Transliteration: ${item.transliteration}` : null,
    `English: ${item.english}`,
    item.urdu ? `Urdu: ${item.urdu}` : null,
    item.benefit ? `Why read this: ${item.benefit}` : null,
    `Source: ${item.sourceReference}`,
  ]
    .filter(Boolean)
    .join("\n\n");

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopyLabel("Copied");
      window.setTimeout(() => setCopyLabel(copyButtonLabel), 1600);
    } catch {
      setCopyLabel("Failed");
      window.setTimeout(() => setCopyLabel(copyButtonLabel), 1600);
    }
  }

  async function handleShare() {
    const shareUrl = `${window.location.origin}${window.location.pathname}#${item.id}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: item.title,
          text: shareText,
          url: shareUrl,
        });
      } else {
        await navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`);
      }

      setShareLabel("Shared");
      window.setTimeout(() => setShareLabel(shareButtonLabel), 1600);
    } catch {
      setShareLabel("Try again");
      window.setTimeout(() => setShareLabel(shareButtonLabel), 1600);
    }
  }

  return (
    <article
      id={item.id}
      className="rounded-[30px] border border-[var(--border-soft)] bg-[linear-gradient(180deg,var(--surface),var(--surface-tint))] p-5 shadow-[0_20px_80px_rgba(8,24,19,0.08)] sm:p-7"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-3">
          <p className="eyebrow">{categoryLabel}</p>
          <h3 className="text-xl font-semibold leading-tight text-[var(--foreground)] sm:text-2xl">
            {item.title}
          </h3>
          {item.theme ? (
            <p className="reading-copy-compact text-[var(--muted)]">{item.theme}</p>
          ) : null}
          <SourceBadge
            sourceReference={item.sourceReference}
            sourceType={item.sourceType}
            authenticity={item.authenticity}
            sourceUrl={item.sourceUrl}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={handleCopy} className="button-secondary">
            {copyLabel}
          </button>
          <button type="button" onClick={handleShare} className="button-secondary">
            {shareLabel}
          </button>
          {allowCompletion && completionStorageKey ? (
            <CompletionCheckbox storageKey={completionStorageKey} />
          ) : null}
        </div>
      </div>

      <div className="mt-6 grid gap-5">
        <div className="rounded-[26px] border border-[var(--border-soft)] bg-[linear-gradient(180deg,var(--panel-green),var(--panel-strong))] p-5 sm:p-6">
          <p
            dir="rtl"
            lang="ar"
            className="arabic-text reading-arabic-lg text-right text-[var(--foreground)]"
          >
            {item.arabic}
          </p>
        </div>

        {showTransliteration && item.transliteration ? (
          <div className="rounded-[22px] border border-[var(--border-soft)] bg-[color-mix(in_srgb,var(--surface-tint)_72%,var(--background)_28%)] p-5">
            <p className="eyebrow mb-3">Transliteration</p>
            <p className="reading-copy text-[var(--foreground)]">
              {item.transliteration}
            </p>
          </div>
        ) : null}

        <div className={`grid gap-4 ${item.urdu ? "lg:grid-cols-2" : ""}`}>
          <div className="rounded-[22px] border border-[var(--border-soft)] bg-[color-mix(in_srgb,var(--surface-tint)_72%,var(--background)_28%)] p-5">
            <p className="eyebrow mb-3">English</p>
            <p className="reading-copy text-[var(--foreground)]">
              {item.english}
            </p>
          </div>
          {item.urdu ? (
            <div className="rounded-[22px] border border-[var(--border-soft)] bg-[color-mix(in_srgb,var(--surface-tint)_72%,var(--background)_28%)] p-5">
              <p className="eyebrow mb-3">Urdu</p>
              <p
                dir="rtl"
                lang="ur"
                className="urdu-text reading-urdu text-right text-[var(--foreground)]"
              >
                {item.urdu}
              </p>
            </div>
          ) : null}
        </div>

        {item.benefit ? (
          <div className="rounded-[22px] border border-[var(--border-soft)] bg-[color-mix(in_srgb,var(--surface-tint)_68%,var(--panel-green)_32%)] p-5">
            <p className="eyebrow mb-3">Why keep this close</p>
            <p className="reading-copy text-[var(--foreground)]">
              {item.benefit}
            </p>
          </div>
        ) : null}

        {item.repetition ? (
          <div className="reading-copy-compact rounded-[22px] border border-dashed border-[var(--border-strong)] bg-[color-mix(in_srgb,var(--accent-soft)_56%,var(--accent-green-soft)_44%)] p-4 text-[var(--foreground)]">
            <span className="font-medium">Suggested reading:</span> {item.repetition}
          </div>
        ) : null}
      </div>
    </article>
  );
}
