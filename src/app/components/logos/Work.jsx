"use client";
import Image from "next/image";
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
    <motion.div className="w-full bg-white px-4 md:px-10">

      {/* SLIDER */}
      <motion.div variants={fadeUp}
          transition={{ delay: 0.35 }} className="relative max-w-7xl mx-auto">
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
      </motion.div>
    </motion.div>
  );
}
