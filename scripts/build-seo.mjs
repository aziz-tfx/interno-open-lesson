#!/usr/bin/env node
// SEO/GEO-сборка лендинга «Дизайн интерьера»: node scripts/build-seo.mjs
//
// Источник правды — index.html: словарь dict (RU/UZ), META (title/description) и разметка. Скрипт:
//  1. заполняет тексты [data-i18n] русской версии и пишет SEO-блок <head> (title, description,
//     canonical, hreflang, Open Graph, JSON-LD: курс, школа, ментор, FAQ, хлебные крошки);
//  2. собирает узбекскую версию uz/index.html — отдельный URL, который индексируют Google, Яндекс и LLM
//     (текст, переключаемый скриптом на одной странице, поисковики не видят);
//  3. пишет sitemap.xml, robots.txt и llms.txt.
// Запускать после любой правки текстов в index.html. Зависимостей нет — только Node 18+.
// Vercel отдаёт файлы репозитория как есть (сборки нет), поэтому результат коммитится.

import {readFileSync, writeFileSync, mkdirSync} from 'node:fs';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://interior.internoedu.uz';
const SCHOOL = 'https://internoedu.uz';
const TODAY = new Date().toISOString().slice(0, 10);

const PHONE = '+998781131808';
const PHONE_HUMAN = '+998 78 113 18 08';
const SAME_AS = ['https://t.me/interno_school', 'https://instagram.com/interno.school'];
const OG_IMAGE = {path: '/hero/interior-d.jpg', width: 1920, height: 1080};
const MENTOR_IMG = '/mentor-asad.jpg';
const FAQ_COUNT = 8;
const CITY_KEYS = ['tsh', 'smr', 'frg'];
const CITIES_EN = ['Tashkent', 'Samarkand', 'Fergana'];

// Соседние курсы школы (ключ словаря ftr.c.* → поддомен)
const SIBLINGS = [
  ['arch', 'https://architecture.internoedu.uz/'],
  ['graphic', 'https://graphic.internoedu.uz/'],
  ['video', 'https://videomontaj.internoedu.uz/'],
  ['data', 'https://data.internoedu.uz/'],
  ['ai', 'https://ai.internoedu.uz/'],
  ['acc', 'https://buxgalteriya.internoedu.uz/'],
];

// Только факты со страницы (FAQ: 6 месяцев, 2 раза в неделю по 2 часа, сертификат с QR-кодом,
// карьерный центр; открытые уроки во всех 3 городах). Цены на странице нет — offers не пишем.
const LANGS = {
  ru: {
    path: '/', file: 'index.html', locale: 'ru_RU', home: `${SCHOOL}/`,
    course: 'Дизайн интерьера',
    courseDescription: 'Офлайн-курс дизайна интерьера INTERNO School в Ташкенте, Самарканде и Фергане: 6 месяцев, 2 раза в неделю по 2 часа, сертификат с QR-кодом, помощь карьерного центра с портфолио и первыми клиентами. Начните с бесплатного открытого урока: за 1 час — первый проект планировки квартиры в Revit.',
    workload: '2 раза в неделю по 2 часа',
    credential: 'Сертификат с QR-кодом',
    cities: ['Ташкент', 'Самарканд', 'Фергана'],
  },
  uz: {
    path: '/uz/', file: 'uz/index.html', locale: 'uz_UZ', home: `${SCHOOL}/uz/`,
    course: 'Interyer dizayni',
    courseDescription: 'INTERNO School’ning Toshkent, Samarqand va Farg‘onadagi oflayn interyer dizayni kursi: 6 oy, haftada 2 marta, 2 soatdan, QR-kodli sertifikat, karyera markazi portfolio va birinchi mijozlarni topishda yordam beradi. Bepul ochiq darsdan boshlang: 1 soatda Revitda kvartira rejasining birinchi loyihasi.',
    workload: 'Haftada 2 marta, 2 soatdan',
    credential: 'QR-kodli sertifikat',
    cities: ['Toshkent', 'Samarqand', 'Farg‘ona'],
  },
};

