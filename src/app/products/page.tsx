"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/sections/navbar";
import Link from "next/link";

const categories = [
  { id: "ALL", label: "ALL" },
  { id: "THCA", label: "THCA" },
  { id: "THCP", label: "THCP" },
  { id: "DELTA8", label: "DELTA 8" },
  { id: "DELTA10", label: "DELTA 10" },
];

const products = [
  {
    id: 1,
    name: "BLAZE 1GM THCA FLOWER (20CT GREEN JAR)",
    image: "/assets/Green-jars-main-pic.jpeg",
    category: "THCA",
  },
  {
    id: 2,
    name: "BLAZE 1GM THCA FLOWER (20 CT RED JAR)",
    image: "/assets/red-jar-main-pic.jpeg",
    category: "THCA",
  },
  {
    id: 3,
    name: "BLAZE DELTA 10 1GM PREROLLS (40 COUNT)",
    image: "/assets/main-pics.jpeg",
    category: "DELTA10",
  },
  {
    id: 4,
    name: "BLAZE DELTA 8 1GM PREROLLS (40 COUNT)",
    image: "/assets/main-pic.jpeg",
    category: "DELTA8",
  },
  {
    id: 5,
    name: "BLAZE THCA 1GM PREROLLS (40 COUNT)",
    image: "/assets/yellow main pic.jpeg",
    category: "THCA",
  },
  {
    id: 11,
    name: "BLAZE THCA DIAMOND DUSTED 1GM PREROLLS (24 COUNT)",
    image: "/assets/Blaze-diamond-main-pic.jpeg",
    category: "THCA",
  },
  {
    id: 12,
    name: "BLAZE DELTA 8 EXTREME 1GM PREROLLS (30 COUNT)",
    image: "/assets/extreme-main-pic.jpeg",
    category: "DELTA8",
  },
  {
    id: 13,
    name: "BLAZE THCA GOLD 1GM PREROLLS (40 COUNT)",
    image: "/assets/Gold-main pic.jpeg",
    category: "THCA",
  },
  {
    id: 14,
    name: "BLAZE THCA ELITE 1GM PREROLLS (40 COUNT)",
    image: "/assets/elite-main-pic.jpeg",
    category: "THCA",
  },
  {
    id: 18,
    name: "BLAZE THCP - THCA 1GM PREROLLS (30 COUNT)",
    image: "/assets/Blaze-Pink-main-pic.jpeg",
    category: ["THCP", "THCA"],
  },
];

function ProductCard({ product }: { product: any }) {
  return (
    <div className="group bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden transition-all duration-300 hover:border-white/30 hover:-translate-y-2">
      <div className="relative h-[320px] bg-black flex items-center justify-center overflow-hidden">
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
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("ALL");

const filteredProducts =
  activeTab === "ALL"
    ? products
    : products.filter((product) => {
        if (Array.isArray(product.category)) {
          return product.category.includes(activeTab);
        }

        return product.category === activeTab;
      });

  return (
    <>
      <Navbar />

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
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
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
            {filteredProducts.map((product) => (
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