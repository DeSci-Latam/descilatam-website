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
          disabled: true,
        },
        {
          title: "Eventos",
          href: "events",
          description: "Explora los eventos y actividades relacionadas.",
          image: "/images/examples/changelog.jpg",
          disabled: true,
        },
        {
          title: "Recursos",
          href: "resources",
          description: "Accede a recursos útiles para la comunidad.",
          image: "/images/examples/waitlist.jpg",
          forceReload: true,
          disabled: true,
        },
        {
          title: "Comunidades",
          href: "communities",
          description: "Encuentra y participa de otras comunidades DeSci.",
          disabled: true,
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
          disabled: true,
        },
        {
          title: "Changelog",
          href: "changelog",
          description: "Mira los cambios y actualizaciones recientes.",
          disabled: false,
        },
       /*  {
          title: "Contribuidores",
          href: "contributors",
          description: "¿Interesado en colaborar? Conoce cómo puedes involucrarte.",
          disabled: true,
        }, */
        {
          title: "Roadmap",
          href: "roadmap",
          description: "Explora nuestro plan de desarrollo y objetivos futuros.",
          disabled: true,
        },
        {
          title: "Donaciones",
          href: "donations",
          description: "Si te gusta nuestro trabajo, podes apoyarnos con una donación.",
          disabled: true,
        },
      ],
    },
  ],
  
  
  
  links: [
    {
      title: "Blog",
      href: "/es-AR/blog/",
      description: "Explora nuestros artículos y publicaciones.",
      disabled: false,
    },
  ],
};