// ---------- словарь и META из index.html ----------
const srcPath = join(ROOT, 'index.html');
const src = readFileSync(srcPath, 'utf8');
const dictMatch = src.match(/const dict = (\{[\s\S]*?\n\});/);
if (!dictMatch) throw new Error('dict не найден в index.html');
const dict = new Function(`return (${dictMatch[1]})`)();
const metaMatch = src.match(/var META = (\{[\s\S]*?\n  \});/);
if (!metaMatch) throw new Error('META не найден в index.html');
const META = new Function(`return (${metaMatch[1]})`)();
const citiesMatch = src.match(/const cityNames = (\{[\s\S]*?\n\});/);
const cityNames = new Function(`return (${citiesMatch[1]})`)();
for (const l of Object.keys(LANGS)) {
  const miss = Object.keys(dict.ru).filter(k => !(k in dict[l]));
  if (miss.length) throw new Error(`В словаре ${l} нет ключей: ${miss.join(', ')}`);
  if (!META[l]) throw new Error(`Нет META.${l}`);
}

// ---------- утилиты ----------
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const plain = html => String(html).replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
// Значения словаря — HTML (applyLang кладёт их в innerHTML); экранируем только «голые» &.
const ampFix = html => String(html).replace(/&(?![a-zA-Z]+;|#\d+;|#x[0-9a-fA-F]+;)/g, '&amp;');
const abs = path => SITE + path;

// Границы содержимого элемента, открывающий тег которого начинается в позиции `start`
// (с учётом вложенности одноимённых тегов).
function elementBounds(html, start) {
  const open = html.slice(start).match(/^<([a-zA-Z0-9]+)\b[^>]*>/);
  const tag = open[1].toLowerCase();
  const innerStart = start + open[0].length;
  const re = new RegExp(`<(/?)${tag}\\b[^>]*>`, 'gi');
  re.lastIndex = innerStart;
  let depth = 1, m;
  while ((m = re.exec(html))) {
    depth += m[1] ? -1 : 1;
    if (!depth) return {innerStart, innerEnd: m.index};
  }
  throw new Error(`Не закрыт <${tag}> на позиции ${start}`);
}
const setAttr = (tag, name, value) => {
  const re = new RegExp(`\\s${name}="[^"]*"`);
  return re.test(tag) ? tag.replace(re, ` ${name}="${esc(value)}"`) : tag.replace(/\s*\/?>$/, m => ` ${name}="${esc(value)}"${m}`);
};

// Переводит разметку <body> словарём языка lang — то же, что делает applyLang() в браузере
// (вариант A героя: ключи «@b» A/B-теста применяются только в браузере).
function translateBody(html, lang) {
  const t = dict[lang];
  const bodyStart = html.search(/^<body\b/m); // не путать с «<body>» в комментариях скриптов
  const bodyEnd = html.lastIndexOf('</body>');
  let body = html.slice(bodyStart, bodyEnd);
  const get = k => { if (!(k in t)) throw new Error(`Нет ключа ${k}`); return t[k]; };

  // атрибуты
  body = body.replace(/<[a-zA-Z][^>]*\sdata-i18n-(alt|aria|href)="[^"]+"[^>]*>/g, tag => {
    for (const [, kind, key] of tag.matchAll(/data-i18n-(alt|aria|href)="([^"]+)"/g)) {
      const v = kind === 'href' ? get(key) : plain(get(key));
      tag = setAttr(tag, {alt: 'alt', aria: 'aria-label', href: 'href'}[kind], v);
    }
    return tag;
  });
  // содержимое: идём с конца, чтобы не сбивать позиции
  const hits = [...body.matchAll(/<[a-zA-Z][^>]*\sdata-i18n="([^"]+)"[^>]*>/g)].reverse();
  for (const h of hits) {
    const {innerStart, innerEnd} = elementBounds(body, h.index);
    body = body.slice(0, innerStart) + ampFix(get(h[1])) + body.slice(innerEnd);
  }
  // города: бейдж героя и <select> (по умолчанию — Ташкент, как в applyLang)
  body = body
    .replace(/(<span class="city-name">)[^<]*(<\/span>)/g, `$1${cityNames[lang].tsh}$2`)
    .replace(/(<option value="(tsh|smr|frg)">)[^<]*(<\/option>)/g, (m, a, code, b) => a + cityNames[lang][code] + b);
  // активный язык в переключателе
  body = body.replace(/<a class="lang__btn[^"]*" data-lang="(ru|uz)"/g, (m, l) =>
    `<a class="lang__btn${l === lang ? ' is-active' : ''}" data-lang="${l}"`);
  return html.slice(0, bodyStart) + body + html.slice(bodyEnd);
}

