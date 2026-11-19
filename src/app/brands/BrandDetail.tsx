import Image from "next/image";
import Link from "next/link";
import BrandNavigation, { type Brand } from "./BrandNavigation";
import { brandDetails } from "./brand-details";

const icons = [
  <g key="audience">
    <circle cx="50" cy="31" r="14" />
    <path d="M21 83c2-18 12-28 29-28s27 10 29 28M13 22h10m-5-5v10m54-5h10m-5-5v10" />
  </g>,
  <path
    key="scope"
    d="M17 24h66v54H17zM29 39h42M29 51h31M29 63h24m17 2 7 7 13-16"
  />,
  <path
    key="approach"
    d="M50 14a36 36 0 0 1 34 24M84 38V18m0 20H64M50 86a36 36 0 0 1-34-24M16 62v20m0-20h20M50 30v21l15 9"
  />,
  <path
    key="benefits"
    d="m50 10 10 25 27 2-21 17 7 26-23-14-23 14 7-26-21-17 27-2Z"
  />,
];

export default function BrandDetail({ brand }: { brand: Brand }) {
  const details = brandDetails[brand];
  const {
    title,
    name,
    mark,
    tagline,
    image,
    description,
    category,
    url,
    items,
  } = details;
  const categoryTitle = category === "trainings" ? "Trainings" : "Services";

  return (
    <div className="brand-site" data-brand={brand}>
      <BrandNavigation brand={brand} details={details} />
      <section className="brand-site-hero">
        <Image {...image} fill preload sizes="100vw" />
        <div className="brand-site-hero-shade" />
        <div className="brand-site-hero-copy">
          <p className="eyebrow">
            {name} / {tagline}
          </p>
          <h1>{title}</h1>
          <p>{description}</p>
          <a className="button button-light" href={`${url}/${category}`}>
            Explore {categoryTitle} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
      <main className="brand-site-main brand-detail-main">
        <div className="brand-detail-copy">
          <p className="eyebrow teal">
            {categoryTitle} / {name}
          </p>
          {items.map(({ heading, paragraphs, bullets }, index) => (
            <section key={heading}>
              <h2>
                <svg
                  className="brand-detail-section-icon"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {icons[index]}
                </svg>
                {heading}
              </h2>
              {paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
              {bullets.length > 0 && (
                <ul>
                  {bullets.map((text) => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <div className="brand-detail-actions">
            <a className="button button-dark" href={`${url}/contact`}>
              Explore contact options
            </a>
            <a className="text-link" href={`${url}/${category}`}>
              All {category} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <aside className="brand-detail-aside">
          <div className="brand-aside-photo">
            <Image {...image} fill sizes="(max-width: 700px) 100vw, 33vw" />
          </div>
          <p className="eyebrow">{name}</p>
          <h2>{title}</h2>
          <p>Explore the service scope, approach, and practical benefits.</p>
        </aside>
      </main>
      <footer className="brand-site-footer">
        <a className="brand-site-wordmark" href={url}>
          <span className="brand-site-mark" aria-hidden="true">
            {mark}
          </span>
          <span>{name}</span>
        </a>
        <div>
          <a href={`${url}/about`}>About</a>
          <a href={`${url}/${category}`}>{categoryTitle}</a>
          <a href={`${url}/contact`}>Contact</a>
          <Link href={`/businesses/${brand}/`}>
            Workhour Business portfolio
          </Link>
        </div>
        <small>Part of Workhour Business</small>
      </footer>
    </div>
  );
}
