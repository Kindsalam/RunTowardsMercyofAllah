import { createMetadata } from "@/lib/seo";
import { LegalPageShell } from "@/components/legal-page-shell";

export const metadata = createMetadata({
  title: "Terms of Use",
  description:
    "Read the terms for using Mercy of Allah responsibly, especially around verification and sharing of religious content.",
  path: "/terms-of-use",
});

const sections = [
  {
    title: "Purpose of the content",
    body: "The content on this website is provided for educational, reflective, and spiritual purposes. It is intended to help readers engage with remembrance of Allah, duas, and adhkar in an accessible format.",
  },
  {
    title: "Independent verification",
    body: "Users should independently verify religious content, references, translations, and wording before relying on it or sharing it widely. Sacred text deserves careful review.",
  },
  {
    title: "No guarantee of zero mistakes",
    body: "The project is built carefully, but it cannot promise that every page will always be free from error. Corrections and review remain part of the ongoing work of the site.",
  },
  {
    title: "Use and responsibility",
    body: "The site owner and contributors are not liable for misuse of the site, loose quoting, or reliance without verification. The website is meant to benefit readers, not to replace responsible study and review.",
  },
];

export default function TermsOfUsePage() {
  return (
    <LegalPageShell
      eyebrow="Terms of Use"
      title="Use the site with care and responsibility"
      description="These terms are written simply: the site is here to benefit people, but religious content should still be approached with verification and care."
      sections={sections}
    />
  );
}
