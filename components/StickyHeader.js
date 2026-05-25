'use client';

import { useEffect, useState } from 'react';
import TopBar from './TopBar';
import Navbar from './Navbar';

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed left-0 top-0 w-full z-50 transition-all duration-300 ease-out ${
        scrolled
          ? 'backdrop-blur-xl'
          : 'backdrop-blur-none'
      }`}
      aria-hidden={false}
    >
      <div
        className={`transition-all duration-300 ease-out ${
          scrolled
            ? 'bg-black/70 border-b border-green-500/10'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <TopBar />
        <Navbar />
      </div>
    </div>
  );
}

