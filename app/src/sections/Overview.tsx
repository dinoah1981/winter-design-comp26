import { ScrollReveal } from '@/components/ScrollReveal';

export function Overview() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            <ScrollReveal>
              <p className="text-black/60 text-xs font-medium uppercase tracking-[0.2em] mb-4">
                The Challenge
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={1}>
              <h2 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">
                Tell Your Story
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={2}>
              <p className="text-black/80 text-lg leading-relaxed mb-6">
                Each team will plan, produce, and screen a{' '}
                <span className="font-semibold text-black">3-8 minute short film</span>{' '}
                that communicates a clear, compelling docu-story grounded in authentic voice, 
                lived experience, or a meaningful idea connected to community or identity.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={3}>
              <p className="text-black/60 text-base leading-relaxed">
                Films should feel intentional, structured, and polished—not simply recorded 
                footage, but designed storytelling with purpose.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={4}>
              <div className="mt-10 pt-8 border-t border-black/10">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-3xl font-black text-black">3-8</p>
                    <p className="text-sm text-black/60 uppercase tracking-wide">Minutes</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-black">4</p>
                    <p className="text-sm text-black/60 uppercase tracking-wide">Team Roles</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Image */}
          <ScrollReveal delay={2} className="order-first md:order-last">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="/images/vintage-camera.jpg"
                alt="Vintage film camera"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
