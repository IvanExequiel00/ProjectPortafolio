const projects = [
  {
    "id": 1,
    "name": "Questie",
    "role": "Desarrollador front-end",
    "description": "En este proyecto, trabajé como desarrollador front-end en un equipo, llevando a cabo el proyecto desde el concepto inicial con Figma hasta su realización concreta.",
    "imagenSrc": "/Questie.png",
    "responsibilities": [
      "Utilizar TypeScript como lenguaje de programación y React junto con el framework Next.js para el desarrollo.",
      "Crear vistas con Tailwind CSS, asegurando que el proyecto fuera responsive y adaptado a diferentes dispositivos.",
      "Manejar peticiones a la base de datos.",
      "Realizar las vistas en Figma y llevarlas a cabo de extremo a extremo."
    ],
    "technologies": ["TypeScript", "React", "Next.js", "Tailwind CSS", "Figma"],
     "demo": "https://questie-rust.vercel.app/"
  },
  {
    "id": 2,
    "name": "Clon de Duolingo",
    "description": "Desarrollé un proyecto inspirado en Duolingo utilizando tecnologías modernas como Next.js, TypeScript y React para el frontend. Implementé Shadcn para mejorar la interfaz de usuario con efectos visuales dinámicos y atractivos. Utilicé Drizzle para gestionar las interacciones con una base de datos PostgreSQL.",
    "imagenSrc": "/Singo.png",
    "repository": "https://github.com/IvanExequiel00/Singo",
    "details": [
      "Implementé la estructura y funcionalidades principales de Duolingo.",
      "Utilicé Drizzle para manejar las interacciones con la base de datos PostgreSQL.",
      "Desarrollé un front-end interactivo y responsive utilizando React y TypeScript, garantizando una experiencia de usuario fluida y eficiente.",
      "Utilicé la librería shadcn para mejorar la UI/UX, asegurando componentes estilizados y coherentes en toda la aplicación."
    ],
    "technologies": ["Next.js", "TypeScript", "React", "Drizzle", "PostgreSQL", "shadcn","Clerk"],
    
  },
  {
    "id": 3,
    "name": "Cubix & bets",
    "description": "Trabajé como desarrollador front-end, donde tuve que crear la interfaz a partir del diseño en Figma que me presentaron, además de implementar las funcionalidades del back-end y la integración de los juegos.",
    "imagenSrc": "/Captura-cubix.PNG",
    "details": [],
    "technologies": ["Vite","React", "Javascript", "Ant Design", "Figma", "React-Redux"],
    "repository": "https://github.com/IvanExequiel00?tab=repositories",
  },
  {
    "id": 4,
    "name": "Tinder Swipe",
    "description": "Un pequeño proyecto que simula la interacción de deslizar en Tinder utilizando animaciones con gestos, eventos de mouse y touch. Se centra en la manipulación del DOM y la aplicación de transiciones CSS para crear una experiencia de usuario fluida y atractiva.",
    "imagenSrc": "/Tinder-switch.png",
    "details": [],
    "technologies": ["Animación con gestos", "Eventos de mouse y touch", "DOM", "Transición CSS"],
    "demo": "https://reto-midudev1.vercel.app/",
    "repository": "",
  },
  {
  "id": 5,
   "name": "GIVO Elements",
  "description": "Me gustaría compartir un proyecto en el que trabajé junto con tres desarrolladores más. Nuestro objetivo principal fue crear componentes reutilizables utilizando JavaScript Vanilla, de manera que pudieran integrarse fácilmente en futuros proyectos sin depender de frameworks como React o Vue.",
   "imagenSrc": "/Givo3.png",
   "details": [],
  "technologies": ["Javascript","React","Next.js"],
   "repository": "https://github.com/IvanExequiel00/Component-Page",
   
 },
  {
    "id": 6,
    "name": "Gestor de Turnos",
    "description": "Desarrollé un gestor de turnos utilizando TypeScript para el lenguaje de programación, React para el desarrollo del front-end, Express para el lado del servidor, y TypeORM para gestionar las tablas con PostgreSQL como base de datos.",
    "imagenSrc": "",
    "details": [
      "Utilicé CSS Modules para los estilos.",
      "Implementé funcionalidades para que los usuarios pudieran registrarse, iniciar sesión y agendar turnos para fechas futuras.",
      "Apliqué restricciones para evitar la selección de fechas pasadas y horarios específicos."
    ],
    "technologies": ["TypeScript", "React", "Express", "TypeORM", "PostgreSQL","react-hook-form"],
    "repository": "https://github.com/pi-rym/PM3-IvanExequiel00"
  },
  {
    "id": 7,
    "name": "Página de Películas",
    "description": "Realicé un proyecto donde utilicé JavaScript como lenguaje de programación, CSS Modules para los estilos, Express para el servidor, MongoDB como base de datos y Mongoose para realizar los esquemas.",
    "imagenSrc": "",
    "details": [
      "Los usuarios podían agregar una película, que se almacenaba en la base de datos y se mostraba junto con las otras películas en la vista.",
      "Implementé la funcionalidad de agregar, visualizar y gestionar películas en la base de datos."
    ],
    "technologies": ["JavaScript","React","CSS Modules", "Express", "MongoDB", "Mongoose"],
    "repository": "https://github.com/pi-rym/PM2-IvanExequiel00"
  }
];
// {
//   "id": 6,
//   "name": "",
//   "desciption": "",
//   "imagenSrc": "/tinder switch.png",
//   "details": [],
//   "technologies": ["",""]
// },
export default projects;
