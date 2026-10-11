import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Filosofía', href: '#filosofia' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Estudio', href: '#estudio' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Bar Contract: 3 zones separated by gap-8 (Brand - Links - 1 Action) */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FBFBF9]/95 backdrop-blur-md border-b border-[#E8E6DF] py-4 shadow-[0_4px_24px_rgba(0,0,0,0.03)]'
            : 'bg-[#FBFBF9]/80 backdrop-blur-sm py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="group flex items-baseline tracking-[0.2em] font-serif text-xl md:text-2xl font-light text-[#141413] whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
            aria-label="VELORA STUDIO - Inicio"
          >
            VELORA
            <span className="font-sans font-light tracking-[0.3em] text-[0.65em] ml-2 text-[#73716E]">
              STUDIO
            </span>
          </a>

          {/* Zone 2: 4-5 concise single-line text links */}
          <nav
            aria-label="Navegación principal"
            className="hidden md:flex items-center gap-8 lg:gap-10 text-[13px] tracking-[0.1em] uppercase font-sans text-[#73716E]"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="whitespace-nowrap shrink-0 hover:text-[#141413] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#141413] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-[12px] tracking-[0.15em] uppercase font-medium bg-[#141413] text-[#FBFBF9] hover:bg-[#2C2B29] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141413] focus-visible:ring-offset-2"
            >
              <span>Iniciar Consulta</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#DDD8CE]" />
            </button>
          </div>

          {/* Mobile hamburger trigger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenContact}
              className="px-3 py-1.5 text-[11px] tracking-[0.12em] uppercase bg-[#141413] text-[#FBFBF9]"
            >
              Consulta
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#141413] hover:text-[#73716E] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-[#FBFBF9] pt-24 px-8 pb-12 flex flex-col justify-between md:hidden animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="space-y-6 pt-4">
            <div className="text-[11px] tracking-[0.2em] uppercase text-[#8C8883] border-b border-[#E8E6DF] pb-3">
              Navegación del Estudio
            </div>
            <nav className="flex flex-col space-y-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="font-serif text-3xl font-light text-[#141413] hover:translate-x-2 transition-transform"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="border-t border-[#E8E6DF] pt-6 space-y-4">
            <div className="text-xs font-mono text-[#8C8883]">
              MADRID · MILÁN · SUIZA
            </div>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3.5 bg-[#141413] text-[#FBFBF9] text-xs uppercase tracking-[0.15em] font-medium flex items-center justify-center gap-2"
            >
              <span>Hablemos de tu Proyecto</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
