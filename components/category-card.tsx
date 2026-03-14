import Link from "next/link";

type CategoryCardProps = {
  href: string;
  title: string;
  eyebrow: string;
  description: string;
  buttonLabel: string;
  compact?: boolean;
};

export function CategoryCard({
  href,
  title,
  eyebrow,
  description,
  buttonLabel,
  compact = false,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className={`group rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface)] shadow-[0_18px_44px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[var(--brand-border)] hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)] dark:shadow-[0_18px_60px_rgba(0,0,0,0.2)] ${
        compact ? "p-5" : "p-6"
      }`}
    >
      <div className={compact ? "space-y-3" : "space-y-4"}>
        <div className="brand-chip inline-flex rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.2em]">
          {eyebrow}
        </div>
        <div className={compact ? "space-y-2.5" : "space-y-3"}>
          <h3
            className={`font-semibold leading-tight text-[var(--foreground)] ${
              compact ? "text-xl" : "text-2xl"
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-sm text-[var(--muted)] ${
              compact ? "leading-6" : "leading-7"
            }`}
          >
            {description}
          </p>
        </div>
        <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand)]">
          {buttonLabel}
          <span className="transition group-hover:translate-x-1">→</span>
        </div>
      </div>
    </Link>
  );
}
