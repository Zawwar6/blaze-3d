"use client";

import Navbar from "@/components/sections/navbar";
import { useState } from "react";

const data = [
  {
    title: "BLAZE 1GM THCA FLOWER (20 CT RED JAR)",
    items: [
      { name: "INDICA CRITICAL MASS", pdf: "https://yourdomain.com/pdfs/critical-mass.pdf" },
      { name: "SATIVA CACTUS JACK", pdf: "https://yourdomain.com/pdfs/cactus-jack.pdf" },
      { name: "HYBRID ELECTRIC HAZE", pdf: "https://yourdomain.com/pdfs/electric-haze.pdf" },
    ],
  },

  {
    title: "BLAZE 1GM THCA FLOWER (20 CT GREEN JAR)",
    items: [
      { name: "INDICA GAS MASK", pdf: "https://yourdomain.com/pdfs/gas-mask.pdf" },
      { name: "INDICA GIRL SCOUT COOKIES", pdf: "https://yourdomain.com/pdfs/girl-scout-cookies.pdf" },
      { name: "SATIVA BLUE DREAM", pdf: "https://yourdomain.com/pdfs/blue-dream.pdf" },
      { name: "SATIVA GREEN CRACK", pdf: "https://yourdomain.com/pdfs/green-crack.pdf" },
      { name: "HYBRID SOUR DIESEL", pdf: "https://yourdomain.com/pdfs/sour-diesel.pdf" },
    ],
  },

  {
    title: "BLAZE DELTA 10 1GM PREROLLS (40 COUNT)",
    items: [
      { name: "SATIVA CITRON", pdf: "https://yourdomain.com/pdfs/citron.pdf" },
      { name: "GELATO HYBRID", pdf: "https://yourdomain.com/pdfs/gelato.pdf" },
    ],
  },

  {
    title: "BLAZE DELTA 8 1GM PREROLLS (40 COUNT)",
    items: [
      { name: "SATIVA GORILLA GLUE", pdf: "https://yourdomain.com/pdfs/gorilla-glue.pdf" },
      { name: "INDICA KUSH", pdf: "https://yourdomain.com/pdfs/kush.pdf" },
      { name: "HYBRID WEDDING CAKE", pdf: "https://yourdomain.com/pdfs/wedding-glue.pdf" },
    ],
  },

  {
    title: "BLAZE THCA 1GM PREROLLS (40 COUNT)",
    items: [
      { name: "SATIVA JUNGLE COOKIES", pdf: "https://yourdomain.com/pdfs/jungle-cookies.pdf" },
      { name: "INDICA ZKITTLES", pdf: "https://yourdomain.com/pdfs/zkittles.pdf" },
      { name: "HYBRID PINEAPPLE EXPRESS", pdf: "https://yourdomain.com/pdfs/pineapple-express.pdf" },
    ],
  },

  {
    title: "BLAZE THCA DIAMOND DUSTED 1GM PREROLLS (24 COUNT)",
    items: [
      { name: "SATIVA STRAWBERRY HAZE", pdf: "https://yourdomain.com/pdfs/strawberry-haze.pdf" },
      { name: "SATIVA APPLE BUBBA", pdf: "https://yourdomain.com/pdfs/apple-bubba.pdf" },
      { name: "INDICA ZOUR WATERMELON", pdf: "https://yourdomain.com/pdfs/zour-watermelon.pdf" },
      { name: "INDICA BLUEBERRY TANGIE", pdf: "https://yourdomain.com/pdfs/blueberry-tangie.pdf" },
      { name: "INDICA GRAPE DURBAN", pdf: "https://yourdomain.com/pdfs/grape-durban.pdf" },
      { name: "HYBRID GEORGIA PEACH", pdf: "https://yourdomain.com/pdfs/georgia-peach.pdf" },
    ],
  },

  {
    title: "BLAZE DELTA 8 EXTREME 1GM PREROLLS (30 COUNT)",
    items: [
      { name: "SATIVA RILLA KILLA", pdf: "https://yourdomain.com/pdfs/rilla-killa.pdf" },
      { name: "INDICA GRAND DADDY PURP", pdf: "https://yourdomain.com/pdfs/grand-daddy-purp.pdf" },
      { name: "HYBRID ICECREAM CAKE", pdf: "https://yourdomain.com/pdfs/icecream-cake.pdf" },
    ],
  },

  {
    title: "BLAZE THCA GOLD 1GM PREROLLS (40 COUNT)",
    items: [
      { name: "SATIVA GAS LEAK", pdf: "https://yourdomain.com/pdfs/gas-leak.pdf" },
      { name: "INDICA OCTANE", pdf: "https://yourdomain.com/pdfs/octane.pdf" },
      { name: "HYBRID PURPLE PUNCH", pdf: "https://yourdomain.com/pdfs/purple-punch.pdf" },
    ],
  },

  {
    title: "BLAZE THCA ELITE 1GM PREROLLS (40 COUNT)",
    items: [
      { name: "SATIVA", pdf: "https://yourdomain.com/pdfs/sativa.pdf" },
      { name: "INDICA DARK STAR", pdf: "https://yourdomain.com/pdfs/dark-star.pdf" },
      { name: "HYBRID BLUE NERDS", pdf: "https://yourdomain.com/pdfs/blue-nerds.pdf" },
    ],
  },

  {
    title: "BLAZE THCP - THCA 1GM PREROLLS (30 COUNT)",
    items: [
      { name: "SATIVA GUSHERS", pdf: "https://yourdomain.com/pdfs/gushers.pdf" },
      { name: "INDICA WHITE WIDOW", pdf: "https://yourdomain.com/pdfs/white-widow.pdf" },
      { name: "HYBRID PINK RUNTZ", pdf: "https://yourdomain.com/pdfs/pink-runtz.pdf" },
    ],
  },
];

