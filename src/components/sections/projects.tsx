"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/dist/client/link";

const categories = [
  { id: "ALL", label: "ALL", count: 12 },
  { id: "THCA", label: "THCA", count: 8 },
  { id: "THCP", label: "THCP", count: 6 },
  { id: "DELTA 8", label: "DELTA 8", count: 24 },
  { id: "DELTA 10", label: "DELTA 10", count: 15 },
];

const products = {
  ALL: [
    { id: 1, name: "Blaze Nano", img: "/assets/3.jpg" },
    { id: 2, name: "Blaze Max", img: "/assets/4.jpg" },
    { id: 3, name: "Blaze Ultra", img: "/assets/5.jpg" },
  ],
  THCA: [
    { id: 4, name: "Blaze Pod X",  img: "/assets/6.jpg" },
    { id: 5, name: "Blaze Pod Pro",  img: "/assets/7.jpg" },
    { id: 6, name: "Blaze Pod Mini",  img: "/assets/8.jpg" },
  ],
  THCP: [
    { id: 7, name: "Blaze Volt 100W", img: "/assets/9.jpg" },
    { id: 8, name: "Blaze Rage Kit",img: "/assets/10.jpg" },
  ],
  "DELTA 8": [
    { id: 9, name: "Blaze Mango Burst", img: "/assets/11.jpg" },
    { id: 10, name: "Blaze Arctic Mint", img: "/assets/12.jpg" },
  ],
  "DELTA 10": [
    { id: 11, name: "Blaze Delta 10", img: "/assets/1.jpg" },
    { id: 12, name: "Blaze Glass Tip", img: "/assets/8.jpg" },
  ],
};

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-teal-400/50 transition-all duration-300">
      <div className="relative h-64 flex items-center justify-center bg-black/40 overflow-hidden">
        <Image
          src={product.img}
          alt={product.name}
          width={500}
          height={500}
          className="w-90 h-90 object-contain transition-transform duration-500 group-hover:scale-110"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
          <Link href={`/products/${product.id}`}>
          <button className="bg-white text-black px-6 py-3 rounded-xl font-medium">
            Quick View
         </button>
         </Link>
        </div>

        {/* Price Tag */}
        <div className="absolute top-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full backdrop-blur-md">
          {product.price}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-lg text-white">{product.name}</h3>
        <p className="text-teal-400 text-sm mt-1">{product.flavor}</p>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  return (
    <section className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-thin tracking-tighter text-white">
            Explore Our Collection
          </h2>
          <p className="text-zinc-400 mt-4 text-xl">Premium Vapes Crafted for Excellence</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap cursor-pointer justify-center gap-2 mb-12 border-b border-white/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={cn(
                "  px-8 py-3.5 rounded-2xl text-sm font-medium transition-all duration-300",
                activeTab === cat.id
                  ? "bg-white text-black shadow-lg"
                  : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800"
              )}
            >
              {cat.label}
              <span className="ml-2 text-xs opacity-60">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products[activeTab as keyof typeof products]?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-16">
          <Button  size="lg" className="bg-white text-black hover:bg-white/90 px-12 py-7 text-base rounded-2xl">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;