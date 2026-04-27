"use client";

export default function ProcessSection() {
  const steps = [
    {
      title: "Building The Foundation",
      desc: "We Start By Getting Clear On Your Business, Your Goals, And Where Your Brand Stands Today. No Assumptions, Just Focused Insight To Define The Right Direction From The Start.",
      icon: "/card-pic1.png",
      bg: "/card-pic1.png",
    },
    {
      title: "Crafting Your Brand Story",
      desc: "We Shape Your Brand’s Core, Positioning, Messaging, And Structure. This Is Where Everything Aligns, So Your Brand Doesn’t Just Look Good, It Makes Sense.",
      icon: "/card-pic2.png",
      bg: "/card-pic2.png",
    },
    {
      title: "Bringing It To Life",
      desc: "From Logo To Full Visual System, We Design With Purpose. Every Element Is Built To Be Consistent, Scalable, And Instantly Recognizable.",
      icon: "/card-pic3.png",
      bg: "/card-pic3.png",
    },
    {
      title: "Making It Real",
      desc: "We Apply Your Brand Across Digital Touchpoints, Ensuring Everything Works Seamlessly. Clean Execution, Smooth Delivery, And Ready For Real-World Use.",
      icon: "/card-pic4.png",
      bg: "/card-pic4.png",
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT CONTENT */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1 border rounded-full text-sm text-gray-600 mb-4">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            Our Process
          </div>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-gray-700">
            <span className="text-orange-600">A Process</span> That
            <br />
            <span className="text-orange-600">Actually</span> Works.
          </h2>

          <h3 className="mt-6 text-xl md:text-2xl text-gray-800">
            Clear Steps. No Confusion.
            <br />
            No Wasted Time.
          </h3>

          <p className="mt-4 text-gray-600 max-w-md text-sm md:text-base">
            We Start By Getting Clear On Your Business, Your Goals, And Where
            Your Brand Stands Today. No Assumptions, Just Focused Insight To
            Define The Right Direction From The Start.
          </p>

          <button className="mt-6 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full text-sm md:text-base flex items-center gap-2">
            Start Your Project <span>↗</span>
          </button>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative p-6 rounded-2xl bg-white border border-gray-200 overflow-hidden"
            >
              {/* LOW OPACITY BG IMAGE */}
              <img
                src={step.bg}
                alt=""
                className="absolute right-2 top-2 w-24 opacity-10 pointer-events-none"
              />

              {/* ICON */}
              <img src={step.icon} alt="" className="w-10 mb-4" />

              {/* STEP TITLE */}
              <p className="text-xs text-gray-400 mb-1">
                Step {i + 1 < 10 ? `0${i + 1}` : i + 1}
              </p>

              <h4 className="text-orange-600 font-semibold text-lg mb-2">
                {step.title}
              </h4>

              <p className="text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}