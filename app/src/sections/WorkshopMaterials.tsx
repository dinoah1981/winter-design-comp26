import { ScrollReveal } from '@/components/ScrollReveal';
import { ExternalLink } from 'lucide-react';

interface RoleMaterial {
  role: string;
  url: string;
}

const roles: RoleMaterial[] = [
  {
    role: 'Director',
    url: 'https://www.canva.com/design/DAHAHd5O3j8/jfhojHnsG4rbUWLYO374dg/edit',
  },
  {
    role: 'Cinematographer',
    url: 'https://www.canva.com/design/DAHB5mwL30Y/hfeffcvU9gKAMSNIznhMTg/edit',
  },
  {
    role: 'Story Developer',
    url: 'https://www.canva.com/design/DAHBtdlndys/-UxiV8LJbUbTjU51FfwpUw/edit',
  },
  {
    role: 'Editor',
    url: 'https://www.canva.com/design/DAHCE4IgOfw/Pe_dVemfnlyOJ3WijLAoig/edit',
  },
];

export function WorkshopMaterials() {
  return (
    <section id="workshops" className="bg-neutral-100 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="mb-16">
          <p className="text-black/60 text-xs font-medium uppercase tracking-[0.2em] mb-4">
            By Role
          </p>
          <h2 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight">
            Workshop Materials
          </h2>
        </ScrollReveal>

        {/* Role Materials */}
        <div className="grid sm:grid-cols-2 gap-4">
          {roles.map((item, index) => (
            <ScrollReveal key={item.role} delay={(index + 1) as 1 | 2 | 3 | 4 | 5}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white border border-black/10 p-6 card-lift group"
              >
                <h3 className="text-black text-lg font-bold uppercase tracking-tight">
                  {item.role}
                </h3>
                <ExternalLink className="w-4 h-4 text-black/40 group-hover:text-black transition-colors" />
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
