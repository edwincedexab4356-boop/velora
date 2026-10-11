import heroImg from '../assets/images/hero_architecture_velora_1791739491934.jpg';
import villaImg from '../assets/images/project_brutalist_villa_1791739501396.jpg';
import penthouseImg from '../assets/images/project_penthouse_interior_1791739510964.jpg';
import pavilionImg from '../assets/images/project_stone_pavilion_1791739520804.jpg';
import architectImg from '../assets/images/architect_portrait_elena_1791739529007.jpg';

export const HERO_IMAGE = heroImg;

export interface Project {
  id: string;
  title: string;
  category: 'Residencial' | 'Interiorismo' | 'Pabellón' | 'Rehabilitación';
  location: string;
  year: string;
  area: string;
  summary: string;
  concept: string;
  materials: string[];
  mainImage: string;
  secondaryImage?: string;
  curatorNote: string;
  awards?: string;
}

export interface Service {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  approach: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  timing: string;
  description: string;
  detail: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  client: string;
  projectType: string;
  city: string;
  year: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  credentials: string;
  image?: string;
}

export const STUDIO_PROJECTS: Project[] = [
  {
    id: 'residencia-mirador-cantabrico',
    title: 'Residencia Mirador del Cantábrico',
    category: 'Residencial',
    location: 'Santander, España',
    year: '2025',
    area: '620 m²',
    summary: 'Volumetría monolítica de hormigón entablillado y planos de agua orientados al horizonte atlántico.',
    concept: 'Un diálogo radical entre la solidez telúrica de la roca caliza y la transparencia infinita del mar. Los volúmenes se proyectan en voladizo para capturar la brisa marina y la luz cambiante del norte.',
    materials: ['Hormigón blanco entablillado', 'Piedra caliza abujardada', 'Vidrio laminado bajo emisivo', 'Madera de teca recuperada'],
    mainImage: heroImg,
    curatorNote: 'Seleccionado para la Muestra Bienal de Arquitectura Ibérica 2025.',
    awards: 'Premio Obra del Año — Arquitectura Residencial Privada'
  },
  {
    id: 'casa-monolito-olivo',
    title: 'Casa Monolito & Olivo',
    category: 'Residencial',
    location: 'Costa Brava, Girona',
    year: '2024',
    area: '510 m²',
    summary: 'Geometría escultórica de hormigón ocre y mampostería seca enmarcando un olivo centenario.',
    concept: 'Estructurada en torno a un patio interior de contemplación, la vivienda abraza la topografía en pendiente con terrazas escalonadas y una piscina desbordante que funde el agua con el cielo mediterráneo.',
    materials: ['Hormigón pigmentado tierra', 'Piedra de cantera local', 'Roble ahumado cepillado', 'Acero corten satinado'],
    mainImage: villaImg,
    curatorNote: 'Publicado en Monocle Design Awards y Cereal Magazine Vol. 24.',
    awards: 'Mención Especial del Jurado — FAD de Arquitectura'
  },
  {
    id: 'atico-salamanca-360',
    title: 'Ático Salamanca 360°',
    category: 'Interiorismo',
    location: 'Barrio de Salamanca, Madrid',
    year: '2025',
    area: '380 m²',
    summary: 'Atmósfera serena de líneas depuradas, boiseries de nogal estriado y travertino apomazado.',
    concept: 'Reconfiguración integral de un triplex clásico en un santuario contemporáneo. La distribución abierta prioriza las vistas panorámicas al atardecer mediante cerramientos de vidrio de suelo a techo y una iluminación escultórica indirecta.',
    materials: ['Travertino Navona apomazado', 'Nogal americano acanalado', 'Lino belga lavado', 'Latón cepillado artesanal'],
    mainImage: penthouseImg,
    curatorNote: 'Portada especial "Interiors of Distinction", Architectural Digest España.',
    awards: 'Premio Nacional de Interiorismo Residencial'
  },
  {
    id: 'pabellon-botanico-basalto',
    title: 'Pabellón Botánico & Basalto',
    category: 'Pabellón',
    location: 'Sierra de Guadarrama, Madrid',
    year: '2024',
    area: '240 m²',
    summary: 'Estructura ligera de madera carbonizada y muros ciclópeos de basalto sobre estanque reflectante.',
    concept: 'Espacio concebido para la contemplación botánica y eventos de arte privado. La pérgola de madera oscurecida modula las sombras cenitales mientras el estanque perimetral refleja el paisaje forestal.',
    materials: ['Basalto volcánico natural', 'Madera Yakisugi Shou Sugi Ban', 'Estructura de acero pavonado', 'Granito abujardado'],
    mainImage: pavilionImg,
    curatorNote: 'Distinguido por la Fundación Mies van der Rohe en la categoría de Pequeña Escala.',
    awards: 'Iconic Awards: Innovative Architecture Best of Best'
  },
  {
    id: 'palacete-san-jeronimo',
    title: 'Palacete San Jerónimo',
    category: 'Rehabilitación',
    location: 'Centro Histórico, Sevilla',
    year: '2024',
    area: '780 m²',
    summary: 'Restauración sosegada de una casona noble del siglo XVIII fusionada con espacialidad vanguardista.',
    concept: 'Preservación rigurosa de arquerías de ladrillo original y artesonados mudéjares, insertando cápsulas habitables de hormigón pulido y lucernarios escultóricos que bañan el patio claustral de luz cenital.',
    materials: ['Ladrillo manual recuperado', 'Morteros de cal pura', 'Microcemento mineral continuo', 'Vidrio óptico templado'],
    mainImage: heroImg,
    curatorNote: 'Premio Patrimonio Sostenible Hispania Nostra 2024.',
    awards: 'Medalla de Honor de la Real Academia de Bellas Artes'
  },
  {
    id: 'galeria-showroom-brera',
    title: 'Galería & Espacio Escultórico Brera',
    category: 'Interiorismo',
    location: 'Distretto di Brera, Milán',
    year: '2025',
    area: '430 m²',
    summary: 'Intervención minimalista en antigua fundición milanesa para exposición de alta joyería y diseño.',
    concept: 'Un contenedor silencioso donde las texturas minerales del yeso texturizado y los pilares de hierro forjado original dialogan con vitrinas suspendidas de cuarcita blanca y luz rasante.',
    materials: ['Cuarcita de Vals', 'Mortero a la cal artesanal', 'Hierro fundido restaurado', 'Luminarias de diseño a medida'],
    mainImage: penthouseImg,
    curatorNote: 'Exhibido durante Fuorisalone Milano Design Week.',
    awards: 'Milano Design Award for Spatial Excellence'
  }
];

