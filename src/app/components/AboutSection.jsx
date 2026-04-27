import React from "react";

export default function AboutSection() {
  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE */}
        <div>
          {/* About Button */}
          <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1 text-sm text-gray-700 mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            About Us
          </button>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-gray-800">
            Built With{" "}
            <span className="text-orange-500">Intent.</span>
            <br />
            <span className="text-orange-500">Not</span> Decoration.
          </h1>

          {/* Image */}
          <div className="mt-8 rounded-2xl overflow-hidden">
            <img
              src="/about-pic.PNG"
              alt="design work"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 leading-snug">
            Brooklyn Designs Exists For Brands That Are Done Blending In And
            Ready To Show Up With Clarity And Edge.
          </h2>

          <p className="mt-5 text-gray-600 text-sm sm:text-base leading-relaxed">
            We Don’t Treat Design Like Surface-Level Styling. Every Brand We
            Build Is Rooted In Strategy, Structure, And Purpose. From Identity
            Systems To Digital Experiences, Everything Is Crafted To Carry
            Weight, Communicate Clearly, And Perform In The Real World. If It
            Looks Good But Doesn’t Work, It Doesn’t Leave Our Desk.
          </p>

          <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            Born From Brooklyn’s No-Nonsense Creative Culture, We Value Bold
            Thinking, Sharp Execution, And Honest Results. No Unnecessary
            Complexity, No Trend-Chasing, No Filler. Just Focused Work That Helps
            Brands Stand Out, Scale Up, And Stay Relevant Where It Actually
            Matters.
          </p>

          {/* Features */}
          <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm sm:text-base">
            {[
              "Strategy First Approach",
              "Scalable Brand Systems",
              "Built To Perform Consistently",
              "No Unnecessary Noise Ever",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-medium transition">
            Read Full Brand Story →
          </button>
        </div>
      </div>
    </section>
  );
}