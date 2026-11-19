import Link from "next/link";
import Image from "next/image";

const servicesList = [
  {
    number: "01",
    name: "Website Designing",
    image: "/digital-design.webp",
    href: "/services/website-designing/",
    description:
      "We bring user experience, strategic messaging, and modern design together to create clear, useful digital experiences across screen sizes.",
  },
  {
    number: "02",
    name: "Content Animation Studio",
    image: "/digital-motion.webp",
    href: "/services/content-animation/",
    description:
      "We create 2D, 3D, and motion-graphic content to make complex subjects easier to follow and visually engaging.",
  },
  {
    number: "03",
    name: "SEO & Marketing",
    image: "/digital-marketing.webp",
    href: "/services/seo-marketing/",
    description:
      "We shape search, paid media, and content activity around audience needs and the business goals each organization sets.",
  },
];

export default function ServicesPage() {
  return (
    <div className="review-page services-page banner-page">
      <section
        aria-label="Services introduction"
        className="PageBanner-module__C7wuVW__banner"
      >
        <Image
          alt="Illustrative web designer developing a website layout in a creative studio"
          className="PageBanner-module__C7wuVW__image"
          src="/digital-design.webp"
          fill
          priority
          style={{ objectFit: "cover", position: "absolute" }}
        />
        <div aria-hidden="true" className="PageBanner-module__C7wuVW__shade" />
        <div className="PageBanner-module__C7wuVW__inner">
          <nav
            aria-label="Breadcrumb"
            className="PageBanner-module__C7wuVW__breadcrumb"
          >
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Services</span>
          </nav>
          <div className="PageBanner-module__C7wuVW__copy">
            <p className="PageBanner-module__C7wuVW__eyebrow">
              Workhour Business
            </p>
            <h1 className="PageBanner-module__C7wuVW__title">Services</h1>
            <p className="PageBanner-module__C7wuVW__description">
              Design, motion, and marketing support shaped around your audience
              and business goals.
            </p>
          </div>
        </div>
      </section>

      <div className="review-inner">
        <div className="services-index">
          {servicesList.map((service) => (
            <article key={service.name}>
              <div className="service-card-image">
                <Image
                  alt={`${service.name} illustrative scene`}
                  src={service.image}
                  fill
                  style={{ objectFit: "cover", position: "absolute" }}
                />
              </div>
              <span>{service.number}</span>
              <h2>{service.name}</h2>
              <p>{service.description}</p>
              <Link className="text-link" href={service.href}>
                Explore service <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
