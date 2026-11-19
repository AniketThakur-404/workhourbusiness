import Link from "next/link";
import Image from "next/image";

const businessesList = [
  {
    number: "01",
    name: "Inceptura",
    image: "/business-inceptura.webp",
    href: "https://inceptura.workhourbusiness.com",
    description:
      "Inceptura supports startups and growing enterprises from early ideas through business execution and global expansion.",
  },
  {
    number: "02",
    name: "Leaders Pinnacle",
    image: "/business-leaders-pinnacle.webp",
    href: "https://leaderspinnacle.workhourbusiness.com",
    description:
      "Leaders Pinnacle designs conferences, trade expos, corporate events, webinars, and podcasts for B2B audiences.",
  },
  {
    number: "03",
    name: "Employaa",
    image: "/business-employaa.webp",
    href: "https://employaa.workhourbusiness.com",
    description:
      "Employaa provides permanent recruitment and outsourced staffing for roles from entry-level to senior leadership.",
  },
  {
    number: "04",
    name: "Elevatrain",
    image: "/business-elevatrain.webp",
    href: "https://elevatrain.workhourbusiness.com",
    description:
      "Elevatrain designs and delivers corporate training and workshops across compliance, process, technology, leadership, and communication.",
  },
  {
    number: "05",
    name: "Go Travel Global",
    image: "/business-gotravel.webp",
    href: "https://gotravelglobal.workhourbusiness.com",
    description:
      "Go Travel Global provides corporate visa, travel, and stay support alongside curated leisure travel.",
  },
  {
    number: "06",
    name: "Remunerax",
    image: "/business-remunerax.webp",
    href: "https://remunerax.workhourbusiness.com",
    description:
      "Remunerax provides payroll and workforce outsourcing with technology and expert human support.",
  },
  {
    number: "07",
    name: "ThinkRunSpace",
    image: "/business-thinkrunspace.webp",
    href: "https://thinkrunspace.workhourbusiness.com",
    description:
      "ThinkRunSpace provides flexible physical and virtual workspaces with configurable office support.",
  },
];

export default function BusinessesPage() {
  return (
    <div className="review-page banner-page">
      <section
        aria-label="Our businesses introduction"
        className="PageBanner-module__C7wuVW__banner"
      >
        <Image
          alt="Illustrative specialists collaborating across business disciplines"
          className="PageBanner-module__C7wuVW__image"
          src="/about-story-v2.webp"
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
            <span aria-current="page">Our businesses</span>
          </nav>
          <div className="PageBanner-module__C7wuVW__copy">
            <p className="PageBanner-module__C7wuVW__eyebrow">
              Workhour Business
            </p>
            <h1 className="PageBanner-module__C7wuVW__title">Our businesses</h1>
            <p className="PageBanner-module__C7wuVW__description">
              Seven specialist brands offer focused support across business
              setup, people, payroll, travel, learning, workspaces, and events.
            </p>
          </div>
        </div>
      </section>

      <div className="review-inner">
        <div className="review-business-list">
          {businessesList.map((biz) => (
            <article key={biz.name} id={biz.name.toLowerCase().replace(/\s+/g, "-")}>
              <div className="business-list-image">
                <Image
                  alt={`${biz.name} illustrative scene`}
                  src={biz.image}
                  fill
                  style={{ objectFit: "cover", position: "absolute" }}
                />
              </div>
              <div>
                <p className="eyebrow teal">
                  Business {biz.number} / 07
                </p>
                <h2>{biz.name}</h2>
                <p>{biz.description}</p>
                <a
                  className="text-link"
                  href={biz.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore {biz.name} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
