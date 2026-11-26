"use client";

import Image from "next/image";
import Link from "next/link";
import { companyLinkProps } from "@/lib/company-sites";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const aboutLinks = [
  { href: "/about/our-story/", label: "Our Story" },
  { href: "/about/our-impact/", label: "Our Impact" },
  { href: "/about/responsible-business/", label: "Responsible Business" },
  { href: "/about/presence/", label: "Presence" },
];

const serviceLinks = [
  {
    href: "/services/website-designing/",
    label: "Website Designing",
    keywords: "website design web development ecommerce",
  },
  {
    href: "/services/content-animation/",
    label: "Content Animation Studio",
    keywords: "motion graphics 2d 3d video",
  },
  {
    href: "/services/seo-marketing/",
    label: "SEO & Marketing",
    keywords: "search engine optimization paid ads",
  },
];

const portfolioLinks = [
  {
    label: "Inceptura",
    slug: "inceptura",
    keywords: "ideation business planning execution strategy",
  },
  {
    label: "Leaders Pinnacle",
    slug: "leaders-pinnacle",
    keywords: "events conference intelligence",
  },
  {
    label: "Employaa",
    slug: "employaa",
    keywords: "recruitment people staffing",
  },
  {
    label: "Elevatrain",
    slug: "elevatrain",
    keywords: "learning training workshops",
  },
  {
    label: "Go Travel Global",
    slug: "go-travel-global",
    keywords: "travel visa stay",
  },
  {
    label: "Remunerax",
    slug: "remunerax",
    keywords: "payroll outsourcing",
  },
  {
    label: "ThinkRunSpace",
    slug: "thinkrunspace",
    keywords: "office flexible workspace",
  },
] as const;

const pages = [
  { href: "/announcements/", label: "Announcement" },
  { href: "/careers/", label: "Careers" },
  { href: "/news-media/", label: "News & Media" },
  { href: "/global-presence/", label: "Global Presence" },
];

type NavLink = {
  href: string;
  label: string;
  keywords?: string;
  target?: string;
  rel?: string;
};

const companyLinks = portfolioLinks.map(({ slug, label, keywords }) => ({
  ...companyLinkProps(slug),
  label,
  keywords,
}));

const groups: { label: string; href?: string; links: NavLink[] }[] = [
  { label: "About Us", href: "/about/", links: aboutLinks },
  {
    label: "Portfolio",
    href: "/businesses/",
    links: companyLinks,
  },
  {
    label: "Services",
    href: "/services/",
    links: serviceLinks,
  },
];

const searchPages: (NavLink & { type: string })[] = [
  ...companyLinks.map((link) => ({ ...link, type: "Business" })),
  ...serviceLinks.map((link) => ({ ...link, type: "Service" })),
  ...[
    { href: "/about/", label: "About Us", keywords: "about whb workhour business" },
    ...aboutLinks,
    ...pages,
    {
      href: "/services/",
      label: "Services",
      keywords: "website animation seo marketing all services",
    },
    { href: "/businesses/", label: "Our businesses", keywords: "portfolio" },
    { href: "/contact/", label: "Contact Us" },
    {
      href: "/announcements/ignitia/",
      label: "IGNITIA",
      keywords: "event leadership vision",
    },
  ].map((link) => ({ ...link, type: "Page" })),
];

