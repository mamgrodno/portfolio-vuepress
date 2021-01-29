const config = require('../config.json');

module.exports = {
  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    },

  ]],
  // locales: {
  //   '/': {
  //     lang: 'ru-RU'
  //   }
  // },
  title: config.title,
  description: config.description,
  keywords: config.keywords,
  base: "/",
  themeConfig: {
    logo: config.logo,
    footer: config.footer,
    nav: config.navigation,
    media: config.media,
    footer_text: config.footer_text,
    filters: config.filters,
  },
  head: [
    ['meta', { name: "keywords", content: config.keywords }],
    ['meta', { name: "description", content: config.description }],
    ['link', { rel: "icon", href: config.favicon }],
    ['link', { rel: "image_src", href: config.logo }],
    ['script', {type: "text/javascript"}, '(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(70005481, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true});']
  ],
  markdown: {
    anchor: {
      permalink: false
    }
  },
};
