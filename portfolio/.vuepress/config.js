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
    }]
  ],
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
  },
  head: [
    ['link', { rel: "icon", href: config.favicon }]
  ],
  markdown: {
    anchor: {
      permalink: false
    }
  },
};
