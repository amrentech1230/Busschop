"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-white/5">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <span className="font-display text-2xl text-white font-semibold tracking-tight">
                Busschop
              </span>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-white/40 -mt-0.5">
                Zwembaden
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Your specialist for swimming pool construction, renovation, and
              technology in Belgium. Crafting exceptional aquatic spaces since
              establishment.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/70 mb-5 font-medium">
              Services
            </h4>
            <ul className="space-y-3">
              {["New Pool Construction", "Pool Renovation", "Pool Technology", "Maintenance & Service", "Consultation"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-white/40 hover:text-white/80 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/70 mb-5 font-medium">
              Company
            </h4>
            <ul className="space-y-3">
              {["About Us", "Our Projects", "Our Process", "Testimonials", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-white/40 hover:text-white/80 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/70 mb-5 font-medium">
              Contact
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-white/40">Email</p>
                <a
                  href="mailto:info@busschopzwembaden.be"
                  className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                >
                  info@busschopzwembaden.be
                </a>
              </div>
              <div>
                <p className="text-sm text-white/40">Phone</p>
                <a
                  href="tel:+32000000000"
                  className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                >
                  +32 (0)00 000 000
                </a>
              </div>
              <div>
                <p className="text-sm text-white/40">Location</p>
                <p className="text-sm text-white/70">Belgium</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © {currentYear} Busschop Zwembaden. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-white/30 hover:text-white/60 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-white/30 hover:text-white/60 transition-colors duration-300"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="text-xs text-white/30 hover:text-white/60 transition-colors duration-300"
            >
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
