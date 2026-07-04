"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useEffect, useCallback, useState } from "react";
import gsap from "gsap";
import { Leaf, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

// Premium strain variants with custom visual theme mappings
const HERO_VARIANTS = [
  {
    name: "Blue Dream",
    tagline: "Californian Dream State",
    description: "A sativa-dominant hybrid featuring sweet berry notes. It provides a balanced full-body relaxation alongside gentle cerebral invigoration, perfect for all-day elevation.",
    image: "/assets/Blue-Dream-Sativa.jpeg",
    thc: "24.8%",
    terpenes: "Myrcene, Pinene",
    colorTheme: {
      primary: "#0ea5e9", // Sky Blue
      glow: "rgba(14, 165, 233, 0.45)",
      particle: "#7dd3fc",
      accentBg: "bg-sky-950/40 border-sky-500/30 text-sky-200",
      buttonGlow: "shadow-[0_0_25px_rgba(14, 165, 233, 0.5)]",
    }
  },
  {
    name: "GAS MASK INDICA",
    tagline: "Deep Nocturnal Peace",
    description: "A heavy-hitting indica strain with a pungent, earthy aroma and rich skunky undertones. Engineered to dissolve stress and usher in ultimate evening tranquility.",
    image: "/assets/Gas-Mask-Indica.jpeg",
    thc: "28.4%",
    terpenes: "Caryophyllene, Myrcene",
    colorTheme: {
      primary: "#a855f7", // Deep Purple
      glow: "rgba(168, 85, 247, 0.45)",
      particle: "#c084fc",
      accentBg: "bg-purple-950/40 border-purple-500/30 text-purple-200",
      buttonGlow: "shadow-[0_0_25px_rgba(168, 85, 247, 0.5)]",
    }
  },
  {
    name: "GREEN CRACK SATIVA",
    tagline: "Sharp Mental Acceleration",
    description: "A legendary sativa strain that delivers a surge of pure, clean energy. Tangy, mango-flavored undertones match a crisp focus that keeps you active and inspired.",
    image: "/assets/Green-Crack-Sativa.jpeg",
    thc: "26.1%",
    terpenes: "Limonene, Pinene",
    colorTheme: {
      primary: "#22c55e", // Lime Green
      glow: "rgba(34, 197, 94, 0.45)",
      particle: "#86efac",
      accentBg: "bg-green-950/40 border-green-500/30 text-green-200",
      buttonGlow: "shadow-[0_0_25px_rgba(34, 197, 94, 0.5)]",
    }
  },
  {
    name: "SOUR DIESEL HYBRID",
    tagline: "Legendary Energizing Punch",
    description: "An iconic strain with a pungent, diesel-like aroma and zesty citrus notes. Offers an uplifting cerebral experience that helps you navigate social settings effortlessly.",
    image: "/assets/Sour-Diesel-Hybrid.jpeg",
    thc: "25.5%",
    terpenes: "Limonene, Caryophyllene",
    colorTheme: {
      primary: "#10b981", // Emerald Green
      glow: "rgba(16, 185, 129, 0.45)",
      particle: "#6ee7b7",
      accentBg: "bg-emerald-950/40 border-emerald-500/30 text-emerald-200",
      buttonGlow: "shadow-[0_0_25px_rgba(16, 185, 129, 0.5)]",
    }
  },
  {
    name: "GIRL SCOUT COOKIES INDICA",
    tagline: "Decadent Dessert Euphoria",
    description: "Renowned for its sweet, cookie-dough fragrance blended with subtle cherry-mint tones. Provides a warm, full-body hug combined with lighthearted euphoria.",
    image: "/assets/Girl-Scout-Cookies-Indica.jpeg",
    thc: "27.2%",
    terpenes: "Caryophyllene, Humulene",
    colorTheme: {
      primary: "#ec4899", // Magenta/Pink
      glow: "rgba(236, 72, 153, 0.45)",
      particle: "#f472b6",
      accentBg: "bg-pink-950/40 border-pink-500/30 text-pink-200",
      buttonGlow: "shadow-[0_0_25px_rgba(236, 72, 153, 0.5)]",
    }
  }
];

const HeroSection = () => {
  const [activeVariant, setActiveVariant] = useState(HERO_VARIANTS[0]);
  const activeVariantRef = useRef(activeVariant);

  // Sync ref to allow the requestAnimationFrame loop to read the latest theme color without react closures blocking it
  useEffect(() => {
    activeVariantRef.current = activeVariant;
  }, [activeVariant]);

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);

  // CTA button refs for magnetic attraction effect
  const primaryBtnRef = useRef<HTMLButtonElement>(null);
  const secondaryBtnRef = useRef<HTMLButtonElement>(null);

  // Mouse Tilt & Float effect on main jar display
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current || !imageRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = (e.clientX - centerX) / (rect.width / 2);
    const mouseY = (e.clientY - centerY) / (rect.height / 2);

    const rotateY = mouseX * 22;
    const rotateX = -mouseY * 18;

    gsap.to(imageRef.current, {
      rotationX: rotateX,
      rotationY: rotateY,
      x: mouseX * 15,
      y: mouseY * 15,
      scale: 1.05,
      duration: 0.6,
      ease: "power2.out",
      overwrite: "auto",
    });

    if (shadowRef.current) {
      gsap.to(shadowRef.current, {
        x: mouseX * -20,
        y: mouseY * -8,
        scale: 1.1 - Math.abs(mouseY) * 0.1,
        opacity: 0.85 - Math.abs(mouseY) * 0.2,
        duration: 0.6,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        rotationX: 0,
        rotationY: 0,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: "power3.out",
        overwrite: "auto",
      });
    }

    if (shadowRef.current) {
      gsap.to(shadowRef.current, {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 0.7,
        duration: 0.9,
        ease: "power3.out",
        overwrite: "auto",
      });
    }
  }, []);

  // Set up mouse events for 3D depth effect
  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (el) {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [handleMouseMove, handleMouseLeave]);

  // Initial GSAP Reveal Timelines & Stats Count-up
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(".badge-reveal",
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 0.2 }
    )
      .fromTo(".title-reveal",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15 },
        "-=0.9"
      )
      .fromTo(".desc-reveal",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 },
        "-=0.8"
      )
      .fromTo(".btn-reveal",
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, stagger: 0.12 },
        "-=0.8"
      )
      .fromTo(".stats-reveal",
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 },
        "-=0.7"
      )
      .fromTo(".selector-reveal",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 },
        "-=0.9"
      );

    // Fade-in the visual jar grid column
    gsap.fromTo(".jar-section-reveal",
      { scale: 0.85, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.8, ease: "power3.out" },
      "-=1.8"
    );

    // Animate stats counter numbers
    const counters = document.querySelectorAll(".stat-counter");
    counters.forEach(counter => {
      const target = parseFloat(counter.getAttribute("data-target") || "0");
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 3,
        delay: 0.8,
        ease: "power2.out",
        onUpdate: () => {
          counter.textContent = String(Math.floor(obj.val));
        }
      });
    });

    // Idle floating animation for the main jar
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -18,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  // Magnetic Button Hover Effects
  const setupMagneticButton = (btn: HTMLButtonElement | null) => {
    if (!btn) return;

    const handleBtnMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * 0.4,
        y: y * 0.4,
        duration: 0.35,
        ease: "power2.out"
      });
    };

    const handleBtnMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1.1, 0.4)"
      });
    };

    btn.addEventListener("mousemove", handleBtnMouseMove);
    btn.addEventListener("mouseleave", handleBtnMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", handleBtnMouseMove);
      btn.removeEventListener("mouseleave", handleBtnMouseLeave);
    };
  };

  useEffect(() => {
    const cleanPrimary = setupMagneticButton(primaryBtnRef.current);
    const cleanSecondary = setupMagneticButton(secondaryBtnRef.current);
    return () => {
      if (cleanPrimary) cleanPrimary();
      if (cleanSecondary) cleanSecondary();
    };
  }, []);

  // HTML5 Canvas Vapor Smoke System
  const createParticle = (x: number, y: number) => ({
    x,
    y,
    vx: (Math.random() - 0.5) * 1.2,
    vy: Math.random() * -1.8 - 0.7,
    life: Math.random() * 160 + 120,
    alpha: 0.9,
    size: Math.random() * 16 + 10,
    swirl: Math.random() * 0.012,
  });

  const animateSmoke = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Fixed internal bounds, styled responsively via CSS
    canvas.width = 650;
    canvas.height = 650;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Emit smoke puffs from behind the jar base
      if (Math.random() < 0.28) {
        const startX = canvas.width / 2 + (Math.random() * 90 - 45);
        const startY = canvas.height / 2 + 130;
        particlesRef.current.push(createParticle(startX, startY));
      }

      const activeTheme = activeVariantRef.current.colorTheme;

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];

        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.025; // Slow upward acceleration
        p.vx += (Math.random() - 0.5) * p.swirl;
        p.vx *= 0.975;
        p.life -= 1;
        p.alpha = (p.life / 200) * 0.85;

        if (p.life <= 0) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha * 0.55;
        ctx.fillStyle = activeTheme.particle;

        // Render neon particle glow
        ctx.shadowBlur = 32;
        ctx.shadowColor = activeTheme.primary;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (p.life / 180), 0, Math.PI * 2);
        ctx.fill();

        // Extra volumetric outer cloud for realism
        ctx.globalAlpha = p.alpha * 0.2;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(p.x + 4, p.y - 6, p.size * 1.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      requestAnimationFrame(animate);
    };

    animate();
  };

  useEffect(() => {
    animateSmoke();
  }, []);

  // Handle switching product strains with GSAP animation triggers
  const handleVariantChange = (variant: typeof HERO_VARIANTS[0]) => {
    if (variant.name === activeVariant.name) return;

    // Scale and rotate the current jar out of view
    gsap.to(imageRef.current, {
      scale: 0.65,
      opacity: 0.05,
      rotationY: "+=120",
      filter: "blur(5px)",
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => {
        // Swap core states
        setActiveVariant(variant);

        // Bring the new jar model in with a smooth organic spring ease
        gsap.fromTo(imageRef.current,
          { scale: 0.65, opacity: 0.05, rotationY: "-=120", filter: "blur(5px)" },
          {
            scale: 1,
            opacity: 1,
            rotationY: 0,
            filter: "blur(0px)",
            duration: 0.75,
            ease: "back.out(1.4)"
          }
        );
      }
    });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden flex items-center bg-black"
    >
      {/* Background Video */}
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

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 z-0" />
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-28 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Column: Branding Copy and CTAs */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 select-none">



          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none font-display">
              <span className="title-reveal block font-extralight text-zinc-400">THE BLAZE BRAND</span>

            </h1>

            {/* Strain Indicator & Subtitle */}
            <div className="title-reveal flex items-center justify-center lg:justify-start gap-3 pt-2">
              <span className={cn("text-[10px] tracking-widest font-black px-3 py-1 rounded-md uppercase border transition-all duration-700", activeVariant.colorTheme.accentBg)}>
                {activeVariant.name.split(" ").slice(-1)[0]}
              </span>
              <span className="text-md sm:text-lg font-light text-zinc-300 tracking-wider">
                {activeVariant.tagline}
              </span>
            </div>
          </div>

          {/* Dynamic Description */}
          <p className="desc-reveal text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed font-light">
            {activeVariant.description}
          </p>

          {/* CTA Buttons */}
          <div className="btn-reveal flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center">
            <button
              ref={primaryBtnRef}
              className={cn(
                "relative group px-8 py-4 w-full sm:w-64 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-500 overflow-hidden flex items-center justify-center gap-2",
                "bg-white text-black hover:scale-[1.03] active:scale-[0.98]"
              )}
              style={{
                boxShadow: `0 10px 40px -10px ${activeVariant.colorTheme.primary}`
              }}
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              {/* Shimmer sheen layer */}
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



        </div>

        {/* Right Column: Immersive interactive showcase */}
        <div className="lg:col-span-6 flex flex-col justify-center items-center relative jar-section-reveal">
          <div className="relative flex items-center justify-center w-full max-w-[480px] sm:max-w-[550px] aspect-square rounded-full">

            {/* Interactive backdrop radial highlights */}
            <div
              className="absolute w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] rounded-full filter blur-[120px] opacity-40 transition-all duration-1000 ease-out pointer-events-none"
              style={{ backgroundColor: activeVariant.colorTheme.primary }}
            />

            {/* Canvas Particle Smoke */}
            <canvas
              ref={canvasRef}
              className="absolute inset-0 pointer-events-none z-10 w-full h-full object-contain"
            />

            {/* Orbiting Halo Ring */}
            <div
              className="absolute w-[360px] sm:w-[420px] h-[360px] sm:h-[420px] rounded-full border border-dashed border-white/10 opacity-30 animate-spin"
              style={{ animationDuration: "50s" }}
            />
            <div
              className="absolute w-[240px] sm:w-[280px] h-[240px] sm:h-[280px] rounded-full border border-double border-white/5 opacity-40 animate-spin"
              style={{ animationDuration: "25s", animationDirection: "reverse" }}
            />

            {/* Jar & Parallax Shadow Wrapper */}
            <div
              ref={containerRef}
              className="relative z-20 flex justify-center items-center cursor-grab active:cursor-grabbing w-full"
              style={{ perspective: "1500px" }}
            >

              {/* Dynamic Bottom Shadow */}
              <div
                ref={shadowRef}
                className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-[160px] sm:w-[200px] h-[15px] sm:h-[20px] bg-black/75 rounded-full filter blur-md opacity-70 transition-all duration-300"
              />

              {/* Product Jar Image */}
              <img
                ref={imageRef}
                src={activeVariant.image}
                alt={activeVariant.name}
                className="w-[200px] sm:w-[240px] md:w-[260px] h-auto object-contain select-none pointer-events-none transition-shadow duration-500"
                style={{
                  filter: `drop-shadow(0 20px 45px rgba(0,0,0,0.85)) drop-shadow(0 10px 20px ${activeVariant.colorTheme.glow})`
                }}
              />

            </div>

          </div>

          {/* Interactive Variant Dashboard Selector */}
          <div className="selector-reveal flex flex-wrap gap-2.5 justify-center mt-6 w-full max-w-lg z-30">
            {HERO_VARIANTS.map((v) => {
              const isActive = v.name === activeVariant.name;
              return (
                <button
                  key={v.name}
                  onClick={() => handleVariantChange(v)}
                  className={cn(
                    "px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all duration-300 flex items-center gap-2",
                    isActive
                      ? "bg-white text-black border-white shadow-xl scale-105"
                      : "bg-white/5 text-zinc-400 border-white/5 hover:border-white/20 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full block border border-black/10"
                    style={{ backgroundColor: v.colorTheme.primary }}
                  />
                  {v.name.split(" ").slice(0, 2).join(" ")}
                </button>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;