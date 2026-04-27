"use client";

export default function TestimonialSection() {
  return (
    <div className="w-full bg-white py-16 px-4 md:px-10">

      {/* MAIN CONTAINER */}
      <div className="relative max-w-7xl mx-auto rounded-2xl overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <img
            src="/build-bg-2.png" // your grid/bg image
            alt="bg"
            className="w-full h-full object-cover"
          />
        </div>

        {/* DARK OVERLAY (for readability) */}
        {/* <div className="absolute inset-0 bg-black/60" /> */}

        {/* CONTENT */}
        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center p-6 md:p-12">

          {/* LEFT IMAGES */}
          <div className="relative flex justify-center md:justify-start">

            {/* BACK IMAGE */}
            <img
              src="/salt-pic.png"
              alt="charm-city-pic"
              className="w-[220px] md:w-[280px] rounded-lg shadow-lg"
            />

            {/* FRONT IMAGE */}
            {/* <img
              src="/charm-horizontal.png"
              alt="charm city"
              className="w-[200px] md:w-[260px] rounded-lg shadow-xl absolute bottom-[-20px] left-[40px] md:left-[80px]"
            /> */}
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-white text-center md:text-left">

            <p className="text-sm text-gray-300 mb-2">Charm City</p>

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

            {/* PROFILE ROW */}
            <div className="flex flex-col md:flex-row items-center md:items-center gap-4 mt-6">

              {/* USER */}
              <div className="flex items-center gap-3">
                {/* <img
                  src="/user.png"
                  alt="user"
                  className="w-10 h-10 rounded-full"
                /> */}

                <div>
                  <p className="text-sm font-medium">Jeffrey Davidson</p>
                  <p className="text-xs text-gray-400">
                    Founder Charm City
                  </p>
                </div>
              </div>

              {/* RATING */}
              <div className="flex text-yellow-400 text-sm">
                ★★★★★
              </div>

              {/* WATCH VIDEO */}
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