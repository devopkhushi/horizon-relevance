import { useEffect, useRef, useState } from "react";

export default function AnimatedStat({ value, suffix, label }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setDisplay(value);
      return;
    }

    let started = false;
    let rafId;
    const duration = 900; // ms
    const start = performance.now();

    const animate = (t) => {
      const p = Math.min(1, (t - start) / duration);

      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      const current = value * eased;

      setDisplay(current);

      if (p < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;
        if (started) return;
        started = true;
        rafId = requestAnimationFrame(animate);
        obs.disconnect();
      },
      { threshold: 0.25 }
    );

    obs.observe(el);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      obs.disconnect();
    };
  }, [value]);

  const formatted = Number.isInteger(value) ? Math.round(display) : display.toFixed(1);

  return (
    <div
      ref={ref}
      className="glass rounded-3xl p-6 border border-white/10 transition-transform duration-300 hover:-translate-y-2"
    >
      <div className="text-green-300 font-black text-3xl leading-none">
        {formatted}
        {suffix}
      </div>
      <div className="text-white/90 font-semibold mt-3 leading-6">{label}</div>
    </div>
  );
}

