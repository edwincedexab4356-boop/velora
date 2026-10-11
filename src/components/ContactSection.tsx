import { useState, useId } from 'react';
import { Send, CheckCircle2, MessageSquare, Phone, MapPin, Mail, Settings2 } from 'lucide-react';

interface ContactSectionProps {
  initialSubject?: string;
  whatsappNumber: string;
  onUpdateWhatsappNumber: (newNumber: string) => void;
}

export function ContactSection({
  initialSubject = '',
  whatsappNumber,
  onUpdateWhatsappNumber
}: ContactSectionProps) {
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const projectTypeId = useId();
  const budgetId = useId();
  const messageId = useId();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: initialSubject ? 'Residencial' : '',
    budget: '',
    message: initialSubject ? `Hola VELORA STUDIO, me gustaría recibir asesoría respecto a un proyecto similar a: "${initialSubject}".` : ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  // WhatsApp config modal toggle
  const [showPhoneConfig, setShowPhoneConfig] = useState(false);
  const [tempPhone, setTempPhone] = useState(whatsappNumber);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Por favor indique su nombre completo.';
    if (!formData.email.trim()) {
      errs.email = 'El correo electrónico es obligatorio.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Introduzca un correo electrónico válido.';
    }
    if (!formData.projectType) errs.projectType = 'Seleccione una tipología de proyecto.';
    if (!formData.budget) errs.budget = 'Indique un rango presupuestario orientativo.';
    if (!formData.message.trim() || formData.message.length < 15) {
      errs.message = 'Por favor incluya una breve descripción de su visión (mínimo 15 caracteres).';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate demonstration processing
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmittedData({ ...formData });
      }, 700);
    }
  };

  const handleResetForm = () => {
    setSubmittedData(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      message: ''
    });
    setErrors({});
  };

  // WhatsApp formatted direct link
  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, '');
  const encodedWhatsappMsg = encodeURIComponent(
    `Hola VELORA STUDIO, me pongo en contacto desde la web de demostración para consultar sobre un proyecto de tipo ${formData.projectType || 'arquitectura/interiorismo'}.`
  );
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedWhatsappMsg}`;

  return (
    <section id="contacto" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#E8E6DF]">
      {/* Kicker */}
      <div className="flex items-center justify-between text-xs tracking-[0.2em] uppercase text-[#8C8883] mb-12">
        <span className="font-mono tabular-nums">07 / Diálogo</span>
        <span className="font-sans">Iniciar Conversación Proyectual</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct Studio Contact & Physical Offices */}
        <div className="lg:col-span-5 space-y-10">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#141413] leading-tight text-balance">
              Hablemos de la escala de tu proyecto
            </h2>
            <p className="text-[15px] leading-relaxed text-[#5A5854] font-light mt-4">
              Cada gran obra comienza con una conversación sosegada. Analizamos en profundidad
              la viabilidad técnica, normativa y conceptual antes de presentar una propuesta formal.
            </p>
          </div>

          {/* Physical Offices */}
          <div className="space-y-6 pt-2">
            <div className="p-5 bg-[#FAF9F5] border border-[#E8E6DF] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#141413]">
                <MapPin className="w-3.5 h-3.5" />
                <span>Sede Madrid · Estudio Principal</span>
              </div>
              <p className="text-xs text-[#5A5854] leading-relaxed">
                Calle de Serrano, 48 — 28001 Madrid<br />
                Atención con cita previa de lunes a viernes
              </p>
            </div>

            <div className="p-5 bg-[#FAF9F5] border border-[#E8E6DF] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#141413]">
                <MapPin className="w-3.5 h-3.5" />
                <span>Atelier Milano · Curaduría & Muestras</span>
              </div>
              <p className="text-xs text-[#5A5854] leading-relaxed">
                Via Montenapoleone, 12 — 20121 Milano<br />
                Coordinación de proyectos internacionales
              </p>
            </div>
          </div>

          {/* WhatsApp Direct Link with Configurable Phone */}
          <div className="p-5 bg-[#141413] text-[#FBFBF9] space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#DDD8CE]">
                <MessageSquare className="w-4 h-4 text-[#DDD8CE]" />
                <span>Canal Directo WhatsApp</span>
              </div>
              <button
                type="button"
                onClick={() => setShowPhoneConfig(!showPhoneConfig)}
                className="text-[11px] font-mono text-[#8C8883] hover:text-[#FBFBF9] transition-colors flex items-center gap-1 cursor-pointer"
                title="Configurar número para pruebas"
              >
                <Settings2 className="w-3.5 h-3.5" />
                <span>Configurar</span>
              </button>
            </div>

            {showPhoneConfig ? (
              <div className="bg-[#1F1E1D] p-3 border border-[#3A3936] space-y-2 text-xs">
                <label className="text-[11px] text-[#DDD8CE] font-mono block">
                  Número de teléfono para enlace directo:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={tempPhone}
                    onChange={(e) => setTempPhone(e.target.value)}
                    placeholder="+34 600 000 000"
                    className="flex-1 px-2 py-1 bg-[#141413] border border-[#5A5854] text-white font-mono text-xs focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      onUpdateWhatsappNumber(tempPhone);
                      setShowPhoneConfig(false);
                    }}
                    className="px-3 py-1 bg-white text-black font-medium text-xs hover:bg-[#DDD8CE]"
                  >
                    Guardar
                  </button>
                </div>
              </div>
            ) : null}

            <p className="text-xs text-[#A8A49D] font-light leading-relaxed">
              Número del estudio: <span className="font-mono text-white">{whatsappNumber}</span>. 
              Puedes iniciar un chat inmediato para consultas urgentes o coordinación de visitas.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#FBFBF9] text-[#141413] text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#EDEAE4] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#141413]" />
              <span>Abrir chat de WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Right Column: Lead Form & Validation State */}
        <div className="lg:col-span-7 bg-[#FAF9F5] border border-[#E8E6DF] p-8 sm:p-12">
          {submittedData ? (
            /* Explicit Demonstration Submission Notice */
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#141413] font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#141413]" />
                <span>Modo Demostración Activo — Consulta Registrada</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#141413]">
                Gracias, {submittedData.name}
              </h3>

              <div className="p-5 bg-[#F0EDE6] border border-[#DDD8CE] space-y-3 text-xs leading-relaxed text-[#4A4844]">
                <div className="font-medium text-[#141413] uppercase tracking-wider font-mono">
                  Aviso técnico de integración futura:
                </div>
                <p>
                  Esta web se encuentra operando en <strong>entorno de demostración comercial</strong>.
                  Los datos introducidos han sido validados exitosamente en cliente sin enviar correos reales
                  ni transmitir información a servidores externos.
                </p>
                <div className="pt-2 border-t border-[#DDD8CE] font-mono text-[11px] space-y-1">
                  <div><strong>Tipología:</strong> {submittedData.projectType}</div>
                  <div><strong>Presupuesto orientativo:</strong> {submittedData.budget}</div>
                  <div><strong>Correo de contacto:</strong> {submittedData.email}</div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleResetForm}
                className="px-6 py-3 bg-[#141413] text-[#FBFBF9] text-xs font-mono uppercase tracking-wider hover:bg-[#2C2B29] transition-colors"
              >
                Simular otra consulta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="border-b border-[#E8E6DF] pb-4 mb-2">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#8C8883]">
                  Formulario Oficial de Solicitud
                </div>
                <div className="font-serif text-2xl text-[#141413] mt-1 font-light">
                  Formular consulta al equipo directivo
                </div>
              </div>

              {/* Name & Email Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor={nameId} className="block text-xs font-mono uppercase tracking-wider text-[#73716E] mb-2">
                    Nombre y Apellidos *
                  </label>
                  <input
                    id={nameId}
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Carmen Álvarez"
                    className={`w-full px-4 py-3 bg-[#FBFBF9] border text-sm text-[#141413] placeholder:text-[#A8A49D] focus:outline-none transition-colors ${
                      errors.name ? 'border-red-500 focus:border-red-600' : 'border-[#DDD8CE] focus:border-[#141413]'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor={emailId} className="block text-xs font-mono uppercase tracking-wider text-[#73716E] mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    id={emailId}
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="carmen@ejemplo.com"
                    className={`w-full px-4 py-3 bg-[#FBFBF9] border text-sm text-[#141413] placeholder:text-[#A8A49D] focus:outline-none transition-colors ${
                      errors.email ? 'border-red-500 focus:border-red-600' : 'border-[#DDD8CE] focus:border-[#141413]'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Phone & Project Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor={phoneId} className="block text-xs font-mono uppercase tracking-wider text-[#73716E] mb-2">
                    Teléfono (Opcional)
                  </label>
                  <input
                    id={phoneId}
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+34 600 000 000"
                    className="w-full px-4 py-3 bg-[#FBFBF9] border border-[#DDD8CE] text-sm text-[#141413] placeholder:text-[#A8A49D] focus:outline-none focus:border-[#141413] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor={projectTypeId} className="block text-xs font-mono uppercase tracking-wider text-[#73716E] mb-2">
                    Tipología de Proyecto *
                  </label>
                  <select
                    id={projectTypeId}
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className={`w-full px-4 py-3 bg-[#FBFBF9] border text-sm text-[#141413] focus:outline-none transition-colors cursor-pointer ${
                      errors.projectType ? 'border-red-500' : 'border-[#DDD8CE] focus:border-[#141413]'
                    }`}
                  >
                    <option value="">Seleccione una tipología...</option>
                    <option value="Residencial Unifamiliar">Residencial Unifamiliar / Obra Nueva</option>
                    <option value="Interiorismo de Lujo">Interiorismo de Alta Gama / Ático</option>
                    <option value="Rehabilitación Histórica">Rehabilitación Patrimonial</option>
                    <option value="Pabellón o Espacio Cultural">Pabellón / Espacio Cultural / Hospitality</option>
                    <option value="Asesoría Previa">Asesoría de Suelo y Viabilidad</option>
                  </select>
                  {errors.projectType && <p className="text-xs text-red-600 mt-1">{errors.projectType}</p>}
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label htmlFor={budgetId} className="block text-xs font-mono uppercase tracking-wider text-[#73716E] mb-2">
                  Presupuesto Orientativo Estimado *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    '€150k – €350k',
                    '€350k – €750k',
                    '€750k – €1.5M',
                    'Superior a €1.5M'
                  ].map((range) => {
                    const isSelected = formData.budget === range;
                    return (
                      <button
                        key={range}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: range })}
                        className={`p-2.5 text-xs text-center border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#141413] text-[#FBFBF9] border-[#141413]'
                            : 'bg-[#FBFBF9] text-[#5A5854] border-[#DDD8CE] hover:border-[#141413]'
                        }`}
                      >
                        {range}
                      </button>
                    );
                  })}
                </div>
                {errors.budget && <p className="text-xs text-red-600 mt-1">{errors.budget}</p>}
              </div>

              {/* Message / Vision */}
              <div>
                <label htmlFor={messageId} className="block text-xs font-mono uppercase tracking-wider text-[#73716E] mb-2">
                  Visión del Proyecto o Necesidades Específicas *
                </label>
                <textarea
                  id={messageId}
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detalla ubicación aproximada, superficie deseada, plazos de inicio y aspiraciones espaciales..."
                  className={`w-full px-4 py-3 bg-[#FBFBF9] border text-sm text-[#141413] placeholder:text-[#A8A49D] focus:outline-none transition-colors ${
                    errors.message ? 'border-red-500 focus:border-red-600' : 'border-[#DDD8CE] focus:border-[#141413]'
                  }`}
                />
                {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-[11px] font-mono text-[#8C8883]">
                  * CAMPOS OBLIGATORIOS PARA EL ESTUDIO PREVIO
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 bg-[#141413] text-[#FBFBF9] text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#2C2B29] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Validando Consulta...</span>
                  ) : (
                    <>
                      <span>Transmitir Propuesta</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
