import Link from "next/link";

import { siteLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-soft)] bg-[var(--surface)]/70">
      <div className="page-shell grid gap-8 py-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-3">
          <p className="font-display text-3xl text-[var(--foreground)]">
            Ramadan Duas and Adhkar
          </p>
          <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">
            A simple mobile-friendly space for Qur&apos;anic duas and authentic
            adhkar in Arabic, English, and Urdu.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-3 sm:grid-cols-2">
            {siteLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-[20px] border border-[var(--border-soft)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-sm leading-7 text-[var(--muted)]">
            Please verify and review all sacred text carefully before public
            sharing.
          </p>
          <p className="text-sm leading-7 text-[var(--muted)]">
            Prompt-Engineered by Salam Khan, built using AI, for Sadaqah Jariah.
          </p>
        </div>
      </div>
    </footer>
  );
}
