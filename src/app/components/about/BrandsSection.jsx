import React from "react";
import Image from "next/image";

const BrandsSection = () => {
  const brands = [
    "/about/spotify-pic.png",
    "/about/Calvin-pic.png",
    "/about/Coach-pic.PNG",
    "/about/Mangolia-pic.png",
    "/about/shake-pic.png",
    "/about/flatiron-pic.png",
    "/about/harry-pic.PNG",
    "/about/allbirds-pic.png",
    "/about/standard-pic.png",
    "/about/Conde-pic.png",
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#3d4a50] leading-tight">
          The <span className="text-[#DE3B00]">Kind Of Brands</span> You
          <br />
          Want To Be <span className="text-[#DE3B00]">Compared</span> To
        </h2>
      </div>

      {/* Grid */}
      <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border border-gray-300">
        {brands.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-6 sm:p-8 border-gray-300 
                       border-r border-b 
                       last:border-r-0 
                       even:lg:border-r 
                       nth-[6n]:border-r-0"
          >
            <Image
              src={logo}
              alt="brand"
              width={120}
              height={60}
              className="object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsSection;
