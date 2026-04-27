"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function WorkSection() {
  const [active, setActive] = useState(2);

  const slides = [
    "/banner-bg.png",
    "/banner-bg.png",
     "/banner-bg.png",
     "/banner-bg.png",
    "/banner-bg.png",
  ];

  return (
    <div className="w-full bg-white py-16 px-4 md:px-10">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">

        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1 border rounded-full text-sm text-gray-600 mb-4">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            Case Studies
          </div>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-gray-700">
            <span className="text-orange-600">Work</span> That
            <br />
            Actually <span className="text-orange-600">Delivers.</span>
          </h2>
        </div>

        {/* RIGHT */}
        <div className="max-w-md">
          <p className="text-gray-600 text-sm md:text-base">
            Projects Are Built With Intention. We Focus On Clarity And Precision
            In Every Execution To Create Impactful Work Through Thoughtful Design
            And Strategy.
          </p>

          <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-full flex items-center gap-2 text-sm">
            View More <span>↗</span>
          </button>
        </div>
      </div>

      {/* SLIDER */}
      <div className="relative max-w-7xl mx-auto mt-12">

        {/* CARD */}
        <div className="relative rounded-3xl overflow-hidden">

          {/* IMAGE */}
          <img
            src={slides[active]}
            alt="case"
            className="w-full h-[250px] md:h-[420px] object-cover"
          />

          {/* OVERLAY TEXT */}
          {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black">
            <h3 className="text-2xl md:text-5xl font-light">
              World's Thinnest
              <br />
              Charger
            </h3>

            <div className="flex gap-10 mt-4 text-sm md:text-xl">
              <span>Complete</span>
              <span>Case Study</span>
            </div>
          </div> */}
        </div>

        {/* LEFT ARROW */}
        <button
          onClick={() =>
            setActive((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
          }
          className="absolute left-[-10px] md:left-[-40px] top-1/2 -translate-y-1/2 text-black rounded-full p-2"
        >
          <ChevronLeft />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() =>
            setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
          }
          className="absolute right-[-10px] md:right-[-40px] top-1/2 -translate-y-1/2 text-black rounded-full p-2"
        >
          <ChevronRight />
        </button>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                i === active ? "bg-orange-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}