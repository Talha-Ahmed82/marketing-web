export function AwardsSection() {
  return (
    <div className="w-full bg-orange-600 py-6 px-4 md:px-10 lg:px-20">
      <div className="flex flex-wrap items-center justify-between gap-6 text-white">
        {/* Left Title */}
        

        {/* Logos */}
        <div className="flex flex-wrap items-center gap-8 md:gap-12 lg:gap-16 justify-center w-full md:w-auto">
            <div className="text-sm md:text-lg font-semibold whitespace-nowrap">
          Awards & Recognition
        </div>
          <img src="/banner-1.png" alt="Clutch" className="h-6 md:h-8 object-contain" />
          <img src="/banner-2.png" alt="Google Cloud" className="h-6 md:h-8 object-contain" />
          <img src="/banner-3.png" alt="Microsoft" className="h-6 md:h-8 object-contain" />
          <img src="/banner-4.png" alt="AWS" className="h-6 md:h-8 object-contain" />
          <img src="/banner-5.png" alt="Google Partner" className="h-6 md:h-8 object-contain" />
        </div>
      </div>
    </div>
  );
}
