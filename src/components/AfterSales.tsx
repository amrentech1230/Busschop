"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2v4m0 12v4M2 12h4m12 0h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Seasonal Maintenance",
    description: "Opening and winterizing services to keep your pool protected year-round.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 9h6v6H9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 2v2m6-2v2M9 20v2m6-2v2M2 9h2m0 6H2m18-6h2m0 6h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Technical Support",
    description: "Expert troubleshooting, system optimization, and equipment upgrades.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M22 2L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M17 2h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Water Quality",
    description: "Regular testing and chemistry management for crystal-clear, healthy water.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 3c-1.5 2-4 3-7 3 0 5 2.5 10 7 13 4.5-3 7-8 7-13-3 0-5.5-1-7-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Service Contracts",
    description: "Comprehensive care packages ensuring worry-free pool ownership.",
  },
];

export default function AfterSales() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.3,
  });

  return (
    <section id="technology" className="py-section bg-brand-cream relative">
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          {/* Left - Content */}
          <div ref={headerRef} className="lg:sticky lg:top-24">
            <span
              className={`inline-block text-xs uppercase tracking-[0.3em] text-brand-accent mb-6 transition-all duration-700 ${
                headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              After-Sales & Service
            </span>
            <h2
              className={`font-display text-display-md text-brand-dark mb-6 transition-all duration-900 delay-200 ${
                headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Beyond the <br />
              <em className="text-brand-accent">build</em>
            </h2>
            <p
              className={`text-body-lg text-brand-slate/70 leading-relaxed mb-8 transition-all duration-900 delay-400 ${
                headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Our commitment doesn&apos;t end when construction is complete. We
              provide ongoing support, maintenance, and technical expertise to
              ensure your pool delivers perfect performance for years to come.
            </p>

            <a
              href="#contact"
              className={`inline-flex items-center gap-3 px-7 py-3.5 bg-brand-dark text-white text-sm font-medium rounded-full hover:bg-brand-charcoal transition-all duration-500 group delay-600 ${
                headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span>Explore Service Plans</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
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

          {/* Right - Service Cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((service, index) => (
              <ServiceItem key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ServiceItemProps {
  service: (typeof services)[number];
  index: number;
}

function ServiceItem({ service, index }: ServiceItemProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={`p-6 md:p-8 bg-white rounded-xl border border-brand-sand/50 hover:shadow-md hover:border-brand-accent/20 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-brand-accent mb-4">{service.icon}</div>
      <h3 className="font-display text-lg text-brand-dark mb-2">
        {service.title}
      </h3>
      <p className="text-sm text-brand-slate/70 leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}
