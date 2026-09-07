# Studio — 官方研究站点 (Official Research Site)

一个用 [Astro](https://astro.build/) 构建的静态站点，发布研究、新闻、博客与报告。
视觉风格参考编辑型 / 研究优先的品牌站点（如 Anthropic Research）。

A static site built with Astro that publishes research, news, blog posts, and reports —
visually inspired by editorial / research-first brand sites.

## 中英双语 (Bilingual: 中文 / English)

站点支持**即时、免刷新的中英文切换**。点击右上角头部的 `EN` / `中文` 按钮即可。

The site is bilingual with instant, no-reload switching. Click the `EN` / `中文`
button in the top-right header.

- **界面文案**（导航、标题、按钮、标签）集中在 `src/i18n/ui.ts`，由 `src/scripts/i18n.ts`
  在客户端切换，偏好保存在 `localStorage`。
- **内容**以双语渲染，并通过 `data-lang="zh|en"` 属性配合 `src/styles/global.css` 中的
  CSS 规则显隐对应语言。

UI strings live in `src/i18n/ui.ts` and are swapped client-side by `src/scripts/i18n.ts`
(preference saved to `localStorage`). Content is rendered bilingually and shown/hidden via a
`data-lang="zh|en"` attribute combined with the CSS rule in `src/styles/global.css`.

## 页面 (Pages)

| 路由 Route        | 内容 What's there                                                                             |
| ----------------- | --------------------------------------------------------------------------------------------- |
| `/`               | 研究主页 — 大标题、研究团队链接、5 列团队卡片                                                  |
| `/news`           | 特色大卡 + 时间倒序列表                                                                       |
| `/publications`   | 日期 / 分类 / 标题表格，带**客户端搜索**                                                      |
| `/blog`           | 全部文章长列表                                                                                |
| `/about`          | 关于                                                                                          |
| `/contact`        | 媒体 / 合作 / 研究联系卡片                                                                    |
| `/posts/[slug]`   | 文章详情页（双语正文，`data-lang` 显隐，含相关阅读）                                            |

## 内容 (Content)

内容以 **Astro Content Collections** 管理，位于 `src/content/`：

- `src/content/posts/<slug>.zh.md` 与 `<slug>.en.md` —— 同一篇文章的中英文两个文件。
  每个文件用自己的语言填写 `title` / `summary` / `category` / `coverLabel`，并带一个
  `lang: 'zh' | 'en'` 字段。两个文件按基础 slug 分组，因此单一 URL（`/posts/<slug>`）
  同时渲染两种语言版本。分组逻辑见 `src/lib/posts.ts`。
- `src/content/teams/*.md` —— 研究团队，含双语字段
  `nameZh` / `nameEn` / `descriptionZh` / `descriptionEn`。

新增文章：在 `src/content/posts/` 放入 `<slug>.zh.md` 与 `<slug>.en.md`，它会自动出现在
`/news`、`/publications`、`/blog` 以及 `/posts/<slug>`。

To add an article: drop `<slug>.zh.md` and `<slug>.en.md` into `src/content/posts/`. It
automatically appears on `/news`, `/publications`, `/blog`, and at `/posts/<slug>`.

## 本地开发 (Local development)

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # 输出到 ./dist
npm run preview      # 本地预览生产构建
```

Requires Node 18+.

## 项目结构 (Project layout)

```
src/
  components/        Header, Footer
  content/           内容集合 (posts, teams)
  i18n/              UI 字典 (ui.ts)
  lib/               posts.ts 分组工具
  layouts/           共享 <Layout />
  pages/             路由文件
  scripts/           i18n.ts 客户端切换
  styles/            global.css (设计变量 + 组件)
public/              favicon, OG 图
```

## 设计系统 (Design system)

所有样式集中在 `src/styles/global.css` 这一个文件，顶部用 CSS 自定义属性定义
颜色、字体、间距与布局宽度。要换肤，修改 `:root` 块即可，无需 Tailwind / CSS-in-JS。

All styling lives in `src/styles/global.css` as a single CSS file with CSS custom properties
at the top (colors, fonts, spacing, layout widths). To restyle, edit the `:root` block.
