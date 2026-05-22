"use client";

import { useEffect, useState } from "react";

export default function AnimatedLogo() {
  const words = [
    "Innovate",
    "Scale",
    "Automate",
    "Secure",
    "Transform"
  ];

  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="logo-wrapper-modern">
      
      {/* Modern Gradient Logo with HR */}
      <div className="gradient-icon-logo">
        <svg 
          width="52" 
          height="52" 
          viewBox="0 0 52 52" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="logo-svg"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#10d981", stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: "#34d399", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
            </linearGradient>
          </defs>

          {/* Outer decorative circle */}
          <circle cx="26" cy="26" r="24" fill="none" stroke="url(#logoGradient)" strokeWidth="2.5" opacity="0.7" />
          
          {/* Inner circle background */}
          <circle cx="26" cy="26" r="20" fill="rgba(0, 245, 140, 0.06)" />
          
          {/* Accent circles */}
          <circle cx="26" cy="26" r="18" fill="none" stroke="url(#logoGradient)" strokeWidth="1" opacity="0.4" />

          {/* HR Text */}
          <text 
            x="26" 
            y="32" 
            textAnchor="middle" 
            fontSize="22" 
            fontWeight="900" 
            fill="url(#logoGradient)"
            fontFamily="Arial, sans-serif"
            letterSpacing="1"
          >
            HR
          </text>
        </svg>
      </div>

      {/* Animated Word */}
      <div className="word-container-modern">
        <span
          key={currentWord}
          className="animated-word-modern"
        >
          {words[currentWord]}
        </span>
      </div>

    </div>
  );
}