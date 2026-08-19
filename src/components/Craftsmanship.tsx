"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

const values = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 2L2 9l14 7 14-7-14-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M2 23l14 7 14-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 16l14 7 14-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Complete Ownership",
    description:
      "We manage your entire project from initial design through construction to commissioning. One point of contact, one responsibility.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 8v8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Built to Last",
    description:
      "Premium materials, proven engineering, and meticulous attention to detail ensure your pool provides decades of enjoyment.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 28h24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6 28V12l10-8 10 8v16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M12 28v-8h8v8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Architectural Integration",
    description:
      "Every pool we build is designed to complement your home's architecture, landscape, and lifestyle — never an afterthought.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 16c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 16c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="16" cy="16" r="2" fill="currentColor"/>
        <path d="M16 18v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Technical Excellence",
    description:
      "Advanced filtration, smart automation, and energy-efficient systems — we stay at the forefront of pool technology.",
  },
];

export default function Craftsmanship() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.3,
  });

  return (
    <section id="about" className="py-section bg-brand-cream relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-sand/30 to-transparent pointer-events-none" />

      <div className="container-wide relative">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span
            className={`inline-block text-xs uppercase tracking-[0.3em] text-brand-accent mb-6 transition-all duration-700 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Why Busschop
          </span>
          <h2
            className={`font-display text-display-md text-brand-dark mb-6 transition-all duration-900 delay-200 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Craftsmanship meets <br />
            <em className="text-brand-accent">engineering precision</em>
          </h2>
          <p
            className={`text-body-lg text-brand-slate/70 transition-all duration-900 delay-400 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            We believe a swimming pool should be more than a hole with water.
            It&apos;s an extension of your living space — designed with the same
            care and intention as your home itself.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <ValueCard key={value.title} value={value} index={index} />
          ))}
        </div>

        {/* Bottom Statement */}
        <BottomStatement />
      </div>
    </section>
  );
}

interface ValueCardProps {
  value: (typeof values)[number];
  index: number;
}

function ValueCard({ value, index }: ValueCardProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={`group p-8 md:p-10 rounded-xl bg-white border border-brand-sand/50 hover:border-brand-accent/20 hover:shadow-lg transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="text-brand-accent mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
        {value.icon}
      </div>
      <h3 className="font-display text-xl text-brand-dark mb-3">
        {value.title}
      </h3>
      <p className="text-body-md text-brand-slate/70 leading-relaxed">
        {value.description}
      </p>
    </div>
  );
}

function BottomStatement() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={`mt-16 md:mt-24 pt-16 border-t border-brand-sand text-center transition-all duration-900 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <blockquote className="font-display text-display-sm text-brand-dark italic max-w-2xl mx-auto">
        &ldquo;A pool is not just built — it is composed, like architecture
        itself.&rdquo;
      </blockquote>
      <p className="mt-6 text-sm text-brand-slate/60 uppercase tracking-wider">
        — The Busschop Philosophy
      </p>
    </div>
  );
}
