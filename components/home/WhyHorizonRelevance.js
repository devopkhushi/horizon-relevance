import { motion } from "framer-motion";

const cards = [
  {
    title: "AI Driven Insights",
    desc: "Real-time intelligence for smarter operations",
  },
  {
    title: "Enterprise Security",
    desc: "Built for reliability and compliance",
  },
  {
    title: "Cloud Optimization",
    desc: "Reduce cost and improve performance",
  },
  {
    title: "Automation First",
    desc: "Reduce repetitive work",
  },
];

export default function WhyHorizonRelevance() {
  return (
    <section className="bg-[#020617]">
      <div className="container-main py-[120px]">
        <h2 className="text-white text-4xl md:text-5xl font-black mb-5">Why Horizon Relevance</h2>
        <p className="text-gray-300 max-w-[700px] mb-12">
          A premium platform approach that blends AI intelligence, secure delivery, and cloud-native execution.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              className="glass rounded-[28px] p-8 border border-white/10"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-green-500/10 border border-green-400/25 mb-5 text-green-300 font-bold">
                0{idx + 1}
              </div>
              <h3 className="text-white text-2xl font-bold">{c.title}</h3>
              <p className="text-gray-300 mt-3 leading-7">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

