import { ScrollReveal } from '@/components/ScrollReveal';
import { Presentation, Film, FileEdit, UserCheck, ExternalLink } from 'lucide-react';

const teamMaterials = [
  {
    title: 'Advisor Slide Deck',
    description: 'Daily presentation slides for advisory sessions. Covers competition overview, daily goals, and check-ins.',
    icon: Presentation,
    href: 'https://docs.google.com/presentation/d/example',
  },
  {
    title: 'Film Analysis Template',
    description: 'Monday worksheet for analyzing documentary films and TED Talks. Study storytelling techniques.',
    icon: Film,
    href: 'https://docs.google.com/document/d/example',
  },
  {
    title: 'Story Outline Worksheet',
    description: 'Tuesday worksheet for developing your film concept, structure, and narrative arc.',
    icon: FileEdit,
    href: 'https://docs.google.com/document/d/example',
  },
  {
    title: 'Role Assignment Sheet',
    description: 'Team organization document. Assign and track Director, Story Lead, Cinematographer, and Editor roles.',
    icon: UserCheck,
    href: '#',
  },
];

export function TeamTimeMaterials() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="mb-16">
          <p className="text-black/60 text-xs font-medium uppercase tracking-[0.2em] mb-4">
            Advisory Period
          </p>
          <h2 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight">
            Team Time Materials
          </h2>
        </ScrollReveal>

        {/* Materials List */}
        <div className="space-y-0">
          {teamMaterials.map((material, index) => (
            <ScrollReveal key={material.title} delay={(index + 1) as 1 | 2 | 3 | 4 | 5}>
              <a
                href={material.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-6 py-8 border-b border-black/10 hover:bg-black/[0.02] transition-colors -mx-4 px-4"
              >
                <div className="w-14 h-14 bg-black flex items-center justify-center flex-shrink-0">
                  <material.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-black text-lg sm:text-xl font-bold uppercase tracking-tight">
                      {material.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-black/40 group-hover:text-black transition-colors flex-shrink-0" />
                  </div>
                  <p className="text-black/60 text-sm sm:text-base leading-relaxed">
                    {material.description}
                  </p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
