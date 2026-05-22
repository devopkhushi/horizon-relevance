import Navbar from '../components/Navbar';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in DevSecOps",
    excerpt: "Explore how artificial intelligence is revolutionizing security operations and development workflows.",
    category: "AI & DevSecOps",
    date: "May 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Cloud-Native Architecture Best Practices",
    excerpt: "Learn the essential principles for building scalable and resilient cloud-native applications.",
    category: "Cloud Engineering",
    date: "May 10, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Intelligent Automation: Beyond Scripts",
    excerpt: "Discover how AI-powered automation is transforming business operations and reducing manual overhead.",
    category: "Automation",
    date: "May 5, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Securing the Cloud: A Complete Guide",
    excerpt: "Comprehensive strategies for implementing robust security measures in cloud environments.",
    category: "Security",
    date: "April 28, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop"
  },
  {
    id: 5,
    title: "Microservices vs Monolith: Making the Right Choice",
    excerpt: "A detailed comparison to help you decide between microservices and monolithic architecture.",
    category: "Architecture",
    date: "April 20, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop"
  },
  {
    id: 6,
    title: "Building AI-Powered Enterprise Solutions",
    excerpt: "How to integrate artificial intelligence into enterprise applications for maximum impact.",
    category: "Enterprise",
    date: "April 15, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop"
  }
];

export default function Blog() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#020617] text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 px-6">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[200px] rounded-full" />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
              Insights & Innovations
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest trends in AI, DevSecOps, Cloud Engineering, and Intelligent Automation from our expert team.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group glass rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <button className="flex items-center gap-2 text-emerald-400 font-semibold text-sm group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="max-w-5xl mx-auto px-6 pb-24">
          <div className="glass rounded-3xl p-10 border border-white/10 bg-gradient-to-r from-emerald-500/5 to-transparent">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Get the latest insights on AI, DevSecOps, and Cloud Engineering delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full bg-[#0c1629] border border-white/10 text-white placeholder-gray-500 focus:border-emerald-400 outline-none transition"
                />
                <button className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 text-slate-900 font-bold hover:shadow-lg hover:shadow-emerald-500/30 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
