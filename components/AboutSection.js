import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSection() {
  const commitments = [
    "Secure by Design",
    "Cloud-Native",
    "AI-Enabled",
    "Operationally Efficient",
    "Enterprise Scalable",
    "Business Outcome Focused",
  ];

  const services = [
    "AI-Driven DevSecOps",
    "Cloud Cost Optimization",
    "Multi-Cloud Deployment",
    "Intelligent Monitoring",
    "Kubernetes Engineering",
    "Observability",
    "CI/CD Automation",
    "Cloud Transformation",
  ];

  const serviceCards = [
    { num: "01", icon: "🛡️", title: "AI-Driven DevSecOps", href: "/services#devsecops" },
    { num: "02", icon: "☁️", title: "Cloud Cost Optimization", href: "/services#cloud-cost" },
    { num: "03", icon: "⬆️", title: "Multi-Cloud Deployment", href: "/services#multicloud" },
    { num: "04", icon: "🖥️", title: "Intelligent Monitoring", href: "/services#monitoring" },
    { num: "05", icon: "⚛️", title: "Kubernetes Engineering", href: "/services#kubernetes" },
    { num: "06", icon: "👁️", title: "Observability", href: "/services#observability" },
    { num: "07", icon: "∞", title: "CI/CD Automation", href: "/services#cicd" },
    { num: "08", icon: "☁️", title: "Cloud Transformation", href: "/services#transformation" },
  ];

  const approach = [
    {
      title: "Proactive Innovation",
      desc: "We identify emerging technologies and operational trends before they become enterprise risks.",
    },
    {
      title: "Intelligent Automation",
      desc: "We leverage AI and cloud-native engineering to accelerate transformation.",
    },
    {
      title: "Enterprise Resilience",
      desc: "We build secure and highly available systems for modern enterprise demands.",
    },
    {
      title: "Technology Leadership",
      desc: "Aligning technology strategy with long-term business outcomes.",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/10 blur-[160px] rounded-full"></div>
      <div className="max-w-7xl mx-auto px-6">
        {/* ABOUT */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-green-400 uppercase tracking-[0.35em] text-sm mb-5">
            ABOUT HORIZON RELEVANCE
          </p>
          <h2 className="text-5xl md:text-6xl font-black mb-10">
            Building Intelligent
            <br />
            Future Systems
          </h2>
          <p className="text-gray-400 text-xl leading-10 max-w-5xl mx-auto">
            At Horizon Relevance LLC, we help organizations anticipate tomorrow’s challenges while building resilient, intelligent, and scalable technology solutions for today.
            Founded with a vision to bridge innovation with operational excellence, we specialize in AI-driven DevSecOps, Cloud Engineering, Intelligent Automation, and Enterprise Observability.
          </p>
        </motion.div>

        {/* WHAT WE DO */}
        <div className="mb-32">
          <div className="relative w-full h-[760px] overflow-hidden flex justify-center items-center">
            {/* Background - Rotating Circles */}
            <div className="absolute inset-0 flex justify-center items-center">
              <motion.div 
                className="absolute w-[720px] h-[720px] rounded-full border border-green-500/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              ></motion.div>
              <motion.div 
                className="absolute w-[580px] h-[580px] rounded-full border border-green-500/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              ></motion.div>
              <motion.div 
                className="absolute w-[450px] h-[450px] rounded-full bg-green-500/10 blur-[90px]"
                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.9, 0.6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
            </div>

            {/* CENTER - STATIC */}
            <div className="absolute z-50">
              <div className="w-[220px] h-[220px] rounded-full border-[6px] border-green-400 bg-black shadow-[0_0_90px_rgba(34,197,94,.7)] flex justify-center items-center">
                <div className="w-[160px] h-[160px] rounded-full border border-green-500/20 flex justify-center items-center">
                  <h3 className="text-center text-4xl font-black leading-tight">
                    What
                    <br />
                    We Do
                  </h3>
                </div>
              </div>
            </div>

            {/* LEFT */}
            <div className="absolute left-[40px] top-1/2 -translate-y-1/2 flex flex-col gap-10 z-20">
              {serviceCards.slice(0, 4).map((it, index) => (
                <motion.div 
                  key={it.num} 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* CARD */}
                  <Link href={it.href}>
                    <motion.div
                      className="relative w-[400px] h-[95px] overflow-hidden group cursor-pointer transition duration-300"
                      style={{
                        clipPath: "polygon(10% 0%,90% 0%,100% 50%,90% 100%,10% 100%,0% 50%)",
                      }}
                      whileHover={{
                        scale: 1.08,
                      }}
                    >
                      {/* glow - animated on hover */}
                      <motion.div
                        style={{
                          clipPath: "polygon(10% 0%,90% 0%,100% 50%,90% 100%,10% 100%,0% 50%)",
                        }}
                        className="absolute inset-0 bg-green-400/30 blur-[12px]"
                        whileHover={{
                          opacity: [0.5, 1, 0.5],
                          background: "rgba(34, 197, 94, 0.6)",
                        }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                      ></motion.div>

                      {/* glow shadow */}
                      <motion.div 
                        className="absolute inset-0 shadow-[0_0_20px_rgba(34,197,94,0.35)]"
                        whileHover={{
                          boxShadow: "0 0 60px rgba(34,197,94,0.8), inset 0 0 30px rgba(34,197,94,0.4)"
                        }}
                      ></motion.div>

                      {/* border shape */}
                      <div className="absolute inset-0">
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 95" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                          <polygon
                            points="40,0 360,0 400,47.5 360,95 40,95 0,47.5"
                            fill="#000"
                            stroke="#22c55e"
                            strokeWidth="2"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>

                      {/* content */}
                      <div className="absolute inset-0 px-8 flex items-center gap-6 z-20">
                        <motion.div 
                          className="w-14 h-14 rounded-full border border-green-400 flex items-center justify-center transition duration-300"
                          whileHover={{ scale: 1.3, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          {it.icon}
                        </motion.div>
                        <div>
                          <div className="text-green-400 text-3xl font-black">{it.num}</div>
                          <div className="text-white whitespace-nowrap text-sm">{it.title}</div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>

                  {/* ARROWS */}
                  <div className="ml-4 relative w-[140px] h-[95px]">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[28px] h-[2px] bg-green-400"></div>
                    <div
                      className={`absolute left-[28px] w-[130px] h-[2px] bg-green-400 origin-left -translate-y-1/2 ${
                        index === 0
                          ? "rotate-[35deg] top-1/2"
                          : index === 1
                          ? "rotate-[16deg] top-1/2"
                          : index === 2
                          ? "-rotate-[16deg] top-1/2"
                          : "-rotate-[35deg] top-1/2"
                      }`}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* RIGHT */}
            <div className="absolute right-[40px] top-1/2 -translate-y-1/2 flex flex-col gap-10 z-20">
              {serviceCards.slice(4).map((it, index) => (
                <motion.div 
                  key={it.num} 
                  className="flex items-center"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* ARROWS */}
                  <div className="mr-4 relative w-[140px] h-[95px]">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[28px] h-[2px] bg-green-400"></div>
                    <div
                      className={`absolute right-[28px] w-[130px] h-[2px] bg-green-400 origin-right -translate-y-1/2 ${
                        index === 0
                          ? "-rotate-[35deg] top-1/2"
                          : index === 1
                          ? "-rotate-[16deg] top-1/2"
                          : index === 2
                          ? "rotate-[16deg] top-1/2"
                          : "rotate-[35deg] top-1/2"
                      }`}
                    ></div>
                  </div>

                  {/* CARD */}
                  <motion.div
                    className="relative w-[400px] h-[95px] overflow-hidden group cursor-pointer transition duration-300"
                    style={{
                      clipPath: "polygon(10% 0%,90% 0%,100% 50%,90% 100%,10% 100%,0% 50%)",
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 60px rgba(34,197,94,0.5)"
                    }}
                  >
                    <div
                      style={{
                        clipPath: "polygon(10% 0%,90% 0%,100% 50%,90% 100%,10% 100%,0% 50%)",
                      }}
                      className="absolute inset-0 bg-green-400/30 blur-[12px]"
                    ></div>
                    <div className="absolute inset-0 shadow-[0_0_20px_rgba(34,197,94,0.35)]">
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 95" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <polygon
                          points="40,0 360,0 400,47.5 360,95 40,95 0,47.5"
                          fill="#000"
                          stroke="#22c55e"
                          strokeWidth="2"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="absolute inset-0 px-8 flex items-center gap-6 z-20">
                      <motion.div 
                        className="w-14 h-14 rounded-full border border-green-400 flex items-center justify-center transition duration-300"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {it.icon}
                      </motion.div>
                      <div>
                        <div className="text-green-400 text-3xl font-black">{it.num}</div>
                        <div className="text-white whitespace-nowrap">{it.title}</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* APPROACH */}
        <div className="mb-28">
          <motion.h2 
            className="text-4xl font-black text-center mb-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Strategic Approach
          </motion.h2>
          <div className="grid lg:grid-cols-4 gap-8">
            {approach.map((item, index) => (
              <motion.div 
                key={index} 
                className="relative perspective-[1000px] group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="relative overflow-hidden rounded-[30px] bg-[#050505]/90 border border-green-400/30 backdrop-blur-xl p-8 transition duration-500 shadow-[0_25px_80px_rgba(0,255,136,0.18)] h-[340px] flex flex-col justify-between"
                  style={{ transformStyle: 'preserve-3d' }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    boxShadow: "0 0 80px rgba(34,197,94,0.4)"
                  }}
                >
                  <div className="pointer-events-none absolute inset-0 rounded-[30px] border border-green-400/30 opacity-80 blur-[1px]"></div>
                  <div className="pointer-events-none absolute inset-0 rounded-[30px] shadow-[inset_0_0_120px_rgba(0,255,136,0.12)]"></div>
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-[radial-gradient(circle_at_right,rgba(0,245,140,0.3),transparent_65%)] blur-[18px] opacity-80"></div>
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-[radial-gradient(circle_at_left,rgba(0,245,140,0.3),transparent_65%)] blur-[18px] opacity-80"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-5 text-white">{item.title}</h3>
                    <p className="text-gray-400 leading-8">{item.desc}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* COMMITMENTS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-black text-center mb-14">Our Commitment</h2>
          <div className="flex flex-wrap justify-center gap-5">
            {commitments.map((item, index) => (
              <motion.div 
                key={index} 
                className="px-8 py-4 rounded-full bg-green-500/10 border border-green-400/20 text-green-300 transition duration-300 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ 
                  bg: "green-400/15",
                  scale: 1.08,
                  boxShadow: "0 0 20px rgba(34,197,94,0.3)"
                }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
