"use client";
import { motion } from "framer-motion";

export default function QuestionsSection() {
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
  const cards = [
    {
      step: "01",
      label: "Understanding",
      title: "Why",
      active: true,
      points: [
        "What Does Your Business Actually Do?",
        "Who Is It For?",
        "What Problem Are You Solving?",
        "Why Did You Start This?",
      ],
    },
    {
      step: "01",
      label: "STRATEGY",
      title: "How",
      points: [
        "How Do Customers Currently Find You?",
        "How Do You Usually Explain Your Business?",
        "What Makes You Different From Competitors?",
        "What’s Working Right Now?",
      ],
    },
    {
      step: "01",
      label: "CREATION",
      title: "What",
      points: [
        "What Should Your Brand Feel Like?",
        "Where Do You Need To Show Up?",
        "What’s The Goal Right Now?",
        "What Does Success Look Like In 6 Months?",
      ],
    },
  ];

  return (
    <motion.div className="w-full bg-white py-16 px-4 md:px-10">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        {/* TOP */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row justify-between gap-8 mb-12"
        >
          {/* LEFT */}
          <motion.div variants={fadeUp} transition={{ delay: 0.2 }}>
            <motion.div className="inline-flex items-center gap-2 px-4 py-1 border rounded-full text-sm text-gray-600 mb-4">
              <span className="w-2 h-2 bg-[#DE3B00] rounded-full"></span>
              Our Questions
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-medium leading-tight text-gray-700">
              <span className="text-[#DE3B00]">The</span> Questions
              <br />
              <span className="text-[#DE3B00]">Most</span> Brands{" "}
              <span className="text-[#DE3B00]">Avoid</span>
            </h2>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={fadeUp}
            transition={{ delay: 0.35 }}
            className="max-w-md"
          >
            <p className="text-gray-800 text-sm md:text-base">
              We Don’t Jump Into Design. We Interrogate The Brand First, Because
              Clarity Beats Aesthetics Every Time.
            </p>

            <button className="mt-4 bg-[#DE3B00] hover:bg-[#c23000] text-white px-5 py-2 rounded-full text-sm flex items-center gap-2">
              View FAQs <span>↗</span>
            </button>
          </motion.div>
        </motion.div>

        {/* CARDS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {cards.map((card, i) => (
            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              key={i}
              className="relative"
            >
              {/* STEP TAG (top left) */}
              <motion.div
                className={`absolute -top-8 px-20 py-2 rounded-t-xl text-xl font-semibold z-10
                  ${
                    card.active
                      ? "bg-[#DE3B00] text-white"
                      : "bg-[#F8F8F8] text-gray-700"
                  }`}
              >
                {card.step}
              </motion.div>

              {/* BACK LAYER (for stepped top effect) */}
              <motion.div
                className={`absolute top-0 left-4 right-0 h-full rounded-2xl 
                ${card.active ? "bg-[#DE3B00]/20" : "bg-[#F8F8F8]"}`}
              />

              {/* MAIN CARD */}
              <motion.div
                className={`relative p-6 pt-10 rounded-2xl shadow-sm
                ${
                  card.active
                    ? "bg-[#DE3B00] text-white"
                    : "bg-[#F8F8F8] text-gray-700"
                }`}
              >
                {/* LABEL */}
                <p className="text-xs uppercase opacity-80 mb-2">
                  {card.label}
                </p>

                {/* TITLE */}
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  {card.title}
                </h3>

                {/* LIST */}
                <ul className="space-y-3 text-sm">
                  {card.points.map((point, idx) => (
                    <li
                      key={idx}
                      className={`border-b pb-2 ${
                        card.active ? "border-white" : "border-gray-600"
                      }`}
                    >
                      • {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
