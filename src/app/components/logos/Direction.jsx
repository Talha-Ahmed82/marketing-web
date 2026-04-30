import React from "react";

export default function DirectionSection() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        
        {/* LEFT SIDE */}
        <div className="flex-1">
          
          {/* Tag */}
          <div className="inline-flex items-center gap-2 border px-3 py-1 rounded-full text-sm text-gray-600 mb-4">
            <span className="w-2 h-2 bg-[#DE3B00] rounded-full"></span>
            No One-Style-Fits-All
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Choose <span className="text-[#DE3B00]">The</span>
            <br />
            Right <span className="text-[#DE3B00]">Direction</span>
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-gray-700 text-lg font-medium">
            Not Every Logo Works For Every Brand.
          </p>

          {/* Accordion Style List */}
          <div className="mt-6 space-y-4 max-w-xl">

            {/* Active Item */}
            <div className="border-b pb-3">
              <div className="flex justify-between items-center">
                <h3 className="text-[#DE3B00] font-semibold">
                  Emblem Logo Design
                </h3>
                <span className="text-[#DE3B00] text-xl">−</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Structured Logos With Text Inside A Shape Or Badge. Ideal For
                Brands That Want A Classic, Established Look.
              </p>
            </div>

            {/* Other Items */}
            {[
              "Signature Logo Design",
              "Wordmark Logo Design",
              "Abstract Mark Logo Design",
              "Mascot Logo Design",
            ].map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b pb-3 text-gray-700"
              >
                <span className="text-sm">{item}</span>
                <span className="text-[#DE3B00] text-lg">+</span>
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="flex-1 w-full">
          <div className="grid grid-cols-2 gap-5">
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="/logos/pic-1.jpg"
                alt="logo1"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="/logos/pic-2.png"
                alt="logo2"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="/logos/pic-3.jpg"
                alt="logo3"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="/logos/pic-4.jpg"
                alt="logo4"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}