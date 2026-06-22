"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/sections/navbar";
import Link from "next/dist/client/link";

const categories = [
  { id: "ALL", label: "ALL" },
  { id: "THCA", label: "THCA" },
  { id: "THCP", label: "THCP" },
  { id: "DELTA8", label: "DELTA 8" },
  { id: "DELTA10", label: "DELTA 10" },
];

const products = {
  ALL: [
    {
      id: 1,
      name: "BLAZE 1GM THCA FLOWER (20CT GREEN JAR)",
      image: "/assets/Green-Jar-5-flav-main-pic.jpeg",
    },
    {
      id: 2,
      name: "BLAZE 1GM THCA FLOWER (20 CT RED JAR)",
      image: "/assets/blaze-red.jpeg",
    },
    {
      id: 3,
      name: "BLAZE DELTA 10 1GM PREROLLS (40 COUNT)",
      image: "/assets/delta-10-main-pic.jpeg",
    },
    {
      id: 4,
      name: "BLAZE DELTA 8 1GM PREROLLS (40 COUNT)",
      image: "/assets/Delta-8-main-picture.jpeg",
    },
    {
      id: 5,
      name: "BLAZE THCA 1GM PREROLLS (40 COUNT)",
      image: "/assets/2.jpg",
    },
    {
      id: 11,
      name: "BLAZE THCA DIAMOND DUSTED 1GM PREROLLS (24 COUNT)",
      image: "/assets/11.jpg",
    },
    {
      id: 12,
      name: "BLAZE DELTA 8 EXTREME 1GM PREROLLS (30 COUNT)",
      image: "/assets/Blaze-Extreme-Main Pic.jpeg",
    },
    {
      id: 13,
      name: "BLAZE THCA GOLD 1GM PREROLLS (40 COUNT)",
      image: "/assets/Blaze-Gold-main-Pic.jpeg",
    },
    {
      id: 14,
      name: "BLAZE THCA ELITE 1GM PREROLLS (40 COUNT)",
      image: "/assets/blaze-blue.jpeg",
    },
    {
      id: 15,
      name: "BLAZE THCP - THCA 1GM PREROLLS (30 COUNT)",
      image: "/assets/24.jpg",
    }

  ],

  THCA: [
    {
      id: 16,
      name: "BLAZE THCA ELITE 1GM PREROLLS (40 COUNT)",
      image: "/assets/5.jpg",
    },
    {
      id: 17,
      name: "BLAZE THCA GOLD 1GM PREROLLS (40 COUNT)",
      image: "/assets/6.jpg",
    },
  ],

  THCP: [
    {
      id: 18,
      name: "BLAZE THCP - THCA 1GM PREROLLS (30 COUNT)",
      image: "/assets/7.jpg",
    },
  ],

  DELTA8: [
    {
      id: 19,
      name: "BLAZE DELTA 8 EXTREME 1GM PREROLLS (30 COUNT)",
      image: "/assets/17.jpg",
    },
  ],

  DELTA10: [
    {
      id: 3,
      name: "BLAZE DELTA 10 1GM PREROLLS (40 COUNT)",
      image: "/assets/1.jpg",
    },
  ],
};

function ProductCard({ product }: { product: any }) {
  return (
    
    <div className="group bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden transition-all duration-300 hover:border-white/30 hover:-translate-y-2">
      <div className="relative h-[320px] bg-black flex items-center justify-center overflow-hidden">
        <span className="absolute top-4 left-4 z-10 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full">
          {product.badge}
        </span>

        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="w-64 h-64 object-contain transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center gap-3">
          <Link href={`/products/${product.id}`}>
          <button className="bg-white text-black px-6 py-3 rounded-xl font-medium">
            Quick View
         </button>
         </Link>
        </div>
      </div>

      <div className="p-5">

        <h3 className="text-white text-lg font-semibold">
          {product.name}
        </h3>

        <div className="flex items-center gap-3 mt-3">
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("ALL");

  return (
    <>
    <Navbar/>
    <section className="bg-[#050505] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-green-400 uppercase tracking-[0.3em] text-sm">
            Premium Collection
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-white mt-4">
            Our Products
          </h1>

          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto">
            Explore our premium vape collection featuring THCA,
            THCP, Delta 8 and Delta 10 products crafted for
            flavor, quality and performance.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300
                ${
                  activeTab === category.id
                    ? "bg-white text-black"
                    : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products[
            activeTab as keyof typeof products
          ]?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
    </>
  );
}