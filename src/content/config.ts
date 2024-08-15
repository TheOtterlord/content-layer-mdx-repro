import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'

const blog = defineCollection({
	loader: glob({ base: "./src/data/blog/", pattern: "**/*.{md,mdx}" }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),

		// transform repro
		something: z.string().optional().transform(str => ({ type: 'test', content: str }))
	}),
});

export const collections = { blog };
