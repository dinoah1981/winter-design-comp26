import { ScrollReveal } from '@/components/ScrollReveal';
import { 
  Video, 
  Camera, 
  Scissors, 
  Scale, 
  FileSignature, 
  Clapperboard,
  ExternalLink 
} from 'lucide-react';

const resources = [
  {
    title: 'TED Talks on Storytelling',
    description: 'Curated playlist of inspiring talks about narrative and communication.',
    icon: Video,
    href: '#',
  },
  {
    title: 'Film Equipment Guide',
    description: 'Camera, audio, and lighting basics for documentary filmmaking.',
    icon: Camera,
    href: '#',
  },
  {
    title: 'Editing Software Tutorials',
    description: 'Premiere Pro and DaVinci Resolve getting started guides.',
    icon: Scissors,
    href: '#',
  },
  {
    title: 'Copyright & Fair Use',
    description: 'Legal guidelines for using music, footage, and images.',
    icon: Scale,
    href: '#',
  },
  {
    title: 'Release Forms',
    description: 'Talent and location release form templates.',
    icon: FileSignature,
    href: '#',
  },
  {
    title: 'Film Festival Guide',
    description: 'Tips for submitting to and screening at film festivals.',
    icon: Clapperboard,
    href: '#',
  },
];

export function Resources() {
  return (
    <section id="resources" className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-black/60 text-xs font-medium uppercase tracking-[0.2em] mb-4">
            Learn More
          </p>
          <h2 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight">
            Recommended Resources
          </h2>
        </ScrollReveal>

        {/* Resources Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <ScrollReveal key={resource.title} delay={(index + 1) as 1 | 2 | 3 | 4 | 5}>
              <a
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full bg-neutral-50 border border-black/5 p-6 card-lift"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-black flex items-center justify-center">
                    <resource.icon className="w-5 h-5 text-white" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-black/30 group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-black text-base font-bold uppercase tracking-tight mb-2">
                  {resource.title}
                </h3>
                <p className="text-black/60 text-sm leading-relaxed">
                  {resource.description}
                </p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