export default function Navbar() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<{
    label: string;
    openedBy: "hover" | "activation";
  } | null>(null);
  const [query, setQuery] = useState("");
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLButtonElement>(null);
  const searchField = useRef<HTMLInputElement>(null);

  function closeAll() {
    setMobileOpen(false);
    setSearchOpen(false);
    setOpenDropdown(null);
    setQuery("");
  }

  useEffect(() => {
    if (searchOpen) searchField.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    function dismiss(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      )
        closeAll();
    }
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, []);

  useEffect(() => {
    if (openDropdown?.openedBy !== "hover") return;

    function dismissHover(event: KeyboardEvent) {
      if (
        event.key === "Escape" &&
        !headerRef.current?.contains(document.activeElement)
      ) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("keydown", dismissHover);
    return () => document.removeEventListener("keydown", dismissHover);
  }, [openDropdown]);

  function closeHoveredDropdown(label: string) {
    setOpenDropdown((current) =>
      current?.label === label && current.openedBy === "hover" ? null : current,
    );
  }

  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const results =
    terms.length === 0
      ? []
      : searchPages
          .filter((page) => {
            const text =
              `${page.label} ${page.keywords ?? ""}`.toLowerCase();
            return terms.every((term) => text.includes(term));
          })
          .slice(0, 8);

  return (
    <header
      className="site-header managed-navigation"
      ref={headerRef}
      onKeyDown={(event) => {
        if (event.key !== "Escape") return;
        if (searchOpen) {
          setSearchOpen(false);
          searchRef.current?.focus();
        } else if (openDropdown) {
          setOpenDropdown(null);
          headerRef.current
            ?.querySelector<HTMLDetailsElement>("details[open]")
            ?.querySelector("summary")
            ?.focus();
        } else if (mobileOpen) {
          setMobileOpen(false);
          menuRef.current?.focus();
        }
      }}
    >
      <Link
        href="/"
        className="brand"
        aria-label="Workhour Business home"
        onClick={closeAll}
      >
        <Image
          src="/workhour-business-logo.jpeg"
          alt="Workhour Business"
          width={534}
          height={111}
          preload
        />
      </Link>
      <button
        type="button"
        className="menu-toggle"
        ref={menuRef}
        aria-expanded={mobileOpen}
        aria-controls="main-navigation"
        aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
        onClick={() => {
          if (mobileOpen) closeAll();
          else setMobileOpen(true);
        }}
      >
        {mobileOpen ? "Close" : "Menu"}
      </button>
      <nav
        id="main-navigation"
        className={mobileOpen ? "nav open" : "nav"}
        aria-label="Main navigation"
      >
        {groups.map(({ label, href, links }) => (
          <details
            className="nav-dropdown"
            key={label}
            open={openDropdown?.label === label}
            onPointerEnter={(event) => {
              if (
                event.pointerType !== "mouse" ||
                window.matchMedia("(max-width: 1120px)").matches ||
                searchOpen
              )
                return;

              setOpenDropdown((current) =>
                current?.label === label
                  ? current
                  : { label, openedBy: "hover" },
              );
            }}
            onPointerLeave={(event) => {
              if (!event.currentTarget.querySelector(".dropdown")?.contains(document.activeElement)) {
                closeHoveredDropdown(label);
              }
            }}
            onBlur={(event) => {
              if (
                !event.currentTarget.contains(event.relatedTarget) &&
                !event.currentTarget.matches(":hover")
              )
                closeHoveredDropdown(label);
            }}
          >
            <summary
              className="nav-link"
              aria-expanded={openDropdown?.label === label}
              onClick={(event) => {
                const target = event.target as HTMLElement;
                const isArrow = Boolean(target.closest(".nav-arrow"));

                if (href && !isArrow) {
                  if (event.ctrlKey || event.metaKey) {
                    window.open(href, "_blank");
                    return;
                  }
                  event.preventDefault();
                  closeAll();
                  router.push(href);
                  return;
                }

                event.preventDefault();
                setSearchOpen(false);
                const keyboardActivation = event.detail === 0;
                setOpenDropdown((current) =>
                  current?.label === label &&
                  (current.openedBy === "activation" || keyboardActivation)
                    ? null
                    : { label, openedBy: "activation" },
                );
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" && href) {
                  const target = event.target as HTMLElement;
                  const isArrow = Boolean(target.closest(".nav-arrow"));
                  if (!isArrow) {
                    event.preventDefault();
                    closeAll();
                    router.push(href);
                  }
                }
              }}
            >
              {label}{" "}
              <span
                className="nav-arrow"
                aria-hidden="true"
                role="button"
                tabIndex={-1}
                title={`Toggle ${label} menu`}
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  setSearchOpen(false);
                  setOpenDropdown((current) =>
                    current?.label === label
                      ? null
                      : { label, openedBy: "activation" },
                  );
                }}
              >
                ⌄
              </span>
            </summary>
            <div className="dropdown">
              {links.map(({ href, label, target, rel }) => (
                <Link href={href} key={href} target={target} rel={rel} onClick={closeAll}>
                  {label}
                </Link>
              ))}
            </div>
          </details>
        ))}
        {pages.map(({ href, label }) => (
          <Link className="nav-link" href={href} key={href} onClick={closeAll}>
            {label}
          </Link>
        ))}
        <button
          type="button"
          className="search-button"
          ref={searchRef}
          aria-expanded={searchOpen}
          aria-controls="site-search-panel"
          onClick={() => {
            setOpenDropdown(null);
            setSearchOpen(!searchOpen);
          }}
        >
          Search <span aria-hidden="true">⌕</span>
        </button>
        {searchOpen && (
          <div className="search-panel" id="site-search-panel">
            <label htmlFor="site-search">Search Workhour Business</label>
            <input
              ref={searchField}
              id="site-search"
              placeholder="Search businesses, services, or stories"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            {results.length > 0 ? (
              <ul className="search-results">
                {results.map(({ href, label, type, target, rel }) => (
                  <li key={href}>
                    <Link href={href} target={target} rel={rel} onClick={closeAll}>
                      <small>{type}</small>
                      <strong>{label}</strong>
                      <span aria-hidden="true">↗</span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <span role="status">
                {terms.length
                  ? "No matching pages or businesses."
                  : "Search the site content"}
              </span>
            )}
          </div>
        )}
        <Link className="contact-button" href="/contact/" onClick={closeAll}>
          Contact Us <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  );
}
