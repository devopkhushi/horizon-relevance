import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    icon: "⚡",
    title: "AI Monitoring & Incident Response",
    desc: "Detect anomalies and accelerate resolution before outages.",
    href: "/app/ai-monitoring",
  },
  {
    icon: "🛡️",
    title: "Secure SDLC",
    desc: "Automated checks for compliance and safer releases.",
    href: "/app/secure-sdlc",
  },
  {
    icon: "📉",
    title: "Cloud Cost Optimization",
    desc: "Rightsize spend with AI-driven visibility and governance.",
    href: "/app/cloud-cost",
  },
  {
    icon: "☁️",
    title: "Cloud Migration & Modernization",
    desc: "Wave-based automation for predictable modernization.",
    href: "/app/cloud-migration",
  },
  {
    icon: "🔍",
    title: "Enterprise Observability",
    desc: "Unified telemetry with proactive anomaly detection.",
    href: "/services#observability",
  },
  {
    icon: "🧠",
    title: "Automation First",
    desc: "Reduce repetitive work with intelligent workflows.",
    href: "/services#automation",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-[#020617]">
      <div className="container-main py-[120px]">
        <div className="text-center mb-14">
          <h2 className="text-white text-4xl md:text-5xl font-black">Services</h2>
          <p className="text-gray-300 mt-5 max-w-[750px] mx-auto">
            Modular capabilities built for modern digital teams—fast to adopt, easy to scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <motion.div
              key={idx}
              className="glass rounded-[28px] p-8 border border-white/10"
              whileHover={{ translateY: -10 }}
              transition={{ duration: 0.25 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-400/20 flex items-center justify-center text-2xl text-green-300 mb-5">
                {s.icon}
              </div>
              <h3 className="text-white text-2xl font-bold leading-tight">{s.title}</h3>
              <p className="text-gray-300 mt-3 leading-7 line-clamp-2">{s.desc}</p>
              <Link
                href={s.href}
                className="inline-flex items-center gap-2 mt-6 text-green-300 font-semibold hover:text-green-200 transition"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

