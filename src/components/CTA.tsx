"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

export default function CTA() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.3 });

  return (
    <section ref={ref} id="contact" className="py-section bg-brand-dark relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-water/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container-narrow relative text-center">
        <span
          className={`inline-block text-xs uppercase tracking-[0.3em] text-brand-accent-light mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Start Your Project
        </span>

        <h2
          className={`font-display text-display-lg text-white mb-6 transition-all duration-900 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Ready to create your <br />
          <em className="text-brand-sand">perfect pool?</em>
        </h2>

        <p
          className={`text-body-lg text-white/60 max-w-xl mx-auto mb-10 leading-relaxed transition-all duration-900 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Every exceptional pool begins with a conversation. Tell us about your
          vision, and we&apos;ll show you what&apos;s possible.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-900 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="mailto:info@busschopzwembaden.be"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-dark text-sm font-medium rounded-full hover:bg-brand-cream transition-all duration-500"
          >
            <span>Request a Consultation</span>
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
            href="tel:+32000000000"
            className="inline-flex items-center gap-3 px-8 py-4 text-white text-sm font-medium rounded-full border border-white/20 hover:bg-white/5 transition-all duration-500"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6.5 3.5L5 2 2.5 4.5c0 5 4 9 9 9L14 11l-1.5-1.5-2.5 1.5-4-4 1.5-2.5z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            <span>Call Us Directly</span>
          </a>
        </div>

        {/* Trust indicators */}
        <div
          className={`mt-16 pt-10 border-t border-white/10 flex flex-wrap justify-center gap-8 md:gap-12 transition-all duration-900 delay-800 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center">
            <p className="text-2xl font-display text-white">20+</p>
            <p className="text-xs text-white/40 mt-1">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-display text-white">Belgium</p>
            <p className="text-xs text-white/40 mt-1">Based & Operating</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-display text-white">Full Service</p>
            <p className="text-xs text-white/40 mt-1">Build to Maintain</p>
          </div>
        </div>
      </div>
    </section>
  );
}
