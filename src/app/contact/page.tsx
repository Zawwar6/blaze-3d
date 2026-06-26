import Navbar from "@/components/sections/navbar";
import React from "react";

function Page() {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(event)
  }
  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden">
    <Navbar />

    {/* Background texture */}
    <div className="absolute inset-0 opacity-10 bg-[url('/assets/noise.png')]" />

    {/* Top Heading */}
    <div className="pt-28 text-center">
      <h2 className="text-4xl md:text-6xl font-light">
        <span className="text-green-500">LET'S</span>
        <br />
        CONNECT
      </h2>
    </div>

    <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-20 items-center">

      {/* Left Side */}
      <div>
        <h1 className="text-5xl md:text-7xl font-light leading-tight">
          We're Here
          <br />
          To Help
        </h1>

        <p className="text-zinc-400 mt-8 text-lg leading-8">
          Have questions or need assistance? Reach out to our
          support team through the form below.
        </p>

        <div className="mt-12 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border border-green-500 flex items-center justify-center">
            ✉
          </div>

          <span className="text-xl">
            info@blazebrand.com
          </span>
        </div>
      </div>

      {/* Right Side */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

        <form className="space-y-6">

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent border border-zinc-700 rounded-xl p-4 outline-none focus:border-green-500"
            />

            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border border-zinc-700 rounded-xl p-4 outline-none focus:border-green-500"
            />
          </div>

          <input
            type="text"
            placeholder="Phone"
            className="w-full bg-transparent border border-zinc-700 rounded-xl p-4 outline-none focus:border-green-500"
          />

          <textarea
            rows={6}
            placeholder="Message"
            className="w-full bg-transparent border border-zinc-700 rounded-xl p-4 outline-none resize-none focus:border-green-500"
          />

          <button
            type="submit"
            className="w-full py-5 rounded-full bg-green-600 hover:bg-green-500 transition duration-300 text-lg font-medium shadow-lg shadow-green-500/30"
          >
            SUBMIT
          </button>

        </form>
      </div>

    </div>
      </section>
  );
}

export default Page;
