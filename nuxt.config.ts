// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/i18n', '@nuxt/ui'],
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }
      ],
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
        },
        {
          rel: 'canonical',
          href: 'https://www.chad.lu/'
        }
      ]
    }
  },
  ui: {
    icons: ['mdi']
  },
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "no_prefix",
    baseUrl: 'https://www.chad.lu',
    locales: [
      {
        code: "en",
        iso: "en",
        name: "English",
        file: "en.json"
      },
      {
        code: "de",
        iso: "de",
        name: "Deutsch",
        file: "de.json"
      },
      {
        code: "lb",
        iso: "lb",
        name: "Lëtzebuergesch",
        file: "lb.json"
      },
      {
        code: "fr",
        iso: "fr",
        name: "Français",
        file: "fr.json"
      }
    ],
    defaultLocale: 'lb'
  }
})
