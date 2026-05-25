import Link from "next/link";

export default function AIMonitoring() {
  const features = [
    {
      title: "Real-Time Monitoring",
      desc: "Track logs, metrics and events across systems instantly.",
    },

    {
      title: "AI Incident Detection",
      desc: "Automatically detect unusual activities before failures happen.",
    },

    {
      title: "Root Cause Analysis",
      desc: "AI analyzes data patterns to identify probable causes quickly.",
    },

    {
      title: "Automated Response",
      desc: "Trigger workflows and alerts automatically for faster resolution.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#050505] text-white overflow-hidden">

      {/* Glow */}

      <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-green-500/10 blur-[120px]" />

      <div className="absolute right-10 top-[40%] w-[300px] h-[300px] bg-blue-500/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-28">

        {/* Hero */}

        <div className="text-center">

          <p className="
          text-green-400
          uppercase
          tracking-[4px]
          mb-5
          ">
            AI Monitoring
          </p>

          <h1 className="
          text-5xl
          md:text-7xl
          font-black
          leading-tight
          ">
            AI Monitoring &
            <br />
            Incident Response
          </h1>

          <p className="
          mt-8
          text-gray-400
          max-w-3xl
          mx-auto
          leading-8
          text-lg
          ">
            Transform logs, alerts, metrics and operational events into
            intelligent insights using AI-powered monitoring systems.
          </p>

        </div>


        {/* Features */}

        <div className="
        grid
        md:grid-cols-2
        gap-8
        mt-24
        ">

          {features.map((item,index)=>(

            <div
            key={index}

            className="
            rounded-[30px]
            bg-[#111]
            border border-white/10
            p-8
            hover:border-green-400/30
            hover:-translate-y-2
            transition-all
            duration-500
            "
            >

              <div className="
              w-14
              h-14
              rounded-2xl
              bg-gradient-to-r
              from-green-500
              to-emerald-300
              mb-6
              " />

              <h2 className="
              text-2xl
              font-bold
              mb-5
              ">
                {item.title}
              </h2>

              <p className="
              text-gray-400
              leading-8
              ">
                {item.desc}
              </p>

            </div>

          ))}

        </div>


        {/* CTA */}

        <div
        className="
        rounded-[40px]
        mt-28
        bg-[#111]
        border border-white/10
        p-16
        text-center
        "
        >

          <h2 className="
          text-4xl
          font-bold
          mb-5
          ">
            Ready To Improve Incident Response?
          </h2>

          <p className="
          text-gray-400
          mb-10
          ">
            Build intelligent monitoring systems with AI-driven insights.
          </p>

          <Link
          href="/contact"

          className="
          px-8
          py-4
          rounded-full
          bg-gradient-to-r
          from-green-500
          to-emerald-300
          text-black
          font-bold
          "
          >
            Get Started
          </Link>

        </div>

      </div>

    </section>
  );
}