import { LegalPageShell } from "@/components/legal-page-shell";

const sections = [
  {
    title: "Personal data",
    body: "This site does not intentionally collect personal data from visitors. It is designed primarily as a static informational resource for reading duas, adhkar, and reflections.",
  },
  {
    title: "Cookies and basic functionality",
    body: "The site may use minimal browser storage or basic cookies for simple functionality, such as remembering reading preferences or completion tracking for adhkar.",
  },
  {
    title: "Future analytics",
    body: "Analytics may be added later to understand how the site is used and to improve readability and access. If that happens, this page should be updated clearly.",
  },
  {
    title: "Informational use",
    body: "This website is offered as an informational and spiritual reading resource. Visitors should use it with care and review religious content responsibly.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      eyebrow="Privacy Policy"
      title="A simple privacy approach"
      description="This site is built to be lightweight and respectful. Its aim is to help people read and benefit, not to gather personal information."
      sections={sections}
    />
  );
}
