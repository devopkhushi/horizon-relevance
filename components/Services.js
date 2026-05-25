import Link from "next/link";

const services = [
  {
    title: "AI Monitoring & Incident Response",
    description:
      "HorizonRelevance turns logs, metrics, alerts, and events into intelligent incident insights. Our AI-driven monitoring platform detects anomalies, identifies probable root causes, and helps teams respond before issues become major outages.",
    button: "View Solution",
    href: "/app/ai-monitoring",
  },

  {
    title: "AI-Powered Secure SDLC",
    description:
      "HorizonRelevance helps teams scan, build, validate, and release applications through secure automated pipelines. Our platform brings DevOps, security checks, compliance validation, and AI-guided remediation into one simple workflow.",
    button: "Learn More",
    href: "/app/secure-sdlc",
  },

  {
    title: "Cloud Cost Optimization",
    description:
      "Control cloud spending with intelligent cost visibility, usage analysis, rightsizing recommendations, and governance workflows. HorizonRelevance helps businesses reduce waste while keeping applications reliable and scalable.",
    button: "Start Assessment",
    href: "/app/cloud-cost",
  },

  {
    title: "Cloud Migration & Modernization",
    description:
      "HorizonRelevance simplifies cloud migration with automated planning, wave-based execution, infrastructure templates, cost visibility, and deployment orchestration. Move workloads with less manual effort and better control.",
    button: "Get Started",
    href: "/app/cloud-migration",
  },
];

export default function Services() {
  return (
    <section className="py-28 bg-[#050505]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <p
            className="
            text-emerald-400
            uppercase
            tracking-[4px]
            font-semibold
            mb-4
          "
          >
            Our Services
          </p>

          <h2
            className="
            text-white
            text-4xl
            md:text-6xl
            font-black
            mb-6
          "
          >
            Comprehensive IT Services
          </h2>

          <p
            className="
            text-gray-400
            max-w-3xl
            mx-auto
            text-lg
            leading-8
          "
          >
            Intelligent cloud engineering, DevSecOps, AI automation,
            and enterprise solutions designed for scalability.
          </p>

        </div>


        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="
              rounded-[32px]
              p-8
              bg-[#161616]
              border border-white/10
              hover:-translate-y-3
              hover:border-emerald-400/30
              transition-all
              duration-500
              min-h-[400px]
              flex
              flex-col
              "
            >

              <h3
                className="
                text-white
                text-2xl
                font-bold
                mb-6
              "
              >
                {service.title}
              </h3>

              <p
                className="
                text-gray-400
                leading-8
                flex-grow
                "
              >
                {service.description}
              </p>

              <Link
                href={service.href}
                className="
                mt-8
                text-emerald-400
                font-semibold
                hover:text-emerald-300
                "
              >
                {service.button} →
              </Link>

            </div>

          ))}



          {/* GET IN TOUCH CARD */}

          <Link
            href="/contact"
            className="
            rounded-[32px]
            p-8
            bg-[#161616]
            border border-white/10
            hover:-translate-y-3
            hover:border-emerald-400/30
            transition-all
            duration-500
            min-h-[400px]
            flex
            items-center
            justify-center
            text-center
            "
          >

            <div>

              <h2
                className="
                text-white
                text-4xl
                font-bold
                mb-4
                "
              >
                Get In Touch
              </h2>

              <p
                className="
                text-gray-400
                mb-6
                "
              >
                Let's build something together
              </p>

              <span
                className="
                text-emerald-400
                font-semibold
                "
              >
                Contact Us →
              </span>

            </div>

          </Link>

        </div>

      </div>

    </section>
  );
}