"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "AI Monitoring & Incident Response",
    desc: "HorizonRelevance turns logs, metrics, alerts, and events into intelligent incident insights. Our Al-driven monitoring platform detects anomalies, identifies probable root causes, and helps teams respond before issues become major outages.",
    button: "View Solution",
    link: "/app/ai-monitoring",

    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  },

  {
    title: "AI Powered Secure SDLC",
    desc: "Horizon Relevance helps teams scan, build, validate, and release applications through secure automated pipelines. Our platform brings DevOps, security checks, compliance validation, and Al-guided remediation into one simple workflow.",
    button: "Learn More",
    link: "/app/secure-sdlc",

    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80",
  },

  {
    title: "Cloud Cost Optimization",
    desc: "Control cloud spending with intelligent cost visibility, usage analysis, rightsizing recommendations, and governance workflows. Horizon Relevance helps businesses reduce waste while keeping applications reliable and scalable.",
    button: "Start Assessment",
    link: "/app/cloud-cost",

    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  },

  {
    title: "Cloud Migration & Modernization",
    desc: "Horizon Relevance simplifies cloud migration with automated planning, wave-based execution, infrastructure templates, cost visibility, and deployment orchestration. Move workloads with less manual effort and better control.",
    button: "Get Started",
    link: "/app/cloud-migration",

    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
  },
];

export default function TopSliders() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000); // slower

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative mt-36 px-6 overflow-hidden">

      {/* background glow */}

      <div className="absolute left-0 top-0 w-[300px] h-[300px] bg-green-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-blue-500/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto relative">

        <AnimatePresence mode="wait">

          <motion.div
            key={current}
            initial={{
              opacity:0,
              x:300
            }}
            animate={{
              opacity:1,
              x:0
            }}
            exit={{
              opacity:0,
              x:-300
            }}
            transition={{
              duration:.8
            }}
            className="
            overflow-hidden
            rounded-[40px]
            bg-[#07111f]
            border border-white/10
            min-h-[500px]
            shadow-[0_0_50px_rgba(0,255,150,.1)]
            "
          >

            {/* padding so arrows don't visually overlap/cut the card */}
            <div className="grid lg:grid-cols-2 gap-8 px-6 lg:px-10 items-stretch">


              {/* LEFT */}

              <div className="p-14 flex flex-col justify-center">



                <h1 className="
                text-white
                text-4xl
                lg:text-5xl
                font-semibold
                leading-tight
                mt-6
                ">
                  {slides[current].title}
                </h1>

                <p className="
                text-gray-400
                mt-6
                leading-8
                max-w-[500px]
                ">
                  {slides[current].desc}
                </p>

                <a
                  href={slides[current].link}
                  className="
                  mt-8
                  px-7 py-4
                  rounded-full
                  bg-gradient-to-r
                  from-green-500
                  to-emerald-300
                  text-black
                  font-semibold
                  w-fit
                  hover:scale-105
                  transition
                  "
                >
                  {slides[current].button}
                </a>

              </div>

              {/* RIGHT */}

              <div className="relative">

                <img
                  src={slides[current].image}
                  alt=""
                  className="
                  w-full
                  h-[500px]
                  object-cover
                  "
                />

                <div className="
                absolute inset-0
                bg-gradient-to-r
                from-[#07111f]
                via-transparent
                to-transparent
                " />

              </div>

            </div>

          </motion.div>

        </AnimatePresence>

        {/* ARROWS CENTER */}

        <button
          onClick={() =>
            setCurrent((prev) =>
              (prev - 1 + slides.length) % slides.length
            )
          }
          className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          z-20
          w-14 h-14
          rounded-full
          bg-black/40
          backdrop-blur-md
          border border-white/10
          text-white
          hover:scale-110
          transition
          "
        >
          ‹
        </button>

        <button
          onClick={() =>
            setCurrent((prev) =>
              (prev + 1) % slides.length
            )
          }
          className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          z-20
          w-14 h-14
          rounded-full
          bg-black/40
          backdrop-blur-md
          border border-white/10
          text-white
          hover:scale-110
          transition
          "
        >
          ›
        </button>

        {/* dots */}

        <div className="flex justify-center gap-3 mt-6">

          {slides.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`
              rounded-full transition-all duration-500
              ${
                current === index
                  ? "w-10 h-2 bg-green-400"
                  : "w-2 h-2 bg-white/30"
              }
              `}
            />

          ))}

        </div>

      </div>

    </section>
  );
}