export const STUDIO_SERVICES: Service[] = [
  {
    number: '01',
    title: 'Arquitectura Integral',
    subtitle: 'De la topografía al detalle constructivo milimétrico',
    description: 'Concebimos obras de nueva planta uniendo una visión plástica irrepetible con la más estricta exigencia técnica. Diseñamos para el lugar, la luz y la permanencia.',
    deliverables: [
      'Análisis bioclimático y topográfico avanzado',
      'Modelado BIM volumétrico y maquetas físicas',
      'Ingeniería estructural y eficiencia energética Passivhaus',
      'Gestión integral de licencias y visados colegiales'
    ],
    approach: 'Tratamos cada encargo como una pieza escultórica única que responde de forma irrepetible a su emplazamiento geográfico y al modo de vida de quienes la habitarán.'
  },
  {
    number: '02',
    title: 'Diseño Interior & Curaduría',
    subtitle: 'Atmósferas sensoriales, ebanistería noble y arte',
    description: 'Diseñamos la piel interna de cada espacio: texturas que invitan al tacto, acústica envolvente, iluminación escenográfica y mobiliario producido a medida en talleres de élite.',
    deliverables: [
      'Desarrollo de carpintería y ebanistería a medida',
      'Curaduría y adquisición de piezas de arte contemporáneo',
      'Diseño lumínico circadiano y control domótico discreto',
      'Selección de textiles nobles de fibras naturales'
    ],
    approach: 'El verdadero lujo reside en la armonía de lo imperceptible: el tacto de un pasamanos de roble macizo, la temperatura del travertino o la graduación natural de la penumbra.'
  },
  {
    number: '03',
    title: 'Rehabilitación & Patrimonio',
    subtitle: 'Diálogo contemporáneo con la memoria del lugar',
    description: 'Intervenimos en inmuebles con valor patrimonial rescatando su alma original y dotándolos de las más altas prestaciones de habitabilidad, aislamiento y vanguardia.',
    deliverables: [
      'Estudio arqueológico y patológico estructural',
      'Restauración de materiales históricos con morteros tradicionales',
      'Inserción de instalaciones invisibles de alta eficiencia',
      'Consolidación y modernización sin pérdida de carácter'
    ],
    approach: 'No replicamos el pasado: establecemos un diálogo leal entre el legado histórico y la honestidad formal de nuestra época contemporánea.'
  },
  {
    number: '04',
    title: 'Dirección Técnica & Asesoría',
    subtitle: 'Precisión presupuestaria y supervisión en obra',
    description: 'Garantizamos que la visión proyectada se materialice sin desvíos. Controlamos cada fase con libro de órdenes riguroso, ensayos de laboratorio y fidelidad de ejecución.',
    deliverables: [
      'Presupuesto ciego y auditoría de costes de contrata',
      'Supervisión presencial diaria de ejecuciones críticas',
      'Control de calidad de hormigones, carpinterías y sellados',
      'Asesoría técnica y legal previa a la adquisición de suelo'
    ],
    approach: 'El rigor presupuestario y el cumplimiento estricto del cronograma son tan esenciales para nosotros como la belleza del dibujo original.'
  }
];

