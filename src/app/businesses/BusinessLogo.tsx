import Image from "next/image";

export default function BusinessLogo({
  slug,
  name,
}: {
  slug: string;
  name: string;
}) {
  return (
    <Image
      className="business-logo"
      src={`/company-logos/${slug}.webp`}
      alt={`${name} logo`}
      width={480}
      height={240}
    />
  );
}
