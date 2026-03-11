import Link from "next/link";

type StickySectionIndexProps = {
  title: string;
  links: Array<{ href: string; label: string }>;
};

export function StickySectionIndex({ title, links }: StickySectionIndexProps) {
  return (
    <div className="sticky top-[6.65rem] z-20 -mx-1 overflow-x-auto rounded-[24px] border border-[var(--border-soft)] bg-[color-mix(in_srgb,var(--surface)_92%,rgba(255,255,255,0.24)_8%)] px-4 py-3 shadow-[0_12px_30px_rgba(8,24,19,0.06)] backdrop-blur">
      <div className="flex min-w-max items-center gap-3">
        <p className="eyebrow whitespace-nowrap">{title}</p>
        <div className="flex min-w-max items-center gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-[var(--border-soft)] bg-[var(--surface)] px-3 py-1.5 text-sm text-[var(--muted)] transition hover:bg-[var(--accent-green-soft)] hover:text-[var(--brand)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
