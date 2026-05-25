import Link from 'next/link';

export default function TopBar() {
  return (
    <div className="w-full bg-black/70 border-b border-green-500/10">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-xs text-gray-400">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-300" />
            AI-powered Cloud Engineering • DevSecOps
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-5">
          <Link href="/services" className="hover:text-green-300 transition">Explore Services</Link>
          <Link href="/career" className="hover:text-green-300 transition">Careers</Link>

        </div>

        <div className="flex items-center gap-3">
          <a href="mailto:info@horizonrelevance.com" className="hover:text-green-300 transition">
            info@horizonrelevance.com
          </a>
        </div>
      </div>
    </div>
  );
}

