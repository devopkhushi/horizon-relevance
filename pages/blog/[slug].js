import Head from 'next/head';
import { useRouter } from 'next/router';

const posts = [
  {
    title: 'AI for Better Business Decisions',
    date: 'May 20, 2026',
    excerpt:
      'How AI-driven analytics help teams move from intuition to measurable outcomes. Practical steps and early wins for product teams and executives.',
    slug: 'ai-for-better-decisions',
    tags: ['AI', 'Analytics', 'Product'],
    content: [
      {
        type: 'p',
        text: 'Most teams already have data. The missing piece is turning it into decisions that are measurable, repeatable, and aligned with business outcomes.'
      },
      {
        type: 'h2',
        text: 'Start with decision quality (not dashboards)'
      },
      {
        type: 'p',
        text: 'Define the decisions you want to improve, the signals that influence them, and the impact you’ll measure. Then choose AI use-cases that directly affect those signals.'
      },
      {
        type: 'h2',
        text: 'Ship in small, prove value fast'
      },
      {
        type: 'p',
        text: 'Run short experiments: build a narrow model or workflow, measure outcome lift, and iterate. Early wins compound quickly when the feedback loop is tight.'
      }
    ]
  },
  {
    title: 'Building Reliable Cloud Data Pipelines',
    date: 'Apr 8, 2026',
    excerpt:
      'Patterns and practices we use to build scalable, observable, and maintainable data pipelines in multi-cloud environments.',
    slug: 'cloud-data-pipelines',
    tags: ['Cloud', 'Data', 'Reliability'],
    content: [
      {
        type: 'p',
        text: 'Reliability is a feature. In data pipelines, it means consistent outputs, predictable latency, and visibility into failures before they impact downstream teams.'
      },
      {
        type: 'h2',
        text: 'Design for observability'
      },
      {
        type: 'p',
        text: 'Instrument pipelines with metrics, tracing, and structured logs. Treat anomalies as first-class signals—not afterthoughts.'
      },
      {
        type: 'h2',
        text: 'Make maintenance boring'
      },
      {
        type: 'p',
        text: 'Prefer reusable patterns, clear runbooks, and versioned configurations. When pipelines are easy to reason about, they’re easier to operate.'
      }
    ]
  },
  {
    title: 'Designing Observability for Rapid Debugging',
    date: 'Mar 15, 2026',
    excerpt:
      'A concise guide to designing metrics, traces, and logs so your team can find and fix production issues faster.',
    slug: 'observability-design',
    tags: ['Observability', 'DevOps', 'Debugging'],
    content: [
      {
        type: 'p',
        text: 'Good observability reduces time-to-detection and time-to-resolution. But it only works when metrics, logs, and traces work together with clear ownership.'
      },
      {
        type: 'h2',
        text: 'Start with the questions you’ll ask'
      },
      {
        type: 'p',
        text: 'Define incident scenarios: what broke, where, and why. Then create dashboards and alerts that directly answer those questions.'
      },
      {
        type: 'h2',
        text: 'Make traces actionable'
      },
      {
        type: 'p',
        text: 'Ensure trace context flows across services, and include semantic spans that map to business workflows. Your debugging becomes faster and less guessy.'
      }
    ]
  }
];

function renderBlock(block) {
  if (block.type === 'h2') {
    return (
      <h2 key={block.text} className="text-2xl md:text-3xl font-bold mt-8 mb-3">
        {block.text}
      </h2>
    );
  }
  if (block.type === 'p') {
    return (
      <p key={block.text} className="text-gray-300 leading-8 mt-4">
        {block.text}
      </p>
    );
  }
  return null;
}

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-[#03051a] text-white px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold">Post not found</h1>
          <p className="text-gray-400 mt-3">The article you’re looking for may have been moved.</p>
        </div>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} - Horizon Relevance</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <main className="min-h-screen bg-[#03051a] text-white px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="text-emerald-300 uppercase tracking-[2px] text-sm mb-3">Blog</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">{post.title}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-gray-400 text-sm">{post.date}</span>
              <span className="text-gray-500">•</span>
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs bg-green-500/10 border border-green-500/20 text-green-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <article className="card p-8 rounded-2xl">
            <p className="text-gray-300 text-lg leading-8">{post.excerpt}</p>
            {post.content.map(renderBlock)}

            <div className="mt-10 pt-6 border-t border-green-500/10">
              <p className="text-gray-400">Want to apply these patterns to your system?</p>
              <a
                href="/contact"
                className="inline-flex mt-3 items-center gap-2 text-emerald-300 font-semibold hover:text-emerald-200"
              >
                Contact Horizon Relevance <span aria-hidden>→</span>
              </a>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}

