import Navbar from "@/components/sections/navbar";
import { allProducts } from "../../../data/product";
import Image from "next/image";

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
              <Image
                src={product.image}
                alt={product.name}
                width={700}
                height={700}
                className="w-full h-auto object-contain"
              />
            </div>
            <div>
              <h1 className="text-5xl font-bold mt-6 mb-4">
                {product.name}
              </h1>
               <select className="mt-4 p-3 bg-zinc-900 rounded-lg border border-zinc-800 w-full">
              <option value="">
                Select Variant
              </option>

              {product.variants.map(
                (variant: string, i: number) => (
                  <option key={i} value={variant}>
                    {variant}
                  </option>
                )
              )}
            </select>
            </div>
          
          </div>
        </div>
      </section>
    </>
  );
}