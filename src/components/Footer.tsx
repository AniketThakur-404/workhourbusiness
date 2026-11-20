import Link from "next/link";
import { companyUrl } from "@/lib/company-sites";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="MainFooter-module__ck51Oq__footer">
      <div className="MainFooter-module__ck51Oq__footerTop">
        <Image
          src="/workhour-business-logo.jpeg"
          alt="Workhour Business"
          width={534}
          height={111}
        />
        <p>Workhour Business — we power your complete business journey.</p>
      </div>

      <div className="MainFooter-module__ck51Oq__footerLinks">
        <div>
          <small>Explore</small>
          <Link href="/about/">About Us</Link>
          <Link href="/businesses/">Businesses</Link>
          <Link href="/careers/">Careers</Link>
          <Link href="/global-presence/">Global Presence</Link>
        </div>

        <div>
          <small>Services</small>
          <Link href="/services/website-designing/">Website Designing</Link>
          <Link href="/services/content-animation/">Content Animation Studio</Link>
          <Link href="/services/seo-marketing/">SEO &amp; Marketing</Link>
        </div>

        <div>
          <small>Our businesses</small>
          <Link href={companyUrl("inceptura")}>Inceptura</Link>
          <Link href={companyUrl("leaders-pinnacle")}>Leaders Pinnacle</Link>
          <Link href={companyUrl("employaa")}>Employaa</Link>
          <Link href={companyUrl("elevatrain")}>Elevatrain</Link>
          <Link href={companyUrl("go-travel-global")}>Go Travel Global</Link>
          <Link href={companyUrl("remunerax")}>Remunerax</Link>
          <Link href={companyUrl("thinkrunspace")}>ThinkRunSpace</Link>
        </div>

        <div>
          <small>Connect</small>
          <Link href="/announcements/">Announcement</Link>
          <Link href="/news-media/">News &amp; Media</Link>
          <Link href="/contact/">Contact Us</Link>
        </div>
      </div>

      <div className="MainFooter-module__ck51Oq__footerBottom">
        <span>Copyright Workhour Business @ 2026</span>
        <Link href="/contact/">Contact options</Link>
      </div>
    </footer>
  );
}
