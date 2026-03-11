import Link from "next/link";

export function BackToTopButton() {
  return (
    <Link
      href="#page-top"
      className="fixed bottom-5 right-5 z-30 rounded-full border border-[var(--border-soft)] bg-[var(--surface)]/95 px-4 py-2 text-sm text-[var(--foreground)] shadow-[0_18px_40px_rgba(8,24,19,0.12)] backdrop-blur transition hover:bg-[var(--accent-green-soft)] hover:text-[var(--brand)]"
    >
      Back to top
    </Link>
  );
}
