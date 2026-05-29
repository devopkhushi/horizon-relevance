import Image from "next/image";
import { useState } from "react";
import { Mail, X } from "lucide-react";

// lucide-react version mismatch: Linkedin/Twitter are not exported in your installed build.
const Linkedin = () => null;
const Twitter = () => null;

export default function TeamPage() {
  const [openProfile, setOpenProfile] = useState(false);
  const [openRishiProfile, setOpenRishiProfile] = useState(false);

  const RISHI_DETAILS = {
    overview:
      "With over 4+ years of experience in Cloud Engineering, DevOps, and Application Security, Rishi Sharma specializes in bridging the gap between technology and business outcomes as a Technical Product Manager. His background spans AWS cloud infrastructure, CI/CD automation, DevSecOps implementation, and cross-functional product delivery across healthcare and enterprise domains.",
    achievements:
      "Rishi has successfully collaborated with engineering, security, and business teams to design scalable cloud-native solutions, streamline deployment pipelines, and improve operational efficiency using tools such as AWS, Jenkins, Terraform, GitHub, Kubernetes, and Jira. His experience includes driving product initiatives around CI/CD platforms, vulnerability management, infrastructure automation, and cloud operations while ensuring alignment with business goals and compliance standards.",
    leadership:
      "Having worked with organizations such as Regeneron Pharmaceuticals and Prudential Financial, Rishi brings a strong understanding of Agile methodologies, stakeholder management, roadmap planning, and technical solution architecture. He excels at translating complex technical requirements into actionable product strategies, prioritizing features, and delivering secure, scalable, and user-focused products.",
    strengths: [
      "Technical Product Management",
      "DevOps & DevSecOps Strategy",
      "Cloud Infrastructure (AWS)",
      "CI/CD Pipeline Automation",
      "Agile & Scrum Methodologies",
      "Cross-functional Team Leadership",
      "Product Roadmapping & Prioritization",
      "Application Security & Compliance",
      "Stakeholder Communication",
      "Process Optimization & Automation",
    ],
    mission:
      "Passionate about innovation and continuous improvement, Rishi aims to build impactful technology products that enhance operational performance, improve user experience, and drive business growth.",
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020816] text-white">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-250px] h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-green-500/20 blur-[170px]" />
        <div className="absolute left-1/2 top-[170px] h-[600px] w-[1350px] -translate-x-1/2 rounded-full border border-green-500/20 opacity-60" />
        <div className="absolute left-[10%] top-[35%] h-[280px] w-[280px] rounded-full bg-green-500/20 blur-[120px]" />
        <div className="absolute right-[10%] top-[30%] h-[280px] w-[280px] rounded-full bg-green-500/10 blur-[120px]" />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative z-10 px-6 pt-24">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-5 inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-xs tracking-[0.25em] text-green-300">
            OUR TEAM
          </div>

          <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
            The Minds Behind
            <span className="block bg-gradient-to-r from-green-200 via-green-400 to-green-500 bg-clip-text text-transparent">
              Horizon Relevance
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-400">
            A group of passionate innovators building secure, intelligent and future-ready digital solutions.
          </p>
        </div>
      </section>

      {/* ================= FOUNDER SECTION ================= */}
      <section className="relative overflow-hidden px-6 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-[10%] top-[15%] h-[500px] w-[500px] rounded-full bg-green-500/20 blur-[140px]" />
          <div className="absolute left-[15%] top-[10%] h-[700px] w-[700px] rounded-full border border-green-500/20 opacity-30" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[460px_1fr]">
          <div className="relative flex justify-center">
            <div className="relative overflow-hidden rounded-[34px] border border-green-500/10 w-[410px]">
              <Image
                src="/Ankur-Kashyap.jpeg"
                alt="Ankur Kashyap"
                width={450}
                height={560}
                priority
                className="relative z-10 object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2 text-[11px] tracking-[0.3em] text-green-300">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              FOUNDER & CEO
            </div>

            <h1 className="text-4xl font-semibold leading-[1.1] tracking-[-2px] text-white xl:text-6xl">
              Ankur{" "}
              <span className="bg-gradient-to-r from-green-200 via-green-400 to-green-500 bg-clip-text text-transparent">
                Kashyap
              </span>
            </h1>

            <p className="mt-4 text-[22px] text-green-300">Founder & Chief Executive Officer</p>

            <div className="mt-8 max-w-3xl space-y-5 text-[15px] leading-8 text-gray-400">
              <p>
                Ankur Kashyap is a strategic technology executive and enterprise transformation leader with extensive
                experience in Platform Engineering, Cloud Engineering, Enterprise Automation, and Digital Modernization.
              </p>
              <p>
                As the Founder & CEO of Horizon Relevance LLC, he leads the organization’s vision of helping enterprises
                build scalable, resilient, and future-ready technology ecosystems that accelerate innovation and
                operational excellence.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-4">
                <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/5 text-green-300 transition hover:bg-green-500/10">
                  {/* safe LinkedIn icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.1c.5-1 1.9-2.2 4-2.2 4.3 0 5.1 2.8 5.1 6.5V24h-4v-7.1c0-1.7 0-3.9-2.4-3.9s-2.8 1.9-2.8 3.8V24h-4V8z" />
                  </svg>
                </button>

                <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/5 text-green-300 transition hover:bg-green-500/10">
                  <Mail size={18} />
                </button>
              </div>

              <button
                onClick={() => setOpenProfile(true)}
                className="rounded-full border border-green-500/20 bg-green-500/10 px-8 py-4 text-sm font-medium tracking-wide text-green-300 transition duration-300 hover:bg-green-500/20"
              >
                View Full Profile →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MODAL (ANKUR) ================= */}
      {openProfile && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-2xl px-4 py-8">
          <div className="relative max-h-[95vh] w-full max-w-5xl overflow-y-auto rounded-[40px] border border-green-500/10 bg-[#07111d]/95 shadow-[0_0_120px_rgba(16,185,129,0.12)]">
            <button
              onClick={() => setOpenProfile(false)}
              className="absolute right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-green-500/20 hover:bg-green-500/10"
            >
              <X size={20} />
            </button>

            <div className="absolute left-1/2 top-[-100px] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-green-500/20 blur-[120px]" />

            <div className="relative border-b border-white/10 px-8 pb-14 pt-20 text-center">
              <div className="absolute left-1/2 top-[100px] h-[280px] w-[280px] -translate-x-1/2 rounded-full border border-green-500/20" />

              <div className="relative mx-auto h-[220px] w-[220px] overflow-hidden rounded-full border border-green-500/20 shadow-[0_0_80px_rgba(16,185,129,0.18)]">
                <Image src="/Ankur-Kashyap.jpeg" alt="Ankur Kashyap" fill className="object-cover object-center" />
              </div>

              <div className="mt-8 inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2 text-xs tracking-[0.25em] text-green-300">
                FOUNDER & CEO
              </div>

              <h2 className="mt-6 text-5xl font-semibold leading-tight text-white">
                Ankur{" "}
                <span className="bg-gradient-to-r from-green-200 via-green-400 to-green-500 bg-clip-text text-transparent">
                  Kashyap
                </span>
              </h2>

              <p className="mt-4 text-xl text-green-300">Founder & Chief Executive Officer</p>

              <div className="mt-8 flex items-center justify-center gap-4">
                <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/5 text-green-300 transition hover:bg-green-500/10">
                  <Linkedin size={18} />
                </button>
                <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/5 text-green-300 transition hover:bg-green-500/10">
                  <Twitter size={18} />
                </button>
                <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/5 text-green-300 transition hover:bg-green-500/10">
                  <Mail size={18} />
                </button>
              </div>
            </div>

            <div className="px-8 py-14 md:px-14">
              <div className="space-y-7 text-[16px] leading-9 text-gray-400">
                <p>
                  Ankur Kashyap is a strategic technology executive and enterprise transformation leader with extensive
                  experience in Platform Engineering, Cloud Engineering, Enterprise Automation, and Digital Modernization.
                </p>
                <p>
                  As the Founder & CEO of Horizon Relevance LLC, he leads the organization’s vision of helping enterprises
                  build scalable, resilient, and future-ready technology ecosystems that accelerate innovation and
                  operational excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= TEAM CARDS ================= */}
      <section className="relative px-6 pb-28">
        <div className="relative mx-auto mb-16 flex max-w-7xl items-center justify-center">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />
          <div className="absolute bg-[#020816] px-6 text-xs uppercase tracking-[0.35em] text-green-300">
            Core Team
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-3">
          {/* RISHI CARD */}
          <div className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-[#06101d]">
            <div className="relative h-[520px] w-full overflow-hidden">
              <Image
                src="/Rihsi-Sharma.jpeg"
                alt="Rishi Sharma"
                fill
                priority
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020816] via-[#020816]/40 to-transparent" />
              <div className="absolute bottom-[-80px] left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-green-500/20 blur-[90px]" />

              <div className="absolute bottom-0 left-0 z-20 w-full p-8 text-center">
                <h3 className="text-4xl font-semibold text-white">
                  Rishi{" "}
                  <span className="bg-gradient-to-r from-green-200 via-green-400 to-green-500 bg-clip-text text-transparent">
                    Sharma
                  </span>
                </h3>

                <p className="mt-3 text-sm uppercase tracking-[0.35em] text-green-300">Technical Product Manager</p>

                <button
                  onClick={() => setOpenRishiProfile(true)}
                  className="mt-7 rounded-full border border-green-500/20 bg-green-500/10 px-7 py-3 text-sm font-medium text-green-300 transition duration-300 hover:bg-green-500/20"
                >
                  View Full Profile →
                </button>
              </div>
            </div>
          </div>

          {/* EMPTY CARD 1 */}
          <div className="relative overflow-hidden rounded-[36px] border border-dashed border-white/10 bg-[#06101d]">
            <div className="flex h-[520px] flex-col items-center justify-center text-center">
              <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-green-500/20 bg-green-500/5 text-5xl text-green-400">
                +
              </div>
              <h3 className="text-4xl font-semibold text-white">Coming Soon</h3>
              <p className="mt-4 max-w-xs text-[15px] leading-8 text-gray-500">
                Additional leadership profile will appear here.
              </p>
            </div>
          </div>

          {/* EMPTY CARD 2 */}
          <div className="relative overflow-hidden rounded-[36px] border border-dashed border-white/10 bg-[#06101d]">
            <div className="flex h-[520px] flex-col items-center justify-center text-center">
              <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-green-500/20 bg-green-500/5 text-5xl text-green-400">
                +
              </div>
              <h3 className="text-4xl font-semibold text-white">Coming Soon</h3>
              <p className="mt-4 max-w-xs text-[15px] leading-8 text-gray-500">
                Additional leadership profile will appear here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MODAL (RISHI) ================= */}
      {openRishiProfile && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-2xl px-4 py-8">
          <div className="relative max-h-[95vh] w-full max-w-5xl overflow-y-auto rounded-[40px] border border-green-500/10 bg-[#07111d]/95 shadow-[0_0_120px_rgba(16,185,129,0.12)]">
            <button
              onClick={() => setOpenRishiProfile(false)}
              className="absolute right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-green-500/20 hover:bg-green-500/10"
            >
              <X size={20} />
            </button>

            <div className="absolute left-1/2 top-[-100px] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-green-500/20 blur-[120px]" />

            <div className="relative border-b border-white/10 px-8 pb-14 pt-20 text-center">
              <div className="absolute left-1/2 top-[100px] h-[280px] w-[280px] -translate-x-1/2 rounded-full border border-green-500/20" />

              <div className="relative mx-auto h-[280px] w-[280px] overflow-hidden rounded-full border border-green-500/20 shadow-[0_0_80px_rgba(16,185,129,0.18)]">
                <Image
                  src="/Rihsi-Sharma.jpeg"
                  alt="Rishi Sharma"
                  fill
                  priority
                  className="object-cover scale-[1.25] origin-top translate-y-[18px]"
                />
              </div>

              <div className="mt-8 inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2 text-xs tracking-[0.25em] text-green-300">
                TECHNICAL PRODUCT MANAGER
              </div>

              <h2 className="mt-6 text-5xl font-semibold leading-tight text-white">
                Rishi{" "}
                <span className="bg-gradient-to-r from-green-200 via-green-400 to-green-500 bg-clip-text text-transparent">
                  Sharma
                </span>
              </h2>

              <p className="mt-4 text-xl text-green-300">Cloud Engineering • DevOps • Application Security</p>
            </div>

            <div className="px-8 py-14 md:px-14">
              <div className="space-y-12">
                <div>
                  <div className="mb-8 flex items-center gap-4">
                    <div className="h-[1px] w-14 bg-green-500" />
                    <h3 className="text-sm uppercase tracking-[0.3em] text-green-300">Overview</h3>
                  </div>
                  <p className="text-[16px] leading-9 text-gray-400">{RISHI_DETAILS.overview}</p>
                </div>

                <div>
                  <div className="mb-8 flex items-center gap-4">
                    <div className="h-[1px] w-14 bg-green-500" />
                    <h3 className="text-sm uppercase tracking-[0.3em] text-green-300">Achievements</h3>
                  </div>
                  <p className="text-[16px] leading-9 text-gray-400">{RISHI_DETAILS.achievements}</p>
                </div>

                <div>
                  <div className="mb-8 flex items-center gap-4">
                    <div className="h-[1px] w-14 bg-green-500" />
                    <h3 className="text-sm uppercase tracking-[0.3em] text-green-300">Leadership & Delivery</h3>
                  </div>
                  <p className="text-[16px] leading-9 text-gray-400">{RISHI_DETAILS.leadership}</p>
                </div>

                <div>
                  <div className="mb-8 flex items-center gap-4">
                    <div className="h-[1px] w-14 bg-green-500" />
                    <h3 className="text-sm uppercase tracking-[0.3em] text-green-300">Core Strengths</h3>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {RISHI_DETAILS.strengths.map((s) => (
                      <div
                        key={s}
                        className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 text-[14px] leading-7 text-gray-300 transition duration-300 hover:border-green-500/20 hover:bg-green-500/[0.04]"
                      >
                        {s}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-8 flex items-center gap-4">
                    <div className="h-[1px] w-14 bg-green-500" />
                    <h3 className="text-sm uppercase tracking-[0.3em] text-green-300">Mission</h3>
                  </div>
                  <p className="text-[16px] leading-9 text-gray-400">{RISHI_DETAILS.mission}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

