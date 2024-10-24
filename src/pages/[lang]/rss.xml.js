import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_DESCRIPTION, SITE_TITLE } from '@/consts';
import { localeParams } from "@/i18n";

export const getStaticPaths = () => localeParams;

export async function GET(context) {
  const locale = context.params.lang;
  
  // Manejar títulos y descripciones localizados
  const localeTitle = typeof SITE_TITLE === "string"
    ? SITE_TITLE
    : SITE_TITLE[locale];
    
  const localeDescription = typeof SITE_DESCRIPTION === "string"
    ? SITE_DESCRIPTION
    : SITE_DESCRIPTION[locale];

  try {
    // Obtener y filtrar posts
    const posts = await getCollection('blog', ({ slug }) => {
      return slug.split("/")[0] === locale;
    });

    // Validar y ordenar posts
    const validPosts = posts
      .filter(post => {
        // Asegurarse de que la fecha es válida
        const postDate = post.data.date;
        return postDate instanceof Date && !isNaN(postDate.valueOf());
      })
      .sort((a, b) => {
        // Ordenar de manera segura
        const dateA = new Date(a.data.date).valueOf();
        const dateB = new Date(b.data.date).valueOf();
        return dateB - dateA;
      });

    // Crear el feed RSS
    return rss({
      title: localeTitle,
      description: localeDescription,
      site: context.site,
      items: validPosts.map((post) => ({
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description,
        // Construir el link de manera segura
        link: `/${locale}/blog/${post.slug.split('/').slice(1).join('/')}/`,
        // Campos opcionales si los necesitas
        ...(post.data.category && { categories: [post.data.category] }),
      })),
      // Opcionalmente, añadir datos personalizados
      customData: `<language>${locale}</language>`,
    });
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    throw error;
  }
}