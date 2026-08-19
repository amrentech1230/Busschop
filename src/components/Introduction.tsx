"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Introduction() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.2,
  });
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.3,
  });

  return (
    <section
      ref={sectionRef}
      className="py-section bg-brand-cream relative overflow-hidden"
    >
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="max-w-lg">
            <span
              className={`inline-block text-xs uppercase tracking-[0.3em] text-brand-accent mb-6 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Since Establishment
            </span>

            <h2
              className={`font-display text-display-md text-brand-dark mb-8 transition-all duration-900 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Your swimming pool, <br />
              <em className="text-brand-accent">our expertise</em>
            </h2>

            <div
              className={`space-y-5 transition-all duration-900 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <p className="text-body-md text-brand-slate/80 leading-relaxed">
                Busschop Zwembaden is your specialist for every aspect of
                swimming pool ownership. From designing and building new custom
                pools to renovating existing installations and optimizing pool
                technology.
              </p>
              <p className="text-body-md text-brand-slate/80 leading-relaxed">
                We combine decades of hands-on experience with a deep
                understanding of modern pool engineering, delivering results that
                are as technically sound as they are visually stunning.
              </p>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-brand-sand transition-all duration-900 delay-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <div>
                <p className="font-display text-3xl md:text-4xl text-brand-dark">
                  20+
                </p>
                <p className="text-xs text-brand-slate/60 mt-1 uppercase tracking-wider">
                  Years
                </p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl text-brand-dark">
                  500+
                </p>
                <p className="text-xs text-brand-slate/60 mt-1 uppercase tracking-wider">
                  Pools Built
                </p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl text-brand-dark">
                  100%
                </p>
                <p className="text-xs text-brand-slate/60 mt-1 uppercase tracking-wider">
                  Custom
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            ref={imageRef}
            className="relative aspect-[4/5] lg:aspect-[3/4] rounded-lg overflow-hidden"
          >
            <div
              className={`absolute inset-0 bg-brand-sand transition-all duration-[1.5s] ease-[cubic-bezier(0.77,0,0.175,1)] ${
                imageVisible ? "translate-y-full" : "translate-y-0"
              }`}
              style={{ zIndex: 2 }}
            />
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&auto=format&fit=crop')`,
              }}
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent" />

            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg px-5 py-3">
              <p className="text-xs uppercase tracking-wider text-brand-accent font-medium">
                Belgian Craftsmanship
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
