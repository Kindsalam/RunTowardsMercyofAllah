"use client";

import { useState } from "react";

import { DuaCard } from "@/components/dua-card";
import type { DuaItem } from "@/lib/types";

type ExpandableDuaGroupProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  items: DuaItem[];
  initialCount?: number;
  allowCompletion?: boolean;
  completionStoragePrefix?: string;
};

export function ExpandableDuaGroup({
  id,
  eyebrow,
  title,
  description,
  items,
  initialCount = 3,
  allowCompletion = false,
  completionStoragePrefix,
}: ExpandableDuaGroupProps) {
  const [expanded, setExpanded] = useState(false);

  if (items.length === 0) {
    return null;
  }

  const visibleItems = expanded ? items : items.slice(0, initialCount);
  const hiddenCount = items.length - visibleItems.length;

  return (
    <section id={id} className="space-y-6 scroll-mt-36">
      <div className="max-w-3xl space-y-3">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="reading-copy text-[var(--muted)]">
            {description}
          </p>
        ) : null}
      </div>

      <div className="grid gap-6">
        {visibleItems.map((item) => (
          <DuaCard
            key={item.id}
            item={item}
            allowCompletion={allowCompletion}
            completionStorageKey={
              allowCompletion && completionStoragePrefix
                ? `${completionStoragePrefix}:${item.id}`
                : undefined
            }
          />
        ))}
      </div>

      {items.length > initialCount ? (
        <button
          type="button"
          onClick={() => setExpanded((current) => !current)}
          className="button-secondary"
        >
          {expanded ? "Show fewer" : `Show more duas${hiddenCount > 0 ? ` (${hiddenCount})` : ""}`}
        </button>
      ) : null}
    </section>
  );
}
