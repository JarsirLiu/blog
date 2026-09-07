import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    team: z.string().optional(),
    summary: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    coverGradient: z
      .string()
      .default('linear-gradient(135deg,#c75f2c 0%,#e8b78a 50%,#f4d9b9 100%)'),
    coverLabel: z.string().default('Cover'),
    lang: z.enum(['zh', 'en']),
  }),
});

const teams = defineCollection({
  type: 'content',
  schema: z.object({
    nameZh: z.string(),
    nameEn: z.string(),
    descriptionZh: z.string(),
    descriptionEn: z.string(),
    lead: z.string().optional(),
    members: z.number().optional(),
    href: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { posts, teams };