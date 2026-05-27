import React from "react";
import AnimatedStat from "./AnimatedStat";

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
  title = "TRUSTED WORLDWIDE",
  subtitle = "Trusted by Innovative Teams",
  speedSeconds = 20,
}) {
  const doubled = [...companies, ...companies];

  return (
    <section className="relative overflow-hidden bg-[#020617]">
      {/* compact spacing; keep section height reduced */}
      <div className="max-w-7xl mx-auto px-6 pt-[80px] pb-[56px]">
        <div className="text-center mb-10">
          <p className="text-green-400 uppercase tracking-[0.4em] text-sm">
            {title}
          </p>

          <h2 className="text-2xl md:text-3xl font-black text-white mt-4 leading-tight">
            {subtitle}
          </h2>

          <p className="text-gray-400 mt-4 text-base max-w-[720px] mx-auto leading-7">
            Supporting modern AI, cloud and enterprise solutions.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl">
          <div
            className="flex gap-8 whitespace-nowrap items-center"
            style={{
              width: "max-content",
              animation: `marquee ${speedSeconds}s linear infinite`,
            }}
          >
            {doubled.map((company, index) => (
              <div
                key={index}
                className="
                  min-w-[190px]
                  h-[64px]
                  flex items-center justify-center
                  rounded-2xl
                  bg-white/[0.03]
                  border border-white/10
                  backdrop-blur-md
                  transition-all duration-300
                  hover:opacity-100
                  hover:shadow-[0_0_30px_rgba(16,217,129,0.18)]
                  opacity-70
                  hover:opacity-100
                "
              >
                <span className="text-base md:text-lg font-bold text-white/70 hover:text-white px-2 text-center">
                  {company}
                </span>
              </div>
            ))}
          </div>

          {/* Left Fade */}
          <div className="absolute left-0 top-0 h-full w-[110px] bg-gradient-to-r from-[#020617] to-transparent z-10" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 h-full w-[110px] bg-gradient-to-l from-[#020617] to-transparent z-10" />
        </div>

        {/* Stats strip below logos (number animation 1 -> end) */}
        <div className="mt-[56px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { value: 99.9, suffix: "%", label: "System Uptime" },
            { value: 50, suffix: "+", label: "Solutions Delivered" },
            { value: 100, suffix: "+", label: "Clients" },
            { value: 24, suffix: "/7", label: "Support" },
          ].map((m) => (
            <AnimatedStat key={m.label} value={m.value} suffix={m.suffix} label={m.label} />
          ))}
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

