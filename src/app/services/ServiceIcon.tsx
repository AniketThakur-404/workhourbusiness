import type { ServiceSlug } from "./services";

const artwork = {
  "website-designing": (
    <>
      <rect height="59" rx="5" width="78" x="11" y="16" />
      <path d="M11 31h78M40 88h20M50 75v13M20 24h1m8 0h1m8 0h1" />
    </>
  ),
  "content-animation": (
    <>
      <circle cx="50" cy="50" r="9" />
      <path d="M50 14c10 14 10 58 0 72M14 50c14-10 58-10 72 0M25 25c19 2 48 31 50 50M75 25c-2 19-31 48-50 50" />
    </>
  ),
  "seo-marketing": (
    <>
      <path d="M16 78h68M24 68l17-19 14 11 24-31M62 29h17v17" />
      <circle cx="24" cy="68" r="4" />
      <circle cx="41" cy="49" r="4" />
      <circle cx="55" cy="60" r="4" />
    </>
  ),
};

export default function ServiceIcon({
  slug,
  className,
}: {
  slug: ServiceSlug;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {artwork[slug]}
    </svg>
  );
}
