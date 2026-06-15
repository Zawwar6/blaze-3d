import Navbar from "@/components/sections/navbar";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">

        <div className="text-center max-w-3xl w-full">

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/assets/Blaze.png"
              alt="Blaze Brand Logo"
              width={160}
              height={120}
              className="object-contain w-28 sm:w-32 md:w-40"
            />
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight">
            About <span className="text-white/70">Us</span>
          </h1>

          {/* Divider line */}
          <div className="w-16 h-[2px] bg-white/20 mx-auto my-6" />

          {/* Content */}
          <div className="space-y-5 bg-gradient-to-r from-white via-teal-300 to-cyan-400 bg-clip-text text-transparent text-sm sm:text-base leading-relaxed">

            <p>
              Blaze is dedicated to providing premium hemp products that meet the highest standards of quality and consistency.
              We specialize in carefully selected hemp flower and expertly crafted pre-rolls, offering products designed for a smooth and reliable experience.
            </p>

            <p>
              Our mission is to make quality hemp accessible through trusted products, exceptional service, and a commitment to excellence.
              Every product is sourced with care and selected for its freshness, purity, and overall quality.
            </p>

            <p>
              Whether you are new to hemp or a longtime enthusiast, Blaze is committed to delivering a dependable experience you can trust.
              We believe in keeping things simple—offering premium hemp products, transparent practices, and a customer-first approach that sets us apart.
            </p>

          </div>

          {/* Bottom accent */}
          <div className="mt-10 flex justify-center">
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

        </div>
      </main>
    </>
  );
}