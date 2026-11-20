"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const heroSlides = [
  {
    number: "01",
    headline: "Innovate to Exist",
    image: "/hero-innovate.webp",
  },
  {
    number: "02",
    headline: "Progress never sleeps",
    image: "/hero-progress.webp",
  },
  {
    number: "03",
    headline: "Evolve beyond limits",
    image: "/hero-evolve.webp",
  },
  {
    number: "04",
    headline: "Transformation is survival",
    image: "/hero-transform.webp",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    function updatePreference() {
      setReduceMotion(motionPreference.matches);
    }
    updatePreference();
    motionPreference.addEventListener("change", updatePreference);
    return () => motionPreference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reduceMotion]);

  const slide = heroSlides[currentSlide];

  return (
    <section
      className="hero section-pad"
      data-slide={currentSlide}
      role="region"
      aria-roledescription="carousel"
      aria-label="Workhour Business highlights"
    >
      {/* Hero Background Images - all slide images preserved with smooth crossfade */}
      {heroSlides.map((s, idx) => (
        <Image
          key={s.image}
          src={s.image}
          alt=""
          fill
          priority={idx === 0}
          className="hero-image"
          style={{
            objectFit: "cover",
            zIndex: 0,
            opacity: currentSlide === idx ? 1 : 0,
            transition: "opacity 1.2s ease-in-out",
            pointerEvents: "none",
          }}
        />
      ))}

      <div className="hero-overlay" aria-hidden="true" />

      {/* Orbit Animation */}
      <div className="hero-orbit" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>

      <div className="hero-copy">
        <p className="eyebrow">Workhour Business</p>
        <h1>{slide.headline}</h1>
        <p className="hero-sub">
          Business capability for the complete journey — from the first idea to the next horizon.
        </p>
        <Link className="button button-light" href="/about/">
          About Us <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
