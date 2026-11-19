import Link from "next/link";
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
          <a href="https://inceptura.workhourbusiness.com">Inceptura</a>
          <a href="https://leaderspinnacle.workhourbusiness.com">Leaders Pinnacle</a>
          <a href="https://employaa.workhourbusiness.com">Employaa</a>
          <a href="https://elevatrain.workhourbusiness.com">Elevatrain</a>
          <a href="https://gotravelglobal.workhourbusiness.com">Go Travel Global</a>
          <a href="https://remunerax.workhourbusiness.com">Remunerax</a>
          <a href="https://thinkrunspace.workhourbusiness.com">ThinkRunSpace</a>
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
