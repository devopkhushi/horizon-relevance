import { motion } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  Shield,
  Cpu,
  Brain,
  Zap,
  BarChart3,
  Database,
  Network,
  Settings,
  Bell,
  Ticket,
  RefreshCcw,
  TrendingUp,
  Users,
} from "lucide-react";

const problems = [
  {
    title: "Too Many Alerts",
    desc: "Many monitoring tools create thousands of alerts every day. Teams become overwhelmed and may miss critical problems.",
    icon: <AlertTriangle size={30} />,
  },
  {
    title: "Slow Problem Detection",
    desc: "Issues can remain hidden for hours and small problems slowly become major outages.",
    icon: <Activity size={30} />,
  },
  {
    title: "Difficult Root Cause Investigation",
    desc: "Teams often check logs, metrics, cloud dashboards, network activity and user reports manually.",
    icon: <Cpu size={30} />,
  },
  {
    title: "Unexpected Downtime",
    desc: "Downtime affects customer experience, business operations and revenue.",
    icon: <Shield size={30} />,
  },
];

const features = [
  {
    title: "Real-Time Monitoring",
    desc: "Monitor systems continuously and receive updates instantly.",
    icon: <Activity size={30} />,
  },
  {
    title: "Predictive Analytics",
    desc: "Identify possible failures before they happen.",
    icon: <Brain size={30} />,
  },
  {
    title: "Smart Alerts",
    desc: "Reduce unnecessary notifications and improve focus.",
    icon: <AlertTriangle size={30} />,
  },
  {
    title: "Root Cause Detection",
    desc: "Find possible reasons behind issues quickly.",
    icon: <Cpu size={30} />,
  },
  {
    title: "Automated Actions",
    desc: "Automatically perform actions during incidents.",
    icon: <Zap size={30} />,
  },
  {
    title: "Security Intelligence",
    desc: "Detect suspicious activity and unusual behavior.",
    icon: <BarChart3 size={30} />,
  },
];

const workflowSteps = [
  {
    step: "1",
    title: "Data Collection",
    icon: Database,
    desc: "Collect logs, metrics, network traffic, cloud resources and events from multiple sources.",
  },
  {
    step: "2",
    title: "Pattern Learning",
    icon: Brain,
    desc: "AI studies historical and real-time data to learn normal system behavior.",
  },
  {
    step: "3",
    title: "Anomaly Detection",
    icon: AlertTriangle,
    desc: "Detect traffic spikes, failed requests and unusual CPU or memory activity.",
  },
  {
    step: "4",
    title: "Root Cause Analysis",
    icon: Network,
    desc: "Connect events and identify probable causes faster than manual investigation.",
  },
  {
    step: "5",
    title: "Incident Response",
    icon: Settings,
    desc: "Trigger alerts, create tickets, restart services and scale infrastructure.",
  },
];