export default function Page() {
  const [open, setOpen] = useState<number | null>(0);

  const handleOpenPdf = (pdf: string) => {
    window.open(pdf, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white relative overflow-hidden">
      <Navbar />

      {/* background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[length:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-teal-950/20 via-transparent to-cyan-950/20" />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-thin tracking-tighter">
            Lab <span className="text-teal-400">Reports</span>
          </h1>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            Certified product breakdowns & strain listings for full transparency
            and quality assurance.
          </p>
        </div>

        {/* ACCORDION */}
       <div className="space-y-4">
  {data.map((cat, i) => {
    const isOpen = open === i;

    return (
      <div
        key={i}
        className="border border-white/10 rounded-2xl overflow-hidden bg-zinc-900/30 backdrop-blur-xl transition-all duration-300"
      >
        {/* HEADER */}
        <button
          onClick={() => setOpen(isOpen ? null : i)}
          className="w-full flex justify-between items-center p-6 hover:bg-zinc-900/50 transition"
        >
          <h2 className="text-left text-white font-medium">
            {cat.title}
          </h2>

          <span
            className={`text-teal-400 text-xl transition-transform duration-300 ${
              isOpen ? "rotate-45 scale-110" : "rotate-0"
            }`}
          >
            +
          </span>
        </button>

        {/* CONTENT (SMOOTH ANIMATION) */}
        <div
          className={`grid transition-all duration-500 ease-in-out ${
            isOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-6 pb-6">

              {/* divider */}
              <div className="h-px bg-white/10 mb-4" />

              {/* ITEMS */}
              <div className="space-y-3">
                {cat.items.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleOpenPdf(item.pdf)}
                    className="group flex items-center justify-between p-3 rounded-lg bg-black/30 border border-white/10 cursor-pointer
                               hover:bg-black/60 hover:border-teal-400/40 
                               transition-all duration-300 active:scale-[0.98]"
                  >
                    {/* NAME */}
                    <span className="text-zinc-300 text-sm group-hover:text-white transition">
                      {item.name}
                    </span>

                    {/* ICON */}
                    <span className="text-teal-400 text-sm opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                      ↗
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  })}
</div>

        {/* bottom glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent" />
      </div>
    </div>
  );
}