import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaMapMarkerAlt } from 'react-icons/fa';

export default function TopBar() {
  return (
    <div className="w-full bg-black/70 border-b border-green-500/10">
      <div className="max-w-7xl mx-auto px-6 py-2 relative flex items-center justify-between text-xs text-gray-400">
        {/* LEFT: phone + location */}
        <div className="flex items-center gap-3 ml-[-44px]">
          <img
            src="/Logo-2.png"
            alt="Horizon Relevance"
            className="h-6 w-auto"
          />

          <a
            href="tel:+19086562114"
            className="flex items-center gap-2 hover:text-green-300 transition"
          >
            <FaPhoneAlt className="text-green-300" />
            <span>+1 (908) 656-2114</span>
          </a>

          {/* ADDRESS: top-left corner */}
          <div className="hidden md:flex items-center gap-3 text-gray-400">
            <FaMapMarkerAlt className="text-green-300" />
            <span className="leading-4 whitespace-nowrap">
              16 Homes Park Avenue, Iselin, New Jersey 08830 USA
            </span>
          </div>
        </div>


        {/* EMAIL: move to left side */}
        <div className="flex items-center gap-3">

          <a
            href="mailto:info@horizonrelevance.com"
            className="flex items-left gap-2 hover:text-green-300 transition"
          >
            <FaEnvelope className="text-green-300" />
            <span>info@horizonrelevance.com</span>
          </a>
        </div>

        {/* RIGHT: LinkedIn bottom-right corner */}
        <div className="flex items-center justify-end">
          <Link
            href="https://www.linkedin.com/company/horizonrelevance/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-green-300 transition"
          >
            <FaLinkedinIn className="text-green-300" />
            <span>LinkedIn</span>
          </Link>
        </div>
      </div>
    </div>
  );
}