export default function AiMonitoring() {
  return (
    <div className="bg-[#020617] min-h-screen text-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-green-400 mb-4">AI Monitoring</p>
            <h1 className="text-6xl font-black leading-tight">
              AI Monitoring &
              <br />
              Incident Response
            </h1>

            <p className="text-gray-400 mt-8 text-lg leading-9">
              Transform logs, metrics, alerts, and operational events into intelligent monitoring insights.
              Detect anomalies, identify probable root causes, and respond before minor issues become critical outages.
            </p>

            <button className="mt-10 px-8 py-4 rounded-full bg-green-400 text-black font-bold">
              View Architecture →
            </button>
          </div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="bg-white/5 border border-white/10 rounded-[30px] p-8"
          >
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-black/30 rounded-xl p-6">
                <p className="text-gray-400">System Health</p>
                <h2 className="text-4xl text-green-400 font-bold">99.9%</h2>
              </div>

              <div className="bg-black/30 rounded-xl p-6">
                <p className="text-gray-400">Active Alerts</p>
                <h2 className="text-4xl text-red-400 font-bold">24</h2>
              </div>

              <div className="bg-black/30 rounded-xl h-28 p-6">CPU Usage</div>
              <div className="bg-black/30 rounded-xl h-28 p-6">Incident Trends</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT IS AI */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-center text-5xl font-black">What is AI Monitoring & Incident Response?</h2>
        <p className="text-gray-400 text-center leading-9 mt-10">
          AI Monitoring & Incident Response is a smart way to watch applications, cloud systems, servers and business services.
          Traditional monitoring only checks fixed rules and alerts. AI monitoring goes beyond that.
          It studies system behavior, understands patterns, detects unusual activities and helps teams solve problems before they become serious issues.
          Instead of waiting for failures, AI continuously learns from system data and helps organizations keep services healthy, fast and available.
        </p>
      </section>

      {/* WHY BUSINESS NEEDS AI */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-14">
          <div>
            <h2 className="text-5xl font-black">Why Modern Businesses Need AI Monitoring</h2>
            <p className="text-gray-400 mt-8 leading-9">
              Modern applications generate huge amounts of data every second.
              <br />
              • Servers create logs <br />
              • Applications generate events <br />
              • Cloud services produce metrics <br />
              • Networks create traffic data
            </p>
            <p className="text-gray-400 mt-6 leading-9">
              AI monitoring automatically processes information, finds useful patterns and highlights important problems.
              This helps teams work faster and make better decisions.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <div className="space-y-5">
              <div className="bg-black/30 p-5 rounded-xl">Server Logs</div>
              <div className="bg-black/30 p-5 rounded-xl">Application Events</div>
              <div className="bg-black/30 p-5 rounded-xl">Cloud Metrics</div>
              <div className="bg-black/30 p-5 rounded-xl">Network Traffic</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-center text-5xl font-black">Problems Teams Face Without AI Monitoring</h2>

        <div className="grid lg:grid-cols-4 gap-8 mt-16">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <div className="text-green-400">{item.icon}</div>
              <h3 className="text-2xl font-bold mt-5">{item.title}</h3>
              <p className="text-gray-400 mt-5">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-center text-5xl font-black">Main Features</h2>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {features.map((item, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <div className="text-green-400">{item.icon}</div>
              <h3 className="text-2xl font-bold mt-5">{item.title}</h3>
              <p className="text-gray-400 mt-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS (Step by Step) */}
      <section className="relative py-28 bg-[#020617] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-[40%] -translate-x-1/2 w-[700px] h-[400px] bg-green-500/10 blur-[140px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <h2 className="text-center text-6xl font-black text-white mb-5">How AI Monitoring Works</h2>
          <p className="text-center text-gray-400 mb-20">Intelligent Monitoring • Real-time Analysis • Automated Response</p>

          <div className="relative">
            <div className="absolute top-[75px] left-[10%] w-[80%] h-[2px] bg-white/10" />

            <motion.div
              className="absolute top-[69px] left-[10%] w-5 h-5 rounded-full bg-green-400"
              animate={{ x: ["0%", "1200%"] }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            />

            <div className="grid lg:grid-cols-5 gap-8">
              {workflowSteps.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    whileHover={{ y: -10, scale: 1.03 }}
                    className="relative bg-[#071826] border border-green-500/20 rounded-[30px] p-8 backdrop-blur-lg"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-400 flex items-center justify-center text-green-400 font-bold">
                      {item.step}
                    </div>

                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ repeat: Infinity, duration: 3 }}
                      className="mt-6 text-green-400"
                    >
                      <Icon size={40} />
                    </motion.div>

                    <h3 className="text-3xl font-bold text-white mt-6">{item.title}</h3>
                    <p className="text-gray-400 mt-6 leading-8">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* AI Monitoring Diagram (additional section) */}
      <section className="bg-[#020617] py-28 overflow-hidden relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-green-500/10 blur-[120px]" />
        </div>


        <div className="max-w-7xl mx-auto px-6 relative">
          <h2 className="text-center text-6xl font-black text-white">
            How AI <span className="text-green-400">Monitoring</span> Works
          </h2>

          <p className="text-center text-gray-400 mt-4 mb-20">
            Intelligent Monitoring • Real-time Analysis • Automated Response
          </p>

          <div className="flex items-center justify-between">
            {/* LEFT SIDE */}
            <div className="space-y-5">
              {[
                "Logs",
                "Metrics",
                "Network Traffic",
                "Cloud Resources",
                "Events",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#081824] border border-green-500/20 rounded-xl px-5 py-4 w-[170px]"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* CENTER PIPELINE */}
            <div className="flex items-center gap-10">
              {[
                { icon: Brain, title: "Pattern Learning" },
                { icon: AlertTriangle, title: "Anomaly Detection" },
                { icon: Network, title: "Root Cause" },
                { icon: Settings, title: "Response" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      animate={{
                        boxShadow: [
                          "0 0 10px #22c55e",
                          "0 0 40px #22c55e",
                          "0 0 10px #22c55e",
                        ],
                      }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="w-28 h-28 rounded-full bg-[#081824] border border-green-400 flex flex-col items-center justify-center text-green-400"
                    >
                      <Icon size={32} />
                    </motion.div>

                    {index !== 3 && (
                      <div className="relative w-24 h-[2px] bg-white/20">
                        <motion.div
                          animate={{ x: [0, 80] }}
                          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                          className="absolute -top-[4px] w-3 h-3 rounded-full bg-green-400"
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-5">
              {[
                { icon: Bell, title: "Send Alerts" },
                { icon: Ticket, title: "Create Tickets" },
                { icon: RefreshCcw, title: "Restart Services" },
                { icon: TrendingUp, title: "Scale Infrastructure" },
                { icon: Users, title: "Notify Teams" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-[#081824] border border-green-500/20 rounded-xl px-5 py-4 flex items-center gap-4 w-[220px]"
                  >
                    <Icon size={20} className="text-green-400" />
                    {item.title}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* USE CASES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-center text-5xl font-black">Industry Use Cases</h2>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {[
            "Cloud Infrastructure",
            "DevOps Teams",
            "Security Teams",
            "E-commerce Platforms",
            "Financial Services",
            "Healthcare Systems",
          ].map((item, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-3xl p-8">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="text-center py-24">
        <h2 className="text-5xl font-black">Ready To Monitor Smarter?</h2>
        <p className="text-gray-400 mt-8">Transform logs, metrics and system data into intelligent insights.</p>
        <button className="bg-green-400 px-8 py-4 rounded-full text-black font-bold mt-10">
          Contact Team →
        </button>
      </section>
    </div>
  );
}

