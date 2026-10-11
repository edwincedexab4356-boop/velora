import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { HERO_IMAGE } from '../data/studioData.ts';

interface HeroProps {
  onExploreProjects: () => void;
  onOpenContact: () => void;
}

export function Hero({ onExploreProjects, onOpenContact }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Top sub-kicker with coordinates and studio statement */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E8E6DF] pb-5 gap-3 text-xs tracking-[0.15em] text-[#73716E]">
        <div className="font-mono tabular-nums text-[11px] uppercase">
          MAD 40.4168° N · MIL 45.4642° N
        </div>
        <div className="text-[12px] uppercase font-sans tracking-[0.2em] text-[#8C8883]">
          Arquitectura Contemporánea · Interiorismo de Autor
        </div>
      </div>

      {/* Main Editorial Headline & Lead */}
      <div className="my-8 md:my-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-8">
          <h1 className="font-serif text-[clamp(2.75rem,5.5vw,5rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#141413] text-balance">
            El espacio como <br className="hidden sm:inline" />
            <span className="italic font-normal">escultura habitable</span>
          </h1>
        </div>

        <div className="lg:col-span-4 lg:pl-6 space-y-6">
          <p className="text-[15px] md:text-[16px] leading-[1.65] text-[#5A5854] font-light">
            Concebimos residencias privadas y enclaves arquitectónicos donde el hormigón, 
            la piedra noble y la luz natural componen un diálogo sereno y permanente.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <button
              type="button"
              onClick={onExploreProjects}
              className="px-6 py-3.5 bg-[#141413] text-[#FBFBF9] text-xs font-medium tracking-[0.15em] uppercase hover:bg-[#2C2B29] transition-all duration-300 flex items-center gap-2.5 shadow-sm cursor-pointer"
            >
              <span>Explorar Proyectos</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#DDD8CE]" />
            </button>

            <button
              type="button"
              onClick={onOpenContact}
              className="group inline-flex items-center gap-2 py-3 px-2 text-xs font-medium tracking-[0.15em] uppercase text-[#141413] hover:text-[#73716E] transition-colors cursor-pointer"
            >
              <span>Hablemos de tu Proyecto</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#8C8883] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Grand Architectural Focal Image (16:9) with quiet caption */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#ECE8E1] border border-[#E8E6DF] group">
        <img
          src={HERO_IMAGE}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/images/hero.jpg';
          }}
          alt="Residencia privada de hormigón y piedra con piscina reflectante al atardecer frente al mar por VELORA STUDIO"
          className="w-full h-full object-cover img-editorial-zoom"
          referrerPolicy="no-referrer"
          loading="eager"
        />

        {/* Subtle contrast scrim for bottom editorial credits */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-8 md:right-8 flex flex-col sm:flex-row sm:items-end justify-between text-white text-xs gap-2">
          <div>
            <div className="font-serif text-lg md:text-xl font-light tracking-wide text-white/95">
              Residencia Mirador del Cantábrico
            </div>
            <div className="text-[11px] tracking-[0.15em] uppercase text-white/70 font-sans mt-0.5">
              Cantabria, España · Hormigón Entablillado & Caliza
            </div>
          </div>

          <div className="hidden sm:block text-right font-mono text-[11px] text-white/70 tabular-nums">
            PROYECTO SELECCIONADO 2025 · FOTOGRAFÍA MONOGRÁFICA
          </div>
        </div>
      </div>

      {/* Scroll indicator strip */}
      <div className="pt-6 flex items-center justify-between text-[11px] tracking-[0.15em] uppercase text-[#8C8883]">
        <span className="font-sans">Colección Monográfica 2024–2026</span>
        <button
          type="button"
          onClick={onExploreProjects}
          className="hover:text-[#141413] transition-colors flex items-center gap-2 cursor-pointer"
        >
          <span>Desplazar para descubrir</span>
          <ArrowDown className="w-3 h-3 animate-bounce" />
        </button>
        <span className="hidden sm:inline font-mono tabular-nums">P. 01 / 06</span>
      </div>
    </section>
  );
}
