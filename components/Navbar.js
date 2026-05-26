import Link from 'next/link';
import AnimatedLogo from './AnimationLogo';

export default function Navbar() {
  return (
    <header className="fixed top-7 left-0 w-full z-[1000] px-6 py-5">
      <nav className="max-w-7xl mx-auto">
        <div className="glass rounded-full px-7 py-4 flex items-center justify-between">
          {/* LEFT */}
          <Link href="/" className="flex items-center gap-3">
            <AnimatedLogo />
          </Link>

          {/* CENTER MENU */}
          <div className="hidden lg:flex items-center gap-2">
            {[
              { label: 'About', href: '/about' },
              {
                label: 'Services',
                href: '/services',
                dropdown: [
                  { label: 'Cloud Migration', href: '/app/cloud-migration' },
                  { label: 'Cloud Cost', href: '/app/cloud-cost' },
                  { label: 'AI Monitoring', href: '/app/ai-monitoring' },
                  { label: 'Secure SDLC', href: '/app/secure-sdlc' },
                ],
              },
              {
                label: 'Products',
                href: '/products',
                dropdown: [
                  {
                    label: 'Cloud Cost Optimization',
                    href: '/app/cloud-cost',
                  },
                  {
                    label: 'Cloud Migration & Modernization',
                    href: '/app/cloud-migration',
                  },
                  {
                    label: 'AI Monitoring & Incident Response',
                    href: '/app/ai-monitoring',
                  },
                  {
                    label: 'AI Powered Secure SDLC',
                    href: '/app/secure-sdlc',
                  },
                ],
              },
              {
                label: 'Careers',
                href: '/career',
                dropdown: [
                  { label: 'Open Roles', href: '/career' },
                  { label: 'Hiring Process', href: '/career' },
                ],
              },
              {
                label: 'Blog',
                href: '/blog',
                dropdown: [{ label: 'All Posts', href: '/blog' }],
              },
              { label: 'Team', href: '/team' },
            ].map((item) => {
              const hasDropdown = Array.isArray(item.dropdown) && item.dropdown.length > 0;

              if (!hasDropdown) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="px-5 py-2 rounded-full text-sm text-gray-300 hover:text-green-300 hover:bg-green-500/10 transition duration-300"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className="px-5 py-2 rounded-full text-sm text-gray-300 hover:text-green-300 hover:bg-green-500/10 transition duration-300 whitespace-nowrap"
                  >
                    {item.label}
                  </Link>

                  {/*
                    Important:
                    - use fixed-position dropdown so it never gets clipped by navbar/parent height
                    - keep it visually aligned by measuring anchor is ideal, but here we use a big panel
                    - if you want exact x-offset, we can refine with refs.
                  */}
                  <div
                    className="pointer-events-none absolute left-0 top-full z-[2000] mt-2 hidden group-hover:block"
                  >
                    <div className="pointer-events-auto min-w-[260px] rounded-2xl bg-[#0b1022] border border-white/10 backdrop-blur-xl p-2 overflow-visible">
                      {item.dropdown.map((d) => (
                        <Link
                          key={d.label}
                          href={d.href}
                          className="block px-4 py-2 rounded-xl text-sm text-gray-300 hover:text-green-300 hover:bg-green-500/10 transition duration-200"
                        >
                          {d.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT BUTTON */}
          <Link
            href="/contact"
            className="group relative overflow-hidden px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-green-400 text-black text-sm font-medium hover:scale-105 transition duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Contact Us
              <span className="px-8 py-2 rounded-full bg-gradient-to-r from-green-700 to-green-400 text-black">
                ↗
              </span>
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

