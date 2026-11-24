export const operationalProblems = [
  {
    number: "01",
    problem: "Inventarios desactualizados",
    impact: "Las existencias registradas no coinciden con lo que hay en almacén.",
    solution: "Control de existencias ligado al registro de movimientos.",
    area: "WMS",
  },
  {
    number: "02",
    problem: "Pérdida de trazabilidad",
    impact: "Cuesta reconstruir por dónde pasó un material o qué cambió.",
    solution: "Registro ordenado de movimientos y operaciones.",
    area: "WMS",
  },
  {
    number: "03",
    problem: "Procesos manuales",
    impact: "Tareas repetidas consumen tiempo y fragmentan la operación.",
    solution: "Automatización de pasos y flujos de trabajo.",
    area: "A la medida",
  },
  {
    number: "04",
    problem: "Errores de captura",
    impact: "La información incompleta dificulta continuar el proceso.",
    solution: "Herramientas digitales diseñadas para cada tarea.",
    area: "A la medida",
  },
  {
    number: "05",
    problem: "Información dispersa",
    impact: "Los equipos consultan distintas fuentes para entender el estado.",
    solution: "Sistemas conectados para organizar la información.",
    area: "A la medida",
  },
] as const;

export const developmentServices = [
  {
    number: "01",
    type: "software",
    title: "Software personalizado",
    description:
      "Sistemas empresariales alineados con procesos, usuarios y necesidades específicas.",
    href: "/desarrollo-software",
    linkLabel: "Explorar desarrollo de software",
  },
  {
    number: "02",
    type: "applications",
    title: "Aplicaciones",
    description:
      "Herramientas móviles y de escritorio para los espacios donde ocurre el trabajo.",
    href: "/aplicaciones",
    linkLabel: "Explorar aplicaciones",
  },
  {
    number: "03",
    type: "web",
    title: "Desarrollo web",
    description:
      "Plataformas y productos digitales pensados para sus objetivos y usuarios.",
    href: "/desarrollo-web",
    linkLabel: "Explorar desarrollo web",
  },
  {
    number: "04",
    type: "automation",
    title: "Automatización",
    description:
      "Flujos de trabajo que reducen tareas repetitivas y ordenan el paso de información.",
    href: "/desarrollo-software",
    linkLabel: "Conocer soluciones a medida",
  },
] as const;

export const methodology = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Escuchamos el reto y el contexto de la operación.",
  },
  {
    number: "02",
    title: "Análisis",
    description: "Identificamos procesos, usuarios y necesidades.",
  },
  {
    number: "03",
    title: "Diseño de solución",
    description: "Acordamos un alcance y una dirección técnica.",
  },
  {
    number: "04",
    title: "Desarrollo",
    description: "Construimos la solución por etapas claras.",
  },
  {
    number: "05",
    title: "Implementación",
    description: "Preparamos su puesta en marcha con el equipo.",
  },
  {
    number: "06",
    title: "Soporte y evolución",
    description: "Atendemos ajustes y nuevas necesidades del producto.",
  },
] as const;
