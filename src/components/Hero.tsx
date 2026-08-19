"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] max-h-[1100px] overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 scale-110"
        style={{
          transform: `scale(1.1) translateY(${scrollY * 0.15}px)`,
        }}
      >
        {/* Dark architectural pool image */}
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2s] ease-out ${
            loaded ? "scale-100" : "scale-110"
          }`}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=1920&q=80&auto=format&fit=crop')`,
          }}
        />
        {/* Fallback gradient */}
        <div className="absolute inset-0 bg-brand-dark/40" />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full container-wide flex flex-col justify-end pb-16 md:pb-24">
        {/* Decorative line */}
        <div
          className={`absolute left-6 md:left-16 top-1/4 w-[1px] h-32 bg-white/20 transition-all duration-[1.5s] delay-[1s] ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        />

        {/* Main Headline */}
        <div className="max-w-4xl">
          <div className="overflow-hidden mb-4">
            <p
              className={`text-sm md:text-base uppercase tracking-[0.3em] text-white/60 font-light transition-all duration-1000 delay-300 ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
              }`}
            >
              Established Pool Specialists — Belgium
            </p>
          </div>

          <div className="overflow-hidden">
            <h1
              className={`font-display text-display-xl text-white font-medium transition-all duration-[1.2s] delay-500 ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
              }`}
            >
              Crafting
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1
              className={`font-display text-display-xl text-white font-medium transition-all duration-[1.2s] delay-700 ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
              }`}
            >
              <em className="text-white/80">Exceptional</em> Pools
            </h1>
          </div>

          <div className="overflow-hidden mt-6 md:mt-8">
            <p
              className={`text-body-lg text-white/70 max-w-xl font-light leading-relaxed transition-all duration-1000 delay-[1s] ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
              }`}
            >
              Where architectural vision meets master craftsmanship. 
              Custom-built swimming pools designed for the way you live.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mt-8 md:mt-10 transition-all duration-1000 delay-[1.2s] ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-dark text-sm font-medium rounded-full hover:bg-brand-cream transition-all duration-500"
            >
              <span>View Our Work</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M3 8h10m0 0L9 4m4 4l-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 text-white text-sm font-medium rounded-full border border-white/30 hover:bg-white/10 transition-all duration-500"
            >
              <span>Start Your Project</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute right-6 md:right-16 bottom-16 md:bottom-24 flex flex-col items-center gap-3 transition-all duration-1000 delay-[1.5s] ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 rotate-90 origin-center translate-x-4 mb-4">
            Scroll
          </span>
          <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white/60 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
