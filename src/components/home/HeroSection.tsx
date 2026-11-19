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
  const [isPlaying, setIsPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
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
    if (!isPlaying || reduceMotion || hovered || focused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, reduceMotion, hovered, focused]);

  const slide = heroSlides[currentSlide];

  return (
    <section
      className="hero section-pad"
      data-slide={currentSlide}
      role="region"
      aria-roledescription="carousel"
      aria-label="Workhour Business highlights"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setHovered(true);
      }}
      onPointerLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      {/* Hero Background Image */}
      <Image
        key={slide.image}
        src={slide.image}
        alt=""
        fill
        preload={currentSlide === 0}
        className="hero-image"
        style={{ objectFit: "cover", zIndex: 0 }}
      />

      <div className="hero-overlay" aria-hidden="true" />

      {/* Orbit Animation */}
      <div className="hero-orbit" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>

      <div className="hero-copy">
        <p className="eyebrow">Workhour Business</p>
        <div className="hero-counter" aria-live="polite">
          {slide.number} <span>/ 04</span>
        </div>
        <h1>{slide.headline}</h1>
        <p className="hero-sub">
          Business capability for the complete journey — from the first idea to the next horizon.
        </p>
        <Link className="button button-light" href="/about/">
          About Us <span aria-hidden="true">↗</span>
        </Link>

        {/* Carousel Controls */}
        <div className="hero-controls" aria-label="Slide controls">
          <button
            aria-label="Previous slide"
            onClick={() =>
              setCurrentSlide((prev) =>
                prev === 0 ? heroSlides.length - 1 : prev - 1
              )
            }
          >
            ←
          </button>

          {heroSlides.map((s, idx) => (
            <button
              key={s.number}
              aria-current={currentSlide === idx ? "true" : undefined}
              aria-label={`Go to slide ${idx + 1}`}
              className={currentSlide === idx ? "dot active" : "dot"}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}

          <button
            aria-label="Next slide"
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
            }
          >
            →
          </button>

          <button
            aria-label={isPlaying ? "Pause slideshow" : "Resume slideshow"}
            className="pause"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
      </div>
    </section>
  );
}
