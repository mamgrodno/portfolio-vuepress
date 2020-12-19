const config = require('../config.json');

module.exports = {
  // plugins: [
  //   ['@vuepress/blog', {
  //     directories: [
  //       {
  //         id: 'tag',
  //         dirname: 'projects',
  //         path: '/',
  //         pagination: {
  //            lengthPerPage: 2,
  //          },
  //       },
  //     ],
  //   }]
  // ],
  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    },

  ]],
  locales: {
    '/': {
      lang: 'ru-RU'
    }
  },
  title: config.title,
  description: config.description,
  base: "/",
  themeConfig: {
    logo: config.logo,
    footer: config.footer,
    nav: config.navigation,
    media: config.media,
    footer_text: config.footer_text,
    filters: config.filters,
    keywords: config.keywords
  },
  head: [
    ['meta', { property: "og:title", content: config.title }],
    ['meta', { property: "og:description", content: config.description }],
    ['meta', { property: "og:image", content: 'https://www.mamgrodno.com'+config.logo }],
    ['meta', { property: "og:url", content: "www.mamgrodno.com" }],
    ['meta', { name: "keywords", content: config.keywords }],
    ['link', { rel: "icon", href: config.favicon }],
    ['script', {type: "text/javascript"}, '(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(70005481, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true});']
  ],
  markdown: {
    anchor: {
      permalink: false
    }
  },
};
