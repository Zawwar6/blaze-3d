"use client";
import Navbar from "@/components/sections/navbar";
import { allProducts } from "../../../data/product";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = allProducts.find(
    (item) => item.id === Number(id)
  );

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Product Not Found
      </div>
    );

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            
           <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
  <Swiper
    modules={[Navigation, Pagination,Autoplay]}
    navigation
    pagination={{ clickable: true }}
    spaceBetween={20}
    slidesPerView={1}
    autoplay={{
  delay: 3000,
  disableOnInteraction: false,
}}
loop={true}
    
  >
    {product.images.map((img: string, i: number) => (
      <SwiperSlide key={i}>
        <img
          src={img}
          alt={product.name}
          className="w-full h-auto object-contain rounded-xl"
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>
            <div>
              <h1 className="text-5xl font-bold mt-6 mb-4">
                {product.name}
              </h1>
                            <ul className="mt-4 space-y-2">
                {product.variants.map((variant, i) => (
                  <li
                    key={i}
                    className="relative pl-6 p-2 bg-zinc-900 rounded-lg border border-zinc-800"
                  >
                    {/* bullet */}
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-white">
                      •
                    </span>

                    {variant}
                  </li>
                ))}
              </ul>

            </div>
          
          </div>
        </div>
      </section>
    </>
  );
}