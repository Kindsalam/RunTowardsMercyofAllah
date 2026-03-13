"use client";

import { useSiteSettings } from "@/components/site-settings-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useSiteSettings();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 min-w-[6.75rem] items-center justify-center gap-2 rounded-full border border-[var(--brand-border)] bg-[var(--brand-surface)] px-3 text-sm text-[var(--brand-ink)] transition hover:border-[var(--brand-border-strong)] hover:bg-[var(--brand-surface-strong)]"
      aria-label="Toggle dark mode"
    >
      <span className="text-base leading-none">{theme === "dark" ? "☾" : "☼"}</span>
      <span className="text-xs uppercase tracking-[0.2em]">
        {theme === "dark" ? "Dark" : "Light"}
      </span>
    </button>
  );
}
