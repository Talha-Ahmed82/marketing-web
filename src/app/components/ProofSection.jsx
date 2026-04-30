// import React from "react";
// import Image from "next/image";

// export default function ProofSection() {
//   return (
//     <section className="bg-white py-14 md:py-20 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-semibold text-[#374550] mb-10">
//           Proof, Not <span className="text-[#DE3B00]">Promises.</span>
//         </h2>

//         {/* Container */}
//         <div
//           className="relative w-[90%] lg:w-[90%] mx-auto h-[500px] mt-20 rounded-3xl overflow-visible p-6 md:p-12 grid lg:grid-cols-2 gap-6 lg:gap-8
//   bg-[url('/bg-cont.png')] bg-cover bg-center bg-no-repeat"
//         >
//           {/* LEFT CONTENT */}
//           <div className="text-white z-10">
//             <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
//               We Don’t Rely On Buzzwords Or Badges. The Work Speaks, And The
//               Results Back It Up. Every Project Is Built With Clarity,
//               Intention, And A Focus On What Actually Moves The Needle.
//             </h3>

//             <ul className="mt-6 space-y-2 text-sm sm:text-base text-gray-200">
//               <li>• Trusted By Growing Startups And Ambitious Brands</li>
//               <li>• Built For Clarity, Speed, And Real-World Performance</li>
//               <li>• Designed To Convert, Not Just Exist</li>
//               <li>• Consistent Results Across Industries</li>
//             </ul>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="relative flex justify-center lg:justify-end z-10">
//             <Image
//               src="/mobile-pic.png"
//               alt="phone mockup"
//               width={380}
//               height={380}
//               className="w-[260px] animate-float sm:w-[320px] md:w-[380px] lg:w-[820px] object-contain drop-shadow-2xl 
//     translate-y-[-40px] md:translate-y-[-60px] lg:translate-y-[-80px]"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }














"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProofSection() {

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
    <section className="bg-white py-20 sm:py-14 md:py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once:true, amount:0.25 }}
          variants={fadeUp}
          className="text-center text-4xl sm:text-5xl md:text-6xl font-medium text-[#374550] mb-10"
        >
          Proof, Not <span className="text-[#DE3B00]">Promises.</span>
        </motion.h2>


        {/* Container */}
        <motion.div
          initial={{opacity:0,y:80}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true, amount:.2}}
          transition={{duration:1}}
          className="relative w-[90%] lg:w-[90%] mx-auto h-[500px] sm:mt-20 rounded-3xl overflow-visible p-6 md:p-12 grid md:grid-cols-2 gap-6 lg:gap-8
          bg-[url('/bg-cont.png')] bg-cover bg-center bg-no-repeat"
        >

          {/* LEFT CONTENT */}
          <motion.div
            initial={{opacity:0,x:-60}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            transition={{duration:1,delay:.2}}
            className="text-white z-10"
          >
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold leading-snug">
              We Don’t Rely On Buzzwords Or Badges. The Work Speaks, And The
              Results Back It Up. Every Project Is Built With Clarity,
              Intention, And A Focus On What Actually Moves The Needle.
            </h3>

            <ul className="sm:mt-6 space-y-2 text-xs sm:text-sm xl:text-base text-gray-200">
              {[
                "Trusted By Growing Startups And Ambitious Brands",
                "Built For Clarity, Speed, And Real-World Performance",
                "Designed To Convert, Not Just Exist",
                "Consistent Results Across Industries",
              ].map((item,index)=>(
                <motion.li
                  key={index}
                  initial={{opacity:0,y:25}}
                  whileInView={{opacity:1,y:0}}
                  viewport={{once:true}}
                  transition={{
                    delay:index * .15 + .35,
                    duration:.7
                  }}
                >
                  • {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>


          {/* RIGHT IMAGE */}
          <motion.div
            initial={{opacity:0,x:80}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            transition={{duration:1.1,delay:.35}}
            className="relative flex justify-center lg:justify-end z-10"
          >

            <motion.div
              animate={{
                y:[0,-12,0]
              }}
              transition={{
                duration:4,
                repeat:Infinity
              }}
            >
              <Image
                src="/mobile-pic.png"
                alt="phone mockup"
                width={380}
                height={380}
                className="w-[260px] animate-float mt-10 sm:mt-10 md:mt-20 lg:mt-6 xl:mt-0 w-[10%] sm:w-[220px] md:w-[780px] xl:w-[820px] object-contain drop-shadow-2xl 
                translate-y-[-40px] md:translate-y-[-60px] lg:translate-y-[-80px]"
              />
            </motion.div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}