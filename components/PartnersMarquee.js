import React from "react";

const companies = [
  "storage360",
  "Software Suggest",
  "Rivo Holdings",
  "Origo",
  "Main Street Auto",
  "Mainspring",
  "IDMM",
  "HomePride",
  "Gemini Worktops",
  "CoverRight",
];

export default function PartnersMarquee({
  title = "PARTNERS",
  subtitle = "Trusted by teams building modern cloud & AI solutions",
  speedSeconds = 20,
}) {
  const doubled = [...companies, ...companies];

  return (
    <section className="relative py-20 overflow-hidden bg-[#020617]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-green-400 uppercase tracking-[0.4em] text-sm">
            {title}
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
            Our Partner Ecosystem
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            {subtitle}
          </p>
        </div>

        <div className="relative overflow-hidden">

          <div
            className="flex gap-10 whitespace-nowrap items-center"
            style={{
              width: "max-content",
              animation: `marquee ${speedSeconds}s linear infinite`,
            }}
          >
            {doubled.map((company, index) => (
              <div
                key={index}
                className="
                min-w-[240px]
                h-[90px]
                flex items-center justify-center
                rounded-2xl
                bg-white/[0.04]
                border border-white/10
                backdrop-blur-md
                hover:border-green-400/40
                transition-all duration-300
                "
              >
                <span className="text-3xl font-bold text-white/70 hover:text-white">
                  {company}
                </span>
              </div>
            ))}
          </div>

          {/* Left Fade */}
          <div className="absolute left-0 top-0 h-full w-[120px] bg-gradient-to-r from-[#020617] to-transparent z-10"/>

          {/* Right Fade */}
          <div className="absolute right-0 top-0 h-full w-[120px] bg-gradient-to-l from-[#020617] to-transparent z-10"/>

        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </section>
  );
}