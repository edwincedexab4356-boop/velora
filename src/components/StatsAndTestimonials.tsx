import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { STUDIO_STATS, STUDIO_TESTIMONIALS } from '../data/studioData.ts';

export function StatsAndTestimonials() {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const prevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev === 0 ? STUDIO_TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev === STUDIO_TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = STUDIO_TESTIMONIALS[activeTestimonialIdx];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#E8E6DF]">
      {/* Kicker */}
      <div className="flex items-center justify-between text-xs tracking-[0.2em] uppercase text-[#8C8883] mb-12">
        <span className="font-mono tabular-nums">05 / Trayectoria & Testimonios</span>
        <span className="font-sans">Muestra Comercial de Demostración</span>
      </div>

      {/* Demo Metrics Banner (Notice of Demonstration Data) */}
      <div className="mb-10 p-4 bg-[#F2EFE9] border border-[#DDD8CE] flex items-start gap-3 text-xs text-[#6E6B66]">
        <Info className="w-4 h-4 text-[#8C8883] shrink-0 mt-0.5" />
        <div>
          <span className="font-medium text-[#141413]">Aviso de demostración comercial: </span>
          Las siguientes métricas numéricas y testimonios de clientes han sido formulados como 
          ejemplos ficticios ilustrativos para evaluar la dirección de arte y arquitectura de información de VELORA STUDIO.
        </div>
      </div>

      {/* Numerical Stats Grid (Tabular Numerals) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-20 border-b border-[#E8E6DF]">
        {STUDIO_STATS.map((stat) => (
          <div key={stat.label} className="space-y-2 p-5 bg-[#FAF9F5] border border-[#E8E6DF]">
            <div className="font-mono text-4xl sm:text-5xl font-light text-[#141413] tabular-nums tracking-tight">
              {stat.value}
            </div>
            <div className="font-serif text-lg text-[#141413] font-normal">
              {stat.label}
            </div>
            <div className="text-xs text-[#73716E] font-light leading-relaxed">
              {stat.clarification}
            </div>
          </div>
        ))}
      </div>

      {/* Attributable Testimonials Section */}
      <div className="pt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-4 space-y-4">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#8C8883]">
            Experiencias Habitables
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#141413] leading-snug">
            La resonancia de la obra en quienes la habitan
          </h3>
          <p className="text-sm text-[#5A5854] font-light leading-relaxed">
            Cada encargo es una relación de confianza mutua que perdura más allá de la entrega de llaves.
          </p>

          <div className="flex items-center gap-3 pt-4">
            <button
              type="button"
              onClick={prevTestimonial}
              className="p-3 border border-[#DDD8CE] hover:border-[#141413] text-[#141413] transition-colors cursor-pointer"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="text-xs font-mono tabular-nums text-[#8C8883]">
              0{activeTestimonialIdx + 1} / 0{STUDIO_TESTIMONIALS.length}
            </div>
            <button
              type="button"
              onClick={nextTestimonial}
              className="p-3 border border-[#DDD8CE] hover:border-[#141413] text-[#141413] transition-colors cursor-pointer"
              aria-label="Testimonio siguiente"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Testimonial Editorial Card */}
        <div className="lg:col-span-8 bg-[#141413] text-[#FBFBF9] p-8 sm:p-12 relative overflow-hidden">
          <Quote className="w-12 h-12 text-[#2C2B29] absolute top-6 right-6 pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed text-[#FBFBF9]/95 italic">
              «{currentTestimonial.quote}»
            </blockquote>

            <div className="pt-6 border-t border-[#2C2B29] flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-3">
              <div>
                <div className="font-sans font-medium text-sm text-[#FBFBF9]">
                  {currentTestimonial.client}
                </div>
                <div className="text-[#8C8883] font-mono mt-0.5">
                  {currentTestimonial.projectType} · {currentTestimonial.city}
                </div>
              </div>

              <div className="text-[11px] font-mono uppercase tracking-wider text-[#DDD8CE]/60">
                Entrega {currentTestimonial.year} · Caso de Demostración
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
