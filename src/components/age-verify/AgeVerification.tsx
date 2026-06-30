"use client";

import { useEffect, useState } from "react";

export default function AgeVerification() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const verified = sessionStorage.getItem("ageVerified");

    if (!verified) {
      setShow(true);
    }
  }, []);

  const handleYes = () => {
    sessionStorage.setItem("ageVerified", "true");
    setShow(false);
  };

  const handleNo = () => {
    window.location.href = "https://www.google.com";
  };

  if (!mounted || !show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md px-4">
      <div className="w-full max-w-md rounded-3xl border border-green-500/30 bg-[#111] p-8 text-center shadow-2xl">
        <h2 className="mb-4 text-4xl font-bold text-white">
          Age Verification
        </h2>

        <p className="mb-8 text-zinc-400">
          You must be 21 years or older to enter this website.
        </p>

        <div className="flex gap-4">
          <button
            onClick={handleYes}
            className="flex-1 rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-500"
          >
            Yes, I&apos;m 21+
          </button>

          <button
            onClick={handleNo}
            className="flex-1 rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-500"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}