"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setMobileOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (typeof window !== "undefined" && window.innerWidth > 960) {
      setOpenDropdown(name);
    }
  };

  const handleMouseLeave = () => {
    if (typeof window !== "undefined" && window.innerWidth > 960) {
      setOpenDropdown(null);
    }
  };

  const handleToggleClick = (e: React.MouseEvent, name: string) => {
    // On mobile screens, toggle on click
    if (typeof window !== "undefined" && window.innerWidth <= 960) {
      e.preventDefault();
      setOpenDropdown((prev) => (prev === name ? null : name));
    }
  };

  const closeAll = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      <header className="site-header managed-navigation">
          <Link href="/" className="brand" aria-label="Workhour Business home" onClick={closeAll}>
            <Image
              src="/workhour-business-logo.png"
              alt="Workhour Business"
              width={194}
              height={40}
              priority
              style={{ width: "194px", height: "auto", display: "block" }}
            />
          </Link>

          <button
            className="menu-toggle"
            aria-expanded={mobileOpen}
            aria-controls="main-navigation"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>

          <nav
            id="main-navigation"
            className={`nav ${mobileOpen ? "open" : ""}`}
            aria-label="Main navigation"
          >
            {/* About Us Dropdown */}
                <details
                  className="nav-dropdown"
                  open={openDropdown === "about"}
                  onMouseEnter={() => handleMouseEnter("about")}
                  onMouseLeave={handleMouseLeave}
                >
                  <summary
                    className="nav-link"
                    aria-expanded={openDropdown === "about"}
                    onClick={(e) => handleToggleClick(e, "about")}
                  >
                    About Us <span aria-hidden="true">▾</span>
                  </summary>
                  <div className="dropdown">
                    <Link href="/about/" onClick={closeAll}>
                      About WHB
                    </Link>
                    <Link href="/about/our-story/" onClick={closeAll}>
                      Our Story
                    </Link>
                    <Link href="/about/our-impact/" onClick={closeAll}>
                      Our Impact
                    </Link>
                    <Link href="/about/responsible-business/" onClick={closeAll}>
                      Responsible Business
                    </Link>
                    <Link href="/about/presence/" onClick={closeAll}>
                      Presence
                    </Link>
                  </div>
                </details>

                {/* Portfolio Dropdown */}
                    <details
                      className="nav-dropdown"
                      open={openDropdown === "portfolio"}
                      onMouseEnter={() => handleMouseEnter("portfolio")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <summary
                        className="nav-link"
                        aria-expanded={openDropdown === "portfolio"}
                        onClick={(e) => handleToggleClick(e, "portfolio")}
                      >
                        Portfolio <span aria-hidden="true">▾</span>
                      </summary>
                      <div className="dropdown">
                        <Link href="/businesses/#inceptura" onClick={closeAll}>
                          Inceptura
                        </Link>
                        <Link href="/businesses/#leaders-pinnacle" onClick={closeAll}>
                          Leaders Pinnacle
                        </Link>
                        <Link href="/businesses/#employaa" onClick={closeAll}>
                          Employaa
                        </Link>
                        <Link href="/businesses/#elevatrain" onClick={closeAll}>
                          Elevatrain
                        </Link>
                        <Link href="/businesses/#gotravel" onClick={closeAll}>
                          Go Travel Global
                        </Link>
                        <Link href="/businesses/#remunerax" onClick={closeAll}>
                          Remunerax
                        </Link>
                        <Link href="/businesses/#thinkrunspace" onClick={closeAll}>
                          ThinkRunSpace
                        </Link>
                      </div>
                    </details>

                    {/* Services Dropdown */}
                        <details
                          className="nav-dropdown"
                          open={openDropdown === "services"}
                          onMouseEnter={() => handleMouseEnter("services")}
                          onMouseLeave={handleMouseLeave}
                        >
                          <summary
                            className="nav-link"
                            aria-expanded={openDropdown === "services"}
                            onClick={(e) => handleToggleClick(e, "services")}
                          >
                            Services <span aria-hidden="true">▾</span>
                          </summary>
                          <div className="dropdown">
                            <Link href="/services/" onClick={closeAll}>
                              All services
                            </Link>
                            <Link href="/services/website-designing/" onClick={closeAll}>
                              Website Designing
                            </Link>
                            <Link href="/services/content-animation/" onClick={closeAll}>
                              Content Animation Studio
                            </Link>
                            <Link href="/services/seo-marketing/" onClick={closeAll}>
                              SEO &amp; Marketing
                            </Link>
                          </div>
                        </details>

                          <Link className="nav-link" href="/announcements/" onClick={closeAll}>
                            Announcement
                          </Link>
                            <Link className="nav-link" href="/careers/" onClick={closeAll}>
                              Careers
                            </Link>
                              <Link className="nav-link" href="/news-media/" onClick={closeAll}>
                                News &amp; Media
                              </Link>
                                <Link className="nav-link" href="/global-presence/" onClick={closeAll}>
                                  Global Presence
                                </Link>

                                <button
                                  type="button"
                                  className="search-button"
                                  aria-expanded={searchOpen}
                                  aria-controls="site-search-panel"
                                  onClick={() => setSearchOpen(!searchOpen)}
                                >
                                  Search <span aria-hidden="true">⌕</span>
                                </button>

                                  <Link className="contact-button" href="/contact/" onClick={closeAll}>
                                    Contact Us <span aria-hidden="true">→</span>
                                  </Link>
                                </nav>
                              </header>

                              {/* Simple Search Overlay if open */}
                              {searchOpen && (
                                  <div
                                    className="site-search-panel"
                                    style={{
                                      background: "#fff",
                                      borderBottom: "1px solid #edf1f0",
                                      padding: "20px clamp(24px, 6vw, 104px)",
                                      display: "flex",
                                      gap: "16px",
                                      alignItems: "center",
                                    }}
                                  >
                                    <input
                                      type="search"
                                      placeholder="Search Workhour Business..."
                                      autoFocus
                                      style={{
                                        flex: 1,
                                        padding: "12px 18px",
                                        border: "1px solid #dbe5e8",
                                        borderRadius: "6px",
                                        fontSize: "14px",
              outline: "none",
                                      }}
                                    />
                                    <button
                                      type="button"
                                      onClick={() => setSearchOpen(false)}
                                      style={{
                                        background: "none",
                                        border: "none",
                                        fontSize: "18px",
                                        cursor: "pointer",
              color: "var(--ink)",
                                      }}
                                    >
                                      ✕
                                    </button>
                                  </div>
      )}
                                </>
                              );
}
