import { ScrollReveal } from '@/components/ScrollReveal';
import { Presentation, FileText, ExternalLink } from 'lucide-react';

interface Workshop {
  title: string;
  slidesUrl: string;
  planUrl: string;
}

interface DaySchedule {
  day: string;
  theme: string;
  workshops: Workshop[];
}

const schedule: DaySchedule[] = [
  {
    day: 'Monday',
    theme: 'Pre-Production',
    workshops: [
      { title: 'Choosing Your Topic', slidesUrl: '#', planUrl: '#' },
      { title: 'Story Development', slidesUrl: '#', planUrl: '#' },
    ],
  },
  {
    day: 'Tuesday',
    theme: 'Production',
    workshops: [
      { title: 'Ethical Research with AI', slidesUrl: '#', planUrl: '#' },
      { title: 'Cinematography Basics', slidesUrl: '#', planUrl: '#' },
      { title: 'Interview Techniques', slidesUrl: '#', planUrl: '#' },
      { title: 'B-Roll & Visual Storytelling', slidesUrl: '#', planUrl: '#' },
    ],
  },
  {
    day: 'Wednesday',
    theme: 'Post-Production',
    workshops: [
      { title: 'Editing Fundamentals', slidesUrl: '#', planUrl: '#' },
      { title: 'Sound Design & Music', slidesUrl: '#', planUrl: '#' },
      { title: 'Color Correction', slidesUrl: '#', planUrl: '#' },
      { title: 'Finalizing Your Film', slidesUrl: '#', planUrl: '#' },
    ],
  },
];

function WorkshopCard({ workshop }: { workshop: Workshop }) {
  return (
    <div className="bg-white border border-black/10 p-6 card-lift">
      <h4 className="text-black text-lg font-bold uppercase tracking-tight mb-4">
        {workshop.title}
      </h4>
      <div className="flex flex-wrap gap-3">
        <a
          href={workshop.slidesUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-black/80 transition-colors"
        >
          <Presentation className="w-4 h-4" />
          Slides
          <ExternalLink className="w-3 h-3" />
        </a>
        <a
          href={workshop.planUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-black text-black px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
        >
          <FileText className="w-4 h-4" />
          Plan
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

function DaySection({ daySchedule, index }: { daySchedule: DaySchedule; index: number }) {
  return (
    <ScrollReveal delay={(index + 1) as 1 | 2 | 3 | 4 | 5}>
      <div className="mb-12 last:mb-0">
        {/* Day Header */}
        <div className="flex items-baseline gap-4 mb-6">
          <h3 className="text-black text-2xl sm:text-3xl font-black uppercase tracking-tight">
            {daySchedule.day}
          </h3>
          <span className="text-black/40 text-sm font-medium uppercase tracking-wide">
            {daySchedule.theme}
          </span>
        </div>

        {/* Workshops Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {daySchedule.workshops.map((workshop) => (
            <WorkshopCard key={workshop.title} workshop={workshop} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

export function WorkshopMaterials() {
  return (
    <section id="workshops" className="bg-neutral-100 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="mb-16">
          <p className="text-black/60 text-xs font-medium uppercase tracking-[0.2em] mb-4">
            Daily Workshops
          </p>
          <h2 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight">
            Workshop Materials
          </h2>
        </ScrollReveal>

        {/* Daily Schedule */}
        <div className="space-y-16">
          {schedule.map((daySchedule, index) => (
            <DaySection key={daySchedule.day} daySchedule={daySchedule} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
