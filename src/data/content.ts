export const profile = {
  name: "Carlos Castro Reales",
  initials: "CC",
  role: "Software Engineer · AI",
  email: "carlosed7641@gmail.com",
  github: "https://github.com/carlosed7641",
  linkedin: "https://www.linkedin.com/in/carlos-castro-reales-53448b213",
  // Pendiente: poner el PDF en public/ y cambiar a "/cv-carlos-castro-reales.pdf"
  cv: "#contacto",
};

export const navLinks = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
];

export const signals = [
  {
    tag: "core.web.vitals",
    title: "Rendimiento medible",
    text: "Lazy loading por secciones en portales de alto tráfico, con mejoras en Core Web Vitals y tiempos de carga.",
  },
  {
    tag: "reusable.ui",
    title: "UI reutilizable",
    text: "Componentes y módulos escalables que comparten varios portales y tiendas.",
  },
  {
    tag: "vtex.commerce",
    title: "E-commerce en VTEX",
    text: "Tiendas para marcas de Ecuador, Colombia y Chile con React y TypeScript, landings de campaña y mejoras de UX.",
  },
  {
    tag: "ai.agents",
    title: "IA aplicada",
    text: "RAG, búsqueda híbrida, tool calling y orquestación de agentes en productos propios.",
  },
];

export const about = [
  "Soy Ingeniero de Sistemas y llevo más de 4 años desarrollando software, la mayor parte en frontend con Angular, React y Next.js. Me gusta el trabajo que se nota en producción: interfaces rápidas, componentes reutilizables y experiencias que aguantan picos de tráfico.",
  "En Caracol Televisión he participado en el rediseño de los portales de Caracol, Blu Radio y La Kalle, y desarrollé módulos clave como las señales en vivo y la página de episodios. Antes, en BlackSip, trabajé en plataformas e-commerce sobre VTEX para marcas de varios países de Latinoamérica.",
  "Hoy combino esa base con IA: arquitecturas RAG, búsqueda semántica e híbrida y sistemas multi-agente, cuidando lo que importa en producción: control, seguridad y costo.",
];

type FeaturedProject = {
  tags: string[];
  title: string;
  text: string;
  origin?: string;
  repo?: string;
  demo?: string;
  metrics: { value: string; label: string }[];
};

export const featuredProject: FeaturedProject = {
  tags: ["Strands Agents", "Azure DevOps", "Claude"],
  title: "DevFlow AI: de la tarea en Azure DevOps al Pull Request",
  text: "Cuando un ticket pasa a Ready for AI, el agente lee el requerimiento, implementa el cambio en el repositorio, abre el PR y comenta el resultado en el ticket. Al aprobarse el review, el ticket avanza solo.",
  // repo privado por ahora; agregar `repo: "https://github.com/carlosed7641/dev-agent"` al publicarlo
  metrics: [
    { value: "5", label: "herramientas acotadas al repositorio" },
    { value: "0", label: "comandos de git ejecutados por el modelo" },
    { value: "20s", label: "por ticket, del requerimiento al PR" },
  ],
};

type Project = {
  meta: string;
  title: string;
  text: string;
  repo: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    meta: "RAG · Tool calling · pgvector",
    title: "RagTech",
    text: "MVP de e-commerce construido para probar un asistente de compras con IA: Claude elige entre búsqueda semántica y filtros tipados con Zod, sin escribir SQL.",
    repo: "https://github.com/carlosed7641/rag-ecommerce",
    demo: "https://rag-ecommerce-gilt.vercel.app",
  },
  {
    meta: "Claude Code · Subagentes",
    title: "Multi-Agent E-commerce",
    text: "Un orquestador coordina 6 subagentes que diseñan, implementan y auditan un sitio Next.js a partir de un briefing, con aprobación humana y un loop de corrección acotado.",
    repo: "https://github.com/carlosed7641/multi-agent-ecommerce",
  },
  {
    meta: "RAG híbrido · OCR · SQLite",
    title: "Second Brain",
    text: "Pregúntale en lenguaje natural a tus contratos, PDFs y recibos. Combina vectores y full-text con RRF, y responde citando el documento y la página.",
    repo: "https://github.com/carlosed7641/second-brain",
  },
  {
    meta: "Google APIs · Claude · Prisma",
    title: "Life Dashboard",
    text: "Panel único con calendario, correos, tareas y notas conectado a Google, con resumen diario y chat asistente.",
    repo: "https://github.com/carlosed7641/life-dashboard",
    demo: "https://life-dashboard-gamma-khaki.vercel.app",
  },
];

export const experience = [
  {
    period: "nov 2023 — hoy",
    role: "Frontend Developer",
    company: "Caracol Televisión",
    context: "Medios y entretenimiento",
    points: [
      "Participé en el rediseño de los portales de Caracol Televisión, Blu Radio y La Kalle, modernizando la interfaz y la experiencia de usuario.",
      "Desarrollé módulos clave como el de señales en vivo y la página de episodios, integrando Mediastream y YouTube.",
      "Implementé lazy loading por secciones en los portales, mejorando el rendimiento y los tiempos de carga.",
      "Desarrollé experiencias interactivas para Gol Caracol, como la landing de sorteos en vivo y el simulador del Mundial 2026, y contribuí a la landing de resultados electorales en tiempo real.",    
    ],
  },
  {
    period: "feb 2023 — oct 2023",
    role: "Frontend Developer Junior Analyst",
    company: "BlackSip",
    context: "E-commerce VTEX",
    points: [
      "Participé en la evolución de plataformas VTEX para BAS Ecuador, The Bar Colombia y Komatsu & Cummins Chile con React y TypeScript.",
      "Construí landings de campaña y promociones según especificaciones de diseño, con optimizaciones continuas de experiencia de usuario.",
    ],
  },
  {
    period: "ago 2022 — ene 2023",
    role: "Frontend Developer Trainee",
    company: "BlackSip",
    context: "Investigación y desarrollo",
    points: [
      "Desarrollé y mantuve componentes VTEX reutilizables dentro del equipo de I+D, construyendo módulos de e-commerce escalables.",
    ],
  },
];

export const toolkit = [
  {
    group: "01 / Frontend",
    items: ["TypeScript", "Angular", "React", "Next.js", "Tailwind CSS", "VTEX IO"],
  },
  {
    group: "02 / Backend y datos",
    items: ["Node.js", "Python", "PostgreSQL", "Supabase", "Prisma", "SQLite"],
  },
  {
    group: "03 / IA",
    items: [
      "RAG",
      "Embeddings",
      "Búsqueda híbrida",
      "Tool calling",
      "Orquestación de agentes",
      "Strands Agents",
      "Claude API",
    ],
  },
];
