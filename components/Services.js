export default function Services() {

  const services = [
    {
      title: "Cloud Infrastructure",
      description:
        "Scalable cloud ecosystems engineered for modern enterprise performance.",
    },
    {
      title: "DevSecOps Automation",
      description:
        "Secure CI/CD pipelines with integrated monitoring and deployment workflows.",
    },
    {
      title: "AI-Powered Monitoring",
      description:
        "Detect incidents faster using intelligent analytics and predictive systems.",
    },
    {
      title: "Serverless Architecture",
      description:
        "Build high-performance event-driven applications with minimal overhead.",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-[#050505]">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/10 blur-[140px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="text-green-400 uppercase tracking-[0.35em] text-sm mb-5">
            Our Expertise
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8 text-white">

            Intelligent Solutions
            <br />

            Built For Scale

          </h2>

          <p className="text-gray-400 text-xl leading-9 max-w-3xl mx-auto">

            We combine cloud engineering, AI automation, and DevSecOps practices
            to help organizations modernize infrastructure and accelerate growth.

          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[32px] p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-green-400/30 hover:-translate-y-3 transition duration-500"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-green-500/10 via-green-600/10 to-green-400/10"></div>

              {/* Number */}
              <div className="relative z-10 w-16 h-16 rounded-3xl bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center text-2xl font-bold shadow-[0_0_30px_rgba(34,197,94,0.35)] mb-8 text-black">

                {index + 1}

              </div>

              {/* Title */}
              <h3 className="relative z-10 text-2xl font-bold mb-5 text-white">

                {service.title}

              </h3>

              {/* Description */}
              <p className="relative z-10 text-gray-400 leading-8">

                {service.description}

              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}