"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TestimonialSection() {
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
  return (
    <motion.div className="w-full bg-white py-16">
      {/* FULL WIDTH MAIN CONTAINER */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
        id="main"
        className="relative w-full rounded-xl overflow-visible"
      >
        {/* BACKGROUND */}
        <motion.div className="absolute inset-0">
          <Image
            width={1600}
            height={900}
            src="/build-bg-2.png"
            alt="bg"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div className="relative z-10 grid md:grid-cols-2 gap-0 items-center px-6 md:px-14 py-10 md:py-12">
          {/* LEFT IMAGE */}
          <motion.div
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="relative flex justify-center overflow-visible"
          >
            <Image
              width={500}
              height={500}
              src="/salt-pic.png"
              alt="charm-city-pic"
              className="
                w-[320px]
                sm:w-[420px]
                md:w-[520px]
                lg:w-[420px]
                h-[500px]
                animate-float
                object-contain
                drop-shadow-2xl
                -mt-10 md:-mt-24
              "
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={fadeUp}
            transition={{ delay: 0.35 }}
            className="text-white text-center md:text-left md:pl-0"
          >
            <p className="text-base mb-2">Charm City</p>

            <h2 className="text-2xl md:text-5xl font-medium leading-tight">
              Great Find, I’d Use Them!
            </h2>

            <p className="mt-4 text-gray-300 text-sm md:text-base max-w-lg">
              It was my first time using a digital agency for branding/marketing
              assistance. From start to end, Brooklyn Design was responsive,
              attentive, and on time. The final output exceeded our
              expectations, and I will definitely contact these people again the
              next time our company requires assistance.
            </p>

            <motion.div className="flex flex-col md:flex-row items-center gap-4 mt-6">
              <motion.div>
                <p className="text-sm font-medium">Jeffrey Davidson</p>

                <p className="text-xs text-gray-400">Founder Charm City</p>
              </motion.div>

              <motion.div className="flex text-yellow-400 text-sm">★★★★★</motion.div>

              <motion.div className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
                <span className="border border-gray-400 rounded-full p-1 text-xs">
                  ▶
                </span>
                Watch Video
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
