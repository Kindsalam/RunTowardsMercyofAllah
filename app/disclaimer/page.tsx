import { LegalPageShell } from "@/components/legal-page-shell";

const sections = [
  {
    title: "AI-assisted project",
    body: "This website is built using AI-assisted tools together with human direction and review. The aim is benefit, clarity, and service, not artificial authority.",
  },
  {
    title: "Review with the possibility of error",
    body: "Content is reviewed carefully, but mistakes may still remain in Arabic text, translation, references, or formatting. Users should approach the material with responsible verification.",
  },
  {
    title: "Verify religious content",
    body: "Readers should verify religious content independently, especially before teaching from it, publishing it, or sharing it widely. The goal of the site is benefit, not to replace scholarship or careful checking.",
  },
  {
    title: "Corrections",
    body: "For corrections please contact: from abdul salam @ gmail . com",
  },
];

export default function DisclaimerPage() {
  return (
    <LegalPageShell
      eyebrow="Disclaimer"
      title="Benefit is the goal, not authority"
      description="This project is offered sincerely and carefully, but it should still be used with verification, review, and humility."
      sections={sections}
      showCorrectionNote={false}
    />
  );
}
