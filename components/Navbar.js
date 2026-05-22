import Link from 'next/link';
import AnimatedLogo from './AnimationLogo';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-5">

      <nav className="max-w-7xl mx-auto">

        <div className="glass rounded-full px-7 py-4 flex items-center justify-between">

          {/* LEFT */}
          <Link href="/" className="flex items-center gap-3">

            <AnimatedLogo />

          </Link>

          {/* CENTER MENU */}
          <div className="hidden lg:flex items-center gap-2">

            {[
              ['About', '/about'],
              ['Services', '/services'],
              ['Products', '/products'],
              ['Careers', '/career'],
              ['Blog', '/blog'],
              ['Team', '/team'],
              ['Contact', '/contact'],
            ].map(([title, url]) => (
              <Link
                key={title}
                href={url}
                className="px-5 py-2 rounded-full text-sm text-gray-300 hover:text-green-300 hover:bg-green-500/10 transition duration-300"
              >
                {title}
              </Link>
            ))}

          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={() =>
              window.Calendly?.initPopupWidget({
                url: 'https://calendly.com/kashyap-ankur0114/30min',
              })
            }
            className="group relative overflow-hidden px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-green-400 text-black text-sm font-medium hover:scale-105 transition duration-300"
          >

            <span className="relative z-10 flex items-center gap-2">
              Book Demo

              <span className="px-8 py-2 rounded-full bg-gradient-to-r from-green-700 to-green-400 text-black">
                ↗
              </span>

            </span>

          </button>

        </div>

      </nav>
    </header>
  );
}