export const WORK_PROCESS: ProcessStep[] = [
  {
    step: 'Etapa 01',
    title: 'Inmersión & Escucha Analítica',
    timing: 'Semanas 1 – 3',
    description: 'Comprendemos a fondo las aspiraciones del cliente, el entorno territorial, la orientación solar y los condicionantes normativos específicos.',
    detail: 'Sesiones de definición de programa vital, levantamiento topográfico milimétrico y formulación del manifiesto rector del proyecto.'
  },
  {
    step: 'Etapa 02',
    title: 'Anteproyecto & Exploración Material',
    timing: 'Semanas 4 – 8',
    description: 'Desarrollamos las primeras intenciones formales a través de bocetos, maquetas de estudio, tablas de texturas reales y recorridos volumétricos tridimensionales.',
    detail: 'Presentación del concepto espacial con muestras físicas de piedra, madera y metal en nuestro estudio de Madrid o Milán.'
  },
  {
    step: 'Etapa 03',
    title: 'Proyecto Ejecutivo & Ingeniería de Detalle',
    timing: 'Semanas 9 – 16',
    description: 'Definimos cada encuentro constructivo a escala 1:5 y 1:1. Cálculo estructural, instalaciones invisibles y redacción de mediciones exhaustivas.',
    detail: 'Pliegos técnicos definitivos listos para licitación con empresas constructoras seleccionadas por su maestría artesanal.'
  },
  {
    step: 'Etapa 04',
    title: 'Dirección de Obra & Maestría Constructiva',
    timing: 'Ejecución integral',
    description: 'Nuestra presencia constante en la obra asegura que la materialidad y la precisión geométrica se cumplan con milimétrica fidelidad.',
    detail: 'Visitas técnicas semanales, resolución in situ de encuentros complejos y certificación rigurosa de cada partida ejecutada.'
  },
  {
    step: 'Etapa 05',
    title: 'Curaduría Final & Puesta en Escena',
    timing: 'Entrega de llave',
    description: 'Montaje de piezas de diseño, ajuste de escenas lumínicas, puesta en marcha de sistemas y entrega con libro de mantenimiento del edificio.',
    detail: 'Un traspaso pausado y protocolario para que la experiencia de habitar la obra comience desde el primer segundo con serenidad absoluta.'
  }
];

