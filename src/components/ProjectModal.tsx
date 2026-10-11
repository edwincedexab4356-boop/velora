import { useEffect } from 'react';
import { X, MapPin, Calendar, Maximize2, Award, Sparkles, ArrowRight } from 'lucide-react';
import { Project } from '../data/studioData.ts';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquireProject: (projectTitle: string) => void;
}

export function ProjectModal({ project, onClose, onInquireProject }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-10 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#FBFBF9] text-[#141413] shadow-2xl border border-[#DDD8CE] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with project category and close button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E6DF] bg-[#F5F3EF]">
          <div className="flex items-center gap-2 text-xs text-[#73716E] font-sans">
            <span className="uppercase tracking-[0.15em] font-medium text-[#141413]">
              {project.category}
            </span>
            <span aria-hidden="true">·</span>
            <span>Ref. {project.id.toUpperCase()}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono">{project.year}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#5A5854] hover:text-[#141413] hover:bg-[#E8E6DF] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black"
            aria-label="Cerrar vista de proyecto"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero image viewer with high-res aspect ratio */}
        <div className="relative aspect-[16/9] w-full bg-[#141413] overflow-hidden">
          <img
            src={project.mainImage}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-3 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 text-[11px] font-mono tracking-wider">
            FICHA TÉCNICA Y MONOGRÁFICA
          </div>
        </div>

        {/* Project content and specifications */}
        <div className="p-6 sm:p-10 space-y-8 max-h-[50vh] overflow-y-auto">
          {/* Header & Location */}
          <div className="space-y-2 border-b border-[#E8E6DF] pb-6">
            <div className="flex items-center gap-1.5 text-xs text-[#8C8883] font-mono uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>{project.location}</span>
            </div>
            <h3 id="modal-project-title" className="font-serif text-3xl sm:text-4xl font-light text-[#141413]">
              {project.title}
            </h3>
            <p className="text-base text-[#5A5854] leading-relaxed font-light pt-1">
              {project.summary}
            </p>
          </div>

          {/* Architectural Concept */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#8C8883]">
              Concepto Arquitectónico
            </h4>
            <p className="text-sm sm:text-[15px] leading-relaxed text-[#3B3A36] font-light">
              {project.concept}
            </p>
          </div>

          {/* Technical Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-[#F5F3EF] border border-[#E8E6DF]">
            <div>
              <div className="text-[11px] font-mono uppercase text-[#8C8883]">Superficie</div>
              <div className="font-serif text-xl text-[#141413] mt-1 font-normal tabular-nums">{project.area}</div>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase text-[#8C8883]">Año de Entrega</div>
              <div className="font-serif text-xl text-[#141413] mt-1 font-normal tabular-nums">{project.year}</div>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase text-[#8C8883]">Emplazamiento</div>
              <div className="text-sm text-[#141413] mt-1 truncate">{project.location.split(',')[0]}</div>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase text-[#8C8883]">Categoría</div>
              <div className="text-sm text-[#141413] mt-1">{project.category}</div>
            </div>
          </div>

          {/* Materiality Breakdown */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#8C8883]">
              Paleta Material Primaria
            </h4>
            <div className="flex flex-wrap gap-2 text-xs">
              {project.materials.map((mat) => (
                <span
                  key={mat}
                  className="px-3 py-1.5 bg-[#EDEAE4] text-[#2C2B29] border border-[#DDD8CE] font-sans"
                >
                  {mat}
                </span>
              ))}
            </div>
          </div>

          {/* Curator Note / Distinction */}
          {project.curatorNote && (
            <div className="p-4 border-l-2 border-[#141413] bg-[#F5F4EE] space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#141413] font-medium">
                <Award className="w-3.5 h-3.5 text-[#141413]" />
                <span>Reconocimiento y Publicación</span>
              </div>
              <p className="text-xs text-[#5A5854] leading-relaxed">
                {project.curatorNote} {project.awards ? `· ${project.awards}` : ''}
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 bg-[#F5F3EF] border-t border-[#E8E6DF] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#73716E]">
            ¿Deseas concebir un proyecto residencial o espacial con este lenguaje?
          </div>
          <button
            type="button"
            onClick={() => {
              onClose();
              onInquireProject(project.title);
            }}
            className="w-full sm:w-auto px-6 py-3 bg-[#141413] text-[#FBFBF9] text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#2C2B29] transition-colors flex items-center justify-center gap-2"
          >
            <span>Consultar sobre un proyecto similar</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
