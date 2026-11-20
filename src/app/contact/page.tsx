"use client";

import { useState } from "react";
import Link from "next/link";
import { companyLinkProps } from "@/lib/company-sites";
import Image from "next/image";

export default function ContactPage() {
  const [errors, setErrors] = useState<{
    email?: string;
    company?: string;
    message?: string;
  }>({});
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = form.elements.namedItem("email") as HTMLInputElement;
    const nextErrors = {
      email: !email.value.trim()
        ? "Enter your email address."
        : email.validity.typeMismatch
          ? "Enter a valid email address."
          : undefined,
      company: String(data.get("company")).trim()
        ? undefined
        : "Enter your company name.",
      message: String(data.get("message")).trim()
        ? undefined
        : "Enter a message.",
    };
    setErrors(nextErrors);
    const invalid = Object.entries(nextErrors).find(([, error]) => error);
    if (invalid) {
      setStatus("Review the highlighted fields and try again.");
      (form.elements.namedItem(invalid[0]) as HTMLElement).focus();
      return;
    }
    setStatus(
      "Your enquiry details have been validated locally. Please note submission is not connected yet, so no message has been sent.",
    );
  };

  return (
    <div className="review-page banner-page">
      <section
        aria-label="Contact Workhour Business introduction"
        className="PageBanner-module__C7wuVW__banner"
      >
        <Image
          alt="Illustrative professionals discussing their business needs"
          className="PageBanner-module__C7wuVW__image"
          src="/about-responsible-v2.webp"
          fill
          preload
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
            <span aria-current="page">Contact Workhour Business</span>
          </nav>
          <div className="PageBanner-module__C7wuVW__copy">
            <p className="PageBanner-module__C7wuVW__eyebrow">
              Workhour Business
            </p>
            <h1 className="PageBanner-module__C7wuVW__title">
              Contact Workhour Business
            </h1>
            <p className="PageBanner-module__C7wuVW__description">
              Find the business and service area that best matches your needs.
            </p>
          </div>
        </div>
      </section>

      <div className="review-inner">
        {/* Form Section */}
        <section
          aria-labelledby="contact-form-heading"
          className="ContactPage-module__2ov99W__formSection"
        >
          <p className="eyebrow teal">Contact Workhour Business</p>
          <h2 id="contact-form-heading">Tell us what you need.</h2>
          <p>
            Share your contact details and a message. Submission is not
            connected yet, so no message will be sent.
          </p>

          <form
            className="ContactEnquiryForm-module__E-5ava__form"
            onSubmit={handleSubmit}
            noValidate
          >
            <p className="ContactEnquiryForm-module__E-5ava__requiredNote">
              <span aria-hidden="true">*</span> Required fields
            </p>

            <div className="ContactEnquiryForm-module__E-5ava__field">
              <label htmlFor="contact-email">
                Email <span aria-hidden="true">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email ? "contact-email-error" : undefined
                }
              />
              {errors.email && (
                <p
                  id="contact-email-error"
                  className="ContactEnquiryForm-module__E-5ava__error"
                >
                  {errors.email}
                </p>
              )}
            </div>

            <div className="ContactEnquiryForm-module__E-5ava__field">
              <label htmlFor="contact-company">
                Company Name <span aria-hidden="true">*</span>
              </label>
              <input
                id="contact-company"
                name="company"
                type="text"
                required
                autoComplete="organization"
                aria-invalid={Boolean(errors.company)}
                aria-describedby={
                  errors.company ? "contact-company-error" : undefined
                }
              />
              {errors.company && (
                <p
                  id="contact-company-error"
                  className="ContactEnquiryForm-module__E-5ava__error"
                >
                  {errors.company}
                </p>
              )}
            </div>

            <div className="ContactEnquiryForm-module__E-5ava__field ContactEnquiryForm-module__E-5ava__messageField">
              <label htmlFor="contact-message">
                Message <span aria-hidden="true">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={6}
                required
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? "contact-message-error" : undefined
                }
              />
              {errors.message && (
                <p
                  id="contact-message-error"
                  className="ContactEnquiryForm-module__E-5ava__error"
                >
                  {errors.message}
                </p>
              )}
            </div>

            <p className="ContactEnquiryForm-module__E-5ava__unavailable">
              Enquiry submission is currently unavailable. This form checks your
              details locally; it does not send or store your message.
            </p>

            <button className="button button-dark" type="submit">
              Review enquiry <span aria-hidden="true">↗</span>
            </button>

            <p
              aria-live="polite"
              className="ContactEnquiryForm-module__E-5ava__status"
              role="status"
            >
              {status}
            </p>
          </form>
        </section>

        {/* Explore the Group Guidance */}
        <section className="contact-guidance">
          <p className="eyebrow teal">Explore the group</p>
          <h2>Choose the area that fits your need.</h2>
          <p>
            Review each business and its services to find the right starting
            point.
          </p>

          <div className="contact-service-links">
            <Link
              {...companyLinkProps("inceptura")}>
              <strong>Inceptura</strong>
              <span>Ideation to Execution</span>
              <span aria-hidden="true">↗</span>
            </Link>
            <Link
              {...companyLinkProps("leaders-pinnacle")}>
              <strong>Leaders Pinnacle</strong>
              <span>B2B events and market intelligence</span>
              <span aria-hidden="true">↗</span>
            </Link>
            <Link
              {...companyLinkProps("employaa")}>
              <strong>Employaa</strong>
              <span>Recruitment and staffing</span>
              <span aria-hidden="true">↗</span>
            </Link>
            <Link
              {...companyLinkProps("elevatrain")}>
              <strong>Elevatrain</strong>
              <span>Corporate training and workshops</span>
              <span aria-hidden="true">↗</span>
            </Link>
            <Link
              {...companyLinkProps("go-travel-global")}>
              <strong>Go Travel Global</strong>
              <span>Travel services</span>
              <span aria-hidden="true">↗</span>
            </Link>
            <Link
              {...companyLinkProps("remunerax")}>
              <strong>Remunerax</strong>
              <span>Payroll and workforce outsourcing</span>
              <span aria-hidden="true">↗</span>
            </Link>
            <Link
              {...companyLinkProps("thinkrunspace")}>
              <strong>ThinkRunSpace</strong>
              <span>Flexible workspace solutions</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        {/* Service Switcher */}
        <section className="contact-guidance">
          <p className="eyebrow teal">Workhour Business services</p>
          <h2>Start with a service area.</h2>
          <div className="service-switcher">
            <Link href="/services/website-designing/">
              Website Designing <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/services/content-animation/">
              Content Animation Studio <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/services/seo-marketing/">
              SEO &amp; Marketing <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
