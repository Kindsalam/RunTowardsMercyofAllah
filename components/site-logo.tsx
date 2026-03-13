type SiteLogoProps = {
  className?: string;
};

export function SiteLogo({ className = "" }: SiteLogoProps) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center ${className}`}
      aria-hidden="true"
    >
      <img
        src="/logo-mercy.svg"
        alt=""
        className="h-full w-full object-contain"
        loading="eager"
        decoding="async"
      />
    </span>
  );
}
