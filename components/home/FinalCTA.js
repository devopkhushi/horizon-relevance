import Link from "next/link";
import { motion } from "framer-motion";

function NeuralParticlesBg() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-cyan-500/10 to-blue-500/10" />
      {/* dots */}
      {Array.from({ length: 70 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-green-300/80"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 0.9, 0.2],
            y: [0, -12, 0],
          }}
          transition={{
            duration: 2.8 + Math.random() * 1.8,
            repeat: Infinity,
            delay: Math.random() * 1.2,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_70%)]" />
    </div>
  );
}

export default function FinalCTA() {
  return (
    <section className="bg-[#020617]">
      <div className="container-main py-[120px]">
        <div className="relative rounded-[34px] overflow-hidden border border-white/10 glass">
          <NeuralParticlesBg />

          <div className="relative z-10 p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h2 className="text-white text-4xl md:text-5xl font-black leading-tight">
                Ready to build intelligent cloud solutions?
              </h2>
              <p className="text-gray-300 mt-5 leading-7">
                Transform your infrastructure with AI-driven monitoring and enterprise automation.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-300 text-black font-semibold hover:scale-[1.03] transition text-center"
                >
                  Get Started
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full border border-green-400/30 text-white glass font-semibold hover:border-green-400/50 hover:translate-y-[-1px] transition text-center"
                >
                  Contact Team
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

