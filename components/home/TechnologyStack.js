import { motion } from "framer-motion";
// Intentionally avoid react-icons/si exports here.
// The current react-icons version in this repo does not export several of these
// named symbols, which breaks Next.js prerender.
const stack = [
  { name: "AWS", key: "aws" },
  { name: "Azure", key: "azure" },
  { name: "Google Cloud", key: "googlecloud" },
  { name: "Docker", key: "docker" },
  { name: "Kubernetes", key: "kubernetes" },
  { name: "Terraform", key: "terraform" },
];



export default function TechnologyStack() {
  return (
    <section className="bg-[#020617]">
      <div className="container-main py-[120px]">
        <div className="text-center mb-14">
          <h2 className="text-white text-4xl md:text-5xl font-black">Technology Stack</h2>
          <p className="text-gray-300 mt-5 max-w-[750px] mx-auto">
            Built on enterprise platforms that teams already trust—integrated for speed and reliability.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stack.map((t) => {
            return (
              <motion.div
                key={t.key}
                className="glass rounded-[26px] p-6 border border-white/10 flex flex-col items-center text-center"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-green-300 text-xl font-black">
                  {t.name.slice(0, 1)}
                </div>
                <div className="text-white font-semibold mt-4">{t.name}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

