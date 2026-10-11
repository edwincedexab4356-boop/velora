import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 450);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-40 w-11 h-11 bg-[#FBFBF9] border border-[#DDD8CE] text-[#141413] shadow-md flex items-center justify-center hover:bg-[#141413] hover:text-[#FBFBF9] hover:border-[#141413] transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black"
      aria-label="Volver arriba de la página"
      title="Volver al inicio"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}
