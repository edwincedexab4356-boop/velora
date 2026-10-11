import { useState } from 'react';
import { Plus, Minus, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { STUDIO_SERVICES, Service } from '../data/studioData.ts';

interface ServicesSectionProps {
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export function ServicesSection({ onSelectServiceForInquiry }: ServicesSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="servicios" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#E8E6DF]">
      {/* Section Kicker */}
      <div className="flex items-center justify-between text-xs tracking-[0.2em] uppercase text-[#8C8883] mb-12">
        <span className="font-mono tabular-nums">03 / Competencias</span>
        <span className="font-sans">Disciplinas & Áreas de Intervención</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
        <div className="lg:col-span-5 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#141413] leading-tight text-balance">
            Disciplinas proyectuales concebidas sin fisuras
          </h2>
          <p className="text-[15px] leading-relaxed text-[#5A5854] font-light">
            No concebimos la arquitectura exterior separada del mobiliario interior.
            Integramos cada escala de diseño en una única experiencia coherente: 
            desde la implantación territorial hasta la curvatura de una manilla fundida en bronce.
          </p>
          <div className="p-5 bg-[#F5F4EE] border border-[#E8E6DF] space-y-2">
            <div className="text-xs font-mono uppercase text-[#141413]">
              Compromiso de Gestión Exclusiva
            </div>
            <p className="text-xs text-[#6E6B66] leading-relaxed">
              El estudio limita sus compromisos anuales a un máximo de 6 obras simultáneas para 
              garantizar la presencia directa de los socios directores en cada fase constructiva.
            </p>
          </div>
        </div>

        {/* Services Accordion List with rich editorial details */}
        <div className="lg:col-span-7 divide-y divide-[#E8E6DF] border-y border-[#E8E6DF]">
          {STUDIO_SERVICES.map((service, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div key={service.number} className="py-6 sm:py-8 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleExpand(index)}
                  className="w-full text-left flex items-start justify-between gap-4 group cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-mono text-sm sm:text-base text-[#8C8883] group-hover:text-[#141413] transition-colors tabular-nums">
                      {service.number}.
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#141413] group-hover:text-[#5A5854] transition-colors">
                        {service.title}
                      </h3>
                      <div className="text-xs sm:text-sm text-[#73716E] font-light mt-1">
                        {service.subtitle}
                      </div>
                    </div>
                  </div>

                  <div className="p-2 border border-[#E8E6DF] group-hover:border-[#141413] transition-colors shrink-0">
                    {isExpanded ? (
                      <Minus className="w-4 h-4 text-[#141413]" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#73716E] group-hover:text-[#141413]" />
                    )}
                  </div>
                </button>

                {/* Expanded Drawer Details */}
                {isExpanded && (
                  <div className="mt-6 pt-4 pl-8 sm:pl-12 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-sm sm:text-[15px] text-[#4A4844] leading-relaxed font-light">
                      {service.description}
                    </p>

                    <div className="p-5 bg-[#FAF9F5] border border-[#E8E6DF] space-y-3">
                      <div className="text-xs font-mono uppercase text-[#8C8883] tracking-wider">
                        Filosofía de Intervención
                      </div>
                      <p className="text-xs sm:text-sm italic text-[#3B3A36] font-serif">
                        «{service.approach}»
                      </p>
                    </div>

                    <div>
                      <div className="text-xs font-mono uppercase text-[#8C8883] tracking-wider mb-3">
                        Entregables & Alcance Técnico
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.deliverables.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2 text-xs text-[#5A5854]"
                          >
                            <span className="text-[#141413] mt-0.5">•</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => onSelectServiceForInquiry(service.title)}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-medium text-[#141413] hover:text-[#73716E] transition-colors py-1 border-b border-[#141413]"
                      >
                        <span>Solicitar propuesta para {service.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
