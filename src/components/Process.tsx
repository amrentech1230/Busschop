"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We begin with a thorough site visit and conversation to understand your vision, space, and lifestyle requirements.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Our team creates detailed plans integrating the pool seamlessly with your architecture, landscape, and technical requirements.",
  },
  {
    number: "03",
    title: "Construction",
    description:
      "Expert installation using premium materials and proven techniques. We manage every detail from excavation to final finish.",
  },
  {
    number: "04",
    title: "Commissioning",
    description:
      "Complete system testing, water chemistry balancing, and a comprehensive handover — your pool is ready to enjoy.",
  },
  {
    number: "05",
    title: "Aftercare",
    description:
      "Ongoing maintenance support, seasonal service, and technical assistance ensure your pool remains in perfect condition.",
  },
];

export default function Process() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.3,
  });

  return (
    <section className="py-section bg-brand-warm relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-wide relative">
        {/* Header */}
        <div ref={headerRef} className="max-w-2xl mb-16 md:mb-20">
          <span
            className={`inline-block text-xs uppercase tracking-[0.3em] text-brand-accent mb-6 transition-all duration-700 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Our Process
          </span>
          <h2
            className={`font-display text-display-md text-brand-dark transition-all duration-900 delay-200 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            From vision <br />
            to <em className="text-brand-accent">reality</em>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-[1px] bg-brand-sand" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <ProcessStep key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProcessStepProps {
  step: (typeof steps)[number];
  index: number;
}

function ProcessStep({ step, index }: ProcessStepProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.4 });

  return (
    <div
      ref={ref}
      className={`md:grid md:grid-cols-[80px_1fr] md:gap-12 md:py-10 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Number */}
      <div className="relative flex items-start">
        <div className="relative z-10 w-16 h-16 rounded-full bg-white border border-brand-sand flex items-center justify-center shadow-sm">
          <span className="font-display text-lg text-brand-accent font-medium">
            {step.number}
          </span>
        </div>
        {/* Active dot on line */}
        <div
          className={`hidden md:block absolute left-[31px] top-[31px] w-2 h-2 rounded-full transition-all duration-500 ${
            isVisible ? "bg-brand-accent scale-100" : "bg-brand-sand scale-0"
          }`}
        />
      </div>

      {/* Content */}
      <div className="mt-4 md:mt-2">
        <h3 className="font-display text-xl md:text-2xl text-brand-dark mb-2">
          {step.title}
        </h3>
        <p className="text-body-md text-brand-slate/70 max-w-lg leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
}
