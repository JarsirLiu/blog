import { getCollection, type CollectionEntry } from 'astro:content';

export type PostGroup = {
  base: string;
  zh?: CollectionEntry<'posts'>;
  en?: CollectionEntry<'posts'>;
};

/** Group the bilingual `.zh` / `.en` post files by their base slug so a single
 *  URL renders both language versions. Astro strips the dot from filenames like
 *  `protein-design.zh.md` (slug becomes `protein-designzh`), so the language is
 *  taken from the frontmatter `lang` field and the base drops the trailing
 *  `zh`/`en`. Sorted newest-first. */
export async function getPostGroups(): Promise<PostGroup[]> {
  const all = await getCollection('posts');
  const map = new Map<string, PostGroup>();

  for (const p of all) {
    const base = p.slug.replace(/(zh|en)$/, '');
    const lang = p.data.lang; // 'zh' | 'en'
    const g = map.get(base) ?? { base };
    g[lang] = p;
    map.set(base, g);
  }

  return [...map.values()].sort(
    (a, b) =>
      (b.zh ?? b.en).data.publishDate.getTime() -
      (a.zh ?? a.en).data.publishDate.getTime()
  );
}

export const fmtZh = (d: Date) =>
  `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
export const fmtEn = (d: Date) =>
  d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });