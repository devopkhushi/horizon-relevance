import { motion } from "framer-motion";

const metrics = [
  { value: "3x", label: "Faster Incident Response" },
  { value: "40%", label: "Lower Cloud Spend" },
  { value: "99%", label: "Pipeline Security Coverage" },
  { value: "24/7", label: "Operational Visibility" },
];

export default function ClientSuccessMetrics() {
  return (
    <section className="bg-[#07111f]">
      <div className="container-main py-[120px]">
        <h2 className="text-white text-4xl md:text-5xl font-black mb-5">Client Success Metrics</h2>
        <p className="text-gray-300 max-w-[760px] mb-14">
          Measurable outcomes that improve reliability, security, and cost efficiency for enterprise teams.
        </p>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <motion.div
              key={idx}
              className="glass rounded-[28px] p-8 border border-white/10"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <div className="text-green-300 font-black text-4xl">{m.value}</div>
              <div className="text-white font-semibold mt-3 leading-7">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

