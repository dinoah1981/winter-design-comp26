import { ScrollReveal } from '@/components/ScrollReveal';
import { Calendar, ClipboardCheck, FileText, Users, ExternalLink } from 'lucide-react';

const materials = [
  {
    title: 'Schedule & Master Spreadsheet',
    description: 'Complete competition timeline, deadlines, and team assignments.',
    icon: Calendar,
    href: 'https://docs.google.com/spreadsheets/d/example',
    color: 'bg-white',
  },
  {
    title: 'Judging Rubric',
    description: 'Evaluation criteria and scoring guidelines for films.',
    icon: ClipboardCheck,
    href: 'https://docs.google.com/document/d/example',
    color: 'bg-white',
  },
  {
    title: 'Competition Rules',
    description: 'Official rules, requirements, and submission guidelines.',
    icon: FileText,
    href: '#',
    color: 'bg-white',
  },
  {
    title: 'Team Roles Guide',
    description: 'Director, Story Lead, Cinematographer, and Editor responsibilities.',
    icon: Users,
    href: '#',
    color: 'bg-white',
  },
];

export function BasicMaterials() {
  return (
    <section id="materials" className="bg-black py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-white/60 text-xs font-medium uppercase tracking-[0.2em] mb-4">
            Get Started
          </p>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight">
            Basic Competition Materials
          </h2>
        </ScrollReveal>

        {/* Materials Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {materials.map((material, index) => (
            <ScrollReveal key={material.title} delay={(index + 1) as 1 | 2 | 3 | 4 | 5}>
              <a
                href={material.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white p-8 card-lift"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-black flex items-center justify-center">
                    <material.icon className="w-6 h-6 text-white" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-black/40 group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-black text-xl font-bold uppercase tracking-tight mb-2">
                  {material.title}
                </h3>
                <p className="text-black/60 text-sm leading-relaxed">
                  {material.description}
                </p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
