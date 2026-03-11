import { LegalPageShell } from "@/components/legal-page-shell";

const sections = [
  {
    title: "Minimal cookies",
    body: "This website aims to use minimal cookies and minimal tracking. Its design goal is simplicity rather than heavy marketing or data collection.",
  },
  {
    title: "Local storage and preferences",
    body: "The site may use local storage in the browser for small reading features, such as saving font size, theme preference, or completion tracking for morning and evening adhkar.",
  },
  {
    title: "Possible analytics later",
    body: "Basic analytics may be added later to improve the site. If that happens, the policy should be updated so users can review what has changed.",
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalPageShell
      eyebrow="Cookie Policy"
      title="Minimal storage, simple purpose"
      description="Any storage used by this site should stay light, functional, and easy to explain."
      sections={sections}
    />
  );
}
