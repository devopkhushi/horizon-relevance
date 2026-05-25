import Link from "next/link";

export default function CloudCostPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-emerald-400 uppercase tracking-[4px] font-semibold mb-4">
            Cloud Cost Optimization
          </p>
          <h1 className="text-white text-4xl md:text-6xl font-black mb-6">
            Reduce Cloud Spend with Intelligent Analytics
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl leading-8">
            Control cloud spending with intelligent cost visibility, usage analysis,
            rightsizing recommendations, and governance workflows. Cut waste while
            keeping applications reliable and scalable.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition"
            >
              Start Assessment
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
              <h3 className="text-xl font-bold mb-3 text-white">Cost Visibility</h3>
              <p className="text-gray-400 leading-8">
                Understand where spending happens across resources and teams.
              </p>
            </div>

            <div className="rounded-[32px] p-8 bg-[#161616] border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-white">Rightsizing</h3>
              <p className="text-gray-400 leading-8">
                Recommendations to reduce overprovisioning and improve efficiency.
              </p>
            </div>

            <div className="rounded-[32px] p-8 bg-[#161616] border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-white">Forecasting</h3>
              <p className="text-gray-400 leading-8">
                Predict future spend trends to plan budgets with confidence.
              </p>
            </div>

            <div className="rounded-[32px] p-8 bg-[#161616] border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-white">Governance Workflows</h3>
              <p className="text-gray-400 leading-8">
                Enforce approvals and policies for cost-related changes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

