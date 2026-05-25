import Link from 'next/link';
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaEnvelope,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-green-500/10 mt-20">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-green-500/10 blur-[140px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">




        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* BRAND */}
          <div>

            <div className="flex items-center gap-3 mb-6">

              <img
                src="/logo.png"
                alt="Horizon Relevance"
                className="h-10 w-auto"
              />

              <div>

                <h2 className="text-xl font-bold">
                  Horizon Relevance
                </h2>

                <p className="text-green-400 text-xs tracking-[0.3em] uppercase">
                  AI Infrastructure
                </p>

              </div>

            </div>

            <p className="text-gray-400 leading-8">
              Horizon Relevance empowers businesses through intelligent cloud systems,
              AI automation, and enterprise solutions.
            </p>


            {/* SOCIALS */}
            <div className="flex gap-4 mt-8">

              {[
                FaLinkedin,
                FaTwitter,
                FaGithub,
                FaEnvelope,
              ].map((Icon, index) => (
                <div
                  key={index}
                  className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-gray-300 hover:text-green-300 hover:-translate-y-1 transition duration-300 cursor-pointer"
                >
                  <Icon />
                </div>
              ))}

            </div>

          </div>

          {/* COMPANY */}
          <div>

            <h3 className="text-lg font-semibold mb-6">
              Company
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <Link href="/about" className="hover:text-green-300">
                About
              </Link>

              <Link href="/services" className="hover:text-green-300">
                Services
              </Link>

              <Link href="/products" className="hover:text-green-300">
                Products
              </Link>

              <Link href="/contact" className="hover:text-green-300">
                Contact
              </Link>

            </div>

          </div>

          {/* SOLUTIONS */}
          <div>

            <h3 className="text-lg font-semibold mb-6">
              Solutions
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <p>Cloud Infrastructure</p>
              <p>AI Automation</p>
              <p>DevSecOps</p>
              <p>Serverless Systems</p>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-lg font-semibold mb-6">
              Contact
            </h3>

            <div className="flex flex-col gap-4 text-gray-400 leading-8">

              <p>Woodbridge, NJ</p>

              <p>info@horizonrelevance.com</p>

              <p>
                Available for global enterprise partnerships and cloud consulting.
              </p>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-green-500/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} Horizon Relevance. All rights reserved.
          </p>

          <div className="flex gap-6">

            <Link href="/privacy-policy" className="hover:text-green-300">
              Privacy Policy
            </Link>

            <Link href="/terms-of-use" className="hover:text-green-300">
              Terms of Use
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}