"use client";
import React from "react";
import Image from "next/image";

export default function BuiltSection() {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* GRID OVERLAY (your image) */}
      <div id="bg-pic" className="absolute mt-20 inset-0 bg-[url('/build-bg.png')] bg-cover bg-center" />

      {/* BIG BACKGROUND LOGO */}
      <div id="bg-logo" className="absolute -right-30 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
        <Image
          width={750}
          height={750}
          src="/bd-pic.png"
          alt="bg-logo"
          className="w-125 md:w-187.5"
        />
      </div>

      {/* ROTATING BADGE ON TOP OF IMAGE */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
        <div className="relative w-20 h-20 md:w-32 md:h-24">
          <Image
            width={100}
            height={100}
            src="/rounded-logo.PNG"
            alt="circle-text"
            className="w-full h-full animate-spin-slow"
          />
          {/* <span className="absolute inset-0 flex items-center justify-center text-orange-500 text-xl">
            →
          </span> */}
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-40 pb-28 md:pt-52 md:pb-36">
        {/* SMALL BADGE */}
        <div className="flex items-center gap-2 px-4 py-1 rounded-full border border-gray-500 bg-white/5 backdrop-blur text-white text-sm mb-6">
          <span className="w-2 h-2 bg-[#DE3B00] rounded-full"></span>
          Clarity wins.
        </div>

        {/* HEADING */}
        <h1 className="text-white text-4xl md:text-7xl font-bold leading-tight">
          Built Loud.
          <br />
          No Apologies.
        </h1>

        {/* SUBTEXT */}
        <p className="text-gray-300 mt-6 max-w-xl text-sm md:text-lg">
          We Don’t Design For Average. Neither Should You.
        </p>

        {/* CTA */}
        <button className="mt-8 bg-[#DE3B00] hover:bg-orange-700 text-white px-6 py-3 rounded-full text-sm md:text-base flex items-center gap-2 transition">
          Book Your Free Strategy Call
          <span>↗</span>
        </button>
      </div>

      {/* BOTTOM LINE */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/30" />

      {/* SLOW SPIN ANIMATION */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
      `}</style>
    </div>
  );
}
