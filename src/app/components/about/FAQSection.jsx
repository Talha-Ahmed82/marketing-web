"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How Much Does A Project Cost?",
    answer:
      "Every project is different. We price based on scope, not guesswork. After understanding what you need, we'll give you a clear, no-surprises quote.",
  },
  {
    question: "How Long Does A Project Take?",
    answer: "Most projects take 2–6 weeks depending on complexity.",
  },
  {
    question: "What Do You Need From Us To Get Started?",
    answer: "We need your goals, requirements, and basic project idea.",
  },
  {
    question: "Do You Only Work With New York Clients?",
    answer: "No, we work with clients globally.",
  },
  {
    question: "Can You Help If We Already Have A Brand?",
    answer: "Yes, we can improve and scale your existing brand.",
  },
  {
    question: "Do You Offer Revisions?",
    answer: "Yes, revisions are included based on the package.",
  },
  {
    question: "What Sets You Apart From Others?",
    answer: "We focus on performance-driven design, not just visuals.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <div className="inline-flex items-center text-gray-600 gap-2 border border-gray-600 px-3 py-1 rounded-full text-xs mb-6">
            <span className="w-2 h-2 bg-[#DE3B00] rounded-full"></span>
            FAQs
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-[#3d4a50]">
            <span className="text-[#DE3B00]">Questions </span>
            <br className="hidden md:block" />
            Worth Asking
          </h2>

          <div className="mt-10">
            <Image
              src="/about/FAQ-pic.png" // replace with your image
              alt="FAQ"
              width={400}
              height={300}
              className="w-[280px] animate-float sm:w-[320px] lg:w-[380px] object-contain"
            />
          </div>
        </div>

        {/* RIGHT SIDE (FAQ LIST) */}
        <div className="w-full">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-gray-300 py-4"
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-sm sm:text-base font-medium text-[#3d4a50]">
                    {faq.question}
                  </span>

                  {isOpen ? (
                    <Minus className="text-gray-600" size={18} />
                  ) : (
                    <Plus className="text-gray-600" size={18} />
                  )}
                </button>

                {/* Answer */}
                {isOpen && (
                  <p className="mt-3 text-sm text-gray-600 pr-6 leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}