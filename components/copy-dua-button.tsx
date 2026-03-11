"use client";

import { useState } from "react";

type CopyDuaButtonProps = {
  text: string;
  label: string;
  className?: string;
};

export function CopyDuaButton({
  text,
  label,
  className = "button-primary",
}: CopyDuaButtonProps) {
  const [buttonLabel, setButtonLabel] = useState(label);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setButtonLabel("Copied");
      window.setTimeout(() => setButtonLabel(label), 1600);
    } catch {
      setButtonLabel("Failed");
      window.setTimeout(() => setButtonLabel(label), 1600);
    }
  }

  return (
    <button type="button" onClick={handleCopy} className={className}>
      {buttonLabel}
    </button>
  );
}
