import React from "react";
import Image from "next/image";

export function AwardsSection() {
  return (
    <div className="w-full bg-[#DE3B00] py-6 px-4 md:px-10 lg:px-20">
      <div className="flex flex-wrap items-center justify-between gap-6 text-[#ECAE99]">
        {/* Left Title */}
        

        {/* Logos */}
        <div className="flex flex-wrap items-center gap-8 md:gap-12 lg:gap-16 justify-center w-full md:w-auto">
            <div className="text-sm md:text-lg font-semibold whitespace-nowrap">
          Awards & Recognition
        </div>
          <Image src="/banner-1.png" alt="Clutch" width={100} height={50} className="h-6 md:h-12 object-contain" />
          <Image src="/banner-2.png" alt="Google Cloud" width={100} height={50} className="h-6 md:h-12 object-contain" />
          <Image src="/banner-3.png" alt="Microsoft" width={100} height={50} className="h-6 md:h-12 object-contain" />
          <Image src="/banner-4.png" alt="AWS" width={100} height={50} className="h-6 md:h-12 object-contain" />
          <Image src="/banner-5.png" alt="Google Partner" width={100} height={50} className="h-6 md:h-12 object-contain" />
        </div>
      </div>
    </div>
  );
}
