/**
 * Hechos del perfil. Deben coincidir con `.cursor/docs/perfil.md`.
 */

export type Ambito =
  | "docencia"
  | "desarrollo"
  | "calidad"
  | "gestion"
  | "laboratorio";

export type Rol = {
  id: string;
  cargo: string;
  organizacion: string;
  lugar: string;
  periodo: string;
  vigente: boolean;
  ambito: Ambito;
  resumen: string;
  detalle: string[];
  aptitudes: string[];
};

export type Aptitud = {
  id: string;
  etiqueta: string;
  grupo:
    | "Inteligencia artificial"
    | "Desarrollo"
    | "Lenguajes"
    | "Datos"
    | "Plataformas"
    | "Práctica"
    | "Ofimática";
};

export const ambitos: { id: Ambito; etiqueta: string }[] = [
  { id: "docencia", etiqueta: "Docencia" },
  { id: "desarrollo", etiqueta: "Desarrollo" },
  { id: "calidad", etiqueta: "Calidad" },
  { id: "gestion", etiqueta: "Gestión" },
  { id: "laboratorio", etiqueta: "Laboratorio" },
];

export const aptitudes: Aptitud[] = [
  { id: "ia", etiqueta: "Inteligencia artificial", grupo: "Inteligencia artificial" },
  { id: "flutter", etiqueta: "Flutter", grupo: "Desarrollo" },
  { id: "nodejs", etiqueta: "Node.js", grupo: "Desarrollo" },
  { id: "vue", etiqueta: "Vue", grupo: "Desarrollo" },
  { id: "react", etiqueta: "React", grupo: "Desarrollo" },
  { id: "nestjs", etiqueta: "NestJS", grupo: "Desarrollo" },
  { id: "angular", etiqueta: "Angular", grupo: "Desarrollo" },
  { id: "angularjs", etiqueta: "AngularJS", grupo: "Desarrollo" },
  { id: "js", etiqueta: "JavaScript", grupo: "Desarrollo" },
  { id: "html", etiqueta: "HTML", grupo: "Desarrollo" },
  { id: "css", etiqueta: "CSS", grupo: "Desarrollo" },
  { id: "python", etiqueta: "Python", grupo: "Lenguajes" },
  { id: "java", etiqueta: "Java", grupo: "Lenguajes" },
  { id: "cpp", etiqueta: "C++", grupo: "Lenguajes" },
  { id: "csharp", etiqueta: "C#", grupo: "Lenguajes" },
  { id: "postgresql", etiqueta: "PostgreSQL", grupo: "Datos" },
  { id: "oracle", etiqueta: "Oracle", grupo: "Datos" },
  { id: "sqlserver", etiqueta: "SQL Server", grupo: "Datos" },
  { id: "mysql", etiqueta: "MySQL", grupo: "Datos" },
  { id: "firebase", etiqueta: "Firebase", grupo: "Datos" },
  { id: "gae", etiqueta: "Google App Engine", grupo: "Plataformas" },
  { id: "dotnet", etiqueta: ".NET Framework 4.0", grupo: "Plataformas" },
  { id: "windows", etiqueta: "Windows", grupo: "Plataformas" },
  { id: "linux", etiqueta: "Linux", grupo: "Plataformas" },
  { id: "arduino", etiqueta: "Arduino", grupo: "Plataformas" },
  { id: "raspberry", etiqueta: "Raspberry Pi", grupo: "Plataformas" },
  { id: "qa", etiqueta: "QA", grupo: "Práctica" },
  { id: "ers", etiqueta: "ERS", grupo: "Práctica" },
  { id: "analisis", etiqueta: "Análisis de sistemas", grupo: "Práctica" },
  { id: "b2b", etiqueta: "Para empresas (B2B)", grupo: "Práctica" },
  { id: "conocimientos", etiqueta: "Conocimientos informáticos", grupo: "Práctica" },
  { id: "mantenimiento", etiqueta: "Mantenimiento informático", grupo: "Práctica" },
  { id: "docencia", etiqueta: "Docencia", grupo: "Práctica" },
  { id: "office", etiqueta: "Microsoft Office", grupo: "Ofimática" },
  { id: "internet", etiqueta: "Internet", grupo: "Ofimática" },
  { id: "dactilografia", etiqueta: "Dactilografía computarizada", grupo: "Ofimática" },
];

