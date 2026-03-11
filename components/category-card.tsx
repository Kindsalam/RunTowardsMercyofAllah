import Link from "next/link";

type CategoryCardProps = {
  href: string;
  title: string;
  eyebrow: string;
  description: string;
  buttonLabel: string;
};

export function CategoryCard({
  href,
  title,
  eyebrow,
  description,
  buttonLabel,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface)]/95 p-6 shadow-[0_18px_60px_rgba(7,26,20,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[0_24px_90px_rgba(7,26,20,0.12)] dark:shadow-[0_18px_60px_rgba(0,0,0,0.2)]"
    >
      <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[radial-gradient(circle,_rgba(214,179,98,0.24)_0%,_transparent_70%)] transition duration-300 group-hover:scale-125" />
      <div className="relative space-y-4">
        <div className="inline-flex rounded-full border border-[var(--border-soft)] bg-[var(--accent-soft)] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
          {eyebrow}
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold leading-tight text-[var(--foreground)]">
            {title}
          </h3>
          <p className="text-sm leading-7 text-[var(--muted)]">{description}</p>
        </div>
        <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand)]">
          {buttonLabel}
          <span className="transition group-hover:translate-x-1">→</span>
        </div>
      </div>
    </Link>
  );
}
