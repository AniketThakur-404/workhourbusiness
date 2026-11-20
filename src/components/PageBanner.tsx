import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type PageBannerProps = {
  title: string;
  description: string;
  image: { src: string; alt: string };
  parent?: { href: string; label: string };
  showBreadcrumb?: boolean;
  children?: ReactNode;
};

export default function PageBanner({
  title,
  description,
  image,
  parent,
  showBreadcrumb = true,
  children,
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
        {showBreadcrumb && (
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
        )}
        <div className="PageBanner-module__C7wuVW__copy">
          <p className="PageBanner-module__C7wuVW__eyebrow">
            Workhour Business
          </p>
          <h1 className="PageBanner-module__C7wuVW__title">{title}</h1>
          <p className="PageBanner-module__C7wuVW__description">
            {description}
          </p>
          {children}
        </div>
      </div>
    </section>
  );
}
