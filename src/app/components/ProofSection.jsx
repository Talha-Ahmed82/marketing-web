import React from "react";

export default function ProofSection() {
  return (
    <section className="bg-white py-14 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-700 mb-10">
          Proof, Not{" "}
          <span className="text-orange-500">Promises.</span>
        </h2>

        {/* Container */}
       <div
  className="relative rounded-3xl overflow-hidden p-6 md:p-12 grid lg:grid-cols-2 gap-10 items-center
             bg-[url('/bg-cont.png')] bg-cover bg-center bg-no-repeat"
>
          
          {/* LEFT CONTENT */}
          <div className="text-white z-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
              We Don’t Rely On Buzzwords Or Badges. The Work Speaks, And The
              Results Back It Up. Every Project Is Built With Clarity,
              Intention, And A Focus On What Actually Moves The Needle.
            </h3>

            <ul className="mt-6 space-y-2 text-sm sm:text-base text-gray-200">
              <li>• Trusted By Growing Startups And Ambitious Brands</li>
              <li>• Built For Clarity, Speed, And Real-World Performance</li>
              <li>• Designed To Convert, Not Just Exist</li>
              <li>• Consistent Results Across Industries</li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end z-10">
            <img
              src="mobile-pic.png"
              alt="phone mockup"
              className="w-[250px] sm:w-[320px] md:w-[380px] lg:w-[380px] object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}