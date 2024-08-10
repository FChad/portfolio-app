// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/i18n', '@nuxt/ui', '@nuxtjs/sitemap', '@nuxtjs/robots'],

  site: {
    url: 'https://www.chad.lu',
    name: 'Feierstein Chad - Portfolio',
  },

  app: {
    head: {
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/img/favicon/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/img/favicon/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/img/favicon/favicon-16x16.png'
        },
        {
          rel: 'manifest',
          href: '/img/favicon/site.webmanifest'
        }
      ]
    }
  },

  ui : {
    icons: ['mdi'],
  },

  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    baseUrl: 'https://www.chad.lu',
    locales: [
      {
        code: "lb",
        iso: "lb",
        name: "Lëtzebuergesch",
        file: "lb.json"
      },
      {
        code: "de",
        iso: "de",
        name: "Deutsch",
        file: "de.json"
      },
      {
        code: "fr",
        iso: "fr",
        name: "Français",
        file: "fr.json"
      },
      {
        code: "en",
        iso: "en",
        name: "English",
        file: "en.json"
      }
    ],
    defaultLocale: 'lb'
  },

  compatibilityDate: '2024-08-10'
})