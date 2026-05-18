import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Horizon Relevance</title>
      </Head>

      <main className="relative overflow-hidden py-32 px-6 max-w-7xl mx-auto">

        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-green-500/10 blur-[150px] rounded-full"></div>

        {/* HERO */}
        <section className="relative z-10 text-center mb-28">

          <p className="text-green-400 uppercase tracking-[0.35em] text-sm mb-5">
            About Horizon Relevance
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-10">

            Engineering Intelligent
            <br />

            Cloud Experiences

          </h1>

          <p className="text-gray-400 text-xl leading-9 max-w-4xl mx-auto">

            Horizon Relevance empowers businesses through AI-driven cloud infrastructure,
            DevSecOps automation, and scalable enterprise systems designed for the future.

          </p>

        </section>

        {/* GRID */}
        <section className="grid lg:grid-cols-3 gap-8 relative z-10">

          {/* CARD 1 */}
          <div className="glass rounded-[32px] p-10 border border-green-500/10">

            <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center text-black text-2xl font-bold mb-8">

              01

            </div>

            <h2 className="text-3xl font-bold mb-6">
              Our Vision
            </h2>

            <p className="text-gray-400 leading-8">

              To become a trusted innovation partner for organizations adopting
              cloud-native infrastructure, AI systems, and DevSecOps strategies worldwide.

            </p>

          </div>

          {/* CARD 2 */}
          <div className="glass rounded-[32px] p-10 border border-green-500/10">

            <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center text-black text-2xl font-bold mb-8">

              02

            </div>

            <h2 className="text-3xl font-bold mb-6">
              Our Mission
            </h2>

            <p className="text-gray-400 leading-8">

              To build scalable platforms that reduce operational complexity,
              improve cloud efficiency, and accelerate intelligent automation.

            </p>

          </div>

          {/* CARD 3 */}
          <div className="glass rounded-[32px] p-10 border border-green-500/10">

            <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-green-600 to-green-400 flex items-center justify-center text-black text-2xl font-bold mb-8">

              03

            </div>

            <h2 className="text-3xl font-bold mb-6">
              Our Philosophy
            </h2>

            <p className="text-gray-400 leading-8">

              We believe modern infrastructure should be intelligent, secure,
              scalable, and designed around real business impact.

            </p>

          </div>

        </section>

      </main>
    </>
  );
}