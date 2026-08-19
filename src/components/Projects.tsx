"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Infinity Edge Residence",
    category: "New Build",
    location: "West-Vlaanderen",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&auto=format&fit=crop",
    size: "large",
  },
  {
    id: 2,
    title: "Garden Oasis Revival",
    category: "Renovation",
    location: "Oost-Vlaanderen",
    image:
      "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=600&q=80&auto=format&fit=crop",
    size: "small",
  },
  {
    id: 3,
    title: "Contemporary Lap Pool",
    category: "New Build",
    location: "Antwerpen",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80&auto=format&fit=crop",
    size: "small",
  },
  {
    id: 4,
    title: "Indoor Wellness Space",
    category: "Technology",
    location: "Vlaams-Brabant",
    image:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80&auto=format&fit=crop",
    size: "large",
  },
  {
    id: 5,
    title: "Architectural Integration",
    category: "New Build",
    location: "Gent",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format&fit=crop",
    size: "medium",
  },
  {
    id: 6,
    title: "Heritage Pool Restoration",
    category: "Renovation",
    location: "Brugge",
    image:
      "https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=600&q=80&auto=format&fit=crop",
    size: "medium",
  },
];

export default function Projects() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.3,
  });
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "New Build", "Renovation", "Technology"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-section bg-white relative overflow-hidden">
      <div className="container-wide">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 md:mb-16">
          <div>
            <span
              className={`inline-block text-xs uppercase tracking-[0.3em] text-brand-accent mb-4 transition-all duration-700 ${
                headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Portfolio
            </span>
            <h2
              className={`font-display text-display-md text-brand-dark transition-all duration-900 delay-200 ${
                headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Selected <em className="text-brand-accent">projects</em>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div
            className={`flex flex-wrap gap-2 transition-all duration-900 delay-400 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 text-sm rounded-full transition-all duration-400 ${
                  activeFilter === filter
                    ? "bg-brand-dark text-white"
                    : "bg-brand-cream text-brand-slate hover:bg-brand-sand"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid - Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12 md:mt-16">
          <a
            href="#"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-brand-sand rounded-full text-sm font-medium text-brand-dark hover:border-brand-accent hover:text-brand-accent transition-all duration-500"
          >
            <span>View All Projects</span>
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
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof projects)[number];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  const heightClass =
    project.size === "large"
      ? "aspect-[4/5] md:row-span-2"
      : project.size === "medium"
      ? "aspect-[4/3]"
      : "aspect-square";

  return (
    <div
      ref={ref}
      className={`group relative ${heightClass} rounded-lg overflow-hidden cursor-pointer transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url('${project.image}')` }}
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Always visible gradient */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="transform transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-1 block">
            {project.category} · {project.location}
          </span>
          <h3 className="font-display text-lg md:text-xl text-white">
            {project.title}
          </h3>
        </div>

        {/* Arrow on hover */}
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 12L12 2m0 0H5m7 0v7"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
