import { ScrollReveal } from '@/components/ScrollReveal';
import { Film, Award, Star, Trophy } from 'lucide-react';

const festivals = [
  { name: 'Harlem International Film Festival', icon: Film },
  { name: 'Tribeca Festival', icon: Award },
  { name: 'Lower East Side Film Festival', icon: Star },
  { name: 'African Film Festival', icon: Trophy },
];

export function Prizes() {
  return (
    <section className="bg-black py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-white/60 text-xs font-medium uppercase tracking-[0.2em] mb-4">
            Recognition
          </p>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
            Prizes & Recognition
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            The five highest-scoring films overall will receive automatic submission 
            and screening consideration at prestigious film festivals.
          </p>
        </ScrollReveal>

        {/* Festival Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {festivals.map((festival, index) => (
            <ScrollReveal key={festival.name} delay={(index + 1) as 1 | 2 | 3 | 4 | 5}>
              <div className="group bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 transition-colors">
                <festival.icon className="w-10 h-10 text-white/80 mx-auto mb-4 group-hover:text-white transition-colors" />
                <h3 className="text-white text-sm font-bold uppercase tracking-wide">
                  {festival.name}
                </h3>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Additional Info */}
        <ScrollReveal delay={3} className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-white/50 text-sm">
            <Star className="w-4 h-4" />
            <span>All participants receive a certificate of completion</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
