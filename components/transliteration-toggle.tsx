"use client";

import { useSiteSettings } from "@/components/site-settings-provider";

export function TransliterationToggle() {
  const { showTransliteration, toggleTransliteration } = useSiteSettings();

  return (
    <button
      type="button"
      onClick={toggleTransliteration}
      className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-border)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--brand-ink)] transition hover:border-[var(--brand-border-strong)] hover:bg-[var(--brand-surface)]"
      aria-pressed={showTransliteration}
    >
      <span className="text-xs uppercase tracking-[0.2em]">Translit.</span>
      <span
        className={`rounded-full px-2 py-0.5 text-xs ${
          showTransliteration
            ? "bg-[var(--brand-surface-strong)] text-[var(--brand-ink)]"
            : "bg-transparent"
        }`}
      >
        {showTransliteration ? "On" : "Off"}
      </span>
    </button>
  );
}
