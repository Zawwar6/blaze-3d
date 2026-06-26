"use client";

import { useEffect, useState } from "react";

export default function AgeVerification() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleYes = () => {
    setShow(false);
  };

  const handleNo = () => {
    window.location.href = "https://google.com";
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#111] border border-green-500/30 rounded-3xl p-8 text-center shadow-2xl">

        <h2 className="text-4xl font-bold text-white mb-4">
          Age Verification
        </h2>

        <p className="text-zinc-400 mb-8">
          You must be 21 years or older to enter this website.
        </p>

        <div className="flex gap-4">
          <button
            onClick={handleYes}
            className="flex-1 py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-semibold"
          >
            Yes, I'm 21+
          </button>

          <button
            onClick={handleNo}
            className="flex-1 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold"
          >
            No
          </button>
        </div>

      </div>
    </div>
  );
}