export const roles: Rol[] = [
  {
    id: "cipec-ensenanza",
    cargo: "Enseñanza superior",
    organizacion: "CIPEC",
    lugar: "Cochabamba, Bolivia",
    periodo: "Jornada parcial",
    vigente: false,
    ambito: "docencia",
    resumen: "",
    detalle: [],
    aptitudes: ["angularjs"],
  },
  {
    id: "texi",
    cargo: "Director de ingeniería de aseguramiento de la calidad",
    organizacion: "Texi App",
    lugar: "Cochabamba, Bolivia · jornada parcial",
    periodo: "Sep 2020 – actualidad · 6 años y 3 meses",
    vigente: true,
    ambito: "calidad",
    resumen:
      'Desempeñé el cargo de "QA Engineer" en TEXI para la implementación de una aplicación multiservicio para transporte de pasajeros.',
    detalle: [
      "Tecnologías: Python, Google App Engine, Angular, Java y Firebase.",
    ],
    aptitudes: ["qa", "python", "gae", "angular", "java", "firebase", "angularjs"],
  },
  {
    id: "cipec-docencia",
    cargo: "Docencia",
    organizacion: 'Instituto "CIPEC"',
    lugar: "Cochabamba, Bolivia · jornada parcial",
    periodo: "Mar 2015 – dic 2025 · 10 años y 10 meses",
    vigente: false,
    ambito: "docencia",
    resumen:
      "Docente para la carrera de Sistemas Informáticos, impartiendo las siguientes materias:",
    detalle: [
      "Programación (C++, Java, Python, C#).",
      "Base de datos (SQL Server, MySQL, Firebase).",
      "Elementos de la programación (Java).",
      "Estructura de datos (Java).",
      "Programación para dispositivos móviles (Java).",
      "Programación web (HTML, CSS, JavaScript, Angular).",
      "Análisis y diseño de sistemas.",
      "Taller de sistemas operativos (Windows, Linux).",
      "Arquitectura del computador y microcontroladores (Arduino, Raspberry Pi).",
    ],
    aptitudes: [
      "cpp",
      "java",
      "python",
      "csharp",
      "sqlserver",
      "mysql",
      "firebase",
      "html",
      "css",
      "js",
      "angular",
      "windows",
      "linux",
      "arduino",
      "raspberry",
      "analisis",
      "angularjs",
    ],
  },
  {
    id: "indep",
    cargo: "Desarrollador de back-end | Project Management",
    organizacion: "Instituto para Devolver al Pueblo lo Robado (INDEP)",
    lugar: "Remoto · profesional independiente",
    periodo: "Sep 2022 – mar 2024 · 1 año y 7 meses",
    vigente: false,
    ambito: "desarrollo",
    resumen: "",
    detalle: [],
    aptitudes: ["angularjs", "nestjs"],
  },
  {
    id: "asesor",
    cargo: "Asesor de proyecto",
    organizacion: "Profesional independiente",
    lugar: "Proyectos empresariales y educativos",
    periodo: "Ene 2018 – jun 2022 · 4 años y 6 meses",
    vigente: false,
    ambito: "gestion",
    resumen:
      "Asesorías permanentes en desarrollo de software y en planificación e implementación de proyectos empresariales y educativos.",
    detalle: [
      "Apoyo como QA.",
      "Estudio de ERS para desarrollo de software.",
      "Análisis y modelado de sistemas.",
    ],
    aptitudes: ["qa", "ers", "analisis", "b2b", "angularjs"],
  },
  {
    id: "ibm",
    cargo: "Docencia",
    organizacion: "IBM",
    lugar: "Cercado, Cochabamba, Bolivia · jornada completa",
    periodo: "Oct 2012 – dic 2020 · 8 años y 3 meses",
    vigente: false,
    ambito: "docencia",
    resumen:
      "Docente en educación superior para la carrera de Sistemas Informáticos, impartiendo las siguientes materias:",
    detalle: [
      "Programación (C++, Java).",
      "Base de datos (SQL Server, MySQL).",
      "Elementos de la programación (Java).",
      "Taller de sistemas operativos (Windows, Linux).",
    ],
    aptitudes: ["cpp", "java", "python", "sqlserver", "mysql", "windows", "linux", "angularjs"],
  },
  {
    id: "inca",
    cargo: "Programador de sistemas",
    organizacion: "INCA RANCHO",
    lugar: "Sacaba, Cochabamba, Bolivia · profesional independiente",
    periodo: "Nov 2015 – mar 2016 · 5 meses",
    vigente: false,
    ambito: "desarrollo",
    resumen:
      "Software de control de cobros por consumo de agua para la comunidad Inca Rancho, en Sacaba.",
    detalle: ["Desarrollo junto a un equipo independiente, con C# y .NET Framework 4.0."],
    aptitudes: ["csharp", "dotnet"],
  },
  {
    id: "telc",
    cargo: "Docencia",
    organizacion: "TELC",
    lugar: "Cercado, Cochabamba, Bolivia · contrato temporal",
    periodo: "Oct 2012 – ene 2013 · 4 meses",
    vigente: false,
    ambito: "docencia",
    resumen: "Docente titular de computación.",
    detalle: [],
    aptitudes: ["conocimientos"],
  },
  {
    id: "ceicom-lab",
    cargo: "Especialista de laboratorio",
    organizacion: "CEICOM",
    lugar: "Cercado, Cochabamba, Bolivia · jornada completa",
    periodo: "Jun 2010 – abr 2012 · 1 año y 11 meses",
    vigente: false,
    ambito: "laboratorio",
    resumen:
      "Jefe del área de sistemas y laboratorios para la administración y buen funcionamiento de los mismos.",
    detalle: [],
    aptitudes: ["mantenimiento"],
  },
  {
    id: "ceicom-asistente",
    cargo: "Asistente pedagógico",
    organizacion: "CEICOM",
    lugar: "Cercado, Cochabamba, Bolivia · jornada completa",
    periodo: "Mar 2007 – dic 2011 · 4 años y 10 meses",
    vigente: false,
    ambito: "docencia",
    resumen:
      "Docencia en informática y manejo de herramientas ofimáticas: sistemas operativos, Microsoft Office, Internet y dactilografía computarizada.",
    detalle: [],
    aptitudes: ["docencia", "office", "internet", "dactilografia"],
  },
];

