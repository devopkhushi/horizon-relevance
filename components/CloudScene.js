"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function CloudScene() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;
    setPosition({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative flex items-center justify-center w-full h-full"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute w-[650px] h-[650px] rounded-full bg-cyan-500/10 blur-[140px]"></div>

      {/* CLOUD IMAGE */}
      <motion.img
        src="/cloud-ai.png"
        alt="Cloud"
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: "spring",
          stiffness: 60,
        }}
        className="relative z-10 w-[700px] drop-shadow-[0_0_80px_rgba(34,211,238,0.45)]"
      />
    </div>
  );
}
