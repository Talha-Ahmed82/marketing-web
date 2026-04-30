"use client";
import Image from "next/image";

const filters = [
  "All",
  "Emblem Logo",
  "Signature Logo",
  "Wordmark Logo",
  "Abstract Logo",
  "Mascot Logo",
];

const logos = [
  { src: "/logos/pic-1.jpg" },
  { src: "/logos/pic-5.jpg" },
  { src: "/logos/pic-6.png" },
  { src: "/logos/pic-4.jpg" },
  { src: "/logos/pic-7.png" },
  { src: "/logos/pic-8.png" },
  { src: "/logos/pic-2.png" },
  { src: "/logos/pic-3.jpg" },
];

export default function Holds() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-700">
          Work <span className="text-[#DE3B00]">That Holds</span> Up
        </h2>

        {/* Subheading */}
        <p className="mt-4 text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
          Every Project Is Built With Intent, Designed To Perform, <br />
          Not Just Look Good In A Gallery.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {filters.map((item, index) => (
            <button
              key={index}
              className={`px-4 py-1.5 text-sm rounded-full border transition ${
                index === 0
                  ? "bg-[#DE3B00] text-white border-[#DE3B00]"
                  : "text-gray-600 border-gray-300 hover:bg-[#DE3B00] hover:text-white hover:border-[#DE3B00]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="relative w-full h-64 bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <Image
                src={logo.src}
                alt={`logo-${index}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-10">
          <button className="bg-[#DE3B00] text-white px-6 py-2 rounded-full text-sm hover:bg-orange-600 transition">
            See More Work →
          </button>
        </div>
      </div>
    </section>
  );
}