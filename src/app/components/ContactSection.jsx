import { motion } from "framer-motion";

export default function ContactSection() {
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
  const services = [
    "Logo Design",
    "Website Design",
    "Ecommerce Setup",
    "Packaging Design",
    "Digital Marketing",
    "Graphic Design",
    "Creative Branding",
    "Other",
  ];

  return (
    <section className="w-full bg-white py-14 md:py-24">
      <motion.div variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div  variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Content */}
          <motion.div variants={fadeUp}
          transition={{ delay: 0.2 }}>
            {/* Badge */}
            <motion.div className="inline-flex items-center gap-2 border border-gray-600 rounded-full px-4 py-2 mb-8 bg-white">
              <span className="w-2.5 h-2.5 bg-[#DE3B00] rounded-full"></span>
              <span className="text-sm font-medium text-gray-700">
                Get in Touch
              </span>
            </motion.div>

            {/* Heading */}
            <h2 className="font-medium leading-[1.02] tracking-tight text-[52px] md:text-[76px] lg:text-7xl">
              <span className="text-[#DE3B00]">Let’s</span>{" "}
              <span className="text-[#374550]">Build</span>
              <br />

              <span className="text-[#374550]">Something</span>{" "}
              <span className="text-[#DE3B00]">That</span>
              <br />

              <span className="text-[#DE3B00]">Actually</span>{" "}
              <span className="text-[#DE3B00]">Matters</span>
            </h2>

            <p className="mt-8 max-w-xl text-gray-700 text-base md:text-lg leading-relaxed">
              Tell Us What You’re Working On, Rough Idea Or Fully Formed Vision.
              We’ll Cut Through The Noise, Challenge What’s Weak, And Help You
              Build Something That Stands Out For The Right Reasons.
            </p>

            <button className="mt-8 bg-[#DE3B00] hover:bg-[#c23000] transition text-white rounded-full px-8 py-4 font-medium shadow-lg">
              Start the Conversation ↗
            </button>
          </motion.div>

          {/* Form Side */}
          <motion.div variants={fadeUp}
          transition={{ delay: 0.2 }} className="bg-transparent w-full">
            <form className="space-y-4">

              <motion.div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full text-gray-800 rounded-md border border-gray-400 bg-white px-4 py-3 outline-none focus:border-orange-500"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full text-gray-800 rounded-md border border-gray-400 bg-white px-4 py-3 outline-none focus:border-orange-500"
                />
              </motion.div>

              <motion.div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full text-gray-800 rounded-md border border-gray-400 bg-white px-4 py-3 outline-none focus:border-orange-500"
                />

                <select className="w-full text-gray-800 rounded-md border border-gray-400 bg-white px-4 py-3 outline-none focus:border-orange-500">
                  <option>Select Budget</option>
                  <option>$1k - $5k</option>
                  <option>$5k - $10k</option>
                  <option>$10k+</option>
                </select>
              </motion.div>

              <textarea
                rows="4"
                placeholder="Tell us about your project"
                className="w-full rounded-md text-gray-800 border border-gray-400 bg-white px-4 py-4 outline-none focus:border-orange-500 resize-none"
              ></textarea>

              {/* Services */}
              <motion.div className="pt-2">
                <h4 className="font-semibold text-lg text-gray-800 mb-4">
                  How can we Help you?
                </h4>

                <motion.div className="flex flex-wrap gap-3">
                  {services.map((item,index)=>(
                    <button
                      type="button"
                      key={index}
                      className="rounded-full border border-gray-400 px-4 py-2 text-sm text-gray-700 hover:border-orange-500 hover:text-orange-600 transition"
                    >
                      {item}
                    </button>
                  ))}
                </motion.div>
              </motion.div>

              {/* Fake Captcha */}
              <motion.div className="pt-4">
                <motion.div className="w-full max-w-[320px] bg-white border border-gray-300 rounded-md p-4 flex items-center justify-between">
                  <motion.div className="flex items-center gap-3">
                    <motion.div className="w-5 h-5 border border-gray-500"></motion.div>
                    <span className="text-sm text-gray-700">
                      I’m not a robot
                    </span>
                  </motion.div>

                  <motion.div className="text-xs text-blue-600 font-semibold">
                    reCAPTCHA
                  </motion.div>
                </motion.div>
              </motion.div>

              <button
                className="mt-4 bg-orange-600 hover:bg-orange-700 transition text-white rounded-full px-8 py-3 font-semibold shadow-md"
              >
                Submit
              </button>

            </form>
          </motion.div>

        </motion.div>
      </motion.div>
    </section>
  );
}