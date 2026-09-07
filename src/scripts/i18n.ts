import { ui, defaultLang, type Lang } from '../i18n/ui';

function readLang(): Lang {
  const stored = localStorage.getItem('lang');
  return stored === 'zh' || stored === 'en' ? stored : defaultLang;
}

function applyLang(lang: Lang): void {
  const root = document.documentElement;
  root.lang = lang;
  root.dataset.lang = lang;

  // Swap short UI strings tagged with data-i18n.
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n as keyof (typeof ui)['zh'];
    const text = ui[lang][key];
    if (text) el.textContent = text;
  });

  // The toggle always shows the *other* language.
  const toggle = document.querySelector<HTMLElement>('[data-lang-toggle]');
  if (toggle) toggle.textContent = lang === 'zh' ? 'EN' : '中文';
}

function init(): void {
  const lang = readLang();
  applyLang(lang);

  const toggle = document.querySelector<HTMLElement>('[data-lang-toggle]');
  toggle?.addEventListener('click', () => {
    const next: Lang = readLang() === 'zh' ? 'en' : 'zh';
    localStorage.setItem('lang', next);
    applyLang(next);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}