export const STUDIO_STATS = [
  {
    value: '46+',
    label: 'Obras Proyectadas',
    clarification: 'Enclaves residenciales y culturales en España, Italia y Suiza'
  },
  {
    value: '14',
    label: 'Años de Trayectoria',
    clarification: 'Práctica ininterrumpida explorando la materia y la luz'
  },
  {
    value: '11',
    label: 'Reconocimientos',
    clarification: 'Premios de arquitectura ibérica y publicaciones internacionales'
  },
  {
    value: '99%',
    label: 'Fidelidad Proyectual',
    clarification: 'Alineamiento estricto entre renders de anteproyecto y obra entregada'
  }
];

export const STUDIO_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'VELORA no construyó una casa: esculpió un refugio donde la luz de cada atardecer transforma por completo el espacio. El nivel de detalle en el hormigón y la madera roza la perfección artesanal.',
    client: 'Carlos & Beatriz Méndez',
    projectType: 'Residencia Mirador del Cantábrico',
    city: 'Santander',
    year: '2025'
  },
  {
    id: 'test-2',
    quote: 'La serenidad que se respira al cruzar la puerta de nuestro ático en Madrid es indescriptible. Lograron que 380 metros cuadrados se sientan a la vez monumentales y cálidamente íntimos.',
    client: 'Dra. Victoria Echeverría',
    projectType: 'Ático Salamanca 360°',
    city: 'Madrid',
    year: '2025'
  },
  {
    id: 'test-3',
    quote: 'El respeto con el que intervinieron en los muros históricos de Sevilla, insertando luz cenital y carpinterías invisibles, demostró una madurez proyectual reservada a muy pocos estudios en Europa.',
    client: 'Marcello & Elena Falcone',
    projectType: 'Palacete San Jerónimo',
    city: 'Sevilla',
    year: '2024'
  }
];

export const STUDIO_TEAM: TeamMember[] = [
  {
    id: 'elena-vance',
    name: 'Elena Vance, Ph.D.',
    role: 'Socia Fundadora & Directora Creativa',
    bio: 'Formada en la ETSAM de Madrid y la ETH de Zúrich. Doctora en Composición Arquitectónica. Su trabajo investiga la resonancia emocional del silencio y el vacío en la arquitectura contemporánea.',
    credentials: 'Colegiada COAM nº 18.421 · Jurado Bienal de Arquitectura 2023',
    image: architectImg
  },
  {
    id: 'mateo-soler',
    name: 'Mateo Soler',
    role: 'Director de Arquitectura & Construcción',
    bio: 'Especialista en estructuras complejas de hormigón arquitectónico e ingeniería bioclimática. Con más de quince años liderando obras monumentales de geometría audaz.',
    credentials: 'Máster en Tecnologías de la Edificación · COAC nº 9.840'
  },
  {
    id: 'sofia-lindqvist',
    name: 'Sofia Lindqvist',
    role: 'Directora de Interiorismo & Materialidad',
    bio: 'Procedente de Estocolmo y radicada en Milán. Experta en historia del diseño del siglo XX, artes aplicadas textiles y curaduría de mármoles de cantera mediterránea.',
    credentials: 'Politecnico di Milano · ADI Associazione per il Disegno Industriale'
  },
  {
    id: 'marc-valdes',
    name: 'Marc Valdés',
    role: 'Responsable de Sostenibilidad & Passivhaus',
    bio: 'Diseña la eficiencia invisible de cada proyecto para asegurar que el lujo contemporáneo mantenga un balance de huella de carbono neutra y confort higrotérmico supremo.',
    credentials: 'Certified Passivhaus Designer · BREEAM Associate'
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    number: 'I',
    title: 'Materia Pura',
    description: 'Rechazamos las imitaciones. Empleamos piedra viva, maderas que envejecen con nobleza y hormigones que registran la memoria del encofrado.'
  },
  {
    number: 'II',
    title: 'Luz como Escultura',
    description: 'La luz solar no es un aditamento secundario: es el primer material de construcción que modula las horas, las sombras y la intimidad.'
  },
  {
    number: 'III',
    title: 'Silencio Espacial',
    description: 'Despejamos el ruido innecesario para dejar que las proporciones áureas y las fugas visuales creen una calma profunda y permanente.'
  },
  {
    number: 'IV',
    title: 'Rigor Milimétrico',
    description: 'El detalle no es un adorno: es la evidencia del respeto absoluto hacia la obra, el constructor y quien la habita.'
  }
];
