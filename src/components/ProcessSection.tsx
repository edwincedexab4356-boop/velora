import { useState } from 'react';
import { ArrowRight, Clock, Compass } from 'lucide-react';
import { WORK_PROCESS } from '../data/studioData.ts';

export function ProcessSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = WORK_PROCESS[activeStepIndex];

  return (
    <section id="proceso" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#E8E6DF]">
      {/* Kicker */}
      <div className="flex items-center justify-between text-xs tracking-[0.2em] uppercase text-[#8C8883] mb-12">
        <span className="font-mono tabular-nums">04 / Metodología</span>
        <span className="font-sans">El Itinerario Proyectual</span>
      </div>

      <div className="mb-16 max-w-3xl">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#141413] leading-tight text-balance">
          De la intuición inicial a la serenidad de habitar
        </h2>
        <p className="text-[15px] leading-relaxed text-[#5A5854] font-light mt-4">
          Un proceso transparente y metódico estructurado en cinco fases rigurosas. 
          Garantizamos certidumbre económica, excelencia técnica y un diálogo constante.
        </p>
      </div>

      {/* Interactive Process Stepper Navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 border-b border-[#E8E6DF] pb-4 mb-8">
        {WORK_PROCESS.map((proc, idx) => {
          const isActive = activeStepIndex === idx;
          return (
            <button
              key={proc.step}
              type="button"
              onClick={() => setActiveStepIndex(idx)}
              className={`p-3 text-left transition-all duration-200 border-b-2 cursor-pointer ${
                isActive
                  ? 'border-[#141413] bg-[#F5F4EE]'
                  : 'border-transparent hover:border-[#DDD8CE] text-[#8C8883]'
              }`}
            >
              <div className="text-[11px] font-mono tabular-nums uppercase text-[#8C8883]">
                {proc.step}
              </div>
              <div className={`text-xs sm:text-sm font-medium mt-1 truncate ${isActive ? 'text-[#141413]' : 'text-[#6E6B66]'}`}>
                {proc.title.split('&')[0]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Step Detailed View (Asymmetric Spotlight) */}
      <div className="bg-[#FAF9F5] border border-[#E8E6DF] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-4 space-y-4 border-b lg:border-b-0 lg:border-r border-[#E8E6DF] pb-6 lg:pb-0 lg:pr-8">
          <div className="inline-block px-3 py-1 bg-[#141413] text-[#FBFBF9] text-[11px] font-mono uppercase tracking-wider">
            {currentStep.step}
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#8C8883] uppercase">
            <Clock className="w-3.5 h-3.5" />
            <span>Horizonte: {currentStep.timing}</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#141413] font-normal">
            {currentStep.title}
          </h3>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <p className="text-base sm:text-lg text-[#3B3A36] leading-relaxed font-light">
            {currentStep.description}
          </p>

          <div className="p-5 bg-[#F0EDE6] border border-[#DDD8CE] space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#141413] font-medium">
              <Compass className="w-4 h-4 text-[#141413]" />
              <span>Acciones Clave y Protocolo</span>
            </div>
            <p className="text-xs sm:text-sm text-[#5A5854] leading-relaxed">
              {currentStep.detail}
            </p>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="text-xs font-mono text-[#8C8883]">
              FASE {activeStepIndex + 1} DE {WORK_PROCESS.length}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 text-xs font-mono uppercase border border-[#DDD8CE] hover:border-[#141413] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                Anterior
              </button>
              <button
                type="button"
                disabled={activeStepIndex === WORK_PROCESS.length - 1}
                onClick={() => setActiveStepIndex((prev) => Math.min(WORK_PROCESS.length - 1, prev + 1))}
                className="px-4 py-2 text-xs font-mono uppercase bg-[#141413] text-[#FBFBF9] hover:bg-[#2C2B29] disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-1.5"
              >
                <span>Siguiente</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
