import type { NavMenuConfig } from "@/types";

// Traducciones
const translations = {
  ES: {
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
  },
  PT: {
    pagesNav: [
      {
        title: "Ecosystem",
        items: [
          {
            title: "Projects",
            href: "projects",
            description: "Discover DeSci ecosystem projects and DAO's.",
            image: "/images/examples/landing.jpg",
          },
          {
            title: "Events",
            href: "events",
            description: "Explore related events and activities.",
            image: "/images/examples/changelog.jpg",
          },
          {
            title: "Resources",
            href: "resources",
            description: "Access useful resources for the community.",
            image: "/images/examples/waitlist.jpg",
            forceReload: true,
          },
          {
            title: "Communities",
            href: "comunidades",
            description: "Find and participate in other DeSci communities.",
          },
        ],
      },
    ],
    examplesNav: [
      {
        title: "Community",
        items: [
          {
            title: "About Us",
            href: "about-us",
            description: "Learn more about DeSci LATAM and our team.",
          },
          {
            title: "Changelog",
            href: "changelog",
            description: "Check out recent changes and updates.",
          },
          {
            title: "Contributors",
            href: "contributors",
            description: "Interested in collaborating? Learn how you can get involved.",
          },
          {
            title: "Roadmap",
            href: "roadmap",
            description: "Explore our development plan and future goals.",
          },
          {
            title: "Donations",
            href: "donations",
            description: "If you like our work, you can support us with a donation.",
          },
        ],
      },
    ],
    links: [
      {
        title: "Blog",
        href: "blog",
        description: "Explore our articles and publications.",
      },
    ],
  },
  US: {
    pagesNav: [
      {
        title: "Ecosystem",
        items: [
          {
            title: "Projects",
            href: "projects",
            description: "Discover DeSci ecosystem projects and DAO's.",
            image: "/images/examples/landing.jpg",
          },
          {
            title: "Events",
            href: "events",
            description: "Explore related events and activities.",
            image: "/images/examples/changelog.jpg",
          },
          {
            title: "Resources",
            href: "resources",
            description: "Access useful resources for the community.",
            image: "/images/examples/waitlist.jpg",
            forceReload: true,
          },
          {
            title: "Communities",
            href: "comunidades",
            description: "Find and participate in other DeSci communities.",
          },
        ],
      },
    ],
    examplesNav: [
      {
        title: "Community",
        items: [
          {
            title: "About Us",
            href: "about-us",
            description: "Learn more about DeSci LATAM and our team.",
          },
          {
            title: "Changelog",
            href: "changelog",
            description: "Check out recent changes and updates.",
          },
          {
            title: "Contributors",
            href: "contributors",
            description: "Interested in collaborating? Learn how you can get involved.",
          },
          {
            title: "Roadmap",
            href: "roadmap",
            description: "Explore our development plan and future goals.",
          },
          {
            title: "Donations",
            href: "donations",
            description: "If you like our work, you can support us with a donation.",
          },
        ],
      },
    ],
    links: [
      {
        title: "Blog",
        href: "blog",
        description: "Explore our articles and publications.",
      },
    ],
  },
};

// Seleccionar las traducciones según el idioma actual
const currentLanguage = "ES"; // Aquí debería ser el idioma actual obtenido de Astro
const currentTranslations = translations[currentLanguage];

// Combinar las traducciones con el objeto original
export const navMenuConfig: NavMenuConfig = {
  ...currentTranslations,
};
