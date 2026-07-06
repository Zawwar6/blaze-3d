"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { allProducts } from "../../data/product";

// Marquee source: every product's main/cover image (images[0]) from the
// real catalog, so the strip shows one tile per product rather than
// individual strain variant shots.
const MARQUEE_PRODUCTS = allProducts.map((product) => ({
  name: product.name,
  image: product.images[0],
}));

const HeroSection = () => {
  const primaryBtnRef = useRef<HTMLButtonElement>(null);
  const secondaryBtnRef = useRef<HTMLButtonElement>(null);

  // Initial GSAP reveal timeline for the centered logo, CTAs, and marquee
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(
      ".title-reveal",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2 }
    )
      .fromTo(
        ".btn-reveal",
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, stagger: 0.12 },
        "-=0.8"
      )
      .fromTo(
        ".marquee-reveal",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 },
        "-=0.7"
      );
  }, []);

  // Magnetic button hover effect, unchanged from the original design language
  const setupMagneticButton = useCallback((btn: HTMLButtonElement | null) => {
    if (!btn) return;

    const handleBtnMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * 0.4,
        y: y * 0.4,
        duration: 0.35,
        ease: "power2.out",
      });
    };

    const handleBtnMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1.1, 0.4)",
      });
    };

    btn.addEventListener("mousemove", handleBtnMouseMove);
    btn.addEventListener("mouseleave", handleBtnMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", handleBtnMouseMove);
      btn.removeEventListener("mouseleave", handleBtnMouseLeave);
    };
  }, []);

  useEffect(() => {
    const cleanPrimary = setupMagneticButton(primaryBtnRef.current);
    const cleanSecondary = setupMagneticButton(secondaryBtnRef.current);
    return () => {
      if (cleanPrimary) cleanPrimary();
      if (cleanSecondary) cleanSecondary();
    };
  }, [setupMagneticButton]);

  // Duplicate the product list so the marquee track is exactly 200% wide.
  // Animating that track from translateX(0%) to translateX(-50%) loops seamlessly
  // with no visible seam, since the second half is an identical copy of the first.
  const marqueeItems = [...MARQUEE_PRODUCTS, ...MARQUEE_PRODUCTS];

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden flex items-center bg-black"
    >
      {/* Background Video — untouched */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Cinematic Overlays — untouched */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 z-0" />
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none z-0" />

      {/* Centered content stack: logo, CTAs, marquee */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center gap-10 sm:gap-12 px-6 py-24 text-center select-none">
        {/* Logo / Main Focal Point */}
        <h1 className="title-reveal font-display font-extralight tracking-tight text-zinc-100 text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-none">
          THE BLAZE BRAND
        </h1>

        {/* CTA Buttons */}
        <div className="btn-reveal flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center">
          <button
            ref={primaryBtnRef}
            className={cn(
              "relative group px-8 py-4 w-full sm:w-64 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-500 overflow-hidden flex items-center justify-center gap-2",
              "bg-white text-black hover:scale-[1.03] active:scale-[0.98]"
            )}
          >
            <span>Explore Collection</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-40 group-hover:animate-shine" />
          </button>

          <button
            ref={secondaryBtnRef}
            className="group px-8 py-4 w-full sm:w-auto rounded-xl text-xs font-bold tracking-widest uppercase border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white transition-all duration-300 flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
            <span>Lab Reports</span>
          </button>
        </div>

        {/* Product Image Marquee */}
        <div className="marquee-reveal w-full max-w-5xl">
          <div
            className="relative w-full overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }}
          >
            <div className="marquee-track flex items-center gap-6 sm:gap-8 w-max">
              {marqueeItems.map((product, i) => (
                <div
                  key={`${product.name}-${i}`}
                  className="flex-shrink-0 w-40 h-40 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden flex items-center justify-center"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee-scroll 28s linear infinite;
        }
        @keyframes marquee-scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;