import Link from 'next/link';
import AnimatedLogo from './AnimationLogo';
import { useState } from 'react';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const menuItems = [
    { label: 'About', href: '/about' },

    {
      label: 'Services',
      dropdown: [
        {
          label: 'AI Monitoring & Incident Response',
          href: '/app/ai-monitoring',
        },
        {
          label: 'AI Powered Secure SDLC',
          href: '/app/secure-sdlc',
        },
        {
          label: 'Cloud Cost Optimization',
          href: '/app/cloud-cost',
        },
        {
          label: 'Cloud Migration & Modernization',
          href: '/app/cloud-migration',
        },
      ],
    },

    {
      label: 'Careers',
      href: '/career',
      dropdown: [
        { label: 'Open Roles', href: '/career' },
        // { label: 'Hiring Process', href: '/career' },
      ],
    },

    {
      label: 'Blog',
      href: '/blog',
      dropdown: [{ label: 'All Posts', href: '/blog' }],
    },

    { label: 'Team', href: '/team' },
  ];

  return (
    <header className="fixed top-7 left-0 w-full z-[9999] px-6 py-5 ">

      <nav className="max-w-7xl mx-auto overflow-visible">

        {/* IMPORTANT FIX */}
        <div className="glass overflow-visible rounded-full px-7 py-4 flex items-center justify-between relative">

          {/* LEFT */}
          <Link href="/" className="flex items-center gap-3">
            <AnimatedLogo />
          </Link>

          {/* CENTER MENU */}
          <div className="hidden lg:flex items-center gap-2 relative overflow-visible">

            {menuItems.map((item) => {
              const hasDropdown =
                Array.isArray(item.dropdown) &&
                item.dropdown.length > 0;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >

                  {/* NORMAL LINK */}
                  {!hasDropdown ? (
                    <Link
                      href={item.href}
                      className="px-5 py-2 rounded-full text-sm text-gray-300 hover:text-green-300 hover:bg-green-500/10 transition duration-300 whitespace-nowrap flex items-center gap-1"
                    >
                      {item.label}
                    </Link>
                  ) : (

                    /* DROPDOWN BUTTON */
                    <button
                      type="button"
                      className="px-5 py-2 rounded-full text-sm text-gray-300 hover:text-green-300 hover:bg-green-500/10 transition duration-300 whitespace-nowrap flex items-center gap-1"
                    >
                      {item.label}

                      <span className="ml-1 text-green-400 text-[10px]">
                        ▼
                      </span>
                    </button>
                  )}

                  {/* DROPDOWN */}
                  {hasDropdown && openMenu === item.label && (

                    <div className="absolute left-0 top-full pt-4 z-[99999]">

                      <div className="w-[520px] rounded-3xl border border-white/10 bg-[#0b1022]/95 backdrop-blur-2xl p-6 shadow-[0_20px_80px_rgba(0,0,0,0.5)]">

                        <div className="grid grid-cols-2 gap-4">

                          {item.dropdown.map((d) => (
                            <Link
                              key={d.label}
                              href={d.href}
                              className="group block rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition duration-300 hover:border-green-400/30 hover:bg-green-500/10"
                            >
                              <div className="flex items-start justify-between gap-3">

                                <div>
                                  <h4 className="text-sm font-medium text-white group-hover:text-green-300 transition">
                                    {d.label}
                                  </h4>

                                  <p className="mt-1 text-xs text-gray-400">
                                    Explore solution
                                  </p>
                                </div>

                                <span className="text-lg text-green-400">
                                  ↗
                                </span>

                              </div>
                            </Link>
                          ))}

                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT BUTTON */}
          <Link
            href="/contact"
            className="group relative rounded-full bg-gradient-to-r from-green-600 to-green-400 px-6 py-3 text-sm font-medium text-black transition duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">

              Contact Us

              <span className="rounded-full bg-gradient-to-r from-green-700 to-green-400 px-8 py-2 text-black">
                ↗
              </span>

            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}