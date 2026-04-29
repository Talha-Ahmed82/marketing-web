"use client";
import Image from "next/image";

export default function TestimonialSection() {
  return (
    <div className="w-full bg-white py-16">

      {/* FULL WIDTH MAIN CONTAINER */}
      <div
        id="main"
        className="relative w-full rounded-xl overflow-visible"
      >
        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <Image
            width={1600}
            height={900}
            src="/build-bg-2.png"
            alt="bg"
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 grid md:grid-cols-2 gap-0 items-center px-6 md:px-14 py-10 md:py-12">

          {/* LEFT IMAGE */}
          <div className="relative flex justify-center overflow-visible">

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
                object-contain
                drop-shadow-2xl
                -mt-10 md:-mt-30
              "
            />
          </div>


          {/* RIGHT CONTENT */}
          <div className="text-white text-center md:text-left md:pl-0">

            <p className="text-base mb-2">
              Charm City
            </p>

            <h2 className="text-2xl md:text-4xl font-semibold leading-tight">
              Great Find, I’d Use Them!
            </h2>

            <p className="mt-4 text-gray-300 text-sm md:text-base max-w-lg">
              It was my first time using a digital agency for branding/marketing
              assistance. From start to end, Brooklyn Design was responsive,
              attentive, and on time. The final output exceeded our expectations,
              and I will definitely contact these people again the next time our
              company requires assistance.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
              <div>
                <p className="text-sm font-medium">
                  Jeffrey Davidson
                </p>

                <p className="text-xs text-gray-400">
                  Founder Charm City
                </p>
              </div>

              <div className="flex text-yellow-400 text-sm">
                ★★★★★
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
                <span className="border border-gray-400 rounded-full p-1 text-xs">
                  ▶
                </span>
                Watch Video
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}