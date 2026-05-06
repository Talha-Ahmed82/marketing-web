"use client";
import React from "react";
import Image from "next/image";
import {motion} from "framer-motion"

export default function ProcessSection() {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 70,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };
  const steps = [
    {
      title: "Building The Foundation",
      step: "Step 01: Discovery & Clarity",
      desc: "We start by getting clear on your business, your goals, and where your brand stands today. No assumptions, just focused insight to define the right direction from the start.",
      icon: "/card-pic1.png",
      bg: "/card-pic1.png",
    },
    {
      title: "Crafting Your Brand Story",
      step: "Step 02: Strategy & Positioning",
      desc: "We shape your brand’s core, positioning, messaging, and structure. This is where everything aligns, so your brand doesn’t just look good, it makes sense.",
      icon: "/card-pic2.png",
      bg: "/card-pic2.png",
    },
    {
      title: "Bringing It To Life",
      step: "Step 03: Design & Identity",
      desc: "From logo to full visual system, we design with purpose. Every element is built to be consistent, scalable, and instantly recognizable.",
      icon: "/card-pic3.png",
      bg: "/card-pic3.png",
    },
    {
      title: "Making It Real",
      step: "Step 04: Execution & Launch",
      desc: "We apply your brand across digital touchpoints, ensuring everything works seamlessly. Clean execution, smooth delivery, and ready for real-world use.",
      icon: "/card-pic4.png",
      bg: "/card-pic4.png",
    },
  ];

  return (
    <motion.div className="w-full bg-white py-16 px-4 md:px-10">
      <motion.div variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} className="max-w-6xl mx-auto grid lg:grid-cols-2 items-start">

        {/* LEFT CONTENT */}
        <motion.div variants={fadeUp}
          transition={{ delay: 0.2 }}>
          <motion.div className="inline-flex items-center gap-2 px-4 py-1 border rounded-full text-sm text-gray-600 mb-4">
            <span className="w-2 h-2 bg-[#DE3B00] rounded-full"></span>
            Our Process
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-medium leading-tight text-gray-700">
            <span className="text-[#DE3B00]">A </span>Process <span className="text-[#DE3B00]">That </span>
            <br className="hidden lg:block" />
            <span className="text-[#DE3B00]">Actually</span> Works.
          </h2>

          <h3 className="mt-6 text-xl md:text-2xl text-gray-800">
            Clear Steps. No Confusion.
            <br className="hidden lg:block" />
            No Wasted Time.
          </h3>

          <p className="mt-4 text-gray-600 lg:max-w-md text-sm md:text-base">
            We Start By Getting Clear On Your Business, Your Goals, And Where
            Your Brand Stands Today. No Assumptions, Just Focused Insight To
            Define The Right Direction From The Start.
          </p>

          <button className="mt-6 bg-[#DE3B00] hover:bg-orange-700 text-white px-6 py-3 rounded-full text-sm md:text-base flex items-center gap-2">
            Start Your Project <span>↗</span>
          </button>
        </motion.div>

        {/* RIGHT CARDS */}
        <motion.div variants={fadeUp}
          transition={{ delay: 0.35 }} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <motion.div
            initial={{opacity:0, scale:0.92}}
            whileInView={{opacity:1, scale:1}}
            viewport={{once:true}}
            transition={{duration:1, delay:0.4}}
              key={i}
              className="relative mt-8 lg:mt-0 p-6 rounded-2xl bg-[#F8F8F8] border border-gray-200 overflow-hidden"
            >
              {/* LOW OPACITY BG IMAGE */}
              <Image
                width={96}
                height={96}
                src={step.bg}
                alt=""
                className="absolute right-2 top-2 w-24 opacity-10 pointer-events-none"
              />

              {/* ICON */}
              <Image
                width={40}
                height={40}
                src={step.icon}
                alt=""
                className="w-10 mb-4"
              />

              {/* STEP TITLE */}
              <p className="text-xs text-gray-500 mb-1">
                {step.step}
              </p>

              <h4 className="text-[#DE3B00] font-semibold text-lg mb-2">
                {step.title}
              </h4>

              <p className="text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}