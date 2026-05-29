import Link from "next/link";
import Navbar from "../components/Navbar";

const services = [
  {
    title: "Cloud Migration & Modernization",
    href: "/app/cloud-migration",
  },
  {
    title: "Cloud Cost Optimization",
    href: "/app/cloud-cost",
  },
  {
    title: "AI Monitoring & Incident Response",
    href: "/app/ai-monitoring",
  },
  {
    title: "AI-Powered Secure SDLC",
    href: "/app/secure-sdlc",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#020617] text-white px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <header className="mb-10 text-center">
            <p className="text-emerald-300 uppercase tracking-[2px] text-sm mb-3">
              Services
            </p>
            <h1 className="text-4xl font-bold mb-4">Explore Solutions</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Choose a service to open its dedicated page.
            </p>
          </header>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="card glass p-6 rounded-3xl hover:shadow-2xl transition"
              >
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-lg font-bold">{s.title}</h2>
                  <span className="text-green-300 font-semibold">↗</span>
                </div>
              </Link>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}

