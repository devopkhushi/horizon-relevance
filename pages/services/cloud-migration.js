import Link from "next/link";

export default function CloudMigrationPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-emerald-400 uppercase tracking-[4px] font-semibold mb-4">
            Multi-Cloud Management
          </p>
          <h1 className="text-white text-4xl md:text-6xl font-black mb-6">
            Cloud Migration & Modernization at Enterprise Scale
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl leading-8">
            Simplify migration with automated planning, wave-based execution,
            infrastructure templates, cost visibility, and deployment orchestration.
            Move workloads with less manual effort and better control.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:border-emerald-400 transition"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">What you get</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-[32px] p-8 bg-[#161616] border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-white">Migration Planning</h3>
              <p className="text-gray-400 leading-8">
                Identify dependencies, choose strategies, and define execution waves.
              </p>
            </div>

            <div className="rounded-[32px] p-8 bg-[#161616] border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-white">Automation & Templates</h3>
              <p className="text-gray-400 leading-8">
                Reusable infrastructure templates accelerate repeatable migrations.
              </p>
            </div>

            <div className="rounded-[32px] p-8 bg-[#161616] border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-white">Cost Visibility</h3>
              <p className="text-gray-400 leading-8">
                Track and estimate spend across migration phases for better decisions.
              </p>
            </div>

            <div className="rounded-[32px] p-8 bg-[#161616] border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-white">Deployment Orchestration</h3>
              <p className="text-gray-400 leading-8">
                Coordinate changes safely across environments for smoother cutovers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

