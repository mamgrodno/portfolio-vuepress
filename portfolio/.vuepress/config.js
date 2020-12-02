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
    filters: config.filters
  },
  head: [
    ['link', { rel: "icon", href: config.favicon }],
    ['script src="https://www.googletagmanager.com/gtag/js?id=G-57NQ6SQ7C3"', {}],
    ['script', {}, "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-57NQ6SQ7C3');"]
  ],
  markdown: {
    anchor: {
      permalink: false
    }
  },
};
