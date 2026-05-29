import Link from "next/link";

export default function SecureSdlcPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-emerald-400 uppercase tracking-[4px] font-semibold mb-4">
            AI-Powered Secure SDLC
          </p>
          <h1 className="text-white text-4xl md:text-6xl font-black mb-6">
            Secure SDLC & DevSecOps Automation
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl leading-8">
            Scan, build, validate, and release applications through secure automated
            pipelines. Bring DevOps, security checks, compliance validation, and
            AI-guided remediation into one unified workflow.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition"
            >
              Talk to Experts
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
              <h3 className="text-xl font-bold mb-3 text-white">Security Scanning</h3>
              <p className="text-gray-400 leading-8">
                Automated checks for vulnerabilities during code and build stages.
              </p>
            </div>

            <div className="rounded-[32px] p-8 bg-[#161616] border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-white">Policy & Compliance</h3>
              <p className="text-gray-400 leading-8">
                Validate builds against security policies and compliance requirements.
              </p>
            </div>

            <div className="rounded-[32px] p-8 bg-[#161616] border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-white">AI Remediation Guidance</h3>
              <p className="text-gray-400 leading-8">
                AI insights help teams understand fixes and reduce repeated issues.
              </p>
            </div>

            <div className="rounded-[32px] p-8 bg-[#161616] border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-white">Hardened CI/CD</h3>
              <p className="text-gray-400 leading-8">
                Secure deployment with automated gates and consistent release quality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

