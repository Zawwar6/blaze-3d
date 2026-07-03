"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { SiInstagram, SiTiktok } from "react-icons/si";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled 
        ? "bg-[black]/95 backdrop-blur-xl border-b border-white/10" 
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/assets/Blaze.png"
              alt="Blaze Brand Logo"
              width={250}
              height={250}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 text-md font-medium">
            <Link href="/" className="text-zinc-300 hover:text-white transition-colors">Home</Link>
            <Link href="/lab-report" className="text-zinc-300 hover:text-white transition-colors">Lab Reports</Link>
            <Link href="/about" className="text-zinc-300 hover:text-white transition-colors">About Us</Link>
            <Link href="/products" className="text-zinc-300 hover:text-white transition-colors">Products</Link>
            <Link href="/blog" className="text-zinc-300 hover:text-white transition-colors">Catalog</Link>
            <Link href="/contact" className="text-zinc-300 hover:text-white transition-colors">Contact Us</Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* <Button className="hidden md:flex bg-white text-black hover:bg-white/90 rounded-xl px-6 font-medium">
              Shop Now
            </Button> */}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-2xl text-zinc-300 p-2"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0f] border-t border-white/10">
          <div className="px-6 py-8 flex flex-col gap-6 text-lg">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-zinc-300 hover:text-white">Home</Link>
            <Link href="/lab-report" className="text-zinc-300 hover:text-white transition-colors">Lab Reports</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-zinc-300 hover:text-white">About Us</Link>
            <Link href="/products" onClick={() => setIsOpen(false)} className="text-zinc-300 hover:text-white">Products</Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="text-zinc-300 hover:text-white">Catalog</Link>
            <Link href="/contact" className="text-zinc-300 hover:text-white transition-colors">Contact Us</Link>
            
            <div className="pt-6 border-t border-white/10">
              {/* <Button className="w-full bg-white text-black hover:bg-white/90 rounded-xl py-6 text-base">
                Shop Collection
              </Button> */}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;