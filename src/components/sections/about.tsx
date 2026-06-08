"use client";
import React from "react";
import { BlurIn } from "../reveal-animations";
import { Button } from "../ui/button";
import Link from "next/link";
import { SiGithub, SiInstagram } from "react-icons/si";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa6";
import gsap from "gsap";
import { useRef, useEffect } from "react";

const AboutSection = () => {
  const vapeRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (vapeRef.current) {
      gsap.to(vapeRef.current, {
        y: -25,
        rotationX: 8,
        rotationY: 6,
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#0a0a0f] py-24 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[length:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-teal-950/30 via-transparent to-cyan-950/30" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left Visual - Vape Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-8 bg-gradient-to-br from-teal-400/30 via-cyan-400/20 to-transparent rounded-[3.5rem] blur-3xl group-hover:opacity-75 transition-opacity" />
              
              <img
                ref={vapeRef}
                src="/assets/vape.png"
                alt="Blaze Brand Vape"
                className="relative w-full max-w-[460px] h-auto select-none drop-shadow-2xl"
                style={{
                  transformStyle: "preserve-3d",
                  filter: "drop-shadow(0 40px 80px rgba(100, 220, 255, 0.4))",
                }}
              />

              {/* Glow Rings */}
              <div className="absolute inset-0 rounded-[3.5rem] border border-teal-400/20 pointer-events-none" />
              <div className="absolute -inset-4 rounded-[3.5rem] border border-cyan-400/10 pointer-events-none" />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 space-y-10">
            <BlurIn>
              <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-zinc-900/80 border border-teal-400/30 rounded-full">
                <div className="w-2.5 h-2.5 bg-teal-400 rounded-full animate-pulse" />
                <span className="text-teal-400 text-sm font-mono tracking-[3px] uppercase">Premium Vaping Experience</span>
              </div>
            </BlurIn>

            <BlurIn delay={0.1}>
              <h1 className="text-6xl md:text-7xl font-thin tracking-tighter text-white leading-none">
                We are <span className="bg-gradient-to-r from-white via-teal-300 to-cyan-400 bg-clip-text text-transparent">Blaze Brand</span>
              </h1>
            </BlurIn>

            <BlurIn delay={0.3}>
              <p className="text-2xl text-zinc-400 font-light">
                Redefining the Art of Vaping
              </p>
            </BlurIn>

            <BlurIn delay={0.5}>
              <div className="space-y-6 text-zinc-300 leading-relaxed text-[17.5px]">
                <p>
                  Blaze Brand was born from a passion for innovation, flavor, and performance. 
                  We craft premium vaping devices that deliver exceptional taste, smooth draws, 
                  and unmatched reliability.
                </p>
                <p>
                  Every product is meticulously engineered with high-quality materials, advanced 
                  heating technology, and sleek minimalist design. Whether you're a beginner or a 
                  seasoned vaper, Blaze Brand offers an elevated experience tailored to your lifestyle.
                </p>
                <p>
                  We believe vaping should be more than just a habit — it should be a ritual of 
                  relaxation, flavor exploration, and personal style.
                </p>
              </div>
            </BlurIn>

            {/* Brand Values */}
            <BlurIn delay={0.7}>
              <div className="grid grid-cols-3 gap-8 pt-6">
                <div className="text-center">
                  <div className="text-teal-400 text-4xl mb-2">🔥</div>
                  <h4 className="font-medium text-white">Intense Flavor</h4>
                  <p className="text-sm text-zinc-500 mt-1">Bold &amp; Pure</p>
                </div>
                <div className="text-center">
                  <div className="text-teal-400 text-4xl mb-2">⚡</div>
                  <h4 className="font-medium text-white">Long Lasting</h4>
                  <p className="text-sm text-zinc-500 mt-1">Power That Lasts</p>
                </div>
                <div className="text-center">
                  <div className="text-teal-400 text-4xl mb-2">✦</div>
                  <h4 className="font-medium text-white">Premium Design</h4>
                  <p className="text-sm text-zinc-500 mt-1">Sleek &amp; Modern</p>
                </div>
              </div>
            </BlurIn>

            {/* CTA Buttons */}
            {/* <BlurIn delay={0.9}>
              <div className="flex flex-wrap gap-4 pt-8">
                <Link href="#shop">
                  <Button size="lg" className="bg-white text-black hover:bg-white/90 px-10 text-base font-medium">
                    Explore Collection
                  </Button>
                </Link>

                <Link href="mailto:contact@blazebrand.com">
                  <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 flex items-center gap-3">
                    <FaEnvelope /> Contact Us
                  </Button>
                </Link>

                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10">
                    <SiInstagram size={24} />
                  </Button>
                </a>
              </div>
            </BlurIn> */}
          </div>
        </div>
      </div>

      {/* Subtle Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent" />
    </section>
  );
};

export default AboutSection;