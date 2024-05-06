import { defineCollection, z } from 'astro:content'
import { getCollection } from "astro:content";
import { CATEGORIES } from '@/data/categories'

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string().max(80),
			description: z.string(),
			// Transform string to Date object
			pubDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			heroImage: image(),
			lang: z.string().optional(),
			category: z.enum(CATEGORIES),
			tags: z.array(z.string()),
			draft: z.boolean().default(false)
		})
})


export const collections = { blog }

export async function getBlogPosts() {
	const posts = await getCollection('blog');

	return posts.map((post) => {
		const blog_slug = post.slug.split('/')[0];
		return {
			...post,
			blog_slug
		}
	})
}