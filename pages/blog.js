import Head from 'next/head';
import Link from 'next/link';

const posts = [
  {
    title: 'AI for Better Business Decisions',
    date: 'May 20, 2026',
    excerpt:
      'How AI-driven analytics help teams move from intuition to measurable outcomes. Practical steps and early wins for product teams and executives.',
    slug: 'ai-for-better-decisions',
    tags: ['AI', 'Analytics', 'Product'],
  },
  {
    title: 'Building Reliable Cloud Data Pipelines',
    date: 'Apr 8, 2026',
    excerpt:
      'Patterns and practices we use to build scalable, observable, and maintainable data pipelines in multi-cloud environments.',
    slug: 'cloud-data-pipelines',
    tags: ['Cloud', 'Data', 'Reliability'],
  },
  {
    title: 'Designing Observability for Rapid Debugging',
    date: 'Mar 15, 2026',
    excerpt:
      'A concise guide to designing metrics, traces, and logs so your team can find and fix production issues faster.',
    slug: 'observability-design',
    tags: ['Observability', 'DevOps', 'Debugging'],
  },
];

export default function Blog() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <Head>
        <title>Blog - Horizon Relevance</title>
        <meta
          name="description"
          content="Insights on AI, cloud, and product strategy from Horizon Relevance."
        />
      </Head>

      <main className="min-h-screen bg-[#03051a] text-white px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <header className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-emerald-300 uppercase tracking-[2px] text-sm mb-3">
              Insights
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              From our team — thinking on AI, cloud and product
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Short reads and practical guides about building and shipping
              data-first products.
            </p>
          </header>

          {/* Featured */}
          <section className="mb-10">
            <div className="card p-7 md:p-10 rounded-2xl overflow-hidden relative">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-green-500/10 blur-3xl rounded-full pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

              <div className="relative">
                <p className="text-emerald-300 uppercase tracking-[2px] text-sm mb-3">
                  Featured
                </p>

                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-gray-400 text-sm">{featured.date}</span>
                  <span className="text-gray-500">•</span>
                  {featured.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs bg-green-500/10 border border-green-500/20 text-green-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-3">
                  {featured.title}
                </h2>

                <p className="text-gray-300 text-lg leading-8 max-w-3xl">
                  {featured.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap gap-3 items-center">
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="primary-btn px-7 py-3 inline-flex items-center gap-2 font-semibold"
                  >
                    Read featured article <span aria-hidden>→</span>
                  </Link>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-emerald-300 font-semibold hover:text-emerald-200"
                  >
                    Discuss your project <span aria-hidden>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Categories UI (visual, static) */}
          <section className="mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {['All', 'AI', 'Cloud', 'Data', 'Observability', 'DevOps'].map(
                (cat) => (
                  <button
                    key={cat}
                    className="px-5 py-2 rounded-full text-sm bg-white/5 border border-green-500/15 text-gray-200 hover:border-green-400/30 hover:text-green-200 transition"
                    type="button"
                    aria-label={`Filter ${cat}`}
                  >
                    {cat}
                  </button>
                )
              )}
            </div>
          </section>

          {/* Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rest.map((p) => (
              <article key={p.slug} className="card p-6 rounded-2xl">
                <div className="mb-3 text-sm text-gray-400">{p.date}</div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-[11px] bg-green-500/10 border border-green-500/20 text-green-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h2 className="text-2xl font-bold mb-2">{p.title}</h2>
                <p className="text-gray-300 mb-4">{p.excerpt}</p>

                <div className="flex items-center justify-between">
                  <Link
                    href={`/blog/${p.slug}`}
                    className="text-emerald-300 font-semibold inline-flex items-center gap-2 hover:text-emerald-200"
                  >
                    Read article <span aria-hidden>→</span>
                  </Link>

                  <span className="text-gray-500 text-sm">View</span>
                </div>
              </article>
            ))}
          </section>

          {/* Bottom CTA */}
          <section className="mt-12">
            <div className="card p-7 md:p-10 rounded-2xl">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-emerald-300 uppercase tracking-[2px] text-sm mb-3">
                    Stay in the loop
                  </p>
                  <h3 className="text-3xl font-extrabold mb-3">
                    Get practical AI + cloud playbooks.
                  </h3>
                  <p className="text-gray-400 leading-8 max-w-xl">
                    Monthly insights from our team—reliability patterns, observability
                    practices, and shipping strategies.
                  </p>
                </div>

                <div className="rounded-2xl glass p-6">
                  <label className="block text-sm text-gray-300 mb-2">
                    Email
                  </label>
                  <div className="flex gap-3">
                    <input
                      className="flex-1 px-4 py-3 rounded-full bg-white/5 border border-green-500/15 text-white placeholder:text-gray-500 outline-none"
                      placeholder="you@company.com"
                      type="email"
                    />
                    <button
                      type="button"
                      className="primary-btn px-6 py-3 font-semibold whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className="text-gray-500 text-xs mt-3">
                    Demo UI only (no backend).
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

