import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  aside,
}: PageHeroProps) {
  return (
    <section className="border-b border-[var(--border-soft)] pb-8 pt-2 sm:pb-10">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="font-display text-4xl leading-none text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="reading-copy max-w-2xl text-[var(--muted)]">
            {description}
          </p>
        </div>
        {aside ? <div className="max-w-md lg:justify-self-end">{aside}</div> : null}
      </div>
    </section>
  );
}
