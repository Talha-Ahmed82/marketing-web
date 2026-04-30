"use client";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function WorkSection() {
  const [active, setActive] = useState(2);

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

  const slides = [
    "/banner-image.png",
    "/banner-image.png",
    "/banner-image.png",
    "/banner-image.png",
    "/banner-image.png",
  ];

  return (
    <motion.div className="w-full bg-white py-16 px-4 md:px-10">
      {/* TOP SECTION */}
      <motion.div  variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* LEFT */}
        <motion.div  variants={fadeUp}
          transition={{ delay: 0.2 }}>
          <motion.div  variants={fadeUp}
          transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-1 border rounded-full text-sm text-gray-600 mb-4">
            <span className="w-2 h-2 bg-[#DE3B00] rounded-full"></span>
            Case Studies
          </motion.div>

          <h2  className="text-4xl md:text-6xl font-medium leading-tight text-gray-700">
            <span className="text-[#DE3B00]">Work</span> That
            <br />
            Actually <span className="text-[#DE3B00]">Delivers.</span>
          </h2>
        </motion.div>

        {/* RIGHT */}
        <motion.div variants={fadeUp}
          transition={{ delay: 0.35 }} className="max-w-md">
          <p className="text-[#364153] text-sm md:text-base">
            Projects Are Built With Intention. We Focus On Clarity And Precision
            In Every Execution To Create Impactful Work Through Thoughtful
            Design And Strategy.
          </p>

          <button className="mt-4 bg-[#DE3B00] hover:bg-orange-700 text-white px-5 py-2 rounded-full flex items-center gap-2 text-sm">
            View More <span>↗</span>
          </button>
        </motion.div>
      </motion.div>

      {/* SLIDER */}
      <motion.div variants={fadeUp}
          transition={{ delay: 0.35 }} className="relative max-w-7xl mx-auto mt-12">
        {/* CARD */}
        <motion.div  initial={{opacity:0, scale:0.92}}
            whileInView={{opacity:1, scale:1}}
            viewport={{once:true}}
            transition={{duration:1, delay:0.4}} className="relative rounded-3xl overflow-hidden h-[250px] md:h-[420px]">
          {/* IMAGE */}
          <Image
            src={slides[active]}
            alt="case"
            fill
            priority
            quality={100}
            unoptimized
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

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
        <motion.div className="flex justify-center gap-2 mt-6">
          {slides.map((_, i) => (
            <motion.div
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                i === active ? "bg-[#DE3B00]" : "bg-gray-300"
              }`}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
