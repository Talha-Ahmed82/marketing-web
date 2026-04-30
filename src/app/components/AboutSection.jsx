// import React from "react";
// import Image from "next/image";

// export default function AboutSection() {
//   return (
//     <section className="bg-white py-12 md:py-20 px-4 md:px-10">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        
//         {/* LEFT SIDE */}
//         <div>
//           {/* About Button */}
//           <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1 text-sm text-gray-700 mb-6">
//             <span className="w-2 h-2 bg-[#DE3B00] rounded-full"></span>
//             About Us
//           </button>

//           {/* Heading */}
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-[#374550]">
//             Built With{" "}
//             <span className="text-[#DE3B00]">Intent.</span>
//             <br />
//             <span className="text-[#DE3B00]">Not</span> Decoration.
//           </h1>

//           {/* Image */}
//           <div className="mt-8 rounded-2xl overflow-hidden">
//             <Image
//               width={800}
//               height={400}
//               src="/about-pic.PNG"
//               alt="design work"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div>
//           <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 leading-snug">
//             Brooklyn Designs Exists For Brands That Are Done Blending In And
//             Ready To Show Up With Clarity And Edge.
//           </h2>

//           <p className="mt-5 text-gray-600 text-sm sm:text-base leading-relaxed">
//             We Don’t Treat Design Like Surface-Level Styling. Every Brand We
//             Build Is Rooted In Strategy, Structure, And Purpose. From Identity
//             Systems To Digital Experiences, Everything Is Crafted To Carry
//             Weight, Communicate Clearly, And Perform In The Real World. If It
//             Looks Good But Doesn’t Work, It Doesn’t Leave Our Desk.
//           </p>

//           <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
//             Born From Brooklyn’s No-Nonsense Creative Culture, We Value Bold
//             Thinking, Sharp Execution, And Honest Results. No Unnecessary
//             Complexity, No Trend-Chasing, No Filler. Just Focused Work That Helps
//             Brands Stand Out, Scale Up, And Stay Relevant Where It Actually
//             Matters.
//           </p>

//            <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
//            What Sets Us Apart:
//           </p>

//           {/* Features */}
//           <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm sm:text-base">
//             {[
//               "Strategy First Approach",
//               "Scalable Brand Systems",
//               "Built To Perform Consistently",
//               "No Unnecessary Noise Ever",
//             ].map((item, index) => (
//               <div key={index} className="flex items-center gap-2">
//                 <span className="w-2 h-2 bg-[#DE3B00] rounded-full"></span>
//                 <span className="text-gray-700">{item}</span>
//               </div>
//             ))}
//           </div>

//           {/* Button */}
//           <button className="mt-6 bg-[#DE3B00] hover:bg-[#c22a00] text-white px-6 py-3 rounded-full text-sm font-medium transition">
//             Read Full Brand Story →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }








import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
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
    <section className="bg-white py-12 md:py-20 px-4 md:px-10 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >

        {/* LEFT SIDE */}
        <motion.div
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1 text-sm text-gray-700 mb-6">
            <span className="w-2 h-2 bg-[#DE3B00] rounded-full"></span>
            About Us
          </button>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight text-[#374550]">
            Built With{" "}
            <span className="text-[#DE3B00]">Intent.</span>
            <br />
            <span className="text-[#DE3B00]">Not</span> Decoration.
          </h1>

          <motion.div
            className="mt-8 rounded-2xl overflow-hidden"
            initial={{opacity:0, scale:0.92}}
            whileInView={{opacity:1, scale:1}}
            viewport={{once:true}}
            transition={{duration:1, delay:0.4}}
          >
            <Image
              width={800}
              height={400}
              src="/about-pic.PNG"
              alt="design work"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>


        {/* RIGHT SIDE */}
        <motion.div
          variants={fadeUp}
          transition={{ delay: 0.35 }}
        >
          <h2 className="text-base sm:text-2xl font-semibold text-gray-800 leading-snug">
            Brooklyn Designs Exists For Brands That Are Done Blending In And
            Ready To Show Up With Clarity And Edge.
          </h2>

          <p className="mt-5 text-gray-600 text-xs sm:text-base leading-relaxed">
           We Don’t Treat Design Like Surface-Level Styling. Every Brand We Build Is Rooted In Strategy, Structure, And Purpose. From Identity Systems To Digital Experiences, Everything Is Crafted To Carry Weight, Communicate Clearly, And Perform In The Real World. If It Looks Good But Doesn’t Work, It Doesn’t Leave Our Desk.
          </p>

          <p className="mt-4 text-gray-600 text-xs sm:text-base leading-relaxed">
            Born From Brooklyn’s No-Nonsense Creative Culture, We Value Bold Thinking, Sharp Execution, And Honest Results. No Unnecessary Complexity, No Trend-Chasing, No Filler. Just Focused Work That Helps Brands Stand Out, Scale Up, And Stay Relevant Where It Actually Matters.
          </p>

          <p className="mt-4 text-gray-600 text-xs sm:text-base leading-relaxed">
            What Sets Us Apart:
          </p>

          {/* staggered feature animation */}
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {[
              "Strategy First Approach",
              "Scalable Brand Systems",
              "Built To Perform Consistently",
              "No Unnecessary Noise Ever",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{
                  delay: index * 0.15,
                  duration: .7
                }}
                className="flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-[#DE3B00] rounded-full"></span>
                <span className="text-gray-700 text-sm sm:text-base">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.button
            initial={{opacity:0, y:30}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{delay:.7}}
            className="mt-6 bg-[#DE3B00] hover:bg-[#c22a00] text-white px-6 py-3 rounded-full text-sm font-medium"
          >
            Read Full Brand Story →
          </motion.button>

        </motion.div>

      </motion.div>
    </section>
  );
}