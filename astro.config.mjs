import db from "@astrojs/db";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import simpleStackForm from "simple-stack-form";
import { defineConfig, squooshImageService } from "astro/config";




/* import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { remarkReadingTime } from './src/utils/readTime.ts' */

/* // https://astro.build/config
export default defineConfig({
	site: 'https://descilatam.org/', // Write here your website url
	markdown: {
		remarkPlugins: [remarkReadingTime],
		drafts: true,
		shikiConfig: {
			theme: 'material-theme-palenight',
			wrap: true
		},

		image: {
			service: squooshImageService(),
		  },
	}, */

// https://astro.build/config

export default defineConfig({
  site: "https://descilatam.org",

 /*  markdown: {
	remarkPlugins: [remarkReadingTime],
	drafts: true,
	shikiConfig: {
		theme: 'material-theme-palenight',
		wrap: true
	}, */

	image: {
		service: squooshImageService(),
	  },

  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "github-dark-dimmed",
      },
      gfm: true,
    }),
    icon(),
    sitemap(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    db(),
    simpleStackForm(),
  ],
  output: "hybrid",
  adapter: vercel({
    analytics: true,
  }),
 
  i18n: {
    defaultLocale: "es-AR",
    locales: ["es-AR", "pt-BR", "en-US"],
    routing: {
      prefixDefaultLocale: true
  }
  },
 
});