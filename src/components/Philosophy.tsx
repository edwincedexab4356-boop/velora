import { useState } from 'react';
import { PHILOSOPHY_PILLARS } from '../data/studioData.ts';

const MATERIAL_SWATCHES = [
  {
    name: 'Travertino Navona',
    origin: 'Tívoli, Italia',
    finish: 'Corte al contra y apomazado sedoso',
    toneClass: 'bg-[#DDD4C4] border-[#CCC2B0]',
    notes: 'Porosidad natural sellada con resina mate transparente; calidez mineral táctil.'
  },
  {
    name: 'Caliza de Campaspero',
    origin: 'Valladolid, España',
    finish: 'Abujardado suave artesanal',
    toneClass: 'bg-[#E3DFD5] border-[#D0CBC0]',
    notes: 'Tono marfil terroso con fósiles visibles que absorbe y difunde la luz de poniente.'
  },
  {
    name: 'Roble Americano Ahumado',
    origin: 'Apalaches / Ebanistería Madrid',
    finish: 'Cepillado y aceitado natural cera carnauba',
    toneClass: 'bg-[#5C4B3C] border-[#4A3C2F]',
    notes: 'Veta profunda y táctil; aporta calidez acústica y serenidad en paneles ciegos.'
  },
  {
    name: 'Hormigón Blanco Texturado',
    origin: 'In situ con encofrado de pino cepillado',
    finish: 'Desencofrado visto sin aditivos sintéticos',
    toneClass: 'bg-[#DCDAD5] border-[#C8C5BE]',
    notes: 'Registra el grano milimétrico de la madera de entablillado como un bajorrelieve.'
  },
  {
    name: 'Acero Pavonado en Frío',
    origin: 'Forja de precisión Cantabria',
    finish: 'Bruñido a mano con cera protectora',
    toneClass: 'bg-[#2B2D2F] border-[#1E2022]',
    notes: 'Reflejos azulados y carbón que contrastan con la claridad de la piedra.'
  }
];

export function Philosophy() {
  const [selectedMaterial, setSelectedMaterial] = useState(MATERIAL_SWATCHES[0]);

  return (
    <section id="filosofia" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#E8E6DF]">
      {/* Editorial Section Kicker */}
      <div className="flex items-center justify-between text-xs tracking-[0.2em] uppercase text-[#8C8883] mb-12">
        <span className="font-mono tabular-nums">01 / Manifiesto</span>
        <span className="font-sans">Nuestra Filosofía Espacial</span>
      </div>

      {/* Asymmetric composition: Left large quote & narrative, Right 4 Pillars */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
        {/* Left Column: Philosophical Thesis */}
        <div className="lg:col-span-5 space-y-8">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#141413] leading-[1.15] text-balance">
            «Construir no es añadir materia al paisaje, sino afilar el silencio para que la luz hable.»
          </h2>

          <div className="space-y-4 text-[15px] leading-[1.7] text-[#5A5854] font-light">
            <p>
              Fundado con la convicción de que la arquitectura contemporánea debe trascender las modas efímeras,
              VELORA STUDIO concibe cada proyecto desde la escala humana, la honestidad constructiva y el respeto 
              al entorno físico e histórico.
            </p>
            <p>
              Rechazamos la ornamentación superficial. Para nosotros, el auténtico lujo radica en la precisión 
              geométrica de las juntas, la textura genuina de los materiales nobles y la serenidad que envuelve 
              a quienes habitan nuestras creaciones.
            </p>
          </div>

          <div className="pt-2 border-t border-[#E8E6DF] flex items-center justify-between text-xs text-[#8C8883] font-mono">
            <span>VELORA MONOGRAPH</span>
            <span>CAPÍTULO FUNDACIONAL</span>
          </div>
        </div>

        {/* Right Column: 4 Roman Numeral Pillars */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
          {PHILOSOPHY_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="group p-6 sm:p-8 bg-[#F5F4EE]/60 border border-[#E8E6DF] hover:border-[#141413] transition-colors duration-300 relative flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-2xl font-light text-[#8C8883] group-hover:text-[#141413] transition-colors">
                  {pillar.number}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#141413] mt-3 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#6E6B66] font-light">
                  {pillar.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E8E6DF]/70 text-[11px] font-mono tracking-wider uppercase text-[#8C8883]">
                Principio Innegociable
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tactile Material Library (Interactive Swatch Bar) */}
      <div className="bg-[#141413] text-[#FBFBF9] p-8 md:p-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#2C2B29] pb-6 mb-8 gap-4">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#8C8883]">
              Materia & Superficie
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-light mt-1 text-[#FBFBF9]">
              Paleta Táctil del Estudio
            </h3>
          </div>
          <p className="text-xs text-[#DDD8CE]/70 max-w-md font-light leading-relaxed">
            Muestras minerales y botánicas seleccionadas en canteras y aserraderos históricos. 
            Haz clic para examinar el tratamiento y procedencia de cada material.
          </p>
        </div>

        {/* Swatch Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8">
          {MATERIAL_SWATCHES.map((mat) => {
            const isSelected = selectedMaterial.name === mat.name;
            return (
              <button
                key={mat.name}
                type="button"
                onClick={() => setSelectedMaterial(mat)}
                className={`p-3 text-left transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? 'border-[#FBFBF9] bg-[#222120]'
                    : 'border-[#2C2B29] hover:border-[#5A5854] bg-[#1A1918]'
                }`}
              >
                <div className={`w-full h-10 mb-2 border ${mat.toneClass}`} />
                <div className="text-xs font-medium text-[#FBFBF9] truncate">
                  {mat.name}
                </div>
                <div className="text-[10px] text-[#8C8883] font-mono truncate">
                  {mat.origin}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Material Detail Inspection */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#1A1918] p-6 border border-[#2C2B29] items-center">
          <div className="md:col-span-3">
            <div className="text-[10px] font-mono uppercase text-[#8C8883]">
              Material Activo
            </div>
            <div className="font-serif text-xl text-[#FBFBF9] mt-0.5">
              {selectedMaterial.name}
            </div>
            <div className="text-xs text-[#DDD8CE]/80 font-mono mt-1">
              {selectedMaterial.origin}
            </div>
          </div>

          <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-[#2C2B29] pt-3 md:pt-0 md:pl-6">
            <div className="text-[10px] font-mono uppercase text-[#8C8883]">
              Acabado & Textura
            </div>
            <div className="text-xs text-[#FBFBF9]/90 mt-1 leading-relaxed">
              {selectedMaterial.finish}
            </div>
          </div>

          <div className="md:col-span-5 border-t md:border-t-0 md:border-l border-[#2C2B29] pt-3 md:pt-0 md:pl-6">
            <div className="text-[10px] font-mono uppercase text-[#8C8883]">
              Criterio de Aplicación
            </div>
            <div className="text-xs text-[#DDD8CE]/75 mt-1 leading-relaxed">
              {selectedMaterial.notes}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
