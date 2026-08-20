"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

const services = [
  {
    id: undefined,
    number: "01",
    title: "New Swimming Pools",
    subtitle: "Custom Design & Build",
    description:
      "From initial concept to the final tile, we design and construct bespoke swimming pools that integrate seamlessly with your architecture and landscape. Every pool is engineered to your exact specifications.",
    features: ["Architectural integration", "Custom dimensions", "Premium finishes", "Complete project management"],
    image:
      "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=700&q=80&auto=format&fit=crop",
  },
  {
    id: "renovation",
    number: "02",
    title: "Pool Renovation",
    subtitle: "Restore & Transform",
    description:
      "Breathe new life into your existing pool. Whether it's updating the finish, modernizing the technology, or a complete structural renovation — we transform outdated pools into contemporary masterpieces.",
    features: ["Structural assessment", "Liner replacement", "System upgrades", "Aesthetic refresh"],
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=700&q=80&auto=format&fit=crop",
  },
  {
    id: "technology",
    number: "03",
    title: "Pool Technology",
    subtitle: "Engineering Excellence",
    description:
      "State-of-the-art filtration, heating, automation, and water treatment systems. We optimize your pool's technical infrastructure for efficiency, longevity, and crystal-clear water quality.",
    features: ["Smart automation", "Energy-efficient heating", "Advanced filtration", "Water chemistry"],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-section bg-brand-dark relative overflow-hidden">
      {/* Section Header */}
      <div className="container-wide mb-16 md:mb-24">
        <ServiceHeader />
      </div>

      {/* Service Cards */}
      <div className="container-wide space-y-24 md:space-y-32">
        {services.map((service, index) => (
          <ServiceCard key={service.number} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}

function ServiceHeader() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });

  return (
    <div ref={ref} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
      <div>
        <span
          className={`inline-block text-xs uppercase tracking-[0.3em] text-brand-accent-light mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Our Expertise
        </span>
        <h2
          className={`font-display text-display-md text-white transition-all duration-900 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Three pillars of <br />
          <em className="text-brand-sand">pool mastery</em>
        </h2>
      </div>
      <p
        className={`max-w-md text-body-md text-white/50 transition-all duration-900 delay-400 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        A complete solution — from the first sketch to years of carefree
        enjoyment. Every detail considered, every system optimized.
      </p>
    </div>
  );
}

interface ServiceCardProps {
  service: (typeof services)[number];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });
  const isReversed = index % 2 === 1;

  return (
    <div
      id={service.id}
      ref={ref}
      className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
        isReversed ? "lg:direction-rtl" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`relative aspect-[4/3] rounded-lg overflow-hidden ${
          isReversed ? "lg:order-2" : ""
        }`}
      >
        <div
          className={`absolute inset-0 bg-brand-charcoal transition-all duration-[1.5s] ease-[cubic-bezier(0.77,0,0.175,1)] z-10 ${
            isVisible ? "translate-x-full" : "translate-x-0"
          }`}
        />
        <div
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-[2s] ${
            isVisible ? "scale-100" : "scale-110"
          }`}
          style={{ backgroundImage: `url('${service.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Number overlay */}
        <div className="absolute top-6 left-6 z-20">
          <span className="font-display text-6xl md:text-7xl text-white/10 font-bold">
            {service.number}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`${isReversed ? "lg:order-1 lg:text-right" : ""}`}>
        <span
          className={`inline-block text-xs uppercase tracking-[0.2em] text-brand-accent-light mb-3 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {service.subtitle}
        </span>

        <h3
          className={`font-display text-display-sm text-white mb-5 transition-all duration-900 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {service.title}
        </h3>

        <p
          className={`text-body-md text-white/60 leading-relaxed mb-8 transition-all duration-900 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {service.description}
        </p>

        <ul
          className={`space-y-3 transition-all duration-900 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {service.features.map((feature) => (
            <li
              key={feature}
              className={`flex items-center gap-3 text-sm text-white/50 ${
                isReversed ? "lg:justify-end" : ""
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-light flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={`inline-flex items-center gap-2 mt-8 text-sm text-brand-accent-light hover:text-white transition-all duration-500 group delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } ${isReversed ? "lg:flex-row-reverse" : ""}`}
        >
          <span>Learn more</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className={`transition-transform duration-300 ${
              isReversed ? "group-hover:-translate-x-1 rotate-180" : "group-hover:translate-x-1"
            }`}
          >
            <path
              d="M1 7h12m0 0L8 2.5M13 7l-5 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
