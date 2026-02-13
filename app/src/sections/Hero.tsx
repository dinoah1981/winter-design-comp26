import { ChevronDown } from 'lucide-react';

export function Hero() {
  const handleScrollToMaterials = () => {
    const element = document.querySelector('#materials');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-filmmaker.jpg"
          alt="Filmmaker silhouette"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <p className="animate-fade-in-up text-white/80 text-xs sm:text-sm font-medium uppercase tracking-[0.3em] mb-6">
          For The Culture
        </p>

        {/* Main Title */}
        <h1 className="animate-fade-in-up-delay-1 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none mb-6">
          Winter 2026
          <br />
          Design Competition
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up-delay-2 text-white/90 text-lg sm:text-xl md:text-2xl font-light tracking-wide mb-10">
          Create. Collaborate. Compete.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in-up-delay-3">
          <button
            onClick={handleScrollToMaterials}
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-white/90 transition-colors"
          >
            Explore Materials
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="text-white/60 w-8 h-8" />
      </div>
    </section>
  );
}
