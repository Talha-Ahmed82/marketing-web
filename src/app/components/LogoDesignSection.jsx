"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function LogoDesignSection() {
  const [active, setActive] = useState(0);

  const slides = [
    {
      title: "Logo Design",
      highlight: "Design",
      description:
        "We Create Logos That Do More Than Represent Your Brand, They Define It. Built With Clarity, Balance, And Purpose, Every Mark Is Designed To Be Recognizable, Scalable, And Built To Last.",
    },
  ];

  const tags = [
    "Logo",
    "Design System",
    "Naming",
    "Patterns",
    "Typography",
    "Colors",
    "Imagery",
    "Iconography",
  ];

  return (
    <div className="w-full flex justify-center px-4 py-10 bg-white">
      <div className="relative w-full max-w-6xl rounded-3xl bg-gradient-to-r from-[#e7c1b3] to-[#f2f2f2] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LEFT ARROW */}
        {/* <button className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2">
          <ChevronLeft size={20} />
        </button>

        <button className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2">
          <ChevronRight size={20} />
        </button> */}

        {/* LEFT CONTENT */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-700">
            Logo{" "}
            <span className="text-orange-500">
              {slides[active].highlight}
            </span>
          </h2>

          <p className="text-gray-600 mt-4 text-sm md:text-base max-w-md">
            {slides[active].description}
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-white/70 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-4 text-sm underline text-gray-700 cursor-pointer">
            About Logo Design
          </p>
        </div>

        {/* RIGHT CARDS */}
        {/* <div className="flex-1 flex justify-center relative h-[200px] md:h-[250px]">
        
          <div className="absolute w-40 md:w-52 h-40 md:h-52 bg-orange-500 rounded-2xl shadow-lg rotate-12 right-6 md:right-10 top-6"></div>

         
          <div className="absolute w-40 md:w-52 h-40 md:h-52 bg-[#1e1b4b] rounded-2xl shadow-xl -rotate-6 flex items-center justify-center text-white font-semibold text-lg">
            Digital
          </div>
        </div> */}
        <img src="/cards-pic.png" alt="logo design mockup" className="w-[250px] sm:w-[320px] md:w-[380px] lg:w-[420px] object-contain drop-shadow-2xl" />

        {/* DOTS */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {[0, 1, 2].map((dot, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === active ? "bg-orange-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}