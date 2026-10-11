import { useState } from 'react';
import { ArrowUpRight, Plus, MapPin } from 'lucide-react';
import { STUDIO_PROJECTS, Project } from '../data/studioData.ts';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORIES = ['Todos', 'Residencial', 'Interiorismo', 'Pabellón', 'Rehabilitación'] as const;
type CategoryFilter = typeof CATEGORIES[number];

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('Todos');

  const filteredProjects = activeFilter === 'Todos'
    ? STUDIO_PROJECTS
    : STUDIO_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="proyectos" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#E8E6DF]">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#E8E6DF] pb-8 gap-6">
        <div>
          <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#8C8883] mb-3">
            <span className="font-mono tabular-nums">02 / Catálogo</span>
            <span>Obras & Intervenciones</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#141413]">
            Proyectos Seleccionados
          </h2>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F0EDE6] border border-[#DDD8CE]">
          {CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#141413] text-[#FBFBF9] shadow-sm'
                    : 'text-[#6E6B66] hover:text-[#141413] hover:bg-[#E8E4DC]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Asymmetric Editorial Gallery Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {filteredProjects.map((project, index) => {
          // Asymmetric layout logic: Alternate between marquee span-8/span-4 and span-6/span-6
          const isFullSpan = index === 0 && activeFilter === 'Todos';
          const isWide = index === 1 && activeFilter === 'Todos';
          const colSpanClass = isFullSpan
            ? 'lg:col-span-12'
            : isWide
            ? 'lg:col-span-7'
            : index === 2 && activeFilter === 'Todos'
            ? 'lg:col-span-5'
            : 'lg:col-span-6';

          const imageAspectClass = isFullSpan
            ? 'aspect-[21/9]'
            : isWide
            ? 'aspect-[4/3]'
            : 'aspect-[4/3]';

          return (
            <article
              key={project.id}
              className={`group flex flex-col justify-between ${colSpanClass} border border-[#E8E6DF] bg-[#FAF9F5] p-5 sm:p-7 hover:border-[#141413] transition-colors duration-300`}
            >
              {/* Media viewer with hover zoom and clean metadata overlay */}
              <div
                className={`relative w-full ${imageAspectClass} overflow-hidden bg-[#E8E4DC] cursor-pointer`}
                onClick={() => onSelectProject(project)}
              >
                <img
                  src={project.mainImage}
                  alt={project.title}
                  className="w-full h-full object-cover img-editorial-zoom"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle scrim */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors duration-300" />

                {/* Corner quick inspect affordance */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProject(project);
                  }}
                  className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-9 h-9 bg-[#141413]/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#141413]"
                  aria-label={`Ver detalles de ${project.title}`}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Unboxed Metadata (Zero-Pill discipline) */}
              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#8C8883] font-mono">
                  <span>{project.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#A8A49D]" />
                    {project.location}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">{project.year}</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">{project.area}</span>
                </div>

                <div className="flex items-baseline justify-between gap-4">
                  <h3
                    onClick={() => onSelectProject(project)}
                    className="font-serif text-2xl sm:text-3xl font-light text-[#141413] group-hover:text-[#5A5854] transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="p-1 text-[#8C8883] group-hover:text-[#141413] transition-colors cursor-pointer shrink-0"
                    aria-label={`Abrir proyecto ${project.title}`}
                  >
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

                <p className="text-sm text-[#5A5854] leading-relaxed font-light line-clamp-2">
                  {project.summary}
                </p>

                {/* Discrete Material Tags */}
                <div className="pt-3 border-t border-[#E8E6DF] flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-[#73716E]">
                  <span className="font-mono text-[#A8A49D]">Materialidad:</span>
                  {project.materials.slice(0, 3).map((mat, i) => (
                    <span key={mat}>
                      {mat}{i < 2 && project.materials.length > i + 1 ? ' ·' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Foot of the projects section */}
      <div className="mt-12 pt-6 border-t border-[#E8E6DF] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#8C8883] font-mono gap-4">
        <div>MOSTRANDO {filteredProjects.length} DE {STUDIO_PROJECTS.length} PROYECTOS MONOGRÁFICOS</div>
        <div className="text-right">TODOS LOS DERECHOS ARQUITECTÓNICOS REGISTRADOS</div>
      </div>
    </section>
  );
}