export const formacion = [
  {
    id: "mca",
    titulo: "Master of Computer Applications",
    detalle: "Computer and Information Sciences and Support Services",
    centro: "Centro de Capacitación Técnica Instituto Boliviano",
    periodo: "Ene 2016 – ago 2016",
    nota: "Certificación del Ministerio de Educación de Tarija, Bolivia.",
  },
  {
    id: "ibm-formacion",
    titulo: "Formación profesional de grado superior",
    detalle: "Computer Programming, Specific Applications",
    centro: "Instituto Británico Mercantil IBM",
    periodo: "Ene 2009 – dic 2012",
    nota: "Titulación en provisión nacional por el Ministerio de Educación de Bolivia.",
  },
  {
    id: "umss",
    titulo: "Ingeniería de Sistemas",
    detalle: "Systems Engineering",
    centro: "Universidad Mayor de San Simón",
    periodo: "Ene 2006 – dic 2011",
    nota: "Sin titulación.",
  },
] as const;

export const perfil = {
  nombre: "Marcelo Amed Peña Bernal",
  titular: "Desarrollo de aplicaciones, datos e inteligencia artificial",
  lugar: "Cochabamba, Bolivia",
  experiencia: "18 años",
  correo: "marcelo.pena.bernal@gmail.com",
  celular: "+591 72909911",
  celularHref: "tel:+59172909911",
  whatsapp: "https://wa.me/59172909911",
  linkedin:
    "https://www.linkedin.com/in/marcelo-amed-pe%C3%B1a-bernal-682853220/",
  titularOriginal: "Application Developer | Project Management",
  resumen:
    "Mis aficiones, ser un apasionado de la tecnología, gracias a ello pude desenvolverme en campos laborales que me motiva día a día, como la docencia la cual llevo desempeñando por mas de 13 años. También he podido estar en ambientes de trabajo que me exigen y sacan gran parte de mi potencial como desarrollador y analista de sistemas.",
};
