import React from "react";
import { FaLayerGroup, FaBullseye, FaHeart, FaShieldAlt } from "react-icons/fa";

export default function PurposeSection() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* LEFT CONTENT */}
        <div className="flex-1">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 border px-3 py-1 rounded-full text-sm text-gray-600 mb-4">
            <span className="w-2 h-2 bg-[#DE3B00] rounded-full"></span>
            Why you need a Logo
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Your <span className="text-[#DE3B00]">Logo</span> Has
            <br />
            A <span className="text-[#DE3B00]">Purpose.</span>
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-gray-700 text-lg font-medium">
            It’s What People Remember Before They Remember Anything Else.
          </p>

          {/* Description */}
          <p className="mt-4 text-gray-500 text-sm leading-relaxed max-w-lg">
            A Logo Isn’t Decoration. It’s The First Signal Your Brand Sends.
            In A Few Seconds, It Shapes Perception, Builds Trust, And Sets Expectations.
            Done Right, It Doesn’t Just Look Good, It Positions You Across Screens,
            Print, And Real-World Touchpoints.
          </p>

          {/* Button */}
          <button className="mt-6 bg-[#DE3B00] text-white px-6 py-2 rounded-full text-sm font-medium transition">
            See Pricing →
          </button>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="flex-1 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* CARD 1 */}
            <div className="bg-[#DE3B00] text-white p-6 rounded-xl shadow-md">
              <FaLayerGroup className="text-2xl mb-4" />
              <p className="text-xs opacity-80">Make it Count</p>
              <h3 className="text-lg font-semibold mt-1">
                FIRST IMPRESSION
              </h3>
              <p className="text-sm mt-2 opacity-90">
                People Decide Fast. Your Logo Sets The Tone Before A Single Word
                Is Read. It’s Your First Chance To Be Taken Seriously.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#3f4a52] text-white p-6 rounded-xl shadow-md">
              <FaBullseye className="text-2xl mb-4" />
              <p className="text-xs opacity-80">Stand Out Instantly</p>
              <h3 className="text-lg font-semibold mt-1">
                ATTENTION
              </h3>
              <p className="text-sm mt-2 opacity-90">
                In Crowded Spaces, Average Disappears. A Strong Logo Gets Noticed
                And Remembered. It Gives People A Reason To Pause.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#3f4a52] text-white p-6 rounded-xl shadow-md">
              <FaHeart className="text-2xl mb-4" />
              <p className="text-xs opacity-80">Stay Recognizable</p>
              <h3 className="text-lg font-semibold mt-1">
                DIFFERENTIATION
              </h3>
              <p className="text-sm mt-2 opacity-90">
                Not Just Different, Clear. Your Logo Should Be Unmistakably Yours.
                Something People Can Spot Without Thinking Twice.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="bg-[#DE3B00] text-white p-6 rounded-xl shadow-md">
              <FaShieldAlt className="text-2xl mb-4" />
              <p className="text-xs opacity-80">Build Credibility</p>
              <h3 className="text-lg font-semibold mt-1">
                TRUST
              </h3>
              <p className="text-sm mt-2 opacity-90">
                Consistency Builds Trust. A Solid Logo Makes Your Brand Feel
                Established From Day One. It Signals Reliability Before You Even Speak.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}