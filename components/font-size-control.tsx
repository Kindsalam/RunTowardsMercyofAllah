"use client";

import { useSiteSettings } from "@/components/site-settings-provider";

const options = [
  { value: "sm", label: "A-", title: "Compact" },
  { value: "md", label: "A", title: "Comfortable" },
  { value: "lg", label: "A+", title: "Large" },
] as const;

export function FontSizeControl() {
  const { fontScale, setFontScale } = useSiteSettings();

  return (
    <div className="inline-flex h-10 min-w-[7.5rem] items-center rounded-full border border-[var(--border-soft)] bg-[var(--surface-tint)] p-1">
      {options.map((option) => {
        const active = option.value === fontScale;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setFontScale(option.value)}
            className={`flex-1 rounded-full px-3 py-2 text-sm transition ${
              active
                ? "bg-[var(--accent-soft)] text-[var(--foreground)]"
                : "text-[var(--muted)] hover:text-[var(--foreground)]"
            }`}
            aria-pressed={active}
            title={option.title}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
