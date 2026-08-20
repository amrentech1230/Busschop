"use client";

import { useEffect, useState } from "react";
import heroBg from "../assets/image/hero-bg.avif";

const stats = [
  { value: "350+", label: "Pools Realized" },
  { value: "25", label: "Years Experience" },
  { value: "100%", label: "Custom Built" },
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = (delay: string, extra = "") =>
    `transition-all duration-[1.2s] ${delay} ${extra} ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;

  return (
    <section className="relative h-screen min-h-[700px] max-h-[1100px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.18}px) scale(1.12)` }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${heroBg.src}')`,  
          }}
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
      {/* Vignette */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)" }} />

      {/* Vertical label — left edge */}
      <div
        className={`absolute left-6 md:left-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 transition-all duration-[1.5s] delay-[1.8s] ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className="w-[1px] h-20 bg-white/20" />
        <span
          className="text-[9px] uppercase tracking-[0.35em] text-white/40 font-light"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Busschop Zwembaden
        </span>
        <div className="w-[1px] h-20 bg-white/20" />
      </div>

      {/* Main content */}
      <div className="relative h-full container-wide flex flex-col justify-center pb-32 md:pb-40 pl-16 md:pl-24">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <div className={`flex items-center gap-4 mb-6 ${t("delay-300")}`}>
            <div className="h-[1px] w-10 bg-[#8b7355]" />
            <p className="text-[11px] uppercase tracking-[0.4em] text-white/50 font-light">
              Belgian Pool Specialists · Est. 1999
            </p>
          </div>

          {/* Headline */}
          <div className="overflow-hidden mb-1">
            <h1 className={`font-display text-display-xl text-white font-medium leading-none ${t("delay-500")}`}>
              Crafting
            </h1>
          </div>
          <div className="overflow-hidden mb-1">
            <h1 className={`font-display text-display-xl font-medium leading-none ${t("delay-[650ms]")}`}>
              <em className="not-italic" style={{ color: "#8b7355" }}>Exceptional</em>
              <span className="text-white"> Pools</span>
            </h1>
          </div>
          <div className="overflow-hidden mb-8">
            <h1 className={`font-display text-display-xl text-white/30 font-medium leading-none ${t("delay-[800ms]")}`}>
              For Life.
            </h1>
          </div>

          {/* Body */}
          <p className={`text-body-lg text-white/60 max-w-lg font-light leading-relaxed mb-10 ${t("delay-[1000ms]")}`}>
            Where architectural vision meets master craftsmanship.
            Custom-built swimming pools designed for the way you live.
          </p>

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row gap-4 ${t("delay-[1200ms]")}`}>
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium rounded-full transition-all duration-500"
              style={{ background: "#8b7355", color: "#fff" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#7a6347")}
              onMouseLeave={e => (e.currentTarget.style.background = "#8b7355")}
            >
              <span>View Our Work</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 text-white text-sm font-medium rounded-full border border-white/25 hover:bg-white/10 transition-all duration-500"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className={`absolute bottom-0 left-0 right-0 transition-all duration-[1.2s] delay-[1.6s] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <div className="container-wide">
          <div
            className="flex divide-x divide-white/10 border-t border-white/10"
            style={{ background: "rgba(10,15,20,0.7)", backdropFilter: "blur(12px)" }}
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="flex-1 px-6 py-5 flex flex-col gap-1">
                <span className="font-display text-2xl md:text-3xl font-medium" style={{ color: "#8b7355" }}>
                  {value}
                </span>
                <span className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-light">
                  {label}
                </span>
              </div>
            ))}
            {/* Scroll cue */}
            <div className="hidden md:flex items-center justify-center px-10 gap-3">
              <div className="flex flex-col items-center gap-2">
                <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
                <div className="w-[1px] h-8 bg-white/20 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full bg-white/60 animate-bounce" style={{ height: "50%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
