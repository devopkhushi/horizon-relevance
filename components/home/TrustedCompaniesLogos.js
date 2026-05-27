import { motion } from "framer-motion";

// Uses existing assets already present in components/icons
const logos = [
  { name: "AWS", src: "/components/icons/amazonaws.svg" },
  { name: "Azure", src: "/components/icons/microsoftazure.svg" },
  { name: "Google Cloud", src: "/components/icons/googlecloud.svg" },
  { name: "Docker", src: "/components/icons/docker.svg" },
  { name: "Kubernetes", src: "/components/icons/kubernetes.svg" },
  { name: "Terraform", src: "/components/icons/terraform.svg" },
  { name: "OpenAI", src: "/components/icons/openai.svg" },
  { name: "Jenkins", src: "/components/icons/jenkins.svg" },
];

function LogoCard({ src, name }) {
  return (
    <motion.div
      className="h-[70px] flex items-center justify-center px-4 rounded-2xl glass border border-white/10 bg-white/[0.02]"
      whileHover={{ opacity: 1, scale: 1.03 }}
      transition={{ duration: 0.25 }}
      style={{ opacity: 0.6 }}
    >
      <img src={src} alt={name} className="h-[38px] w-auto object-contain" />
    </motion.div>
  );
}

export default function TrustedCompaniesLogos() {
  const doubled = [...logos, ...logos];

  return (
    <section className="bg-[#07111f]">
      <div className="container-main py-[60px]">
        <div className="text-center mb-8">
          <p className="text-green-400 uppercase tracking-[0.35em] text-sm">Trusted by Teams Worldwide</p>
        </div>

        {/* marquee */}
        <div className="relative overflow-hidden rounded-[28px] glass border border-white/10">
          <div className="flex items-center gap-6 whitespace-nowrap py-6 px-6">
            <motion.div
              className="flex items-center gap-6"
              animate={{ x: [0, -50] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              {doubled.map((l, idx) => (
                <div key={`${l.name}-${idx}`} className="inline-block">
                  <LogoCard src={l.src} name={l.name} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* fade edges */}
          <div className="absolute left-0 top-0 h-full w-[120px] bg-gradient-to-r from-[#07111f] to-transparent" />
          <div className="absolute right-0 top-0 h-full w-[120px] bg-gradient-to-l from-[#07111f] to-transparent" />
        </div>
      </div>
    </section>
  );
}

