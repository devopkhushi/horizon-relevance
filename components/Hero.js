import Link from "next/link";
import MotionWrapper from "./MotionWrapper";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Hero-bg.png')",
          filter: "brightness(0.80) contrast(1.50) saturate(1.2)",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero content */}
      <div className="relative z-10">
        {/* aapka existing content */}
      </div>

      {/* glow effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full" />

      <div className="relative z-10 max-w-6xl px-6 text-center">

        <MotionWrapper>

          <div className="inline-flex px-6 py-3 rounded-full glass text-green-300 border border-white/10 mb-8">
            AI • DEVSECOPS • CLOUD • AUTOMATION
          </div>

          <h1 className="text-white font-black text-5xl md:text-7xl leading-tight">
            We Build
            <span className="gradient-text">
              Intelligent Digital Solutions
            </span>
          </h1>

          <p className="mt-8 text-gray-300 text-lg max-w-3xl mx-auto leading-8">
            Horizon Relevance helps businesses scale through
            AI-driven DevSecOps, Cloud Engineering, Intelligent
            Automation, and Enterprise solutions.
          </p>

          <div className="mt-10 flex justify-center gap-5 flex-wrap">

            <Link
              href="/services"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-green-600 to-green-400 text-black"
            >
              Explore Solutions
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 rounded-full border border-green-500/20 text-white glass"
            >
              Contact Us
            </Link>

          </div>

        </MotionWrapper>

      </div>
    </section>
  );
}
