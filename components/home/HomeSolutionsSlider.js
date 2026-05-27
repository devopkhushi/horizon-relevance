import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const solutions = [
  {
    title: "AI Monitoring & Incident Response",
    desc: "Detect anomalies and resolve incidents before outages impact users.",
    button: "View Solution",
    href: "/app/ai-monitoring",
  },
  {
    title: "Cloud Cost Optimization",
    desc: "Reduce cloud spending with intelligent cost visibility and rightsizing.",
    button: "View Solution",
    href: "/app/cloud-cost",
  },
  {
    title: "Secure SDLC",
    desc: "Harden pipelines with secure CI/CD and audit-ready compliance validation.",
    button: "View Solution",
    href: "/app/secure-sdlc",
  },
  {
    title: "Cloud Migration",
    desc: "Modernize workloads using wave-based automation and predictable execution.",
    button: "View Solution",
    href: "/app/cloud-migration",
  },
];

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

export default function HomeSolutionsSlider() {
  const [current, setCurrent] = useState(0);

  const total = solutions.length;
  const safeCurrent = clamp(current, 0, total - 1);

  const slide = solutions[safeCurrent];

  // Auto-rotate (subtle)
  useMemo(() => {
    const id = setInterval(() => {
      setCurrent((p) => (p + 1) % total);
    }, 7500);
    return () => clearInterval(id);
  }, [total]);

  return (
    <section className="bg-[#07111f]">
      <div className="container-main py-[120px]">
        <div className="text-center mb-14">
          <p className="text-green-400 uppercase tracking-[0.35em] text-sm mb-5">SOLUTIONS</p>
          <h2 className="text-white text-4xl md:text-5xl font-black">Enterprise Solutions</h2>
          <p className="text-gray-300 mt-5 max-w-[750px] mx-auto">
            AI-powered capabilities designed to accelerate delivery, reduce cost, and improve reliability.
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={safeCurrent}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-[32px] glass border border-white/10 overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-10 items-stretch">
                <div className="flex flex-col justify-center">
                  <div className="text-green-300 text-sm uppercase tracking-[0.2em] mb-4">
                    0{safeCurrent + 1} / 0{total}
                  </div>

                  <h3 className="text-white text-3xl md:text-4xl font-bold leading-tight">
                    {slide.title}
                  </h3>

                  <p className="text-gray-300 mt-4 leading-7 text-base md:text-lg line-clamp-2">
                    {slide.desc}
                  </p>

                  <div className="mt-8">
                    <Link
                      href={slide.href}
                      className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-300 text-black font-semibold hover:scale-[1.03] transition"
                    >
                      {slide.button}
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-cyan-500/10 to-blue-500/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />

                  <div className="relative h-[260px] lg:h-[320px] rounded-[26px] border border-white/10 bg-black/30 overflow-hidden">
                    <div className="absolute inset-0 opacity-60">
                      {/* lightweight grid */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" />
                    </div>

                    {/* floating chips */}
                    <div className="absolute left-6 top-6 glass border border-white/10 rounded-2xl px-4 py-3">
                      <div className="text-xs uppercase tracking-[0.2em] text-green-300">AI Layer</div>
                      <div className="text-white font-bold mt-1">Signal → Insight</div>
                    </div>

                    <motion.div
                      className="absolute right-6 top-20 glass border border-white/10 rounded-2xl px-4 py-3 w-[220px]"
                      animate={{ y: [0, -12, 0] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="text-xs uppercase tracking-[0.2em] text-cyan-300">Cloud Ops</div>
                      <div className="text-white font-bold mt-1">Automate Reliability</div>
                    </motion.div>

                    <motion.div
                      className="absolute left-10 bottom-8 glass border border-white/10 rounded-2xl px-4 py-3 w-[240px]"
                      animate={{ y: [0, 14, 0] }}
                      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="text-xs uppercase tracking-[0.2em] text-emerald-300">Security</div>
                      <div className="text-white font-bold mt-1">Policy-Driven Delivery</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* arrows */}
          <button
            type="button"
            onClick={() => setCurrent((p) => (p - 1 + total) % total)}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/30 border border-white/10 backdrop-blur-md text-white hover:scale-110 transition"
            aria-label="Previous solution"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => setCurrent((p) => (p + 1) % total)}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/30 border border-white/10 backdrop-blur-md text-white hover:scale-110 transition"
            aria-label="Next solution"
          >
            ›
          </button>

          {/* dots */}
          <div className="flex justify-center gap-3 mt-8">
            {solutions.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrent(idx)}
                className={`rounded-full transition-all duration-500 ${
                  idx === safeCurrent ? "w-10 h-2 bg-green-400" : "w-2 h-2 bg-white/25"
                }`}
                aria-label={`Go to solution ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

