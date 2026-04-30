import React from "react";
import Image from "next/image";

export default function BuildSection() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT CONTENT */}
        <div className="flex-1">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 border px-3 py-1 rounded-full text-sm text-gray-600 mb-4">
            <span className="w-2 h-2 bg-[#DE3B00] rounded-full"></span>
            From Idea to Identity
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            We Don’t <span className="text-[#DE3B00]">Guess.</span>
            <br />
            We <span className="text-[#DE3B00]">Build.</span>
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-gray-600 text-lg font-medium">
            Good Logos Don’t Just Appear. They’re Built, A Step By Step, With
            Intent Behind Every Line.
          </p>

          {/* Description */}
          <p className="mt-4 text-gray-500 text-sm leading-relaxed max-w-lg">
            We Don’t Jump Straight To The Final Design. Every Logo Starts Rough,
            Gets Refined, And Evolves With Intent Behind Every Decision. Each
            Stage Is There For A Reason, To Test, Shape, And Strengthen The
            Idea. Nothing Is Random, Nothing Is Rushed.
          </p>

          {/* Bullet Points */}
          <div className="grid grid-cols-2 gap-3 mt-6 text-sm">
            <p className="text-[#DE3B00]">• No Random Ideas</p>
            <p className="text-[#DE3B00]">• No Forgettable Designs</p>
            <p className="text-[#DE3B00]">• No Rushed Execution</p>
            <p className="text-[#DE3B00]">• Only Work That Holds Up</p>
          </div>

          {/* Button */}
          <button className="mt-6 bg-[#DE3B00] hover:bg-[#DE3B00] text-white px-6 py-2 rounded-full text-sm font-medium transition">
            Get Started →
          </button>
        </div>

        {/* RIGHT SIDE - GIF CARDS */}
        <div className="flex-1 w-full">
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <Image
                src="/logos/card-1.gif"
                alt="gif1"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <Image
                src="/logos/card-2.gif"
                alt="gif2"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <Image
                src="/logos/card-3.gif"
                alt="gif3"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <Image
                src="/logos/card-4.gif"
                alt="gif4"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
