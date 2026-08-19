"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Testimonial() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="relative py-section overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80&auto=format&fit=crop')`,
        }}
      />
      <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-[2px]" />

      <div className="container-narrow relative text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Quote mark */}
          <div className="mb-8">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              className="mx-auto text-brand-accent-light/40"
            >
              <path
                d="M14 24c-4.418 0-8-3.582-8-8s3.582-8 8-8c5.523 0 10 4.477 10 10 0 8.837-7.163 16-16 16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M38 24c-4.418 0-8-3.582-8-8s3.582-8 8-8c5.523 0 10 4.477 10 10 0 8.837-7.163 16-16 16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <blockquote
            className={`font-display text-display-sm text-white/90 italic max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            The team at Busschop didn&apos;t just build us a pool — they created an
            outdoor living space that transformed how our family uses the garden.
            The attention to detail was extraordinary.
          </blockquote>

          <div
            className={`mt-10 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-white/80 font-medium">Private Residence</p>
            <p className="text-white/40 text-sm mt-1">West-Vlaanderen</p>
          </div>
        </div>
      </div>
    </section>
  );
}
