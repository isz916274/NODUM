export type ServiceFeature = {
  icon: "workflow" | "layers" | "settings";
  title: string;
  description: string;
};

export type ServicePageContent = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  sectionEyebrow: string;
  sectionTitle: string;
  sectionDescription: string;
  features: ServiceFeature[];
  detailTitle: string;
  detailDescription: string;
  capabilities: string[];
  noteTitle: string;
  note: string;
  ctaTitle: string;
  ctaDescription: string;
};

export const servicePages = {
  software: {
    eyebrow: "Desarrollo de software",
    title: "Tecnología pensada para",
    highlight: "tu operación.",
    description:
      "Diseñamos y desarrollamos software a medida para resolver necesidades concretas, conectar procesos y acompañar la forma en que trabaja tu empresa.",
    sectionEyebrow: "Software a la medida",
    sectionTitle: "Una solución construida desde el problema real.",
    sectionDescription:
      "Partimos de entender el proceso y a las personas que lo utilizan para definir una solución clara, viable y preparada para evolucionar.",
    features: [
      {
        icon: "workflow",
        title: "Procesos conectados",
        description:
          "Digitaliza tareas y comparte información entre áreas con herramientas alineadas a tu operación.",
      },
      {
        icon: "layers",
        title: "Sistemas integrados",
        description:
          "Planea cómo intercambiar información con los sistemas y servicios que ya forman parte del trabajo.",
      },
      {
        icon: "settings",
        title: "Evolución gradual",
        description:
          "Define una base técnica que permita ajustar y ampliar la solución conforme cambien tus necesidades.",
      },
    ],
    detailTitle: "Del reto operativo a una herramienta usable.",
    detailDescription:
      "El alcance depende de cada proyecto. Antes de proponer tecnología, aclaramos qué debe resolver la solución, quién la usará y cómo se integrará en el entorno existente.",
    capabilities: [
      "Aplicaciones internas para equipos y operaciones",
      "Automatización de tareas y flujos de trabajo",
      "Integraciones entre plataformas y fuentes de información",
      "Mantenimiento y evolución de productos existentes",
    ],
    noteTitle: "Enfoque",
    note: "Alcance, prioridades y tecnología se definen contigo; no partimos de paquetes cerrados.",
    ctaTitle: "Cuéntanos qué proceso quieres mejorar.",
    ctaDescription:
      "Revisemos el contexto y encontremos un primer alcance claro para tu proyecto.",
  },
  web: {
    eyebrow: "Desarrollo web",
    title: "Plataformas web diseñadas para",
    highlight: "trabajar mejor.",
    description:
      "Creamos plataformas web y experiencias digitales que responden a los objetivos, procesos y usuarios de cada organización.",
    sectionEyebrow: "Plataformas web",
    sectionTitle: "Una experiencia digital con propósito.",
    sectionDescription:
      "Desde portales y aplicaciones web hasta herramientas de operación: cada proyecto comienza con una necesidad y un recorrido de usuario definidos.",
    features: [
      {
        icon: "workflow",
        title: "Experiencia clara",
        description:
          "Organiza la información y las acciones para que cada persona encuentre lo que necesita.",
      },
      {
        icon: "layers",
        title: "Base escalable",
        description:
          "Construye sobre una arquitectura mantenible, preparada para incorporar nuevas capacidades.",
      },
      {
        icon: "settings",
        title: "Conexión con tu ecosistema",
        description:
          "Considera desde el diseño cómo convivirá la plataforma con tus herramientas y procesos.",
      },
    ],
    detailTitle: "Diseñada para el contexto de tu empresa.",
    detailDescription:
      "Acordamos objetivos, estructura y prioridades antes de desarrollar. Así, la plataforma responde a necesidades concretas y no a una plantilla genérica.",
    capabilities: [
      "Plataformas y aplicaciones web empresariales",
      "Portales de autoservicio y herramientas internas",
      "Diseño de interfaces y experiencia de usuario",
      "Integración con servicios y sistemas existentes",
    ],
    noteTitle: "Calidad digital",
    note: "Accesibilidad, rendimiento y facilidad de uso se consideran desde las primeras decisiones del proyecto.",
    ctaTitle: "Hagamos que tu plataforma resuelva algo real.",
    ctaDescription:
      "Comparte el objetivo del proyecto y las necesidades de sus usuarios.",
  },
  applications: {
    eyebrow: "Aplicaciones móviles y de escritorio",
    title: "Herramientas digitales que llegan",
    highlight: "a donde ocurre el trabajo.",
    description:
      "Desarrollamos aplicaciones móviles y de escritorio para equipos que necesitan acceso, captura o control desde su propio entorno de trabajo.",
    sectionEyebrow: "Aplicaciones",
    sectionTitle: "El formato correcto para cada tarea.",
    sectionDescription:
      "Definimos la plataforma a partir de quién usará la aplicación, dónde la necesita y qué condiciones debe atender.",
    features: [
      {
        icon: "workflow",
        title: "Movilidad en campo",
        description:
          "Facilita el acceso a información y la captura de datos desde dispositivos móviles.",
      },
      {
        icon: "layers",
        title: "Operación de escritorio",
        description:
          "Resuelve tareas especializadas desde una aplicación enfocada en el entorno de trabajo.",
      },
      {
        icon: "settings",
        title: "Datos alineados",
        description:
          "Considera cómo la aplicación sincroniza e intercambia información con los sistemas de la empresa.",
      },
    ],
    detailTitle: "Una solución adaptada al entorno de uso.",
    detailDescription:
      "La experiencia, las capacidades y las integraciones se definen según el dispositivo, la conectividad y las tareas que forman parte de cada caso.",
    capabilities: [
      "Aplicaciones móviles para Android y iOS",
      "Aplicaciones de escritorio para procesos específicos",
      "Captura, consulta y seguimiento de información",
      "Integración con plataformas empresariales",
    ],
    noteTitle: "Diseño de solución",
    note: "Compatibilidad, distribución y mantenimiento se contemplan como parte del alcance del proyecto.",
    ctaTitle: "¿Tu equipo necesita una herramienta propia?",
    ctaDescription:
      "Platiquemos sobre las tareas, usuarios y dispositivos involucrados.",
  },
} satisfies Record<string, ServicePageContent>;
