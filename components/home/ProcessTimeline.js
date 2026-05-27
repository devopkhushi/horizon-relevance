import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Discover Signals",
    desc: "Unify logs, metrics, alerts, and events into one view.",
  },
  {
    n: "02",
    title: "AI Analysis",
    desc: "Detect anomalies and generate actionable insights.",
  },
  {
    n: "03",
    title: "Enterprise Automation",
    desc: "Automate remediation with policy-driven workflows.",
  },
  {
    n: "04",
    title: "Secure Delivery",
    desc: "Harden SDLC with secure CI/CD and compliance checks.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="bg-[#07111f]">
      <div className="container-main py-[120px]">
        <h2 className="text-white text-4xl md:text-5xl font-black mb-6">AI + Cloud Process</h2>
        <p className="text-gray-300 max-w-[760px] mb-14">
          A practical, enterprise-ready flow that turns signal into outcomes—while staying secure.
        </p>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-px bg-white/10" />

          <div className="space-y-6 md:space-y-0">
            {steps.map((s, idx) => (
              <motion.div
                key={s.n}
                className={`md:flex ${idx % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <div
                  className={`glass border border-white/10 rounded-[28px] p-8 w-full md:max-w-[520px] ${
                    idx % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-400/20 flex items-center justify-center text-green-300 font-black">
                      {s.n}
                    </div>
                    <h3 className="text-white text-2xl font-bold">{s.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-7">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

