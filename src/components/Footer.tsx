import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#141413] text-[#FBFBF9] border-t border-[#2C2B29] pt-20 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Wordmark & Editorial Tagline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#2C2B29] pb-12 gap-8">
          <div>
            <span className="font-serif text-3xl sm:text-4xl tracking-[0.2em] font-light block">
              VELORA STUDIO
            </span>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#8C8883] mt-2">
              Práctica de Arquitectura Contemporánea & Interiorismo de Alta Gama
            </p>
          </div>

          <div className="text-xs font-mono text-[#DDD8CE]/60 max-w-md leading-relaxed">
            PROYECTANDO ESPACIOS SINGULARES EN MADRID, MILÁN, ZÚRICH Y LA COSTA MEDITERRÁNEA DESDE 2012.
          </div>
        </div>

        {/* 4 Columns of Navigation, Information, Locations & Demo Disclaimer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-xs text-[#A8A49D]">
          {/* Navigation */}
          <div className="space-y-4">
            <div className="font-mono uppercase text-[#FBFBF9] tracking-wider">
              Navegación
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="#proyectos" className="hover:text-white transition-colors">Proyectos Monográficos</a>
              </li>
              <li>
                <a href="#filosofia" className="hover:text-white transition-colors">Filosofía & Materia</a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">Disciplinas & Servicios</a>
              </li>
              <li>
                <a href="#proceso" className="hover:text-white transition-colors">Itinerario de Trabajo</a>
              </li>
              <li>
                <a href="#estudio" className="hover:text-white transition-colors">El Equipo Directivo</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">Contacto & Cita Previa</a>
              </li>
            </ul>
          </div>

          {/* Sedes */}
          <div className="space-y-4">
            <div className="font-mono uppercase text-[#FBFBF9] tracking-wider">
              Sedes Oficiales
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-white font-medium">Madrid (España)</div>
                <div className="text-[#8C8883] mt-0.5">Calle de Serrano, 48 — 28001</div>
                <div className="text-[#8C8883] font-mono mt-0.5">+34 910 882 140</div>
              </div>
              <div className="pt-2 border-t border-[#2C2B29]">
                <div className="text-white font-medium">Milano (Italia)</div>
                <div className="text-[#8C8883] mt-0.5">Via Montenapoleone, 12 — 20121</div>
                <div className="text-[#8C8883] font-mono mt-0.5">+39 02 8900 4521</div>
              </div>
            </div>
          </div>

          {/* Publicaciones & Redes */}
          <div className="space-y-4">
            <div className="font-mono uppercase text-[#FBFBF9] tracking-wider">
              Archivo & Difusión
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 text-[#5A5854]" />
                </a>
              </li>
              <li>
                <a href="https://archdaily.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  <span>ArchDaily Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-[#5A5854]" />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  <span>LinkedIn Corporate</span>
                  <ArrowUpRight className="w-3 h-3 text-[#5A5854]" />
                </a>
              </li>
              <li>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  <span>Pinterest Moodboards</span>
                  <ArrowUpRight className="w-3 h-3 text-[#5A5854]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Demo Disclaimer / Privacy Notice */}
          <div className="space-y-4">
            <div className="font-mono uppercase text-[#FBFBF9] tracking-wider">
              Aviso Legal & Demostración
            </div>
            <p className="leading-relaxed text-[#8C8883]">
              VELORA STUDIO es una marca conceptual desarrollada exclusivamente con fines de demostración de diseño, arquitectura de interfaces y dirección creativa digital.
            </p>
            <p className="text-[11px] text-[#6E6B66] border-t border-[#2C2B29] pt-2">
              Privacidad y RGPD: No se recopilan cookies de rastreo comercial ni se almacenan credenciales de terceros.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2C2B29] flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-mono text-[#6E6B66] gap-4">
          <div>
            © {currentYear} VELORA STUDIO. TODOS LOS DERECHOS RESERVADOS.
          </div>
          <div className="flex items-center gap-4">
            <span>DISEÑO EDITORIAL & ARQUITECTURA DIGITAL</span>
            <span>·</span>
            <span className="text-[#A8A49D]">VERSIÓN 2026.1 DEMO</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
