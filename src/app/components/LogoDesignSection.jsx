"use client";
import { useState } from "react";
import Image from "next/image";

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
        {/* LEFT CONTENT */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-[#364153]">
            Logo{" "}
            <span className="text-[#DE3B00]">{slides[active].highlight}</span>
          </h2>

          <p className="text-gray-800 mt-4 text-sm md:text-base max-w-md">
            {slides[active].description}
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-4 text-sm underline text-gray-700 cursor-pointer">
            About Logo Design
          </p>
        </div>
      <div className="flex-shrink-0 relative overflow-visible">
  <Image
    src="/cards-pic.png"
    alt="logo design mockup"
    width={620}
    height={620}
    className="
      w-[330px]
      sm:w-[420px]
      md:w-[520px]
      lg:w-[520px]
      object-contain
      drop-shadow-2xl
      scale-110 md:scale-125
    "
  />
</div>

        {/* DOTS */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {[0, 1, 2].map((dot, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === active ? "bg-[#DE3B00]" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
