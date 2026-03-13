import type { ReactNode } from "react";

type PremiumPageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
  aside?: ReactNode;
};

type PremiumHeroPanelProps = {
  eyebrow: string;
  title?: string;
  description?: string;
  items?: string[];
  tone?: "light" | "dark";
  children?: ReactNode;
};

export function PremiumPageHero({
  eyebrow,
  title,
  description,
  actions,
  aside,
}: PremiumPageHeroProps) {
  return (
    <section className="highlight-section rounded-[34px] px-5 py-5 sm:px-8 sm:py-6 lg:px-10 lg:py-7">
      <div
        className={`relative grid gap-6 ${
          aside ? "lg:grid-cols-[1.05fr_0.95fr] lg:items-center" : ""
        }`}
      >
        <div className="max-w-[42rem] space-y-3.5">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="font-display text-4xl leading-[0.96] text-[var(--foreground)] sm:text-[3.3rem] lg:text-[4.15rem]">
            {title}
          </h1>
          <p className="reading-copy max-w-xl text-[var(--muted)]">
            {description}
          </p>
          {actions ? (
            <div className="flex flex-col gap-2.5 sm:flex-row">{actions}</div>
          ) : null}
        </div>
        {aside ? <div className="grid gap-3.5 sm:grid-cols-2">{aside}</div> : null}
      </div>
    </section>
  );
}

export function PremiumHeroPanel({
  eyebrow,
  title,
  description,
  items,
  tone = "light",
  children,
}: PremiumHeroPanelProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={
        isDark
          ? "highlight-card rounded-[24px] p-5 text-[var(--foreground)] sm:p-6"
          : "rounded-[24px] border border-[var(--brand-border)] bg-[var(--surface-subtle)] p-4 shadow-[0_18px_44px_rgba(15,23,42,0.05)]"
      }
    >
      <div className="space-y-2.5">
        <p className={isDark ? "eyebrow text-[var(--muted)]" : "eyebrow"}>{eyebrow}</p>
        {title ? (
          <h2
            className={
              isDark
                ? "text-lg font-semibold text-[var(--foreground)]"
                : "text-lg font-semibold text-[var(--foreground)]"
            }
          >
            {title}
          </h2>
        ) : null}
        {description ? (
          <p className={isDark ? "reading-copy text-[var(--muted)]" : "reading-copy text-[var(--muted)]"}>
            {description}
          </p>
        ) : null}
        {items ? (
          <div className="space-y-2.5">
            {items.map((item) => (
              <p
                key={item}
                className={isDark ? "reading-copy text-[var(--foreground)]" : "reading-copy text-[var(--foreground)]"}
              >
                {item}
              </p>
            ))}
          </div>
        ) : null}
        {children ? <div className="space-y-2.5">{children}</div> : null}
      </div>
    </div>
  );
}
