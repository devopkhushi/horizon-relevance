import Link from "next/link";
import { motion } from "framer-motion";
import CloudScene from "../CloudScene";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#020617]">
      {/* subtle background glows */}
      <div className="absolute left-[-180px] top-[-220px] w-[520px] h-[520px] bg-green-500/10 blur-[180px] rounded-full" />
      <div className="absolute right-[-200px] bottom-[-260px] w-[560px] h-[560px] bg-blue-500/10 blur-[200px] rounded-full" />

      <div className="container-main relative py-[120px]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex px-5 py-2 rounded-full glass text-green-300 border border-white/10 mb-8">
                Enterprise AI • Cloud • DevSecOps
              </div>

              {/* Max 2 heading lines */}
              <h1 className="text-white font-black text-4xl md:text-5xl leading-[1.05]">
                Enterprise AI & Cloud Solutions
                <br />
                Built for Modern Digital Teams
              </h1>

              {/* Max 3 description lines */}
              <p className="mt-6 text-gray-300 text-base md:text-lg max-w-[640px] leading-7">
                Accelerate cloud transformation, AI monitoring, secure SDLC, and intelligent automation with enterprise-grade solutions.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="px-7 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-300 text-black font-semibold hover:scale-[1.03] transition"
                >
                  Explore Solutions
                </Link>
                <Link
                  href="/contact"
                  className="px-7 py-4 rounded-full border border-green-500/20 text-white glass font-semibold hover:border-green-400/40 hover:translate-y-[-1px] transition"
                >
                  Book Demo
                </Link>
              </div>

              {/* Metrics strip (required) */}
              <div className="mt-12 grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {[
                  { label: "99.9%", value: "Uptime" },
                  { label: "50+", value: "Solutions" },
                  { label: "100+", value: "Clients" },
                  { label: "24/7", value: "Support" },
                ].map((m) => (
                  <motion.div
                    key={m.value}
                    className="glass px-6 py-5 rounded-3xl border border-white/10 flex flex-col"
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="text-white font-black text-2xl">{m.label}</div>
                    <div className="text-gray-300 text-sm mt-1">{m.value}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right */}
          <div className="relative">
            {/* floating 3D-ish layers */}
            <motion.div
              className="absolute -top-10 -left-10 w-[180px] h-[180px] rounded-full bg-green-500/10 blur-[40px]"
              animate={{ y: [0, -10, 0], opacity: [0.5, 0.75, 0.5] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-12 -right-6 w-[220px] h-[220px] rounded-full bg-cyan-500/10 blur-[55px]"
              animate={{ y: [0, 12, 0], opacity: [0.45, 0.7, 0.45] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="glass rounded-[32px] border border-white/10 p-5"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ translateY: -8 }}
            >
              <div className="relative h-[420px] lg:h-[460px] overflow-hidden rounded-[26px]">
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent" />
                <CloudScene />

                {/* floating dashboard cards */}
                <motion.div
                  className="absolute left-4 top-10 glass border border-white/10 rounded-2xl px-4 py-3 w-[210px]"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="text-green-300 text-xs uppercase tracking-[0.18em]">AI Monitor</div>
                  <div className="text-white font-bold mt-2">Anomaly Watch</div>
                  <div className="text-gray-300 text-sm mt-1">Real-time insights</div>
                </motion.div>

                <motion.div
                  className="absolute right-4 top-24 glass border border-white/10 rounded-2xl px-4 py-3 w-[210px]"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 3.0, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="text-cyan-300 text-xs uppercase tracking-[0.18em]">Cloud Costs</div>
                  <div className="text-white font-bold mt-2">Forecast Savings</div>
                  <div className="text-gray-300 text-sm mt-1">Rightsizing recommendations</div>
                </motion.div>

                <motion.div
                  className="absolute left-7 bottom-8 glass border border-white/10 rounded-2xl px-4 py-3 w-[250px]"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="text-emerald-300 text-xs uppercase tracking-[0.18em]">Secure SDLC</div>
                  <div className="text-white font-bold mt-2">Policy & Compliance</div>
                  <div className="text-gray-300 text-sm mt-1">Audit-ready pipelines</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

