export const languages = {
  zh: '中文',
  en: 'EN',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'zh';

/** Short UI strings shared across pages. Long-form copy (article bodies,
 *  about/contact paragraphs) lives inline in the .astro files as bilingual
 *  spans, so only concise labels need to be listed here. */
export const ui = {
  zh: {
    'nav.research': '研究',
    'nav.news': '新闻',
    'nav.publications': '出版物',
    'nav.blog': '博客',
    'nav.about': '关于',
    'cta.contact': '联系我们',
    'home.lede':
      '我们的研究团队探索人工智能系统的安全性、内部机理与社会影响，让能力不断增强的 AI 对世界产生积极影响。',
    'home.teamsLabel': '研究团队：',
    'news.title': '新闻',
    'news.lede': '来自各研究团队的最新动态：技术随笔、评估结果与现场研究报告。',
    'pub.title': '出版物',
    'pub.lede': 'Studio 全部研究、技术报告与现场研究的归档。',
    'pub.search': '搜索',
    'pub.empty': '没有匹配的出版物。',
    'blog.title': '博客',
    'blog.lede': '来自工程师与研究者的长篇技术写作——那些我们当初自己摸索时希望能存在的文章。',
    'about.title': '关于',
    'about.lede': 'Studio 是一家以研究驱动的技术公司。我们训练模型、打造产品、构建评估，并把学到的东西公开出来，让整个领域都能在其之上继续构建。',
    'contact.title': '联系我们',
    'contact.lede': '媒体、合作与研究协作事宜——选择对应的邮箱，我们会为你转接。',
    'contact.press': '媒体',
    'contact.pressDesc': '媒体咨询、 embargo 报道与访谈请求。',
    'contact.partners': '合作',
    'contact.partnersDesc': '产品、基础设施与渠道分发合作。',
    'contact.research': '研究',
    'contact.researchDesc': '研究协作、评估与学术咨询。',
    'article.related': '相关阅读',
    'article.back': '← 返回全部出版物',
    'footer.col.research': '研究',
    'footer.col.company': '公司',
    'footer.col.resources': '资源',
    'footer.rights': `© ${new Date().getFullYear()} Studio 研究院。保留所有权利。`,
    'toggle.hint': '切换语言',
  },
  en: {
    'nav.research': 'Research',
    'nav.news': 'News',
    'nav.publications': 'Publications',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'cta.contact': 'Get in touch',
    'home.lede':
      'Our research teams investigate the safety, inner workings, and societal impacts of AI systems — so that artificial intelligence has a positive impact as it becomes increasingly capable.',
    'home.teamsLabel': 'Research teams:',
    'news.title': 'News',
    'news.lede': 'Updates from our research teams: technical essays, evaluations, and field reports.',
    'pub.title': 'Publications',
    'pub.lede': 'The full archive of research, technical reports, and field studies from Studio.',
    'pub.search': 'Search',
    'pub.empty': 'No publications match your search.',
    'blog.title': 'Blog',
    'blog.lede':
      'Long-form technical writing from our engineers and researchers — the kind of post we wished existed when we were figuring this stuff out ourselves.',
    'about.title': 'About',
    'about.lede':
      'Studio is a research-driven technology company. We build models, products, and evaluations — and we publish what we learn so others can build on it.',
    'contact.title': 'Contact',
    'contact.lede':
      'Press, partnerships, and research collaboration inquiries — pick the right address and we will route your message.',
    'contact.press': 'Press',
    'contact.pressDesc': 'For media inquiries, embargoed coverage, and interview requests.',
    'contact.partners': 'Partnerships',
    'contact.partnersDesc': 'For product, infrastructure, and distribution partnerships.',
    'contact.research': 'Research',
    'contact.researchDesc': 'For research collaboration, evaluations, and academic inquiries.',
    'article.related': 'Related',
    'article.back': '← Back to all publications',
    'footer.col.research': 'Research',
    'footer.col.company': 'Company',
    'footer.col.resources': 'Resources',
    'footer.rights': `© ${new Date().getFullYear()} Studio Research. All rights reserved.`,
    'toggle.hint': 'Switch language',
  },
} as const;

export type UIKey = keyof (typeof ui)['zh'];