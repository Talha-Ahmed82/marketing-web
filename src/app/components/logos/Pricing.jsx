"use client";

export default function PricingSection() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-700">
          Clear Pricing. <span className="text-[#DE3B00]">No Guesswork.</span>
        </h2>

        {/* Subheading */}
        <p className="mt-4 text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
          No Hidden Costs. No Vague Estimates. Just Structured Pricing Based On
          What You Actually Need.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 items-stretch">
          
          {/* Card 1 */}
          <div className="border border-[#DE3B00] rounded-xl p-6 text-left bg-white">
            <p className="text-gray-500 text-sm">Basic Plan</p>
            <h3 className="text-4xl font-bold text-[#DE3B00] mt-2">$70</h3>
            <p className="text-gray-600 mt-1">2 Logo Concept</p>

            <button className="mt-4 bg-[#DE3B00] text-white text-sm px-4 py-1.5 rounded-full">
              Order Now
            </button>

            <hr className="my-5" />

            <p className="font-semibold text-gray-700 mb-2">Features</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• By 1 Experienced Designer</li>
              <li>• 3 Rounds Of Revision</li>
              <li>• Dedicated Project Manager</li>
              <li>• 24-48 Hours Delivery</li>
            </ul>

            <hr className="my-5" />

            <p className="font-semibold text-gray-700 mb-2">
              What You Will Get?
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 1 Finalized Logo</li>
              <li>• 100% Ownership</li>
              <li>• PNG Transparent Background</li>
              <li>• No Print-Ready File</li>
              <li>• No Editable Vector File</li>
            </ul>
          </div>

          {/* Card 2 (Highlighted) */}
          <div className="rounded-xl p-6 text-left bg-[#DE3B00] text-white scale-100 md:scale-105 shadow-lg">
            <p className="text-sm opacity-90">Corporate Plan</p>
            <h3 className="text-4xl font-bold mt-2">$199</h3>
            <p className="mt-1">3 Logo Concept</p>

            <button className="mt-4 bg-white text-[#DE3B00] text-sm px-4 py-1.5 rounded-full">
              Order Now
            </button>

            <hr className="my-5 border-white/30" />

            <p className="font-semibold mb-2">Features</p>
            <ul className="text-sm space-y-1">
              <li>• By 3 Experienced Designer</li>
              <li>• Unlimited Revisions</li>
              <li>• Dedicated Project Manager</li>
              <li>• 24-48 Hours Delivery</li>
            </ul>

            <hr className="my-5 border-white/30" />

            <p className="font-semibold mb-2">What You Will Get?</p>
            <ul className="text-sm space-y-1">
              <li>• 1 Finalized Logo</li>
              <li>• 100% Ownership</li>
              <li>• Editable File (EPS)</li>
              <li>• Printable File (PDF)</li>
              <li>• Commercial License</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="border border-[#DE3B00] rounded-xl p-6 text-left bg-white">
            <p className="text-gray-500 text-sm">Corporate Plan</p>
            <h3 className="text-4xl font-bold text-[#DE3B00] mt-2">$199</h3>
            <p className="text-gray-600 mt-1">4 Logo Concept</p>

            <button className="mt-4 bg-[#DE3B00] text-white text-sm px-4 py-1.5 rounded-full">
              Order Now
            </button>

            <hr className="my-5" />

            <p className="font-semibold text-gray-700 mb-2">Features</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• By 2 Experienced Designer</li>
              <li>• Unlimited Revisions</li>
              <li>• Dedicated Project Manager</li>
              <li>• 24-48 Hours Delivery</li>
            </ul>

            <hr className="my-5" />

            <p className="font-semibold text-gray-700 mb-2">
              What You Will Get?
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 1 Finalized Logo</li>
              <li>• 100% Ownership</li>
              <li>• All File Formats</li>
              <li>• Commercial License</li>
              <li>• Free Business Card Design</li>
            </ul>
          </div>
        </div>

        {/* Bottom Button */}
        <div className="mt-10">
          <button className="bg-[#DE3B00] text-white px-6 py-2 rounded-full text-sm hover:bg-[#DE3B00] transition">
            See More Packages →
          </button>
        </div>
      </div>
    </section>
  );
}