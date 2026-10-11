import { useState } from 'react';
import { MessageSquare, X, Send, Settings, Check } from 'lucide-react';

interface FloatingWhatsAppProps {
  whatsappNumber: string;
  onUpdateWhatsappNumber: (newNum: string) => void;
}

export function FloatingWhatsApp({
  whatsappNumber,
  onUpdateWhatsappNumber
}: FloatingWhatsAppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('Hola VELORA STUDIO, me gustaría consultar la disponibilidad para un nuevo encargo arquitectónico.');
  const [editingNumber, setEditingNumber] = useState(false);
  const [tempNum, setTempNum] = useState(whatsappNumber);

  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, '');
  const finalUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(userMsg)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded chat / info popover */}
      {isOpen && (
        <div
          className="mb-3 w-80 sm:w-96 bg-[#FBFBF9] border border-[#DDD8CE] shadow-2xl p-5 text-[#141413] animate-in fade-in slide-in-from-bottom-2 duration-200"
          role="dialog"
          aria-labelledby="whatsapp-dialog-title"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#E8E6DF] pb-3 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-[#141413] rounded-full" />
              <div>
                <div id="whatsapp-dialog-title" className="text-xs font-mono uppercase tracking-wider text-[#141413] font-medium">
                  VELORA Concierge
                </div>
                <div className="text-[11px] text-[#8C8883] font-mono">
                  {whatsappNumber}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setEditingNumber(!editingNumber)}
                className="p-1 text-[#8C8883] hover:text-[#141413] transition-colors"
                title="Configurar número"
              >
                <Settings className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 text-[#8C8883] hover:text-[#141413] transition-colors"
                aria-label="Cerrar chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Configuration sub-pane if toggled */}
          {editingNumber && (
            <div className="mb-4 p-3 bg-[#F0EDE6] border border-[#DDD8CE] text-xs space-y-2">
              <label className="text-[11px] font-mono text-[#5A5854] block">
                Modificar número para pruebas:
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={tempNum}
                  onChange={(e) => setTempNum(e.target.value)}
                  className="flex-1 px-2 py-1 bg-white border border-[#DDD8CE] text-xs font-mono"
                  placeholder="+34 910 000 000"
                />
                <button
                  type="button"
                  onClick={() => {
                    onUpdateWhatsappNumber(tempNum);
                    setEditingNumber(false);
                  }}
                  className="px-2.5 py-1 bg-[#141413] text-white text-[11px] font-mono flex items-center gap-1"
                >
                  <Check className="w-3 h-3" />
                  <span>Aplicar</span>
                </button>
              </div>
            </div>
          )}

          {/* Message preview and prompt */}
          <div className="space-y-3">
            <p className="text-xs text-[#5A5854] font-light leading-relaxed">
              Inicia un chat directo con nuestro equipo de atención a nuevos proyectos.
            </p>

            <textarea
              rows={3}
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              className="w-full p-2.5 bg-white border border-[#DDD8CE] text-xs text-[#141413] focus:outline-none focus:border-[#141413]"
              placeholder="Escribe tu mensaje previo..."
            />

            <a
              href={finalUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full py-2.5 bg-[#141413] text-[#FBFBF9] text-xs uppercase tracking-[0.15em] font-medium flex items-center justify-center gap-2 hover:bg-[#2C2B29] transition-colors"
            >
              <span>Abrir WhatsApp Web / App</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-[#141413] text-[#FBFBF9] shadow-lg flex items-center justify-center hover:bg-[#2C2B29] hover:scale-105 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141413] focus-visible:ring-offset-2"
        aria-label="Abrir contacto por WhatsApp"
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageSquare className="w-5 h-5 text-[#DDD8CE]" />}
      </button>
    </div>
  );
}
