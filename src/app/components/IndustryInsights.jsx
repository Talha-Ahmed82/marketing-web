import { motion } from "framer-motion";

export default function IndustryInsights() {
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
      date: "March 31st, 2026",
      title: "Interface Powered\nBy Ai Intelligence",
      image: "/swiper-pic1.png",
      large: true,
    },
    {
      date: "March 31st, 2026",
      title: "Interface Powered\nBy Ai Intelligence",
      image: "/swiper-pic2.png",
      large: true,
    },
    {
      date: "April 06th, 2026",
      title: "The Evolution Of\nAi Automation",
      image: "/swiper-pic1.png",
      large: true,
    },
    {
      date: "April 12th, 2026",
      title: "Future Of\nMachine Learning",
      image: "/swiper-pic2.png",
      large: true,
    },
  ];

  return (
    <section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full bg-white py-14 md:py-20 overflow-hidden"
    >
      <motion.div
        variants={fadeUp}
        transition={{ delay: 0.2 }}
        className="max-w-[1400px] mx-auto mb-10 md:mb-14 px-4"
      >
        <h2 className="text-center font-medium text-3xl md:text-6xl tracking-tight">
          <span className="text-[#DE3B00]">Our </span>
          <span className="text-[#374550]">Industry </span>
          <span className="text-[#DE3B00]">Insights</span>
        </h2>
      </motion.div>

      {/* Infinite Moving Slider */}
      <motion.div
        // variants={fadeUp}
        // initial="hidden"
        // whileInView="visible"
        // viewport={{ once: true, amount: 0.2 }}
        className="marquee-wrapper"
      >
        <motion.div
          // variants={fadeUp}
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true, amount: 0.2 }}
          className="marquee-track"
        >
          {[...cards, ...cards].map((item, index) => (
            <motion.article
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              key={index}
              className={`
                insight-card
                ${
                  item.large
                    ? "w-[520px] md:w-[700px]"
                    : "w-[260px] md:w-[330px]"
                }
              `}
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,.65), rgba(0,0,0,.15)), url(${item.image})`,
              }}
            >
              <motion.div className="relative z-10 max-w-[70%]">
                <p className="text-white/90 text-xs md:text-sm mb-3">
                  {item.date}
                </p>

                <h3 className="text-white text-xl md:text-[38px] leading-tight font-medium whitespace-pre-line">
                  {item.title}
                </h3>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
