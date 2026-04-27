"use client";

export default function QuestionsSection() {
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
    <div className="w-full bg-white py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">

          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1 border rounded-full text-sm text-gray-600 mb-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              Our Questions
            </div>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-gray-700">
              <span className="text-orange-600">The</span> Questions
              <br />
              <span className="text-orange-600">Most</span> Brands Avoid
            </h2>
          </div>

          {/* RIGHT */}
          <div className="max-w-md">
            <p className="text-gray-600 text-sm md:text-base">
              We Don’t Jump Into Design. We Interrogate The Brand First, Because
              Clarity Beats Aesthetics Every Time.
            </p>

            <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-full text-sm flex items-center gap-2">
              View FAQs <span>↗</span>
            </button>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6">

          {cards.map((card, i) => (
            <div key={i} className="relative">

              {/* STEP TAG (top left) */}
              <div
                className={`absolute -top-5 left-4 px-4 py-2 rounded-t-xl text-sm font-semibold z-10
                  ${
                    card.active
                      ? "bg-orange-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
              >
                {card.step}
              </div>

              {/* BACK LAYER (for stepped top effect) */}
              <div
                className={`absolute top-0 left-4 right-0 h-full rounded-2xl 
                ${
                  card.active
                    ? "bg-orange-500/20"
                    : "bg-gray-200"
                }`}
              />

              {/* MAIN CARD */}
              <div
                className={`relative p-6 pt-10 rounded-2xl shadow-sm
                ${
                  card.active
                    ? "bg-orange-600 text-white"
                    : "bg-[#eeeeee] text-gray-700"
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
                        card.active
                          ? "border-white/30"
                          : "border-gray-300"
                      }`}
                    >
                      • {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}