// /uz/index.html лежит на уровень глубже: относительные пути → от корня сайта
const rootPaths = html => html.replace(/(\s(?:src|href|srcset|poster|data-video-src)=")([^"]*)"/g, (m, a, v) =>
  /^(\/|#|[a-zA-Z][a-zA-Z0-9+.-]*:)/.test(v) || v === '' ? m : `${a}/${v}"`);

// ---------- JSON-LD ----------
function jsonLd(lang) {
  const L = LANGS[lang], t = dict[lang], url = abs(L.path);
  const orgId = `${SCHOOL}/#org`, courseId = `${SITE}/#course`, mentorId = `${SITE}/#mentor-asad`;
  const places = CITY_KEYS.map((k, i) => ({
    '@type': 'Place',
    name: `INTERNO School — ${L.cities[i]}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: plain(t[`ftr.addr.${k}`]).split(' · ').slice(1).join(' · '),
      addressLocality: CITIES_EN[i],
      addressCountry: 'UZ',
    },
  }));
  const graph = [
    {
      '@type': 'EducationalOrganization',
      '@id': orgId,
      name: 'INTERNO School',
      url: `${SCHOOL}/`,
      telephone: PHONE,
      sameAs: SAME_AS,
    },
    {
      '@type': 'Course',
      '@id': courseId,
      name: L.course,
      description: L.courseDescription,
      url,
      inLanguage: ['ru', 'uz'],
      provider: {'@id': orgId},
      image: abs(OG_IMAGE.path),
      timeRequired: 'P6M',
      educationalCredentialAwarded: L.credential,
      hasCourseInstance: places.map(p => ({
        '@type': 'CourseInstance',
        courseMode: 'Onsite',
        courseWorkload: L.workload,
        location: p,
      })),
    },
    {
      '@type': 'Person',
      '@id': mentorId,
      name: plain(t['mc.name']),
      jobTitle: plain(t['m.role']),
      image: abs(MENTOR_IMG),
      worksFor: {'@id': orgId},
      knowsAbout: ['Revit', 'AutoCAD', L.course],
      description: [1, 2, 3, 4].map(i => plain(t[`m.l${i}`])).join('. ') + '.',
    },
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: META[lang].title,
      description: META[lang].desc,
      inLanguage: lang,
      about: {'@id': courseId},
      mentions: {'@id': mentorId},
      publisher: {'@id': orgId},
      primaryImageOfPage: abs(OG_IMAGE.path),
      breadcrumb: {'@id': `${url}#breadcrumb`},
      dateModified: TODAY,
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        {'@type': 'ListItem', position: 1, name: 'INTERNO School', item: L.home},
        {'@type': 'ListItem', position: 2, name: L.course, item: url},
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      inLanguage: lang,
      mainEntity: Array.from({length: FAQ_COUNT}, (_, i) => ({
        '@type': 'Question', name: plain(t[`faq.q${i + 1}`]),
        acceptedAnswer: {'@type': 'Answer', text: plain(t[`faq.a${i + 1}`])},
      })),
    },
  ];
  const json = JSON.stringify({'@context': 'https://schema.org', '@graph': graph}, null, 1);
  JSON.parse(json);
  return json.replace(/</g, '\\u003c');
}

// ---------- <head> ----------
function seoHead(lang) {
  const L = LANGS[lang], url = abs(L.path), M = META[lang];
  const alt = Object.entries(LANGS).map(([l, x]) => `<link rel="alternate" hreflang="${l}" href="${abs(x.path)}" />`);
  const ogAlt = Object.entries(LANGS).filter(([l]) => l !== lang).map(([, x]) => `<meta property="og:locale:alternate" content="${x.locale}" />`);
  return `<!-- seo:start — блок генерирует scripts/build-seo.mjs, правки вносите там (тексты — в META/dict) -->
<title>${esc(M.title)}</title>
<meta name="description" content="${esc(M.desc)}" />
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
<link rel="canonical" href="${url}" />
${alt.join('\n')}
<link rel="alternate" hreflang="x-default" href="${abs('/')}" />
<link rel="icon" href="/favicon.ico" sizes="48x48" />
<link rel="icon" href="/icon.svg" type="image/svg+xml" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="INTERNO School" />
<meta property="og:url" content="${url}" />
<meta property="og:title" content="${esc(M.title)}" />
<meta property="og:description" content="${esc(M.desc)}" />
<meta property="og:image" content="${abs(OG_IMAGE.path)}" />
<meta property="og:image:width" content="${OG_IMAGE.width}" />
<meta property="og:image:height" content="${OG_IMAGE.height}" />
<meta property="og:image:alt" content="${esc(plain(dict[lang]['hero.alt']))}" />
<meta property="og:locale" content="${L.locale}" />
${ogAlt.join('\n')}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${esc(M.title)}" />
<meta name="twitter:description" content="${esc(M.desc)}" />
<meta name="twitter:image" content="${abs(OG_IMAGE.path)}" />
<script type="application/ld+json">
${jsonLd(lang)}
</script>
<!-- seo:end -->`;
}
const withHead = (html, lang) => {
  if (!/<!-- seo:start[\s\S]*?<!-- seo:end -->/.test(html)) throw new Error('Нет маркеров seo:start/seo:end');
  return html.replace(/<!-- seo:start[\s\S]*?<!-- seo:end -->/, () => seoHead(lang));
};

// ---------- страницы ----------
const ru = withHead(translateBody(src, 'ru'), 'ru').replace(/<html lang="[a-z]+">/, '<html lang="ru">');
writeFileSync(srcPath, ru);

let uz = rootPaths(withHead(translateBody(ru, 'uz'), 'uz').replace('<html lang="ru">', '<html lang="uz">'));
uz = uz.replace('<!-- seo:start', '<!-- СГЕНЕРИРОВАНО scripts/build-seo.mjs из index.html — не редактируйте вручную -->\n<!-- seo:start');
mkdirSync(join(ROOT, 'uz'), {recursive: true});
writeFileSync(join(ROOT, 'uz/index.html'), uz);

// ---------- sitemap.xml ----------
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${Object.values(LANGS).map(L => `  <url>
    <loc>${abs(L.path)}</loc>
    <lastmod>${TODAY}</lastmod>
${Object.entries(LANGS).map(([l, x]) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${abs(x.path)}"/>`).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs('/')}"/>
  </url>`).join('\n')}
</urlset>
`;
writeFileSync(join(ROOT, 'sitemap.xml'), sitemap);

// ---------- robots.txt ----------
// Поисковые и AI-краулеры пускаем явно: ответы ChatGPT, Claude, Perplexity, Gemini, Алисы
// строятся на том, что эти боты смогли прочитать.
const AI_BOTS = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-User', 'Claude-SearchBot',
  'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'Applebot',
  'Bingbot', 'YandexBot', 'YandexAdditional', 'YandexAdditionalBot', 'DuckAssistBot',
  'meta-externalagent', 'Amazonbot', 'MistralAI-User', 'CCBot',
];
const robots = `# INTERNO School — курс «Дизайн интерьера» — ${SITE}
User-agent: *
Allow: /
Disallow: /api/

${AI_BOTS.map(b => `User-agent: ${b}`).join('\n')}
Allow: /
Disallow: /api/

# Яндекс: UTM и клик-ID не создают дублей страниц
Clean-param: utm_source&utm_medium&utm_campaign&utm_content&utm_term&fbclid&gclid&yclid

Sitemap: ${SITE}/sitemap.xml
`;
writeFileSync(join(ROOT, 'robots.txt'), robots);

// ---------- llms.txt (https://llmstxt.org) ----------
function llmsBlock(lang) {
  const t = dict[lang], L = LANGS[lang], p = k => plain(t[k]);
  const addr = CITY_KEYS.map(k => `- ${p(`ftr.addr.${k}`)}`);
  const h = lang === 'ru'
    ? {facts: 'Ключевые факты', lesson: 'Бесплатный открытый урок (60 минут)', get: 'Что вы получите на уроке', addr: 'Адреса',
       mentor: 'Спикер открытого урока', faq: 'Частые вопросы', school: 'Другие курсы INTERNO School', contacts: 'Контакты',
       f: [`Формат: офлайн; города: ${L.cities.join(', ')}`,
           'Основной курс: 6 месяцев, 2 раза в неделю по 2 часа; сертификат с QR-кодом; карьерный центр помогает с портфолио и первыми клиентами',
           'Стоимость основного курса зависит от формата и города — её и условия рассрочки называют на открытом уроке',
           `Первый шаг — бесплатный открытый урок; запись на ${abs(L.path)} или по телефону ${PHONE_HUMAN}`,
           `О школе (по данным страницы): ${p('ftr.about')} ${p('hero.social')}`]}
    : {facts: 'Asosiy faktlar', lesson: 'Bepul ochiq dars (60 daqiqa)', get: 'Darsda nima olasiz', addr: 'Manzillar',
       mentor: 'Ochiq dars spikeri', faq: 'Ko‘p so‘raladigan savollar', school: 'INTERNO School’ning boshqa kurslari', contacts: 'Aloqa',
       f: [`Format: oflayn; shaharlar: ${L.cities.join(', ')}`,
           'Asosiy kurs: 6 oy, haftada 2 marta, 2 soatdan; QR-kodli sertifikat; karyera markazi portfolio va birinchi mijozlarni topishda yordam beradi',
           'Asosiy kurs narxi format va shaharga bog‘liq — narx va bo‘lib to‘lash shartlari ochiq darsda aytiladi',
           `Birinchi qadam — bepul ochiq dars; yozilish: ${abs(L.path)} yoki ${PHONE_HUMAN}`,
           `Maktab haqida (sahifa ma’lumotlari): ${p('ftr.about')} ${p('hero.social')}`]};
  return [
    `## ${h.facts}`, '', ...h.f.map(x => `- ${x}`), '',
    `## ${h.lesson}`, '', ...[1, 2, 3, 4, 5].map(i => `- ${p(`t${i}.t`)} — ${p(`t${i}.d`)}`), `- ${p('prog.note')}`, '',
    `## ${h.get}`, '', ...[1, 2, 3, 4, 5].map(i => `- ${p(`ben.b${i}`)}`), '',
    `## ${h.addr}`, '', ...addr, '',
    `## ${h.mentor}`, '', `- ${p('mc.name')} — ${p('m.role')}. ${[1, 2, 3, 4].map(i => p(`m.l${i}`)).join('; ')}.`, '',
    `## ${h.faq}`, '', ...Array.from({length: FAQ_COUNT}, (_, i) => `### ${p(`faq.q${i + 1}`)}\n\n${p(`faq.a${i + 1}`)}\n`),
    `## ${h.school}`, '', `- [${p('ftr.all')}](${p('ftr.allHref')})`, ...SIBLINGS.map(([k, href]) => `- [${p(`ftr.c.${k}`)}](${href})`), '',
    `## ${h.contacts}`, '', `- ${PHONE_HUMAN}`, ...SAME_AS.map(u => `- ${u}`), `- ${abs(L.path)}`, '',
  ].join('\n');
}
const llms = `# INTERNO School — курс «Дизайн интерьера»

> ${LANGS.ru.courseDescription}

> ${LANGS.uz.courseDescription}

- [Русская версия](${abs('/')})
- [O‘zbekcha versiya](${abs('/uz/')})
- [INTERNO School — все курсы](${SCHOOL}/)

${llmsBlock('ru')}
---

# INTERNO School — «Interyer dizayni» kursi

${llmsBlock('uz')}`;
writeFileSync(join(ROOT, 'llms.txt'), llms);

console.log(`Готово: index.html, uz/index.html, sitemap.xml, robots.txt, llms.txt (${TODAY})`);
