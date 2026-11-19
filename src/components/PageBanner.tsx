import Image from "next/image";
import Link from "next/link";

type PageBannerProps = {
  title: string;
  description: string;
  image: { src: string; alt: string };
  parent?: { href: string; label: string };
};

export default function PageBanner({
  title,
  description,
  image,
  parent,
}: PageBannerProps) {
  return (
    <section
      className="PageBanner-module__C7wuVW__banner"
      aria-label={`${title} introduction`}
    >
      <Image
        {...image}
        className="PageBanner-module__C7wuVW__image"
        fill
        preload
      />
      <div className="PageBanner-module__C7wuVW__shade" aria-hidden="true" />
      <div className="PageBanner-module__C7wuVW__inner">
        <nav
          className="PageBanner-module__C7wuVW__breadcrumb"
          aria-label="Breadcrumb"
        >
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          {parent && (
            <>
              <Link href={parent.href}>{parent.label}</Link>
              <span aria-hidden="true">/</span>
            </>
          )}
          <span aria-current="page">{title}</span>
        </nav>
        <div className="PageBanner-module__C7wuVW__copy">
          <p className="PageBanner-module__C7wuVW__eyebrow">
            Workhour Business
          </p>
          <h1 className="PageBanner-module__C7wuVW__title">{title}</h1>
          <p className="PageBanner-module__C7wuVW__description">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
