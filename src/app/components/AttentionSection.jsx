// import React from "react";
// import Image from "next/image";

// export default function AttentionSection() {
//   return (
//     <section className="relative bg-white overflow-hidden">
      
//       {/* Curved Background Shape */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[500px] bg-[#FAFAFA] rounded-b-[50%] z-0"></div>

//       <div className="relative max-w-7xl mx-auto px-4 md:px-10 pt-16 md:pt-10">
        
//         {/* TOP CONTENT */}
//         <div className="grid lg:grid-cols-2 gap-10 items-start">
          
//           {/* LEFT HEADING */}
//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-gray-700">
//             Built To{" "}
//             <span className="text-[#DE3B00]">Hold</span>
//             <br />
//             <span className="text-[#DE3B00]">Attention.</span>
//           </h1>

//           {/* RIGHT TEXT */}
//           <div>
//             <p className="text-gray-800 text-sm sm:text-base leading-relaxed max-w-lg">
//               Getting Noticed Is Easy. Staying Relevant Is The Real Challenge.
//               We Design Brands And Digital Experiences That Don’t Just Attract
//               Attention, They Keep It. Structured, Intentional, And Built To
//               Perform In The Environments That Actually Matter.
//             </p>

//             <button className="mt-6 bg-[#DE3B00] hover:bg-[#c03500] text-white px-6 py-3 rounded-full text-sm font-medium transition">
//               Book a Free Strategy Call →
//             </button>
//           </div>
//         </div>

//         {/* CENTER IMAGE */}
//         <div className="relative -mt-10 flex justify-center ">
//           <Image
//             width={600}
//             height={400}
//             src="/laptop-pic.png" // replace with your asset
//             alt="laptop mockup"
//             className="w-[280px] sm:w-[400px] md:w-[550px] lg:w-[500px] object-contain drop-shadow-2xl"
//           />
//         </div>

//         {/* BOTTOM SECTION */}
//         <div className="grid lg:grid-cols-2 gap-10 items-start mt-16 md:mt-24 pb-16 md:pb-12">
          
//           {/* LEFT */}
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-700">
//             Our{" "}
//             <span className="text-[#DE3B00]">Services</span>
//           </h2>

//           {/* RIGHT */}
//           <p className="text-gray-800 text-sm sm:text-base leading-relaxed max-w-lg">
//             We Don’t Offer Disconnected Services, We Build Complete Brand Systems
//             That Work. From Identity To Digital, Everything Is Designed To Be
//             Clear, Scalable, And Built For Real-World Performance. No Fluff, Just
//             Focused Work That Helps Your Brand Show Up Stronger And Perform Better.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }










"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AttentionSection() {

  const fadeUp = {
    hidden:{
      opacity:0,
      y:70
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        duration:1,
        ease:"easeOut"
      }
    }
  };

  return (
    <section className="relative bg-white overflow-hidden">

      {/* Curved Background Shape */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[500px] bg-[#FAFAFA] rounded-b-[50%] z-0"></div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-10 pt-16 md:pt-10">

        {/* TOP CONTENT */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT HEADING */}
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:.2}}
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-medium leading-tight text-gray-700"
          >
            Built To{" "}
            <span className="text-[#DE3B00]">Hold</span>
            <br />
            <span className="text-[#DE3B00]">Attention.</span>
          </motion.h1>


          {/* RIGHT TEXT */}
          <motion.div
            initial={{opacity:0,x:60}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            transition={{duration:1,delay:.2}}
          >
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed max-w-lg">
              Getting Noticed Is Easy. Staying Relevant Is The Real Challenge.
              We Design Brands And Digital Experiences That Don’t Just Attract
              Attention, They Keep It. Structured, Intentional, And Built To
              Perform In The Environments That Actually Matter.
            </p>

            <motion.button
              initial={{opacity:0,y:30}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{delay:.45}}
              className="mt-6 bg-[#DE3B00] hover:bg-[#c03500] text-white px-6 py-3 rounded-full text-sm font-medium transition"
            >
              Book a Free Strategy Call →
            </motion.button>
          </motion.div>

        </div>


        {/* CENTER IMAGE */}
        <motion.div
          initial={{opacity:0, scale:.85, y:50}}
          whileInView={{opacity:1, scale:1, y:0}}
          viewport={{once:true}}
          transition={{
            duration:1.1,
            delay:.25
          }}
          className="relative -mt-10 flex justify-center"
        >
          <motion.div
            animate={{
              y:[0,-10,0]
            }}
            transition={{
              duration:4,
              repeat:Infinity
            }}
          >
            <Image
              width={600}
              height={400}
              src="/laptop-pic.png"
              alt="laptop mockup"
              className="w-[280px] sm:w-[400px] md:w-[550px] lg:w-[500px] object-contain drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>


        {/* BOTTOM SECTION */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mt-16 md:mt-24 pb-16 md:pb-12">

          {/* LEFT */}
          <motion.h2
            initial={{opacity:0,x:-60}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            transition={{duration:1}}
            className="text-4xl sm:text-5xl md:text-6xl font-medium text-gray-700"
          >
            Our{" "}
            <span className="text-[#DE3B00]">Services</span>
          </motion.h2>


          {/* RIGHT */}
          <motion.p
            initial={{opacity:0,x:60}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            transition={{duration:1, delay:.2}}
            className="text-gray-800 text-sm sm:text-base leading-relaxed max-w-lg"
          >
            We Don’t Offer Disconnected Services, We Build Complete Brand Systems
            That Work. From Identity To Digital, Everything Is Designed To Be
            Clear, Scalable, And Built For Real-World Performance. No Fluff, Just
            Focused Work That Helps Your Brand Show Up Stronger And Perform Better.
          </motion.p>

        </div>
      </div>
    </section>
  );
}