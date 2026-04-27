import React from "react";

export default function AttentionSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      
      {/* Curved Background Shape */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[500px] bg-[#ececec] rounded-b-[50%] z-0"></div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-10 pt-16 md:pt-24">
        
        {/* TOP CONTENT */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          
          {/* LEFT HEADING */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-gray-700">
            Built To{" "}
            <span className="text-orange-500">Hold</span>
            <br />
            <span className="text-orange-500">Attention.</span>
          </h1>

          {/* RIGHT TEXT */}
          <div>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg">
              Getting Noticed Is Easy. Staying Relevant Is The Real Challenge.
              We Design Brands And Digital Experiences That Don’t Just Attract
              Attention, They Keep It. Structured, Intentional, And Built To
              Perform In The Environments That Actually Matter.
            </p>

            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-medium transition">
              Book a Free Strategy Call →
            </button>
          </div>
        </div>

        {/* CENTER IMAGE */}
        <div className="relative -mt-10 flex justify-center ">
          <img
            src="/laptop-pic.png" // replace with your asset
            alt="laptop mockup"
            className="w-[280px] sm:w-[400px] md:w-[550px] lg:w-[500px] object-contain drop-shadow-2xl"
          />
        </div>

        {/* BOTTOM SECTION */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mt-16 md:mt-24 pb-16 md:pb-24">
          
          {/* LEFT */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-700">
            Our{" "}
            <span className="text-orange-500">Services</span>
          </h2>

          {/* RIGHT */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg">
            We Don’t Offer Disconnected Services, We Build Complete Brand Systems
            That Work. From Identity To Digital, Everything Is Designed To Be
            Clear, Scalable, And Built For Real-World Performance. No Fluff, Just
            Focused Work That Helps Your Brand Show Up Stronger And Perform Better.
          </p>
        </div>
      </div>
    </section>
  );
}