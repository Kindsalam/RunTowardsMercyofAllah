"use client";

type SiteLogoProps = {
  className?: string;
};

export function SiteLogo({ className = "" }: SiteLogoProps) {
  return (
    <div
      className={`relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-[20px] border border-white/10 bg-[var(--brand)] shadow-[0_12px_34px_rgba(15,59,46,0.24)] ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 72 72"
        className="h-full w-full"
        role="img"
        aria-label="Rahma Mercy logo"
      >
        <defs>
          <linearGradient id="logoGlow" x1="8" y1="8" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="rgba(255, 244, 217, 0.2)" />
            <stop offset="1" stopColor="rgba(255, 255, 255, 0.03)" />
          </linearGradient>
        </defs>

        <rect x="1" y="1" width="70" height="70" rx="22" fill="url(#logoGlow)" />
        <path
          d="M16 24c5-8 13-12 21-12 9 0 16 4 21 12"
          fill="none"
          stroke="rgba(255,255,255,0.34)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="54" cy="17" r="3.8" fill="rgba(201, 171, 103, 0.58)" />
        <circle cx="56.5" cy="17" r="3.1" fill="var(--brand)" />
        <text
          x="36"
          y="37"
          textAnchor="middle"
          direction="rtl"
          className="arabic-text"
          style={{
            fill: "#f7f4eb",
            fontSize: "20px",
            fontWeight: 700,
          }}
        >
          رحمه
        </text>
        <text
          x="36"
          y="53"
          textAnchor="middle"
          style={{
            fill: "rgba(255, 249, 235, 0.92)",
            fontFamily: "var(--font-display)",
            fontSize: "11px",
            fontStyle: "italic",
            letterSpacing: "0.03em",
          }}
        >
          Mercy
        </text>
      </svg>
    </div>
  );
}
