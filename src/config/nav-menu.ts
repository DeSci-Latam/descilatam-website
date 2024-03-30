import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  pagesNav: [
    
    {
      title: "Ecosistema",
      items: [
        {
          title: "Proyectos",
          href: "projects",
          description: "Descubre los proyectos y DAO's del ecosistema DeSci.",
          image: "/images/examples/landing.jpg",
        },
        {
          title: "Eventos",
          href: "events",
          description: "Explora los eventos y actividades relacionadas.",
          image: "/images/examples/changelog.jpg",
        },
        {
          title: "Recursos",
          href: "resources",
          description: "Accede a recursos útiles para la comunidad.",
          image: "/images/examples/waitlist.jpg",
          forceReload: true,
        },
        {
          title: "Comunidades",
          href: "comunidades",
          description: "Encuentra y participa de otras comunidades DeSci.",
          // Puedes agregar una imagen aquí si deseas
        },
      
      ],
    },
  ],
  examplesNav: [
    {
      title: "Comunidad",
      items: [
        {
          title: "Nosotros",
          href: "about-us",
          description: "Conoce más sobre DeSci LATAM y nuestro equipo.",
          
        },
        {
          title: "Changelog",
          href: "changelog",
          description: "Mira los cambios y actualizaciones recientes.",
          
        },
        {
          title: "Contribuidores",
          href: "contributors",
          description: "¿Interesado en colaborar? Conoce cómo puedes involucrarte.",
         
        },
        {
          title: "Roadmap",
          href: "roadmap",
          description: "Explora nuestro plan de desarrollo y objetivos futuros.",
         
        },
        {
          title: "Donaciones",
          href: "donations",
          description: "Si te gusta nuestro trabajo, podes apoyarnos con una donación.",
          
        },
      ],
    },
  ],
  
  
  
  links: [
    {
      title: "Blog",
      href: "blog",
      description: "Explora nuestros artículos y publicaciones.",
    },
  ],
};
