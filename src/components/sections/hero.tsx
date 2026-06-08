"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useRef, useEffect, useCallback } from "react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";
import gsap from "gsap";

const HeroSection = () => {
  const { isLoading } = usePreloader();
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spinTweenRef = useRef<gsap.core.Tween | null>(null);
  const particlesRef = useRef<any[]>([]);

  const imageSrc = "/assets/vape.png";

  // Mouse tilt + spin
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current || !imageRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = (e.clientX - centerX) / (rect.width / 3);
    const mouseY = (e.clientY - centerY) / (rect.height / 3);

    const rotateY = Math.max(Math.min(mouseX * 22, 25), -25);
    const rotateX = Math.max(Math.min(-mouseY * 16, 20), -20);

    gsap.to(imageRef.current, {
      rotationX: rotateX,
      rotationY: rotateY,
      scale: 1.08,
      z: 40,
      duration: 0.6,
      ease: "power2.out",
      overwrite: true,
    });
  }, []);

  const startSpinning = () => {
    if (!imageRef.current) return;
    if (spinTweenRef.current) spinTweenRef.current.kill();

    spinTweenRef.current = gsap.to(imageRef.current, {
      rotationY: "+=360",
      duration: 8,
      ease: "none",
      repeat: -1,
    });
  };

  const stopSpinning = () => {
    if (spinTweenRef.current) {
      spinTweenRef.current.kill();
      spinTweenRef.current = null;
    }
  };

  const handleMouseEnter = useCallback(() => {
    document.addEventListener("mousemove", handleMouseMove);
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        filter: "drop-shadow(0 45px 80px rgba(100, 220, 255, 0.55)) brightness(1.18)",
        duration: 0.5,
      });
    }
    startSpinning();
  }, [handleMouseMove]);

  const handleMouseLeave = useCallback(() => {
    document.removeEventListener("mousemove", handleMouseMove);
    stopSpinning();

    if (imageRef.current) {
      gsap.to(imageRef.current, {
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        z: 0,
        filter: "drop-shadow(0 35px 70px rgba(0,0,0,0.75))",
        duration: 0.9,
        ease: "power3.out",
      });
    }

    if (shadowRef.current) {
      gsap.to(shadowRef.current, {
        x: 0,
        y: 55,
        scale: 0.95,
        opacity: 0.65,
        duration: 0.9,
        ease: "power3.out",
      });
    }
  }, []);

  // Slower & More Realistic Smoke
  const createParticle = (x: number, y: number) => ({
    x,
    y,
    vx: Math.random() * 0.8 - 0.4,
    vy: Math.random() * -1.8 - 0.8,     // Much slower rise
    life: Math.random() * 140 + 110,    // Longer life
    alpha: 0.85,
    size: Math.random() * 9 + 6,        // Bigger, softer puffs
    swirl: Math.random() * 0.008,
  });

  const animateSmoke = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    canvas.width = 820;
    canvas.height = 680;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Gentle continuous emission from mouthpiece (left side)
      if (Math.random() < 0.45) {
        const startX = canvas.width / 2 - 155;
        const startY = canvas.height / 2 - 138;
        particlesRef.current.push(createParticle(startX, startY));
      }

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];

        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.035;                    // Very gentle upward force
        p.vx += (Math.random() - 0.5) * p.swirl;
        p.vx *= 0.965;
        p.life -= 1;
        p.alpha = (p.life / 160) * 0.9;

        if (p.life <= 0) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha * 0.75;
        ctx.fillStyle = "#bae6fd";

        ctx.shadowBlur = 28;
        ctx.shadowColor = "#67e8f9";

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (p.life / 140), 0, Math.PI * 2);
        ctx.fill();

        // Extra soft outer layer for realistic vapor look
        ctx.globalAlpha = p.alpha * 0.35;
        ctx.fillStyle = "#f0f9ff";
        ctx.beginPath();
        ctx.arc(p.x + 6, p.y - 8, p.size * 1.6, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      requestAnimationFrame(animate);
    };

    animate();
  };

  // Increase smoke intensity slowly on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120 && particlesRef.current.length < 45) {
        for (let i = 0; i < 2; i++) {
          const canvas = canvasRef.current;
          if (canvas) {
            const startX = canvas.width / 2 - 150 + Math.random() * 35;
            const startY = canvas.height / 2 - 135;
            particlesRef.current.push(createParticle(startX, startY));
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -25,
        rotationX: 7,
        rotationY: 5,
        duration: 5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }

    animateSmoke();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (spinTweenRef.current) spinTweenRef.current.kill();
    };
  }, [handleMouseMove]);

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden bg-[#0a0a0f]">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[length:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-teal-950/30 via-transparent to-cyan-950/20" />

      <div className="grid md:grid-cols-2 h-full relative z-10">
        {/* Left Content */}
        <div className="h-full flex flex-col justify-center items-center md:items-start px-6 md:px-12 lg:px-20 xl:px-28">
          {!isLoading && (
            <div className="max-w-xl space-y-6">
              <BlurIn delay={0.7}>
                <Tooltip delayDuration={300}>
                  <TooltipTrigger asChild>
                    <h3
  className={cn(
    "font-thin text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200 ml-1 text-left cursor-default tracking-widest font-display",
    "text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
  )}
>
  We are the Blaze Brand
</h3>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="dark:bg-white dark:text-black">
                    Scroll down
                  </TooltipContent>
                </Tooltip>
              </BlurIn>

              <BlurIn delay={1.1}>
                <p className="text-2xl text-zinc-400 font-light tracking-wide">
                  Premium Vaping Experience
                </p>
              </BlurIn>

              <BlurIn delay={1.4}>
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link href="#shop">
                    {/* <Button size="lg" className="bg-white hover:bg-white/90 text-black font-medium px-9 py-6 text-base rounded-xl">
                      Shop Collection
                    </Button> */}
                  </Link>
                  <Link href="#shop">
                    {/* <Button size="lg" className="bg-white hover:bg-white/90 text-black font-medium px-9 py-6 text-base rounded-xl">
                      Shop Collection
                    </Button> */}
                  </Link>

                  {/* <div className="flex gap-3">
                    <Link href={config.social.github} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white rounded-xl px-5">
                        <SiGithub size={26} />
                      </Button>
                    </Link>
                    <Link href={config.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white rounded-xl px-5">
                        <SiLinkedin size={26} />
                      </Button>
                    </Link>
                  </div> */}
                </div>
              </BlurIn>
            </div>
          )}
        </div>

        {/* RIGHT SECTION - VAPE WITH SLOW REALISTIC SMOKE */}
        <div ref={containerRef} className="hidden md:flex items-center justify-center relative overflow-hidden">
          <div className="relative z-10">
            <div ref={shadowRef} className="absolute top-[58%] left-1/2 -translate-x-1/2 w-[520px] h-[110px] bg-black/75 rounded-[50%] blur-3xl" />

            <img
              ref={imageRef}
              src={imageSrc}
              alt="Blaze Brand Vape"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="w-[690px] h-auto select-none cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            />

            <canvas
              ref={canvasRef}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
              style={{ width: "820px", height: "680px" }}
            />
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] border border-teal-400/10 rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[820px] border border-cyan-400/5 rounded-full pointer-events-none" />

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[580px] h-48 bg-gradient-to-t from-cyan-400/20 to-transparent blur-3xl pointer-events-none" />
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
        <ScrollDownIcon />
      </div>
    </section>
  );
};

export default HeroSection;