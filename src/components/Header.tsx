"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  const navLinks = [
    { label: "New Pools", href: "#services" },
    { label: "Renovation", href: "#renovation" },
    { label: "Technology", href: "#technology" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-wide flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <a href="#" className="relative z-10 flex items-center gap-3">
            <div className="flex flex-col">
              <span
                className={`font-display text-xl md:text-2xl font-semibold tracking-tight transition-colors duration-700 ${
                  scrolled ? "text-brand-dark" : "text-white"
                }`}
              >
                Busschop
              </span>
              <span
                className={`text-[10px] md:text-xs font-body uppercase tracking-[0.25em] -mt-1 transition-colors duration-700 ${
                  scrolled ? "text-brand-accent" : "text-white/70"
                }`}
              >
                Zwembaden
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium tracking-wide link-hover transition-colors duration-500 ${
                  scrolled
                    ? "text-brand-charcoal hover:text-brand-accent"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full transition-all duration-500 ${
                scrolled
                  ? "bg-brand-dark text-white hover:bg-brand-charcoal"
                  : "bg-white/10 text-white border border-white/30 hover:bg-white/20"
              }`}
            >
              <span>Get in Touch</span>
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

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[1.5px] transition-all duration-500 ${
                mobileOpen
                  ? "rotate-45 translate-y-[4px] bg-brand-dark"
                  : scrolled
                  ? "bg-brand-dark"
                  : "bg-white"
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] transition-all duration-500 ${
                mobileOpen
                  ? "-rotate-45 -translate-y-[3px] bg-brand-dark"
                  : scrolled
                  ? "bg-brand-dark"
                  : "bg-white"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-brand-cream transition-all duration-700 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col justify-center items-start h-full px-8 pt-24">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-3xl md:text-4xl text-brand-dark hover:text-brand-accent transition-colors duration-300"
                style={{
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${
                    i * 0.08
                  }s`,
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div
            className="mt-12 pt-8 border-t border-brand-sand"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transition: "opacity 0.5s ease 0.5s",
            }}
          >
            <p className="text-sm text-brand-slate/70 mb-2">Get in touch</p>
            <a
              href="tel:+32000000000"
              className="text-lg font-medium text-brand-dark"
            >
              +32 (0)00 000 000
            </a>
            <p className="text-sm text-brand-slate/70 mt-4">
              info@busschopzwembaden.be
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
