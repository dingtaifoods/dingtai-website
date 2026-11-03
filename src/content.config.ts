import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // 引入 v6 必须的 loader

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }), // 告诉 Astro 去哪里加载文章
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.date(),
    image: z.string().optional(),
  }),
});

export const collections = { blog };