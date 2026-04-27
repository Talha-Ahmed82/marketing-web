import React from "react";

export default function HeroSection() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6">
        <div className="flex items-center gap-2">
          {/* <div className="w-8 h-8 bg-[#DE3B00] rounded-md"></div> */}
          <img src="/bd-logo.PNG" alt="logo" className="w-8 h-8 object-contain" />
          <h1 className="font-semibold text-lg">Brooklyn Design</h1>
        </div>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li className="cursor-pointer hover:text-[#DE3B00]">HOME</li>
          <li className="cursor-pointer hover:text-[#DE3B00]">ABOUT</li>
          <li className="cursor-pointer hover:text-[#DE3B00]">SERVICES</li>
          <li className="cursor-pointer hover:text-[#DE3B00]">PORTFOLIO</li>
          <li className="cursor-pointer hover:text-[#DE3B00]">PRICING</li>
        </ul>

        <button className="border border-gray-400 px-5 py-2 rounded-full text-sm hover:bg-[#DE3B00] hover:text-white transition">
          Let's Talk ↗
        </button>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20 mt-10">
        {/* Left Content */}
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 border px-4 py-1 rounded-full text-xs mb-6">
            <span className="w-2 h-2 bg-[#DE3B00] rounded-full"></span>
            Built loud. Designed sharp.
          </div>

          <h1 className="text-4xl pt-sans-bold lg:text-6xl leading-tight">
            Not For <span className="text-gray-700">Brands</span>
            <br />
            That <span className="text-[#DE3B00]">Play It Safe.</span>
          </h1>

          <p className="mt-6 text-lg font-medium text-gray-600">
            From Brooklyn, Where Average Doesn’t Survive.
          </p>

          <p className="mt-4 text-sm text-gray-500 leading-relaxed">
            Brooklyn Designs Is Where Bold Ideas Get Structure. We Build Brands
            That Carry Weight And Digital Experiences That Actually Perform.
            No Trends, No Filler, Just Work That Earns Attention And Keeps It.
          </p>

          <button className="mt-6 bg-[#DE3B00] text-white px-6 py-3 rounded-full text-sm hover:bg-[#DE3B00] transition">
            Book a Free Strategy Call ↗
          </button>

          {/* Reviews */}
          <div className="flex items-center gap-6 mt-8 text-sm text-gray-500">
            <span>⭐ Trustpilot Reviews</span>
            <span>facebook Reviews</span>
            <span>Google Reviews</span>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative mt-10 lg:mt-0">
          <img
            src="/hero-pic.png" // replace with your image path
            alt="BD"
            className="w-[300px] lg:w-[500px] object-contain"
          />

          {/* Discount Badge */}
          <div className="absolute right-[-140px] top-1/2 -translate-y-1/2 rotate-90 bg-[#DE3B00] text-white text-xs px-4 py-2 rounded-full">
            Get upto 60% Discount
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="left-5 top-1/2 -translate-y-1/2 flex flex-col gap-4 text-gray-500 text-sm">
        <span>f</span>
        <span>ig</span>
        <span>tw</span>
      </div>
    </div>
  );
}
