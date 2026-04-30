"use client";
import Image from "next/image";

export default function AwardsSection() {
  const logos = [
    "/banner-1.png",
    "/banner-2.png",
    "/banner-3.png",
    "/banner-4.png",
    "/banner-5.png",
  ];

  return (
    <section className="w-full bg-[#DE3B00] overflow-hidden py-6 md:py-8">
      <div className="marquee-wrapper">

        <div className="marquee-track">
          {[1,2].map((set) => (
            <div
              key={set}
              className="flex items-center gap-10 md:gap-16 flex-shrink-0"
            >
              {/* Text only once per full logo group */}
              <span className="text-[#ECAE99] font-semibold whitespace-nowrap text-sm md:text-xl">
                Awards & Recognition
              </span>

              {logos.map((logo, i) => (
                <Image
                  key={i}
                  src={logo}
                  alt="award logo"
                  width={160}
                  height={60}
                  className="h-8 md:h-12 w-auto object-contain"
                />
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}