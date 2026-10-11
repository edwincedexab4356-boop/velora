import { STUDIO_TEAM } from '../data/studioData.ts';

export function TeamSection() {
  const [director, ...seniorTeam] = STUDIO_TEAM;

  return (
    <section id="estudio" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#E8E6DF]">
      {/* Kicker */}
      <div className="flex items-center justify-between text-xs tracking-[0.2em] uppercase text-[#8C8883] mb-12">
        <span className="font-mono tabular-nums">06 / El Estudio</span>
        <span className="font-sans">Dirección Creativa & Equipo</span>
      </div>

      <div className="mb-16 max-w-3xl">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#141413] leading-tight text-balance">
          Una práctica liderada por el rigor académico y la artesanía contemporánea
        </h2>
        <p className="text-[15px] leading-relaxed text-[#5A5854] font-light mt-4">
          Con sedes en Madrid y Milán, nuestro equipo multidisciplinar reúne arquitectos colegiados, 
          historiadores del diseño y consultores estructurales comprometidos con la excelencia espacial.
        </p>
      </div>

      {/* Featured Lead Architect Portrait & Monograph (Elena Vance) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-[#FAF9F5] border border-[#E8E6DF] p-6 sm:p-10 mb-12 items-center">
        <div className="lg:col-span-5 aspect-square overflow-hidden bg-[#ECE8E1] border border-[#DDD8CE]">
          <img
            src={director.image}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/images/architect.jpg';
            }}
            alt={director.name}
            className="w-full h-full object-cover img-editorial-zoom grayscale"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#8C8883]">
              Liderazgo & Dirección de Arte
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#141413]">
              {director.name}
            </h3>
            <div className="text-sm font-sans text-[#73716E]">
              {director.role}
            </div>
          </div>

          <p className="text-base text-[#4A4844] font-light leading-relaxed">
            {director.bio}
          </p>

          <div className="pt-4 border-t border-[#E8E6DF] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#73716E] gap-2">
            <span className="font-mono">{director.credentials}</span>
            <span className="font-mono uppercase text-[#A8A49D] text-[11px]">Perfil de Demostración</span>
          </div>
        </div>
      </div>

      {/* Senior Associates and Department Heads Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {seniorTeam.map((member) => (
          <div
            key={member.id}
            className="p-6 bg-[#FAF9F5] border border-[#E8E6DF] flex flex-col justify-between space-y-6"
          >
            <div className="space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#8C8883]">
                {member.role}
              </div>
              <h4 className="font-serif text-2xl font-light text-[#141413]">
                {member.name}
              </h4>
              <p className="text-sm text-[#5A5854] font-light leading-relaxed">
                {member.bio}
              </p>
            </div>

            <div className="pt-4 border-t border-[#E8E6DF] text-xs font-mono text-[#8C8883]">
              {member.credentials}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
