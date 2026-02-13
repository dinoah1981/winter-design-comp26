import { ScrollReveal } from '@/components/ScrollReveal';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-12 md:py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="text-white font-black text-lg tracking-wider uppercase">
              For The Culture
            </div>

            {/* Links */}
            <nav className="flex items-center gap-6">
              <a
                href="#"
                className="text-white/60 text-sm hover:text-white transition-colors link-underline"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/60 text-sm hover:text-white transition-colors link-underline"
              >
                Contact
              </a>
            </nav>

            {/* Copyright */}
            <p className="text-white/40 text-sm">
              &copy; {currentYear} Comp Sci High. All rights reserved.
            </p>
          </div>
        </ScrollReveal>

        {/* Competition Tagline */}
        <ScrollReveal delay={2}>
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-white/30 text-xs uppercase tracking-[0.3em]">
              Winter 2026 Design Competition
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
