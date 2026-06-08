"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const categories = [
  { id: "disposable", label: "Disposable", count: 12 },
  { id: "pod", label: "Pod Systems", count: 8 },
  { id: "mod", label: "Box Mods", count: 6 },
  { id: "liquid", label: "E-Liquids", count: 24 },
  { id: "accessory", label: "Accessories", count: 15 },
];

const products = {
  disposable: [
    { id: 1, name: "Blaze Nano", img: "/assets/vapes/disposable1.png", flavor: "Mango Ice" },
    { id: 2, name: "Blaze Max", img: "/assets/vapes/disposable2.png", flavor: "Blue Razz" },
    { id: 3, name: "Blaze Ultra", img: "/assets/vapes/disposable3.png", flavor: "Watermelon" },
  ],
  pod: [
    { id: 4, name: "Blaze Pod X",  img: "/assets/vapes/pod1.png", flavor: "Strawberry" },
    { id: 5, name: "Blaze Pod Pro",  img: "/assets/vapes/pod2.png", flavor: "Mint" },
    { id: 6, name: "Blaze Pod Mini",  img: "/assets/vapes/pod3.png", flavor: "Cola" },
  ],
  mod: [
    { id: 7, name: "Blaze Volt 100W", img: "/assets/vapes/mod1.png", flavor: "—" },
    { id: 8, name: "Blaze Rage Kit",img: "/assets/vapes/mod2.png", flavor: "—" },
  ],
  liquid: [
    { id: 9, name: "Blaze Mango Burst", img: "/assets/liquids/liquid1.png", flavor: "Mango" },
    { id: 10, name: "Blaze Arctic Mint", img: "/assets/liquids/liquid2.png", flavor: "Mint" },
  ],
  accessory: [
    { id: 11, name: "Blaze Coil Pack" , img: "/assets/accessories/coils.png", flavor: "—" },
    { id: 12, name: "Blaze Glass Tip", img: "/assets/accessories/tip.png", flavor: "—" },
  ],
};

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-teal-400/50 transition-all duration-300">
      <div className="relative h-64 flex items-center justify-center bg-black/40 overflow-hidden">
        <Image
          src={product.img}
          alt={product.name}
          width={300}
          height={300}
          className="w-40 h-40 object-contain transition-transform duration-500 group-hover:scale-110"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
          <Button className="bg-white text-black hover:bg-white/90 px-8 py-2.5 rounded-xl font-medium">
            View Details
          </Button>
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
  const [activeTab, setActiveTab] = useState("disposable");

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
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-white/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={cn(
                "px-8 py-3.5 rounded-2xl text-sm font-medium transition-all duration-300",
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
          <Button size="lg" className="bg-white text-black hover:bg-white/90 px-12 py-7 text-base rounded-2xl">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;